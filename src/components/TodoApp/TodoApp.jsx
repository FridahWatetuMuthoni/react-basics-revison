import { useState } from "react";
import "./TodoApp.css";

function TodoApp() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Eat breakfast",
    },
    {
      id: 2,
      name: "walk the dog",
    },
  ]);
  const [newTask, setNewTask] = useState("");
  const [editing, setEditing] = useState(false);
  const [updatingId, setUpdatingId] = useState(0);

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim()) {
      if (editing) {
        updateText(newTask);
      } else {
        //create new tasks
        let create_new_task = {
          id: new Date().getTime(),
          name: newTask,
        };

        setTasks((prev) => {
          return [...prev, create_new_task];
        });
      }
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((task, id) => {
      return id !== index;
    });
    setTasks(updatedTasks);
  };

  const handelUpdate = (index) => {
    setEditing(true);
    let task = tasks.filter((element, id) => index === id);
    task = task[0];
    setUpdatingId(task.id);
    setNewTask(task.name);
  };

  const updateText = (text) => {
    let task = tasks.filter((element) => element.id === updatingId);
    task = task[0];
    task.name = text;
    setEditing(false);
    setUpdatingId(0);
    setNewTask("");
  };

  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  return (
    <section className="to-do-list">
      <div className="card">
        <h1>Todo List</h1>
        <div>
          <input
            type="text"
            name="newTask"
            id="newTask"
            placeholder="Enter a task..."
            value={newTask}
            onChange={(e) => handleChange(e)}
          />
          <button className="add-button" onClick={addTask}>
            Add Task
          </button>
        </div>
        <ol>
          {tasks.map((task, index) => {
            return (
              <li key={index}>
                <span className="text">{task.name}</span>
                <div>
                  <button
                    className="delete-button"
                    onClick={() => deleteTask(index)}
                  >
                    Delete
                  </button>
                  <button
                    className="move-button"
                    onClick={() => moveTaskUp(index)}
                  >
                    Move ☝️
                  </button>
                  <button
                    className="update-button"
                    onClick={() => handelUpdate(index)}
                  >
                    Update Todo
                  </button>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export default TodoApp;
