import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Router from '../routes/Router'
import { MantineProvider } from '@mantine/core'
import { QueryClient, QueryClientProvider } from 'react-query'

function App() {
  const client = new QueryClient()


  return (
    <>
      <QueryClientProvider client={client}>
        <MantineProvider>
          <Router/>
        </MantineProvider>           
      </QueryClientProvider>

    </>
  )
}

export default App
