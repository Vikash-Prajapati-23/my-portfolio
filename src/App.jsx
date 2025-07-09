import './App.css'
import About from './components/About/About'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Skills from './components/Skills/Skills'

function App() {

  return (
    <div className=''>

{/* <img
              src="https://avatars.githubusercontent.com/u/7552965?s=200&v=4"
              alt="Mongoose"
              className="w-16 h-16"
            /> */}

            {/* <img
              src="https://cdn.simpleicons.org/github/FFFFFF"
              alt="github"
              className="w-16 h-16"
            /> */}


      <Navbar />
      <Home />
      <About />
      <Skills />
    </div>
  )
}

export default App
