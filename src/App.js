import './App.css';
import Aboutme from './components/Aboutme';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import Services from './components/Services';
import Welcome from './components/Welcome';

function App() {


  return (
    <div className="App">
     <Header/>
     <Welcome/>
     <Aboutme/>
     <Services/>
     <Projects/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
