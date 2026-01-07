
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { ACHIEVEMENTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <div className="py-16 bg-white pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader 
          title="سجل الإنجازات" 
          subtitle="خطواتنا الواثقة في ميدان العمل التنموي والزراعي."
        />

        <div className="grid grid-cols-1 gap-16 mt-12">
          {ACHIEVEMENTS.map((project, idx) => (
            <div key={project.id} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 items-center`}>
              <div className="lg:w-1/2 w-full h-72 md:h-96 overflow-hidden rounded-2xl shadow-md">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="lg:w-1/2 space-y-6">
                <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 font-bold text-xs rounded-full">
                  {project.category}
                </span>
                <h3 className="text-3xl font-black text-emerald-950 leading-tight">
                  {project.title}
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                  {project.description}
                </p>
                <div className="pt-4">
                    <button className="px-6 py-3 bg-emerald-800 text-white rounded-lg font-bold hover:bg-emerald-900 transition-colors flex items-center gap-2">
                        عرض التفاصيل
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Future Vision Section */}
        <div className="mt-24 bg-emerald-900 rounded-3xl p-10 md:p-16 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-black mb-6">رؤيتنا للمستقبل</h3>
            <p className="text-xl text-emerald-100 font-medium leading-relaxed italic mb-8">
              "نحن لا نتوقف عند الإنجاز، بل نعتبره نقطة انطلاق نحو مشاريع أكبر تشمل الطاقة المتجددة، التصنيع الغذائي، وفتح قنوات تصدير عالمية للمزارع التهامي."
            </p>
            <div className="h-1 w-16 bg-orange-500 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
