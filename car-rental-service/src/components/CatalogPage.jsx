import Card from './Card';

const CatalogPage = () => {
  const numCards = 12;

  const cardIndices = Array.from({ length: numCards }, (_, index) => index);

  return (
    <div className='grid grid-cols-4 gap-4 p-4'>
      {cardIndices.map((index) => (
        <Card key={index} />
      ))}
    </div>
  );
};

export default CatalogPage;
