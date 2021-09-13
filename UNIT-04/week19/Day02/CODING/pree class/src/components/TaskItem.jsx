import React from "react";

function TaskItem({ tittle, status, color }) {
  return (
    <div style={{ color }}>
      <h3>{`${tittle} - ${status}`}</h3>
    </div>
  );
}

export { TaskItem };