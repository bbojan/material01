import {
  Box,
  Button,
  Container,
  CssBaseline,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import AlarmOffIcon from "@material-ui/icons/AlarmOff";
import React from "react";
import "./App.css";
import theme from "./theme";

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1">
            HELLO WORLD
          </Typography>
          <Button onClick={() => {}}>CLICK 1</Button>
          <Button variant="contained">Default</Button>
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" disabled>
            Disabled
          </Button>
          <Button variant="outlined" color="primary" href="#contained-buttons">
            <AlarmOffIcon />
          </Button>

          {/* <ProTip /> */}
          {/* <Copyright /> */}
        </Box>
      </Container>
    </div>
  );
}

export default function MaterialApp() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
}
