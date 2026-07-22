import React, { useCallback, useMemo } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

// Initialize particles engine once
let initialized = false;
const initPromise = initParticlesEngine(async (engine) => {
  await loadSlim(engine);
}).then(() => {
  initialized = true;
});

function ParticlesContainer() {
  const [ready, setReady] = React.useState(initialized);

  React.useEffect(() => {
    if (!initialized) {
      initPromise.then(() => setReady(true));
    }
  }, []);

  const particlesOptions = useMemo(
    () => ({
      fullScreen: false,
      background: {
        color: {
          value: 'transparent',
        },
      },
      fpsLimit: 60,
      interactivity: {
        // The app layout sits above the canvas at z-index 1, so canvas-scoped
        // detection would never see the cursor. Listen on the window instead.
        detectsOn: 'window',
        events: {
          onHover: {
            enable: true,
            mode: 'grab',
          },
          onClick: {
            enable: true,
            mode: 'push',
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 143,
            links: {
              opacity: 1,
            },
          },
          push: {
            quantity: 4,
          },
        },
      },
      particles: {
        number: {
          value: 70,
          density: {
            enable: true,
            area: 1000,
          },
        },
        color: {
          value: '#4286f4',
        },
        shape: {
          type: 'circle',
        },
        opacity: {
          value: 0.5,
        },
        size: {
          value: { min: 1, max: 3 },
        },
        links: {
          enable: true,
          distance: 150,
          color: '#4286f4',
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 6,
          direction: 'none',
          random: false,
          straight: false,
          outModes: {
            default: 'out',
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  const particlesLoaded = useCallback(async (container) => {
    // Particles loaded
  }, []);

  if (!ready) return null;

  // NOTE: @tsparticles/react renders <div id={id} className={className} /> and
  // ignores any `style` prop, so positioning must come from CSS. See the
  // #tsparticles rule in index.css.
  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={particlesOptions}
    />
  );
}

export default ParticlesContainer;
