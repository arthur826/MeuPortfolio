import styled from "styled-components";

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
`;

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export { HeaderStyle, LogoMenu, LogoArthur, LogosRedesSociais, Nav };
