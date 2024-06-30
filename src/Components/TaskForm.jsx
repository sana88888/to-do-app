import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description) {
      alert("Veuillez remplir tous les champs");
      return;
    }
    const newTask = { id: Date.now(), name, description, completed: false };
    addTask(newTask);
    setName("");
    setDescription("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nom de la tâche"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default TaskForm;
