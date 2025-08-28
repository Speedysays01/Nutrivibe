import React from "react";
import styles from "./Testimonials.module.css";

const Testimonials = () => {
  const testimonials = [
    {
      text: `"Starting my New Year with NutriVibe was the best decision! The personalized plan was easy to follow, and I've never felt better. Highly recommend!"`,
      name: "Jane Doe",
      role: "Happy Client",
      img: "https://placehold.co/60x60/E2E8F0/A0AEC0?text=JD",
    },
    {
      text: `"I struggled with my diet for years. NutriVibe provided the clear, actionable guidance I needed. My energy levels are up, and I'm finally reaching my goals!"`,
      name: "Sarah M.",
      role: "Achieved Wellness",
      img: "https://placehold.co/60x60/E2E8F0/A0AEC0?text=SM",
    },
  ];

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles.container}>
        <h2 className={styles.heading}>What Our Clients Say</h2>
        <div className={styles.grid}>
          {testimonials.map((item, index) => (
            <div key={index} className={styles.card}>
              <p className={styles.text}>{item.text}</p>
              <div className={styles.profile}>
                <img
                  src={item.img}
                  alt={item.name}
                  className={styles.avatar}
                />
                <div>
                  <p className={styles.name}>{item.name}</p>
                  <p className={styles.role}>{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
