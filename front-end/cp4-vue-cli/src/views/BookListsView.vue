<template>
    <div>
    <button  @click="getAllBooksFromList('favorites')">Favorites List</button>
    <button  @click="getAllBooksFromList('completed')">Completed List</button>
    <button  @click="getAllBooksFromList('booksToRead')">Reading List</button>

    </div>
</template>