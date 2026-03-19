import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ThemeToggle from "../../components/buttons/ThemeToggle/ThemeToggle";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Library", path: "/library" },
];

function NavBar() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
    sticky top-0 z-50
    flex items-center justify-between px-8 py-4 
    bg-main transition-all duration-300
    ${scrolled ? "border-b border-divider shadow-sm" : "border-b border-transparent"}
  `}
    >
      {" "}
      <div className="text-xl font-bold text-primary tracking-widest uppercase">
        <Link to="/">Kaimestry's Tarot</Link>
      </div>
      <div className="flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="text-main font-medium hover:text-primary transition-colors"
          >
            {link.label}
          </Link>
        ))}

        {/* Use your new component here! */}
        <div className=" flex items-center">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
