import { Sidebar } from './Sidebar';
import { RightSidebar } from './RightSidebar';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto flex">
        <Sidebar />
        <main className="flex-1 min-h-screen border-x border-x-border">
          {children}
        </main>
        <RightSidebar />
      </div>
    </div>
  );
}