import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Rocket } from 'lucide-react';

export const GrowthSimulator: React.FC = () => {
  const [marketing, setMarketing] = useState(50);
  const [product, setProduct] = useState(50);
  const [funding, setFunding] = useState(50);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Simple mock calculation for growth score
    const newScore = Math.floor((marketing * 0.3) + (product * 0.5) + (funding * 0.2));
    setScore(newScore);
  }, [marketing, product, funding]);

  const getStatus = () => {
    if (score < 30) return { text: "Struggling to Survive", color: "text-red-500", bar: "bg-red-500" };
    if (score < 60) return { text: "Finding Product-Market Fit", color: "text-yellow-500", bar: "bg-yellow-500" };
    if (score < 85) return { text: "Scaling Up", color: "text-blue-500", bar: "bg-blue-500" };
    return { text: "Unicorn Status 🦄", color: "text-purple-500", bar: "bg-purple-500" };
  };

  const status = getStatus();

  const Slider = ({ label, value, setter }: { label: string, value: number, setter: (v: number) => void }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-sm font-bold text-primary-500">{value}%</span>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setter(parseInt(e.target.value))}
        className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary-500"
      />
    </div>
  );

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 w-full max-w-xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-xl text-green-600 dark:text-green-400">
          <LineChart className="w-6 h-6" />
        </div>
        <h2 className="text-2xl font-bold">Growth Simulator</h2>
      </div>

      <div className="space-y-4 mb-8">
        <Slider label="Product Quality" value={product} setter={setProduct} />
        <Slider label="Marketing Effort" value={marketing} setter={setMarketing} />
        <Slider label="Funding Level" value={funding} setter={setFunding} />
      </div>

      <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-6 border border-slate-200 dark:border-slate-700 text-center">
        <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Startup Growth Score</p>
        <div className="text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-400">
          {score}
        </div>
        
        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-4 mb-4 overflow-hidden relative">
          <motion.div 
            className={`h-full ${status.bar}`}
            initial={{ width: 0 }}
            animate={{ width: `${score}%` }}
            transition={{ type: "spring", stiffness: 50 }}
          />
        </div>
        
        <p className={`font-bold flex items-center justify-center gap-2 ${status.color}`}>
          <Rocket className="w-4 h-4" /> {status.text}
        </p>
      </div>
    </div>
  );
};
