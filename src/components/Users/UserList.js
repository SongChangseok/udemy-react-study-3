import Card from "../UI/Card";
import styles from "./UserList.module.css";

const UserList = ({ items }) => {
  return (
    <Card className={styles.users}>
      <ul>
        {items.map(({ id, name, age }) => (
          <li key={id}>
            {name} ({age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
