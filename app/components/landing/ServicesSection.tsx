import React from "react";

import styles from "./ServicesSection.module.css";

interface FeatureProps {
  icon: string; // Placeholder for icon, e.g., a unicode character or path to SVG
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className={styles.featureCard}>
      <div className={styles.iconPlaceholder}>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const features: FeatureProps[] = [
    {
      icon: "📅",
      title: "Easy Appointment Management",
      description:
        "Schedule, reschedule, or cancel appointments with just a few clicks.",
    },
    {
      icon: "⏱️",
      title: "Reduced Wait Times",
      description:
        "Our efficient system minimizes your wait, getting you seen faster.",
    },
    {
      icon: "💻",
      title: "24/7 Online Access",
      description:
        "Access your appointment details and health records anytime, anywhere.",
    },
    {
      icon: "🔔",
      title: "Timely Notifications",
      description:
        "Receive reminders for your upcoming appointments and health updates.",
    },
  ];

  return (
    <section className={styles.servicesSection}>
      <h2>Key Features & Benefits</h2>
      <div className={styles.featuresGrid}>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection; 