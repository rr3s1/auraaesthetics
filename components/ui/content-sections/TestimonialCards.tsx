import React from 'react';

const TestimonialCards = () => {
  // Create a staggered animation style for each star
  const getStarAnimationStyle = (index: number) => ({
    animation: `pulse${index} ${6 + index * 0.5}s ease-in-out infinite`,
  });
  
  // Create CSS keyframes for the zoom in/out pulse animations with 2x scale
  const keyframesStyle = `
    @keyframes pulse0 { 0% { transform: scale(1); } 50% { transform: scale(1.2); } 100% { transform: scale(1); } }
    @keyframes pulse1 { 0% { transform: scale(1.1); } 50% { transform: scale(0.9); } 100% { transform: scale(1.1); } }
    @keyframes pulse2 { 0% { transform: scale(1); } 50% { transform: scale(1.3); } 100% { transform: scale(1); } }
    @keyframes pulse3 { 0% { transform: scale(1.2); } 50% { transform: scale(1); } 100% { transform: scale(1.2); } }
    @keyframes pulse4 { 0% { transform: scale(0.9); } 50% { transform: scale(1.1); } 100% { transform: scale(0.9); } }
  `;
  
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: keyframesStyle }} />
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
                      className="w-[15%] h-[15%] mr-1 object-contain drop-shadow-[0_0_8px_rgba(255,215,0,0.5)] transition-transform duration-300"
                      style={{
                        filter: 'drop-shadow(0 0 5px rgba(255, 215, 0, 0.5)) drop-shadow(0 0 20px rgba(255, 215, 0, 0.2))',
                        ...getStarAnimationStyle(i),
                        transformOrigin: 'center center'
                      }}
                    />
                  ))}
                </div>
                
                {/* Headline */}
                <h1 className="cinzel-decorative-bold mt-6 mb-6 bg-gradient-to-r from-[#fcd7a0] via-[#fff4e0] to-[#e0b97c] bg-clip-text text-2xl font-bold text-transparent md:text-3xl lg:text-4xl">
                  Exceptional Experience
                </h1>
              </div>

              <div className="pl-12 pr-8 py-2">
                {/* Testimonial text */}
                <p className="playfair-display text-light-cream lg:text-5xl leading-relaxed italic mb-8" style={{ textShadow: '0 0 5px rgba(228, 226, 217, 0.81), 0 0 20px rgba(228, 226, 213, 0.87)' }}>
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
                    <p className="montserrat font-semibold text-light-cream text-xl text-2xl lg:text-3xl mb-1">
                      Sarah Johnson
                    </p>
                    <div className="flex items-center">
                      <span className="montserrat text-gold-accent font-bold text-xl text-2xl lg:text-3xl tracking-wide mr-3">
                        VERIFIED CLIENT
                      </span>
                      <span className="w-1 h-1 rounded-full bg-gold-accent/70"></span>
                      <span className="montserrat text-light-cream/80 text-xl text-2xl lg:text-3xl ml-3 uppercase font-bold">
                        Laser Skin Rejuvenation
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCards;