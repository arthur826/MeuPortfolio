import React from "react";
import { LogoClientes, Clientes } from "../slyled-components/HomeStyle";

interface LogosClientesProps {
  logo: string;
}

const LogoCliente: React.FC<LogosClientesProps> = (props) => {
  return (
    <Clientes>
      <LogoClientes>
        <img src={props.logo} alt="" />
      </LogoClientes>
    </Clientes>
  );
};

export default LogoCliente;
