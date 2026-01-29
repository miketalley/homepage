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
              Customer-centric software engineer with 10+ years of experience building production 
              web applications and developer tools. Deep expertise in React, TypeScript, and Node.js, 
              with a strong track record of translating customer needs into reliable, scalable solutions.
            </Typography>
          </ParallaxFlex>

          <ParallaxFlex depth={0.9} mb={3}>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              I'm passionate about both the customer and developer experience — building intuitive 
              products that users love, and creating tools that simplify workflows and amplify 
              engineering teams. I'm continuously exploring AI-augmented development to accelerate 
              velocity while maintaining high code quality. I believe in eliminating repetitive work 
              through intelligent automation and mentoring fellow developers to grow together.
            </Typography>
          </ParallaxFlex>

          <ParallaxFlex depth={1.3} mb={3}>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              I'm looking for a company with a clear vision I can relate to, and a team of knowledgeable, 
              humble people who are open to giving and receiving feedback to foster an environment 
              of growth for everyone. I thrive in 
              environments where people are open to new ideas and embrace new technologies.
            </Typography>
          </ParallaxFlex>
        </Box>
      </Box>
    </Container>
  );
}

export default MainContent;
