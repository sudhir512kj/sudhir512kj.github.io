import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, TextField, Button, Avatar, Alert, CircularProgress } from '@mui/material';
import { Email, GitHub, LinkedIn, Twitter, Send } from '@mui/icons-material';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setAlert({ show: true, type: 'error', message: 'Please fill in all required fields' });
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || 'New Contact from Portfolio',
          message: formData.message,
          reply_to: formData.email,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      setAlert({ show: true, type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setAlert({ show: true, type: 'error', message: 'Failed to send message. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Email />,
      title: 'Email',
      value: 'sudhirmeena230995@gmail.com',
      link: 'mailto:sureshmeena512@gmail.com',
    },
    {
      icon: <GitHub />,
      title: 'GitHub',
      value: 'github.com/sudhir512kj',
      link: 'https://github.com/sudhir512kj',
    },
    {
      icon: <LinkedIn />,
      title: 'LinkedIn',
      value: 'https://www.linkedin.com/in/sudhir-meena-b29982b7/',
      link: '#',
    },
    {
      icon: <Twitter />,
      title: 'Twitter',
      value: 'twitter.com/sudhir5125',
      link: 'https://twitter.com/sudhir5125',
    },
  ];

  return (
    <Box id="contact" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
            Get In Touch
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
            Feel free to reach out for collaborations or just a friendly chat
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Card sx={{ height: '100%', boxShadow: 3 }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
                  Contact Information
                </Typography>

                {contactInfo.map((info, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Avatar
                      sx={{
                        background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
                        width: 50,
                        height: 50,
                        mr: 2,
                      }}
                    >
                      {info.icon}
                    </Avatar>
                    <Box>
                      <Typography variant="h6" sx={{ mb: 0.5 }}>
                        {info.title}
                      </Typography>
                      <Typography
                        component="a"
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: 'text.secondary',
                          textDecoration: 'none',
                          '&:hover': { color: 'primary.main' },
                        }}
                      >
                        {info.value}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={7}>
            <Card sx={{ boxShadow: 3 }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
                  Send Me a Message
                </Typography>

                {alert.show && (
                  <Alert
                    severity={alert.type}
                    sx={{ mb: 3 }}
                    onClose={() => setAlert({ show: false, type: '', message: '' })}
                  >
                    {alert.message}
                  </Alert>
                )}

                <Box component="form" onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        multiline
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        disabled={loading}
                        startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <Send />}
                        sx={{ textTransform: 'uppercase', letterSpacing: 0.5 }}
                      >
                        {loading ? 'Sending...' : 'Send Message'}
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;