import React from 'react';
import { motion } from 'framer-motion';
import { FileText, CreditCard, Truck, CheckCheck, ArrowRight } from 'lucide-react';
import { ViewState } from '../App';

interface SectionProps {
  onNavigate: (view: ViewState) => void;
}

const steps = [
  { id: 1, icon: FileText, title: "Create Deal" },
  { id: 2, icon: CreditCard, title: "Deposit Funds" },
  { id: 3, icon: Truck, title: "Verify & Deliver" },
  { id: 4, icon: CheckCheck, title: "Funds Released" }
];

export const HowItWorksSection: React.FC<SectionProps> = ({ onNavigate }) => {
  return (
    <section id="how-it-works-short" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">How SafroPay Works</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A simple 4-step process designed to protect both parties equally.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-emerald-600 shadow-sm mb-4">
                <step.icon size={28} />
              </div>
              <h3 className="font-bold text-slate-900">{step.title}</h3>
              <div className="text-xs text-slate-400 mt-2 font-mono">STEP 0{step.id}</div>
            </motion.div>
          ))}
        </div>

        <button 
          onClick={() => onNavigate('how-it-works')}
          className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-700 transition-colors bg-emerald-50 px-6 py-3 rounded-full hover:bg-emerald-100"
        >
          View Full Process <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
};