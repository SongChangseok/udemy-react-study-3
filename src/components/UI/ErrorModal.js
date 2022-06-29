import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";

const ErrorModal = ({ header, children, onClick }) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={onClick} />
      <Card className={styles.modal}>
        <div className={styles.header}>
          <h2>{header}</h2>
        </div>
        <div className={styles.content}>{children}</div>
        <div className={styles.actions}>
          <Button onClick={onClick}>Okay</Button>
        </div>
      </Card>
    </div>
  );
};

export default ErrorModal;
