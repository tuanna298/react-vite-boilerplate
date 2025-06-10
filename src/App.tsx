import { Suspense } from 'react'
import { Route, Routes } from 'react-router'

import AppLoading from '@/components/custom/app-loading'
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
            <Suspense fallback={<AppLoading />}>
              <Home />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  )
}

export default App
