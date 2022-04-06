<template>
  <div>
    <br>
    <h1>Completed Books</h1>
    <br>
    <CompletedBooks />
  </div>
</template>

<script>
import CompletedBooks from "../components/CompletedBooks.vue"
export default {
    name: "CompletedView", 
    components: {
        CompletedBooks
    },
}

</script>
