import React, { useState, useEffect, Suspense } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Lazy load pages for performance and code splitting
const HomePage = React.lazy(() => import('./components/HomePage'));
const JoinPage = React.lazy(() => import('./components/JoinPage'));
const HowItWorksPage = React.lazy(() => import('./components/HowItWorksPage'));
const StoriesPage = React.lazy(() => import('./components/StoriesPage'));

export type ViewState = 'home' | 'join' | 'how-it-works' | 'stories';

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50">
    <div className="w-12 h-12 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const navigateTo = (view: ViewState) => setCurrentView(view);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans antialiased selection:bg-emerald-100 selection:text-emerald-900">
      <Header 
        currentView={currentView}
        onNavigate={navigateTo}
      />

      <main className="flex-grow">
        <Suspense fallback={<LoadingFallback />}>
          {currentView === 'home' && <HomePage onNavigate={navigateTo} />}
          {currentView === 'join' && <JoinPage onBack={() => navigateTo('home')} />}
          {currentView === 'how-it-works' && <HowItWorksPage onNavigate={navigateTo} />}
          {currentView === 'stories' && <StoriesPage onNavigate={navigateTo} />}
        </Suspense>
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
}