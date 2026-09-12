import type { LocaleString } from "@/lib/types";

export type Achievement = {
  id: string;
  mark: string;
  title: LocaleString;
  desc: LocaleString;
};

export const achievements: Achievement[] = [
  {
    id: "grad",
    mark: "97",
    title: { en: "Graduation Project — 97/100", ar: "مشروع التخرّج — 97/100" },
    desc: {
      en: "AutoNest, a vehicle sales and rental platform, built with a team.",
      ar: "AutoNest، منصة بيع وتأجير المركبات، بُنيت ضمن فريق عمل.",
    },
  },
  {
    id: "top",
    mark: "01",
    title: {
      en: "Among the top students of the cohort",
      ar: "من الأوائل في دفعته",
    },
    desc: {
      en: "Computer Technical Institute — Damascus University.",
      ar: "المعهد التقاني للحاسوب — جامعة دمشق.",
    },
  },
  {
    id: "jci",
    mark: "★",
    title: {
      en: "JCI Damascus Certificate",
      ar: "شهادة JCI دمشق",
    },
    desc: {
      en: "Certificate for Pioneering Projects in Syria.",
      ar: "شهادة للمشاريع الرائدة في سوريا.",
    },
  },
  {
    id: "dtx",
    mark: "25",
    title: {
      en: "Best Project Award — 2025",
      ar: "جائزة أفضل مشروع — 2025",
    },
    desc: {
      en: "Faculty of Mechanical and Electrical Engineering, Damascus University, for DTX.",
      ar: "كلية الهندسة الميكانيكية والكهربائية، جامعة دمشق، عن مشروع DTX.",
    },
  },
  {
    id: "comps",
    mark: "∞",
    title: {
      en: "Programming competitions",
      ar: "المسابقات البرمجية",
    },
    desc: {
      en: "Competitive problem solving under time pressure.",
      ar: "حل مسائل برمجية تنافسية تحت ضغط الوقت.",
    },
  },
  {
    id: "codeforces",
    mark: "{}",
    title: {
      en: "Codeforces problem solving",
      ar: "حل مسائل Codeforces",
    },
    desc: {
      en: "Regular practice sharpening algorithms and data structures.",
      ar: "ممارسة منتظمة تشحذ مهارات الخوارزميات وهياكل البيانات.",
    },
  },
];

export const education = {
  label: { en: "Education", ar: "التعليم" } as LocaleString,
  value: { en: "Computer Technical Institute — Damascus University", ar: "المعهد التقاني للحاسوب — جامعة دمشق" } as LocaleString,
};