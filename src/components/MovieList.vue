<template>
    <div class="container">
        <div v-if="props.finalMovie" class="row">
            <div class="col-md-3 mb-3 mt-2" v-for="movielist in props.finalMovie" :key="movielist.imdbID">
                <div class="card card-body bg-dark text-center h-100 d-flex flex-column flex-grow-1">
                    <img :src="movielist.Poster" class="card-img-top" alt="Movie Cover" />
                    <div class="content-wraper">
                        <h5 class="text-light card-title">{{movielist.Title}} - {{movielist.Year}}</h5>
                        <router-link class="btn btn-primary" :to="`/movie/${movielist.imdbID}`">Movie Detail <i class="fa fa-chevron-right" /></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

let props = defineProps({
     finalMovie: Object
})

</script>

<style>

</style>