import React from "react";

const cursos = [
  {
    id: "1",
    name: "UX/UI",
    className: "ux"
  },
  {
    id: "2",
    name: "Data Science",
    className: "ds"
  },
  {
    id: "3",
    name: "Desarrollo Back-end",
    className: "fsv"
  },
  {
    id: "4",
    name: "Desarrollo Front-end",
    className: "fa"
  }
];
const ListaCursos = () => {
  return (
    <div>
      <h2>Cursos</h2>
      <ul className="curso">
        {cursos.map((curso) => (
          <li key={curso.id}>{curso.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaCursos;
