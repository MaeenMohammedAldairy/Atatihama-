
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { GOALS, MISSIONS_LIST } from '../constants';

const Goals: React.FC = () => {
  return (
    <div className="py-24 bg-slate-50 min-h-screen relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader 
          title="أهدافنا الاستراتيجية" 
          subtitle="خارطة طريق واضحة لبناء اقتصاد تعاوني مستدام وقوي، يرتكز على تمكين المنتج المحلي وتعزيز الأمن الغذائي."
        />

        {/* Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-16">
          {GOALS.map((goal, i) => (
            <div 
              key={goal.id} 
              className="group bg-white p-8 rounded-[2rem] border border-slate-200 flex flex-col sm:flex-row items-start gap-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle background number */}
              <div className="absolute top-[-10px] left-[-10px] text-8xl font-black text-slate-50 select-none group-hover:text-emerald-50 transition-colors">
                {String(i + 1).padStart(2, '0')}
              </div>

              <div className="relative z-10 w-20 h-20 shrink-0 bg-emerald-900 text-white rounded-3xl flex items-center justify-center text-4xl shadow-lg group-hover:bg-orange-600 group-hover:rotate-12 transition-all duration-500">
                <i className={goal.icon}></i>
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                    هدف استراتيجي {i + 1}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-emerald-950 leading-tight group-hover:text-emerald-800 transition-colors">
                  {goal.title}
                </h3>
                <div className="w-12 h-1 bg-slate-100 mt-4 group-hover:w-24 group-hover:bg-orange-400 transition-all duration-500 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Missions Section */}
        <div className="mt-32">
          <div className="mb-16">
            <SectionHeader 
              title="مهامنا التنفيذية" 
              subtitle="نترجم الرؤية إلى خطوات ملموسة عبر مجموعة من المهام المتكاملة التي تغطي كافة جوانب الدورة الإنتاجية والتسويقية."
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MISSIONS_LIST.map((m, i) => (
              <div 
                key={i} 
                className="group bg-white p-6 rounded-2xl border border-slate-100 flex gap-5 items-center hover:border-emerald-200 hover:bg-emerald-50/30 transition-all duration-300 shadow-sm"
              >
                <div className="w-12 h-12 bg-slate-50 text-emerald-600 rounded-xl flex items-center justify-center text-xl group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <i className={m.icon}></i>
                </div>
                <p className="text-base font-bold text-slate-700 leading-tight group-hover:text-emerald-900 transition-colors">
                  {m.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Commitment Banner */}
        <div className="mt-32 bg-gradient-to-r from-emerald-900 to-emerald-800 rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/leaf.png')] opacity-10"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-5xl font-black mb-8 leading-tight">التزامنا تجاه المجتمع</h3>
            <p className="text-xl md:text-2xl text-emerald-100/90 font-medium leading-relaxed mb-10">
              إن هذه الأهداف ليست مجرد شعارات، بل هي بوصلة عملنا اليومي. نحن ملتزمون بالشفافية والابتكار لخدمة كل مزارع ومنتج في تهامة الخير.
            </p>
            <div className="flex justify-center gap-4">
              <div className="h-2 w-20 bg-orange-500 rounded-full group-hover:w-40 transition-all duration-700"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
