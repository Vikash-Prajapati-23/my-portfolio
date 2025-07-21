// import { a} from "react-scroll";
import "./Navbar.css";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [mobile, setMobile] = useState(window.innerWidth <= 500);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 500);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = () => {
    setIsOpen((click) => (click = !click));
  };

  return (
    <nav
      className={`fixed top-0 z-1100 flex justify-between text-2xl lg:px-30 md:px-25 px-8 text-white lg:py-4 py-3 lg:gap-90 md:gap-56 font-semibold w-full transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-r from-[#1a132f] via-[#2E003E] to-[#0F172A] shadow-md"
          : "bg-transparent"
      }`}
    >
      <span className="w-[50%] flex md:justify-baseline items-center text-center cursor-pointer">
        <a href="#home">
          <i className="fa-solid fa-laptop-code lg:text-5xl md:text-3xl"></i>
        </a>
      </span>
      {mobile ? (
        <button onClick={() => handleToggle()} className=" ">
          <i
            className={`fa-solid fa-${!isOpen ? "bars" : "xmark"} text-white`}
          ></i>
        </button>
      ) : (
        <div className="flex justify-center md:text-2xl text-sm items-center md:gap-10 gap-5 w-[50%]">
          <a href="#about" className="cursor-pointer">
            About
          </a>
          <a href="#skills" className="cursor-pointer">
            Skils
          </a>
          <a href="#projects" className="cursor-pointer">
            Projects
          </a>
          <a href="#contactus" className="cursor-pointer">
            Contact
          </a>
        </div>
      )}
      {isOpen && (
        <ul className="mobile-links bg-white/10 backdrop-blur-md">
          <a
            onClick={() => setIsOpen(false)}
            className="cursor-pointer"
            href="#about"
          >
            About
          </a>
          <a
            onClick={() => setIsOpen(false)}
            className="cursor-pointer"
            href="#skills"
          >
            Skills
          </a>
          <a
            onClick={() => setIsOpen(false)}
            className="cursor-pointer"
            href="#projects"
          >
            Projects
          </a>
          <a
            onClick={() => setIsOpen(false)}
            className="cursor-pointer"
            href="#contactus"
          >
            Contact Us
          </a>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
