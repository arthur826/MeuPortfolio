import { Container } from "../slyled-components/Container";
import {
  HeaderStyle,
  LogoMenu,
  LogoArthur,
  LogosRedesSociais,
  Nav,
  MenuMobileStyle,
  MenuAside,
  OverlayMenu,
  LogosRedesSociaisMobile,
  LogoArthurMobile,
} from "../slyled-components/HeaderStyle";
import LinksHeader from "../LinksHeader";

import MenuIcon from "../../assets/menu-burger.png";
import MinhaLogo from "../../assets/logo-arthur.png";
import LogoGit from "../../assets/git-logo.png";
import LogoWhatssap from "../../assets/uim_whatsapp.png";
import LogoLinkedin from "../../assets/mdi_linkedin.png";
import { useState } from "react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <HeaderStyle>
        <Container>
          <Nav>
            <LogoMenu>
              <button onClick={() => setOpenMenu(true)}>
                <img src={MenuIcon} alt="" />
              </button>
            </LogoMenu>
            <LogosRedesSociais>
              <LinksHeader link="https://github.com/arthur826" img={LogoGit} />
              <LinksHeader
                link="https://api.whatsapp.com/send?phone=5549988018860"
                img={LogoWhatssap}
              />
              <LinksHeader link="" img={LogoLinkedin} />
            </LogosRedesSociais>
          </Nav>
          <LogoArthur>
            <LinksHeader link="" img={MinhaLogo} />
          </LogoArthur>
        </Container>
      </HeaderStyle>

      {openMenu && (
        <MenuMobileStyle>
          <OverlayMenu onClick={() => setOpenMenu(false)}></OverlayMenu>
          <MenuAside>
            <Nav>
              <LogoArthurMobile>
                <LinksHeader link="" img={MinhaLogo} />
              </LogoArthurMobile>
              <LogosRedesSociaisMobile>
                <LinksHeader
                  link="https://github.com/arthur826"
                  img={LogoGit}
                />
                <LinksHeader
                  link="https://api.whatsapp.com/send?phone=5549988018860"
                  img={LogoWhatssap}
                />
                <LinksHeader link="" img={LogoLinkedin} />
              </LogosRedesSociaisMobile>
            </Nav>
          </MenuAside>
        </MenuMobileStyle>
      )}
    </>
  );
};

export default Header;
