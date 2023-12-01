const Home = () => {
  return (
    <div className='bg-neutral-50 px-6 py-20 text-center text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200'>
      <h1 className='mb-6 text-5xl font-bold'>
        {' '}
        Ласкаво просимо до нашої компанії!
      </h1>
      <h3 className='mb-8 text-3xl font-bold'>
        Ми надаємо різноманітні послуги для задоволення потреб наших клієнтів.
        Наша команда експертів готова допомогти вам у вирішенні різних завдань.
      </h3>
      <a
        className='inline-block rounded bg-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black'
        href='#!'
        role='button'>
        Get started
      </a>
    </div>
  );
};

export default Home;
