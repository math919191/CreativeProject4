<template>
    <div>
        <p>This is the Completed List. These are some of my favorite books!</p>
        
         <div v-for="book in this.myCompletedListComputed" :key="book.id">
            <div class="book">
                <div class="rec-book"><img :src =book.coverImage></div>
                    <h6>{{ book.title }}</h6>
                    <p>By: {{ book.author }}</p>

                    <div class="rating">
                               
                    </div>

                    <div class="date">
                        <div>
                            <form>
                                <star-rating @rating-selected="setRating" :animate="true" :show-rating="false" :active-on-click="true" active-color="#D2042D" :star-size=20></star-rating>
                                <input v-model="dateCompleted" type="date">
                                <input class="button" type="button" value="Save" @click="update(book)">
                            </form>
                        </div> -->
                    </div>

                    <div class="description">
                        <p>{{ book.description }}</p>
                    </div>
                    <button @click="removeItem(book)">Remove From Completed List</button>                    
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
            dateCompleted: "",
        }
    },

    components: {
        StarRating
    },

    mounted() {
        console.log("mounted");
        this.updateCompletedList();
    },

    computed: {
        myCompletedListComputed(){
            return this.myCompletedList;
        }
    },

    methods: {
        async updateCompletedList(){
            this.myCompletedList = await this.getAllBooksFromList('completed');
        },
        async removeItem(book){
            await this.removeFromList('completed', book);
            await this.updateCompletedList();
        
        },
        setRating(rating){
            console.log(rating);
            this.rating= rating;
        },
        async update(book) {
            try {
                console.log(book._id);
                console.log(this.rating);
                console.log(this.dateCompleted);
                await axios.put("/api/books/edit/" + book._id, {
                    rating: this.rating,
                    dateCompleted: this.dateCompleted,
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