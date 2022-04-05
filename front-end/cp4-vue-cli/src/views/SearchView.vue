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

        async addTo(whichList, result){
            //if it's not already in the database
            //add it to the database
            console.log("add to function");
            console.log("result id ", result.id);
            let thisID = await this.getIdIfInDatabase(result.id);
            console.log(thisID);
            console.log("line 100");
            console.log("inDatabase", this.inDatabase )
            if (this.inDatabase.data != false){
                this.bookID = this.inDatabase.data;
            } else {
                await this.addToDatabase(result);
            }


            
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

        
        async getIdIfInDatabase(jsonID){
            try {
                //let jsonID = givenjsonID;
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
            
            //TODO check that it's not already in the database before we add it
            //set the book ID
            //checks if it is in the database and sets the book ID to the book that we are one
            

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

