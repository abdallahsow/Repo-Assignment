import styles from "./Card.module.css";

export default function Card({ name, email, phone }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <img src="" alt="" className={styles.cardImg} />
      </div>
      <div>
        <h3></h3>
        <p></p>
        <p></p>
      </div>
    </div>
  );
}
