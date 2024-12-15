import styled, { keyframes } from "styled-components";

const HeaderStyle = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  z-index: 2024;
  border-bottom: 1px solid #62626252;
`;

const LogoMenu = styled.div`
  width: 100%;
  max-width: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoArthur = styled.div`
  width: 100%;
  max-width: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 AUTO;
  margin-top: -3rem;
  img {
    width: 100%;
  }
`;

const LogosRedesSociais = styled.div`
  width: 100%;
  max-width: 16rem;
  display: flex;
  align-items: center;
  gap: 16px;
  @media (max-width: 800px) {
    display: none;
  }
`;

const LogosRedesSociaisMobile = styled.div`
  width: 100%;
  max-width: 16rem;
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

//MENU MOBILE

const openMenu = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
`;

const MenuMobileStyle = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 2024;
`;

const LogoArthurMobile = styled.div`
  width: 100%;
  max-width: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 AUTO;
  margin-top: -3rem;
  padding-bottom: 4rem;
  img {
    width: 100%;
  }
`;

const MenuAside = styled.aside`
  width: 100%;
  height: 100vh;
  max-width: 20rem;
  position: relative;
  z-index: 10;
  background: #262626;
  padding-top: 5rem;
  animation: ${openMenu} 0.3s linear forwards; /* Animação em loop */
  nav {
    flex-direction: column;
  }
`;

const OverlayMenu = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: #00000091;
`;

export {
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
};
