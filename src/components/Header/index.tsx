import { Container } from "../slyled-components/Container";
import {
  HeaderStyle,
  LogoMenu,
  LogoArthur,
  LogosRedesSociais,
  Nav,
} from "../slyled-components/HeaderStyle";
import LinksHeader from "../LinksHeader";

import MenuIcon from "../../assets/menu-burger.png";
import MinhaLogo from "../../assets/logo-arthur.png";
import LogoGit from "../../assets/git-logo.png";
import LogoInstagram from "../../assets/ant-design_instagram.png";
import LogoWhatssap from "../../assets/uim_whatsapp.png";
import LogoLinkedin from "../../assets/mdi_linkedin.png";

const Header = () => {
  return (
    <>
      <HeaderStyle>
        <Container>
          <Nav>
            <LogoMenu>
              <LinksHeader link="" img={MenuIcon} />
            </LogoMenu>
            <LogosRedesSociais>
              <LinksHeader link="https://github.com/arthur826" img={LogoGit} />
              <LinksHeader
                link="https://api.whatsapp.com/send?phone=5549988861000"
                img={LogoWhatssap}
              />
              <LinksHeader
                link="https://www.instagram.com/oarthur_vinicius/"
                img={LogoInstagram}
              />
              <LinksHeader link="" img={LogoLinkedin} />
            </LogosRedesSociais>
          </Nav>
          <LogoArthur>
            <LinksHeader link="" img={MinhaLogo} />
          </LogoArthur>
        </Container>
      </HeaderStyle>
    </>
  );
};

export default Header;
