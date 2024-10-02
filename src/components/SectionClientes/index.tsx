import {
  TitleSecTecnologias,
  SectionTecStyle,
  ListaDeClientes,
} from "../slyled-components/HomeStyle";
import { Container } from "../slyled-components/Container";
import MeusClientes from "../MeusClientes";
import LogoIncobio from "../../assets/incobio-logo.png";
import LogoCrecerto from "../../assets/crecerto-logo.png";
import LogoIncofima from "../../assets/incofima-logo.png";
import LogoMaisLeite from "../../assets/mais-leite-logo.png";
import LogoHospital from "../../assets/logo-hospital-pinhalzinho.png";

function SectionClientes() {
  return (
    <SectionTecStyle>
      <Container>
        <TitleSecTecnologias>CLIENTES</TitleSecTecnologias>
        <p>Alguns dos meus principais clientes pra quem ja trabalhei</p>
        <ListaDeClientes>
          <MeusClientes logo={LogoIncobio} />
          <MeusClientes logo={LogoCrecerto} />
          <MeusClientes logo={LogoIncofima} />
          <MeusClientes logo={LogoMaisLeite} />
          <MeusClientes logo={LogoHospital} />
        </ListaDeClientes>
      </Container>
    </SectionTecStyle>
  );
}

export default SectionClientes;
