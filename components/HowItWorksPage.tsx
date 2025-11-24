import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, UserCheck, Upload, Lock, FileSignature, Truck, Coins, ArrowRight } from 'lucide-react';
import { ViewState } from '../App';

interface PageProps {
  onNavigate: (view: ViewState) => void;
}

const steps = [
  { icon: FileText, title: "Create Deal", desc: "Buyer or seller initiates the deal with clear terms." },
  { icon: UserCheck, title: "Identity Verification", desc: "Instant KYC verification using Aadhaar/PAN." },
  { icon: Upload, title: "Upload Documents", desc: "Upload property papers, RC, or contracts for review." },
  { icon: Lock, title: "Secure Payment", desc: "Buyer deposits funds into the secure escrow vault." },
  { icon: FileSignature, title: "Digital Contract", desc: "A legally binding e-agreement is signed by both." },
  { icon: Truck, title: "Delivery & Inspection", desc: "Seller delivers. Buyer inspects within the agreed window." },
  { icon: Coins, title: "Release Funds", desc: "Buyer approves. Funds are instantly released to Seller." },
];

const HowItWorksPage: React.FC<PageProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-12 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold uppercase rounded-full mb-4">The Process</div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Complete Transparency.<br/>Step by Step.</h1>
          <p className="text-lg text-slate-600">
            We've digitized the traditional escrow process to make it fast, legally compliant, and completely secure for the Indian market.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-0.5 bg-slate-200 -z-10" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 w-full md:w-auto">
                   <div className={`bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                     <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                     <p className="text-slate-600">{step.desc}</p>
                   </div>
                </div>
                
                <div className="w-16 h-16 rounded-full bg-white border-4 border-emerald-50 shadow-sm flex items-center justify-center relative z-10 shrink-0">
                  <step.icon size={24} className="text-emerald-600" />
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-slate-900 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {index + 1}
                  </div>
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <button 
            onClick={() => onNavigate('join')}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-12 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
          >
            Start Your Deal Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;