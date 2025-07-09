import "./Home.css"
import TypingEffect from "../Typingeffect/TypingEffect";
import homeMAnImage from "../../assets/man_working.png"

const Home = () => {
  return (
    <div id="home" className="flex h-screen text-white relative ">
      <div className="md:flex my-24 items-center lg:mx-30 md:mx-20 mx-10">
        <div className="lg:w-[900px] md:w-[500px] text-justify">
          <h1 className="text-white lg:my-5 md:my-2">
            <div className=" md:text-2xl text-lg ">Hi, I'm</div>
            <span className="font-semibold lg:text-7xl md:text-4xl text-xl text-[#FFD700] ">
              Vikash Prajapati
            </span>
          </h1>
          <h1 className="lg:text-3xl md:text-xl ">
            Full Stack Developer <span className="text-green-400">[MERN]</span>{" "}
          </h1>
          <p className="">
            I'm a passionate Full-Stack Developer focused on building scalable
            MERN applications. I enjoy turning complex problems into simple,
            intuitive solutions.
          </p>
          <p>
            <TypingEffect />
          </p>
        </div>

        <div className="">
          <img src={homeMAnImage} className="home-image lg:mt-[80%] md:mt-[100%]" alt="image" />
        </div>

      </div>
      <div className="big h-80 w-80 rounded-full absolute top-[10%] shadow-xs shadow-indigo-600 right-[20%] z-[-10] bg-indigo-600 opacity-30 blur-3xl"></div>
      <div className="small h-40 w-40 rounded-full absolute top-[65%] left-10 z-[-10] bg-purple-600 opacity-80 blur-3xl"></div>
    </div>
  );
};

export default Home;
