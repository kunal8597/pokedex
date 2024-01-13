"use client";
import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';

interface PokemonCardProps {
  pokemon: {
    id: number;
    name: string;
    sprites: {
      front_default: string;
    };
  };
  index: number;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [errorLoadingImage, setErrorLoadingImage] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = pokemon.sprites.front_default;

    image.onload = () => {
      setImageLoaded(true);
    };

    image.onerror = () => {
      setErrorLoadingImage(true);
    };
  }, [pokemon.sprites.front_default]);

  if (errorLoadingImage) {
    return <div>Error loading image</div>;
  }

  if (!imageLoaded) {
    return <div>Loading...</div>;
  }
  const capitalizedPokemonName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  return (
    <div>
      <img src={pokemon.sprites.front_default} alt={`Pokemon ${pokemon.name}`} />
      <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
      {capitalizedPokemonName}
          </h2>
    </div>
  );
};

export default PokemonCard;
