import { Button } from '@/components/ui/button'
import useStore from '@/hooks/useStore'

function Home() {
  const { count, inc } = useStore()

  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <span>{count}</span>
      <Button onClick={inc}>Click me</Button>
    </div>
  )
}

export default Home
