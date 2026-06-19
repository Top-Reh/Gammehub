import './App.css'
import Menu from './menu'
import Live from './Live'
import Upcoming from './Upcoming'
import UpcomingLive from './UpcomingLive'
import Post from './post'
import Home from './Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Livepage from './Livepage'
import Schedule from './Schedule'
import Users from './Users'

function App() {

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Menu />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/live" element={<Livepage />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/users" element={<Users />} />
            <Route path="*" element={<Home />} /> {/* 404 Page */}
          </Routes>
        </main>
        <footer className='w-full h-14 bg-gray-900 flex items-center justify-center'>
          <p className='text-white'>© 2026 Top Reh. All rights reserved.</p>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
