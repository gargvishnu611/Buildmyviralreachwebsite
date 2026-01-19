import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavigationProps {
  isDark?: boolean;
}

export function Navigation({ isDark = false }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Brands', path: '/brands' },
    { name: 'Creators', path: '/creators' },
    { name: 'Advertisers', path: '/advertisers' },
    { name: 'Tools', path: '/tools' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const bgClass = scrolled 
    ? isDark 
      ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/10' 
      : 'bg-white/80 backdrop-blur-xl border-b border-slate-200'
    : isDark
      ? 'bg-transparent'
      : 'bg-transparent';

  const textClass = isDark ? 'text-white' : 'text-slate-900';
  const textMutedClass = isDark ? 'text-slate-300' : 'text-slate-600';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-teal-500 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <span className={`text-xl sm:text-2xl font-bold ${textClass}`}>MyViralReach</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${
                  location.pathname === link.path
                    ? isDark ? 'text-indigo-400' : 'text-indigo-600'
                    : textMutedClass
                } hover:text-indigo-500 transition-colors text-sm font-medium`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg ${textClass}`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden ${isDark ? 'bg-slate-950/95' : 'bg-white/95'} backdrop-blur-xl border-b ${isDark ? 'border-white/10' : 'border-slate-200'}`}
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block ${
                    location.pathname === link.path
                      ? isDark ? 'text-indigo-400' : 'text-indigo-600'
                      : textMutedClass
                  } hover:text-indigo-500 transition-colors text-base font-medium`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
