import { selector, atom } from "recoil";
//
export enum Categories {
  "TO_DO",
  "DOING",
  "DONE",
}

export interface IToDo {
  text: string;
  id: number;
  category: categories;
}

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
