import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Introduction from './Components/Introduction/Introduction';
import Chooseus from './Components/Chooseus/Chooseus';
import AreaofPractice from './Components/AreaofPractice/AreaofPractice';
import Clients from './Components/Clients/Clients';
import Team from './Components/Team/Team';
import FAQ from './Components/FAQ/FAQ';
import Newsletter from './Components/Newsletter/Newsletter';
import Footer from './Components/Footer/Footer';

function App() {
  return (<>
    <Navbar >{<Hero />}</Navbar>
    <Introduction />
    <Chooseus />
    <AreaofPractice />
    <Clients />
    <Team />
    <FAQ />
    <Newsletter />
    <Footer />
  </>
  );
}

export default App;
