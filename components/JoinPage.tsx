import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Lock, Star } from 'lucide-react';

interface JoinPageProps {
  onBack: () => void;
}

const JoinPage: React.FC<JoinPageProps> = ({ onBack }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setTimeout(() => {
        setSubmitted(true);
      }, 800);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-64 bg-slate-900 z-0" />
      
      <div className="w-full max-w-md z-10">
        <button 
          onClick={onBack}
          className="flex items-center text-slate-300 hover:text-white transition-colors mb-8 text-sm font-medium"
        >
          <ArrowLeft size={18} className="mr-2" /> Back to Home
        </button>

        {!submitted ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white py-10 px-8 shadow-2xl rounded-2xl border border-slate-100"
          >
            <div className="text-center mb-8">
              <div className="mx-auto w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center mb-6 ring-4 ring-emerald-50/50">
                <Star className="h-7 w-7 text-emerald-600" fill="currentColor" />
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
                Join the Inner Circle
              </h2>
              <p className="text-slate-600">
                Get exclusive early access & a launch day offer. We are rolling out invites to select users.
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email-address" className="block text-sm font-medium text-slate-700 mb-2">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-4 py-3.5 border border-slate-300 placeholder-slate-400 text-slate-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                  placeholder="you@example.com"
                />
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-4 px-4 border border-transparent text-lg font-bold rounded-xl text-white bg-slate-900 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-300 shadow-lg active:scale-98"
              >
                Get the Answer First
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                <Lock size={12} />
                <span>Your data is encrypted. No spam, ever.</span>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white py-12 px-8 shadow-2xl rounded-2xl border border-emerald-100 text-center"
          >
            <div className="mx-auto w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="h-10 w-10 text-emerald-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">You're in!</h2>
            <p className="text-slate-600 mb-8 text-lg">
              We've added <span className="font-semibold text-slate-900">{email}</span> to our priority list. We'll reach out soon.
            </p>
            <button 
              onClick={onBack}
              className="text-emerald-600 font-bold hover:text-emerald-700 underline underline-offset-4"
            >
              Return to Homepage
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default JoinPage;