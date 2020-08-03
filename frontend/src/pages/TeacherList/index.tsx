import React from "react";
import Header from "../../components/Header";

import TeacherItemComponent from "../../components/TeacherItem";

import { PageTeacherList, SourceTeachers } from "./styles";

function TeacherList() {
  return (
    <PageTeacherList className="container">
      <Header title="Estes são os proffys disponíveis">
        <SourceTeachers>
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>
          <div className="input-block">
            <label htmlFor="weekday">Dia da Semana</label>
            <input type="text" id="weekday" />
          </div>
          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </SourceTeachers>
      </Header>
      <main>
        <TeacherItemComponent />
      </main>
    </PageTeacherList>
  );
}

export default TeacherList;
