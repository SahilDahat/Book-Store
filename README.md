# Book-Store

**STEPS**:

1. After the fresh install of the code in your local computer, use npm install (if it is not working then cd into both frontend & backend files, then npm install individually).

2. When the project is setup completely, use cd backend & start the server by using npm run dev. nodemon will start working, and two messages should be shown - App connected to database, App is listening to port: 5555.
NOTE: PORT CAN BE CHANGED...(swaad anusar)
3. If the messages are not shown, then one of the following error might have occured:
   `MongooseServerSelectionError: Could not connect to any servers in your MongoDB Atlas cluster. One common reason is that you're trying to access the database from an IP that isn't whitelisted. Make sure your current IP address is on your Atlas cluster's IP whitelist: https://www.mongodb.com/docs/atlas/security-whitelist/`

4. Here, firstly insert the `mongoDBURL` in the `...\backend\config.js`.
then check the mongoDB website where you have created your MongoDB Atlas Cluster (example of the website: cloud.mongodb.com/v2/something).

5. Go to network access in security section & using `https://www.whatismyip.com/` make sure that your current IP is present in the list.

6. This should mostly solve the issue with the servers. If not try using postman, & try to establish connections.
![Alt text](<Screenshot 2023-09-06 094103.jpg>)

7. Some other problem may persist such as parsing problems, which are still an issue for me to solve.

8. Now, after the server has started use cd frontend in a new terminal & use npm run dev.

9. vite app will start at `http://localhost:5173/` & server at `http://localhost:5555/` & `http://localhost:5555/books`.

10. ![Alt text](<Screenshot 2023-09-06 094616.jpg>)

reference file: https://www.youtube.com/watch?v=-42K44A1oMA&t=632s

TIPS:
1. check Atlas cluster & nodemon are properly running.
2. import i
3. ![image](https://github.com/SahilDahat/Book-Store/assets/90909938/54178e89-ede3-46d6-af7b-67413004a5e8)

4. Local host are:
   For backend: http://localhost:5555 & http://localhost:5555/books
   For Frontend: http://localhost:5173/
