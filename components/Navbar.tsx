
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS, LOGO_ICON, CONTACT_INFO } from '../constants.tsx';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    setIsOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500">
      {/* Top Bar - Solid Dark Green */}
      <div className={`bg-emerald-950 text-white/70 py-1.5 px-6 transition-all duration-500 border-b border-white/5 ${scrolled ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] md:text-xs font-bold uppercase tracking-widest">
          <div className="flex items-center gap-6">
            <a href={`tel:${CONTACT_INFO.phones[0]}`} className="hover:text-amber-400 transition-colors flex items-center gap-2">
              <i className="fa-solid fa-phone text-amber-500 text-[10px]"></i>
              <span className="font-mono">{CONTACT_INFO.phones[0]}</span>
            </a>
            <a href={`mailto:${CONTACT_INFO.email}`} className="hidden md:flex hover:text-amber-400 transition-colors items-center gap-2">
              <i className="fa-solid fa-envelope text-amber-500 text-[10px]"></i>
              <span>{CONTACT_INFO.email}</span>
            </a>
          </div>
          <div className="flex gap-4">
            <a href={CONTACT_INFO.social.facebook} target="_blank" className="hover:text-amber-400 transition-all hover:scale-110"><i className="fa-brands fa-facebook-f"></i></a>
            <a href={CONTACT_INFO.social.twitter} target="_blank" className="hover:text-amber-400 transition-all hover:scale-110"><i className="fa-brands fa-x-twitter"></i></a>
            <a href={CONTACT_INFO.social.whatsapp} target="_blank" className="hover:text-amber-400 transition-all hover:scale-110"><i className="fa-brands fa-whatsapp"></i></a>
          </div>
        </div>
      </div>

      {/* Main Navigation - Solid White Background */}
      <nav className={`mx-auto transition-all duration-500 px-4 md:px-8 ${
        scrolled 
          ? 'max-w-6xl mt-4' 
          : 'max-w-full mt-0'
      }`}>
        <div className={`relative flex justify-between items-center transition-all duration-500 bg-white py-4 px-6 shadow-[0_10px_30px_rgba(6,78,59,0.08)] border-b border-emerald-50 ${
          scrolled 
            ? 'rounded-[2rem] py-3' 
            : 'py-5'
        }`}>
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 md:gap-4 group">
            <div className={`transition-all duration-500 flex items-center justify-center rounded-2xl shadow-lg group-hover:rotate-6 w-10 h-10 md:w-14 md:h-14 bg-emerald-900 text-white text-xl md:text-2xl`}>
              <i className={LOGO_ICON}></i>
            </div>
            <div className="flex flex-col">
              <h1 className="font-black tracking-tighter leading-none text-emerald-950 text-base md:text-xl">
                جمعية عطاء تهامة
              </h1>
              <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] mt-1 text-emerald-600">
                التعاونية التسويقية
              </span>
            </div>
          </Link>

          {/* Desktop Links - Always Emerald Text */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-black transition-all group text-emerald-950`}
              >
                <span className={`relative z-10 transition-colors ${
                  location.pathname === link.path ? 'text-emerald-600' : 'group-hover:text-amber-600'
                }`}>
                  {link.name}
                </span>
                {location.pathname === link.path && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-emerald-600 transition-all"></span>
                )}
              </Link>
            ))}
            
            <div className="mr-6 border-r border-slate-200 pr-6">
              <Link
                to="/donate"
                className="relative overflow-hidden px-8 py-3.5 rounded-2xl font-black text-sm transition-all shadow-xl hover:scale-105 active:scale-95 group flex items-center gap-2 bg-emerald-900 text-white hover:bg-emerald-800"
              >
                <i className="fa-solid fa-heart-pulse animate-pulse"></i>
                تبرع الآن
              </Link>
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-3">
            <Link 
              to="/donate" 
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all bg-emerald-900 text-white shadow-lg"
            >
              <i className="fa-solid fa-hand-holding-heart"></i>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-12 h-12 flex flex-col items-center justify-center rounded-xl transition-all duration-300 bg-emerald-50 text-emerald-900 border border-emerald-100"
            >
              <div className="relative w-6 h-5">
                <span className={`absolute block w-full h-0.5 bg-current transition-all duration-300 rounded-full ${isOpen ? 'rotate-45 top-2' : 'top-0'}`}></span>
                <span className={`absolute block w-full h-0.5 bg-current transition-all duration-300 rounded-full top-2 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute block w-full h-0.5 bg-current transition-all duration-300 rounded-full ${isOpen ? '-rotate-45 top-2' : 'top-4'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Modern Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 z-[150] transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
        isOpen ? 'visible opacity-100' : 'invisible opacity-0'
      }`}>
        <div className="absolute inset-0 bg-emerald-950/95 backdrop-blur-2xl"></div>
        <div className="relative h-full flex flex-col pt-32 pb-10 px-6 overflow-y-auto">
          <div className={`flex flex-col items-center mb-12 transition-all duration-700 delay-100 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-emerald-950 text-4xl shadow-2xl mb-4">
              <i className={LOGO_ICON}></i>
            </div>
            <h2 className="text-white text-2xl font-black">جمعية عطاء تهامة</h2>
            <div className="h-1 w-12 bg-amber-500 rounded-full mt-2"></div>
          </div>

          <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto w-full">
            {NAV_LINKS.map((link, idx) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex flex-col items-center justify-center p-6 rounded-[2rem] border transition-all duration-500 group ${
                  location.pathname === link.path 
                    ? 'bg-amber-500 border-amber-400 text-white shadow-xl' 
                    : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                } ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                style={{ transitionDelay: `${idx * 50 + 200}ms` }}
              >
                <span className={`text-3xl mb-3 transition-transform duration-500 group-hover:scale-110 ${
                  location.pathname === link.path ? 'text-white' : 'text-amber-500'
                }`}>
                  {link.icon}
                </span>
                <span className="text-sm font-black">{link.name}</span>
              </Link>
            ))}
          </div>

          <div className={`mt-auto pt-10 flex flex-col items-center transition-all duration-700 delay-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-4">تواصل معنا مباشرة</p>
            <div className="flex gap-4">
              <a href={CONTACT_INFO.social.facebook} target="_blank" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white text-xl hover:bg-amber-500 transition-all"><i className="fa-brands fa-facebook-f"></i></a>
              <a href={`tel:${CONTACT_INFO.phones[0]}`} className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white text-xl hover:bg-amber-500 transition-all"><i className="fa-solid fa-phone"></i></a>
              <a href={CONTACT_INFO.social.whatsapp} target="_blank" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white text-xl hover:bg-emerald-500 transition-all"><i className="fa-brands fa-whatsapp"></i></a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
