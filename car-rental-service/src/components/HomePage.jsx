import { Link } from 'react-router-dom';
import Header from './Header';

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className='bg-neutral-50 px-6 py-20 text-center '>
        <h1 className='mb-6 text-5xl font-bold'>
          Ласкаво просимо до нашої компанії!
        </h1>
        <h3 className='mb-8 text-3xl font-bold'>
          Ми надаємо різноманітні послуги для задоволення потреб наших клієнтів.
          Наша команда експертів готова допомогти вам у вирішенні різних
          завдань.
        </h3>
        <Link
          to='/catalog'
          className='mt-3 inline-block rounded-lg bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-bold text-center text-white'>
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
