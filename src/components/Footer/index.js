import React from 'react';
import { Container, Box, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#f5f5f5', py: 3 }}>
      <Container maxWidth="md">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="body2" color="textSecondary">
              &copy; 2023 Your Organization. All rights reserved.
            </Typography>
          </Box>
          <Box>
            <IconButton
              href="https://www.facebook.com/yourorganization"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              href="https://twitter.com/yourorganization"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              href="https://www.instagram.com/yourorganization"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
