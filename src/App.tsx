import axios from "axios";
import { useState } from "react";
import { Todo } from "./Todo";
import "./styles.css";
import { TodoType } from "./types/todo";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";
import { User } from "./types/user";
import { UserCard } from "./components/UserCard";
import { UserCardType } from "./types/userCardType";
import { UserJson } from "./types/userJson";
import { useAllUsers } from "./hooks/useAllUsers";

const user: User = {
  name: "col",
  hobbies: ["映画", "プログラミング"]
};

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const {getUsers, userProfiles, loading, error} = useAllUsers();

  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };

  const onClickFetchUser = () => getUsers();

  return (
    <div className="App">
      <UserProfile user={user} />
      <Text color={"red"} fontSize={"18px"}></Text>
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo, index) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={index % 2 === 0 ? todo.completed : undefined}
        ></Todo>
      ))}

      <hr />
      <h2>ユーザー情報</h2>
      <button onClick={onClickFetchUser}>ユーザー取得</button>
      <br />
      {error ? (
        <p style={{ color: "red " }}>ユーザー情報取得に失敗しました</p>
      ) : loading ? (
        <p>Loading... </p>
      ) : (
        <>
          {userProfiles.map((userCard) => (
            <UserCard key={userCard.id} user={userCard} />
          ))}
        </>
      )}
    </div >
  );
}
