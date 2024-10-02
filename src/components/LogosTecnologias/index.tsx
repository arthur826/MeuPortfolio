import React from "react";
import { LogoTec, Tecnologias } from "../slyled-components/HomeStyle";

interface LogosTecProps {
  logo: string;
  nome: string;
}

const LogoTecnologia: React.FC<LogosTecProps> = (props) => {
  return (
    <Tecnologias>
      <LogoTec>
        <img src={props.logo} alt="" />
      </LogoTec>
      <p>{props.nome}</p>
    </Tecnologias>
  );
};

export default LogoTecnologia;
