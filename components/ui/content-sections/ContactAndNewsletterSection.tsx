import React from 'react';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const ContactAndNewsletterSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-site-bg via-content-bg to-site-bg px-6 py-20 font-serif text-text-primary">
      {/* Contact Info */}
      <div className="mx-auto max-w-7xl">
        <h3 className="mb-12 text-center text-3xl font-semibold tracking-wide md:text-4xl">
          Connect With Us
        </h3>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Contact Card */}
          {[
            {
              icon: <MdEmail className="size-7 text-accent-yellow-dark" />,
              title: 'Email Us',
              value: 'contact@aura-aesthetics.com',
              href: 'mailto:contact@aura-aesthetics.com',
            },
            {
              icon: <MdPhone className="size-7 text-accent-orange" />,
              title: 'Call Us',
              value: '+1 (555) 123-4567',
              href: 'tel:+15551234567',
            },
            {
              icon: <MdLocationOn className="size-7 text-accent-red" />,
              title: 'Visit Us',
              value: `123 Elegance Avenue, Suite 200\nCityville, ST 90210`,
              href: undefined,
            },
          ].map(({ icon, title, value, href }, idx) => (
            <div
              key={idx}
              className="group rounded-2xl bg-content-bg/60 p-6 shadow-lg backdrop-blur-md transition hover:shadow-xl"
            >
              <div className="mb-3 flex items-center gap-3">{icon}<h4 className="text-lg font-semibold">{title}</h4></div>
              {href ? (
                <a
                  href={href}
                  className="block text-sm text-text-secondary transition-all hover:text-accent-orange"
                >
                  {value}
                </a>
              ) : (
                <p className="whitespace-pre-line text-sm text-text-secondary">{value}</p>
              )}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default ContactAndNewsletterSection;
