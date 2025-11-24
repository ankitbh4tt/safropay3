import React from 'react';
import { AlertTriangle, UserX, MessageSquareWarning, Landmark } from 'lucide-react';
import { motion } from 'framer-motion';

const problems = [
  {
    icon: UserX,
    title: "Fake Buyers & Sellers",
    desc: "Online marketplaces are flooded with scammers who disappear after receiving payment or goods."
  },
  {
    icon: AlertTriangle,
    title: "Unsafe Advance Payments",
    desc: "Sending money upfront to a stranger often leads to loss of funds with zero recourse."
  },
  {
    icon: MessageSquareWarning,
    title: "Unverifiable Deals",
    desc: "WhatsApp agreements and screenshots aren't legally binding and offer no payment protection."
  }
];

export const ProblemSection = () => {
  return (
    <section className="py-20 bg-white" id="problem">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">India’s digital economy has a <span className="text-red-600">trust gap.</span></h2>
          <p className="text-lg text-slate-600">
            High-value transactions shouldn't feel like gambling. Without a neutral middleman, both buyers and sellers are at risk.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-red-100 transition-colors group"
            >
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <item.icon className="h-7 w-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* The Solution Banner */}
        <div 
          className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center gap-8 shadow-xl"
        >
          <div className="bg-emerald-500/20 p-4 rounded-full shrink-0">
            <Landmark className="h-10 w-10 text-emerald-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-2">The SafroPay Solution</h3>
            <p className="text-slate-300 text-lg">
              We act as a neutral escrow authority. We hold the buyer's funds securely and only release them to the seller once the product or service is verified and delivered.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};