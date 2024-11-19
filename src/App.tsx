// src/App.tsx
import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './App/Redux/store';
import Home from './App/Pages/Home'; // Import the Home component
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import ViewPlayerView from './App/Pages/ViewPlayerView';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#01172d',
    },
    secondary: {
      main: '#11cb5f',
    },
  },
});

export default function Main() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/player/:videoId">
              <ViewPlayerView />
            </Route>
            <Route path="/">
              <Home /> {/* Render the Home component here */}
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}