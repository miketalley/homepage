import React from 'react';
import { Container, Box, Typography, Fade, Link } from '@mui/material';
import ParallaxFlex from './ParallaxFlex';
import ProjectCards from './ProjectCards';
import { menuItems } from './Toolbar';
import { techIcons } from '../techIcons';

// URLs come from Toolbar's menuItems so the nav, the cards, and these inline
// links can never drift apart.
const projectUrls = Object.fromEntries(
  (menuItems.find((item) => item.title === 'Projects')?.links ?? []).map((l) => [
    l.title,
    l.url,
  ])
);

function ProjectLink({ title, italic = false }) {
  return (
    <Link
      href={projectUrls[title]}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        color: 'primary.main',
        fontStyle: italic ? 'italic' : 'inherit',
        fontWeight: 500,
        // A real underline (rather than border-bottom) sits closer to the
        // baseline and skips descenders, so it reads as type instead of a box.
        textDecoration: 'underline',
        textDecorationColor: 'rgba(66, 134, 244, 0.35)',
        textDecorationThickness: '1px',
        textUnderlineOffset: '3px',
        textDecorationSkipInk: 'auto',
        transition: 'color 0.2s ease-out, text-decoration-color 0.2s ease-out',
        '&:hover': {
          color: '#7BAEF8',
          textDecorationColor: '#7BAEF8',
        },
      }}
    >
      {title}
    </Link>
  );
}

// Near-black brand marks (Next.js) would vanish on the dark background.
const legibleColor = (hex) => (parseInt(hex.slice(1), 16) < 0x333333 ? '#FFFFFF' : hex);

function TechIcon({ icon }) {
  return (
    <Box
      component="svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      sx={{ width: 18, height: 18, flexShrink: 0 }}
    >
      <path d={icon.path} fill={legibleColor(icon.hex)} fillRule={icon.fillRule || 'nonzero'} />
    </Box>
  );
}

function MainContent() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ maxWidth: 800, width: '100%' }}>
          {/* Header Section */}
          <Fade in timeout={600}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 2,
                mb: 4,
              }}
            >
              {/* Profile Image */}
              <Box sx={{ flexShrink: 0 }}>
                <ParallaxFlex depth={0.3} mb={1}>
                  <Box
                    component="img"
                    src="/img/mike-512x512.png"
                    alt="Mike Talley"
                    sx={{
                      height: 100,
                      width: 'auto',
                      borderRadius: '50%',
                    }}
                  />
                </ParallaxFlex>
              </Box>

              {/* Name and Title */}
              <Box>
                <ParallaxFlex depth={0.1} mb={1}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 300,
                      fontFamily: '"Merriweather", Georgia, serif',
                    }}
                  >
                    Mike Talley
                  </Typography>
                </ParallaxFlex>
                <ParallaxFlex depth={0.2} mb={1}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 400,
                    }}
                  >
                    Senior Software Engineer
                  </Typography>
                </ParallaxFlex>
                <ParallaxFlex depth={0.22} mb={1}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontStyle: 'italic',
                      color: 'rgba(255, 255, 255, 0.85)',
                    }}
                  >
                    React/Node.js · AI-Augmented Development
                  </Typography>
                </ParallaxFlex>
                <ParallaxFlex depth={0.25} mb={1}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                    }}
                  >
                    Boston, MA
                  </Typography>
                </ParallaxFlex>
              </Box>
            </Box>
          </Fade>

          {/* Bio Paragraphs */}
          <Fade in timeout={900}>
            <Box>
              <ParallaxFlex depth={0.6} mb={3}>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                  Thanks for visiting. I've spent 10+ years building production web
                  applications, developer tooling, and internal platforms — most recently
                  at HubSpot and Monitaur. React and Vue on the frontend, Node.js on the
                  backend, TypeScript throughout.
                </Typography>
              </ParallaxFlex>

              <ParallaxFlex depth={0.9} mb={3}>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                  I'm passionate about user experience — building intuitive tools is what I
                  enjoy most. Whether it's for customers or internal users, enhancing
                  capabilities and efficiency is my goal. I'm a firm believer in
                  AI-augmented development, increasing speed while improving confidence
                  through solid tests — all while adhering to high quality code standards.
                  Additionally, I enjoy mentoring other devs and helping to facilitate an
                  environment of learning.
                </Typography>
              </ParallaxFlex>

              <ParallaxFlex depth={1.1} mb={3}>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                  Alongside my engineering work, I run{' '}
                  <ProjectLink title="Milk Barf Games" />, where I'm building{' '}
                  <ProjectLink title="Direlands: Extraction" italic /> — a co-op fantasy
                  extraction-RPG — solo, end to end, with an AI-augmented workflow.
                </Typography>
              </ParallaxFlex>

              <ParallaxFlex depth={1.3} mb={4}>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                  I'm looking to join a team with an invigorating vision, a humble and open
                  team that is grounded in bi-directional feedback that helps everyone learn
                  and grow together. If that sounds like your team, I would love to hear
                  from you!
                </Typography>
              </ParallaxFlex>
            </Box>
          </Fade>

          {/* Tech Stack */}
          <Fade in timeout={1200}>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                columnGap: 2,
                rowGap: 1.5,
                mb: 5,
              }}
            >
              {techIcons.map((icon) => (
                <Box
                  key={icon.label}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.75,
                    // The label would otherwise show a text I-beam while the
                    // SVG shows an arrow — keep one cursor across the pair.
                    cursor: 'default',
                    userSelect: 'none',
                  }}
                >
                  <TechIcon icon={icon} />
                  <Typography
                    variant="body2"
                    sx={{ color: 'rgba(255, 255, 255, 0.85)', whiteSpace: 'nowrap' }}
                  >
                    {icon.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Fade>

          {/* Projects */}
          <Fade in timeout={1500}>
            <Box sx={{ mb: 4 }}>
              <ProjectCards />
            </Box>
          </Fade>
        </Box>
      </Box>
    </Container>
  );
}

export default MainContent;
