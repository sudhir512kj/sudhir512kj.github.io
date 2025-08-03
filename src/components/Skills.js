import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, LinearProgress, Avatar, Rating, Chip } from '@mui/material';
import { Code, Cloud, Storage, Computer } from '@mui/icons-material';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend Technologies',
      icon: <Computer />,
      skills: [
        { name: 'Java', level: 95 },
        { name: 'Spring Boot', level: 90 },
        { name: 'Microservices', level: 85 },
        { name: 'RESTful APIs', level: 92 },
      ],
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud />,
      skills: [
        { name: 'AWS', level: 85 },
        { name: 'Docker', level: 88 },
        { name: 'Kubernetes', level: 80 },
        { name: 'Jenkins', level: 75 },
      ],
    },
    {
      title: 'Databases',
      icon: <Storage />,
      skills: [
        { name: 'PostgreSQL', level: 88 },
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Redis', level: 75 },
      ],
    },
    {
      title: 'Programming Languages',
      icon: <Code />,
      skills: [
        { name: 'Java', level: 95 },
        { name: 'Golang', level: 82 },
        { name: 'Python', level: 78 },
        { name: 'JavaScript', level: 70 },
      ],
    },
  ];

  return (
    <Box id="skills" sx={{ py: 8, backgroundColor: '#f8fafc' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
            Technical Skills
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
          <Typography variant="h6" color="text.secondary">
            My technical expertise spans across various technologies and tools
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {skillCategories.map((category, index) => (
            <Grid item xs={12} lg={6} key={index}>
              <Card sx={{ height: '100%', boxShadow: 3, transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-4px)', boxShadow: 6 } }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Avatar
                      sx={{
                        background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
                        mr: 2,
                        width: 50,
                        height: 50,
                      }}
                    >
                      {category.icon}
                    </Avatar>
                    <Typography variant="h5" sx={{ fontWeight: 600 }}>
                      {category.title}
                    </Typography>
                  </Box>

                  {category.skills.map((skill, idx) => (
                    <Box key={idx} sx={{ mb: 3 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                          {skill.name}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Rating
                            value={Math.floor(skill.level / 20)}
                            readOnly
                            size="small"
                            sx={{ fontSize: '0.8rem' }}
                          />
                          <Chip
                            label={`${skill.level}%`}
                            color="primary"
                            size="small"
                          />
                        </Box>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={skill.level}
                        sx={{
                          height: 10,
                          borderRadius: 5,
                          backgroundColor: '#f1f5f9',
                          '& .MuiLinearProgress-bar': {
                            background: 'linear-gradient(90deg, #2563eb, #3b82f6)',
                            borderRadius: 5,
                          },
                        }}
                      />
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;