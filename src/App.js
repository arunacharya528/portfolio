import './App.css';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Introduction } from './components/Intro';
import { Nav } from './components/Nav';
import { Project } from './components/Project';
import { ModalProvider } from './context/ModalContext';
import Scrollspy from 'react-scrollspy'

function App() {

  console.log(process.env.REACT_APP_API_URL)
  return (

    <ModalProvider>
      <div className='bg-slate-800 text-white'>
        <Nav />
        <Introduction />
        <Project />
        <Experience />
        <Contact />
      </div>
    </ModalProvider >

  );
}

export default App;
