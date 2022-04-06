<template>
    <div>
        <p>This is the Reading List. I hope to read all of these books!</p>
        <button  @click="foo()">Favorites List</button>
            

    </div>
</template>

<script>
import { databasemixins } from '../mixins/databasemixins' // import mixin
export default {
    mixins: [databasemixins], // register mixin
    
    name: 'CompletedBooks',


}

</script>