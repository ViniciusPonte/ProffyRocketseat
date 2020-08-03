import React from "react";

import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.svg";
import backIcon from "../../assets/images/icons/back.svg";

import { PageHeader } from "./styles";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <PageHeader>
      <div id="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logo} alt="Proffy" />
      </div>

      <div id="header-content">
        <strong>{props.title}</strong>
        {props.children}
      </div>
    </PageHeader>
  );
};

export default Header;
