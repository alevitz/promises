
const ALL_POKEMON_URL = `https://pokeapi.co/api/v2/pokemon/?limit=964`
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon-form/';
const SPECIES_URL = `https://pokeapi.co/api/v2/pokemon-species/`;
let pokemon;





$(async function () {
  pokemon = await axios.get(`${ALL_POKEMON_URL}`);

});

async function drawPokemon(evt) {
  evt.preventDefault();

  let randNum1 = Math.ceil(Math.random() * 964);
  let randNum2 = Math.ceil(Math.random() * 964);
  let randNum3 = Math.ceil(Math.random() * 964);



  let pokemonList = pokemon.data.results;




  let pokemon1 = axios.get(pokemonList[randNum1].url);
  let pokemon2 = axios.get(pokemonList[randNum2].url);
  let pokemon3 = axios.get(pokemonList[randNum3].url);

  let pokemonFacts = await Promise.all([pokemon1, pokemon2, pokemon3]);

  let pokemonNames = [];

  for (idx of pokemonFacts) {
    console.log(pokemonFacts);
    console.log(idx.data.name);
    // $('#pokemon-results').append(`<p>${fact.data.name}</p>`);
    pokemonNames.push(idx.data.species.name);
  }

  let pokemon1Sp = axios.get(`${SPECIES_URL}${pokemonNames[0]}/`);
  let pokemon2Sp = axios.get(`${SPECIES_URL}${pokemonNames[1]}/`);
  let pokemon3Sp = axios.get(`${SPECIES_URL}${pokemonNames[2]}/`);

  let pokemonSpecies = await Promise.all([pokemon1Sp, pokemon2Sp, pokemon3Sp]);

  console.log(pokemonSpecies);

  let Sp1Flavor = pokemonSpecies[0].data.flavor_text_entries;
  let Sp2Flavor = pokemonSpecies[1].data.flavor_text_entries;
  let Sp3Flavor = pokemonSpecies[2].data.flavor_text_entries;

  console.log(Sp1Flavor);

  for (text of Sp1Flavor) {
    if (text.language.name === "en") {
      console.log(text.flavor_text);
    }
  }

  for (text of Sp2Flavor) {
    if (text.language.name === "en") {
      console.log(text.flavor_text);
    }
  }
  for (text of Sp3Flavor) {
    if (text.language.name === "en") {
      console.log(text.flavor_text);
    }
  }


}

    
  
$("#pokemon-form").on("submit", drawPokemon);