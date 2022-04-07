<template>
    <div>
        <p>This is the Completed List. These are some of my favorite books!</p>
        
         <div v-for="book in this.myCompletedList" :key="book.id">
            <div class="book">
                <div class="rec-book"><img :src =book.coverImage></div>
                    <h6>{{ book.title }}</h6>
                    <p>By: {{ book.author }}</p>

                    <div class="rating">
                               
                    </div>

                    <div class="date">
                        <div>
                            <form>
                                <star-rating @rating-selected="setRating; update(book)" :animate="true" :show-rating="false" :active-on-click="true" active-color="#D2042D" :star-size=20></star-rating>
                                <input id="dateCompleted" type="date">
                                <input class="button" type="button" value="Save" @click="update(book)">
                            </form>
                        </div>
                    </div>

                    <div class="description">
                        <p>{{ book.description }}</p>
                    </div>
                    <button @click="removeFromList('completed', book)">Remove From Completed List</button>                    
                    <button @click="addToList('favorites', book)">Add To Favorites List</button>
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
import axios from "axios"
import StarRating from 'vue-star-rating'
export default {
    mixins: [databasemixins], // register mixin
    name: 'CompletedBooks',

    data() {
        return {
          myCompletedList: [],   
            rating: 0,
            date: 0,
        }
    },

    components: {
        StarRating
    },

    mounted() {
        console.log("mounted");
        this.updateCompletedList();
    },

    methods: {
        async updateCompletedList(){
            console.log("here");
            this.myCompletedList = await this.getAllBooksFromList('completed');
            
        },
        setRating: function(rating){
            console.log(rating);
            this.rating= rating;
        },
        async update(book) {
            try {
                console.log(book._id);
                await axios.put("/api/books/" + book._id, {
                    rating: this.rating,
                    dateCompleted: this.date,
                });
                this.rating = 0;
                this.updateCompletedList;
                return true;
            } catch(error) {
                console.log(error);
            }
        }
    }



}

</script>

<style scoped>
.rating {
    display: flex;
    justify-content: center;
}
</style>