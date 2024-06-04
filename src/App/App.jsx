<<<<<<< HEAD
import { useState } from 'react'
import './App.css'
import { MantineProvider } from '@mantine/core'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import store from '../redux/store'
import Router from '../routes/Router'
=======
import { useEffect, useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Router from "../routes/Router";
import { MantineProvider } from "@mantine/core";
import handleTheme from "../core/services/handleTheme";
import './App.css';

import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import store from '../redux/store';
import '@mantine/core/styles.css';

>>>>>>> 7911b6104fc1a49e577937a10b9261d45016229c

function App() {
  const client = new QueryClient({defaultOptions: {queries: {refetchOnWindowFocus: true,  cacheTime:6000, }, mutations:{}}})


  useEffect(() => {
    handleTheme();
  }, []);
  return (
    <>

    <Provider store={store}>
        <QueryClientProvider client={client}>
          <MantineProvider>
            <Router />
          </MantineProvider>           
        </QueryClientProvider>
    </Provider>


    </>
  );
}

export default App;
