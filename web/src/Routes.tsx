import { Routes, Route } from 'react-router-dom'
import { MainLayout } from './layout/mainLayout'
import { Home } from './pages/Home'
import { Login } from './pages/Login'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  )
}
