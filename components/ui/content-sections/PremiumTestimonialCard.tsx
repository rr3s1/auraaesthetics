import React from "react";

interface PremiumTestimonialCardProps {
  headline: string;
  testimonial: string;
  clientName: string;
  clientType: string;
  treatment: string;
  avatarUrl?: string;
}

export const PremiumTestimonialCard: React.FC<PremiumTestimonialCardProps> = ({
  headline,
  testimonial,
  clientName,
  clientType,
  treatment,
  avatarUrl,
}) => (
  <div className="relative my-24">
    {/* Luxury texture overlay */}
    <div className="absolute inset-0 z-0 bg-cover bg-center mix-blend-overlay opacity-10 rounded-2xl"></div>
    <div className="relative z-10 bg-[url('/assets/luxury-texture.svg')] bg-cover bg-center opacity-90 border border-gold-accent/30 rounded-2xl p-10 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.5)] overflow-hidden">
      {/* Metallic gradient border */}
      <div className="absolute inset-0 z-0 rounded-2xl overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-conic-gradient from-gold-accent via-transparent to-gold-accent animate-spin-slow opacity-10"></div>
      </div>
      {/* Gold foil accents */}
      <div className="absolute top-0 right-0 z-0 w-24 h-24 bg-gold-accent/10 blur-xl transform translate-x-12 -translate-y-12"></div>
      <div className="absolute bottom-0 left-0 z-0 w-32 h-32 bg-gold-accent/8 blur-xl transform -translate-x-12 translate-y-12"></div>
      {/* Content container */}
      <div className="relative z-20">
        {/* Star rating */}
        <div className="flex mb-6">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-6 h-6 fill-gold-accent mr-1" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
          ))}
        </div>
        <div className="pl-12 pr-8 py-2">
          {/* Headline */}
          <h3 className="playfair-display text-gold-accent text-2xl tracking-widest uppercase mb-6">
            {headline}
          </h3>
          {/* Testimonial text */}
          <p className="playfair-display text-light-cream text-2xl leading-relaxed italic mb-8">
            "{testimonial}"
          </p>
          {/* Gold divider */}
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold-accent to-transparent my-8"></div>
          {/* Client attribution */}
          <div className="flex items-center">
            {/* Client avatar */}
            <div className="relative mr-6">
              <div className="absolute inset-0 rounded-full border border-gold-accent/50 animate-pulse-slow"></div>
              <div className="size-16 rounded-full bg-deep-emerald flex items-center justify-center border-2 border-gold-accent/30 overflow-hidden">
                {avatarUrl ? (
                  <img src={avatarUrl} alt={clientName} className="w-full h-full object-cover rounded-full" />
                ) : (
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
                )}
              </div>
            </div>
            <div>
              <p className="montserrat font-semibold text-light-cream text-xl mb-1">
                {clientName}
              </p>
              <div className="flex items-center">
                <span className="montserrat text-gold-accent text-sm tracking-wide mr-3">
                  {clientType}
                </span>
                <span className="w-1 h-1 rounded-full bg-gold-accent/70"></span>
                <span className="montserrat text-light-cream/80 text-sm ml-3">
                  {treatment}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
