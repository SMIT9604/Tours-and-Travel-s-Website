import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="min-h-dvh flex flex-col" style={{ backgroundColor: 'var(--surface)', color: 'var(--on-surface)', transition: 'background-color .3s, color .3s' }}>
      <Outlet />
    </div>
  )
}

export default App
