import React from "react";
import studyIcon from "./study.svg";

const Home = () => {
  return (
    <div className="flex-centered">
      <img src={studyIcon} height="180px" alt="study" />
      <h1>Visita nuestra página de cursos para saber más.</h1>
    </div>
  );
};

export default Home;
