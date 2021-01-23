<template>
  <div id="movie-list-two">
    <h2>Movie List Two</h2>

    <ul>
      <li v-for="movie in watchMovies">
        <span class="title">{{movie.title}}</span>
        <span class="rating">IMDB:{{movie.rating}}</span><br>
        <span class="genre">Genre: {{movie.genre}}</span><br>
        <span class="description">{{movie.description}}</span>
      </li>
    </ul>
    <button v-on:click="editRating(4)">Edit Rating</button>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import {mapGetters} from "vuex";

export default {
  computed: {
    movies(){
      return this.$store.state.movies;
    },
    ...mapGetters([
      'watchMovies'
    ])
    
  },
  methods: {
    ...mapActions([
      'editRating'
    ])
  }
}
</script>


<style scoped>
  #movie-list-two{
    background: #D1E4FF;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.3);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#movie-list-two ul{
    padding: 0;
    list-style-type: none;
}
#movie-list-two li{
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.title{
    font-weight: bold;
    color: #000;
    display: block;
}
.rating{
    font-weight: bold;
    color: #860CE8;
    display: block;
}
.genre{
    font-weight: bold;
    color: #017ac0;
    display: block;
}
.description{
  font-style: italic;
}
</style>