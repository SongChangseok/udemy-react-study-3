import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

const initialUserInfo = {
  name: "",
  age: ""
};

const AddUser = ({ onAddUser }) => {
  const [userInfo, setUserInfo] = useState(initialUserInfo);
  const [isValid, setIsValid] = useState(true);
  const [modalMsg, setModalMsg] = useState();
  const nameChangeHandler = ({ target: { value } }) => {
    setUserInfo((prev) => ({ ...prev, name: value }));
  };
  const ageChangeHandler = ({ target: { value } }) => {
    setUserInfo((prev) => ({ ...prev, age: value }));
  };
  const submitHandler = (e) => {
    e.preventDefault();

    if (
      userInfo.name.trimEnd().length === 0 ||
      userInfo.age.trimEnd().length === 0
    ) {
      setIsValid(false);
      setModalMsg("Please enter a valid name and age (non-empty values)");
      return;
    }
    // 숫자로 변환
    if (+userInfo.age < 1) {
      setIsValid(false);
      setModalMsg("Please enter a valid age (> 0)");
      return;
    }

    onAddUser(userInfo);
    setUserInfo(initialUserInfo);
  };
  const modalClickHandler = () => {
    setIsValid(true);
    setModalMsg();
  };

  return (
    <Card>
      <form className={styles.input} onSubmit={submitHandler}>
        <label htmlFor="name">Username</label>
        <input
          id="name"
          type="text"
          value={userInfo.name}
          onChange={nameChangeHandler}
        />
        <label htmlFor="age">Age(Years)</label>
        <input
          id="age"
          type="number"
          value={userInfo.age}
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add User</Button>
        {!isValid && (
          <ErrorModal header="Invalid input" onClick={modalClickHandler}>
            {modalMsg}
          </ErrorModal>
        )}
      </form>
    </Card>
  );
};

export default AddUser;
