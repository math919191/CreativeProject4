const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

const myUrl = "mongodb+srv://math919191:mongoPassword@cluster0.dwigb.mongodb.net/CompletedBooks?retryWrites=true&w=majority";

// connect to the database
mongoose.connect(myUrl, {
  useNewUrlParser: true
});

// Create a scheme for items in the museum: a title and a path to an image.
const bookSchema = new mongoose.Schema({
    title: String,
    //description: String,
    //jsonObject: String,
  });

  const Book = mongoose.model('Book', bookSchema);


  
// Create a new item in the museum: takes a title and a path to an image.
app.post('/api/books', async (req, res) => {
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
  });

  
  app.listen(3000, () => console.log('Server listening on port 3000!'));