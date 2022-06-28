import Button from "../Button/Button";
import styles from "./ErrorModal.module.css";

const ErrorModal = ({ header, children, onClick }) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={onClick} />
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>{header}</h2>
        </div>
        <div className={styles.content}>{children}</div>
        <div className={styles.actions}>
          <Button onClick={onClick}>Okay</Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
