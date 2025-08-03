import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Chip, Avatar } from '@mui/material';
import { Person, School, CalendarToday, Business, ThumbUp, Work } from '@mui/icons-material';

const About = () => {
  const stats = [
    { number: '4+', label: 'Years Experience', icon: <CalendarToday /> },
    { number: '50+', label: 'Projects Completed', icon: <Work /> },
    { number: '3', label: 'Companies', icon: <Business /> },
    { number: '100%', label: 'Client Satisfaction', icon: <ThumbUp /> },
  ];

  return (
    <Box id="about" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
            About Me
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
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            Passionate Senior Java Backend Engineer with 4+ years of experience architecting enterprise-grade applications and leading development teams in fast-paced environments.
          </Typography>
        </Box>

        {/* Stats Section */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar
                  sx={{
                    width: 70,
                    height: 70,
                    background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
                    mx: 'auto',
                    mb: 2,
                    fontSize: '1.5rem',
                  }}
                >
                  {stat.icon}
                </Avatar>
                <Typography variant="h3" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
                  {stat.number}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ textTransform: 'uppercase', letterSpacing: 0.5 }}>
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={12} lg={6}>
            <Card sx={{ height: '100%', boxShadow: 3 }}>
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Avatar
                    sx={{
                      background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
                      mr: 2,
                    }}
                  >
                    <Person />
                  </Avatar>
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    Professional Summary
                  </Typography>
                </Box>
                <Typography color="text.secondary" sx={{ mb: 3 }}>
                  Senior Java Backend Engineer specializing in microservices architecture, cloud-native applications, and DevOps practices. Proven track record of delivering scalable solutions that handle millions of requests while maintaining high performance and reliability.
                </Typography>
                <Box>
                  <Chip label="Team Leadership" color="primary" sx={{ mr: 1, mb: 1 }} />
                  <Chip label="System Architecture" color="success" sx={{ mr: 1, mb: 1 }} />
                  <Chip label="Performance Optimization" color="info" sx={{ mr: 1, mb: 1 }} />
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} lg={6}>
            <Card sx={{ height: '100%', boxShadow: 3 }}>
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Avatar
                    sx={{
                      background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
                      mr: 2,
                    }}
                  >
                    <School />
                  </Avatar>
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    Education & Certifications
                  </Typography>
                </Box>
                <Box
                  sx={{
                    p: 2,
                    backgroundColor: '#f8fafc',
                    borderRadius: 2,
                    borderLeft: '4px solid #3b82f6',
                    mb: 3,
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    B.Tech in Computer Science
                  </Typography>
                  <Typography color="primary" sx={{ fontWeight: 500, mb: 1 }}>
                    National Institute of Technology, Kurukshetra
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    2014 - 2018 • CGPA: 8.2/10
                  </Typography>
                </Box>
                <Box>
                  <Chip label="AWS Certified" sx={{ mr: 1, mb: 1, backgroundColor: '#fbbf24', color: 'black' }} />
                  <Chip label="Spring Certified" color="secondary" sx={{ mr: 1, mb: 1 }} />
                  <Chip label="Oracle Java SE" sx={{ mr: 1, mb: 1, backgroundColor: '#374151', color: 'white' }} />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;