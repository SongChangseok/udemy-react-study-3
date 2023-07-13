import { useState } from "react";
import AddUser from "../components/Users/AddUser";
import UserList from "../components/Users/UserList";
import { v4 } from "uuid";

const Main = () => {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (userInfo) => {
    setUserList((prev) => [{ ...userInfo, id: v4() }, ...prev]);
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      {userList.length > 0 ? <UserList items={userList} /> : null}
    </>
  );
};

export default Main;
