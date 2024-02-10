import { useState, useEffect } from "react";

import Header from "./Header";
import Form from "./tasks/Form";
import TasksList from "./tasks/TasksList";
import TipsList from "./tips/TipsList";
import "./App.scss";

const SERVER_URL = 'https://dev.adalab.es/api/todo/<tu_usuario_de_github>';

// Ejemplo: const SERVER_URL = 'https://dev.adalab.es/api/todo/Adalab-Digital';

function App() {
  const [tasks, setTasks] = useState([]);

  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    fetch(SERVER_URL)
      .then((response) => response.json())
      .then((data) => {
        if( !data.error ) {
          setTasks(data.results);
        }
        else {
          console.error(`Error en el servidor: ${data.error.message}`);
          console.log(data.error.description)
        }
      })
      .catch((error) => {
        console.error(`Error de conexión: ${error}`);
      });
  }, []);

  const handleClickCompleteTask = (taskId) => {
    const tasksClone = [...tasks];
    const clickedTask = tasksClone.find( task => task.id === taskId );
    clickedTask.completed = !clickedTask.completed;

    setTasks(tasksClone);
  }

  const handleInputNewTask = (newTaskName) => {
    setNewTask(newTaskName);
  };

  const handleClickAddTask = () => {
    const newTaskObject = {
      name: newTask,
      completed: false,
    };

    fetch(SERVER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTaskObject),
    })
      .then((response) => response.json())
      .then((dataResponse) => {
        if (dataResponse.success) {
          newTaskObject.id = dataResponse.id;

          const tasksWithNewTask = [...tasks, newTaskObject];

          setTasks(tasksWithNewTask);
          setNewTask("");
        }
      });
  };

  return (
    <div>
      <Header />
      <main className="main">
        <Form
          onInput={handleInputNewTask}
          onClickAdd={handleClickAddTask}
          newTaskValue={newTask}
        />

        <TasksList tasks={tasks} onClickCompleted={handleClickCompleteTask} />

        <TipsList />
      </main>
    </div>
  );
}

export default App;
