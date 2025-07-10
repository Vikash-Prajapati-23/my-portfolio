import "./Projects.css";
import Project_1 from "../../assets/P-1.png";
import Project_2 from "../../assets/P-2.png";
import Project_3 from "../../assets/P-3.png";

const Projects = () => {
  return (
    <div id="projects" className=" text-white">
      <div className="project-main">
        <h3 className="text-white md:text-4xl text-2xl text-center font-semibold md:mb-14 mb:8">
          Projects
        </h3>

        <div className="flex flex-col lg:gap-10 md:gap-0 gap-52">
          {/* Project - 1 */}
          <div className=" flex items-center project-content">
            <div>
              <img className="project_img" src={Project_1} alt="" />
            </div>
            <div className="project_info  lg:p-3 md:p-1 md:bg-gradient-to-r from-[#1a132f] via-[#2E003E] to-[#0F172A]">
              <div className="flex flex-col md:text-end gap-3">
                <p className="md:text-sm text-sm project_info_border">
                  Personal project |
                  <span className="md:text-lg text-base ms-2">Shop Sphere</span>
                </p>

                <p className="md:text-sm text-sm project_info_border">
                  Shop Sphere is E-commerce platform where users can browse and
                  buy products. There are features such as cart feature(to add
                  or remove products), wishlist feature, Authenticarion,
                  Personal dashboard and many more.
                </p>
                <p className="md:text-sm text-sm project_info_border">
                  java script(ES6) | React | Bootstrap | Nodejs | Expressjs |
                  MondoDB | Mongoose
                </p>
                <p className="md:text-lg text-sm project_info_border">
                  <a
                    href="https://github.com/Vikash-Prajapati-23/Shop-Sphere"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>
                      <i class="fa-brands fa-github cursor-pointer me-2"></i>
                    </span>
                  </a>
                  |
                  <a
                    href="https://shop-sphere-jade.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fas fa-external-link-alt ms-2"></i>
                  </a>
                </p>
              </div>
            </div>
            <div></div>
          </div>

          {/* Project - 2 */}
          <div className=" flex items-center project-content">
            <div>
              <img className="project_img" src={Project_3} alt="" />
            </div>
            <div className="project_info pb-32 lg:p-3 md:p-1 md:bg-gradient-to-r from-[#1a132f] via-[#2E003E] to-[#0F172A]">
              <div className="flex flex-col md:text-end gap-3">
                <p className="md:text-sm text-sm project_info_border">
                  Personal project |
                  <span className="md:text-lg text-base ms-2">
                    School Management System
                  </span>
                </p>

                <p className="md:text-sm text-sm project_info_border">
                  A full-stack web application A responsive MERN stack
                  application for managing school operations - includes
                  admission forms, seat booking, teacher/class management, and a
                  user-friendly dashboard with secure authentication.
                </p>
                <p className="md:text-sm text-sm project_info_border">
                  java script(ES6) | React | Redux | Tailwind css | Nodejs |
                  Expressjs | MondoDB | Mongoose
                </p>
                <p className="md:text-md text-sm project_info_border ">
                  <span>In progress |</span>{" "}
                  This github repo is private |
                  <a
                    href="https://school-project-gamma-lilac.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fas fa-external-link-alt ms-2"></i>
                  </a>
                </p>
              </div>
            </div>
            <div></div>
          </div>

          {/* Project - 3 */}
          <div className=" flex items-center project-content">
            <div>
              <img className="project_img" src={Project_2} alt="" />
            </div>
            <div className="project_info pb-32 lg:p-3 md:p-1 md:bg-gradient-to-r from-[#1a132f] via-[#2E003E] to-[#0F172A]">
              <div className="flex flex-col md:text-end gap-3">
                <p className="md:text-sm text-sm project_info_border">
                  Personal project |
                  <span className="md:text-lg text-base ms-2">Resumate</span>
                </p>

                <p className="md:text-sm text-sm project_info_border">
                  Build your resume in minutes with the power of AI! This smart
                  resume builder uses AI to generate well-structured, job-ready
                  resumes with ease — perfect for students, professionals, and
                  job seekers.
                </p>
                <p className="md:text-sm text-sm project_info_border">
                  java script(ES6) | React | Redux | Tailwind css | Nodejs |
                  Expressjs | MondoDB | Mongoose
                </p>
                <p className="md:text-md text-sm project_info_border">
                  <span>In progress |</span>
                  <a
                    href="https://github.com/Vikash-Prajapati-23/ResuMate"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>
                      <i class="fa-brands fa-github cursor-pointer mx-2"></i>
                    </span>
                  </a>
                  |
                  <a
                    href="https://ai-resume-builder-bice-one.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fas fa-external-link-alt ms-2"></i>
                  </a>
                </p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
