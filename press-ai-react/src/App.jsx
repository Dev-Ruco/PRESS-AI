import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <Sidebar isOpen={isSidebarOpen} />
        
        <main className="pt-16 lg:pl-64 p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* Outras rotas serão adicionadas aqui */}
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
