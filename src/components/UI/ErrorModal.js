import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";

const ErrorModal = ({ title, children, onClick }) => {
  return (
    <>
      <div className={styles.backdrop} onClick={onClick} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{title}</h2>
        </header>
        <div className={styles.content}>
          <p>{children}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={onClick}>Okay</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
