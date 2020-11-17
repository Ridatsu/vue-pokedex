<template>
  <div>
    <h1 class="overview-favorite-pokemon__title">
      Your Favorite Pokémon
    </h1>
    <router-link class="nes-btn" to="/">
      Go Back
    </router-link>
    <div class="overview-favorite-pokemon" />
  </div>
</template>

<style scoped>
.overview-favorite-pokemon {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.overview-favorite-pokemon__title {
  margin-top: 10px;
  text-align: center;
}
</style>
