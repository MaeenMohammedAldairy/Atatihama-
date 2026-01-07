
import React from 'react';
import { Achievement, Goal, NewsItem, BankAccount } from './types.ts';

/**
 * الشعار الجديد: عبارة عن أيقونة FontAwesome مدمجة في حاوية بصرية
 */
export const LOGO_ICON = "fa-solid fa-wheat-awn";

export const NAV_LINKS = [
  { name: 'الرئيسية', path: '/', icon: <i className="fa-solid fa-house-chimney-window"></i> },
  { name: 'عن الجمعية', path: '/about', icon: <i className="fa-solid fa-hands-holding-child"></i> },
  { name: 'أهدافنا', path: '/goals', icon: <i className="fa-solid fa-mountain-sun"></i> },
  { name: 'طلب عضوية', path: '/membership', icon: <i className="fa-solid fa-id-card-clip"></i> },
  { name: 'إنجازاتنا', path: '/achievements', icon: <i className="fa-solid fa-award"></i> },
  { name: 'تبرع لنا', path: '/donate', icon: <i className="fa-solid fa-hand-holding-heart"></i> },
  { name: 'تواصل معنا', path: '/contact', icon: <i className="fa-solid fa-envelope-open-text"></i> }
];

export const ESTABLISHMENT_TEXT = "تأسست جمعية عطاء تهامة التعاونية التسويقية متعددة الأغراض بموجب قانون رقم (39) للجمعيات والاتحادات التعاونية الصادر سنة 1998م. وذلك للنهوض بالمنتج المحلي وتطويره، بناءً على توجهات القيادة ومواكبةً لسلاسل القيمة في الإنتاج الزراعي والسمكي للمساهمة بتغطية الفجوة في حلقة التسويق.";

export const VISION = "مجتمع واعٍ معتز بهويته الإيمانية قادر على استغلال موارده وتسويق منتجاته بكل كفاءة لتحقيق تنمية مستدامة تساعده في الوصول إلى تحقيق الاكتفاء الذاتي للمجتمع والتصدير للمجتمعات الأخرى.";

export const MISSION = "تسعى الجمعية إلى تشجيع التوسع في الإنتاج من خلال فتح مجالات التسويق محلياً ودولياً، وتفعيل مبدأ الشراكة المجتمعية وتطوير الخبرات واستخدام الطرق والأساليب المبتكرة.";

export const VALUES = [
  { id: 1, text: "العمل وفق هدي الله.", icon: "fa-solid fa-mosque" },
  { id: 2, text: "استشعار الرقابة الإلهية.", icon: "fa-solid fa-eye" },
  { id: 3, text: "الأمانة والصدق والإخلاص.", icon: "fa-solid fa-shield-heart" },
  { id: 4, text: "مبدأ الشفافية المطلقة.", icon: "fa-solid fa-magnifying-glass-chart" },
  { id: 5, text: "الإحسان والعمل الطوعي.", icon: "fa-solid fa-hands-holding-heart" }
];

export const BOARD_MEMBERS = [
  { 
    name: "معين محمد", 
    role: "رئيس مجلس الإدارة", 
    image: "https://files.catbox.moe/0v26p5.jpg",
    bio: "قيادة الرؤية الاستراتيجية للجمعية وتعزيز الشراكات الوطنية."
  },
  { 
    name: "محمد المؤيد", 
    role: "مدير عام", 
    image: "https://files.catbox.moe/44s6q6.jpg",
    bio: "الإشراف المباشر على العمليات الإدارية وتحقيق الأهداف التشغيلية."
  },
  { 
    name: "علي عامر", 
    role: "مدير تنفيذي", 
    image: "https://i.pravatar.cc/300?u=ali-amer",
    bio: "إدارة التنفيذ الميداني للمشاريع وتطوير سلاسل القيمة الزراعية."
  }
];

export const GOALS: Goal[] = [
  { id: 1, title: 'تسويق المنتجات المحلية ومدخلاتها ووصولها لمزيد من المستهلكين.', icon: 'fa-solid fa-basket-shopping' },
  { id: 2, title: 'إنشاء أسواق جديدة، وتطوير الأسواق الحالية، للمنتج المحلي وتوسيع نطاقها.', icon: 'fa-solid fa-earth-americas' },
  { id: 3, title: 'إدخال المعدات والتقنيات الحديثة لمواكبة وتحفيز المنتجين.', icon: 'fa-solid fa-microchip' },
  { id: 4, title: 'خفض كلفة الإنتاج وتحسين جودة المنتجات المحلية للمنافسة دولياً.', icon: 'fa-solid fa-chart-line' },
  { id: 5, title: 'خفض كلفة التسويق للمنتجين وتحقيق أسعار مجزية والحد من الوسطاء.', icon: 'fa-solid fa-user-group' },
  { id: 6, title: 'توازن العرض والطلب بما يضمن الربح العادل للمنتجين والمستهلكين.', icon: 'fa-solid fa-scale-balanced' },
  { id: 7, title: 'دعم التنمية المستدامة والحفاظ على البيئة في مختلف قطاعات الإنتاج.', icon: 'fa-solid fa-leaf' },
  { id: 8, title: 'المساهمة في تطوير التنمية الاقتصادية والاجتماعية للوطن.', icon: 'fa-solid fa-landmark' },
  { id: 9, title: 'تحسين مستوى العمل والمعيشة لجميع أعضاء الجمعية.', icon: 'fa-solid fa-heart' },
  { id: 10, title: 'تحسين الدورة التسويقية عبر التوجيه وتعزيز العلامة التجارية.', icon: 'fa-solid fa-certificate' }
];

export const MISSIONS_LIST = [
  { text: "التسويق والبيع: إنشاء أسواق مركزية وتسويق المنتجات محلياً ودولياً.", icon: "fa-solid fa-store" },
  { text: "تحويل المنتجات إلى مواد خام للتصنيع الغذائي والدوائي والملبوسات.", icon: "fa-solid fa-industry" },
  { text: "جمع وفرز المنتجات وتصنيفها وتعديلها وتعبئتها وتغليفها بشكل جذاب.", icon: "fa-solid fa-box-open" },
  { text: "الترويج للمنتجات من خلال الحملات الإعلانية والمواقع الإلكترونية.", icon: "fa-solid fa-bullhorn" },
  { text: "إدارة العلامة التجارية وبناء ثقة المستهلكين.", icon: "fa-solid fa-award" },
  { text: "الخدمات اللوجستية: إدارة خدمات نقل وتخزين وتوزيع.", icon: "fa-solid fa-truck-fast" },
  { text: "التدريب والتوعية للمنتجين حول أفضل الممارسات.", icon: "fa-solid fa-chalkboard-user" },
  { text: "البحث والتطوير ودراسات السوق واحتياجات المستهلكين.", icon: "fa-solid fa-microscope" },
  { text: "الالتحاق مع الجمعيات التعاونية وتعزيز التكافل.", icon: "fa-solid fa-people-group" },
  { text: "الحد من فاتورة الاستيراد بالتنسيق مع الجهات المعنية.", icon: "fa-solid fa-file-invoice" },
  { text: "العلاقات العامة وبناء علاقات قوية مع الجهات الرسمية.", icon: "fa-solid fa-handshake" },
  { text: "إنشاء الكيانات التجارية والصناعية المتخصصة.", icon: "fa-solid fa-building-columns" },
  { text: "الاستثمار في المشاريع الاستثمارية لصالح الجمعية.", icon: "fa-solid fa-sack-dollar" },
  { text: "امتلاك المؤسسات والشركات التي تستدعي الحاجة لإنشائها.", icon: "fa-solid fa-briefcase" },
  { text: "استيراد المدخلات للمنتج المحلي من بذور وأسمدة ومعدات.", icon: "fa-solid fa-ship" },
  { text: "استخدام التقنيات الحديثة لزيادة الكفاءة والربحية.", icon: "fa-solid fa-robot" },
  { text: "الحث على تشجيع استخدام المنتجات المحلية ودعم المنتجين.", icon: "fa-solid fa-thumbs-up" }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 1,
    title: 'دعم المزارعين بالأدوات',
    description: 'توفير مستلزمات زراعية عالية الجودة لأكثر من 200 مزارع في منطقة الحديدة لزيادة الإنتاجية.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1000',
    category: 'مشاريع زراعية'
  },
  {
    id: 2,
    title: 'ورش عمل التسويق الحديث',
    description: 'تنظيم دورات تدريبية متخصصة في مجال الزراعة الحديثة وإدارة المشاريع الزراعية الربحية.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000',
    category: 'ورش تدريبية'
  }
];

export const NEWS: NewsItem[] = [
  {
    id: 1,
    title: 'إطلاق مشروع دعم المزارعين الشباب في الحديدة',
    date: 'يناير 2026',
    summary: 'مبادرة جديدة تهدف لتمكين الشباب من دخول القطاع الزراعي بأدوات حديثة.',
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=600'
  }
];

export const BANK_ACCOUNTS: BankAccount[] = [
  { bankName: 'كاك بنك (CAC Bank)', accountNumber: '1006286901' }
];

export const DONATION_DETAILS = {
  sharePrice: 5000,
  fees: 1000,
  totalPerShare: 6000
};

export const CONTACT_INFO = {
  address: 'الجمهورية اليمنية - محافظة الحديدة - الحي التجاري - شارع 26',
  mapsLink: 'https://www.google.com/maps/search/?api=1&query=جمعية+عطاء+تهامة+التعاونية+التسويقية+الحديدة+شارع+26',
  email: 'atatihama@gmail.com',
  phones: [
    '784172000',
    '717072000',
    '737322000'
  ],
  social: {
    facebook: 'https://www.facebook.com/share/1AmE7mCzNS/',
    twitter: 'https://x.com/AtaTihama_',
    instagram: 'https://www.instagram.com/atatihama?igsh=aWJlOGo4d2liMDZh',
    whatsapp: 'https://chat.whatsapp.com/IPjy9ADewWH1XRREy1VJ3t'
  }
};
