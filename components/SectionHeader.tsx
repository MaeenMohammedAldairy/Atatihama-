
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  dark?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, dark = false }) => {
  return (
    <div className="text-center mb-16 space-y-4 px-4 max-w-3xl mx-auto">
      <div className={`inline-block px-5 py-2 ${dark ? 'bg-white/10 text-orange-300' : 'bg-orange-50 text-orange-700'} rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-2 border ${dark ? 'border-white/10' : 'border-orange-100'}`}>
        رؤية عطاء تهامة
      </div>
      <h2 className={`text-4xl md:text-6xl font-black tracking-tighter ${dark ? 'text-white' : 'text-emerald-950'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg md:text-xl font-medium leading-relaxed ${dark ? 'text-emerald-100/70' : 'text-slate-500/80'}`}>
          {subtitle}
        </p>
      )}
      <div className="flex justify-center pt-6 items-center gap-3">
        <div className="h-1.5 w-12 bg-orange-500 rounded-full"></div>
        <div className="h-1.5 w-4 bg-emerald-500 rounded-full"></div>
        <div className="h-1.5 w-1.5 bg-emerald-900 rounded-full"></div>
      </div>
    </div>
  );
};

export default SectionHeader;
