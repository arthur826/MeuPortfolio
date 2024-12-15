import React from "react";
import {
  BoxServico,
  ImagemDeFundoServicos,
  TituloBoxServicos,
} from "../slyled-components/HomeStyle";

interface ListaDeServicosProps {
  title: string;
  img: string;
}

const ListaDeServicos: React.FC<ListaDeServicosProps> = (props) => {
  return (
    <>
      <BoxServico>
        <ImagemDeFundoServicos src={props.img} alt="" />
        <TituloBoxServicos>{props.title}</TituloBoxServicos>
      </BoxServico>
    </>
  );
};

export default ListaDeServicos;
