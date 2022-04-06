<template>
    <div>
    <button  @click="switchComponent('favorites')">Favorites List</button>
    <button  @click="switchComponent('completed')">Completed List</button>
    <button  @click="switchComponent('booksToRead')">Reading List</button>

    </div>
</template>

<script>
    import CompletedList from "../components/CompletedList.vue"
    import FavoritesList from "../components/FavoritesList.vue"
    import ReadingList from "../components/ReadingList.vue"
    
    export default {
        name: "BooksLists", 
        data() {
            return {
                whichComponent: "",    
            }
        },
        components: {
            CompletedList,
            FavoritesList,
            ReadingList,
        },
        methods: {
            switchComponent(){

            }
        }
    }

</script>

