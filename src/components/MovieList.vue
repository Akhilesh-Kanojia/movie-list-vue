<template>
    <div class="container">
        <div v-if="props.finalMovie" class="row">
            <div className="col-md-3 mb-5 mt-3" v-for="movielist in props.finalMovie.Search" :key="movielist.imdbID">
                <div className="card card-body bg-dark text-center h-100 d-flex flex-column flex-grow-1">
                    <img :src="movielist.Poster" className="card-img-top" alt="Movie Cover" />
                    <div className="content-wraper">
                        <h5 className="text-light card-title">{{movielist.Title}} - {{movielist.Year}}</h5>
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