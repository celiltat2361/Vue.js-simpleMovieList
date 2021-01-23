<template>
  <div id="movie-list-one">
    <h2>Movie List One</h2>

    <ul>
      <li v-for="movie in watchMovies">
        <span class="title">{{movie.title}}</span>
        <span class="rating">IMDB: {{movie.rating}}</span><br>
        <span class="genre">{{movie.genre}}</span><br>
        <span class="description">{{movie.description}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    movies(){
      return this.$store.state.movies;
    },
    watchMovies(){
     return this.$store.getters.watchMovies;
    }
  } 
}
</script>

<style>
#movie-list-one{
    background: #FFF8B1;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#movie-list-one ul{
    padding: 0;
}
#movie-list-one li{
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.title{
    font-weight: bold;
    color: #E8800C;
}
</style>