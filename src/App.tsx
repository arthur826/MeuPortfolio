import Header from "./components/Header";
import SectionHero from "./components/SectionHero";
import "./App.css";
import SectionTecnologias from "./components/SectionTecnologias";
import SectionProjetosStyle from "./components/SectionProjetos";
import MeusServicos from "./components/Servicos";
import SectionContato from "./components/SectionContato";
import SectionClientes from "./components/SectionClientes";

function App() {
  return (
    <>
      <Header />
      <SectionHero />
      <SectionTecnologias />
      <MeusServicos />
      <SectionClientes />
      <SectionProjetosStyle />
      <SectionContato />
    </>
  );
}

export default App;
