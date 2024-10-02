import { Container } from "@mui/material";
import { SectionServicosStyle } from "../slyled-components/HomeStyle";
import fundoServico1 from "../../assets/fundo-servicos-1.jpg";
import fundoServico2 from "../../assets/fundo-servicos-2.jpg";
import fundoServico3 from "../../assets/fundo-servicos-3.jpg";

function MeusServicos() {
  return (
    <SectionServicosStyle>
      <Container>
        <h2
          style={{
            fontSize: "3rem",
            fontWeight: "300",
            color: "#fff",
            marginBottom: "3rem",
          }}
        >
          Meus serviços
        </h2>
        <ul
          style={{
            display: "flex",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          <li
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              maxWidth: "54rem",
              height: "65rem",
              textAlign: "center",
              position: "relative",
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                filter: "brightness(0.5)",
              }}
              src={fundoServico1}
              alt=""
            />
            <h4
              style={{
                fontSize: "3rem",
                fontWeight: "200",
                color: "#fff",
                position: "absolute",
              }}
            >
              LANDING PAGE
            </h4>
          </li>
          <li
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              maxWidth: "54rem",
              height: "65rem",
              textAlign: "center",
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                filter: "brightness(0.5)",
              }}
              src={fundoServico2}
              alt=""
            />
            <h4
              style={{
                fontSize: "3rem",
                fontWeight: "200",
                color: "#fff",
                position: "absolute",
              }}
            >
              SITE <br></br>INSTITUCIONAL
            </h4>
          </li>
          <li
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              maxWidth: "54rem",
              height: "65rem",
              textAlign: "center",
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                filter: "brightness(0.5)",
              }}
              src={fundoServico3}
              alt=""
            />
            <h4
              style={{
                fontSize: "3rem",
                fontWeight: "200",
                color: "#fff",
                position: "absolute",
              }}
            >
              BLOG
            </h4>
          </li>
        </ul>
      </Container>
    </SectionServicosStyle>
  );
}

export default MeusServicos;
