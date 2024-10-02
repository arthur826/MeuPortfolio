import styled from "styled-components";

//  SESSAO INICIAL

const SectionHeroStyle = styled.section`
  width: 100%;
  background-color: #000;
  position: relative;
  padding-top: 6rem;
  @media (max-width: 500px) {
    padding-bottom: 5rem;
    border-bottom: 1px solid #212121;
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const LeftHero = styled.div`
  width: 100%;
  max-width: 50%;
  p {
    font-size: 14px;
    color: #fff;
    font-weight: 300;
    font-family: "Montserrat", sans-serif;
    margin-bottom: 3rem;
  }
  @media (max-width: 500px) {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  @media (max-width: 380px) {
    p {
      font-size: 12px;
    }
  }
`;

const SubtitleHero = styled.h3`
  font-size: 3.5rem;
  font-weight: 400;
  font-family: "Bruno Ace", sans-serif;
  color: #fff;
  margin-bottom: 2rem;
  position: relative;
  &::after {
    content: "";
    width: 100%;
    max-width: 15rem;
    height: 1px;
    background-color: #ffff;
    position: absolute;
    bottom: 16px;
    left: 33rem;
  }
  @media (max-width: 500px) {
    font-size: 2.5rem;
    margin-bottom: 3rem;
    &:after {
      display: none;
    }
  }
  @media (max-width: 380px) {
    font-size: 2rem;
  }
`;

const TitleHero = styled.h1`
  font-size: 14rem;
  font-weight: 500;
  text-transform: uppercase;
  color: #fff;
  line-height: 74px;
  margin-bottom: 3rem;
  position: relative;
  z-index: 10;
  @media (max-width: 500px) {
    font-size: 7rem;
    line-height: 40px;
  }
  @media (max-width: 380px) {
    font-size: 6rem;
  }
`;

const SpanTitleHero = styled.span`
  color: transparent; // Deixa o interior do texto transparente
  -webkit-text-stroke: 1px #9d9d9d;
  margin-left: 5rem;
  @media (max-width: 500px) {
    font-size: 65px;
    margin-left: 0;
  }
  @media (max-width: 380px) {
    font-size: 55px;
  }
`;

const LinksHero = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  a {
    color: #fff;
    font-size: 16px;
  }
  @media (max-width: 500px) {
    justify-content: center;
  }
`;

const RightHero = styled.div`
  width: 100%;
  z-index: 0;
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    max-width: 1px;
    height: 100%;
    background-color: #62626252;
    top: 0;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;

//

const SectionServicosStyle = styled.div`
  width: 100%;
  padding-top: 5rem;
  padding-bottom: 5rem;
  background-color: #000;
`;

// SESSAO TECNOLOGIAS

const SectionTecStyle = styled.section`
  position: relative;
  width: 100%;
  background-color: #000;
  padding-top: 5rem;
  padding-bottom: 5rem;
  text-align: center;
  box-shadow: 10px -50px 70px 10px #000000;
  z-index: 10;
  p {
    font-size: 14px;
    color: #fff;
    font-weight: 300;
    font-family: "Montserrat", sans-serif;
  }
  @media (max-width: 500px) {
    box-shadow: none;
  }
`;

const TitleSecTecnologias = styled.h2`
  font-size: 3rem;
  font-weight: 100;
  color: #fff;
  margin-bottom: 1.6rem;
  @media (max-width: 500px) {
    font-size: 2.4rem;
  }
`;

const ListaDeLogos = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  @media (max-width: 500px) {
    margin-top: 3rem;
    gap: 2rem;
  }
`;

const LogoTec = styled.div`
  width: 100%;
  max-width: 6rem;
  margin-bottom: 1rem;
  @media (max-width: 500px) {
    max-width: 3rem;
  }
`;

const Tecnologias = styled.li`
  width: 100%;
  max-width: 33rem;
  height: 12rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #636363;
  p {
    font-family: "Bruno Ace", sans-serif;
  }
  @media (max-width: 500px) {
    height: inherit;
    border: none;
  }
`;

//
const SectionProjetosStyle = styled.section`
  width: 100%;
  background-color: #000;
  padding-top: 5rem;
  padding-bottom: 15rem;
  text-align: center;
  h2 {
    font-size: 3rem;
    font-weight: 300;
    text-transform: uppercase;
    color: #fff;
    margin-bottom: 5rem;
  }
  @media (max-width: 500px) {
    h2 {
      font-size: 2.4rem;
    }
  }
`;

const Projeto = styled.li`
  width: 100%;
  max-width: 37.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
  }
  @media (max-width: 500px) {
    max-width: 100%;
    border-radius: 1rem;
    overflow: hidden;
  }
`;
//

const SectionContatoStyle = styled.section`
  width: 100%;
  background-color: #000;
  position: relative;
  margin-bottom: 8rem;
  p {
    font-family: "Montserrat", sans-serif;
    color: #cbc9c9;
    font-size: 15px;
    z-index: 1;
    width: 100%;
    max-width: 80%;
    margin-bottom: 3rem;
  }
  @media (max-width: 500px) {
    p {
      max-width: 100%;
      font-size: 14px;
    }
  }
`;
const SectionOverSection = styled.section`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  border-top: 1px solid hsl(296deg 65% 44% / 30%);
  border-bottom: 1px solid hsl(296deg 65% 44% / 30%);
  background: linear-gradient(
      to left,
      rgba(21, 143, 68, 0) 43.42%,
      #000000 73.4%
    ),
    linear-gradient(to right, rgba(21, 143, 68, 0) 59.42%, #000000 68.4%);
  @media (max-width: 500px) {
    background: linear-gradient(
        to left,
        rgba(21, 143, 68, 0) 27.42%,
        #000000 117.4%
      ),
      linear-gradient(to right, rgba(21, 143, 68, 0) 59.42%, #000000 100.4%);
  }
`;

const CenterStyle = styled.div`
  width: 100%;
  max-width: 55%;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding-top: 10rem;
  padding-bottom: 8rem;
  overflow: hidden;
  @media (max-width: 500px) {
    max-width: 100%;
  }
`;

const FundoContato = styled.div`
  width: 100%;
  position: absolute;
  z-index: 0;
`;

const IconeArthur = styled.div`
  width: 100%;
  max-width: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  position: absolute;
  top: -22px;
`;

const SubtituloContato = styled.span`
  font-size: 14px;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 1.4rem;
  z-index: 1;
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

const TituloContato = styled.span`
  font-size: 3.5rem;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 2rem;
  line-height: 40px;
  letter-spacing: 2px;
  z-index: 1;
  @media (max-width: 500px) {
    font-size: 3rem;
    line-height: 35px;
  }
`;

const BtnContato = styled.button`
  background-color: transparent;
  border: 1px solid #636363;
  border-bottom-right-radius: 2rem;
  z-index: 1;
  padding: 1.4rem 3rem;
  letter-spacing: 1px;
  transition: all 0.5s ease;
  a {
    font-size: 18px;
    text-transform: uppercase;
    color: #989898;
    transition: all 0.5s ease;
  }
  &:hover {
    background-color: #fff;
    a {
      color: #020206;
    }
  }
`;
//
const ListaDeClientes = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
`;

const Clientes = styled.li`
  width: 100%;
  max-width: 33rem;
  height: 12rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #636363;
`;

const LogoClientes = styled.div`
  width: 100%;
  max-width: 14rem;
  margin-bottom: 1rem;
`;

export {
  SectionHeroStyle,
  Content,
  LeftHero,
  RightHero,
  SubtitleHero,
  TitleHero,
  SpanTitleHero,
  LinksHero,
  TitleSecTecnologias,
  SectionTecStyle,
  LogoTec,
  Tecnologias,
  ListaDeLogos,
  Projeto,
  SectionProjetosStyle,
  SectionServicosStyle,
  SectionContatoStyle,
  SubtituloContato,
  TituloContato,
  CenterStyle,
  IconeArthur,
  FundoContato,
  BtnContato,
  SectionOverSection,
  LogoClientes,
  Clientes,
  ListaDeClientes,
};
