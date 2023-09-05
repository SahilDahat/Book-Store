import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
      },
      author: {
        type: String,
        required: true,
      },
      publishYear: {
        type: Number,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );
  
export const Book = mongoose.model('Book', bookSchema);

/*
Mongo DB - Database
Mongoose is a object data modelling library for mongodb, it allows easy interaction with mongodb with JS Commands.
Reference: https://mongoosejs.com/

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
*/