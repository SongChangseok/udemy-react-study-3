import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";

const ErrorModal = ({ header, children, onClick }) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={onClick} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{header}</h2>
        </header>
        <div className={styles.content}>
          <p>{children}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={onClick}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
