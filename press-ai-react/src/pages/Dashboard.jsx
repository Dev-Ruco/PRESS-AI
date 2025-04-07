import { useNavigate } from 'react-router-dom'
import Card from '../components/Card'
import Button from '../components/Button'

export default function Dashboard() {
  const navigate = useNavigate()

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <h1 className="text-3xl font-bold">Bem-vindo ao Press AI</h1>
        <p className="mt-2 text-lg opacity-90">
          Seu assistente inteligente para criação de conteúdo
        </p>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card title="Novo Artigo">
          <p className="text-gray-600 mb-4">
            Crie um novo artigo com ajuda da IA
          </p>
          <Button onClick={() => navigate('/novo-artigo')}>
            Começar
          </Button>
        </Card>

        <Card title="Reformular">
          <p className="text-gray-600 mb-4">
            Melhore e adapte textos existentes
          </p>
          <Button variant="secondary" onClick={() => navigate('/reformular')}>
            Reformular
          </Button>
        </Card>

        <Card title="Transcrição">
          <p className="text-gray-600 mb-4">
            Converta áudio em texto automaticamente
          </p>
          <Button variant="secondary" onClick={() => navigate('/transcricao')}>
            Transcrever
          </Button>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Últimas Notícias">
          <p className="text-gray-600">
            Acompanhe as últimas atualizações
          </p>
        </Card>

        <Card title="Análise de Desempenho">
          <p className="text-gray-600">
            Visualize suas estatísticas
          </p>
        </Card>
      </div>
    </div>
  )
} 