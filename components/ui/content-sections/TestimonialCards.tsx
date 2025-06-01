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
        <div className="relative overflow-hidden rounded-2xl bg-deep-emerald shadow-[0_25px_70px_-15px_rgba(0,0,0,0.5)]">
           {/* Enhanced background glow */}
           <div className="absolute inset-x-0 bottom-1/4 top-0 z-[1] opacity-30 md:opacity-35">
            <div className="absolute inset-0 rounded-full bg-gradient-radial from-accent-yellow-dark/50 via-accent-orange/30 to-transparent blur-[120px]"></div>
          </div>
          {/* Metallic gradient border */}
          <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl">
            <div className="absolute -left-1/2 -top-1/2 size-[200%] animate-spin-slow bg-conic-gradient from-gold-accent via-transparent to-gold-accent opacity-10"></div>
          </div>

          {/* Gold foil accents */}
          <div className="absolute right-0 top-0 z-0 size-24 -translate-y-12 translate-x-12 bg-gold-accent/10 blur-xl"></div>
          <div className="bg-gold-accent/8 absolute bottom-0 left-0 z-0 size-32 -translate-x-12 translate-y-12 blur-xl"></div>

          {/* Luxury texture overlay */}
          <div className="absolute inset-0 z-0 rounded-2xl bg-cover bg-center opacity-10 mix-blend-overlay"></div>

          {/* Content container */}
          <div className="relative z-20 rounded-2xl border border-gold-accent/30 bg-[url('/assets/luxury-texture.svg')] bg-cover bg-center p-10 opacity-90">
            <div className="relative z-20">
              {/* Star rating and headline - responsive layout */}
              <div className="mb-6 flex flex-col sm:flex-col md:flex-row md:items-center md:gap-4 lg:gap-6">
                {/* Stars - appears first on small screens */}
                <div className="mb-4 flex w-full justify-center pl-0 sm:mb-4 sm:justify-center sm:pl-0 md:mb-0 md:w-auto md:max-w-[30%] md:justify-start md:pl-8 lg:max-w-[35%]">
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      src="/assets/star4.png"
                      alt="Star rating"
                      className="mr-1 size-14 object-contain align-middle drop-shadow-[0_0_8px_rgba(255,215,0,0.5)] transition-transform duration-300 sm:size-16 md:size-20 lg:size-24 xl:size-28"
                      style={{
                        filter: 'drop-shadow(0 0 5px rgba(255, 215, 0, 0.5)) drop-shadow(0 0 20px rgba(255, 215, 0, 0.2))',
                        ...getStarAnimationStyle(i),
                        transformOrigin: 'center center'
                      }}
                    />
                  ))}
                </div>
                
                {/* Headline - appears second on small screens */}
                <h1 className="cinzel-decorative-bold md:pl-18 mb-6 mt-0 flex-1 bg-gradient-to-r from-[#fcd7a0] via-[#fff4e0] to-[#e0b97c] bg-clip-text text-center text-2xl font-bold text-transparent sm:mt-3 sm:pl-20 sm:text-center sm:text-3xl md:mt-6 md:text-left md:text-4xl lg:pl-5 lg:text-5xl">
                  Exceptional Experience
                </h1>
              </div>

              <div className="px-4 py-2 sm:pl-8 sm:pr-6 md:pl-12 md:pr-8">
                {/* Testimonial text */}
                <p className="playfair-display  mb-8 text-xl italic leading-relaxed text-light-cream sm:text-xl md:text-4xl lg:text-5xl" >
                  &ldquo;The team at Aura Aesthetics made me feel so comfortable and understood my vision perfectly.
                  I feel more confident and radiant than ever before!&rdquo;
                </p>

                {/* Gold divider */}
                <div className="mx-auto my-6 h-0.5 w-16 bg-gradient-to-r from-transparent via-gold-accent to-transparent sm:mx-auto sm:my-7 sm:w-20 md:mx-0 md:my-8 md:w-24"></div>

                {/* Client attribution */}
                <div className="flex flex-col items-center sm:flex-col md:flex-row md:items-center">
                  {/* Client avatar */}
                  <div className="relative mb-4 sm:mb-4 md:mb-0 md:mr-6">
                    <div className="absolute inset-0 animate-pulse-slow rounded-full border border-gold-accent/50"></div>
                    <div className="flex size-12 items-center justify-center overflow-hidden rounded-full border-2 border-gold-accent/30 bg-deep-emerald sm:size-14 md:size-16">
                      {/* Sarah Johnson's actual image */}
                      <img 
                        src="/assets/d2.png" 
                        alt="Sarah Johnson" 
                        className="size-full rounded-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="rounded-lg bg-slate-900 bg-opacity-50 px-3 text-center sm:text-center md:text-left">
                    <p className="montserrat mb-1 text-lg font-semibold text-light-cream sm:text-xl md:text-xl lg:text-4xl">
                      Sarah Johnson
                    </p>
                    <div className="flex flex-col items-center sm:flex-col md:flex-row">
                      <span className="montserrat mb-2 text-sm font-bold tracking-wide text-gold-accent sm:mb-2 sm:text-base md:mb-0 md:mr-3 md:text-xl lg:text-2xl">
                        GOLD MEMBER
                      </span>
                      <span className="hidden size-1 rounded-full bg-gold-accent/70 md:block"></span>
                      <span className="montserrat text-sm font-bold uppercase text-light-cream/80 sm:text-base md:ml-3 md:text-xl lg:text-2xl">
                      Non-Invasive Body Sculpting
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