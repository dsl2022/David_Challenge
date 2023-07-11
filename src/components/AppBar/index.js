import React from 'react';
import { Link } from 'react-router-dom';
import {
  // AppBar,
  Toolbar,
  Typography,
  Link as MuiLink,
} from '@mui/material';

function AppBar() {
  return (
    <AppBar color="transparent" position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {/* <MuiLink component={Link} to="/" color="inherit" underline="none">
            Liberia Medical Mission
          </MuiLink> */}
        </Typography>
        {/* <nav>
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
        </nav> */}
      </Toolbar>
    </AppBar>
  );
}

export default AppBar;
