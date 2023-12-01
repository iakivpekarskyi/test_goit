import React from 'react';

const Header = () => {
  return (
    <header>
      <nav
        className='fixed z-10 flex w-full items-center justify-center bg-white py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 '
        s
        data-te-navbar-ref>
        <div className='flex w-full flex-wrap items-center justify-between px-3'>
          {/* <!-- Navigation links --> */}
          <div
            className='!visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto'
            id='navbarSupportedContentY'
            data-te-collapse-item>
            <ul
              className='mr-auto flex flex-col lg:flex-row'
              data-te-navbar-nav-ref>
              <li className='mb-4 lg:mb-0 lg:pr-2' data-te-nav-item-ref>
                <a
                  className='block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90'
                  href='#!'
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color='light'>
                  Додому
                </a>
              </li>
              <li className='mb-4 lg:mb-0 lg:pr-2' data-te-nav-item-ref>
                <a
                  className='block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90'
                  href='#!'
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color='light'>
                  Улюблені
                </a>
              </li>

              <li className='mb-2 lg:mb-0 lg:pr-2' data-te-nav-item-ref>
                <a
                  className='block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90'
                  href='#!'
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color='light'>
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
