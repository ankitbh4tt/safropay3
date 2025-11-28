import React, { useState } from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ViewState } from '../App';

interface HeaderProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNav = (view: ViewState) => {
    setIsMenuOpen(false);
    onNavigate(view);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group" 
            onClick={() => handleNav('home')}
          >
            <div className="bg-emerald-600 p-1.5 rounded-lg group-hover:bg-emerald-700 transition-colors">
              <ShieldCheck className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">
              Safro<span className="text-emerald-600">Pay</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <button onClick={() => handleNav('home')} className={`text-sm font-medium transition-colors ${currentView === 'home' ? 'text-emerald-600' : 'text-slate-600 hover:text-emerald-600'}`}>Home</button>
            <button onClick={() => handleNav('how-it-works')} className={`text-sm font-medium transition-colors ${currentView === 'how-it-works' ? 'text-emerald-600' : 'text-slate-600 hover:text-emerald-600'}`}>How It Works</button>
            <button onClick={() => handleNav('stories')} className={`text-sm font-medium transition-colors ${currentView === 'stories' ? 'text-emerald-600' : 'text-slate-600 hover:text-emerald-600'}`}>Stories</button>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <button 
              onClick={() => handleNav('join')}
              className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Join the Insider List
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-slate-900 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-4 flex flex-col">
              <button onClick={() => handleNav('home')} className="text-left text-slate-700 font-medium py-3 border-b border-slate-50">Home</button>
              <button onClick={() => handleNav('how-it-works')} className="text-left text-slate-700 font-medium py-3 border-b border-slate-50">How It Works</button>
              <button onClick={() => handleNav('stories')} className="text-left text-slate-700 font-medium py-3 border-b border-slate-50">Real Stories</button>
              <button 
                onClick={() => handleNav('join')}
                className="w-full bg-emerald-600 text-white py-3.5 rounded-xl font-bold text-center mt-2 shadow-md active:scale-95 transition-transform"
              >
                Join the Insider List
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
