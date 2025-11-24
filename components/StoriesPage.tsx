import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Lock, ArrowLeft } from 'lucide-react';
import { ViewState } from '../App';

interface PageProps {
  onNavigate: (view: ViewState) => void;
}

const stories = [
  {
    title: "From risky OLX deal to protected car sale",
    desc: "Rahul nearly lost 50k in advance to a scammer. See how SafroPay saved his next deal.",
    tag: "Vehicle"
  },
  {
    title: "No token loss during property negotiation",
    desc: "Priya secured her dream flat in Noida without risking her booking amount.",
    tag: "Real Estate"
  },
  {
    title: "Secure freelance project payment",
    desc: "Arjun delivered a website and got paid instantly upon approval. No follow-ups.",
    tag: "Freelancing"
  },
  {
    title: "Safe domain transfer for startup",
    desc: "TechCorp acquired a premium .com domain safely using our escrow.",
    tag: "Business"
  }
];

const StoriesPage: React.FC<PageProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <button onClick={() => onNavigate('home')} className="flex items-center text-slate-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} className="mr-2" /> Back Home
          </button>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Real Problems.<br/>Safely Solved.</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            See how SafroPay is bringing trust back to India's internet economy.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-slate-100"
            >
              <div className="aspect-video bg-slate-200 relative group cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="text-slate-900 ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                  Placeholder Video
                </div>
              </div>
              <div className="p-8">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wide mb-2 block">{story.tag}</span>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{story.title}</h3>
                <p className="text-slate-600 mb-6">{story.desc}</p>
                <button 
                  onClick={() => onNavigate('join')}
                  className="w-full py-3 border border-slate-200 rounded-lg font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors"
                >
                  Talk to Us Before You Pay
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-emerald-50 rounded-2xl p-8 md:p-12 text-center border border-emerald-100">
           <Lock className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
           <h3 className="text-2xl font-bold text-slate-900 mb-4">Have a similar story?</h3>
           <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
             Don't let your next transaction become a cautionary tale. Secure it with SafroPay.
           </p>
           <button 
             onClick={() => onNavigate('join')}
             className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all"
           >
             Secure My Transaction
           </button>
        </div>
      </div>
    </div>
  );
};

export default StoriesPage;