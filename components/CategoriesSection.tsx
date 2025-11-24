import React from 'react';
import { Car, Home, Globe, Briefcase, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface CategoriesProps {
  onCtaClick: () => void;
}

const categories = [
  {
    icon: Car,
    title: "Vehicle Sales",
    desc: "Buying a used car or bike? Don't transfer funds until you have the keys and papers.",
    bg: "bg-blue-50",
    text: "text-blue-600"
  },
  {
    icon: Home,
    title: "Real Estate",
    desc: "Secure token amounts for rentals, sales, and property investments safely.",
    bg: "bg-amber-50",
    text: "text-amber-600"
  },
  {
    icon: Globe,
    title: "Domain Names",
    desc: "Transfer digital assets and domains without fear of losing ownership or money.",
    bg: "bg-indigo-50",
    text: "text-indigo-600"
  },
  {
    icon: Briefcase,
    title: "Freelancing",
    desc: "Milestone-based protections. Clients pay upfront, freelancers get paid on delivery.",
    bg: "bg-emerald-50",
    text: "text-emerald-600"
  }
];

export const CategoriesSection: React.FC<CategoriesProps> = ({ onCtaClick }) => {
  return (
    <section id="use-cases" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Secure Transactions for Every Need</h2>
            <p className="text-lg text-slate-600">
              Whether it's physical goods or digital services, SafroPay adapts to your transaction type.
            </p>
          </div>
          <button 
            onClick={onCtaClick}
            className="hidden md:flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-700 transition-colors"
          >
            Start a deal now <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-12 h-12 ${cat.bg} ${cat.text} rounded-lg flex items-center justify-center mb-6`}>
                <cat.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{cat.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {cat.desc}
              </p>
              <div className="w-full h-px bg-slate-50 mb-4" />
              <button onClick={onCtaClick} className="text-sm font-semibold text-slate-900 hover:text-emerald-600 flex items-center gap-1 transition-colors">
                Secure this deal <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
           <button 
            onClick={onCtaClick}
            className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-700 transition-colors"
          >
            Start a deal now <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};