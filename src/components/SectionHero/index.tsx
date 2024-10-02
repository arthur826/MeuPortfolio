import {
  SectionHeroStyle,
  Content,
  LeftHero,
  RightHero,
  SubtitleHero,
  TitleHero,
  SpanTitleHero,
  LinksHero,
} from "../slyled-components/HomeStyle";
import ImageRightHero from "../../assets/imagem-hero.jpg";
import { Container } from "../slyled-components/Container";

function SectionHero() {
  return (
    <SectionHeroStyle>
      <Container>
        <Content>
          <LeftHero>
            <SubtitleHero>Olá, me chamo</SubtitleHero>
            <TitleHero>
              ARTHUR <SpanTitleHero>VINICIUS</SpanTitleHero>
            </TitleHero>
            <p>
              Sou um desenvolvedor front-end apaixonado por criar interfaces
              modernas, responsivas e intuitivas. Aqui você encontrará uma
              seleção dos meus projetos, onde demonstro minhas habilidades em
              HTML, CSS, JavaScript, React, e outras tecnologias.{" "}
            </p>
            <LinksHero>
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=5549988861000"
              >
                Contate-me
              </a>
              <a href="#Portfolio">Portfolio</a>
            </LinksHero>
          </LeftHero>
          <RightHero>
            <img src={ImageRightHero} alt="" />
          </RightHero>
        </Content>
      </Container>
    </SectionHeroStyle>
  );
}

export default SectionHero;
