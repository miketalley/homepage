import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { menuItems } from './Toolbar';

// One-line hooks keyed by the project titles in Toolbar's menuItems, so the
// URLs stay defined in exactly one place.
const hooks = {
  Bodlytics: 'AI-powered meal planning and nutrition tracking.',
  Wispuh: 'Free, offline speech-to-text for macOS. Private by default, no subscription.',
  'Milk Barf Games': 'My solo indie game studio, founded 2026 in Boston.',
  'Direlands: Extraction': 'A co-op fantasy extraction-RPG. Coming soon to Steam Early Access.',
};

// Logos are served from public/img rather than hotlinked from each project's
// origin, so the cards can't break when those sites change.
const logos = {
  Bodlytics: '/img/bodlytics.svg',
  Wispuh: '/img/wispuh.png',
  'Milk Barf Games': '/img/milkbarf.png',
  'Direlands: Extraction': '/img/direlands.png',
};

const projects = menuItems.find((item) => item.title === 'Projects')?.links ?? [];

function ProjectCards() {
  return (
    <Box>
      <Typography
        variant="h6"
        sx={{
          fontFamily: '"Merriweather", Georgia, serif',
          fontWeight: 400,
          mb: 2,
        }}
      >
        What I'm Building
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
          gap: 2,
        }}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            component="a"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: 'block',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(4px)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              backgroundImage: 'none',
              transition: 'transform 0.2s ease-out, border-color 0.2s ease-out',
              '&:hover': {
                transform: 'translateY(-4px)',
                borderColor: 'primary.main',
              },
            }}
          >
            <CardContent sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
              <Box
                component="img"
                src={logos[project.title]}
                alt=""
                aria-hidden="true"
                sx={{
                  width: 40,
                  height: 40,
                  flexShrink: 0,
                  borderRadius: 1,
                  objectFit: 'contain',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                }}
              />
              <Box sx={{ minWidth: 0 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                  {project.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6 }}
                >
                  {hooks[project.title]}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default ProjectCards;
