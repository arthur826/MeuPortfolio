import {
  TitleSecTecnologias,
  SectionTecStyle,
  ListaDeLogos,
} from "../slyled-components/HomeStyle";
import { Container } from "../slyled-components/Container";
import LogoTecnologia from "../LogosTecnologias";
import ReactLogo from "../../assets/react-logo.png";
import RiveLogo from "../../assets/rive-logo.png";
import JSLogo from "../../assets/js-logo.png";
import CSSLogo from "../../assets/css-logo.png";
import HTMLLogo from "../../assets/html-logo.png";

function SectionTecnologias() {
  return (
    <SectionTecStyle>
      <Container>
        <TitleSecTecnologias>Tecnologias que uso</TitleSecTecnologias>
        <p>
          Tecnologias que fazem toda a diferença no seu projeto, desde melhorar
          a velocidade até animações incríveis!
        </p>
        <ListaDeLogos>
          <LogoTecnologia logo={ReactLogo} nome="React" />
          <LogoTecnologia logo={RiveLogo} nome="Rive" />
          <LogoTecnologia logo={JSLogo} nome="JavaScript" />
          <LogoTecnologia logo={CSSLogo} nome="CSS" />
          <LogoTecnologia logo={HTMLLogo} nome="HTML" />
        </ListaDeLogos>
      </Container>
    </SectionTecStyle>
  );
}

export default SectionTecnologias;
