import "./Skills.css";
import Express_logo from "../../assets/Expressjs-logo.png";

const Skills = () => {
  return (
    <section
      id="skills"
      className="h-screen flex flex-col justify-center items-center"
    >
      <div className="">
        <h3 className="text-white md:text-4xl text-2xl text-center font-semibold md:mb-14 mb:8">
          Skills
        </h3>

        <div className="grid lg:grid-cols-8 md:grid-cols-6 grid-cols-4 lg:mx-24 md:mx-16 md:my-10 my-5 flex-wrap md:gap-10 gap-x-10 gap-y-4 md:text-center mx-5">
          {/* HTML */}
          <div className="">
            <div className="md:h-20 h-12 md:w-20 w-12 border-2 p-2 border-amber-600 rounded flex justify-center items-center">
              <img src="https://cdn.simpleicons.org/html5/E34F26" alt="HTML5" />
            </div>
            <div className="text-white text-xs text-center">HTML5</div>
          </div>

          {/* CSS */}
          <div className="">
            <div className="md:h-20 h-12 md:w-20 w-12 border-2 p-2 border-amber-600 rounded flex justify-center items-center">
              <img src="https://cdn.simpleicons.org/css3/1572B6" alt="CSS3" />
            </div>
            <div className="text-white text-xs text-center">CSS3</div>
          </div>

          {/* JavaScript */}
          <div className="">
            <div className="md:h-20 h-12 md:w-20 w-12 border-2 p-2 border-amber-600 rounded flex justify-center items-center">
              <img
                src="https://cdn.simpleicons.org/javascript/F7DF1E"
                alt="JavaScript"
              />
            </div>
            <div className="text-white text-xs text-center">JavaScript</div>
          </div>

          {/* React */}
          <div className="">
            <div className="md:h-20 h-12 md:w-20 w-12 border-2 p-2 border-amber-600 rounded flex justify-center items-center">
              <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" />
            </div>
            <div className="text-white text-xs text-center">React</div>
          </div>

          {/* MongoDB */}
          <div className="">
            <div className="md:h-20 h-12 md:w-20 w-12 border-2 p-2 border-amber-600 rounded flex justify-center items-center">
              <img
                src="https://cdn.simpleicons.org/mongodb/47A248"
                alt="MongoDB"
              />
            </div>
            <div className="text-white text-xs text-center">MongoDB</div>
          </div>

          {/* Node.js */}
          <div className="">
            <div className="md:h-20 h-12 md:w-20 w-12 border-2 p-2 border-amber-600 rounded flex justify-center items-center">
              <img
                src="https://cdn.simpleicons.org/nodedotjs/339933"
                alt="Node.js"
              />
            </div>
            <div className="text-white text-xs text-center">Node.js</div>
          </div>

          {/* Express */}
          <div className="">
            <div className="md:h-20 h-12 md:w-20 w-12 border-2 p-2 border-amber-600 rounded flex justify-center items-center">
              <img
                src="https://cdn.simpleicons.org/express/FFFFFF"
                alt="Express.js"
              />
            </div>
            <div className="text-white text-xs text-center">Express.js</div>
          </div>

          {/* Mongoose */}
          <div className="">
            <div className="md:h-20 h-12 md:w-20 w-12 border-2 p-2 border-amber-600 rounded flex justify-center items-center">
              <img
                src="https://avatars.githubusercontent.com/u/7552965?s=200&v=4"
                alt="Mongoose"
                className="w-12 h-12"
              />
            </div>
            <div className="text-white text-xs text-center">Mongoose</div>
          </div>

          {/* Material UI */}
          <div className="">
            <div className="md:h-20 h-12 md:w-20 w-12 border-2 p-2 border-amber-600 rounded flex justify-center items-center">
              <img
                src="https://cdn.simpleicons.org/mui/007FFF"
                alt="Material UI"
                className="w-12 h-12"
              />
            </div>
            <div className="text-white text-xs text-center">Material UI</div>
          </div>

          {/* GitHub */}
          <div className="">
            <div className="md:h-20 h-12 md:w-20 w-12 border-2 p-2 border-amber-600 rounded flex justify-center items-center">
              <img
                src="https://cdn.simpleicons.org/github/FFFFFF"
                alt="GitHub"
                className="w-12 h-12"
              />
            </div>
            <div className="text-white text-xs text-center">GitHub</div>
          </div>

          {/* Git */}
          <div className="">
            <div className="md:h-20 h-12 md:w-20 w-12 border-2 p-2 border-amber-600 rounded flex justify-center items-center">
              <img
                src="https://cdn.simpleicons.org/git/F05032"
                alt="Git"
                className="w-12 h-12"
              />
            </div>
            <div className="text-white text-xs text-center">Git</div>
          </div>

          {/* Tailwind CSS */}
          <div className="">
            <div className="md:h-20 h-12 md:w-20 w-12 border-2 p-2 border-amber-600 rounded flex justify-center items-center">
              <img
                src="https://cdn.simpleicons.org/tailwindcss/06B6D4"
                alt="Tailwind CSS"
                className="w-12 h-12"
              />
            </div>
            <div className="text-white md:w-20 w-12 text-xs text-center">
              Tailwind CSS
            </div>
          </div>

          {/* Bootstrap */}
          <div className="">
            <div className="md:h-20 h-12 md:w-20 w-12 border-2 p-2 border-purple-500 rounded flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
                alt="Bootstrap"
              />
            </div>
            <div className="text-white md:w-20 w-12 text-xs text-center">
              Bootstrap
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <h3 className="text-white md:text-4xl text-2xl text-center font-semibold md:mb-14 mb:8">
          Tools & software
        </h3>

        <div className="grid lg:grid-cols-8 md:grid-cols-6 grid-cols-4 lg:mx-24 md:mx-16 my-10 flex-wrap md:gap-10 md:text-center gap-x-10 gap-y-4 mx-5">
          {/* Chrome */}
          <div className="">
            <div className="md:h-20 h-12 md:w-20 w-12 border-2 p-2 border-amber-600 rounded flex justify-center items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg"
                alt="Chrome"
              />
            </div>
            <div className="text-white text-xs text-center">Chrome</div>
          </div>

          {/* Edge */}
          <div className="">
            <div className="md:h-20 h-12 md:w-20 w-12 border-2 p-2 border-amber-600 rounded flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/98/Microsoft_Edge_logo_%282019%29.svg"
                alt="Microsoft Edge"
                // className="w-12 h-12"
              />
            </div>
            <div className="text-white text-xs text-center">Edge</div>
          </div>

          {/* VS Code */}
          <div className="">
            <div className="md:h-20 h-12 md:w-20 w-12 border-2 p-2 border-amber-600 rounded flex items-center justify-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                alt="VS Code"
              />
            </div>
            <div className="text-white text-xs text-center">VS Code</div>
          </div>

          {/* MongoDB Compass */}
          <div className="">
            <div className="md:h-20 h-12 md:w-20 w-12 border-2 p-2 border-amber-600 rounded flex items-center justify-center">
              <img
                src="https://cdn.simpleicons.org/mongodb/47A248"
                alt="MongoDB"
              />
            </div>
            <div className="text-white text-xs md:w-20 w-12 text-center">
              MongoDB
            </div>
          </div>

          {/* Postman */}
          <div className="">
            <div className="md:h-20 h-12 md:w-20 w-12 border-2 p-2 border-amber-600 rounded flex items-center justify-center">
              <img
                src="https://cdn.simpleicons.org/postman/FF6C37"
                alt="Postman"
              />
            </div>
            <div className="text-white text-xs">Postman</div>
          </div>

          {/* ChatGPT */}
          <div className="">
            <div className="md:h-20 h-12 md:w-20 w-12 border-2 p-2 border-amber-600 rounded flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"
                alt="ChatGPT"
              />
            </div>
            <div className="text-white text-xs">ChatGPT</div>
          </div>

          {/* GitHub Copilot */}
          <div className="">
            <div className="md:h-20 h-12 md:w-20 w-12 border-2 p-2 border-amber-600 rounded flex items-center justify-center">
              <img
                src="https://avatars.githubusercontent.com/u/108914296?s=200&v=4"
                alt="GitHub Copilot"
              />
            </div>
            <div className="text-white md:w-20 w-12 text-xs">
              GitHub Copilot
            </div>
          </div>
          
          {/* Vercel */}
          <div className="">
            <div className="md:h-20 h-12 md:w-20 w-12 border-2 p-2 border-white rounded flex items-center justify-center">
              <img
                src="https://assets.vercel.com/image/upload/front/favicon/vercel/favicon.ico"
                alt="Vercel"
              />
            </div>
            <div className="text-white md:w-20 w-12 text-xs text-center">
              Vercel
            </div>
          </div>
          
          {/* Render */}
          <div className="">
            <div className="md:h-20 h-12 md:w-20 w-12 border-2 p-2 border-cyan-400 rounded flex items-center justify-center">
              <img
                src="https://avatars.githubusercontent.com/u/44713215?s=200&v=4"
                alt="Render"
              />
            </div>
            <div className="text-white md:w-20 w-12 text-xs text-center">
              Render
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
