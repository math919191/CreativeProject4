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
    jsonID: String,

  });

  //const Book = mongoose.model('Book', bookSchema);
  const Book = mongoose.model('completedBook', completedBookSchema);


  app.put('/api/books/:id', async (req, res) => {
    try {
      
      let book = await Book.findOne({
        _id: req.params.id
      });
      if (req.body.whichList == 'completed'){
          book.inCompletedList = true;
      } else if (req.body.whichList == 'favorites'){
          book.inFavorites = true;
      } else if (req.body.whichList == 'booksToRead'){
          book.inReadingList = true;
      } 
      
      await book.save();
      res.sendStatus(200);
      
    } catch (error){
      console.log(error);
      res.sendStatus(500);    
    }
  });
    
  app.put('/api/books/remove/:id', async (req, res) => {
    try {
      
      let book = await Book.findOne({
        _id: req.params.id
      });
      console.log(book.title);
      console.log(req.body.whichList);
      if (req.body.whichList == 'completed'){
          book.inCompletedList = false;
      } else if (req.body.whichList == 'favorites'){
          book.inFavorites = false;
      } else if (req.body.whichList == 'booksToRead'){
          book.inReadingList = false;
      } 
      
      console.log(book.title);
      console.log(book.inCompletedList);
      
      await book.save();

      console.log(book.inCompletedList, book.inFavorites, book.inReadingList);


      if (book.inCompletedList == false && book.inFavorites == false && book.inReadingList == false ){
        //delete the book if it's not in any lists
        await Book.deleteOne({
          _id: req.params.id,
        });
      }

      res.send(book._id);
      
    } catch (error){
      console.log(error);
      res.sendStatus(500);    
    }
  });


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
      jsonID: req.body.result.id
    });

    try {
      book.save();
      res.send(book);
      //res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });
  
  app.get('/api/books/:jsonID', async (req, res) =>{
    try {
      
      let myBook = await Book.findOne({
        jsonID: req.params.jsonID,
      });
      if (myBook == null){
        res.send(false);
      } else {
        res.send(myBook._id);
      }

    } catch {
      console.log(error);
      res.sendStatus(500);
    }


  });

  app.get('/api/allbooks', async (req, res) =>{
    try {
      
      let books = await Book.find();
      res.send(books);

    } catch {
      console.log(error);
      res.sendStatus(500);
    }


  });


  app.delete('/api/books/:id', async (req, res) => {
    try {
      
      await Book.deleteOne({
        _id: req.params.id,
      });
  
      res.sendStatus(200);
  
    } catch (error){
      console.log(error);
      res.sendStatus(500);    
    };
  
  });

  app.listen(3000, () => console.log('Server listening on port 3000!'));
