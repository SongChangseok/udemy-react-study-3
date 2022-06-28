import { useState } from "react";
import Button from "../Button/Button";
import ErrorModal from "../ErrorModal/ErrorModal";
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
    if (userInfo.age < 1) {
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
    <form className={styles.input} onSubmit={submitHandler}>
      <label>Username</label>
      <input type="text" value={userInfo.name} onChange={nameChangeHandler} />
      <label>Age(Years)</label>
      <input type="number" value={userInfo.age} onChange={ageChangeHandler} />
      <Button type="submit">Add User</Button>
      {!isValid && (
        <ErrorModal header="Invalid input" onClick={modalClickHandler}>
          {modalMsg}
        </ErrorModal>
      )}
    </form>
  );
};

export default AddUser;
