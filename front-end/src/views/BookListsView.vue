<template>
    <div>
        <div class="buttons">
            <button class="button" @click="switchComponent('favorites')">Favorites List</button>
            <button class="button" @click="switchComponent('completed')">Completed List</button>
            <button class="button" @click="switchComponent('booksToRead')">Reading List</button>
            <button class="button" @click="switchComponent('noList')">No List</button>
            
        </div>
        <component :is="dynamicComponent" />
    </div>
</template>

<script>
    import CompletedList from "../components/CompletedList.vue"
    import FavoritesList from "../components/FavoritesList.vue"
    import ReadingList from "../components/ReadingList.vue"
    import NoSelectedList from "../components/NoSelectedList.vue"
    
    export default {
        name: "BooksLists", 
        data() {
            return {
                dynamicComponent: NoSelectedList,    
            }
        },
        components: {
            CompletedList,
            FavoritesList,
            ReadingList,
        },
        methods: {
            switchComponent(whichList){
                if (whichList == 'booksToRead'){
                    this.dynamicComponent = ReadingList;
                } else if (whichList == 'favorites'){
                    this.dynamicComponent = FavoritesList;
                } else if (whichList == 'completed'){
                    this.dynamicComponent = CompletedList;
                } else if (whichList == 'noList'){
                    this.dynamicComponent = NoSelectedList;
                }

            }
        }
    }

</script>

