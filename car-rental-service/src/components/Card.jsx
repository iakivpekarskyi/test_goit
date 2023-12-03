import { Link } from 'react-router-dom';

import heartIcon from '../img/heart.svg';
import { useState } from 'react';

const Card = ({ data }) => {
  const [isFavorite, setIsFavorite] = useState(true);
  const addFav = () => setIsFavorite(!isFavorite);
  return (
    <div className='block rounded-md bg-white shadow-md text-left'>
      <div className='relative'>
        <img className='rounded-t-md' src={data?.img} alt={data?.make} />
        <button className='absolute top-[20px] right-[20px] ' onClick={addFav}>
          <img
            className={` hover:scale-150 transition ease-in duration-100 active:scale-100 ${
              isFavorite ? 'fill-white stroke-white' : null
            }`}
            src={heartIcon}
            alt='Heart Icon'
          />
        </button>
      </div>

      <div className='p-6'>
        <div className='flex justify-between mb-2 text-xl font-bold tracking-wide text-neutral-800 dark:text-neutral-50'>
          <div>
            {data?.make}
            {data?.model.length < 8 && <span>{data?.model}</span>}, {data?.year}
          </div>
          <span>{data?.rentalPrice}</span>
        </div>

        <p className='mb-2 text-base text-neutral-500 dark:text-neutral-300'>
          Explore the captivating beauty of Antelope Canyon's red sandstone
          formations and intricate play of light and shadows.
        </p>
        <Link
          to='/catalog'
          className='mt-3 w-full inline-block rounded-lg bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-bold text-center text-white'>
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Card;
