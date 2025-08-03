import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { Menu as MenuIcon, GetApp } from '@mui/icons-material';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const menuItems = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250 }}>
      <List>
        {menuItems.map((item) => (
          <ListItem button key={item} component="a" href={`#${item.toLowerCase()}`}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
        <ListItem button component="a" href="/SudhirMeena_JavaBackend_Resume.pdf" target="_blank">
          <ListItemText primary="Resume" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: 'rgba(30, 41, 59, 0.95)', backdropFilter: 'blur(10px)' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
            SUDHIR MEENA
          </Typography>
          
          {isMobile ? (
            <IconButton color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {menuItems.map((item) => (
                <Button
                  key={item}
                  color="inherit"
                  href={`#${item.toLowerCase()}`}
                  sx={{ textTransform: 'none' }}
                >
                  {item}
                </Button>
              ))}
              <Button
                variant="contained"
                startIcon={<GetApp />}
                href="/SudhirMeena_JavaBackend_Resume.pdf"
                target="_blank"
                sx={{ ml: 2 }}
              >
                Resume
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;