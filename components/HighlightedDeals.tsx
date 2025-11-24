import React from 'react';
import { motion } from 'framer-motion';
import { Car, Home, Briefcase, Globe, ArrowRight } from 'lucide-react';

interface DealsProps {
  onCtaClick: () => void;
}

const deals = [
  {
    icon: Car,
    title: "Honda City 2019",
    price: "₹2,50,000",
    category: "Vehicle",
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    icon: Home,
    title: "2BHK Token Amount",
    price: "₹50,00,000",
    category: "Real Estate",
    color: "text-amber-600",
    bg: "bg-amber-50"
  },
  {
    icon: Briefcase,
    title: "Website Development",
    price: "₹75,000",
    category: "Freelance",
    color: "text-emerald-600",
    bg: "bg-emerald-50"
  },
  {
    icon: Globe,
    title: "Premium Domain",
    price: "₹1,25,000",
    category: "Digital Asset",
    color: "text-indigo-600",
    bg: "bg-indigo-50"
  }
];

export const HighlightedDeals: React.FC<DealsProps> = ({ onCtaClick }) => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Trusted for High-Value Deals</h2>
          <p className="text-slate-600">See what thousands of Indians are securing today.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {deals.map((deal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow cursor-default"
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-lg ${deal.bg} ${deal.color}`}>
                  <deal.icon size={20} />
                </div>
                <span className="text-xs font-medium px-2 py-1 bg-slate-100 text-slate-600 rounded-md">{deal.category}</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-1">{deal.title}</h3>
              <div className="text-2xl font-bold text-slate-900 mb-4">{deal.price}</div>
              <div className="w-full h-1.5 bg-slate-100 rounded-full mb-4 overflow-hidden">
                <div className="h-full bg-emerald-500 w-3/4 rounded-full" />
              </div>
              <div className="text-xs text-slate-500 flex justify-between">
                <span>Funds Secured</span>
                <span className="text-emerald-600 font-medium">75% Complete</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button onClick={onCtaClick} className="text-emerald-600 font-bold hover:text-emerald-700 inline-flex items-center gap-2">
            Secure your transaction <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};