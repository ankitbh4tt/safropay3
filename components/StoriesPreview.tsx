import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, ArrowRight } from 'lucide-react';
import { ViewState } from '../App';

interface StoriesProps {
  onNavigate: (view: ViewState) => void;
}

export const StoriesPreview: React.FC<StoriesProps> = ({ onNavigate }) => {
  const stories = [
    { title: "From OLX risk to protected car sale", name: "Rahul S.", role: "Seller" },
    { title: "No more losing token money in property", name: "Priya M.", role: "Buyer" },
    { title: "Freelance project without payment stress", name: "Arjun K.", role: "Developer" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">See How SafroPay Solves Real Problems</h2>
            <p className="text-slate-600">Real people, real savings, zero fraud.</p>
          </div>
          <button 
            onClick={() => onNavigate('stories')}
            className="text-emerald-600 font-bold hover:text-emerald-700 flex items-center gap-2"
          >
            Watch all stories <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => onNavigate('stories')}
              className="group cursor-pointer"
            >
              <div className="bg-slate-100 rounded-2xl aspect-video mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/20 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle size={48} className="text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all shadow-lg rounded-full bg-slate-900/50" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-emerald-600 transition-colors">{story.title}</h3>
              <p className="text-sm text-slate-500">{story.name} · {story.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};