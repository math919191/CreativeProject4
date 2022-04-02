<template>
  <div>  
    <h1>Search</h1>
    <input placeholder="Search for a Book" type="text" v-model="userSearch">
    <!-- <input v-model="title" placeholder="Title"> -->

    <button @click="search()">Search</button>

    <div class="image" v-for="result in searchResults" :key="result.id">
        <h2>{{result.volumeInfo.title}}</h2>
        <p>{{result.volumeInfo.authors}}</p>
        
    </div>
          

    <!-- <input type="file" name="photo" @change="fileChanged">
    <button @click="upload">Upload</button> -->


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
    }

}

</script>


<style scoped>

</style>

