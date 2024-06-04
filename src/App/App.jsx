import { useState } from 'react'
import './App.css'
import { MantineProvider } from '@mantine/core'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import store from '../redux/store'
import Router from '../routes/Router'

function App() {
  const client = new QueryClient({defaultOptions: {queries: {refetchOnWindowFocus: true,  cacheTime:6000, }, mutations:{}}})

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
