
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Internships", path: "/internships" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-2 sm:top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 w-[95%] sm:w-auto">
      <div className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-2 sm:py-3 shadow-2xl">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/f370b8a5-d48a-4a4a-a2b4-18e4241f2181.png" 
              alt="WeBlaze Logo" 
              className="h-5 sm:h-6 w-auto brightness-200"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 lg:space-x-6 ml-6 lg:ml-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-xs font-medium transition-all duration-300 px-3 py-1.5 rounded-lg ${
                  location.pathname === item.path
                    ? "text-purple-400 bg-purple-400/20"
                    : "text-white/80 hover:text-purple-400 hover:bg-white/10"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-1.5 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-3 pt-3 border-t border-white/20 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block py-2.5 px-3 text-sm font-medium transition-colors rounded-lg ${
                  location.pathname === item.path
                    ? "text-purple-400 bg-purple-400/20"
                    : "text-white/80 hover:text-purple-400 hover:bg-white/10"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
