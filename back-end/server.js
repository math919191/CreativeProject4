const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

const myUrl = "mongodb+srv://math919191:mongoPassword@cluster0.dwigb.mongodb.net/MyCompletedBooks?retryWrites=true&w=majority";

// connect to the database
mongoose.connect(myUrl, {
  useNewUrlParser: true
});

// Create a scheme for items in the museum: a title and a path to an image.
// const bookSchema = new mongoose.Schema({
//     title: String,
//     //description: String,
//     //jsonObject: String,
//   });

  const completedBookSchema = new mongoose.Schema({
    title: String,
    author: Array,
    description: String,
    coverImage: String, //holds the api string to image
    dateCompleted: String,
    notes: Array,
    numOfStars: Number,
    ranking: Number,
    inFavorites: Boolean,
    inReadingList: Boolean,
    inCompletedList: Boolean,

  });

  //const Book = mongoose.model('Book', bookSchema);
  const Book = mongoose.model('completedBook', completedBookSchema);

  
// Create a new item in the museum: takes a title and a path to an image.
/*app.post('/api/books', async (req, res) => {
    const book = new Book({
      title: req.body.title,
      //description: req.body.description,
      //jsonObject: req.body.jsonObject,
    });
    try {
      await book.save();
      res.send(book);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }); */


  app.post('/api/books', async (req, res) => {
    const book = new Book({
      title: req.body.result.volumeInfo.title,
      author: req.body.result.volumeInfo.authors,
      description: req.body.result.volumeInfo.description,
      coverImage: req.body.result.volumeInfo.imageLinks.thumbnail, //holds the api string to image
      dateCompleted: "",
      notes: [],
      numOfStars: 0,
      ranking: 0,
      inFavorites: false,
      inReadingList: false,
      inCompletedList: false,
    });

    try {
      await book.save();
      res.send(book);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });
  
  app.listen(3000, () => console.log('Server listening on port 3000!'));