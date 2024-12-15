import { Container } from "../slyled-components/Container";
import {
  SectionContatoStyle,
  SubtituloContato,
  TituloContato,
  CenterStyle,
  IconeArthur,
  FundoContato,
  BtnContato,
  SectionOverSection,
} from "../slyled-components/HomeStyle";
import MinhaLogo from "../../assets/logo-arthur.png";
import FundoContatoIMG from "../../assets/imagem-hero.jpg";

function SectionContato() {
  return (
    <SectionContatoStyle>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <IconeArthur>
          <img src={MinhaLogo} alt="" />
        </IconeArthur>
        <CenterStyle>
          <FundoContato>
            <img src={FundoContatoIMG} alt="" />
          </FundoContato>
          <SubtituloContato>FALE COMIGO</SubtituloContato>
          <TituloContato>
            PRONTO PARA<br></br> COMECAR?
          </TituloContato>
          <p>
            Traga sua sua ideia para a mim e vamos transforma-la em realidade,
            não somos apenas uma agência que desenvolve projetos, buscamos
            contribuir com nosso conhecimento para transformar seu projeto em
            uma experiência incrível.
          </p>
          <BtnContato>
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5549988018860"
            >
              contate-me
            </a>
          </BtnContato>
        </CenterStyle>
      </Container>
      <SectionOverSection></SectionOverSection>
    </SectionContatoStyle>
  );
}

export default SectionContato;
