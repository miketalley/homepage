import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import ParallaxFlex from './ParallaxFlex';

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
                    fontFamily: '"Raleway", sans-serif',
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
                  React Specialist | AI-Enhanced Development
                </Typography>
              </ParallaxFlex>
              <ParallaxFlex depth={0.25} mb={4}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                  }}
                >
                  Medford, MA
                </Typography>
              </ParallaxFlex>
            </Box>
          </Box>

          {/* Bio Paragraphs */}
          <ParallaxFlex depth={0.6} mb={3}>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              I am a software engineer that loves learning and working with new technologies. My 
              focus is on writing code that not only works, but is concise, easily understandable, 
              and extensible. Continually improving as a developer is what I strive for and achieve 
              through learning from my peers as well as finding and consuming online resources. I 
              believe sharing knowledge between team members is an integral key of a successful team.
            </Typography>
          </ParallaxFlex>

          <ParallaxFlex depth={0.9} mb={3}>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              I'm passionate about both the customer and developer experience — building intuitive 
              products that users love, and creating tools that simplify workflows and amplify 
              engineering teams. My day-to-day involves coding primarily in React and TypeScript 
              on the front-end to create highly intuitive UI components. A big part of being senior 
              level is mentoring more junior developers and promoting their continued learning and growth.
            </Typography>
          </ParallaxFlex>

          <ParallaxFlex depth={1.3} mb={3}>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              I believe in eliminating repetitive work through intelligent automation. I'm continuously 
              exploring AI-augmented development to accelerate velocity while maintaining high code 
              quality. React and TypeScript are technologies that I am extremely excited about and 
              look forward to continuing to build with in the future.
            </Typography>
          </ParallaxFlex>
        </Box>
      </Box>
    </Container>
  );
}

export default MainContent;
