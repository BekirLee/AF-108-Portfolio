// components/HeroSection.jsx
import styles from "../../assets/css/style.module.css";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <h1>Present your business in a whole new way</h1>
      <p>
        Quickly design and customize responsive mobile-first sites with
        Bootstrap, the world’s most popular front-end open source toolkit!
      </p>
      <div className={styles.buttons}>
        <button className={styles.primaryBtn}>Get Started</button>
        <button className={styles.secondaryBtn}>Learn More</button>
      </div>
    </section>
  );
};

export default HeroSection;
