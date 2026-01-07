
import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const contactCards = [
    {
      title: 'المقر الرئيسي',
      content: CONTACT_INFO.address,
      link: CONTACT_INFO.mapsLink,
      icon: 'fa-location-dot',
      color: 'bg-emerald-600',
      actionText: 'عرض الاتجاهات'
    },
    {
      title: 'البريد الإلكتروني',
      content: CONTACT_INFO.email,
      link: `mailto:${CONTACT_INFO.email}`,
      icon: 'fa-envelope-open-text',
      color: 'bg-blue-600',
      actionText: 'راسلنا الآن'
    }
  ];

  return (
    <div className="relative py-24 bg-slate-50 overflow-hidden">
      {/* Decorative Background Patterns */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-100/30 rounded-full blur-[120px] -mr-96 -mt-96 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-100/20 rounded-full blur-[100px] -ml-64 -mb-64 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader 
          title="تواصل معنا" 
          subtitle="نحن هنا للاستماع لآرائكم وتسهيل انضمامكم لمسيرة العطاء والنهوض بالمنتج المحلي."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16">
          
          {/* Right Side: Contact Hub */}
          <div className="lg:col-span-5 space-y-8 order-2 lg:order-1">
            <div className="grid grid-cols-1 gap-6">
              {contactCards.map((card, idx) => (
                <a 
                  key={idx} 
                  href={card.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-start gap-6"
                >
                  <div className={`w-16 h-16 shrink-0 rounded-2xl ${card.color} text-white flex items-center justify-center text-2xl shadow-lg group-hover:rotate-6 transition-transform`}>
                    <i className={`fa-solid ${card.icon}`}></i>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-black text-slate-900 mb-1">{card.title}</h4>
                    <p className="text-slate-500 font-bold text-sm leading-relaxed mb-3">{card.content}</p>
                    <span className="text-emerald-700 font-black text-xs uppercase tracking-widest flex items-center gap-2 group-hover:text-orange-500 transition-colors">
                      {card.actionText} <i className="fa-solid fa-chevron-left text-[10px]"></i>
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Phone Numbers Card - Grid Style */}
            <div className="bg-emerald-900 rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-orange-500"></div>
              <h4 className="text-xl font-black mb-6 flex items-center gap-3">
                <i className="fa-solid fa-phone-volume text-orange-400"></i>
                أرقام التواصل المعتمدة
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CONTACT_INFO.phones.map((phone, i) => (
                  <a 
                    key={i} 
                    href={`tel:${phone}`} 
                    className="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-5 py-4 rounded-2xl transition-all border border-white/5 font-mono font-black text-lg"
                  >
                    <i className="fa-solid fa-mobile-screen-button text-orange-500"></i>
                    {phone}
                  </a>
                ))}
              </div>
              <a 
                href={CONTACT_INFO.social.whatsapp}
                target="_blank"
                className="mt-8 w-full py-5 bg-emerald-500 hover:bg-emerald-400 text-white rounded-2xl font-black text-center flex items-center justify-center gap-3 shadow-xl transition-all active:scale-95"
              >
                <i className="fa-brands fa-whatsapp text-2xl"></i>
                راسلنا مباشرة عبر واتساب
              </a>
            </div>

            {/* Hours & Availability */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center text-xl">
                  <i className="fa-solid fa-clock"></i>
                </div>
                <div>
                  <h5 className="font-black text-slate-900">ساعات العمل الرسمية</h5>
                  <p className="text-xs text-slate-500 font-bold">من السبت إلى الخميس: 8ص - 2م</p>
                </div>
              </div>
              <div className="hidden sm:block">
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-black uppercase">متاح الآن</span>
              </div>
            </div>
          </div>

          {/* Left Side: Contact Form */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="bg-white rounded-[3.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden relative">
              {submitted ? (
                <div className="p-12 md:p-24 text-center animate-fade-in flex flex-col items-center">
                  <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-8 text-4xl shadow-inner">
                    <i className="fa-solid fa-check-double"></i>
                  </div>
                  <h3 className="text-3xl font-black text-emerald-950 mb-4">تم الإرسال بنجاح!</h3>
                  <p className="text-slate-600 text-xl font-medium mb-10 max-w-sm mx-auto leading-relaxed">
                    شكراً لتواصلك معنا. سيقوم فريق خدمة العملاء بمراجعة استفسارك والرد عليك في أقرب وقت ممكن.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="px-12 py-5 bg-emerald-900 text-white rounded-2xl font-black text-lg hover:bg-emerald-800 transition-all shadow-xl active:scale-95"
                  >
                    إرسال رسالة جديدة
                  </button>
                </div>
              ) : (
                <div className="p-10 md:p-16">
                  <div className="mb-12">
                    <h3 className="text-3xl font-black text-emerald-950 mb-3 flex items-center gap-4">
                      <span className="w-1.5 h-10 bg-orange-500 rounded-full"></span>
                      أرسل لنا رسالة
                    </h3>
                    <p className="text-slate-500 font-bold text-base">سنكون سعداء بالرد على كافة تساؤلاتكم ومقترحاتكم.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest mr-4 mb-2 block">الاسم بالكامل</label>
                        <div className="relative group">
                          <i className="fa-solid fa-user absolute right-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-emerald-500 transition-colors"></i>
                          <input 
                            type="text" required
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full pr-12 pl-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:bg-white focus:border-emerald-500 focus:outline-none transition-all text-lg font-bold"
                            placeholder="أدخل اسمك الكريم"
                          />
                        </div>
                      </div>
                      <div className="relative">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest mr-4 mb-2 block">البريد الإلكتروني</label>
                        <div className="relative group">
                          <i className="fa-solid fa-at absolute right-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-emerald-500 transition-colors"></i>
                          <input 
                            type="email" required
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full pr-12 pl-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:bg-white focus:border-emerald-500 focus:outline-none transition-all text-lg font-bold font-mono"
                            placeholder="mail@example.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest mr-4 mb-2 block">موضوع الرسالة</label>
                      <div className="relative group">
                        <i className="fa-solid fa-tag absolute right-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-emerald-500 transition-colors"></i>
                        <input 
                          type="text" required
                          value={formData.subject}
                          onChange={(e) => setFormData({...formData, subject: e.target.value})}
                          className="w-full pr-12 pl-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:bg-white focus:border-emerald-500 focus:outline-none transition-all text-lg font-bold"
                          placeholder="مثلاً: استفسار عن العضوية"
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest mr-4 mb-2 block">تفاصيل الرسالة</label>
                      <div className="relative group">
                        <textarea 
                          rows={4} required
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          className="w-full px-6 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:bg-white focus:border-emerald-500 focus:outline-none transition-all resize-none text-lg font-bold"
                          placeholder="اكتب رسالتك هنا بالتفصيل..."
                        ></textarea>
                      </div>
                    </div>

                    <button 
                      type="submit" 
                      disabled={loading}
                      className={`w-full py-6 bg-emerald-700 text-white font-black rounded-2xl text-xl hover:bg-emerald-800 transition-all shadow-xl shadow-emerald-700/20 flex items-center justify-center gap-4 ${loading ? 'opacity-80 cursor-not-allowed' : 'active:scale-95'}`}
                    >
                      {loading ? (
                        <i className="fa-solid fa-circle-notch animate-spin"></i>
                      ) : (
                        <>
                          إرسال الرسالة الآن
                          <i className="fa-solid fa-paper-plane text-xl opacity-70"></i>
                        </>
                      )}
                    </button>
                    
                    <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest pt-4">نحن نحترم خصوصيتك ولن يتم مشاركة بياناتك مع طرف ثالث</p>
                  </form>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
