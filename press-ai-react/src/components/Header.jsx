import { FiMenu, FiBell, FiUser } from 'react-icons/fi'

export default function Header({ onToggleSidebar }) {
  return (
    <header className="bg-white shadow-sm h-16 fixed top-0 left-0 right-0 z-10">
      <div className="px-4 h-full flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={onToggleSidebar}
            className="p-2 hover:bg-gray-100 rounded-lg lg:hidden"
          >
            <FiMenu className="w-5 h-5" />
          </button>
          <span className="text-xl font-semibold text-primary-600">Press AI - Seu Assistente de Conteúdo</span>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <FiBell className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <FiUser className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  )
} 