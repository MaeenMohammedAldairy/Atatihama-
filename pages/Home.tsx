
import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader.tsx';
import { LOGO_ICON, ACHIEVEMENTS } from '../constants.tsx';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center bg-emerald-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover scale-105 animate-slow-zoom opacity-50" 
            alt="نمو وازدهار مزارع تهامة"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-emerald-950/40 to-emerald-950"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-white py-24">
          <div className="max-w-4xl space-y-10 animate-fade-in-up">
            <div className="inline-flex items-center gap-3 bg-orange-500/20 backdrop-blur-xl px-5 py-2.5 rounded-2xl text-[10px] md:text-xs font-black tracking-widest uppercase border border-orange-400/30">
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
              نحو مستقبل زراعي سيادي ومستدام
            </div>
            
            <h1 className="text-6xl md:text-9xl font-black leading-[0.95] tracking-tighter">
              بصمة خير <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">في أرض تهامة</span>
            </h1>
            
            <p className="text-xl md:text-3xl text-emerald-50/90 leading-relaxed font-medium max-w-3xl border-r-4 border-orange-500 pr-6">
              تمكين المزارع التهامي، تطوير سلاسل القيمة، وبناء منظومة تسويقية رائدة تعيد للأرض وهجها.
            </p>
            
            <div className="flex flex-wrap gap-6 pt-6">
              <Link to="/membership" className="px-12 py-6 bg-orange-500 text-white rounded-[2.5rem] font-black text-2xl hover:bg-orange-600 hover:-translate-y-1 transition-all shadow-[0_20px_40px_-10px_rgba(249,115,22,0.4)] flex items-center gap-4">
                طلب عضوية
                <i className="fa-solid fa-user-plus"></i>
              </Link>
              <Link to="/about" className="px-12 py-6 bg-white/5 backdrop-blur-md border border-white/20 text-white rounded-[2.5rem] font-black text-2xl hover:bg-white/10 transition-all flex items-center gap-4">
                اكتشف مسيرتنا
                <i className="fa-solid fa-arrow-left"></i>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Bottom curve decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-50 to-transparent"></div>
      </section>

      {/* Core Stats - Warm Palette */}
      <section className="relative z-20 -mt-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { n: "+500", l: "مزارع مستفيد", i: "fa-seedling", c: "bg-white text-emerald-900 border-b-8 border-emerald-500" },
            { n: "32", l: "مبادرة تنموية", i: "fa-rocket", c: "bg-orange-500 text-white shadow-orange-500/20 shadow-2xl" },
            { n: "100%", l: "شفافية مطلقة", i: "fa-shield-check", c: "bg-emerald-950 text-white" }
          ].map((s, i) => (
            <div key={i} className={`${s.c} p-12 rounded-[4rem] shadow-xl card-hover flex flex-col items-center text-center`}>
              <div className={`w-20 h-20 rounded-3xl flex items-center justify-center text-3xl mb-8 ${i === 1 ? 'bg-white/20' : 'bg-orange-50 text-orange-600'}`}>
                <i className={`fa-solid ${s.i}`}></i>
              </div>
              <h3 className="text-5xl font-black mb-2 tracking-tighter">{s.n}</h3>
              <p className="text-sm font-black opacity-80 uppercase tracking-widest">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pillars Section - Vibrant & Professional */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            title="ركائز مسيرة العطاء" 
            subtitle="استراتيجية متكاملة تهدف إلى تعظيم القيمة المضافة لكل حبة عرق في أرض تهامة." 
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
            {[
              { t: 'التسويق الذكي', d: 'فتح آفاق تسويقية جديدة محلياً وعالمياً تضمن وصول خيرات تهامة لكل مائدة وبسعر عادل.', i: 'fa-chart-pie', color: 'emerald' },
              { t: 'جودة السلسلة', d: 'اعتماد أعلى معايير الفرز والتعبئة والتصنيع لرفع تنافسية المنتج المحلي في الأسواق.', i: 'fa-gears', color: 'orange' },
              { t: 'تمكين المزارع', d: 'دعم فني ولوجستي مستمر يربط المزارع بأحدث التقنيات لزيادة الكفاءة والاستدامة.', i: 'fa-leaf', color: 'emerald' }
            ].map((p, i) => (
              <div key={i} className="bg-white p-14 rounded-[4.5rem] border border-stone-200 shadow-sm card-hover group text-center relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 ${p.color === 'emerald' ? 'bg-emerald-50' : 'bg-orange-50'} rounded-bl-[4rem] -mr-16 -mt-16 group-hover:scale-110 transition-transform`}></div>
                <div className={`w-24 h-24 rounded-[2rem] flex items-center justify-center text-4xl mx-auto mb-10 shadow-lg transition-all duration-500 ${
                  p.color === 'emerald' ? 'bg-emerald-900 text-white group-hover:bg-emerald-600' : 'bg-orange-500 text-white group-hover:bg-orange-600'
                }`}>
                  <i className={`fa-solid ${p.i}`}></i>
                </div>
                <h4 className="text-3xl font-black text-emerald-950 mb-6">{p.t}</h4>
                <p className="text-slate-500 text-xl leading-relaxed font-medium">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Vibrant Sunset Theme (Based on User's Image) */}
      <section className="py-24 bg-gradient-to-r from-orange-600 to-orange-500 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-900/20 rounded-full blur-[100px] -ml-48 -mb-48"></div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 text-white">
          <h2 className="text-5xl md:text-8xl font-black mb-10 leading-none tracking-tighter">
            شراكة تعمر <br /> الأرض <br /> وتسند الإنسان
          </h2>
          <p className="text-2xl md:text-3xl text-white/90 mb-16 font-black leading-relaxed max-w-2xl mx-auto">
            انضمامك اليوم هو بذرة خير ستثمر في حياة مئات الأسر المنتجة في تهامة الوفاء.
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <Link 
              to="/membership" 
              className="w-full max-w-md py-8 bg-white text-orange-600 rounded-full font-black text-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:bg-orange-50 transition-all active:scale-95"
            >
              سجل كعضو مساهم
            </Link>
            <Link 
              to="/donate" 
              className="w-full max-w-[320px] py-6 bg-emerald-950 text-white rounded-full font-black text-2xl shadow-xl hover:bg-emerald-900 transition-all active:scale-95"
            >
              تبرع للمشاريع
            </Link>
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader 
            title="من الميدان" 
            subtitle="إنجازاتنا التي نفخر بها في خدمة المجتمع التهامي."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ACHIEVEMENTS.map((item) => (
              <div key={item.id} className="bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 flex flex-col md:flex-row h-full">
                <div className="md:w-1/2 h-64 md:h-full overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="md:w-1/2 p-10 flex flex-col justify-center">
                  <span className="text-orange-600 text-xs font-black uppercase mb-3 block tracking-widest">{item.category}</span>
                  <h3 className="text-2xl font-black text-emerald-950 mb-4">{item.title}</h3>
                  <p className="text-slate-500 mb-6 font-medium">{item.description}</p>
                  <Link to="/achievements" className="text-emerald-700 font-bold flex items-center gap-2 hover:gap-4 transition-all">
                    التفاصيل <i className="fa-solid fa-arrow-left"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
