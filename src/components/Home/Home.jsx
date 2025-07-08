import "./Home.css"
import TypingEffect from "../Typingeffect/TypingEffect";
import homeMAnImage from "../../assets/man_working.png"

const Home = () => {
  return (
    <div className="flex h-screen text-white relative ">
      <div className="flex items-center mx-30">
        <div className="">
          <h1 className="text-white my-5 ">
            <div className=" text-2xl">Hi, I'm</div>
            <span className="font-semibold text-7xl text-[#FFD700] ">
              Vikash Prajapati
            </span>
          </h1>
          <h1 className="text-3xl">
            Full Stack Developer <span className="text-green-400">[MERN]</span>{" "}
          </h1>
          <p>
            I'm a passionate Full-Stack Developer focused on building scalable
            MERN applications. I enjoy turning complex problems into simple,
            intuitive solutions.
          </p>
          <p>
            <TypingEffect />
          </p>
        </div>
        <div className="">
          <img src={homeMAnImage} className="home-image mt-[80%]" alt="image" />
        </div>
      </div>
      <div className="big h-80 w-80 rounded-full absolute top-[10%] shadow-xs shadow-indigo-600 right-[10%] z-[-10] bg-indigo-600 opacity-30 blur-3xl"></div>
      <div className="small h-40 w-40 rounded-full absolute top-[50%] left-0 z-[-10] bg-purple-600 opacity-80 blur-3xl"></div>
    </div>
  );
};

export default Home;
