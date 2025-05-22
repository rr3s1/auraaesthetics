"use client";

import Link from 'next/link';
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
          scene="https://prod.spline.design/us3ALejTXl6usHZ7/scene.splinecode" // Original
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
      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-wide">
        DRIVE YOUR <span className="text-purple-400">DREAM</span>.<br />
        WE BUILD <span className="text-pink-400">PERFORMANCE</span> & <span className="text-teal-400">STYLE</span>
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl mb-8 opacity-90 max-w-2xl italic">
        Creators of the world’s most iconic modified vehicles. Your vision, our craftsmanship.
      </p>
    </div>
  );
}

function Navbar() {
  const [hoveredNavItem, setHoveredNavItem] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({
    services: false,
    gallery: false,
    about: false,
  });

  const navItems = {
    Services: ["Overview", "Custom Builds", "Performance Tuning", "Interior Upgrades"],
    Gallery: ["Featured Builds", "Client Cars", "Concept Designs"],
    About: ["Our Story", "The Team", "Craftsmanship"],
  };

  const handleMouseEnterNavItem = (item: string) => setHoveredNavItem(item);
  const handleMouseLeaveNavItem = () => setHoveredNavItem(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setMobileDropdowns({ services: false, gallery: false, about: false });
    }
  };

  const toggleMobileDropdown = (key: keyof typeof mobileDropdowns) => {
    setMobileDropdowns(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const navLinkClass = (itemName: string, extraClasses = '') =>
    `text-sm font-medium transition-colors duration-200 px-3 py-2 rounded-md ${
      hoveredNavItem === itemName || 
      (itemName === 'Services' && (hoveredNavItem === 'Overview' || hoveredNavItem === 'Custom Builds' || hoveredNavItem === 'Performance Tuning' || hoveredNavItem === 'Interior Upgrades')) ||
      (itemName === 'Gallery' && (hoveredNavItem === 'Featured Builds' || hoveredNavItem === 'Client Cars' || hoveredNavItem === 'Concept Designs')) ||
      (itemName === 'About' && (hoveredNavItem === 'Our Story' || hoveredNavItem === 'The Team' || hoveredNavItem === 'Craftsmanship'))
        ? 'bg-gray-700/50 text-white'
        : 'text-gray-300 hover:text-white hover:bg-gray-700/30'
    } ${extraClasses}`;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        setMobileDropdowns({ services: false, gallery: false, about: false });
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 no-scrollbar backdrop-blur-md" style={{pointerEvents: 'auto'}}>
      <div className="container mx-auto px-4 sm:px-6 no-scrollbar lg:px-8">
        <div className="flex items-center justify-between h-16 ">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0 text-white text-xl font-bold">
              URBANMODS
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
            <a href="#" className={navLinkClass("Shop")}>Shop</a>
            <a href="#" className={navLinkClass("Contact Us")}>Contact Us</a>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            <Link href="/register" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200">
              Register
            </Link>
            <Link href="/admin" className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium py-2 px-4 rounded-md transition-colors duration-200">
              Admin
            </Link>
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
        <a href="#" className="block text-gray-300 hover:text-gray-100 text-sm py-2 transition duration-150" onClick={toggleMobileMenu}>Shop</a>
        <a href="#" className="block text-gray-300 hover:text-gray-100 text-sm py-2 transition duration-150" onClick={toggleMobileMenu}>Contact Us</a>
        <a href="#" className="block text-gray-300 hover:text-gray-100 text-sm py-2 transition duration-150" onClick={toggleMobileMenu}>Sign In</a>
         <button className="w-full mt-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium py-2.5 px-4 rounded-md transition-colors duration-200" onClick={toggleMobileMenu}>
            Explore Builds
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
          const maxScroll = 400; 
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
    { title: "Bespoke Vehicle Resprays", image: "/placeholder/car-respray.jpg", alt: "Custom car paint job", linkText: "EXPLORE FINISHES" },
    { title: "Custom Body Kit Fitting", image: "/placeholder/car-bodykit.jpg", alt: "Car with custom body kit", linkText: "VIEW DESIGNS" },
    { title: "Performance Caliper Painting", image: "/placeholder/car-caliper.jpg", alt: "Custom painted brake caliper", linkText: "SEE OPTIONS" },
    { title: "Luxury Interior Upgrades", image: "/placeholder/car-interior.jpg", alt: "Upgraded luxury car interior", linkText: "DISCOVER MORE" },
    { title: "Carbon Fibre Components", image: "/placeholder/car-carbon-parts.jpg", alt: "Custom carbon fibre car parts", linkText: "LEARN MORE" },
    { title: "Wheel & Tyre Packages", image: "/placeholder/car-wheels.jpg", alt: "Custom alloy wheels on a car", linkText: "BROWSE SELECTION" },
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

      <div className="bg-black relative z-10 text-white py-16 md:py-24" style={{ marginTop: '-10vh' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">

          <section className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">THE <span className="text-purple-400">URBANMODS</span> DIFFERENCE</h2>
              <p className="text-lg opacity-80 mb-6">
                At UrbanMods, we've been leaders in car modification for over 30 years, offering bespoke services that transform luxury vehicles into one-of-a-kind masterpieces. We live by "Your urban, your rules" – championing individual expression through meticulous craftsmanship and cutting-edge design.
              </p>
              <a href="#" className="text-purple-400 hover:text-purple-300 font-semibold">Discover Our Philosophy →</a>
            </div>
            <div className="text-center">
              <img src="/placeholder/car-workshop-sleek.jpg" alt="Sleek modified car in a modern workshop" className="rounded-lg shadow-xl mx-auto w-full max-w-md" />
            </div>
            <blockquote className="md:col-span-2 text-center text-xl sm:text-2xl italic opacity-90 py-8 border-t border-b border-gray-700">
              <p>"A one-off each time. Your urban your rules –</p>
              <p>we share a necessity for individual expression."</p>
              <cite className="block mt-4 not-italic text-base opacity-70">– UrbanMods Ethos</cite>
            </blockquote>
          </section>

          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">OUR MODIFICATION PROGRAMME</h2>
              <p className="text-lg opacity-80 max-w-3xl mx-auto">
                Our modification programme caters to a diverse range of vehicles. We take pride in offering tailor-made solutions that combine style, performance and exclusivity. Each project is handled with meticulous attention to detail, from body modifications and custom interiors to technical upgrades.
              </p>
              <img src="/placeholder/car-lineup-modified.jpg" alt="Lineup of custom modified cars" className="rounded-lg shadow-xl mx-auto mt-8 w-full max-w-lg" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {cardData.map((card, index) => (
                <div key={index} className="bg-gray-800/50 p-6 rounded-xl shadow-lg border border-gray-700/50 flex flex-col">
                  <img src={card.image} alt={card.alt} className="w-full h-48 object-cover rounded-md mb-4"/>
                  <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                  <a href="#" className="mt-auto text-purple-400 hover:text-purple-300 font-semibold self-start">{card.linkText} →</a>
                </div>
              ))}
            </div>
          </section>

          <blockquote className="text-center text-2xl sm:text-3xl italic opacity-90 py-10 border-t border-b border-gray-700">
            <p>"Turning <span className="text-pink-400 font-semibold">Metal</span> into <span className="text-teal-400 font-semibold">Masterpieces</span>,</p>
            <p>Engineering <span className="text-purple-400 font-semibold">Dreams</span> into <span className="text-orange-400 font-semibold">Reality</span>."</p>
            <cite className="block mt-4 not-italic text-base opacity-70">– The UrbanMods Team</cite>
          </blockquote>

          <section className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-pink-400">THE URBAN LOOK: <span className="italic">OEM PLUS</span></h2>
              <p className="text-lg opacity-80 mb-6">
                It was hard to find aftermarket modifications that weren’t over the top, so we started designing and manufacturing them ourselves. Over time we found an ‘OEM plus’ design style was the perfect recipe for redefining luxury and performance vehicles in a subtle yet striking way.
              </p>
              <a href="#" className="text-pink-400 hover:text-pink-300 font-semibold">Explore Our Design Language →</a>
            </div>
            <div className="text-center">
              <img src="/placeholder/car-oem-plus.jpg" alt="Car showcasing OEM plus design modification" className="rounded-lg shadow-xl mx-auto w-full max-w-md"/>
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
             <div className="text-center md:order-2">
              <img src="/placeholder/car-carbon-fibre-detail.jpg" alt="Close up of carbon fibre car component" className="rounded-lg shadow-xl mx-auto w-full max-w-md"/>
            </div>
            <div className="md:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-teal-400">MASTERS OF CARBON FIBRE</h2>
              <p className="text-lg opacity-80 mb-6">
                We are experts at manufacturing our own carbon fibre and other components to the highest standards in our own facilities. This means we have complete quality control and knowledge of our components through design, manufacture, and assembly - guaranteeing perfect fitment, finish, and aftercare.
              </p>
              <a href="#" className="text-teal-400 hover:text-teal-300 font-semibold">Discover Our Carbon Tech →</a>
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-orange-400">PERFORMANCE ENGINEERING</h2> {/* Changed color for variety */}
              <p className="text-lg opacity-80 mb-6">
                Beyond aesthetics, our modifications delve deep into enhancing vehicle dynamics. From engine tuning and exhaust systems to suspension upgrades and braking enhancements, we engineer every aspect for peak performance and an exhilarating driving experience, without compromising reliability.
              </p>
              <a href="#" className="text-orange-400 hover:text-orange-300 font-semibold">Explore Performance Upgrades →</a>
            </div>
            <div className="text-center">
                 <img src="/placeholder/car-engine-bay.jpg" alt="Detailed view of a modified car engine bay" className="rounded-lg shadow-xl mx-auto w-full max-w-md"/>
            </div>
          </section>
          
          <blockquote className="text-center text-xl sm:text-2xl italic opacity-90 py-10 border-t border-b border-gray-700 max-w-3xl mx-auto">
            <p>"The magic of UrbanMods' work recreated the car I always envisioned, reflecting how I feel behind the wheel – pure exhilaration!"</p>
            <cite className="block mt-4 not-italic text-base opacity-70">– A Thrilled UrbanMods Client</cite>
          </blockquote>

          <section className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">CLIENT BUILDS & TESTIMONIALS</h2>
            <p className="text-lg opacity-80 mb-4">See what our clients are saying and explore a gallery of their unique vehicles.</p>
            {/* Placeholder for actual reviews/gallery component */}
            <a href="#" className="bg-purple-600 hover:bg-purple-700 text-white text-lg font-medium py-3 px-8 rounded-md transition-colors duration-200">
              View Gallery & Reviews
            </a>
          </section>

          <section className="text-center pt-12 border-t border-gray-700">
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 md:space-x-12">
              <h3 className="text-lg sm:text-xl font-semibold tracking-wider opacity-80">AWARD-WINNING DESIGNS</h3>
              <h3 className="text-lg sm:text-xl font-semibold tracking-wider opacity-80">MASTER TECHNICIANS</h3>
              <h3 className="text-lg sm:text-xl font-semibold tracking-wider opacity-80">GLOBAL PARTNERSHIPS</h3>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};