import React from "react";
import Header from "../../components/Header";

import TeacherItemComponent from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";

import { PageTeacherList, SourceTeachers } from "./styles";

function TeacherList() {
  return (
    <PageTeacherList className="container">
      <Header title="Estes são os proffys disponíveis">
        <SourceTeachers>
          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Biologia", label: "Biologia" },
              { value: "Ciências", label: "Ciências" },
              { value: "Educação Fisíca", label: "Educação Fisíca" },
              { value: "Geografia", label: "Geografia" },
              { value: "História", label: "História" },
              { value: "Quimíca", label: "Quimíca" },
              { value: "Matemática", label: "Matemática" },
              { value: "Português", label: "Português" },
            ]}
          />
          <Select
            name="weekday"
            label="Dia da Semana"
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Segunda-Feira" },
              { value: "2", label: "Terça-Feira" },
              { value: "3", label: "Quarta-Feira" },
              { value: "4", label: "Quinta-Feira" },
              { value: "5", label: "Sexta-Feira" },
              { value: "6", label: "Sábado" },
            ]}
          />
          <Input name="time" label="Hora" />
        </SourceTeachers>
      </Header>
      <main>
        <TeacherItemComponent />
      </main>
    </PageTeacherList>
  );
}

export default TeacherList;
