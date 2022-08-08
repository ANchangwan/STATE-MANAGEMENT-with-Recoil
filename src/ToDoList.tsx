import React from "react";
import { useForm } from "react-hook-form";

interface IForm {
  toDo: string;
}
// setValue 값이 유효하면 input에 입력된 값을 지움
function ToDoList() {
  const { register, handleSubmit, watch, setValue } = useForm<IForm>();
  const onSubmit = (data: IForm) => {
    console.log("add to do", data.toDo);
    setValue("toDo", "");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("toDo", { required: "Please write a To Do" })}
        placeholder="Write here"
      />
      <button>Add</button>
    </form>
  );
}

export default ToDoList;
