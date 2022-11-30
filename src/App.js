import './App.css';
import Contato from './Components/Contato';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Produtos from './Components/Produtos';
import Sobre from './Components/Sobre';
import WppButton from './Components/Helper/wppButton'

function App() {
  return (
    <>
      <Header />
      <Sobre />
      <Produtos />
      <Contato />
      <Footer />
      <WppButton />
    </>
  );
}

export default App;
