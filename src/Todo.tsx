import { FC } from "react";
import { TodoType } from "./types/todo";

// 型から必要なものを取り出す場合
// props: Pick<TodoType, "title" | "userId" | "completed">
// export const Todo = (props: Omit<TodoType, "id">) => {
//   const { title, userId, completed = false } = props;
//   const completedMark = completed ? "[完]" : "[未]";
//   return <p>{`${completedMark} ${title}(ユーザー:${userId})`}</p>;
// };
export const Todo: FC<Omit<TodoType, "id">> = (props) => {
  const { title, userId, completed = false } = props;
  const completedMark = completed ? "[完]" : "[未]";
  return <p>{`${completedMark} ${title}(ユーザー:${userId})`}</p>;
};
