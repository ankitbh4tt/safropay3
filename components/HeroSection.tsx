import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Shield, Lock, ArrowRight, MapPin } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

export const HeroSection: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative pt-10 pb-16 lg:pt-20 lg:pb-28 overflow-hidden">
      {/* Optimized Background Decor - Static CSS gradient preferred over heavy blur nodes for weak devices */}
      <div className="absolute top-0 right-0 w-[50%] h-[600px] bg-gradient-to-bl from-emerald-50/50 to-transparent -z-10 pointer-events-none" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-50/50 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left z-10">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm"
            >
              <MapPin size={12} className="text-emerald-600" />
              Built in Gurugram · For India’s Digital Economy
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight"
            >
              Tired of risky <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">advance payments</span> and fake buyers?
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              SafroPay guarantees every high-value digital deal in India through a secure, transparent escrow process.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button 
                onClick={onCtaClick}
                className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-emerald-500/30 transition-all flex items-center justify-center gap-2 group"
              >
                Start Your Deal
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => document.getElementById('how-it-works-short')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-xl font-semibold text-lg transition-colors"
              >
                See how SafroPay works
              </button>
            </motion.div>
          </div>

          {/* Hero Visual - Transaction Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 w-full max-w-md lg:max-w-lg relative"
          >
            {/* The Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden relative z-10">
              {/* Card Header */}
              <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-wide">Deal Status: Funds Secured</span>
                </div>
                <div className="text-xs text-slate-400 font-mono">#SP-8821X</div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 space-y-6">
                <div className="text-center pb-2">
                  <div className="text-sm text-slate-500 font-medium mb-1">Escrow Amount Held</div>
                  <div className="text-4xl font-extrabold text-slate-900 tracking-tight">₹2,50,000</div>
                </div>

                <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-3 flex items-center justify-center gap-2 text-center">
                  <Lock size={14} className="text-emerald-600" />
                  <span className="text-xs sm:text-sm font-semibold text-emerald-800">Funds locked in RBI-compliant vault</span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between group">
                    <span className="text-slate-600 font-medium text-sm group-hover:text-slate-900 transition-colors">KYC Verified</span>
                    <CheckCircle2 size={20} className="text-emerald-500" fill="#ecfdf5" />
                  </div>
                  <div className="w-full h-px bg-slate-100" />
                  
                  <div className="flex items-center justify-between group">
                    <span className="text-slate-600 font-medium text-sm group-hover:text-slate-900 transition-colors">Documents Uploaded</span>
                    <CheckCircle2 size={20} className="text-emerald-500" fill="#ecfdf5" />
                  </div>
                  <div className="w-full h-px bg-slate-100" />

                  <div className="flex items-center justify-between group">
                    <span className="text-slate-600 font-medium text-sm group-hover:text-slate-900 transition-colors">Funds Deposited</span>
                    <CheckCircle2 size={20} className="text-emerald-500" fill="#ecfdf5" />
                  </div>
                  <div className="w-full h-px bg-slate-100" />

                  <div className="flex items-center justify-between opacity-80">
                    <span className="text-slate-600 font-medium text-sm">Product Delivery</span>
                    <div className="flex items-center gap-2 px-2 py-1 bg-amber-50 text-amber-600 rounded text-xs font-bold">
                      Awaiting
                      <div className="w-3 h-3 rounded-full border-2 border-amber-500 border-t-transparent animate-spin" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background blobs simplified for performance */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 bg-emerald-100 rounded-full opacity-50 blur-xl" />
            <div className="absolute -z-10 -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-full opacity-50 blur-xl" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};