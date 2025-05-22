import React from "react";

import styles from "./TestimonialsSection.module.css";

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  avatarPlaceholder?: string; // e.g., initials or path to a placeholder image
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  quote,
  name,
  title,
  avatarPlaceholder,
}) => {
  return (
    <div className={styles.testimonialCard}>
      {avatarPlaceholder && (
        <div className={styles.avatarPlaceholder}>{avatarPlaceholder}</div>
      )}
      <blockquote className={styles.quote}>&ldquo;{quote}&rdquo;</blockquote>
      <cite className={styles.cite}>
        <span className={styles.name}>{name}</span>
        <span className={styles.title}>{title}</span>
      </cite>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials: TestimonialProps[] = [
    {
      quote:
        "This platform has revolutionized how I manage my appointments. So easy and efficient!",
      name: "Sarah J.",
      title: "Satisfied Patient",
      avatarPlaceholder: "SJ",
    },
    {
      quote:
        "Finally, a scheduling system that understands the needs of both patients and doctors. Highly recommended.",
      name: "Dr. Mark Adams",
      title: "General Practitioner",
      avatarPlaceholder: "MA",
    },
    {
      quote:
        "Booking appointments used to be a chore, but now it is straightforward and quick. Love the reminders!",
      name: "David K.",
      title: "Busy Professional",
      avatarPlaceholder: "DK",
    },
  ];

  return (
    <section className={styles.testimonialsSection}>
      <h2>What Our Users Say</h2>
      <div className={styles.testimonialsGrid}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
