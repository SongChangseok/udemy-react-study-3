import styles from "./Card.module.css";

const Card = ({ children }) => (
  <section className={styles.card}>{children}</section>
);

export default Card;
