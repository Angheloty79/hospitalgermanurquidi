import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Constante global para los enlaces
const links = [
  { name: 'Inicio', href: '#' },
  { name: 'Quienes somos', href: '#' },
  { name: 'Servicios', href: '#' },
  { name: 'Eventos', href: '#' },
  { name: 'Articulos', href: '#' },
  { name: 'Contactanos', href: '#' },
];

// Componente para la lista de enlaces
function NavLinks({ className = '', itemClassName = '', onClick }) {
  return (
    <ul className={`flex flex-col lg:flex-row lg:space-x-8 ${className}`}>
      {links.map((link) => (
        <li key={link.name} className={`hover:text-orange-400 ${itemClassName}`}>
          {link.name === 'Contactanos' ? (
            <Link to="/contactanos" onClick={onClick}>
              {link.name}
            </Link>
          ) : link.name === 'Inicio' ? (
            <Link to="/" onClick={onClick}>
              {link.name}
            </Link>
          ) : link.name === 'Quienes somos' ? (
            <Link to="/quienesSomos" onClick={onClick}>
              {link.name}
            </Link> )
            : link.name === 'Servicios' ? (
            <Link to="/servicios" onClick={onClick}>
              {link.name}
            </Link>
          ) : link.name === 'Eventos' ? (
            <Link to="/actividades" onClick={onClick}>
              {link.name}
            </Link>
          ) : link.name === 'Articulos' ? (
            <Link to="/articulo" onClick={onClick}>
              {link.name}
            </Link>
          ) : (
            <a href={link.href} onClick={onClick}>
              {link.name}
            </a>
          )}
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
function AuthButtons({ className = '' }) {
  return (
    <div className={`flex flex-col lg:flex-row ${className}`}>
      <button className="bg-orange-400 text-white rounded-lg px-4 py-2 lg:ml-2">
        Reservar cita
      </button>
    </div>
  );
}

// PropTypes para AuthButtons
AuthButtons.propTypes = {
  className: PropTypes.string,
};

// Componente principal de la cabecera con navegación y botones

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  return (
    <header className="bg-gray-800 sticky top-0 z-50">
      {/* Main Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 lg:px-12 lg:py-0 h-16">
        <a href="#" className="text-white text-2xl font-bold">
          H.M.I.G.U.
        </a>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Toggle menu</span>
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
          className={`hidden lg:flex lg:items-center`}
          id="desktop-menu"
        >
          <NavLinks className="lg:mr-8" itemClassName="text-gray-200 px-4 py-3 lg:py-0" />
          <AuthButtons />
        </div>
      </nav>

      {/* Dropdown en pantalla pequeña con animación y tamaño reducido de texto */}
      <div
        className={`lg:hidden bg-gray-800 overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="p-4">
          <NavLinks className="space-y-6 text-center w-full text-sm" itemClassName="text-white text-sm" onClick={toggleMenu} />
          <AuthButtons className="mt-8" />
        </div>
      </div>
    </header>
  );
}