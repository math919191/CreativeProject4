<template>
    <div>
        <p>This is the Completed List. These are some of my favorite books!</p>
        <button  @click="updateCompletedList()">Gets Completed List</button>
        
         <div v-for="book in this.myCompletedList" :key="book._id">
            <div class="book">
                <div class="rec-book"><img :src =book.coverImage></div>
                <div class="description">
                    <h6>{{ book.title }}</h6>
                    <p>By: {{ book.author }}</p>
                    <p>{{ book.description }}</p>
                    <button @click="removeFromList('completed', book)">Remove From Completed List</button>                    
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
    name: 'CompletedBooks',

    data() {
        return {
          myCompletedList: [],            
        }
    },

    methods: {
        async updateCompletedList(){
            console.log("here");
            this.myCompletedList = await this.getAllBooksFromList('completed');
            
        }

    }



}

</script>