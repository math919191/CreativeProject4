<template>
    <div>  
        <h1>Search</h1>
        <input placeholder="Search for a Book" type="text" v-model="userSearch">
        <button @click="search()">Search</button>

        <div class="image" v-for="result in searchResults" :key="result.id">
            <h2>{{result.volumeInfo.title}}</h2>
            <p>{{result.volumeInfo.authors}}</p>
            <button @click="addToDatabase(result)">Add To Database</button>
            <button @click="addTo('completed', result)">Add To Completed List</button>
            <button @click="addTo('favorites', result)">Add To Favorites List</button>
            <button @click="addTo('booksToRead', result)">Add To Books To Read List</button>
            

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
            
        }
    },
    
    methods: {
        async search() {
            try {
                let myurl = "https://www.googleapis.com/books/v1/volumes?q=" + this.userSearch + "&key=" + this.KEY;
                console.log(myurl);
                
                let response = await axios.get(myurl);
                console.log("response" , response);
                this.searchResults = response.data.items;
                console.log(this.searchResults = response.data.items);
                return true;
            } catch (error) {
                console.log(error);
            }
        },

        async addTo(whichList, result){
            //if it's not already in the database
            //add it to the database
            await this.addToDatabase(result);
            
            this.whichList = whichList;
             
            //modify the complete / favorites / list properity depending on what we want to modify 
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

        async addToDatabase(result) {
            //TODO check that it's not already in the database before we add it
            //set the book ID
            
            this.result = result;
        
            try {
                let r2 = await axios.post('/api/books', {
                    result: this.result,
                });
                this.addItem = r2.data;
                console.log(r2);
                console.log(r2.data._id);
                this.bookID = r2.data._id;
                console.log(this.bookID)        
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

