import { TrendingUp, UserPlus } from 'lucide-react';
import { Button } from './ui/button';

const trendingTopics = [
  { category: 'Tendencia en Colombia', topic: 'Spade', posts: '100K' },
  { category: 'Tendencia en Colombia', topic: '#FelizSabado', posts: '9,206' },
  { category: 'Tendencia en Colombia', topic: 'Yeison Suárez', posts: '30K' },
  { category: 'Boxeo masculino · Tendencia', topic: 'Pacquiao', posts: '30K' },
];

const suggestedFollows = [
  { name: 'Hamad', username: '@hamad', verified: true },
  { name: 'Tech News', username: '@technews', verified: false },
  { name: 'Design Tips', username: '@designtips', verified: false },
];

export function RightSidebar() {
  return (
    <div className="w-80 px-6 py-4 hidden xl:block">
      <div className="space-y-6">
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar"
            className="w-full bg-muted rounded-full py-3 px-4 pl-12 text-foreground placeholder-x-text-secondary border-none outline-none focus:ring-2 focus:ring-primary"
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <TrendingUp className="w-5 h-5 text-x-text-secondary" />
          </div>
        </div>

        {/* Premium Subscription */}
        <div className="bg-muted rounded-2xl p-4">
          <h2 className="text-xl font-bold mb-2">Suscríbete a Premium</h2>
          <p className="text-sm text-x-text-secondary mb-4">
            Suscríbete para desbloquear nuevas funciones y, si eres elegible,
            recibe una parte de los ingresos de los anuncios.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
            Suscribirse
          </Button>
        </div>

        {/* What's happening */}
        <div className="bg-muted rounded-2xl p-4">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <TrendingUp className="w-5 h-5 mr-2" />
            Qué está pasando
          </h2>
          <div className="space-y-3">
            {trendingTopics.map((topic, index) => (
              <div key={index} className="cursor-pointer hover:bg-accent/50 p-2 rounded-lg transition-colors">
                <p className="text-xs text-x-text-secondary">{topic.category}</p>
                <p className="font-semibold">{topic.topic}</p>
                <p className="text-xs text-x-text-secondary">{topic.posts} posts</p>
              </div>
            ))}
            <button className="text-primary text-sm hover:underline">
              Mostrar más
            </button>
          </div>
        </div>

        {/* Who to follow */}
        <div className="bg-muted rounded-2xl p-4">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <UserPlus className="w-5 h-5 mr-2" />
            A quién seguir
          </h2>
          <div className="space-y-3">
            {suggestedFollows.map((user, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold">{user.name[0]}</span>
                  </div>
                  <div>
                    <div className="flex items-center space-x-1">
                      <p className="font-semibold text-sm">{user.name}</p>
                      {user.verified && (
                        <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                          <span className="text-xs text-primary-foreground">✓</span>
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-x-text-secondary">{user.username}</p>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="rounded-full border-x-border hover:bg-accent"
                >
                  Seguir
                </Button>
              </div>
            ))}
            <button className="text-primary text-sm hover:underline">
              Mostrar más
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}