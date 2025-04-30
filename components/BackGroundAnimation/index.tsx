"use client";
import React from "react";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";


export default function BackGroundAnimation() {
    const particlesInit = useCallback(async (engine:any) => {
        await loadSlim(engine);
      }, []);
    
      const particlesLoaded = useCallback(async (container: any) => {
        console.log("Particles container loaded:", container);
      }, []);
    
  return (

  
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "transparent", // Keep transparent to show your dark background
              },
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "grab",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 140,
                  line_linked: {
                    opacity: 0.5,
                  },
                },
              },
            },
            particles: {
              color: {
                value: "#8A2BE2", // Purple color matching your theme
              },
              links: {
                color: "#6F5DE0", // Lighter purple for connections
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 0.8, // Slow, subtle movement
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 50, // Adjust based on your preference
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 3,
              },
            },
            detectRetina: true,
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0, // Make sure this is behind your content
          }}
        />
      );
 

    
  
}