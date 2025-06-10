import { Outlet } from 'react-router'

const AppLayout = () => {
  return (
    <main>
      {/* Breakpoint Indicator - Only visible in development */}
      {/* {process.env.NODE_ENV === 'development' && <TailwindBreakpoint />} */}
      <Outlet />
    </main>
  )
}

export default AppLayout
