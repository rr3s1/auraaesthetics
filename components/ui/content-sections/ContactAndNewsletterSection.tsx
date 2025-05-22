import React from 'react';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const ContactAndNewsletterSection: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Section 3: Contact Information */}
      <div className="py-12">
        <h3 className="cinzel-decorative-bold mb-8 text-center text-2xl font-semibold tracking-wide text-gray-100 lg:text-left">
          Connect With Us
        </h3>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center rounded-lg bg-gray-800/30 p-6 text-center shadow-lg transition-all duration-300 hover:bg-gray-800/50 hover:shadow-color-3/10 md:items-start md:text-left">
            <MdEmail className="mb-3 size-8 text-color-3" />
            <h4 className="cormorant-garamond text-lg font-semibold text-gray-200">Email Us</h4>
            <a href="mailto:contact@aura-aesthetics.com" className="cormorant-garamond text-gray-400 break-all transition-colors hover:text-color-3 hover:underline">
              contact@aura-aesthetics.com
            </a>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-gray-800/30 p-6 text-center shadow-lg transition-all duration-300 hover:bg-gray-800/50 hover:shadow-color-3/10 md:items-start md:text-left">
            <MdPhone className="mb-3 size-8 text-color-3" />
            <h4 className="cormorant-garamond text-lg font-semibold text-gray-200">Call Us</h4>
            <a href="tel:+15551234567" className="cormorant-garamond text-gray-400 transition-colors hover:text-color-3 hover:underline">
              +1 (555) 123-4567
            </a>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-gray-800/30 p-6 text-center shadow-lg transition-all duration-300 hover:bg-gray-800/50 hover:shadow-color-3/10 md:items-start md:text-left">
            <MdLocationOn className="mb-3 size-8 text-color-3" />
            <h4 className="cormorant-garamond text-lg font-semibold text-gray-200">Visit Us</h4>
            <p className="cormorant-garamond text-gray-400">
              123 Elegance Avenue, Suite 200<br/>Cityville, ST 90210
            </p>
          </div>
        </div>
      </div>
      {/* Section 1: Newsletter Signup */}
      <div className="mb-16 rounded-xl bg-gray-800/40 p-8 shadow-2xl md:flex md:items-center md:justify-between">
        <div className="md:max-w-lg">
          <h3 className="cormorant-garamond text-3xl font-semibold leading-tight text-white">
            Stay Illuminated with AURA
          </h3>
          <p className="cormorant-garamond mt-3 text-gray-400">
            Subscribe to our newsletter for exclusive insights into the latest aesthetic treatments, wellness advancements, and special offers from AURA.
          </p>
        </div>
        <form className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row md:mt-0 md:w-auto">
          <label htmlFor="email-address" className="sr-only">Email address</label>
          {/* Ensure you have an input field here if it was present in the original code */}
          {/* <input type="email" name="email-address" id="email-address" autoComplete="email" required className="..." placeholder="Enter your email" /> */}
          <button
            type="submit"
            className="cinzel-decorative-bold flex-shrink-0 rounded-md border border-transparent bg-gradient-to-r from-color-1/80 to-color-2/80 px-6 py-3 text-base font-medium text-white shadow-md transition-all duration-300 hover:from-color-1 hover:to-color-2 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-color-1 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactAndNewsletterSection;
