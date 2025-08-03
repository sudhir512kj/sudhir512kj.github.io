import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button, Chip, Avatar } from '@mui/material';
import { Cloud, Build, SmartToy, ShoppingCart, Launch, Star } from '@mui/icons-material';

const Projects = () => {
  const projects = [
    {
      title: 'BasBeta E-commerce Platform',
      subtitle: 'Full-Stack Application',
      description: 'Complete e-commerce solution for custom merchandise with integrated payment processing, inventory management, and order tracking.',
      technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'Bootstrap'],
      metrics: ['Live Production', 'Payment Gateway', 'Inventory System'],
      icon: <ShoppingCart />,
      link: 'http://www.basbeta.co.in',
      linkText: 'Visit Live Site',
      featured: false,
    },
  ];

  const getIcon = (iconComponent) => {
    const iconMap = {
      Cloud: <Cloud />,
      Build: <Build />,
      SmartToy: <SmartToy />,
      ShoppingCart: <ShoppingCart />,
    };
    return iconComponent;
  };

  return (
    <Box id="projects" sx={{ py: 8, backgroundColor: '#f8fafc' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
            Projects
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
            Here are some of the projects I've worked on
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} lg={6} key={index}>
              <Card
                sx={{
                  height: '100%',
                  boxShadow: 3,
                  transition: 'all 0.3s ease',
                  border: project.featured ? '2px solid #3b82f6' : '1px solid #f1f5f9',
                  background: project.featured
                    ? 'linear-gradient(135deg, #fefefe 0%, #f8fafc 100%)'
                    : 'white',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6,
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar
                        sx={{
                          background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
                          mr: 2,
                          width: 50,
                          height: 50,
                        }}
                      >
                        {project.icon}
                      </Avatar>
                      <Box>
                        <Typography variant="h5" sx={{ fontWeight: 600, mb: 0.5 }}>
                          {project.title}
                        </Typography>
                        <Typography color="text.secondary" variant="body2">
                          {project.subtitle}
                        </Typography>
                      </Box>
                    </Box>
                    {project.featured && (
                      <Chip
                        icon={<Star />}
                        label="Featured"
                        sx={{ backgroundColor: '#fbbf24', color: 'black' }}
                      />
                    )}
                  </Box>

                  <Typography color="text.secondary" sx={{ mb: 2 }}>
                    {project.description}
                  </Typography>

                  {/* Metrics */}
                  <Box sx={{ mb: 2, minHeight: 40 }}>
                    {project.metrics.map((metric, idx) => (
                      <Chip
                        key={idx}
                        label={metric}
                        color="success"
                        size="small"
                        sx={{ mr: 1, mb: 1 }}
                      />
                    ))}
                  </Box>

                  {/* Technologies */}
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500, mb: 1 }}>
                      Technologies:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {project.technologies.map((tech, idx) => (
                        <Chip
                          key={idx}
                          label={tech}
                          color="primary"
                          size="small"
                        />
                      ))}
                    </Box>
                  </Box>

                  <Button
                    variant={project.featured ? 'contained' : 'outlined'}
                    fullWidth
                    startIcon={<Launch />}
                    href={project.link}
                    target="_blank"
                    sx={{ textTransform: 'uppercase', letterSpacing: 0.5 }}
                  >
                    {project.linkText}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;