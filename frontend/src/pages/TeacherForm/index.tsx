import React from "react";
import Header from "../../components/Header";
import Input from "../../components/Input";
import TextArea from "../../components/Textarea";
import Select from "../../components/Select";
import WarningIcon from "../../assets/images/icons/warning.svg";

import { PageTeacherForm } from "./styles";

function TeacherForm() {
  return (
    <PageTeacherForm className="container">
      <Header
        title="Que incrível que você quer dar aulas!"
        description="O primeiro passo, é preencher este formulário de inscrição"
      />
      <main>
        <fieldset>
          <legend>Seus dados</legend>
          <Input name="name" label="Nome Completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="WhatsApp" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>
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
          <Input name="cost" label="Custo da sua aula por hora" />
          <TextArea name="bio" label="Biografia" />
        </fieldset>

        <fieldset>
          <legend>
            Horários Disponíveis <button type="button">+ Novo horário</button>
          </legend>
          <div className="schedule-item">
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
            <Input name="from" label="Das" type="time" />
            <Input name="to" label="Até" type="time" />
          </div>
        </fieldset>

        <footer>
          <p>
            <img src={WarningIcon} alt="Aviso Importante" /> Importante! <br />
            Preencha todos os dados!
          </p>
          <button type="button">Salvar Cadastro</button>
        </footer>
      </main>
    </PageTeacherForm>
  );
}

export default TeacherForm;
