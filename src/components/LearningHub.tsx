import React from 'react';
import { BookOpen, Flag, Target, Zap, DollarSign } from 'lucide-react';

const concepts = [
  {
    title: 'MVP (Minimum Viable Product)',
    icon: <Flag className="w-5 h-5" />,
    color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
    description: 'A version of a product with just enough features to be usable by early customers who can then provide feedback for future product development.'
  },
  {
    title: 'Product-Market Fit',
    icon: <Target className="w-5 h-5" />,
    color: 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400',
    description: 'The degree to which a product satisfies a strong market demand. It is the first step to building a successful venture in which the company meets early adopters, gathers feedback and gauges interest.'
  },
  {
    title: 'Burn Rate',
    icon: <DollarSign className="w-5 h-5" />,
    color: 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400',
    description: 'The rate at which a new company is spending its venture capital to finance overhead before generating positive cash flow from operations.'
  },
  {
    title: 'Scaling',
    icon: <Zap className="w-5 h-5" />,
    color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
    description: 'Adding revenue at a rapid rate while adding resources at an incremental rate. It is about increasing output efficiently without a corresponding increase in costs.'
  }
];

export const LearningHub: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 w-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-xl text-indigo-600 dark:text-indigo-400">
          <BookOpen className="w-6 h-6" />
        </div>
        <h2 className="text-2xl font-bold">Entrepreneurship Hub</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {concepts.map((concept, idx) => (
          <div key={idx} className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className={`p-2 rounded-lg ${concept.color}`}>
                {concept.icon}
              </div>
              <h3 className="font-bold">{concept.title}</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {concept.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
