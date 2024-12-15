import { Container } from "@mui/material";
import {
  SectionServicosStyle,
  ListaDeServicosStyle,
  TituloServicosStyle,
} from "../slyled-components/HomeStyle";
import fundoServico1 from "../../assets/fundo-servicos-1.jpg";
import fundoServico2 from "../../assets/fundo-servicos-2.jpg";
import fundoServico3 from "../../assets/fundo-servicos-3.jpg";
import ListaDeServicos from "../ListaDeServicos";

function MeusServicos() {
  return (
    <SectionServicosStyle>
      <Container>
        <TituloServicosStyle>Meus serviços</TituloServicosStyle>
        <ListaDeServicosStyle>
          <ListaDeServicos title="LANDING PAGE" img={fundoServico1} />
          <ListaDeServicos title="SITE INSTITUCIONAL" img={fundoServico2} />
          <ListaDeServicos title="BLOG" img={fundoServico3} />
        </ListaDeServicosStyle>
      </Container>
    </SectionServicosStyle>
  );
}

export default MeusServicos;
