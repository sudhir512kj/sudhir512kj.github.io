import React from 'react';
import { Box, Container, Typography, Button, Chip, Grid } from '@mui/material';
import { Email, GetApp, LocationOn, Work } from '@mui/icons-material';

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 100 100\\"><defs><pattern id=\\"grid\\" width=\\"10\\" height=\\"10\\" patternUnits=\\"userSpaceOnUse\\"><path d=\\"M 10 0 L 0 0 0 10\\" fill=\\"none\\" stroke=\\"rgba(255,255,255,0.1)\\" stroke-width=\\"0.5\\"/></pattern></defs><rect width=\\"100\\" height=\\"100\\" fill=\\"url(%23grid)\\"/></svg>")',
          opacity: 0.3,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, mt: 8 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Box sx={{ mb: 2 }}>
              <Chip
                icon={<Work />}
                label="Full Stack Developer"
                sx={{ backgroundColor: 'rgba(255,255,255,0.9)', color: 'black', mb: 3 }}
              />
            </Box>
            
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
                mb: 2,
                background: 'linear-gradient(45deg, #fff, #e2e8f0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Sudhir Meena
            </Typography>
            
            <Typography variant="h4" sx={{ mb: 3, color: '#e2e8f0' }}>
              Senior Java Backend Engineer
            </Typography>
            
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              Architecting scalable microservices and cloud-native solutions with 4+ years of enterprise experience in Java, Spring Boot, and DevOps technologies
            </Typography>
            
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOn sx={{ color: '#fbbf24' }} />
                <Typography>Gurgaon, India</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Work sx={{ color: '#10b981' }} />
                <Typography>Open to opportunities</Typography>
              </Box>
            </Box>
            
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<Email />}
                href="#contact"
                sx={{ textTransform: 'uppercase', letterSpacing: 0.5 }}
              >
                Get In Touch
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<GetApp />}
                href="/SudhirMeena_JavaBackend_Resume.pdf"
                target="_blank"
                sx={{
                  color: 'white',
                  borderColor: 'rgba(255,255,255,0.3)',
                  textTransform: 'uppercase',
                  letterSpacing: 0.5,
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                  },
                }}
              >
                Download Resume
              </Button>
            </Box>
          </Grid>
          
          <Grid item xs={12} lg={6} sx={{ display: { xs: 'none', lg: 'block' } }}>
            <Box sx={{ textAlign: 'center' }}>
              <Box
                component="img"
                src="/images/profile_photo.jpg"
                alt="Sudhir Meena"
                sx={{
                  width: 280,
                  height: 280,
                  borderRadius: '50%',
                  border: '4px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;