import React, { useState } from "react";

export default function Exercise() {
  const [studentInfo, setStudentInfo] = useState({
    nom: "",
    prenom: "",
    group: "Group1",
    module: "Module1",
    note: "",
  });

  const [notesList, setNotesList] = useState([]);
  const [totalNotes, setTotalNotes] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentInfo({
      ...studentInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = studentInfo.note;
    setNotesList([...notesList, { ...studentInfo, note: newNote }]);
    setTotalNotes(totalNotes + newNote);
    setStudentInfo({ ...studentInfo, note: "" });
  };

  const moyenne =
    notesList.length > 0
      ? notesList.reduce(
          (total, current) => total + parseFloat(current.note),
          0
        ) / notesList.length
      : 0;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Nom</label>{" "}
        <input
          name="nom"
          type="text"
          placeholder="Enter le nom"
          onChange={handleChange}
        />
        <br />
        <label>Prenom</label>
        <input
          name="prenom"
          type="text"
          placeholder="Enter le prenom"
          onChange={handleChange}
        />
        <br />
        <label>Group</label>
        <select name="group" onChange={handleChange}>
          <option>Group1</option>
          <option>Group2</option>
        </select>
        <br />
        <label>Module</label>
        <select name="module" onChange={handleChange}>
          <option>Module 1</option>
          <option>Module 2</option>
        </select>
        <br />
        <br />
        <label>Note</label>{" "}
        <input
          name="note"
          type="number"
          placeholder="Enter la note"
          onChange={handleChange}
        />
        <br />
        <button type="submit">Ajouter</button>
      </form>
      <p>Nom : {studentInfo.nom}</p>
      <p>Prenom : {studentInfo.prenom}</p>
      <p>Group : {studentInfo.group}</p>
      <h3>Liste des note</h3>
      {notesList.map((student, index) => (
        <div key={index}>
          <p>
            Module {index + 1}: {student.note}
          </p>
        </div>
      ))}
      <p>Moyenne : {moyenne}</p>
      <p>{moyenne >= 10 ? "Admis" : "Redouble"}</p>
    </>
  );
}
