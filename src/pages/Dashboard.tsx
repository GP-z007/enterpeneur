import React from 'react';
import { motion } from 'framer-motion';
import { IdeaGenerator } from '../components/IdeaGenerator';
import { BusinessModelCanvas } from '../components/BusinessModelCanvas';
import { GrowthSimulator } from '../components/GrowthSimulator';
import { LearningHub } from '../components/LearningHub';

export const Dashboard: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 py-8"
    >
      <header className="mb-10">
        <h1 className="text-3xl font-black mb-2">Workspace</h1>
        <p className="text-slate-500">Manage your ideas, business models, and learn the fundamentals.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 flex flex-col gap-8">
          <IdeaGenerator />
          <GrowthSimulator />
        </div>
        <div className="lg:col-span-8 flex flex-col gap-8">
          <BusinessModelCanvas />
          <LearningHub />
        </div>
      </div>
    </motion.div>
  );
};
