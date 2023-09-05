// 1
import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
//import { Book } from './models/bookModel.js'; //added
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

//2
const app = express();

//6
// Middleware for parsing request body
app.use(express.json());

//12
// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());
// Option 2: Allow Custom Origins - BETTER - When using with react initially use method 1 
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );

//3
app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Welcome To MERN Stack Tutorial');
});

//11
app.use('/books', booksRoute);

/* CORS POLICY: CROSS ORIGIN RESOURCE SHARING
    CORS is a security mechanism in browsers that restricts the ability of a web page to make request to a 
    different domain.
    It is a web security mechanism that prevents unauthorized cross origin access to a resource/server.
    When a web page makes a request to a different domain, the browser sends a request to the target server, 
    the server will check if the request is permitted or not,
    Server can check origin, methods, headers & allow or deny the requests.
 */




    /*


//5
app.post('/books', async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response.status(400).send({
        message: 'Send all required fields: title, author, publishYear',
      });
    }
    const newBook = {
      title: request.body.title,
      author: request.body.author,
      publishYear: request.body.publishYear,
    };

    const book = await Book.create(newBook);

    return response.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});
//For testing the post method, postman is used. Postman is a good tool for working with APIs. 
//To create a new book with postman, open a new request.
//comment the below file before removing the big comment...
  TEST INPUT:
    {
    "title": "eubfrbrujvu",
    "author": "jdnje",
    "publishYear": 5245
    }

    TEST OUTPUT:
    {
    "title": "eubfrbrujvu",
    "author": "jdnje",
    "publishYear": 5245,
    "_id": "64f5dfc80c7d6c175a7e0c12",
    "createdAt": "2023-09-04T13:46:48.067Z",
    "updatedAt": "2023-09-04T13:46:48.067Z",
    "__v": 0
    }

//There is problem causing postman to not recognize the server. Cannot read properties of undefined (reading 'title')
//To fix this, add a middleware to parse the request body, for this we use //6

//7
// Route for Get All Books from database
app.get('/books', async (request, response) => {
  try {
    const books = await Book.find({}); //passed empty object to get list of all books in books.

    //return response.status(201).json(books);
    return response.status(200).json({
      count: books.length,
      data: books,
    });

  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//8
// Route for Get One Book from database by id
app.get('/books/:id', async (request, response) => {
  // to add a parameter in route '/books' we use : before paramters (this makes id a parameter that we would need to pass).
  try {
    const { id } = request.params; //destructing id using request parameters.

    const book = await Book.findById(id); //findById is used here...

    return response.status(200).json(book); //return the book to the client side.
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//9
// Route for Update a Book
app.put('/books/:id', async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response.status(400).send({
        message: 'Send all required fields: title, author, publishYear',
      });
    }

    const { id } = request.params;

    const result = await Book.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: 'Book not found' });
    }

    return response.status(200).send({ message: 'Book updated successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//10
// Route for Delete a book
app.delete('/books/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Book.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: 'Book not found' });
    }

    return response.status(200).send({ message: 'Book deleted successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});


*/


//4
mongoose.connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

  /* 
  ERROR: MongooseServerSelectionError: Could not connect to any servers in your MongoDB Atlas cluster. 
  One common reason is that you're trying to access the database from an IP that isn't whitelisted. 
  Make sure your current IP address is on your Atlas cluster's IP 
  whitelist: https://www.mongodb.com/docs/atlas/security-whitelist/
  
  The IP address of the computer from which the Mongo DB Atlas is used should be included in the list
    STEPS: 1. go to the Network Access section in the Security section.
    2. Add your IP address from https://www.whatismyip.com/
    3. This is good to go as of 09/23
  */