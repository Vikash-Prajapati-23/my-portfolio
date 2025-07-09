import "./App.css";
import About from "./components/About/About";
import ContactUs from "./components/ContactUs/ContactUs";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <ContactUs />
    </div>
  );
}

export default App;
