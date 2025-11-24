import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  { q: "How long does the process take?", a: "Typically 3-7 days depending on the delivery and verification speed of the product or service." },
  { q: "Is my money safe?", a: "Yes. Funds are held in a non-interest bearing, RBI-compliant nodal account. We cannot touch your money, only release it upon approval." },
  { q: "What are the fees?", a: "Fees start at 2.5% of the transaction value. This can be split between buyer and seller or paid by one party." },
  { q: "What documents are required?", a: "Government issued ID (Aadhaar/PAN) for KYC, and bank account details for funds transfer." }
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="font-semibold text-slate-900">{faq.q}</span>
                {openIndex === index ? <ChevronUp size={20} className="text-slate-400" /> : <ChevronDown size={20} className="text-slate-400" />}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100 mt-2">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};