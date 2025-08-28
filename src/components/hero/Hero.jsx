import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import HeroImage from "./Hero.jpg";

// Variants for staggered children animation
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // Delay between child animations
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 20 } },
};

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      {/* Left Image */}
      <div
        className={styles.left}
       
      >
        <img src={HeroImage} alt="Hero" className={styles.image} />
      </div>

       {/* <motion.div
        className={styles.left}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{  damping: 20, duration: 1 }}
      >
        <img src={HeroImage} alt="Hero" className={styles.image} />
      </motion.div> */}

      {/* Right Content */}
      <motion.div
        className={styles.right}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className={styles.title} variants={itemVariants}>
          Kickstart Your{" "}
          <span className={styles.gradientText}>Health Journey</span> This New
          Year!
        </motion.h1>
        <motion.p className={styles.subtitle} variants={itemVariants}>
          Transform your resolutions into lasting habits with personalized
          nutrition guidance from a certified dietician.
        </motion.p>
        <motion.a href="#contact" className={styles.button} variants={itemVariants}>
          Book Your Free Consultation!
        </motion.a>
      </motion.div>
    </section>
  );
}
