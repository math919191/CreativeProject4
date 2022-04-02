<template>
  <div>
    <br>
    <h1>Completed Books</h1>
    <br>
    <BookList />
  </div>
</template>

<script>
import BookList from "../components/BookList.vue"
export default {
    name: "Completed", 
    components: {
        BookList
    },
}

</script>


<style scoped>

</style>

