<template>
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
        <a class="navbar-brand" href="#"><i class="fa fa-film"></i></a>
        <div id="navbarNav">
            <div class="input-group rounded d-flex justify-content-end pt-2 pb-2">
                <form id="searchForm" @onSubmit={getMovieList}>
                    <input type="search" v-model="textVal" name="searchText" class="form-control input" placeholder="Search Movies, TV Series.." aria-label="Search"
                        aria-describedby="search-addon" />
                    <button type="submit" class="btn btn-default border-0" id="search-addon" @click="getMovieList">
                        <i class="fa fa-search"></i>
                    </button>
                </form>
            </div>    
        </div>
    </div>
</nav>

</template>


<script setup>

 import {ref} from 'vue';
 let  textVal = ref(null);
 const emits = defineEmits(['getMovie']);

 function getMovieList(e){
     e.preventDefault();
     emits('getMovie', textVal)
 }

</script>


<style>
.fa-search{
    color: #000;
}
#searchForm{
    display: flex;
    border-bottom: 2px solid #333;
    border-radius: 0.25rem;
    width: 260px;
}
#searchForm .input{
    border: none;
    outline: none;
    background: none;
    color: #333;
}
#searchForm .input:focus, .btn:focus{
    outline: none;
    color: none;
    box-shadow: none;
}
input[type="search"]::-webkit-input-placeholder {
    color: #333;
}
</style>