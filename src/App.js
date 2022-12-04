import './App.css';
// COMPONENTS
import Header from './components/Header';
import Landing from './components/Landing';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <main className='text-white w-100'>
      <Header />
      <Landing />
      <hr className='container' />
      <Skills />
      <hr className='container' />
      <Projects />
      <hr className='container' />
      <Contact />
    </main>
  );
}

export default App;
