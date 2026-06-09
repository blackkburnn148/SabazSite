import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const links = [
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Ürünlerimiz', path: '/urunler' },
    { name: 'Şirketlerimiz', path: '/sirketler' },
    { name: 'Hakkımızda', path: '/hakkimizda' },
    { name: 'İletişim', path: '/iletisim' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-transparent group-hover:border-blue-600 transition-colors shadow-sm bg-white">
              <img src="/images/sabaz-logo.png" alt="Sabaz Logo" className="w-full h-full object-contain p-1" />
            </div>
            <div>
              <div className={`font-bold text-lg leading-tight transition-colors ${scrolled ? 'text-slate-900' : 'text-slate-800 drop-shadow-sm'}`}>SABAZ SİGORTA</div>
              <div className="text-sm text-blue-600 font-medium">ESPİYE ŞUBESİ</div>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-colors hover:text-blue-600 ${
                  location.pathname === link.path ? 'text-blue-600' : scrolled ? 'text-slate-600' : 'text-slate-700 font-semibold drop-shadow-sm'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Contact Button Desktop */}
          <div className="hidden md:flex items-center gap-4">
             <Link
              to="/iletisim"
              className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30"
             >
               <Phone className="w-5 h-5" />
               <span>0539 545 94 00</span>
             </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-slate-900' : 'text-slate-800'}`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100"
          >
            <div className="flex flex-col px-4 pt-2 pb-6 gap-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-lg font-medium py-2 border-b border-slate-50 ${
                    location.pathname === link.path ? 'text-blue-600' : 'text-slate-700'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/iletisim"
                className="mt-2 flex items-center justify-center gap-2 bg-blue-600 text-white w-full py-3 rounded-xl font-semibold"
              >
                <Phone className="w-5 h-5" />
                <span>0539 545 94 00</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
