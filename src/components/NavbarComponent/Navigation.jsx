import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

// Constante global para los enlaces
const links = [
  { name: 'Tailwind CSS Tips', href: '#' },
  { name: 'Videos', href: '#' },
  { name: 'Blogs', href: '#' },
  { name: 'Courses', href: '#' },
];

// Componente para la lista de enlaces
function NavLinks({ className = '', itemClassName = '', onClick }) {
  return (
    <ul className={`flex flex-col lg:flex-row lg:space-x-8 ${className}`}>
      {links.map((link) => (
        <li key={link.name} className={`hover:text-orange-400 ${itemClassName}`}>
          <a href={link.href} onClick={onClick}>{link.name}</a>
        </li>
      ))}
    </ul>
  );
}

// PropTypes para NavLinks
NavLinks.propTypes = {
  className: PropTypes.string,
  itemClassName: PropTypes.string,
  onClick: PropTypes.func,
};

// Componente para los botones de login/sign up
function AuthButtons({ className = '', buttonClassName = '' }) {
  return (
    <div className={`flex flex-col lg:flex-row ${className}`}>
      <button className={`hover:text-orange-400 ${buttonClassName}`}>
        Login
      </button>
      <button className="bg-orange-400 text-white rounded-lg px-4 py-2 lg:ml-2">
        Sign up
      </button>
    </div>
  );
}

// PropTypes para AuthButtons
AuthButtons.propTypes = {
  className: PropTypes.string,
  buttonClassName: PropTypes.string,
};

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <header className="bg-gray-800">
      <nav className="flex items-center justify-between px-6 py-4 lg:px-12 lg:py-0 h-16">
        <a href="#" className="text-white text-2xl font-bold">
          Tailwind Anytime
        </a>
        <div className="flex lg:hidden">
          <button
            type="button"
            role="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } w-full lg:flex lg:w-auto lg:items-center`}
          id="mobile-menu"
        >
          <NavLinks className="lg:mr-8 bg-gray-800 lg:bg-transparent divide-y lg:divide-y-0 divide-gray-700" itemClassName="text-white px-4 py-3 lg:py-0" onClick={closeMenu} />
          <AuthButtons className="bg-gray-800 lg:bg-transparent px-4 lg:px-0 py-4 lg:py-0" buttonClassName="text-white px-4 py-2 lg:py-0" />
        </div>
      </nav>
      {/* Dropdown de pantalla completa */}
      {isMenuOpen && (
        <div
          className="lg:hidden bg-gray-800 fixed inset-0 z-10 flex flex-col items-center justify-center"
        >
          <NavLinks className="space-y-6 text-center w-full" itemClassName="text-white text-2xl" onClick={closeMenu} />
          <AuthButtons className="mt-8" buttonClassName="text-white text-xl px-4 py-2" />
          <button
            onClick={toggleMenu}
            className="text-white text-3xl mt-8"
          >
            &times;
          </button>
        </div>
      )}
    </header>
  );
}