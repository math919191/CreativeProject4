<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Books!</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/list" class="nav-link">List</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/completed" class="nav-link">Completed</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/search" class="nav-link">Search</router-link>
          </li>


          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="navbar navbar-light bg-light fixed-bottom">
      <div class="container-fluid">
        <a class="navbar-brand" href="https://github.com/math919191/CreativeProject4">Source - Kelly Ko and R Daniels</a>
      </div>
    </div>
    
    <router-view/>
  </div>

  
</template>







<style>
#app {
  font-family: Courgette, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}




* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Courgette", cursive;
    
}
body {
  background-color: #7796cbff;
}


.bg-light {
    background-color: #E8DDB5!important;
  }
   .navbar-light .navbar-nav .nav-link {
        font-size: 1.5em;
  }
/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
