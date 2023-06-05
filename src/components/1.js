import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const todo = () => {
  return (
    <div className="todo_item">
      <div className="Todo">
        {/* <p
          className={`${task.completed ? "completed" : ""}`}
          onClick={() => toggleComplete(task.id)}
        >
          {task.task}
        </p> */}
        <p>Gp tp schoole</p>
        {/* <div>
          <FontAwesomeIcon
            icon={faPenToSquare}
            onClick={() => editTodo(task.id)}
          />
          <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
        </div> */}
        <div>
          <FontAwesomeIcon icon={faPenToSquare} />
          <FontAwesomeIcon icon={faTrash} />
        </div>
      </div>
    </div>
  );
};
