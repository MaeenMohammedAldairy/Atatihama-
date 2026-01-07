
import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS, CONTACT_INFO, LOGO_ICON } from '../constants.tsx';

const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-950 text-white pt-20 pb-8 border-t border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* About Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-emerald-900 text-4xl shadow-xl">
                <i className={LOGO_ICON}></i>
              </div>
              <div>
                <h3 className="text-2xl font-black leading-tight">جمعية عطاء تهامة</h3>
                <span className="text-xs text-amber-500 block font-black uppercase tracking-wider">التعاونية التسويقية</span>
              </div>
            </div>
            <p className="text-emerald-100 text-lg leading-relaxed font-medium">
              كيان تعاوني رائد يهدف للنهوض بالمنتج المحلي وتطوير سلاسل القيمة الزراعية والسمكية في إقليم تهامة.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-black mb-8 border-r-4 border-amber-500 pr-4">روابط الوصول</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-emerald-100 hover:text-amber-400 transition-colors font-bold text-lg">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xl font-black mb-8 border-r-4 border-amber-500 pr-4">بيانات التواصل</h4>
            <ul className="space-y-6 text-emerald-100">
              <li className="flex gap-4 items-start">
                <span className="text-amber-500 font-black">العنوان:</span>
                <a href={CONTACT_INFO.mapsLink} target="_blank" className="text-sm font-medium leading-relaxed hover:text-amber-400 transition-colors">
                  {CONTACT_INFO.address}
                </a>
              </li>
              <li className="flex gap-4">
                <span className="text-amber-500 font-black">البريد:</span>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm font-medium hover:underline">{CONTACT_INFO.email}</a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xl font-black mb-8 border-r-4 border-amber-500 pr-4">تابع مسيرتنا</h4>
            <div className="flex gap-4">
              {Object.keys(CONTACT_INFO.social).map((platform) => (
                <a
                  key={platform}
                  href={CONTACT_INFO.social[platform as keyof typeof CONTACT_INFO.social]}
                  target="_blank"
                  className="w-12 h-12 bg-emerald-900 border border-white/5 rounded-2xl flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all duration-300 shadow-lg"
                >
                  <i className={`fa-brands fa-${platform === 'twitter' ? 'x-twitter' : platform} text-lg`}></i>
                </a>
              ))}
            </div>
            <div className="mt-10">
              <Link to="/donate" className="inline-block px-10 py-4 bg-amber-500 text-white font-black rounded-2xl hover:bg-amber-600 transition shadow-xl text-lg">
                تبرع للجمعية
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 text-center">
          <p className="text-emerald-400/60 text-sm font-bold">
            © {new Date().getFullYear()} جمعية عطاء تهامة التعاونية (ATMCA). جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;