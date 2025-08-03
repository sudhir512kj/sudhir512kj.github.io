import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Card, CardContent, Chip } from '@mui/material';
import experienceData from '../data/experience.json';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    setExperiences(experienceData.experiences);
  }, []);

  return (
    <Box id="experience" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
            Work Experience
          </Typography>
          <Box
            sx={{
              width: 80,
              height: 4,
              background: 'linear-gradient(90deg, #2563eb, #3b82f6)',
              margin: '0 auto 2rem',
              borderRadius: 2,
            }}
          />
        </Box>

        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
          <Box
            sx={{
              position: 'relative',
              pl: 4,
              '&::before': {
                content: '""',
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: 3,
                background: 'linear-gradient(180deg, #2563eb, #3b82f6)',
                borderRadius: 2,
              },
            }}
          >
            {experiences.map((exp, index) => (
              <Box
                key={index}
                sx={{
                  position: 'relative',
                  mb: 4,
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: -32,
                    top: 8,
                    width: 16,
                    height: 16,
                    backgroundColor: '#2563eb',
                    border: '3px solid white',
                    borderRadius: '50%',
                    boxShadow: 2,
                  },
                }}
              >
                <Card
                  sx={{
                    ml: 2,
                    borderLeft: '4px solid #3b82f6',
                    boxShadow: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateX(8px)',
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h5" color="primary" sx={{ fontWeight: 600, mb: 1 }}>
                      {exp.title}
                    </Typography>
                    <Typography color="text.secondary" sx={{ fontWeight: 500, mb: 0.5 }}>
                      {exp.company} - {exp.location}
                    </Typography>
                    <Typography color="primary" sx={{ fontWeight: 500, fontSize: '0.9rem', mb: 2 }}>
                      {exp.period}
                    </Typography>
                    <Typography color="text.secondary" sx={{ mb: 2 }}>
                      {exp.description}
                    </Typography>
                    
                    <Box component="ul" sx={{ pl: 2, mb: 2 }}>
                      {exp.responsibilities.map((resp, idx) => (
                        <Typography component="li" key={idx} sx={{ mb: 1 }}>
                          {resp}
                        </Typography>
                      ))}
                    </Box>
                    
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
                        Technologies:
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {exp.technologies.map((tech, idx) => (
                          <Chip
                            key={idx}
                            label={tech}
                            color="secondary"
                            size="small"
                            sx={{ backgroundColor: '#64748b', color: 'white' }}
                          />
                        ))}
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;