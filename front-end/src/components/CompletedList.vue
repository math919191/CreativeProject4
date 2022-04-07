<template>
    <div>
        <p>This is the Completed List. These are some of my favorite books!</p>
        
         <div v-for="book in this.myCompletedList" :key="book.id">
            <div class="book">
                <div class="rec-book"><img :src =book.coverImage></div>
                    <h6>{{ book.title }}</h6>
                    <p>By: {{ book.author }}</p>
                    <div class="description">
                        <p>{{ book.description }}</p>
                    </div>
                    <button @click="removeFromList('completed', book)">Remove From Completed List</button>                    
                    <button @click="addToList('favorites', book)">Add To Favorites List</button>
                    <button @click="edit()">Edit it</button>
                    <button @click="edit()">Add notes</button>
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
    name: 'CompletedBooks',

    data() {
        return {
          myCompletedList: [],            
        }
    },

    mounted() {
        this.updateCompletedList();
    },

    methods: {
        async updateCompletedList(){
            console.log("here");
            this.myCompletedList = await this.getAllBooksFromList('completed');
            
        }

    }



}

</script>