import styles from "./Card.module.css";

const Card = ({ children, className }) => (
  <section className={`${styles.card} ${className}`}>{children}</section>
);

export default Card;
