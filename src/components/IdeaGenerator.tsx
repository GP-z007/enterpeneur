import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, Save, Target, TrendingUp, Users } from 'lucide-react';
import { generateIdea, type StartupIdea } from '../data/startupIdeas';

export const IdeaGenerator: React.FC = () => {
  const [category, setCategory] = useState<string>('tech');
  const [idea, setIdea] = useState<StartupIdea | null>(null);
  const [savedIdeas, setSavedIdeas] = useState<StartupIdea[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('savedIdeas');
    if (saved) {
      setSavedIdeas(JSON.parse(saved));
    }
  }, []);

  const handleGenerate = () => {
    setIdea(generateIdea(category));
  };

  const handleSave = () => {
    if (idea && !savedIdeas.find(i => i.id === idea.id)) {
      const newSaved = [...savedIdeas, idea];
      setSavedIdeas(newSaved);
      localStorage.setItem('savedIdeas', JSON.stringify(newSaved));
    }
  };

  const categories = ['tech', 'health', 'education', 'eco'];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 w-full max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded-xl text-yellow-600 dark:text-yellow-400">
          <Lightbulb className="w-6 h-6" />
        </div>
        <h2 className="text-2xl font-bold">Startup Idea Generator</h2>
      </div>

      <div className="mb-6 flex gap-2 flex-wrap">
        {categories.map(c => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              category === c 
                ? 'bg-primary-500 text-white shadow-md shadow-primary-500/30' 
                : 'bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600'
            }`}
          >
            {c.charAt(0).toUpperCase() + c.slice(1)}
          </button>
        ))}
      </div>

      <button
        onClick={handleGenerate}
        className="w-full bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-bold py-3 px-4 rounded-xl hover:bg-slate-800 dark:hover:bg-white transition-all transform active:scale-[0.98] mb-8"
      >
        Generate Idea
      </button>

      <AnimatePresence mode="wait">
        {idea && (
          <motion.div
            key={idea.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-slate-50 dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 relative"
          >
            <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-4">{idea.name}</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-slate-400 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">The Problem</p>
                  <p className="text-sm">{idea.problem}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-slate-400 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Target Audience</p>
                  <p className="text-sm">{idea.audience}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-slate-400 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Monetization</p>
                  <p className="text-sm">{idea.monetization}</p>
                </div>
              </div>
            </div>

            <button
              onClick={handleSave}
              className="absolute top-4 right-4 p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 hover:text-primary-500 transition-colors"
              title="Save Idea"
            >
              <Save className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {savedIdeas.length > 0 && (
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
          <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">Saved Ideas</h4>
          <div className="flex flex-wrap gap-2">
            {savedIdeas.map(saved => (
              <span key={saved.id} className="text-xs px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full border border-primary-100 dark:border-primary-800/50">
                {saved.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
