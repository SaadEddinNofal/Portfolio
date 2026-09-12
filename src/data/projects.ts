import type { LocaleString } from "@/lib/types";

export type ProjectLink = {
  label: string;
  url: string;
  kind: "github" | "live" | "gitlab";
};

export type Project = {
  id: string;
  index: string;
  title: LocaleString;
  short: LocaleString;
  description: LocaleString;
  role: LocaleString;
  company?: LocaleString;
  recognition?: LocaleString;
  highlights: LocaleString[];
  technologies: string[];
  architecture?: { stages: LocaleString[] };
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    id: "zesty",
    index: "01",
    title: { en: "Zesty — E-Commerce Platform", ar: "زستي — منصة تجارة إلكترونية" },
    short: {
      en: "nopCommerce customized for real business requirements",
      ar: "nopCommerce مُخصص وفق متطلبات أعمال حقيقية",
    },
    description: {
      en: "An e-commerce platform built with nopCommerce and customized for real business requirements in collaboration with Boulevard Middle East.",
      ar: "منصة تجارة إلكترونية مبنية على nopCommerce، جرى تخصيصها لمتطلبات أعمال حقيقية بالتعاون مع Boulevard Middle East.",
    },
    role: { en: "Software Engineer — Backend", ar: "مهندس برمجيات — الباك-إند" },
    company: { en: "Boulevard Middle East", ar: "Boulevard Middle East" },
    highlights: [
      {
        en: "Extended a large existing codebase instead of building from scratch",
        ar: "توسيع قاعدة كود كبيرة قائمة بدلاً من البناء من الصفر",
      },
      {
        en: "Backend customization across controllers, services, and views",
        ar: "تخصيص الباك-إند عبر المتحكمات والخدمات والواجهات",
      },
      {
        en: "nopCommerce plugin and theme integration",
        ar: "دمج الإضافات والقوالب في nopCommerce",
      },
      {
        en: "Translated business requirements into platform features",
        ar: "تحويل متطلبات الأعمال إلى ميزات فعلية في المنصة",
      },
      {
        en: "Resolved build and integration issues across the solution",
        ar: "معالجة مشاكل البناء والدمج عبر مشروع الحل بأكمله",
      },
    ],
    technologies: ["C#", ".NET", "nopCommerce", "ASP.NET MVC", "Razor"],
    links: [
      { label: "GitHub", url: "https://github.com/ahmedtabba/Zesty", kind: "github" },
    ],
  },
  {
    id: "assets",
    index: "02",
    title: { en: "Assets Management System", ar: "نظام إدارة الأصول" },
    short: {
      en: "Document archiving and asset management — architecture-first",
      ar: "أرشفة مستندات وإدارة أصول — بنية أولاً",
    },
    description: {
      en: "A modern backend-oriented system for electronic document archiving and asset management.",
      ar: "نظام حديث موجّه للباك-إند لأرشفة المستندات إلكترونيًا وإدارة الأصول.",
    },
    role: { en: "Backend Developer", ar: "مطوّر باك-إند" },
    highlights: [
      {
        en: "Clean Architecture with clear Domain, Application, and Infrastructure separation",
        ar: "Clean Architecture مع فصل واضح بين Domain و Application و Infrastructure",
      },
      {
        en: "RESTful APIs with Entity Framework Core and database modeling",
        ar: "واجهات RESTful مع Entity Framework Core ونمذجة قاعدة البيانات",
      },
      {
        en: "Authentication and authorization across the API",
        ar: "مصادقة وتفويض على مستوى الواجهات البرمجية",
      },
      {
        en: "Unit and integration testing for core behavior",
        ar: "اختبارات وحدة وتكامل للسلوك الأساسي",
      },
      {
        en: "Exception handling, validation, and API security",
        ar: "معالجة الأخطاء والتحقق من المدخلات وأمن الواجهات",
      },
      {
        en: "A structure built to stay maintainable and testable",
        ar: "بنية مُصممة لتبقى قابلة للصيانة والاختبار",
      },
    ],
    technologies: ["C#", "ASP.NET Core", "RESTful APIs", "Entity Framework Core", "Clean Architecture"],
    architecture: {
      stages: [
        { en: "API", ar: "واجهة API" },
        { en: "Application", ar: "التطبيق" },
        { en: "Domain", ar: "النطاق" },
        { en: "Infrastructure", ar: "البنية التحتية" },
        { en: "Database", ar: "قاعدة البيانات" },
      ],
    },
    links: [
      { label: "GitHub", url: "https://github.com/SaadEddinNofal/Assests-Management", kind: "github" },
    ],
  },
  {
    id: "orderit",
    index: "03",
    title: { en: "OrderIT — Food Ordering Platform", ar: "OrderIT — منصة طلب الطعام" },
    short: {
      en: "Restaurant order management with delivery tracking",
      ar: "إدارة طلبات المطاعم مع تتبّع التوصيل",
    },
    description: {
      en: "A web-based food ordering system designed to manage restaurant orders and deliver them to customer locations.",
      ar: "نظام طلب طعام عبر الويب مصمم لإدارة طلبات المطاعم وتوصيلها إلى مواقع العملاء.",
    },
    role: { en: "Full-Stack Developer", ar: "مطوّر Full-Stack" },
    highlights: [
      {
        en: "Full order management lifecycle",
        ar: "دورة كاملة لإدارة الطلبات",
      },
      {
        en: "Order tracking from kitchen to customer",
        ar: "تتبّع الطلب من المطبخ حتى وصوله للعميل",
      },
      {
        en: "User-friendly ordering interface",
        ar: "واجهة طلب سهلة الاستخدام",
      },
      {
        en: "Built following SOLID principles",
        ar: "مبني وفق مبادئ SOLID",
      },
      {
        en: "Unit testing for services",
        ar: "اختبارات وحدة للخدمات",
      },
    ],
    technologies: ["ASP.NET MVC", "C#", "SQL", "Bootstrap", "JavaScript", "HTML", "CSS"],
    links: [
      { label: "Live", url: "http://orderits.runasp.net/", kind: "live" },
      { label: "GitHub", url: "https://github.com/SaadEddinNofal/OrderIt", kind: "github" },
    ],
  },
  {
    id: "sella",
    index: "04",
    title: { en: "Sella — Healthcare Management System", ar: "Sella — نظام إدارة الرعاية الصحية" },
    short: {
      en: "Healthcare services platform developed with YaaCode",
      ar: "منصة خدمات صحية طُوِّرت مع YaaCode",
    },
    description: {
      en: "A service and management platform for hospitals, clinics, and pharmacies, developed with YaaCode.",
      ar: "منصة خدمات وإدارة للمستشفيات والعيادات والصيدليات، طُوِّرت مع YaaCode.",
    },
    role: { en: "Backend Developer", ar: "مطوّر باك-إند" },
    company: { en: "YaaCode", ar: "YaaCode" },
    highlights: [
      {
        en: "Commercial project developed with YaaCode",
        ar: "مشروع تجاري طُوِّر مع YaaCode",
      },
      {
        en: "Microservice and service-oriented architecture",
        ar: "بنية خدمات مصغّرة موجّهة نحو الخدمات",
      },
      {
        en: "Healthcare domain: hospitals, clinics, and pharmacies",
        ar: "نطاق الرعاية الصحية: مستشفيات وعيادات وصيدليات",
      },
      {
        en: "Built against real business requirements",
        ar: "مبني وفق متطلبات أعمال حقيقية",
      },
    ],
    technologies: ["ASP.NET", "C#", "Microservices"],
    links: [
      { label: "GitLab", url: "https://gitlab.com/yassermoghrabiah/sila_yaacode", kind: "gitlab" },
    ],
  },
  {
    id: "autonest",
    index: "05",
    title: { en: "AutoNest — Car Sales & Rental Platform", ar: "AutoNest — منصة بيع وتأجير السيارات" },
    short: {
      en: "Vehicle sales and rental platform — graduation project",
      ar: "منصة بيع وتأجير المركبات — مشروع تخرّج",
    },
    description: {
      en: "A platform for vehicle sales and rentals developed as a graduation project with a team.",
      ar: "منصة لبيع وتأجير المركبات طُوِّرت كمشروع تخرّج ضمن فريق عمل.",
    },
    role: { en: "Team Leader & Backend Developer", ar: "قائد فريق ومطوّر باك-إند" },
    recognition: {
      en: "Graduation project awarded 97/100 · JCI Damascus Certificate for Pioneering Projects in Syria",
      ar: "مشروع تخرّج حاصل على 97/100 · وشهادة JCI دمشق للمشاريع الرائدة في سوريا",
    },
    highlights: [
      {
        en: "Graduation project awarded 97/100",
        ar: "مشروع تخرّج حاصل على 97/100",
      },
      {
        en: "Vehicle filtering and customer order tracking",
        ar: "تصفية المركبات وتتبّع طلبات العملاء",
      },
      {
        en: "Smart suggestions to match buyers and sellers",
        ar: "اقتراحات ذكية لمطابقة البائع والمشتري",
      },
      {
        en: "Team leadership and system analysis",
        ar: "قيادة الفريق وتحليل النظام",
      },
      {
        en: "JCI Damascus Certificate for Pioneering Projects in Syria",
        ar: "شهادة JCI دمشق للمشاريع الرائدة في سوريا",
      },
    ],
    technologies: ["React", ".NET", "C#"],
    links: [
      { label: "GitHub", url: "https://github.com/samirajaj/autonest", kind: "github" },
    ],
  },
];

export function getProject(id: string) {
  return projects.find((p) => p.id === id);
}