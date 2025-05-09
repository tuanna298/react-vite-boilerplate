import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { Toaster } from 'sonner'

import App from '@/App.tsx'
import { queryClientConfig } from '@/configs/query-client'
import { ThemeProvider } from '@/context/theme-provider'
import '@/index.css'
import 'nprogress/nprogress.css'

const queryClient = new QueryClient(queryClientConfig)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="theme">
        <QueryClientProvider client={queryClient}>
          <App />
          <Toaster />
        </QueryClientProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
)
