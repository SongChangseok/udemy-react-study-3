import styles from "./UserList.module.css";

const UserList = ({ items }) => {
  return (
    <div className={styles.users}>
      <ul>
        {items.map(({ id, name, age }) => (
          <li key={id}>
            {name} ({age} years old)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
