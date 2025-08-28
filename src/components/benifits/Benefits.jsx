import styles from "./Benefits.module.css";

export default function Benefits() {
  return (
    <section id="benefits" className={styles.benefits}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Why Choose Personalized Nutrition?
        </h2>

        <div className={styles.grid}>
          {/* Benefit Card 1 */}
          <div className={`${styles.card} ${styles.greenCard}`}>
            <svg
              className={styles.icon}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className={styles.cardTitle}>Sustainable Results</h3>
            <p className={styles.cardText}>
              Move beyond fad diets. Learn habits that lead to long-term health
              and well-being, not just quick fixes.
            </p>
          </div>

          {/* Benefit Card 2 */}
          <div className={`${styles.card} ${styles.blueCard}`}>
            <svg
              className={styles.icon}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
            <h3 className={styles.cardTitle}>Tailored Plans</h3>
            <p className={styles.cardText}>
              Receive a diet plan specifically designed for your body, lifestyle,
              and health goals.
            </p>
          </div>

          {/* Benefit Card 3 */}
          <div className={`${styles.card} ${styles.purpleCard}`}>
            <svg
              className={styles.icon}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className={styles.cardTitle}>Expert Guidance</h3>
            <p className={styles.cardText}>
              Benefit from evidence-based advice and continuous support from a
              dedicated dietician.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}








// import { motion } from "framer-motion";
// import styles from "./Benefits.module.css";

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 50, scale: 0.95 },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     scale: 1,
//     transition: { type: "spring", stiffness: 60, damping: 15 } 
//   },
// };

// export default function Benefits() {
//   return (
//     <section id="benefits" className={styles.benefits}>
//       <div className={styles.container}>
//         <motion.h2
//           className={styles.heading}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           Why Choose Personalized Nutrition?
//         </motion.h2>

//         <motion.div
//           className={styles.grid}
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: false, amount: 0.3 }}
//         >
//           {/* Benefit Card 1 */}
//           <motion.div className={`${styles.card} ${styles.greenCard}`} variants={cardVariants}>
//             <svg
//               className={styles.icon}
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
//               />
//             </svg>
//             <h3 className={styles.cardTitle}>Sustainable Results</h3>
//             <p className={styles.cardText}>
//               Move beyond fad diets. Learn habits that lead to long-term health
//               and well-being, not just quick fixes.
//             </p>
//           </motion.div>

//           {/* Benefit Card 2 */}
//           <motion.div className={`${styles.card} ${styles.blueCard}`} variants={cardVariants}>
//             <svg
//               className={styles.icon}
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
//               />
//             </svg>
//             <h3 className={styles.cardTitle}>Tailored Plans</h3>
//             <p className={styles.cardText}>
//               Receive a diet plan specifically designed for your body, lifestyle,
//               and health goals.
//             </p>
//           </motion.div>

//           {/* Benefit Card 3 */}
//           <motion.div className={`${styles.card} ${styles.purpleCard}`} variants={cardVariants}>
//             <svg
//               className={styles.icon}
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//               />
//             </svg>
//             <h3 className={styles.cardTitle}>Expert Guidance</h3>
//             <p className={styles.cardText}>
//               Benefit from evidence-based advice and continuous support from a
//               dedicated dietician.
//             </p>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

