import React from 'react';
import { ShieldCheck, Lock, Server, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

export const SecuritySection = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="flex-1">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4"
            >
              Enterprise-Grade Security
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Your money is safer than <br /> in your own pocket.
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              We employ banking-grade protocols to ensure that every rupee is accounted for and protected until the deal is done.
            </p>

            <ul className="space-y-6">
              {[
                { icon: ShieldCheck, title: "Bank-Grade Protection", desc: "Funds held in RBI-compliant nodal accounts." },
                { icon: Lock, title: "Mandatory KYC", desc: "Both parties verified via Aadhaar/PAN before deal start." },
                { icon: Eye, title: "AI Fraud Monitoring", desc: "Real-time scanning for suspicious transaction patterns." },
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 bg-emerald-100 p-2 rounded-lg text-emerald-600">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 w-full max-w-md"
          >
            <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/20 to-transparent" />
              
              <div className="relative z-10">
                <div className="text-6xl font-black text-emerald-400 mb-2">₹0</div>
                <div className="text-2xl font-bold mb-6">Fraud Loss</div>
                <p className="text-slate-400 mb-8">
                  Achieved across 50,000+ simulated scenarios during our stress-testing phase.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10 text-sm">
                  <Server size={14} className="text-emerald-400" />
                  <span>256-bit Encrypted Infrastructure</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};