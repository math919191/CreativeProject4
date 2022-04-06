<template>
  <div class="home">

        <div class = "section-1">

          <div class="home-image">
              <img :src="'/images/4474421855_4b20643258_c.jpeg'">

              <div class="home-heading">
                  Reading is dreaming with your eyes wide open
              </div>
          </div>
          
        </div>
  </div>
  
</template>


<style scoped>

img {
    width: 100%;
}
.home-image {
    width: 1000px;
    max-height: 900px;
    border: thick red;
    color: white;
    position: relative;
  
}
.section-1 {
    display: flex;
    width: vw;
    justify-content: center;
}

.home-heading {
    position: absolute;
    top: 30%;
    left: 20px;

    padding-left: 20px;
    margin-right: 50%;
    font-size: 50px;
    /* top: 40%;
    left: 40%;
    font-size: 50px;
    transform: translate(-50%, -50%); */
  }

</style>



