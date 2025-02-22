import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import AboutMe from './components/About';
import SkillStack from './components/SkillStack';


function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <AboutMe/>
        <SkillStack/>
        <Projects />
        <Timeline/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;