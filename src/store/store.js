import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true, 
  state: {
    movies: [
      { title: 'Armageddon', 
        rating: 8,
        genre: 'Action',
        description: 'A sciense fiction film'
      },
      { title: 'Saving Private Ryan', 
        rating: 9,
        genre: 'War',
        description: 'Epic and action film'
      },

    ]
  },

  getters: {
    watchMovies: state => {
      var watchMovies = state.movies.map(movie => {
        return {
          title: '**' + movie.title,
          rating: movie.rating,
          genre: movie.genre,
          description: movie.description
        }
      });
      return watchMovies;
    
    }
  },

  mutations: {
    editRating: (state, payload) => {
      state.movies.forEach(movie => {
        movie.rating -= 1;
      })

    }
  },
  actions: {
    editRating: (context, payload) => {
      setTimeout(function(){
        context.commit('editRating', payload)
      },2000)
    }
  }
})