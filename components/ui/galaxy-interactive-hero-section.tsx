"use client";

import React, { useEffect, useRef, useState, Suspense, lazy } from 'react';
const Spline = lazy(() => import('@splinetool/react-spline'));

function HeroSplineBackground() {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      pointerEvents: 'auto',
      overflow: 'hidden',
    }}>
      <Suspense fallback={<div className="w-full h-full flex items-center justify-center bg-black text-white">Loading 3D Scene...</div>}>
        <Spline
          style={{
            width: '100%',
            height: '100vh',
            pointerEvents: 'auto',
          }}
          scene="https://prod.spline.design/us3ALejTXl6usHZ7/scene.splinecode"
        />
      </Suspense>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          background: `
            linear-gradient(to right, rgba(0, 0, 0, 0.8), transparent 30%, transparent 70%, rgba(0, 0, 0, 0.8)),
            linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.9))
          `,
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}

function HeroContent() {
  return (
    <div className="text-left text-white pt-16 sm:pt-24 md:pt-32 px-4 max-w-4xl">
      {/* Pattern Banner - Interpreted as main title */}
      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-wide">
        FACIAL SURGERY WITH<br />
        <span className="text-purple-400">EXPERIENCE</span> <span className="text-pink-400">ARTISTRY</span> <span className="text-teal-400">COMPASSION</span>
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl mb-8 opacity-90 max-w-2xl italic">
        Operating on someone’s face is the ultimate trust – Tommy Smith
      </p>
    </div>
  );
}

// Navbar remains unchanged from your original file structure
function Navbar() {
  const [hoveredNavItem, setHoveredNavItem] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({
    features: false,
    enterprise: false,
    resources: false,
  });

  const navItems = {
    Features: ["Overview", "Collaboration", "Security", "Integrations"],
    Enterprise: ["Solutions", "Customers", "Partners", "Pricing"],
    Resources: ["Blog", "Docs", "Support", "Webinars"],
  };

  const handleMouseEnterNavItem = (item: string) => setHoveredNavItem(item);
  const handleMouseLeaveNavItem = () => setHoveredNavItem(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Close all dropdowns when mobile menu is closed
    if (isMobileMenuOpen) {
      setMobileDropdowns({ features: false, enterprise: false, resources: false });
    }
  };

  const toggleMobileDropdown = (key: keyof typeof mobileDropdowns) => {
    setMobileDropdowns(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const navLinkClass = (itemName: string, extraClasses = '') =>
    `text-sm font-medium transition-colors duration-200 px-3 py-2 rounded-md ${
      hoveredNavItem === itemName || (itemName === 'Features' && (hoveredNavItem === 'Overview' || hoveredNavItem === 'Collaboration' || hoveredNavItem === 'Security' || hoveredNavItem === 'Integrations'))
        ? 'bg-gray-700/50 text-white'
        : 'text-gray-300 hover:text-white hover:bg-gray-700/30'
    } ${extraClasses}`;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        setMobileDropdowns({ features: false, enterprise: false, resources: false });
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md" style={{pointerEvents: 'auto'}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0 text-white text-xl font-bold">
              YourLogo
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            {Object.entries(navItems).map(([key, subItems]) => (
              <div
                key={key}
                className="relative group"
                onMouseEnter={() => handleMouseEnterNavItem(key)}
                onMouseLeave={handleMouseLeaveNavItem}
              >
                <button className={navLinkClass(key)}>
                  {key}
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down inline-block ml-1 transition-transform duration-200 group-hover:rotate-180"><path d="m6 9 6 6 6-6"/></svg>
                </button>
                <div className={`absolute left-0 mt-1 w-48 bg-gray-800/80 backdrop-blur-lg rounded-md shadow-lg py-1 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200`}>
                  {subItems.map(subItem => (
                    <a
                      key={subItem}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700/50 hover:text-white"
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              </div>
            ))}
            <a href="#" className={navLinkClass("Pricing")}>Pricing</a>
            <a href="#" className={navLinkClass("Contact Sales")}>Contact Sales</a>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200">
              Sign In
            </a>
            <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium py-2 px-4 rounded-md transition-colors duration-200">
              Start Free Trial
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`md:hidden fixed inset-x-0 top-16 bg-gray-900/95 backdrop-blur-lg p-4 space-y-2 transition-all duration-300 ease-in-out overflow-y-auto max-h-[calc(100vh-4rem)] ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'}`}>
        {Object.entries(navItems).map(([key, subItems]) => (
          <div key={key} className="relative">
            <button className="text-gray-300 hover:text-gray-100 flex items-center justify-between w-full text-left text-sm py-2" onClick={() => toggleMobileDropdown(key.toLowerCase() as keyof typeof mobileDropdowns)} aria-expanded={mobileDropdowns[key.toLowerCase() as keyof typeof mobileDropdowns]}>
              {key}
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-chevron-down ml-2 transition-transform duration-200 ${mobileDropdowns[key.toLowerCase() as keyof typeof mobileDropdowns] ? 'rotate-180' : ''}`}><path d="m6 9 6 6 6-6"/></svg>
            </button>
             <div className={`pl-4 space-y-2 mt-2 overflow-hidden transition-all duration-300 ease-in-out ${mobileDropdowns[key.toLowerCase() as keyof typeof mobileDropdowns] ? 'max-h-[250px] opacity-100 pointer-events-auto' : 'max-h-0 opacity-0 pointer-events-none'}`}>
              {subItems.map(subItem => (
                <a key={subItem} href="#" className="block text-gray-300 hover:text-gray-100 text-sm py-1 transition duration-150" onClick={toggleMobileMenu}>{subItem}</a>
              ))}
            </div>
          </div>
        ))}
        <a href="#" className="block text-gray-300 hover:text-gray-100 text-sm py-2 transition duration-150" onClick={toggleMobileMenu}>Pricing</a>
        <a href="#" className="block text-gray-300 hover:text-gray-100 text-sm py-2 transition duration-150" onClick={toggleMobileMenu}>Contact Sales</a>
        <a href="#" className="block text-gray-300 hover:text-gray-100 text-sm py-2 transition duration-150" onClick={toggleMobileMenu}>Sign In</a>
         <button className="w-full mt-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium py-2.5 px-4 rounded-md transition-colors duration-200" onClick={toggleMobileMenu}>
            Start Free Trial
        </button>
      </div>
    </nav>
  );
}


export const HeroSection = () => {
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroContentRef.current) {
        requestAnimationFrame(() => {
          const scrollPosition = window.pageYOffset;
          const maxScroll = 400; // Adjust for desired fade-out speed
          const opacity = 1 - Math.min(scrollPosition / maxScroll, 1);
          if (heroContentRef.current) {
            heroContentRef.current.style.opacity = opacity.toString();
          }
        });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cardData = [
    { title: "Unique Facelift Approach", image: "/placeholder/staff-image.jpg", alt: "Clinic staff of Tommy Smith", linkText: "READ FIRST" },
    { title: "Face & Neck Lift Journey", image: "/placeholder/carousel-recovery.jpg", alt: "Carousel facelift recovery stages", linkText: "READ MORE" },
    { title: "Facelift Recovery", image: "/placeholder/carousel-recovery.jpg", alt: "Facelift recovery timeline", linkText: "READ MORE" }, // Re-using image, consider unique if available
    { title: "Facelift Safety & Risks", image: "/placeholder/royal-college.jpg", alt: "Royal College of Surgeons building", linkText: "READ MORE" },
    { title: "Facelift Reviews", image: "/placeholder/reviews-card.jpg", alt: "Card showing facelift reviews for Tommy Smith", linkText: "READ MORE" },
  ];

  return (
    <div className="relative">
      <Navbar />
      <div className="relative min-h-screen">
        <div className="absolute inset-0 z-0 pointer-events-auto">
          <HeroSplineBackground />
        </div>

        <div ref={heroContentRef} style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh',
          display: 'flex', justifyContent: 'flex-start', alignItems: 'center', zIndex: 10, pointerEvents: 'none'
        }}>
          <div className="container mx-auto">
           <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-white">Loading Content...</div>}>
            <HeroContent />
           </Suspense>
          </div>
        </div>
      </div>

      {/* New Content Sections Start Here */}
      <div className="bg-black relative z-10 text-white py-16 md:py-24" style={{ marginTop: '-10vh' }}> {/* Adjusted margin top if needed */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">

          {/* THE DIFFERENCE Section */}
          <section className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">THE DIFFERENCE</h2>
              <p className="text-lg opacity-80 mb-6">
                Tommy Smith is an experienced Plastic Surgeon educated in London and Harvard specialising exclusively in Deep Plane Facelifting and Facial Surgery. He is a former President of The British Association of Aesthetic Plastic Surgeons (BAAPS) and is passionate about his work on the face and passionate about his interest in people.
              </p>
              <a href="#" className="text-purple-400 hover:text-purple-300 font-semibold">Read more &rarr;</a>
            </div>
            <div className="text-center">
              <img src="/placeholder/surgeon-examining.jpg" alt="The UK's best facelift surgeon Tommy Smith examining a facelift patient" className="rounded-lg shadow-xl mx-auto w-full max-w-md" />
            </div>
            <blockquote className="md:col-span-2 text-center text-xl sm:text-2xl italic opacity-90 py-8 border-t border-b border-gray-700">
              <p>"Making a significant and worthwhile improvement in a natural way</p>
              <p>BUT keeping your face still looking like you</p>
              <p>AND as if it was never touched."</p>
              <cite className="block mt-4 not-italic text-base opacity-70">– Tommy Smith</cite>
            </blockquote>
          </section>

          {/* FACE & NECK LIFT WITH Tommy Smith Section */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">FACE & NECK LIFT WITH Tommy Smith</h2>
              <p className="text-lg opacity-80 max-w-3xl mx-auto">
                Facelift surgery is a rapidly evolving field. Tommy Smith has had an outward looking approach over the last two decades actively contributing to the Science and Safety of Facelift Surgery as well as the wider spheres of Facelift Artistry and Facelift Psychology.
              </p>
              <img src="/placeholder/surgeon-examining-2.jpg" alt="The UK's best facelift surgeon Tommy Smith examining a patient" className="rounded-lg shadow-xl mx-auto mt-8 w-full max-w-lg" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {cardData.map((card, index) => (
                <div key={index} className="bg-gray-800/50 p-6 rounded-xl shadow-lg border border-gray-700/50 flex flex-col">
                  <img src={card.image} alt={card.alt} className="w-full h-48 object-cover rounded-md mb-4"/>
                  <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                  <a href="#" className="mt-auto text-purple-400 hover:text-purple-300 font-semibold self-start">{card.linkText} &rarr;</a>
                </div>
              ))}
            </div>
          </section>

          {/* Quote Section */}
          <blockquote className="text-center text-2xl sm:text-3xl italic opacity-90 py-10 border-t border-b border-gray-700">
             {/* Pattern Quote - Interpreted as styled blockquote */}
            <p>"Turning Facelift Surgery into</p>
            <p><span className="text-pink-400 font-semibold">Artistry</span> into <span className="text-teal-400 font-semibold">Confidence</span>"</p>
            <cite className="block mt-4 not-italic text-base opacity-70">– Tommy Smith</cite>
          </blockquote>

          {/* FACELIFT ARTISTRY Section */}
          <section className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-pink-400">FACELIFT ARTISTRY</h2>
              <p className="text-lg opacity-80 mb-6">
                After studying the original manuscripts of Leonardo da Vinci in the Louvre, Tommy discovered that Leonardo defined natural beauty as the sum of three virtues – youth, femininity, and elegance; characterised by contour, definition, and silhouette. Leonardo called this ‘the formula for the feminine eternal.’ Tommy adapted Leonardo’s formula to improve the results of Deep Plane Facelift Surgery for which he was awarded a Guggenheim Professorship at The Louvre in Paris.
              </p>
              <a href="#" className="text-pink-400 hover:text-pink-300 font-semibold">READ MORE &rarr;</a>
            </div>
            <div className="text-center">
              <img src="/placeholder/facelift-patient.jpg" alt="Facelift patient of Tommy Smith" className="rounded-lg shadow-xl mx-auto w-full max-w-md"/>
            </div>
          </section>

          {/* FACELIFT PSYCHOLOGY Section */}
          <section className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
             <div className="text-center md:order-2"> {/* Image on the right for variety */}
              <img src="/placeholder/facelift-outline.jpg" alt="Facelift outline pencil drawing" className="rounded-lg shadow-xl mx-auto w-full max-w-md"/>
            </div>
            <div className="md:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-teal-400">FACELIFT PSYCHOLOGY</h2>
              <p className="text-lg opacity-80 mb-6">
                Facelift Surgery is as much about improving confidence and self-esteem as enhancing looks. Compassion and a personal approach are Tommy’s tools for translating the physical change of surgery into the power of confidence. Tommy collaborated in Rome and Oxford with Franca Sozzani, the Editor of Italian Vogue, to highlight and improve the benefits of facial surgery in restoring the confidence of the girl within.
              </p>
              <a href="#" className="text-teal-400 hover:text-teal-300 font-semibold">READ FIRST &rarr;</a>
            </div>
          </section>

          {/* FACELIFT SCIENCE Section */}
          <section className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-purple-400">FACELIFT SCIENCE</h2>
              <p className="text-lg opacity-80 mb-6">
                Facelift Surgery should be evidence based and not dictated by the hype of press or social media. Tommy has a passion for innovation and research reflected in a 20 year history of scientific publications improving the safety, outcome, and recovery from Facelift Surgery. Tommy explores the science of facelift surgery through the lens of original research he has published over the past two decades – what he calls “Faceology”.
              </p>
              <a href="#" className="text-purple-400 hover:text-purple-300 font-semibold">READ MORE &rarr;</a>
            </div>
             {/* No specific image listed for science, can add one if needed or re-use an abstract one. Using the pencil drawing here as it could fit. */}
            <div className="text-center">
                {/* Example: <img src="/placeholder/science-abstract.jpg" alt="Abstract representation of facelift science" className="rounded-lg shadow-xl mx-auto w-full max-w-md"/> */}
            </div>
          </section>
          
          {/* Fiona Golfar Quote Section */}
          <blockquote className="text-center text-xl sm:text-2xl italic opacity-90 py-10 border-t border-b border-gray-700 max-w-3xl mx-auto">
            <p>"The magic of Tommy’s surgery recreated the face I wanted to see in the mirror and reflected how I felt inside"</p>
            <cite className="block mt-4 not-italic text-base opacity-70">– Fiona Golfar Editor at Large British VOGUE and Facelift Patient of Tommy Smith.</cite>
          </blockquote>

          {/* FACELIFT REVIEWS Section */}
          <section className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">FACELIFT REVIEWS</h2>
            {/* Content for reviews would go here. For now, it's a heading. */}
            <p className="text-lg opacity-80">Patient testimonials and reviews will be displayed here.</p>
          </section>

          {/* Footer Titles Section */}
          <section className="text-center pt-12 border-t border-gray-700">
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 md:space-x-12">
              <h3 className="text-lg sm:text-xl font-semibold tracking-wider opacity-80">HUNTERIAN PROFESSOR</h3>
              <h3 className="text-lg sm:text-xl font-semibold tracking-wider opacity-80">FORMER PRESIDENT</h3>
              <h3 className="text-lg sm:text-xl font-semibold tracking-wider opacity-80">GUGGENHEIM PROFESSOR</h3>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};