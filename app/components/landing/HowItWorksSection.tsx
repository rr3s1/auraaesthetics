import React from "react";

import styles from "./HowItWorksSection.module.css";

interface StepProps {
  number: string;
  title: string;
  description: string;
}

const StepCard: React.FC<StepProps> = ({ number, title, description }) => {
  return (
    <div className={styles.stepCard}>
      <div className={styles.stepNumber}>{number}</div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

const HowItWorksSection: React.FC = () => {
  const steps: StepProps[] = [
    {
      number: "01",
      title: "Register Your Account",
      description:
        "Quickly sign up with your basic details to get started in minutes.",
    },
    {
      number: "02",
      title: "Find Your Doctor/Service",
      description:
        "Browse or search for specialists and services available near you.",
    },
    {
      number: "03",
      title: "Book Your Slot",
      description:
        "Select a convenient date and time from the available slots.",
    },
    {
      number: "04",
      title: "Consult & Manage",
      description:
        "Attend your consultation and manage all your appointments online.",
    },
  ];

  return (
    <section className={styles.howItWorksSection}>
      <h2>How It Works</h2>
      <p className={styles.subheading}>
        A simple process to manage your health appointments.
      </p>
      <div className={styles.stepsGrid}>
        {steps.map((step) => (
          <StepCard
            key={step.number}
            number={step.number}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
