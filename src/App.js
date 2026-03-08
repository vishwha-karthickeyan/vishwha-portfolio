import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-primary text-accent selection:bg-accent selection:text-primary">
        <Header/>
        <Hero />
        <About/>
        <Projects/>
        <Contact/>
    </div>
  );
}

export default App;