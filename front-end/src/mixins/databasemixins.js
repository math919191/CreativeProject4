import axios from 'axios'

export const databasemixins = {

    data() {
        return {
          allBooks: [],
          myList: [],       
        }
    },

    computed: {

    },

    methods: {
      
      async getAllBooks(){
        try {
            let myBooks = await axios.get('/api/allbooks');
            return myBooks;
        } catch (error){
            console.log(error);
        }
      },
      
      async removeFromList(whichList, whichBook){
        try {
            
            this.whichList = whichList;
            await axios.put("/api/books/remove/" + whichBook._id, {
                whichList: this.whichList,
            });

            return true;
        } catch (error) {
            console.log(error)
        }
      },

      async getAllBooksFromList(whichList){
        try {
          let myBooks = await this.getAllBooks();
          this.allBooks = myBooks.data;
          
          let thisList = [];
          if (whichList == 'completed'){
            thisList = this.allBooks.filter(book => book.inCompletedList == true);
          } else if (whichList == 'favorites'){
            thisList = this.allBooks.filter(book => book.inFavorites == true);
          } else if (whichList == 'readingList'){
            thisList = this.allBooks.filter(book => book.inReadingList == true);
          } 
          return thisList;

        } catch (error) {
            console.log(error);

        }
      },

      async addToList(myList, result){       
        try {
            await axios.put("/api/books/" + result._id, { 
                whichList: myList,
            });
            return true;
        } catch (error){
            console.log(error);
        }
      },

      async edit(){
        
      }

      


    
    }
  }