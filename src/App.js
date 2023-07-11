import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard'
import { Button, Container, useMediaQuery, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import Home from './components/Home';
import Donorbox from './components/Donorbox';
import AboutUs from './components/AboutUs';
import News from './components/News';
import Blogs from './components/Blogs';
import Donate from './components/Donate';
import ChatBot from './components/ChatBot';
import Login from './components/Login'
import SignupForm from './components/Signup'
import logo from './assets/images/logo.png'
import SignUpSuccess from './components/Utils/SignUpSuccess';
import ConfirmSignup from './components/Utils/ConfirmSignup';
import ProtectedRoute from './components/ProtectedRoute'
import { AuthContext } from './context/authContext';
import { AppBar, Toolbar, Typography, Link as MuiLink } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

const App = () => {
  const { user, signOut } = useContext(AuthContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const renderNavigationLinks = () => {
    if (isMobile) {
      return (
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
      );
    }

    return (
      <nav>
        <MuiLink
          component={Link}
          to="/"
          color="inherit"
          underline="none"
          sx={{ mx: 1 }}
        >
          Home
        </MuiLink>
        <MuiLink
          component={Link}
          to="/about"
          color="inherit"
          underline="none"
          sx={{ mx: 1 }}
        >
          About Us
        </MuiLink>
        <MuiLink
          component={Link}
          to="/news"
          color="inherit"
          underline="none"
          sx={{ mx: 1 }}
        >
          News
        </MuiLink>
        <MuiLink
          component={Link}
          to="/blogs"
          color="inherit"
          underline="none"
          sx={{ mx: 1 }}
        >
          Blogs
        </MuiLink>
        <MuiLink
          component={Link}
          to="/donate"
          color="inherit"
          underline="none"
          sx={{ mx: 1 }}
        >
          Donate
        </MuiLink>
        <MuiLink
          component={Link}
          to="/login"
          color="inherit"
          underline="none"
          sx={{ mx: 1 }}
        >
          Login
        </MuiLink>
        {!user ? (
          <MuiLink
            component={Link}
            to="/signup"
            color="inherit"
            underline="none"
            sx={{ mx: 1 }}
          >
            Signup
          </MuiLink>
        ) : null}
        {user ? (
          <Button onClick={signOut} sx={{ mx: 1 }}>
            Signout
          </Button>
        ) : null}
        <Donorbox/>
      </nav>
    );
  };

  return (
    <Router>
      <AppBar color="transparent" position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src={logo} alt="Icon" style={{ width: 100, height: 34 }} />
          </IconButton>
          <Typography variant={isMobile?"h7":"h6"} component="div" sx={{ flexGrow: 1 }}>
            <MuiLink component={Link} to="/" color="inherit" underline="none">
              Liberia Medical Mission
            </MuiLink>
          </Typography>
          {renderNavigationLinks()}
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
      >
        <List>
          <ListItem button component={Link} to="/" onClick={handleDrawerToggle}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/about" onClick={handleDrawerToggle}>
            <ListItemText primary="About Us" />
          </ListItem>
          <ListItem button component={Link} to="/news" onClick={handleDrawerToggle}>
            <ListItemText primary="News" />
          </ListItem>
          <ListItem button component={Link} to="/blogs" onClick={handleDrawerToggle}>
            <ListItemText primary="Blogs" />
          </ListItem>
          <ListItem button component={Link} to="/donate" onClick={handleDrawerToggle}>
            <ListItemText primary="Donate" />
          </ListItem>
          <ListItem button component={Link} to="/login" onClick={handleDrawerToggle}>
            <ListItemText primary="Login" />
          </ListItem>
          {!user && (
            <ListItem button component={Link} to="/signup" onClick={handleDrawerToggle}>
              <ListItemText primary="Signup" />
            </ListItem>
          )}
          {user && (
            <ListItem button onClick={() => { handleDrawerToggle(); signOut(); }}>
              <ListItemText primary="Signout" />
            </ListItem>
          )}          
        </List>
      </Drawer>
      <Container sx={{ mt: 6 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/news" element={<News />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/signupSuccess" element={<SignUpSuccess />} />
          <Route path="/confirmSignup" element={<ConfirmSignup />} />
          <Route path="/dashboard" element={<ProtectedRoute user={user}><Dashboard/></ProtectedRoute>} />
        </Routes>
        <ChatBot />
      </Container>
      
    </Router>
  );
};

export default App;
