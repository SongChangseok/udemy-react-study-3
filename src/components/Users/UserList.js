import Card from "../UI/Card";
import User from "./User";
import styles from "./UserList.module.css";

const UserList = ({ items }) => {
  return (
    <Card className={styles.users}>
      <ul>
        {items.map(({ id, name, age }) => (
          <User key={id} name={name} age={age} />
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
