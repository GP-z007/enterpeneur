import { useState } from 'react';
import { ThemeProvider } from './components/ThemeContext';
import { Navbar } from './components/Navbar';
import { Landing } from './pages/Landing';
import { Dashboard } from './pages/Dashboard';

function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'dashboard'>('landing');

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 font-sans">
        <Navbar onNavClick={setCurrentPage} />
        
        <main className="container mx-auto pb-12">
          {currentPage === 'landing' ? (
            <Landing onStart={() => setCurrentPage('dashboard')} />
          ) : (
            <Dashboard />
          )}
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
