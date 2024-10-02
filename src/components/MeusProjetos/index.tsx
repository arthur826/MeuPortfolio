import { Projeto } from "../slyled-components/HomeStyle";

interface ProjetosProps {
  projeto: string;
}

const MeusProjetos: React.FC<ProjetosProps> = (props) => {
  return (
    <Projeto>
      <img src={props.projeto} alt="" />
    </Projeto>
  );
};

export default MeusProjetos;
