import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import { MantineProvider } from '@mantine/core'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import store from '../redux/store'
import Router from '../routes/Router'

function App() {
  const client = new QueryClient()

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
  )
}

export default App
