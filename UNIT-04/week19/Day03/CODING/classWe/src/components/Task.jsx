import React from "react";
import {v4 as uuid} from "uuid";
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
      id: uuid()
    };
    let newTasks = [...tasks, payload];
    setTask(newTasks);
    setQuery("");
  };

  return (
    <div>
      <h1>React - Simple TODO</h1>

      <div className="input-group mb-5 mt-3">
        <input
          value={query}
          onChange={handelChange}
          type="text"
          placeholder="Write Something Here"
          className="form-control fs-2"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          onClick={handelAdd}
          className="btn btn-outline-secondary bg-warning fw-bold px-4"
          type="button"
        >
          +
        </button>

      </div>

      <div>
        {tasks.map((item) => {
          return <TaskItem todo={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export { Task };
