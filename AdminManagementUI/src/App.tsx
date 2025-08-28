import { BrowserRouter , Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound'
import AdminManagement from './pages/AdminManagement'

function App() {
  return (
    <BrowserRouter >
    <Routes>
      <Route path="/" element={<AdminManagement />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter >
  )
}

export default App
