<template>
<div class="overlay">
    <FormPage @getMovie="getMovie" />
    <div class="container">
       <MovieList :finalMovie="finalMovie" />
    </div>
</div>
</template>

<script setup>
  import FormPage from './components/Form.vue';
  import MovieList from './components/MovieList.vue';
  import axios from 'axios';
  import {APIKeys} from './APIKeys';
  import {ref} from 'vue';

 
  let finalMovie = ref([]);

function getMovie(textVal){
  axios.get(`http://www.omdbapi.com/?apikey=${APIKeys}&s=${textVal.value}`)
   .then(response => {
     console.log("Movie",response.data)
     finalMovie.value = response.data;
   })
   .catch(error => console.log(error))
}

</script>

<style>

</style>
