import "./About.css";
import about_Image from "../../assets/about_me_img.webp";

const About = () => {
  return (
    <section id="about" className="h-screen flex justify-center items-center">
      <div className="about-content">
        <h3 className="text-white font-bold text-center lg:text-4xl md:text-3xl text-2xl mb-10">
          About <span className="border-b-2 border-amber-600">Me</span>
        </h3>

        <div className="md:flex lg:mx-10 md:mx-8 lg:h-60 md:h-60 ">
          <div className="flex justify-center lg:w-[500px] md:w-[300px] object-contain p-0 items-center">
            <img src={about_Image} className="about-img" alt="" />
          </div>

          <div className="text-white p-0 lg:w-[600px] md:w-[350px] flex items-center">
            <div className="flex">
              <div className="about-para md:text-base text-sm md:p-0 p-7 text-justify ">
                <h4 className="md:text-2xl text-xl">
                  I'm Vikash Kumar Prajapati.
                </h4>
                <p>
                  I'm a self-taught MERN stack developer who loves turning ideas
                  into real web apps. I’ve built projects like Shop-sphere
                  (e-commerce), a school management system, and Resumate (AI
                  resume builder), which helped me grasp real-world skills like
                  form handling, authentication, and backend APIs. I'm open to
                  work for both work from office or remote.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="btn-position text-center border-2 rounded border-amber-600">
          <a
            id="download_btn"
            href="/Vikash_Prajapati_Resume-11th-july-2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Vikash_Resume.pdf"
            className="text-white font-semibold cursor-pointer resume-btn inline-block w-full h-full py-2 px-4"
          >
            My Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
