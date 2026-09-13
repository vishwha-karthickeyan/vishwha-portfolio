import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-[#090a0f] text-accent selection:bg-emerald-500 selection:text-slate-950">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
    </div>
  );
}

export default App;