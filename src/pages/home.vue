<template>
  <div class="select-pokemon-page">
    <img src="./../assets/logo-pixel.gif" alt="pokemon" />
    <h1>Página principal</h1>
    <div class="select-pokemon-content" />
  </div>
</template>

<script>
export default {
  async created() {
    const pokemonData = await this.getPokemonData();
    this.setPokemonData(pokemonData);
  },
  methods: {
    async getPokemonData() {
      const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      const json = await data.json();
      return json.results;
    }
  }
};
</script>

<style scoped>
.select-pokemon-page {
  text-align: center;
}

.select-pokemon-content {
  text-align: left;
  display: flex;
  justify-content: space-evenly;
}
</style>
