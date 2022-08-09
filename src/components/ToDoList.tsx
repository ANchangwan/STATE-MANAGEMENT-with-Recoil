import React from "react";
import CreateToDo from "./CreateTodo";
import { toDoState } from "../atoms";
import { useRecoilValue } from "recoil";
import ToDo from "./ToDo";
// setValue 값이 유효하면 input에 입력된 값을 지움
function ToDoList() {
  const toDos = useRecoilValue(toDoState);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
