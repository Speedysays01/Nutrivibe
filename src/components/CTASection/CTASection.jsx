import styles from "./CTASection.module.css";

const CTASection = () => {
  return (
    <section id="contact" className={styles.ctaSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Ready for a Healthier New You?
        </h2>
        <p className={styles.description}>
          Don't let another year pass by. Take the first step towards achieving
          your New Year's health resolutions today.
        </p>
        <a
          href="mailto:info@nutrivibe.com"
          className={styles.button}
        >
          Get Your Personalized Plan Now
        </a>
      </div>
    </section>
  );
};

export default CTASection;
