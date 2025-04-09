import { Outlet } from 'react-router-dom';
import { Header } from './header';
import { Sidebar } from './sidebar';

export function MainLayout() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header />
      <main className="pl-[240px] pt-16">
        <div className="container py-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}