
import React, { useState, useEffect } from 'react';
import SectionHeader from '../components/SectionHeader';
import { NEWS } from '../constants';

const News: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play logic for Carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === NEWS.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === NEWS.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? NEWS.length - 1 : prev - 1));
  };

  return (
    <div className="py-24 bg-gray-50 min-h-screen pb-32">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader 
          title="الأخبار والفعاليات" 
          subtitle="ابقَ على اطلاع بأحدث الأنشطة والمستجدات في جمعية عطاء تهامة."
        />

        {/* Dynamic Carousel Section */}
        <div className="relative mb-24 group">
          <div className="overflow-hidden rounded-[4rem] shadow-3xl bg-emerald-900 aspect-[16/9] md:aspect-[21/9] relative">
            {NEWS.map((item, index) => (
              <div
                key={item.id}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                  index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
                }`}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover opacity-60 scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-900/40 to-transparent flex flex-col justify-end p-8 md:p-20">
                  <div className="max-w-3xl">
                    <span className="inline-flex items-center gap-2 px-4 py-1 bg-orange-500 text-white rounded-full text-xs font-black mb-6">
                      <i className="fa-solid fa-fire-flame-curved"></i>
                      خبر عاجل
                    </span>
                    <h3 className="text-3xl md:text-6xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
                      {item.title}
                    </h3>
                    <p className="text-emerald-50 text-xl md:text-2xl font-medium mb-8 line-clamp-2 max-w-2xl opacity-90">
                      {item.summary}
                    </p>
                    <div className="flex items-center gap-6">
                      <button className="px-8 py-4 bg-white text-emerald-900 rounded-2xl font-black text-lg hover:bg-emerald-50 transition-all shadow-xl">
                        التفاصيل كاملة
                      </button>
                      <span className="text-emerald-200 font-bold flex items-center gap-2">
                        <i className="fa-solid fa-calendar-day"></i>
                        {item.date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white flex items-center justify-center text-xl opacity-0 group-hover:opacity-100 transition-all hover:bg-white/30"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white flex items-center justify-center text-xl opacity-0 group-hover:opacity-100 transition-all hover:bg-white/30"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>

          {/* Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {NEWS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  idx === currentSlide ? 'w-12 bg-orange-500' : 'w-3 bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Regular News List */}
        <div className="space-y-12">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-grow bg-slate-200"></div>
            <h4 className="text-2xl font-black text-emerald-900 px-4">أرشيف الأخبار</h4>
            <div className="h-px flex-grow bg-slate-200"></div>
          </div>
          
          {NEWS.map((item) => (
            <article key={item.id} className="bg-white rounded-[3rem] shadow-sm overflow-hidden flex flex-col lg:flex-row hover:shadow-xl transition-all duration-300 border border-slate-100 group">
              <div className="lg:w-1/3 h-64 lg:h-auto relative overflow-hidden">
                <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="lg:w-2/3 p-8 lg:p-16 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-emerald-600 text-sm font-black mb-6">
                  <i className="fa-solid fa-calendar-check text-lg"></i>
                  <span>{item.date}</span>
                </div>
                <h3 className="text-2xl md:text-4xl font-black text-emerald-950 mb-6 leading-tight group-hover:text-emerald-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-lg md:text-xl mb-10 leading-relaxed font-medium">
                  {item.summary}
                </p>
                <div className="flex items-center justify-between border-t pt-8 border-slate-50">
                  <button className="text-emerald-700 font-black text-xl hover:text-orange-500 transition-all flex items-center gap-3">
                    متابعة القراءة
                    <i className="fa-solid fa-arrow-left"></i>
                  </button>
                  <div className="flex gap-4">
                    <button className="w-12 h-12 rounded-2xl bg-slate-50 text-slate-400 hover:bg-emerald-50 hover:text-emerald-600 transition-all" aria-label="Share">
                      <i className="fa-solid fa-share-nodes"></i>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-32 bg-emerald-900 rounded-[5rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-3xl">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-800 rounded-full -mr-64 -mt-64 opacity-30 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500 rounded-full -ml-32 -mb-32 opacity-20 blur-3xl"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="w-24 h-24 bg-white/10 rounded-[2.5rem] flex items-center justify-center text-4xl mx-auto mb-10 text-orange-400">
              <i className="fa-solid fa-paper-plane"></i>
            </div>
            <h3 className="text-4xl md:text-6xl font-black mb-8 leading-tight">اشترك في النشرة الإخبارية</h3>
            <p className="text-emerald-100/80 mb-12 text-xl md:text-2xl font-medium leading-relaxed">
              لا تفوت أي تحديث من عطاء تهامة. اشترك لتصلك آخر أخبارنا ومشاريعنا التنموية مباشرة عبر بريدك الإلكتروني.
            </p>
            <form className="max-w-2xl mx-auto flex flex-col md:flex-row gap-6" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="أدخل بريدك الإلكتروني" 
                className="flex-1 px-8 py-6 rounded-3xl text-emerald-950 focus:outline-none focus:ring-4 focus:ring-orange-500/30 text-xl font-bold border-none"
                required
              />
              <button 
                type="submit" 
                className="px-12 py-6 bg-orange-500 text-white font-black rounded-3xl hover:bg-orange-400 transition-all shadow-2xl shadow-orange-500/40 text-2xl"
              >
                اشترك الآن
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
