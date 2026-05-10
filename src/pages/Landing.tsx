import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, ArrowRight, Lightbulb, TrendingUp, Presentation, Layout } from 'lucide-react';
import { generatePitch } from '../data/startupIdeas';

interface LandingProps {
  onStart: () => void;
}

export const Landing: React.FC<LandingProps> = ({ onStart }) => {
  const [pitch, setPitch] = useState<string | null>(null);

  const handlePitchGenerate = () => {
    setPitch(generatePitch());
  };

  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center px-4 text-center">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="bg-primary-500 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto shadow-2xl shadow-primary-500/40 rotate-12 hover:rotate-0 transition-transform duration-300">
          <Rocket className="text-white w-12 h-12 -rotate-12" />
        </div>
      </motion.div>

      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="text-5xl md:text-7xl font-black mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-primary-600 to-slate-900 dark:from-white dark:via-primary-400 dark:to-white"
      >
        Build Your Next <br /> Big Idea
      </motion.h1>

      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-10"
      >
        Startup Forge is your interactive toolkit for exploring entrepreneurship, 
        simulating growth, and structuring your business models.
      </motion.p>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
      >
        <button 
          onClick={onStart}
          className="flex items-center justify-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl"
        >
          Enter the Forge <ArrowRight className="w-5 h-5" />
        </button>
        <button 
          onClick={handlePitchGenerate}
          className="flex items-center justify-center gap-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
        >
          <Presentation className="w-5 h-5" /> Random Pitch
        </button>
      </motion.div>

      <div className="h-24 mt-8 w-full max-w-xl flex items-center justify-center">
        <AnimatePresence mode="wait">
          {pitch && (
            <motion.div
              key={pitch}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-lg font-medium italic text-primary-600 dark:text-primary-400 text-center"
            >
              "{pitch}"
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 max-w-4xl w-full"
      >
        {[
          { icon: <Lightbulb />, title: "Ideate", desc: "Generate validated startup concepts" },
          { icon: <Layout />, title: "Plan", desc: "Map your business model canvas" },
          { icon: <TrendingUp />, title: "Grow", desc: "Simulate startup scaling" }
        ].map((feature, i) => (
          <div key={i} className="flex flex-col items-center text-center p-4">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-2xl flex items-center justify-center mb-4">
              {React.cloneElement(feature.icon as React.ReactElement<{ className?: string }>, { className: "w-6 h-6" })}
            </div>
            <h3 className="font-bold mb-2">{feature.title}</h3>
            <p className="text-sm text-slate-500">{feature.desc}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
