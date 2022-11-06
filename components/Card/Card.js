import { useRouter } from "next/router";
import styles from "./Card.module.css";

export default function Card({ name, email, phone, image, id }) {
  const router = useRouter();

  return (
    <div className={styles.card} onClick={() => router.push("/cat")}>
      <div className={styles.cardHeader}>
        <img src={image.url} alt={image.alt} className={styles.cardImg} />
      </div>
      <div>
        <h3>{name}</h3>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
    </div>
  );
}
