import TaskList from "./Components/TaskList/TaskList"
import NewTask from "./Components/NewTask/NewTask";
import { useState } from "react";

const Tasks =  [
  { id: 1,
    content: "Salir a correr."
  },
  {
    id: 2,
    content: "Hacer Práctica Obligatoria 4 de Laboratorio."
  },
  {
    id: 3,
    content: "Hacer las compras del mes."
  }
];

function App() {

  const [initialTasks, setInitialTasks] = useState(Tasks);

  const saveTaskDataHandler = (enteredTaskData) => {

    const taskData = {
      ...enteredTaskData,
      id: Math.random().toString(),
    }
  
    setInitialTasks([taskData, ...initialTasks]);
    console.log(taskData);
  }

  const deleteTask = (id) => {
        setInitialTasks(initialTasks.filter(task => task.id !== id))
  }

  return(
    <>
      <div>
        <h2>Lista de tareas:</h2>
      </div>
      <div>
        <NewTask onTaskDataSaved={saveTaskDataHandler}/>
        <TaskList tasks={initialTasks} deleteTask={deleteTask}/>
      </div>
    </>
  );
}

export default App
