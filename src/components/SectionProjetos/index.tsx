import { SectionProjetosStyle } from "../slyled-components/HomeStyle";
import { Container } from "../slyled-components/Container";
import MeusProjetos from "../MeusProjetos";
import Projeto1 from "../../assets/flyerp.jpg";
import Projeto2 from "../../assets/incobio.jpg";
import Projeto3 from "../../assets/jotapix.jpg";
import Projeto4 from "../../assets/dutradacroce.jpg";
import Projeto5 from "../../assets/sistemamaisleite.jpg";
import Projeto6 from "../../assets/hospital-pinhalzinho.jpg";

function SectionTecnologias() {
  return (
    <SectionProjetosStyle id="Portfolio">
      <Container>
        <h2>MEUS PROJETOS</h2>
        <ul style={{ display: "flex", flexWrap: "wrap", gap: "3rem" }}>
          <MeusProjetos projeto={Projeto1} />
          <MeusProjetos projeto={Projeto2} />
          <MeusProjetos projeto={Projeto3} />
          <MeusProjetos projeto={Projeto4} />
          <MeusProjetos projeto={Projeto5} />
          <MeusProjetos projeto={Projeto6} />
        </ul>
      </Container>
    </SectionProjetosStyle>
  );
}

export default SectionTecnologias;
