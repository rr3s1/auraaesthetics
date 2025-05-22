"use client";

import React, { Suspense, lazy } from 'react';
const Spline = lazy(() => import('@splinetool/react-spline'));

export function HeroSplineBackground() {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      pointerEvents: 'auto',
      overflow: 'hidden',
    }}>
      <Suspense fallback={<div className="w-full h-full flex items-center opacity-10 pointer-event-none justify-center bg-black text-white">Loading 3D Scene...</div>}>
        {/* TODO: Replace this Spline scene with one more fitting for a luxury beauty clinic.
            Consider themes of elegance, abstract beauty, flowing forms, or subtle medical aesthetics.
            Example ideas: flowing silk, shimmering particles, abstract cellular structures, serene water ripples.
        */}
        <Spline
          style={{
            width: '100%',
            height: '100vh',
            pointerEvents: 'none',
            opacity: 1, // Ensure full opacity
          }}
          scene="https://prod.spline.design/pr4ny12ZibDjbpbc/scene.splinecode" 
        
          // Original - Keep as placeholder, recommend changing
        />
      </Suspense>
      {/* Overlay div removed to make Spline fully visible */}
    </div>
  );
}
