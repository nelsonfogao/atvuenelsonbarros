<template>
    <div class="escola">
      <p>{{ escola.abbreviation }}</p>
      <p>{{ escola.name }}</p>
      <p>{{ escola.city }}, {{ escola.state }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
        escola: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
    .escola {
      border: 3px solid;
      border-radius: .5rem;
      padding: 1rem;
      margin-bottom: 1rem;
    }
    
    .escola p:first-child {
      font-weight: bold;
      font-size: 2.5rem;
      margin: 1rem 0;
    }
    
    .escola p:last-child {
      font-style: italic;
      font-size: .8rem;
    }
    </style>