import React from "react";

import { TeacherItem } from "./styles";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

const TeacherItemComponent = () => {
  return (
    <TeacherItem>
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4"
          alt="Diego Fernandes"
        />
        <div>
          <strong>Diego Fernandes</strong>
          <span>Quimica</span>
        </div>
      </header>
      <p>
        ssssssssssssssssssssssssss
        <br />
        <br />
        ssssssssssssssssssssssssssssss
        sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
        sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
        sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
      </p>
      <footer>
        <p>
          Preço/hora: <strong>R$ 20,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" /> Entrar em Contato
        </button>
      </footer>
    </TeacherItem>
  );
};

export default TeacherItemComponent;
