import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Strategy } from './components/Strategy';
import { clsx } from 'clsx';

function App() {
  const [currentView, setCurrentView] = useState<'dashboard' | 'strategy'>('dashboard');

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-10">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-8 items-center justify-center overflow-hidden rounded shadow-sm">
              <img src="/book-cover.jpg" alt="The Little Book That Beats the Market" className="h-full w-full object-cover" />
            </div>
            <h1 className="text-lg font-semibold tracking-tight">Magic Formula Tracker</h1>
          </div>
          <nav className="flex gap-1 bg-gray-100/50 p-1 rounded-lg">
            <button
              onClick={() => setCurrentView('dashboard')}
              className={clsx(
                "px-3 py-1.5 text-sm font-medium rounded-md transition-all",
                currentView === 'dashboard'
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-900"
              )}
            >
              Dashboard
            </button>
            <button
              onClick={() => setCurrentView('strategy')}
              className={clsx(
                "px-3 py-1.5 text-sm font-medium rounded-md transition-all",
                currentView === 'strategy'
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-900"
              )}
            >
              Strategy
            </button>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {currentView === 'dashboard' ? <Dashboard /> : <Strategy />}
      </main>

      <footer className="border-t border-gray-200 bg-white py-12">
        <div className="mx-auto max-w-5xl px-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Magic Formula Tracker. Data provided by user.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
