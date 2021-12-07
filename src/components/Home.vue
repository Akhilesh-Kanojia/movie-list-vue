<template>
<router-view></router-view>
    <FormPage @getMovie="getMovie" />
    <div class="container-fluid movieWrapper">
      <Spinner v-if="loading" />
      <MovieList :finalMovie="finalMovie" />
    </div>
</template>

<script setup>
  import FormPage from './Form.vue';
  import MovieList from './MovieList.vue';
  import Spinner from './Spinner.vue';
  import axios from 'axios';
  import {APIKeys} from '../APIKeys';
  import {ref} from 'vue';

  let finalMovie = ref([]);
  let loading = ref(false);

function getMovie(textVal){
  loading.value = true;
  axios.get(`http://www.omdbapi.com/?apikey=${APIKeys}&s=${textVal.value}`)
   .then(response => {
     finalMovie.value = response.data.Search;
     loading.value = false;
     textVal.value = "";
   })
   .catch(error => {
        loading.value = false;
        console.log(error)
    }
   )
}

</script>

<style>
.movieWrapper{
    max-height: 100vh;
    overflow-y: scroll;
    z-index: 99;
    position: relative;
    margin-bottom: 10%;
}
/* width */
.movieWrapper::-webkit-scrollbar, .movieInfo::-webkit-scrollbar {
    width: 8px;
  }
  
  /* Track */
.movieWrapper::-webkit-scrollbar-track, .movieInfo::-webkit-scrollbar-track {
    box-shadow: inset 0 0 3px grey; 
    border-radius: 5px;
  }
   
  /* Handle */
  .movieWrapper::-webkit-scrollbar-thumb, .movieInfo::-webkit-scrollbar-thumb {
    background: #ddd; 
    border-radius: 5px;
  }
  
  /* Handle on hover */
  .movieWrapper::-webkit-scrollbar-thumb:hover, .movieInfo::-webkit-scrollbar-thumb:hover {
    background: #ddd; 
  }
</style>
