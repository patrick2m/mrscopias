import './App.scss';
import Contato from './Components/Contato';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Produtos from './Components/Produtos';
import Sobre from './Components/Sobre';
import WppButton from './Components/helper/WppButton'
import Locais from './Components/Locais';

function App() {
  return (
    <>
      <Header />
      <Sobre />
      <Locais />
      <Produtos />
      <Contato />
      <Footer />
      <WppButton />
    </>
  );
}

export default App;
