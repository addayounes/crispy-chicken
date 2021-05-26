import NavBar from './Components/NavBar/Navbar'
import Hero from './Components/Hero/Hero'
import Drinks from './Components/Drinks/Drinks'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import './utils/transition.css'

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Drinks />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
