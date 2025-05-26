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
      <Suspense fallback={<div className="pointer-event-none flex size-full items-center justify-center bg-black text-white opacity-10">Loading 3D Scene...</div>}>
        {/* TODO: Replace this Spline scene with one more fitting for a luxury beauty clinic.
            Consider themes of elegance, abstract beauty, flowing forms, or subtle medical aesthetics.
            Example ideas: flowing silk, shimmering particles, abstract cellular structures, serene water ripples.
        */}
        <Spline
          className="size-1/2 sm:size-full"
          style={{
            width: '100%',
            height: '100vh',
            pointerEvents: 'none',
          }}
          scene="https://prod.spline.design/3a6VJOAKhdYAKMwC/scene.splinecode" 
        
          // Original - Keep as placeholder, recommend changing
        />
      </Suspense>
      {/* Overlay div removed to make Spline fully visible */}
    </div>
  );
}
