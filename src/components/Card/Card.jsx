import profile_pic from "../../assets/image-jeanette.jpg";
import styles from "./Card.module.css";

function Card() {
  return (
    <section className={styles.card}>
      <img
        className={styles.card_image}
        src={profile_pic}
        alt="profile picture"
      />
      <h2 className={styles.card_title}>Fridah Watetu</h2>
      <p className={styles.card_text}>I am learning how to code</p>
    </section>
  );
}

export default Card;
