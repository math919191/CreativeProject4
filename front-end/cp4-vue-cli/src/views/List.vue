<template>
  <div>
    <br>
    <h1>List of Books</h1>
    <br>
    <BookList />
  </div>
</template>

<script>
import BookList from "../components/BookList.vue"
export default {
  name: "List",
    components: {
        BookList
    },
}

</script>