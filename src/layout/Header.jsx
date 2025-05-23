import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const Header = () => {
  const location = useLocation();
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Time-based dark mode: active from 6 PM to 6 AM
  useEffect(() => {
    const hour = new Date().getHours();
    setIsDarkMode(hour >= 18 || hour < 6);
  }, []);

  // Hide header on scroll down
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < prevScrollY || currentScrollY === 0);
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  // Disable background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={`fixed w-full z-30 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          isDarkMode
            ? "bg-[#110C16] text-white shadow-md shadow-white/20"
            : "bg-white text-gray-900 shadow-md shadow-black/20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <NavLink to="/">
                <Logo />
              </NavLink>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-4 mx-auto">
              {["Home", "About", "Services", "Team", "Blog", "Product", "Contact Us"].map((name) => (
                <NavLink
                  key={name}
                  to={`/${name.toLowerCase().replace(" ", "")}`}
                  className={({ isActive }) =>
                    `group relative text-lg font-medium px-2 py-2 transition-all ${
                      isActive ? "font-semibold" : ""
                    }`
                  }
                  aria-current={location.pathname.includes(name.toLowerCase()) ? "page" : undefined}
                >
                  {name}
                  <span
                    className={`absolute left-0 bottom-0 w-full h-[2px] ${
                      isDarkMode ? "bg-white" : "bg-gray-900"
                    } transition-transform duration-300 ${
                      location.pathname.includes(name.toLowerCase()) ? "scale-x-100" : "scale-x-0"
                    } group-hover:scale-x-100`}
                  ></span>
                </NavLink>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          {/* Background Overlay */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-20"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Container */}
          <div
            className={`absolute top-16 w-full z-30 px-4 pb-4 md:hidden ${
              isDarkMode
                ? "bg-[#110C16] text-white shadow-md shadow-white/20"
                : "bg-white text-gray-900 shadow-md shadow-black/20"
            }`}
          >
            <div className="flex flex-col space-y-2 py-2">
              {["Home", "About", "Services", "Team", "Blog", "Product", "Contact Us"].map((name) => (
                <NavLink
                  key={name}
                  to={`/${name.toLowerCase().replace(" ", "")}`}
                  className="text-lg py-2 block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {name}
                </NavLink>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
