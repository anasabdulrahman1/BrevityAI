import { useCallback } from 'react';
import type { Container, Engine } from 'tsparticles-engine';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

export function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0"
      options={{
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 200,
              links: {
                opacity: 0.5
              }
            }
          }
        },
        particles: {
          color: {
            value: "#ffffff"
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1
          },
          move: {
            enable: true,
            outModes: {
              default: "bounce"
            },
            random: false,
            speed: 2,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 120
          },
          opacity: {
            value: 0.3
          },
          shape: {
            type: "circle"
          },
          size: {
            value: { min: 1, max: 3 }
          }
        },
        detectRetina: true
      }}
    />
  );
}