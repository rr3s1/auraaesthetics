import React from 'react';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const ContactAndNewsletterSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-[#1a0e0a] via-[#1a0a08] to-[#120704] px-6 py-20 font-serif text-white">
      {/* Contact Info */}
      <div className="mx-auto max-w-7xl">
        <h3 className="mb-12 text-center text-3xl font-semibold tracking-wide md:text-4xl">
          Connect With Us
        </h3>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Contact Card */}
          {[
            {
              icon: <MdEmail className="size-7 text-pink-300" />,
              title: 'Email Us',
              value: 'contact@aura-aesthetics.com',
              href: 'mailto:contact@aura-aesthetics.com',
            },
            {
              icon: <MdPhone className="size-7 text-pink-300" />,
              title: 'Call Us',
              value: '+1 (555) 123-4567',
              href: 'tel:+15551234567',
            },
            {
              icon: <MdLocationOn className="size-7 text-pink-300" />,
              title: 'Visit Us',
              value: `123 Elegance Avenue, Suite 200\nCityville, ST 90210`,
              href: undefined,
            },
          ].map(({ icon, title, value, href }, idx) => (
            <div
              key={idx}
              className="group rounded-2xl bg-[#201010]/60 p-6 shadow-lg backdrop-blur-md transition hover:shadow-xl"
            >
              <div className="mb-3 flex items-center gap-3">{icon}<h4 className="text-lg font-semibold">{title}</h4></div>
              {href ? (
                <a
                  href={href}
                  className="block text-sm text-neutral-300 transition-all hover:text-pink-300"
                >
                  {value}
                </a>
              ) : (
                <p className="whitespace-pre-line text-sm text-neutral-300">{value}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="mx-auto mt-24 flex max-w-7xl flex-col gap-8 rounded-xl border border-[#ffffff1a] bg-[#1b0d0a]/60 px-8 py-12 shadow-lg backdrop-blur-md md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <h3 className="mb-3 text-3xl font-semibold md:text-4xl">
            Stay Illuminated with <span className="text-pink-400">AURA</span>
          </h3>
          <p className="text-sm leading-relaxed text-neutral-300 md:text-base">
            Subscribe to our newsletter for exclusive insights into the latest aesthetic treatments,
            wellness advancements, and special offers from AURA.
          </p>
        </div>
        <form className="flex w-full flex-col items-center gap-4 sm:flex-row md:w-auto">
          <input
            type="email"
            name="email-address"
            id="email-address"
            autoComplete="email"
            required
            placeholder="Enter your email"
            className="w-full rounded-lg bg-[#2b1a17] px-5 py-3 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 sm:w-64"
          />
          <button
            type="submit"
            className="rounded-md bg-gradient-to-r from-pink-400 to-purple-600 px-6 py-3 text-sm font-semibold shadow-md transition-all hover:from-pink-500 hover:to-purple-700"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactAndNewsletterSection;
