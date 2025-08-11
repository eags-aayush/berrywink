import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/logo-noBG.png'; 
const Navbar = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className="fixed w-full z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(var(--color-bg), 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 2px 10px var(--color-shadow)' : 'none',
        borderBottom: scrolled ? '1px solid var(--color-text)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div 
          className="flex justify-between items-center"
          style={{ height: '5rem' }}
        >
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center group"
            style={{ color: 'var(--color-text)' }}
          >
            <img src={Logo} alt="BerryWink Logo" className="w-30 h-30" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="transition-colors hover:text-[var(--color-primary)]"
              style={{ color: 'var(--color-text)' }}
            >
              Home
            </Link>
            <Link 
              to="/personalities" 
              className="transition-colors hover:text-[var(--color-primary)]"
              style={{ color: 'var(--color-text)' }}
            >
              Personalities
            </Link>
            <Link 
              to="/pricing" 
              className="transition-colors hover:text-[var(--color-primary)]"
              style={{ color: 'var(--color-text)' }}
            >
              Pricing
            </Link>
            <Link 
              to="/about" 
              className="transition-colors hover:text-[var(--color-primary)]"
              style={{ color: 'var(--color-text)' }}
            >
              About
            </Link>
          </nav>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full transition-colors hover:bg-[var(--color-bg-secondary)]"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <FaSun style={{ color: 'var(--color-primary' }} />
              ) : (
                <FaMoon style={{ color: 'var(--color-primary)' }} />
              )}
            </button>
            <Link 
              to="/login" 
              className="px-4 py-2 transition-colors hover:text-[var(--color-primary)]"
              style={{ color: 'var(--color-text)' }}
            >
              Login
            </Link>
            <Link 
              to="/signup" 
              className="px-4 py-2 rounded-full transition-colors shadow-lg hover:shadow-[0_0_20px_var(--color-primary)/30)]"
              style={{
                backgroundColor: 'var(--color-primary)',
                color: 'white'
              }}
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full transition-colors hover:bg-[var(--color-bg-secondary)]"
            >
              {darkMode ? (
                <FaSun style={{ color: 'var(--color-accent)' }} />
              ) : (
                <FaMoon style={{ color: 'var(--color-primary)' }} />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md focus:outline-none"
              aria-label="Menu"
            >
              {isOpen ? (
                <FaTimes style={{ color: 'var(--color-primary)' }} />
              ) : (
                <FaBars style={{ color: 'var(--color-primary)' }} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        style={{
          backgroundColor: 'var(--color-card-bg)',
          boxShadow: '0 10px 30px var(--color-shadow)'
        }}
      >
        <div className="px-6 py-4 space-y-4">
          <Link 
            to="/" 
            className="block py-2 transition-colors hover:text-[var(--color-primary)]"
            style={{ color: 'var(--color-text)' }}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/personalities" 
            className="block py-2 transition-colors hover:text-[var(--color-primary)]"
            style={{ color: 'var(--color-text)' }}
            onClick={() => setIsOpen(false)}
          >
            Personalities
          </Link>
          <Link 
            to="/pricing" 
            className="block py-2 transition-colors hover:text-[var(--color-primary)]"
            style={{ color: 'var(--color-text)' }}
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </Link>
          <Link 
            to="/about" 
            className="block py-2 transition-colors hover:text-[var(--color-primary)]"
            style={{ color: 'var(--color-text)' }}
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <div 
            className="pt-4 border-t"
            style={{ borderColor: 'var(--color-bg-secondary)' }}
          >
            <Link 
              to="/login" 
              className="block py-2 transition-colors hover:text-[var(--color-primary)]"
              style={{ color: 'var(--color-text)' }}
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <Link 
              to="/signup" 
              className="block py-2 mt-2 text-center rounded-full transition-colors"
              style={{
                backgroundColor: 'var(--color-primary)',
                color: 'white'
              }}
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;