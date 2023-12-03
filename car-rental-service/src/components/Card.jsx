import { Link } from 'react-router-dom';

const Card = () => {
  return (
    <div className='block rounded-md bg-white shadow-md text-left'>
      {/* Card image */}
      <a href='#!'>
        <img
          className='rounded-t-md'
          src='https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg'
          alt=''
        />
      </a>

      {/* Card body */}
      <div className='p-6'>
        {/* Title */}
        <h5 className='flex justify-between mb-2 text-xl font-bold tracking-wide text-neutral-800 dark:text-neutral-50'>
          <p>Volvo XC90, 2019</p>
          <p>$50</p>
        </h5>

        {/* Text */}
        <p className='mb-2 text-base text-neutral-500 dark:text-neutral-300'>
          Explore the captivating beauty of Antelope Canyon's red sandstone
          formations and intricate play of light and shadows.
        </p>

        {/* Button */}
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
