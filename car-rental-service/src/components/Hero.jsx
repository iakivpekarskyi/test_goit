import React from 'react';
import Card from './Card';

const Hero = () => {
  // Number of cards
  const numCards = 12;

  // Generate an array with indices from 0 to numCards - 1
  const cardIndices = Array.from({ length: numCards }, (_, index) => index);

  return (
    <div className='grid grid-cols-4 gap-4 p-4'>
      {cardIndices.map((index) => (
        <Card key={index} />
      ))}
    </div>
  );
};

export default Hero;
