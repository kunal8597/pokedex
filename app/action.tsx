"use server";

import PokemonCard from "@/components/PokemonCard";



interface Pokemon {
  id: number;
  name: string;
  // Add other properties based on your requirements
}

export const fetchPokemon = async (page: number): Promise<JSX.Element[]> => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${(page - 1) * 20}&limit=20`);
    const data = await response.json();

    if (!Array.isArray(data.results)) {
      // If the data is not an array, handle it accordingly
      console.error('Invalid data format');
      return [];
    }

    const pokemonPromises = data.results.map(async (pokemon: any, index: number) => {
      const pokemonResponse = await fetch(pokemon.url);
      const pokemonData = await pokemonResponse.json();

      return (
        <PokemonCard key={pokemonData.id} pokemon={pokemonData} index={index} />
      );
    });

    return Promise.all(pokemonPromises);
  } catch (error) {
    console.error('Error fetching Pokémon:', error);
    return [];
  }
};
