import React from 'react';
import { Grid, Typography, Button, Paper, Container } from '@mui/material';
import MidColumnComponent from './Components/midColumns';
import { HEALTH, EDUCATION, SUPPORT } from './constants';
import { makeStyles } from '@mui/styles';
import TopColumn from './Components/topColumn';
import BottomColumn from './Components/bottomColumn'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import YoutubeVideo from './Components/youtubeVideo';
import Footer from '../Footer/index'

const theme = createTheme();
const useStyles = makeStyles((theme) => ({
  outerContainer: {
    padding: theme.spacing(5), // Add your desired padding here
  },
  innerContainer: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Component = () => {
  const handleChatClick = () => {
    // Implement your chat functionality here
    console.log('Chat clicked!');
  };

  const classes = useStyles(theme);
  return (
    <Grid container spacing={2}>
      <Container>
        <YoutubeVideo/>
        <TopColumn />
        <div>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <MidColumnComponent title="HEALTH" text={HEALTH} />
            </Grid>
            <Grid item xs={4}>
              <MidColumnComponent title="EDUCATION" text={EDUCATION} />
            </Grid>
            <Grid item xs={4}>
              <MidColumnComponent title="SUPPORT" text={SUPPORT} />
            </Grid>
          </Grid>
        </div>
        <BottomColumn/>
        <Footer/>
      </Container>
    </Grid>
  );
};

function Home(props) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...props} />
    </ThemeProvider>
  );
}

export default Home;
