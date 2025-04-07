export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-semibold text-gray-900">
          Bem-vindo ao Press AI
        </h1>
        <p className="mt-2 text-gray-600">
          Seu assistente inteligente para criação de conteúdo
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900">Novo Artigo</h2>
          <p className="mt-2 text-gray-600">Crie um novo artigo com IA</p>
          <button className="mt-4 bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700">
            Começar
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900">Meus Artigos</h2>
          <p className="mt-2 text-gray-600">Gerencie seus artigos</p>
          <button className="mt-4 bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200">
            Ver todos
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900">Configurações</h2>
          <p className="mt-2 text-gray-600">Ajuste suas preferências</p>
          <button className="mt-4 bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200">
            Configurar
          </button>
        </div>
      </div>
    </div>
  )
} 