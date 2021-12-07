<template>
    <div class="container">
        <div class="row back pt-3 pb-3">
            <router-link to="/" class="back-search"><i class="fa fa-chevron-left" /> Back To Search</router-link>
        </div>
        <div class="row">
            <div class="card card-body col-md-4">
                <img :src="movie.Poster" class="thumbnail" alt="Poster" />
            </div>
            <div class="col-md-8">
                <h2 class="mb-4">
                    {{movie.Title}}
                </h2>
                <ul class="list-group">
                    <li class="list-group-item">
                        <strong>Genre: </strong> {{movie.Genre}}
                    </li>
                    <li class="list-group-item">
                        <strong>Released: </strong> {{movie.Released}}
                    </li>
                    <li class="list-group-item">
                        <strong>Rated: </strong> {{movie.Rated}}
                    </li>
                    <li class="list-group-item">
                        <strong>Director: </strong> {{movie.Director}}
                    </li>
                    <li class="list-group-item">
                        <strong>Actor: </strong> {{movie.Actors}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import {useRoute} from 'vue-router';
import {APIKeys} from '../APIKeys';

let loading = ref(false);
const movie = ref({});
const route = useRoute();

onBeforeMount(() => {
    loading.value = true;
    fetch(`http://www.omdbapi.com/?apikey=${APIKeys}&i=${route.params.id}`)
    .then(response => response.json())
    .then(data => {
        movie.value = data
        loading.value = false;
    })
})

</script>

<style>
 .back{
      position: relative;
      margin-bottom: 5px;
  }
  .back-search{
      color: #eeffdd;
      transition: all 0.5s ease-in;
  }
  .back-search:hover{
      text-decoration: none;
      color: rgb(236, 65, 65);
  }
  h2{
      color: #fff;
  }
</style>