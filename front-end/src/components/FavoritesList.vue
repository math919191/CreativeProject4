<template>
    <div>
        <p>This is the Favorites List. These are some of my favorite books!</p>
        
         <div v-for="book in this.myFavoritesList" :key="book.id">
            <div class="book">
                <div class="rec-book"><img :src =book.coverImage></div>
                    <h6>{{ book.title }}</h6>
                    <p>By: {{ book.author }}</p>
                    <div class="description">
                        <p>{{ book.description }}</p>
                    </div>
                    <button @click="removeItem()">Remove From Favorites List</button>                    
                    <button @click="edit()">Edit it</button>
            </div>
            <br>
            <br>
        </div>
        <br>
        <br>

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
        },

        async removeItem(book){
            this.removeFromList('favorites', book)
            this.updateFavoritesList();
        },


    }



}

</script>