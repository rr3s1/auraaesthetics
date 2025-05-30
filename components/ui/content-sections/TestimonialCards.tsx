import React from 'react';

const TestimonialCards = () => {
  return (
    <div className="relative my-24">
      <div className="relative bg-deep-emerald rounded-2xl shadow-[0_25px_70px_-15px_rgba(0,0,0,0.5)] overflow-hidden">
        {/* Metallic gradient border */}
        <div className="absolute inset-0 z-0 rounded-2xl overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-conic-gradient from-gold-accent via-transparent to-gold-accent animate-spin-slow opacity-10"></div>
        </div>

        {/* Gold foil accents */}
        <div className="absolute top-0 right-0 z-0 w-24 h-24 bg-gold-accent/10 blur-xl transform translate-x-12 -translate-y-12"></div>
        <div className="absolute bottom-0 left-0 z-0 w-32 h-32 bg-gold-accent/8 blur-xl transform -translate-x-12 translate-y-12"></div>

        {/* Luxury texture overlay */}
        <div className="absolute inset-0 z-0 bg-cover bg-center mix-blend-overlay opacity-10 rounded-2xl"></div>

        {/* Content container */}
        <div className="relative z-10 bg-[url('/assets/luxury-texture.svg')] bg-cover bg-center opacity-90 border border-gold-accent/30 rounded-2xl pl-5 p-10">
          <div className="relative z-20">
            {/* Star rating and headline row */}
            <div className="flex items-center mb-6">
              <div className="flex pl-8">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src="/assets/star4.png"
                    alt="Star rating"
                    className="w-20 h-20 mr-1 object-contain drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]"
                    style={{ filter: 'drop-shadow(0 0 5px rgba(255, 215, 0, 0.5)) drop-shadow(0 0 20px rgba(255, 215, 0, 0.2))' }}
                  />
                ))}
              </div>
              
              {/* Headline */}
              <h3 className="playfair-display pl-10 font-bold text-gold-accent text-2xl lg:text-4xl tracking-widest uppercase ml-8 drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]" style={{ textShadow: '0 0 5px rgba(255, 215, 0, 0.1), 0 0 20px rgba(255, 215, 0, 0.2)' }}>
                Exceptional Experience
              </h3>
            </div>

            <div className="pl-12 pr-8 py-2">

              {/* Testimonial text */}
              <p className="playfair-display text-light-cream lg:text-4xl leading-relaxed italic mb-8">
                "The team at Aura Aesthetics made me feel so comfortable and understood my vision perfectly.
                I feel more confident and radiant than ever before!"
              </p>

              {/* Gold divider */}
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold-accent to-transparent my-8"></div>

              {/* Client attribution */}
              <div className="flex items-center">
                {/* Client avatar */}
                <div className="relative mr-6">
                  <div className="absolute inset-0 rounded-full border border-gold-accent/50 animate-pulse-slow"></div>
                  <div className="size-16 rounded-full bg-deep-emerald flex items-center justify-center border-2 border-gold-accent/30 overflow-hidden">
                    {/* Replace with actual image */}
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
                  </div>
                </div>

                <div>
                  <p className="montserrat font-semibold text-light-cream text-xl mb-1">
                    Sarah Johnson
                  </p>
                  <div className="flex items-center">
                    <span className="montserrat text-gold-accent text-sm tracking-wide mr-3">
                      VERIFIED CLIENT
                    </span>
                    <span className="w-1 h-1 rounded-full bg-gold-accent/70"></span>
                    <span className="montserrat text-light-cream/80 text-sm ml-3">
                      Facial Sculpting
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCards;