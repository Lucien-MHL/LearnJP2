import { RouterProvider } from 'react-router-dom'
import { router } from './routes/root.jsx'
import { useEffect } from 'react'
import { useDevice } from './hooks'

function App() {
  const device = useDevice()
  useEffect(() => {
    if (!device.get()) {
      device.set()
    }
  })
  return <RouterProvider router={router} />
}

export default App
