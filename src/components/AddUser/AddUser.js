import { useState } from "react";
import Button from "../Button/Button";
import styles from "./AddUser.module.css";

const initialUserInfo = {
  name: "",
  age: 0
};

const AddUser = ({ onAddUser }) => {
  const [userInfo, setUserInfo] = useState(initialUserInfo);
  const nameChangeHandler = ({ target: { value } }) => {
    setUserInfo((prev) => ({ ...prev, name: value }));
  };
  const ageChangeHandler = ({ target: { value } }) => {
    setUserInfo((prev) => ({ ...prev, age: value }));
  };
  const submitHandler = (e) => {
    e.preventDefault();

    if (userInfo.name.trimEnd().length === 0 || userInfo.age < 1) return;

    onAddUser(userInfo);
    setUserInfo(initialUserInfo);
  };

  return (
    <form className={styles.input} onSubmit={submitHandler}>
      <label>Username</label>
      <input type="text" value={userInfo.name} onChange={nameChangeHandler} />
      <label>Age(Years)</label>
      <input
        type="number"
        value={userInfo.age}
        min="1"
        step="1"
        onChange={ageChangeHandler}
      />
      <Button type="submit">Add User</Button>
    </form>
  );
};

export default AddUser;
