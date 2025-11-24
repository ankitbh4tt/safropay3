import React from 'react';
import { Smartphone, Zap, MessageSquare } from 'lucide-react';

interface MobileProps {
  onCtaClick: () => void;
}

export const MobileOptimizedSection: React.FC<MobileProps> = ({ onCtaClick }) => {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-lg border border-slate-100 flex flex-col md:flex-row items-center gap-12">
          
          <div className="flex-1 order-2 md:order-1">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-4">
              Mobile First
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Deals on the go? <br /> We've got you covered.</h2>
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <Zap size={20} className="text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Works on 2G/3G</h4>
                  <p className="text-sm text-slate-600">Optimized for low-speed networks across Tier 2 & 3 cities.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <MessageSquare size={20} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">SMS & WhatsApp Alerts</h4>
                  <p className="text-sm text-slate-600">Stay updated on every milestone instantly.</p>
                </div>
              </div>
            </div>
            
            <button 
              onClick={onCtaClick}
              className="bg-slate-900 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-xl transition-colors shadow-md w-full md:w-auto"
            >
              Join App Waitlist
            </button>
          </div>

          <div className="flex-1 order-1 md:order-2 flex justify-center">
            {/* Abstract Phone Mockup */}
            <div className="w-64 h-[500px] bg-slate-900 rounded-[2.5rem] border-[8px] border-slate-800 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-xl z-20" />
              
              <div className="h-full w-full bg-slate-50 flex flex-col pt-12 px-4 pb-4">
                <div className="flex justify-between items-center mb-6">
                   <div className="w-8 h-8 rounded-full bg-slate-200" />
                   <div className="w-16 h-4 rounded-full bg-slate-200" />
                </div>
                
                <div className="bg-white p-4 rounded-xl shadow-sm mb-4 border border-slate-100">
                   <div className="w-12 h-12 rounded-lg bg-emerald-100 mb-3" />
                   <div className="w-3/4 h-4 rounded bg-slate-100 mb-2" />
                   <div className="w-1/2 h-3 rounded bg-slate-50" />
                </div>

                <div className="bg-emerald-600 p-4 rounded-xl shadow-md text-white mt-auto mb-4">
                   <div className="text-xs opacity-75 mb-1">Action Required</div>
                   <div className="font-bold">Approve Delivery</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};