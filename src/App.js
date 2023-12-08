import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Introduction from './Components/Introduction/Introduction';
import Chooseus from './Components/Chooseus/Chooseus';
import AreaofPractice from './Components/AreaofPractice/AreaofPractice';
import Clients from './Components/Clients/Clients';

function App() {
  return (<>
    <Navbar >{<Hero />}</Navbar>
    <Introduction />
    <Chooseus />
    <AreaofPractice />
    <Clients />
  </>
  );
}

export default App;
