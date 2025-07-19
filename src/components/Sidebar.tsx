import { Home, Search, Bell, Mail, Bookmark, User, MoreHorizontal } from 'lucide-react';
import { Button } from './ui/button';

const navigation = [
  { name: 'Inicio', icon: Home, current: true },
  { name: 'Explorar', icon: Search, current: false },
  { name: 'Notificaciones', icon: Bell, current: false },
  { name: 'Mensajes', icon: Mail, current: false },
  { name: 'Guardados', icon: Bookmark, current: false },
  { name: 'Perfil', icon: User, current: false },
  { name: 'Más', icon: MoreHorizontal, current: false },
];

export function Sidebar() {
  return (
    <div className="w-64 px-6 py-4 hidden lg:block">
      <div className="space-y-1">
        {/* X Logo */}
        <div className="px-3 py-3 mb-8">
          <div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center">
            <span className="text-background font-bold text-xl">X</span>
          </div>
        </div>

        {/* Navigation */}
        {navigation.map((item) => {
          const IconComponent = item.icon;
          return (
            <button
              key={item.name}
              className={`w-full flex items-center space-x-4 px-3 py-3 rounded-full transition-colors ${
                item.current
                  ? 'bg-accent text-accent-foreground'
                  : 'hover:bg-x-hover text-foreground'
              }`}
            >
              <IconComponent className="w-6 h-6" />
              <span className="text-xl font-normal">{item.name}</span>
            </button>
          );
        })}
      </div>

      {/* Post Button */}
      <div className="mt-8">
        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-3 text-lg font-bold">
          Postear
        </Button>
      </div>

      {/* User Profile */}
      <div className="absolute bottom-6 w-52">
        <div className="flex items-center space-x-3 p-3 rounded-full hover:bg-x-hover transition-colors cursor-pointer">
          <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
            <User className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold">Usuario</p>
            <p className="text-xs text-x-text-secondary">@usuario</p>
          </div>
          <MoreHorizontal className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}