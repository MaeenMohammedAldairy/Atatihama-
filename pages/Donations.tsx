
import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader.tsx';
import { BANK_ACCOUNTS, DONATION_DETAILS, CONTACT_INFO } from '../constants.tsx';

const Donations: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="section-padding bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          title="المساهمة والتبرع" 
          subtitle="بذرتك اليوم هي غرس الخير في مستقبل تهامة، تبرعك يدعم استمرارية مشاريعنا التنموية."
        />

        <div className="max-w-5xl mx-auto mt-12 space-y-12">
          {/* Donation Logic Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-emerald-900 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden flex flex-col justify-between">
              <div className="relative z-10">
                <h3 className="text-3xl font-black mb-4">العضوية المساهمة</h3>
                <p className="text-emerald-100/70 font-medium leading-relaxed">كن شريكاً في اتخاذ القرار وتطوير الجمعية من خلال امتلاك أسهم رسمية.</p>
              </div>
              <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-8">
                <div>
                  <span className="block text-amber-400 text-[10px] font-black uppercase">إجمالي السهم</span>
                  <span className="text-4xl font-black">{DONATION_DETAILS.totalPerShare} <span className="text-lg">ر.ي</span></span>
                </div>
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                  <i className="fa-solid fa-gem text-amber-500"></i>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 rounded-[3rem] p-10 border border-emerald-100 flex flex-col justify-between">
               <div className="space-y-4">
                  <h3 className="text-3xl font-black text-emerald-950">تبرع عام</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">ساهم بأي مبلغ لدعم أنشطة الجمعية الميدانية، والتدريب، والحملات التسويقية.</p>
               </div>
               <div className="mt-10 bg-white p-6 rounded-2xl border border-emerald-100 flex items-center justify-between">
                  <span className="font-black text-emerald-900">سندات تبرع معتمدة</span>
                  <i className="fa-solid fa-hand-holding-heart text-emerald-600 text-2xl"></i>
               </div>
            </div>
          </div>

          {/* Banks Grid */}
          <div className="space-y-8">
            <h4 className="text-2xl font-black text-emerald-950 border-r-4 border-amber-500 pr-4">الحسابات البنكية المعتمدة</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {BANK_ACCOUNTS.map((acc, i) => (
                <div key={i} className="bg-white border border-emerald-100 rounded-[2.5rem] p-8 shadow-sm card-hover flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-700 text-xl mb-6 font-black uppercase">
                     {acc.bankName.substring(0, 2)}
                  </div>
                  <span className="text-slate-400 text-xs font-black uppercase tracking-widest mb-2">{acc.bankName}</span>
                  <p className="text-3xl font-black text-emerald-950 font-mono mb-8 tracking-tighter">{acc.accountNumber}</p>
                  
                  <button 
                    onClick={() => copy(acc.accountNumber)}
                    className={`w-full py-4 rounded-2xl font-black transition-all border-2 ${
                      copied === acc.accountNumber 
                        ? 'bg-emerald-600 border-emerald-600 text-white' 
                        : 'bg-emerald-50 border-emerald-100 text-emerald-900 hover:bg-emerald-900 hover:text-white'
                    }`}
                  >
                    {copied === acc.accountNumber ? 'تم نسخ الرقم' : 'نسخ رقم الحساب'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Final Action */}
          <div className="bg-emerald-50 rounded-[4rem] p-12 text-center border border-emerald-100">
             <div className="max-w-2xl mx-auto space-y-6">
               <h3 className="text-3xl font-black text-emerald-950">هل قمت بالتحويل؟</h3>
               <p className="text-slate-500 font-medium">يرجى إرسال صورة من إشعار التحويل عبر الواتساب لتأكيد مساهمتكم وإصدار سند رسمي باسمكم.</p>
               <a 
                href={CONTACT_INFO.social.whatsapp}
                target="_blank" 
                className="inline-flex items-center gap-4 px-12 py-5 bg-emerald-900 text-white rounded-[2rem] font-black text-xl hover:bg-emerald-800 transition-all shadow-xl"
               >
                 <i className="fa-brands fa-whatsapp text-2xl"></i> تأكيد عملية التحويل
               </a>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donations;