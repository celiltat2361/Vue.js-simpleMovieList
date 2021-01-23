<template>
  <div id="app">
  <movies-list-one></movies-list-one>
  <movies-list-two></movies-list-two>
  </div>
</template>

<script>
import MovieOne from './components/MovieOne';
import MovieTwo from './components/MovieTwo';


export default {
  components: {
    'movies-list-one': MovieOne,
    'movies-list-two': MovieTwo
  },
  name: 'app',
  data () {
    return {
      
    }
  }
}
</script>

<style>
body {
  font-family: Roboto;
  color:#555;
}
</style>
