<template>
  <div class="about">

    <h1>Sobre a Escola Vue</h1>
    <img alt="Vue logo" src="../assets/logo.png">
    <p>Nós somos uma escola com mais de 10 anos no mercado</p>
    <div class="wrapper">
      <div v-for="escola in escolas" :key="escola.abbreviation">
        <escola-card :escola="escola" @click="$store.dispatch('addToFavorites', escola)" />
      </div>
      <h2 v-if="$store.state.favorites.length">Favoritas</h2>
      <div v-for="escola in $store.state.favorites" :key="escola.abbreviation">
        <escola-card :escola="escola" />
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from 'vue'
import todasEscolas from '/src/escolas.js'
import EscolaCard from '@/components/EscolaCard.vue'

export default {
  components: {
    EscolaCard
  },
  setup() {
    const escolas = ref(todasEscolas)
    return { escolas }
  }
}
</script>
<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1rem;
    max-width: 960px;
    margin: 0 auto;
  }
  
  p,
  h3 {
    grid-column: span 3;
  }
  </style>