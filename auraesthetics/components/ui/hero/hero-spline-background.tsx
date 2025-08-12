"use client";

import React, { Suspense, lazy } from 'react';
const Spline = lazy(() => import('@splinetool/react-spline'));

export function HeroSplineBackground() {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      pointerEvents: 'none',
      overflow: 'hidden',
      zIndex: 0,
    }}>
      <Suspense fallback={
        <div className="flex size-full items-center justify-center bg-transparent text-accent-yellow-dark opacity-50">
          Loading Radiance...
        </div>
      }>
        {/* 
          TODO: Replace this Spline scene with one designed for "Ignited Radiance":
          - Themes: Flowing light/energy, abstract soft flames, shimmering gold particles, luxurious liquid gold.
          - Colors: Subtle golds (FDB110, FCCF14), warm oranges (F57A08), hints of red (E8400C),
                    against a backdrop that complements Pale Alabaster (FCFBF8).
          - Example Scene Placeholder (You NEED to create your own):
            https://prod.spline.design/YOUR_NEW_IGNITED_RADIANCE_SCENE/scene.splinecode
        */}
        <Spline
          className="opacity-70 sm:opacity-100"
          style={{
            width: '115%',
            height: '115%',
          }}
          scene="https://prod.spline.design/NaXXlCNIwLRc2KSa/scene.splinecode" // KEEP AS PLACEHOLDER UNTIL REPLACED
        />
      </Suspense>
    </div>
  );
}
