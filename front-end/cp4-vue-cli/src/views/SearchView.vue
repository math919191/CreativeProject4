<template>
  <div>  
    <h1>Search</h1>
    <input placeholder="Search for a Book" type="text" v-model="userSearch">
    <!-- <input v-model="title" placeholder="Title"> -->

    <button @click="search()">Search</button>

  <div class="image" v-for="result in searchResults" :key="result.id">
        <h2>{{result.volumeInfo.title}}</h2>
        <p>{{result.volumeInfo.authors}}</p>
        <button @click="addToDatabase(result)">Add To Database</button>
    
        
    </div>

    </div>
          

    <!-- <input type="file" name="photo" @change="fileChanged">
    <button @click="upload">Upload</button> -->

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

        async addToDatabase(result) {
            console.log("being called");
            try {

                let r2 = await axios.post('/api/books', {
                    title: result.volumeInfo.title,
                    //description: result.volumeInfo.description,
                    //jsonObject: result,
                });
                this.addItem = r2.data;
                

            } catch (error){
                console.log(error);
            }

        },

// async upload() {
//         try {
//           const formData = new FormData();
//           formData.append('photo', this.file, this.file.name)
//           let r1 = await axios.post('/api/photos', formData);
//           let r2 = await axios.post('/api/items', {
//             title: this.title,
//             description: this.description,
//             path: r1.data.path
//           });
//           this.addItem = r2.data;
//         } catch (error) {
//           console.log(error);
//         }
//     },

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

