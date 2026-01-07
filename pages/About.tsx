
import React from 'react';
import SectionHeader from '../components/SectionHeader.tsx';
import { ESTABLISHMENT_TEXT, VISION, MISSION, BOARD_MEMBERS, VALUES } from '../constants.tsx';
import { 
  SparklesIcon, 
  RocketLaunchIcon, 
  EyeIcon, 
  ShieldCheckIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const About: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-stone-50">
      {/* Cinematic Hero - Sunrise Theme */}
      <section className="relative py-40 md:py-60 bg-emerald-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-orange-500 rounded-full blur-[180px] -mr-96 -mt-96 opacity-30 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-emerald-500 rounded-full blur-[150px] -ml-96 -mb-96 opacity-20"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-3 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full text-orange-400 text-xs font-black uppercase tracking-[0.4em] mb-12 animate-fade-in shadow-2xl">
            <SparklesIcon className="w-5 h-5" />
            الجذور، القيم، والرؤية
          </div>
          <h1 className="text-7xl md:text-[10rem] font-black text-white mb-10 leading-[0.85] tracking-tighter animate-fade-in-up">
            حكاية أرض <br /> <span className="text-orange-500 relative inline-block">
              تنبض بالعطاء
              <svg className="absolute -bottom-6 left-0 w-full h-4" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,5 Q50,15 100,5" stroke="#f97316" strokeWidth="6" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="text-2xl md:text-4xl text-emerald-100/70 max-w-4xl mx-auto font-medium leading-relaxed mb-16 animate-fade-in-up delay-200">
            من قلب تهامة الخصيب، انطلقنا لنكون السند الأول للمزارع والمنتج اليمني، نبني من التعاون قوة ومن الأرض سيادة.
          </p>
        </div>
      </section>

      {/* Story Section - Warm Vibrant Accents */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              <div className="absolute -inset-6 bg-orange-500/10 rounded-[4rem] rotate-3 group-hover:rotate-0 transition-transform duration-1000"></div>
              <div className="relative rounded-[4rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)]">
                <img 
                  src="https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?auto=format&fit=crop&q=80&w=1200" 
                  alt="مزارع تهامة الأصيلة" 
                  className="w-full h-[650px] object-cover group-hover:scale-110 transition-transform duration-[2s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-12 right-12 text-white bg-orange-500 p-8 rounded-[2rem] shadow-2xl">
                  <p className="text-6xl font-black tracking-tighter">1998</p>
                  <p className="text-sm font-black uppercase tracking-widest mt-1">تأسيس رسمي تعاوني</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-12">
              <div className="flex items-center gap-5">
                <div className="h-2 w-16 bg-orange-500 rounded-full"></div>
                <span className="font-black text-lg uppercase tracking-[0.3em] text-orange-600">عن الجذور</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-emerald-950 leading-[0.95] tracking-tighter">
                بنينا الكيان <br /> <span className="text-emerald-700">لنحفظ كرامة الأرض</span>
              </h2>
              <p className="text-2xl text-slate-500 leading-relaxed font-medium pr-8 border-r-4 border-emerald-100">
                {ESTABLISHMENT_TEXT}
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div className="p-10 bg-white rounded-[3rem] border border-stone-200 shadow-sm hover:border-orange-200 transition-colors">
                   <h4 className="text-4xl font-black text-orange-600 mb-2">39</h4>
                   <p className="text-sm text-slate-400 font-black uppercase tracking-widest">رقم القانون المنظم</p>
                </div>
                <div className="p-10 bg-white rounded-[3rem] border border-stone-200 shadow-sm hover:border-emerald-200 transition-colors">
                   <h4 className="text-4xl font-black text-emerald-900 mb-2">100%</h4>
                   <p className="text-sm text-slate-400 font-black uppercase tracking-widest">تغطية سلاسل القيمة</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Vibrant Dual Cards */}
      <section className="py-32 px-6 bg-emerald-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 p-16 md:p-24 rounded-[5rem] hover:bg-white/10 transition-all duration-700">
            <div className="relative z-10">
              <div className="w-24 h-24 bg-orange-500 text-white rounded-[2rem] flex items-center justify-center mb-12 shadow-[0_15px_30px_-5px_rgba(249,115,22,0.4)] group-hover:rotate-6 transition-all">
                <EyeIcon className="w-12 h-12" />
              </div>
              <h3 className="text-5xl font-black text-white mb-10 tracking-tighter">رؤيتنا للمستقبل</h3>
              <p className="text-3xl text-emerald-50/90 leading-relaxed font-black italic border-r-8 border-orange-500 pr-8">
                "{VISION}"
              </p>
            </div>
          </div>

          <div className="group relative bg-orange-600 p-16 md:p-24 rounded-[5rem] shadow-2xl hover:-translate-y-4 transition-all duration-700 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="relative z-10">
              <div className="w-24 h-24 bg-white text-orange-600 rounded-[2rem] flex items-center justify-center mb-12 shadow-xl group-hover:rotate-6 transition-all">
                <RocketLaunchIcon className="w-12 h-12" />
              </div>
              <h3 className="text-5xl font-black text-white mb-10 tracking-tighter">رسالتنا في الميدان</h3>
              <p className="text-3xl text-white leading-relaxed font-black italic border-r-8 border-white/30 pr-8">
                "{MISSION}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Vibrant Icons */}
      <section className="py-40 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="قيمنا الجوهرية" 
            subtitle="المبادئ التي نسقي بها عملنا اليومي لنضمن جودة الثمر ونزاهة العطاء." 
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mt-24">
            {VALUES.map((val, idx) => (
              <div 
                key={val.id} 
                className="group relative bg-stone-50 p-12 rounded-[3.5rem] border border-stone-100 text-center transition-all duration-700 hover:bg-white hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] hover:-translate-y-3"
              >
                <div className={`w-24 h-24 rounded-[2rem] flex items-center justify-center text-4xl mx-auto mb-10 shadow-sm transition-all duration-700 ${idx % 2 === 0 ? 'bg-emerald-950 text-orange-500' : 'bg-orange-500 text-white'} group-hover:scale-110`}>
                   <i className={val.icon}></i>
                </div>
                <h4 className="text-2xl font-black text-emerald-950 leading-tight group-hover:text-orange-600 transition-colors">
                  {val.text}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Commitment - Warm & Reassuring */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-orange-600 to-orange-500 rounded-[6rem] p-20 text-center text-white shadow-[0_50px_100px_-20px_rgba(249,115,22,0.3)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
          <div className="relative z-10 space-y-12">
            <h3 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">عهدنا أمام الأرض والوطن</h3>
            <p className="text-2xl md:text-3xl text-orange-50 font-medium leading-relaxed max-w-4xl mx-auto italic">
              "نحن في عطاء تهامة، لا نرى الزراعة مجرد مهنة، بل هي أمانة إيمانية وواجب وطني، نلتزم بتسخير كل إمكاناتنا ليظل المزارع اليمني عزيزاً كريماً في أرضه."
            </p>
            <div className="flex justify-center gap-8">
               <div className="flex items-center gap-4 bg-white/20 px-8 py-4 rounded-[1.5rem] backdrop-blur-xl border border-white/10 shadow-xl">
                 <ShieldCheckIcon className="w-8 h-8 text-white" />
                 <span className="font-black text-lg">أمانة وشفافية</span>
               </div>
               <div className="flex items-center gap-4 bg-white/20 px-8 py-4 rounded-[1.5rem] backdrop-blur-xl border border-white/10 shadow-xl">
                 <GlobeAltIcon className="w-8 h-8 text-white" />
                 <span className="font-black text-lg">بناء سيادي</span>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
