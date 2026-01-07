
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader.tsx';
import { 
  UserPlusIcon, 
  CheckBadgeIcon, 
  UserIcon,
  CheckCircleIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

const Membership: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    idNumber: '',
    phone: '',
    address: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  return (
    <div className="section-padding bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {!submitted ? (
          <>
            <SectionHeader 
              title="طلب انضمام" 
              subtitle="انضم إلى عائلة عطاء تهامة وكن جزءاً من قوة تعاونية تبني المستقبل بسواعد منتجيها."
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16 max-w-6xl mx-auto">
              {/* Info Sidebar - Warm Palette */}
              <div className="lg:col-span-4 order-2 lg:order-1">
                <div className="bg-orange-600 p-12 rounded-[4rem] text-white shadow-2xl relative overflow-hidden h-full">
                   <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-16 -mt-16"></div>
                   <h4 className="text-3xl font-black mb-10 border-r-4 border-white pr-5">لماذا الانضمام؟</h4>
                   <div className="space-y-10">
                     {[
                       { t: 'سيادة المنتج', d: 'حماية منتجاتك من التقلبات وضمان حصتك في الأسواق الرئيسية.' },
                       { t: 'مدخلات تعاونية', d: 'بذور، أسمدة، ومعدات بأسعار مدعومة لخفض تكلفة الإنتاج.' },
                       { t: 'تمكين وتدريب', d: 'برامج متخصصة لرفع جودة المحصول ومواكبة طرق الري الحديثة.' }
                     ].map((item, i) => (
                       <div key={i} className="flex gap-5">
                         <div className="w-12 h-12 shrink-0 bg-white/20 rounded-[1.2rem] flex items-center justify-center text-white border border-white/20">
                           <CheckCircleIcon className="w-7 h-7" />
                         </div>
                         <div>
                           <p className="font-black text-xl text-white mb-2">{item.t}</p>
                           <p className="text-sm text-orange-50 font-medium leading-relaxed">{item.d}</p>
                         </div>
                       </div>
                     ))}
                   </div>
                   
                   <div className="mt-16 pt-10 border-t border-white/10">
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-200">الحديدة، اليمن</p>
                   </div>
                </div>
              </div>

              {/* Form - Clean & Vibrant Focus */}
              <div className="lg:col-span-8 order-1 lg:order-2">
                <div className="bg-white p-12 md:p-16 rounded-[4.5rem] border border-stone-200 shadow-sm relative overflow-hidden">
                  <div className="mb-12">
                    <h3 className="text-3xl font-black text-emerald-950 flex items-center gap-4">
                      <span className="w-2 h-8 bg-orange-500 rounded-full"></span>
                      بيانات العضو الجديد
                    </h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-8">
                      <div className="space-y-3">
                        <label className="text-sm font-black text-slate-500 mr-5 block italic">الاسم الكامل كما هو في الهوية</label>
                        <div className="relative group">
                          <UserIcon className="w-7 h-7 absolute right-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-orange-500 transition-colors" />
                          <input 
                            type="text" required
                            className="w-full pr-16 pl-8 py-6 bg-stone-50 border border-stone-100 rounded-[2rem] focus:ring-8 focus:ring-orange-500/5 focus:bg-white focus:border-orange-500 focus:outline-none transition-all text-xl font-bold"
                            placeholder="الاسم الرباعي واللقب"
                            value={formData.fullName}
                            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="text-sm font-black text-slate-500 mr-5 block italic">رقم الجوال النشط</label>
                          <input 
                            type="tel" required
                            className="w-full px-8 py-6 bg-stone-50 border border-stone-100 rounded-[2rem] focus:outline-none focus:border-orange-500 focus:bg-white focus:ring-8 focus:ring-orange-500/5 transition-all text-xl font-bold font-mono"
                            placeholder="77XXXXXXX"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          />
                        </div>
                        <div className="space-y-3">
                          <label className="text-sm font-black text-slate-500 mr-5 block italic">رقم البطاقة الشخصية</label>
                          <input 
                            type="text" required
                            className="w-full px-8 py-6 bg-stone-50 border border-stone-100 rounded-[2rem] focus:outline-none focus:border-orange-500 focus:bg-white focus:ring-8 focus:ring-orange-500/5 transition-all text-xl font-bold"
                            placeholder="أدخل الأرقام فقط"
                            value={formData.idNumber}
                            onChange={(e) => setFormData({...formData, idNumber: e.target.value})}
                          />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label className="text-sm font-black text-slate-500 mr-5 block italic">محل الإقامة (المديرية والقرية)</label>
                        <textarea 
                          required rows={3}
                          className="w-full px-8 py-6 bg-stone-50 border border-stone-100 rounded-[2rem] focus:outline-none focus:border-orange-500 focus:bg-white focus:ring-8 focus:ring-orange-500/5 transition-all text-xl font-bold resize-none"
                          placeholder="مثال: باجل - قرية..."
                          value={formData.address}
                          onChange={(e) => setFormData({...formData, address: e.target.value})}
                        ></textarea>
                      </div>
                    </div>

                    <button 
                      type="submit" disabled={loading}
                      className="w-full py-7 bg-emerald-950 text-white rounded-[2.5rem] font-black text-2xl hover:bg-orange-500 transition-all shadow-2xl flex items-center justify-center gap-5 disabled:opacity-50"
                    >
                      {loading ? 'جاري المعالجة...' : 'تأكيد طلب الانضمام'}
                      <UserPlusIcon className="w-8 h-8" />
                    </button>
                    
                    <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest pt-4">سيتم التواصل معك هاتفياً لإكمال إجراءات التوثيق</p>
                  </form>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="max-w-3xl mx-auto text-center py-24 animate-fade-in bg-white rounded-[5rem] border border-orange-100 shadow-2xl px-10">
             <div className="w-32 h-32 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-12 shadow-inner">
                <CheckBadgeIcon className="w-20 h-20" />
             </div>
             <h2 className="text-5xl font-black text-emerald-950 mb-8 tracking-tighter">أهلاً بك في عطاء تهامة!</h2>
             <p className="text-2xl text-slate-500 font-medium leading-relaxed mb-16 px-6">
               تم استلام طلبك بنجاح. أنت الآن خطوت أول خطوة في مسيرة تعاونية مباركة. سيقوم المختصون لدينا بالتواصل معك قريباً.
             </p>
             <Link to="/" className="inline-flex items-center gap-4 px-14 py-6 bg-emerald-950 text-white rounded-[2.5rem] font-black text-2xl shadow-xl hover:bg-orange-500 transition-all">
                العودة للرئيسية
                <ArrowRightIcon className="w-7 h-7 rotate-180" />
             </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Membership;
