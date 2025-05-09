import { Suspense } from 'react'
import { Route, Routes } from 'react-router'

import AppLayout from '@/layouts/app-layout'
import { lazyWithProgress } from '@/lib/utils'

const Home = lazyWithProgress(() => import('@/pages/home'))

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route
          index
          element={
            <Suspense>
              <Home />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  )
}

export default App
