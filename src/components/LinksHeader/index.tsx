import React from "react";

interface LinksHeaderProps {
  link: string;
  img: string;
}

const LinksHeader: React.FC<LinksHeaderProps> = (props) => {
  return (
    <a target="_blank" href={props.link}>
      <img src={props.img} alt="Logos" />
    </a>
  );
};

export default LinksHeader;
