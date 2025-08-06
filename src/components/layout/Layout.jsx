import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, ExternalLink, Globe, Menu, X } from 'lucide-react';
import { AnimatedLogoWithText } from '../ui/AnimatedLogo';
import ThemeSwitcher from '../ui/ThemeSwitcher';

const Layout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Check if the current link is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white dark:bg-gray-800 shadow-md py-2`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center font-bold text-xl text-rose-600 dark:text-rose-400"
              style={{ marginLeft: '-0.8rem' }}
            >
              <AnimatedLogoWithText width='2' height='2' />
            </Link>
            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-700 dark:text-gray-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={`flex items-center space-x-2 transition-colors ${isActive('/')
                  ? 'text-rose-600 dark:text-rose-400 font-medium'
                  : 'text-gray-700 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-400'
                  }`}
              >
                <Home size={18} />
                <span>Home</span>
              </Link>

              <a
                href="https://github.com/xjaiki/react-template-minimal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
              >
                <ExternalLink size={18} />
                <span>Repository</span>
              </a>

              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-95 dark:bg-gray-900 dark:bg-opacity-95 z-40 transition-transform duration-300 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
          <Link
            to="/"
            className="text-white hover:text-rose-300 flex items-center space-x-3"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Home size={22} />
            <span>Home</span>
          </Link>
          <a
            href="https://github.com/yourusername/jaiki-react-template"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-rose-300 flex items-center space-x-3"
          >
            <ExternalLink size={22} />
            <span>Repository</span>
          </a>
          <div className="mt-4">
            <ThemeSwitcher />
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="flex-grow py-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-4 transition-colors">
        <div className="container mx-auto px-0">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="mb-2 md:mb-0">
              <div className="font-bold text-xl flex items-center justify-center text-rose-600 dark:text-rose-400">
                <AnimatedLogoWithText width='2' height='2' className="text-rose-600 dark:text-rose-400" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 dark:border-gray-700 mt-4 pt-6 text-center text-gray-400 dark:text-gray-300">
            <p>© {new Date().getFullYear()} JaikiTemplate. Open source with 💖</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;