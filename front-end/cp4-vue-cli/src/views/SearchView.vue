<template>
    <div>  
        <h1>Search</h1>
        <input placeholder="Search for a Book" type="text" v-model="userSearch">
        <button @click="search()">Search</button>
        <button @click="getAllBooks()">GET ALL THOSE BOOKS</button>
        
        <div class="image" v-for="result in searchResults" :key="result.id">
            <h2>{{result.volumeInfo.title}}</h2>
            <p>{{result.volumeInfo.authors}}</p>
            <button @click="addToDatabase(result)">Add To Database</button>
            <button @click="addToList('completed', result)">Add To Completed List</button>
            <button @click="addToList('favorites', result)">Add To Favorites List</button>
            <button @click="addToList('booksToRead', result)">Add To Books To Read List</button>
            <button @click="removeFromList('completed', result)">Remove Completed</button>
            <button @click="removeFromList('favorites', result)">Remove Favorites</button>
            <button @click="removeFromList('booksToRead', result)">Remove Reading List</button>
            
        </div>
        

    </div>
          
</template>

<script>
import axios from "axios"
export default {
    name: "Search", 
    
    data() {
        return {
            searchResults: [],
            KEY: "AIzaSyC3b16m7c_Z258vd4Q-KlwVcoH__WIJa44",
            userSearch: "",
            addItem: null,
            result: "",
            whichList: "",
            bookID: null,
            jsonID: null,
            
        }
    },
    
    methods: {
        async search() {
            try {
                let myurl = "https://www.googleapis.com/books/v1/volumes?q=" + this.userSearch + "&key=" + this.KEY;
                let response = await axios.get(myurl);
                this.searchResults = response.data.items;
                return true;
            } catch (error) {
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

        async addToList(whichList, result){
            //if it's not already in the database add it to the database
            await this.getIdIfInDatabase(result.id);
            if (this.inDatabase.data != false){
                this.bookID = this.inDatabase.data;
            } else {
                await this.addToDatabase(result);
            }
            
            this.whichList = whichList;
             
            try {
                await axios.put("/api/books/" + this.bookID, {
                    whichList: this.whichList,
                });
                this.bookID = null;
                //this.findItem = null;
                //this.getItems();
                return true;

            } catch (error){
                console.log(error);
            }
        },

        async getAllBooks(){
            try {
                let myBooks = await axios.get('/api/allbooks');
                return myBooks;
            } catch (error){
                console.log(error);

            }
        },

        
        async getIdIfInDatabase(jsonID){
            try {
                console.log("givenJSON", jsonID);
                this.jsonID = jsonID;
                let response = await axios.get("/api/books/" + this.jsonID)
                
                this.inDatabase = response;
                return response;
            } catch (error){
                console.log(error);
            }
        },

        async addToDatabase(result) {
            
            this.result = result;
        
            try {

                let r2 = await axios.post('/api/books', {
                    result: this.result,
                });
                this.addItem = r2.data;
            
                this.bookID = r2.data._id;
            } catch (error){
                console.log(error);
            }
        
        },



    }

}

</script>


<style scoped>

.myBook {
    width: 500px;
    height: 500px;
    margin: 20px;
    border: thick black 10px;
}

</style>

