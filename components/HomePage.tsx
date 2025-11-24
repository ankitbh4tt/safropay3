import React from 'react';
import { HeroSection } from './HeroSection';
import { ProblemSection } from './ProblemSection';
import { CategoriesSection } from './CategoriesSection';
import { HowItWorksSection } from './HowItWorksSection';
import { HighlightedDeals } from './HighlightedDeals';
import { SecuritySection } from './SecuritySection';
import { MobileOptimizedSection } from './MobileOptimizedSection';
import { StoriesPreview } from './StoriesPreview';
import { FAQSection } from './FAQSection';
import { ViewState } from '../App';

interface HomePageProps {
  onNavigate: (view: ViewState) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const handleJoin = () => onNavigate('join');

  return (
    <>
      <HeroSection onCtaClick={handleJoin} />
      <ProblemSection />
      <CategoriesSection onCtaClick={handleJoin} />
      <HowItWorksSection onNavigate={onNavigate} />
      <HighlightedDeals onCtaClick={handleJoin} />
      <SecuritySection />
      <MobileOptimizedSection onCtaClick={handleJoin} />
      <StoriesPreview onNavigate={onNavigate} />
      <FAQSection />
      
      {/* Final CTA Strip */}
      <section className="py-20 bg-slate-900 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to make your next transaction safe?</h2>
          <button 
            onClick={handleJoin}
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-10 rounded-xl text-lg shadow-lg hover:shadow-emerald-500/25 transition-all transform hover:-translate-y-1"
          >
            Start Your Deal
          </button>
        </div>
      </section>
    </>
  );
};

export default HomePage;