import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const Header = () => {
  const location = useLocation();
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < prevScrollY || currentScrollY === 0);
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  return (
    <nav
      className={`bg-[#110C16] shadow-md fixed w-full z-10 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
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
            {["Home", "About", "Services", "Team", "Blog", "Product", "Contact Us"].map(
              (name) => (
                <NavLink
                  key={name}
                  to={`/${name.toLowerCase().replace(" ", "")}`}
                  className={({ isActive }) =>
                    `group relative text-white text-lg font-medium px-2 py-2 transition-all ${
                      isActive ? "font-semibold" : ""
                    }`
                  }
                  aria-current={location.pathname.includes(name.toLowerCase()) ? "page" : undefined}
                >
                  {name}
                  <span
                    className={`absolute left-0 bottom-0 w-full h-[2px] bg-[#fdfdfd] transition-transform duration-300 ${
                      location.pathname.includes(name.toLowerCase())
                        ? "scale-x-100"
                        : "scale-x-0"
                    } group-hover:scale-x-100`}
                  ></span>
                </NavLink>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#110C16] px-4 pb-4">
          <div className="flex flex-col space-y-2">
            {["Home", "About", "Services", "Team", "Blog", "Product", "Contact Us"].map(
              (name) => (
                <NavLink
                  key={name}
                  to={`/${name.toLowerCase().replace(" ", "")}`}
                  className="text-white text-lg py-2 block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {name}
                </NavLink>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
