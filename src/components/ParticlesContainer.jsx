import React, { useCallback, useMemo } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { Box } from '@mui/material';

// Initialize particles engine once
let initialized = false;
const initPromise = initParticlesEngine(async (engine) => {
  await loadSlim(engine);
}).then(() => {
  initialized = true;
});

function ParticlesContainer({ children }) {
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
        detect_on: 'canvas',
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

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: 'calc(100vh - 64px)',
        width: '100%',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          py: 4,
        }}
      >
        {children}
      </Box>
      {ready && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={particlesOptions}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
          }}
        />
      )}
    </Box>
  );
}

export default ParticlesContainer;
