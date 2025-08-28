import { motion } from "framer-motion";
import styles from "./Services.module.css";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Our Specialized Programs for the New Year
        </h2>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* Service Card 1 */}
          <motion.div className={styles.card} variants={cardVariants}>
            <img
              src="https://placehold.co/100x100/A7F3D0/10B981?text=Weight"
              alt="Weight Management Icon"
              className={styles.image}
            />
            <h3 className={styles.cardTitle}>Weight Management</h3>
            <p className={styles.cardText}>
              Achieve your ideal weight goals safely and effectively with a
              balanced approach.
            </p>
            <a href="#contact" className={styles.link}>
              Learn More →
            </a>
          </motion.div>

          {/* Service Card 2 */}
          <motion.div className={styles.card} variants={cardVariants}>
            <img
              src="https://placehold.co/100x100/CFFAFE/06B6D4?text=Energy"
              alt="Energy Boost Icon"
              className={styles.image}
            />
            <h3 className={styles.cardTitle}>Energy & Vitality Boost</h3>
            <p className={styles.cardText}>
              Enhance your energy levels and overall vitality through optimal
              nutrition.
            </p>
            <a href="#contact" className={styles.link}>
              Learn More →
            </a>
          </motion.div>

          {/* Service Card 3 */}
          <motion.div className={styles.card} variants={cardVariants}>
            <img
              src="https://placehold.co/100x100/DDD6FE/6D28D9?text=Digestion"
              alt="Digestive Health Icon"
              className={styles.image}
            />
            <h3 className={styles.cardTitle}>Digestive Health</h3>
            <p className={styles.cardText}>
              Improve gut health and alleviate digestive discomfort with
              specialized plans.
            </p>
            <a href="#contact" className={styles.link}>
              Learn More →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

