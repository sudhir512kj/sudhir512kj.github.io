import React from 'react';
import { Box, Container, Typography, Grid, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Twitter, Email } from '@mui/icons-material';

const Footer = () => {
  const socialLinks = [
    { icon: <GitHub />, link: 'https://github.com/sudhir512kj' },
    { icon: <LinkedIn />, link: '#' },
    { icon: <Twitter />, link: 'https://twitter.com/sudhir5125' },
    { icon: <Email />, link: 'mailto:sureshmeena512@gmail.com' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1e293b',
        color: 'white',
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
              Sudhir Meena
            </Typography>
            <Typography color="text.secondary">
              Java Backend Developer
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
            <Box sx={{ mb: 2 }}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: '#94a3b8',
                    mx: 0.5,
                    '&:hover': {
                      color: '#3b82f6',
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
            <Typography variant="body2" color="text.secondary">
              © 2023 Sudhir Meena. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;