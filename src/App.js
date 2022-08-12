import './App.css';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Introduction } from './components/Intro';
import { Nav } from './components/Nav';
import { Project } from './components/Project';
import { ModalProvider } from './context/ModalContext';
import Scrollspy from 'react-scrollspy'
import { InfoContext, InfoProvider } from './context/InfoContext';

function App() {
  return (
    <ModalProvider>
      <InfoProvider>
        <div className='bg-slate-800 text-white'>
          <Nav />
          <Introduction />
          <Project />
          <Experience />
          <Contact />
        </div>
      </InfoProvider>
    </ModalProvider >

  );
}

export default App;
