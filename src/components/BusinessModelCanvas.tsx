import React, { useState } from 'react';
import { Layout } from 'lucide-react';

interface BMCSection {
  id: string;
  title: string;
  content: string;
}

const initialBMC: BMCSection[] = [
  { id: 'partners', title: 'Key Partners', content: 'Who are your key partners/suppliers?' },
  { id: 'activities', title: 'Key Activities', content: 'What activities are key to your value prop?' },
  { id: 'resources', title: 'Key Resources', content: 'What resources do you need?' },
  { id: 'value', title: 'Value Propositions', content: 'What value do you deliver to the customer?' },
  { id: 'relationships', title: 'Customer Relationships', content: 'What relationship does each customer segment expect?' },
  { id: 'channels', title: 'Channels', content: 'How do you reach your customers?' },
  { id: 'segments', title: 'Customer Segments', content: 'For whom are you creating value?' },
  { id: 'cost', title: 'Cost Structure', content: 'What are the most important costs?' },
  { id: 'revenue', title: 'Revenue Streams', content: 'For what value are customers willing to pay?' },
];

export const BusinessModelCanvas: React.FC = () => {
  const [sections, setSections] = useState<BMCSection[]>(initialBMC);

  const handleUpdate = (id: string, value: string) => {
    setSections(prev => prev.map(s => s.id === id ? { ...s, content: value } : s));
  };

  const getSection = (id: string) => sections.find(s => s.id === id)!;

  const Block = ({ section }: { section: BMCSection }) => (
    <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col h-full min-h-[120px]">
      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{section.title}</h4>
      <textarea
        className="w-full flex-grow bg-transparent text-sm resize-none focus:outline-none focus:ring-1 focus:ring-primary-500 rounded p-1"
        value={section.content}
        onChange={(e) => handleUpdate(section.id, e.target.value)}
      />
    </div>
  );

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 w-full max-w-5xl mx-auto overflow-x-auto">
      <div className="flex items-center gap-3 mb-6 min-w-[800px]">
        <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl text-blue-600 dark:text-blue-400">
          <Layout className="w-6 h-6" />
        </div>
        <h2 className="text-2xl font-bold">Business Model Canvas</h2>
      </div>

      <div className="grid grid-cols-10 gap-4 min-w-[800px]">
        {/* Top row */}
        <div className="col-span-2 row-span-2">
          <Block section={getSection('partners')} />
        </div>
        <div className="col-span-2 row-span-1">
          <Block section={getSection('activities')} />
        </div>
        <div className="col-span-2 row-span-2">
          <Block section={getSection('value')} />
        </div>
        <div className="col-span-2 row-span-1">
          <Block section={getSection('relationships')} />
        </div>
        <div className="col-span-2 row-span-2">
          <Block section={getSection('segments')} />
        </div>
        
        {/* Middle Row filler */}
        <div className="col-span-2 row-span-1">
          <Block section={getSection('resources')} />
        </div>
        <div className="col-span-2 row-span-1">
          <Block section={getSection('channels')} />
        </div>

        {/* Bottom row */}
        <div className="col-span-5 row-span-1">
          <Block section={getSection('cost')} />
        </div>
        <div className="col-span-5 row-span-1">
          <Block section={getSection('revenue')} />
        </div>
      </div>
    </div>
  );
};
