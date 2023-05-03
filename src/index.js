import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ApolloProvider } from "@apollo/client";
import client from './graphql/ApolloClient';
import { ThemeProvider } from '@mui/material';
import theme from './mui/theme';
import "./styles/Index.css";
import "./styles/FontFace.css";
import { BrowserRouter } from 'react-router-dom';
import { CacheProvider } from "@emotion/react";
import cacheRtl from './mui/cacheRtl';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CacheProvider value={cacheRtl}>
        <ApolloProvider client={client}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </ApolloProvider>
      </CacheProvider>
    </BrowserRouter>
  </React.StrictMode>
);
