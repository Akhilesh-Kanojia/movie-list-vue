<template>
    <div className="input-group rounded d-flex justify-content-end pt-2">
        <form id="searchForm" @onSubmit={getMovieList}>
            <input type="search" v-model="textVal" name="searchText" className="form-control input" placeholder="Search Movies, TV Series.." aria-label="Search"
                aria-describedby="search-addon" />
            <button type="submit" className="btn btn-default border-0" id="search-addon" @click="getMovieList">
                <i className="fa fa-search"></i>
            </button>
        </form>
    </div>
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
#searchForm{
  display: flex;
  border-bottom: 2px solid red;
}
#searchForm .input{
     border: none;
    outline: none;
    background: none;
    color: #fff;
  }
  #searchForm .input:focus, .btn:focus{
   outline: none;
   color: none;
   box-shadow: none;
  }
</style>