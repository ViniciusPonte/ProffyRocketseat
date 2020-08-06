import React from "react";

import { TeacherItem } from "./styles";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import api from "../../services/api";

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItemComponent: React.FC<TeacherItemProps> = ({ teacher }) => {
  function createConnection() {
    api.post("connection", {
      user_id: teacher.id,
    });
  }

  return (
    <TeacherItem>
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <p>{teacher.bio}</p>
      <footer>
        <p>
          Preço/hora: <strong>R$ {teacher.cost}</strong>
        </p>
        <a
          onClick={createConnection}
          href={`https://wa.me/${teacher.whatsapp}`}
        >
          <img src={whatsappIcon} alt="Whatsapp" /> Entrar em Contato
        </a>
      </footer>
    </TeacherItem>
  );
};

export default TeacherItemComponent;
