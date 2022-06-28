import { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import Card from "./components/Card/Card";
import { v4 } from "uuid";
import UserList from "./components/UserList/UserList";

function App() {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (userInfo) => {
    setUserList((prev) => [{ ...userInfo, id: v4() }, ...prev]);
  };

  return (
    <div>
      <Card>
        <AddUser onAddUser={addUserHandler} />
      </Card>
      {userList.length > 0 ? (
        <Card>
          <UserList items={userList} />
        </Card>
      ) : null}
    </div>
  );
}

export default App;
