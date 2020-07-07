import React, { useState, useEffect } from "react";
import uuid from "uuid/v4";

const TASKS_STORAGE_KEY = "TASKS_STORAGE_KEY";
const storeTasks = (tasksMap) => {
  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasksMap));
};

const readStoredTasks = () => {
  const tasksMap = localStorage.getItem(TASKS_STORAGE_KEY);
  return tasksMap ? JSON.parse(tasksMap) : { tasks: [], completedTasks: [] };
};

function Tasks() {
  const [taskText, setTaskText] = useState("");
  const tasksMap = readStoredTasks();
  const [tasks, setTasks] = useState(tasksMap.tasks);
  const [completedTasks, setCompletedTask] = useState(tasksMap.completedTasks);
  useEffect(() => {
    storeTasks({ tasks, completedTasks });
  });

  const updateTaskText = (event) => {
    setTaskText(event.target.value);
  };
  const addTask = () => {
    setTasks([...tasks, { taskText, id: uuid() }]);
  };
  const completeTask = (completedTask) => {
    setCompletedTask([...completedTasks, completedTask]);
    setTasks(tasks.filter((task) => task.id !== completedTask.id));
  };
  const deleteTask = (deletedTask) => {
    setCompletedTask(
      completedTasks.filter((task) => task.id !== deletedTask.id)
    );
  };
  return (
    <div>
      <h3>Tasks</h3>
      <div className="form">
        <input onChange={updateTaskText} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="task-list">
        {tasks.map((task) => {
          const { id, taskText } = task;
          return (
            <div onClick={() => completeTask(task)} key={id}>
              {taskText}
            </div>
          );
        })}
      </div>
      <div className="completed-list">
        {completedTasks.map((task) => {
          const { id, taskText } = task;
          return (
            <div key={id}>
              {taskText}{" "}
              <span className="delete-task" onClick={() => deleteTask(task)}>
                x
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tasks;
