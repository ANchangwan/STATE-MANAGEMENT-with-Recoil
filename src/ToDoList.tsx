import React from "react";
import { useForm } from "react-hook-form";

function ToDoList() {
  const { register, handleSubmit, formState } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(formState.errors);
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input {...register("email", { required: true })} placeholder="Email" />
        <input
          {...register("firstName", { required: true })}
          placeholder="FirstName"
        />
        <input
          {...register("lastName", { required: true })}
          placeholder="LastName"
        />
        <input
          {...register("username", { required: true })}
          placeholder="Username"
        />
        <input
          {...register("password", { required: true })}
          placeholder="Password"
        />
        <input
          {...register("password1", { required: true })}
          placeholder="Password1"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
