import React from 'react';

const CarSorting = () => {
  return (
    <div className='flex items-center  justify-center space-x-4 p-4'>
      {/* Car Brand Dropdown */}
      <div className='relative'>
        <label htmlFor='carBrand' className='text-sm font-medium text-gray-700'>
          Car Brand
        </label>
        <select
          id='carBrand'
          name='carBrand'
          className='block w-32 mt-1 p-2 border rounded-md bg-white'>
          {/* Options for car brands */}
          <option value='all'>All Brands</option>
          <option value='toyota'>Toyota</option>
          <option value='honda'>Honda</option>
          <option value='ford'>Ford</option>
          {/* Add more options as needed */}
        </select>
      </div>

      {/* Price per Hour Dropdown */}
      <div className='relative'>
        <label
          htmlFor='pricePerHour'
          className='text-sm font-medium text-gray-700'>
          Price per Hour
        </label>
        <select
          id='pricePerHour'
          name='pricePerHour'
          className='block w-32 mt-1 p-2 border rounded-md bg-white'>
          {/* Options for price per hour */}
          <option value='all'>Any Price</option>
          <option value='low'>Low to High</option>
          <option value='high'>High to Low</option>
        </select>
      </div>

      {/* Car Mileage Inputs */}
      <div className='flex space-x-4'>
        <div className='relative'>
          <label
            htmlFor='mileageFrom'
            className='text-sm font-medium text-gray-700'>
            Mileage From
          </label>
          <input
            type='number'
            id='mileageFrom'
            name='mileageFrom'
            className='block w-20 mt-1 p-2 border rounded-md'
          />
        </div>
        <div className='relative'>
          <label
            htmlFor='mileageTo'
            className='text-sm font-medium text-gray-700'>
            Mileage To
          </label>
          <input
            type='number'
            id='mileageTo'
            name='mileageTo'
            className='block w-20 mt-1 p-2 border rounded-md'
          />
        </div>
      </div>

      {/* Search Button */}
      <button className='px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600'>
        Search
      </button>
    </div>
  );
};

export default CarSorting;
