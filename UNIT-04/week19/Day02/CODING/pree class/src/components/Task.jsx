import React from "react";
import { TaskItem } from "./TaskItem";

function Task() {
  const [query, setQuery] = React.useState("");
  const [tasks, setTask] = React.useState([]);

  const handelChange = (e) => {
    const { value } = e.target;
    setQuery(value);
  };

  const handelAdd = () => {
    const payload = {
      tittle: query,
      status: false,
    };
    let newTasks = [...tasks, payload];
    setTask(newTasks)
  };

  return (
    <div>
      <h1>Add Tasks Here</h1>
      <div>
        <input
          value={query}
          onChange={handelChange}
          type="text"
          placeholder="Add Something Here"
        />
        <button onClick={handelAdd}>Add Task</button>
      </div>
      <div>
        {tasks.map((item, index) => {
          return <TaskItem color={index % 2 === 0 ? "green" : "red"} {...item} />;
        })}
      </div>
    </div>
  );
}

export { Task };
