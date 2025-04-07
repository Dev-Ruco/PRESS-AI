import { Link, useLocation } from 'react-router-dom'
import { FiHome, FiFileText, FiRefreshCw, FiHeadphones, FiNewspaper, FiPieChart, FiLink, FiBook } from 'react-icons/fi'

const menuItems = [
  { icon: FiHome, label: 'Dashboard', path: '/' },
  { icon: FiFileText, label: 'Novo Artigo', path: '/novo-artigo' },
  { icon: FiRefreshCw, label: 'Reformular', path: '/reformular' },
  { icon: FiHeadphones, label: 'Transcrição', path: '/transcricao' },
  { icon: FiNewspaper, label: 'Notícias', path: '/noticias' },
  { icon: FiPieChart, label: 'Análise', path: '/analise' },
  { icon: FiLink, label: 'Integrações', path: '/integracoes' },
  { icon: FiBook, label: 'Normas', path: '/normas' }
]

export default function Sidebar({ isOpen }) {
  const location = useLocation()
  
  return (
    <aside className={`
      bg-white shadow-sm fixed left-0 top-16 bottom-0 z-20 w-64 transition-transform
      ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
    `}>
      <nav className="p-4 space-y-1">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`
                flex items-center gap-3 px-4 py-2 rounded-lg transition-colors
                ${isActive 
                  ? 'bg-primary-50 text-primary-600' 
                  : 'text-gray-700 hover:bg-gray-100'
                }
              `}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
} 