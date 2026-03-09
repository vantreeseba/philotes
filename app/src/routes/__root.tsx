import { createRootRoute, Link, Outlet } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto flex h-14 items-center px-4">
          <Link to="/" className="font-semibold text-lg text-primary hover:opacity-75 transition-opacity">
            Philotes
          </Link>
          <nav className="ml-6 flex gap-4">
            <Link to="/persons" className="text-muted-foreground text-sm hover:text-foreground">
              Persons
            </Link>
            <Link to="/tags" className="text-muted-foreground text-sm hover:text-foreground">
              Tags
            </Link>
            <Link to="/network" className="text-muted-foreground text-sm hover:text-foreground">
              Network
            </Link>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-6">
        <Outlet />
      </main>
    </div>
  ),
});
