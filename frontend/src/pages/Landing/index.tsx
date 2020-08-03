import React from "react";

import logo from "../../assets/images/logo.svg";
import landing from "../../assets/images/landing.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

import {
  PageLanding,
  LogoContainer,
  HeroImage,
  ButtonsContainer,
  TotalConnections,
  PageLandingContent,
} from "./styles";

function Landing() {
  return (
    <PageLanding>
      <PageLandingContent className="container">
        <LogoContainer>
          <img src={logo} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </LogoContainer>

        <HeroImage src={landing} alt="Landing" />
        <ButtonsContainer>
          <a href="" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </a>
          <a href="" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Dar aulas
          </a>
        </ButtonsContainer>
        <TotalConnections>
          Total de 200 conexões já realizadas{" "}
          <img src={purpleHeartIcon} alt="Coração Roxo" />
        </TotalConnections>
      </PageLandingContent>
    </PageLanding>
  );
}

export default Landing;
