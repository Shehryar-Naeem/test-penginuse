import './App.css';
import Development from './Components/Development';
import Faq from './Components/Faq';
import Features from './Components/Features';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Philantrophic from './Components/Philantrophic';
import Roadmap from './Components/Roadmap';
import Specs from './Components/Specs';
import Team from './Components/Team';
import TopSection from './Components/TopSection';
import Welcome from './Components/Welcome';

function App() {
  return (
    <>
      <Navbar/>
      <TopSection/>
      <Welcome/>
      <Features/>
      <Philantrophic/>
      <Roadmap/>
      <Development/>
      <Specs/>
      <Team/>
      <Faq/>
      <Footer/>
    </>
  );
}

export default App;
