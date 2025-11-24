import React from 'react';
import { ShieldCheck, Twitter, Linkedin, Instagram } from 'lucide-react';
import { ViewState } from '../App';

interface FooterProps {
  onNavigate: (view: ViewState) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div 
              className="flex items-center gap-2 mb-6 text-white cursor-pointer"
              onClick={() => onNavigate('home')}
            >
              <div className="bg-emerald-600 p-1.5 rounded-lg">
                <ShieldCheck className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight">
                Safro<span className="text-emerald-500">Pay</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              India’s most trusted escrow platform for high-value transactions. Built with trust in Gurugram.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-500 hover:text-emerald-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-500 hover:text-emerald-500 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-slate-500 hover:text-emerald-500 transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Platform</h4>
            <ul className="space-y-4 text-sm">
              <li><button onClick={() => onNavigate('how-it-works')} className="hover:text-emerald-400 transition-colors text-left">How it Works</button></li>
              <li><button onClick={() => onNavigate('stories')} className="hover:text-emerald-400 transition-colors text-left">Success Stories</button></li>
              <li><button onClick={() => onNavigate('home')} className="hover:text-emerald-400 transition-colors text-left">Security</button></li>
              <li><button onClick={() => onNavigate('home')} className="hover:text-emerald-400 transition-colors text-left">FAQ</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Careers</a></li>
              <li><button onClick={() => onNavigate('join')} className="hover:text-emerald-400 transition-colors text-left">Contact</button></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Escrow Agreement</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Dispute Resolution</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} SafroPay Technologies Pvt Ltd. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
};