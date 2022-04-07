<template>
    <div>
        <p>This is the Reading List. I hope to read all of these books!</p>
        
         <div v-for="book in this.myReadingList" :key="book._id">
            <div class="book">
                <div class="rec-book"><img :src =book.coverImage></div>
                <div class="description">
                    <h6>{{ book.title }}</h6>
                    <p>By: {{ book.author }}</p>
                    <p>{{ book.description }}</p>
                    <button @click="removeFromList('booksToRead', book)">Remove From Reading List</button>                    
                    <button @click="addToList('completed', book)">Add To Completed List</button>
                    <button @click="addToList('favorites', book)">Add To Favorites List</button>
                </div>
            </div>
        </div>
        
        

    </div>
</template>

<script>
import { databasemixins } from '../mixins/databasemixins' // import mixin
export default {
    mixins: [databasemixins], // register mixin
    name: 'CompletedBooks',

    data() {
        return {
          myReadingList: [],            
        }
    },

    mounted() {
        this.updateReadingList();
    },

    methods: {
        async updateReadingList(){
            this.myReadingList = await this.getAllBooksFromList('readingList');
        }

    }

}

</script>