import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import News from './components/News';
import Blogs from './components/Blogs';
import Donate from './components/Donate';
import ChatBot from './components/ChatBot';
import Login from './components/Login'
// import AppBar from './components/AppBar';
import { AppBar, Toolbar, Typography, Link as MuiLink } from '@mui/material';
const App = () => {
  return (
    <Router>
      {/* <AppBar/> */}
      <AppBar color="transparent" position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <MuiLink component={Link} to="/" color="inherit" underline="none">
              Liberia Medical Mission
            </MuiLink>
          </Typography>
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
          </nav>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 2 }}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/news" element={<News />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
      <ChatBot />
    </Router>
  );
};

export default App;
