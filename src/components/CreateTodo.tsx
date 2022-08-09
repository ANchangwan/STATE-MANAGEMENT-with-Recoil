import { useForm } from "react-hook-form";
import { toDoState } from "../atoms";
import { useRecoilState } from "recoil";

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onSubmit = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category: "TO_DO" },
      ...oldToDos,
    ]);
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

export default CreateToDo;
