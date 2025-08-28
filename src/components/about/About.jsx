import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        
        {/* Image Section */}
        <div className={styles.imageWrapper}>
          <img
            src="https://placehold.co/400x400/BFDBFE/2563EB?text=About+Dietitian"
            alt="About the Dietitian"
            className={styles.aboutImage}
          />
        </div>

        {/* Text Section */}
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>
            Meet Your Dedicated Dietician
          </h2>
          <p className={styles.paragraph}>
            Hi, I'm Dr. Anya Sharma, a passionate and certified dietician dedicated to helping you
            achieve your health and wellness goals. With over 10 years of experience, I believe in a
            holistic approach to nutrition that focuses on sustainable habits, not restrictive diets.
          </p>
          <p className={styles.paragraph}>
            My mission is to empower you with the knowledge and tools to nourish your body, boost
            your energy, and live a vibrant life. Let's make this New Year your healthiest one yet!
          </p>
          <a href="#contact" className={styles.button}>
            Learn More About My Philosophy
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;









// import React from "react";
// import { motion } from "framer-motion";
// import styles from "./About.module.css";
// import DocImage from "./doc.jpg"; // import your local image

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// const imageVariants = {
//   hidden: { opacity: 0, x: -100 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
// };

// const textVariants = {
//   hidden: { opacity: 0, x: 100 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
// };

// const About = () => {
//   return (
//     <section id="about" className={styles.aboutSection}>
//       <motion.div
//         className={styles.container}
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: false, amount: 0.3 }}
//       >
//         {/* Image Section */}
//         <motion.div className={styles.imageWrapper} variants={imageVariants}>
//           <img
//             src={DocImage}
//             alt="About the Dietitian"
//             className={styles.aboutImage}
//           />
//         </motion.div>

//         {/* Text Section */}
//         <motion.div className={styles.textWrapper} variants={textVariants}>
//           <h2 className={styles.heading}>Meet Your Dedicated Dietician</h2>
//           <p className={styles.paragraph}>
//             Hi, I'm Dr. Anya Sharma, a passionate and certified dietician dedicated to helping you
//             achieve your health and wellness goals. With over 10 years of experience, I believe in a
//             holistic approach to nutrition that focuses on sustainable habits, not restrictive diets.
//           </p>
//           <p className={styles.paragraph}>
//             My mission is to empower you with the knowledge and tools to nourish your body, boost
//             your energy, and live a vibrant life. Let's make this New Year your healthiest one yet!
//           </p>
//           <a href="#contact" className={styles.button}>
//             Learn More About My Philosophy
//           </a>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default About;
