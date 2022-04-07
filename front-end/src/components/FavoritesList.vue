<template>
    <div>
        <p>This is the Favorites List. These are some of my favorite books!</p>
        
         <div v-for="book in this.myFavoritesList" :key="book.id">
            <div class="book">
                <div class="rec-book"><img :src =book.coverImage></div>
                <div class="description">
                    <h6>{{ book.title }}</h6>
                    <p>By: {{ book.author }}</p>
                    <p>{{ book.description }}</p>
                    <button @click="removeFromList('favorites', book)">Remove From Favorites List</button>                    
                    <button @click="edit()">Edit it</button>
                </div>
            </div>
        </div>
        
        

    </div>
</template>

<script>
import { databasemixins } from '../mixins/databasemixins' // import mixin
export default {
    mixins: [databasemixins], // register mixin
    name: 'FavoriteBooks',

    data() {
        return {
          myFavoritesList: [],            
        }
    },
    
    mounted() {
        this.updateFavoritesList();
    },

    methods: {
        async updateFavoritesList(){
            console.log("here");
            this.myFavoritesList = await this.getAllBooksFromList('favorites');
        }

    }



}

</script>