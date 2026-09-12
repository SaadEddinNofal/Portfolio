import type { LocaleString } from "@/lib/types";

export type ExperienceEntry = {
  id: string;
  company: LocaleString;
  role: LocaleString;
  period: LocaleString;
  focus: string[];
};

export const experienceEntries: ExperienceEntry[] = [
  {
    id: "boulevard",
    company: { en: "Boulevard Middle East", ar: "Boulevard Middle East" },
    role: {
      en: "Software Engineer / Backend Developer",
      ar: "مهندس برمجيات / مطوّر باك-إند",
    },
    period: { en: "2025 — Present", ar: "2025 — حتى الآن" },
    focus: [".NET", "Backend Development", "E-Commerce", "nopCommerce", "Business Requirements", "System Customization"],
  },
  {
    id: "damascus",
    company: { en: "Damascus University — Computer Technical Institute", ar: "جامعة دمشق — المعهد التقاني للحاسوب" },
    role: {
      en: "Adjunct Instructor",
      ar: "مدرّس مساعد",
    },
    period: { en: "2025 — Present", ar: "2025 — حتى الآن" },
    focus: ["Programming", "Operating Systems", "Technical Education"],
  },
  {
    id: "yaacode",
    company: { en: "YaaCode", ar: "YaaCode" },
    role: {
      en: "Software Engineer / Backend Developer",
      ar: "مهندس برمجيات / مطوّر باك-إند",
    },
    period: { en: "2025", ar: "2025" },
    focus: ["Backend Development", "Healthcare Systems", "Microservices"],
  },
];

export const embeddedNote = {
  title: { en: "Embedded Systems Experience", ar: "خبرة الأنظمة المدمجة" } as LocaleString,
  text: {
    en: "Earlier engineering work with Dr. Machine and Mytrixa — embedded C/C++ on physical systems.",
    ar: "عمل هندسي سابق مع Dr. Machine و Mytrixa — أنظمة مدمجة بـ C/C++ على أنظمة فيزيائية.",
  } as LocaleString,
  tags: ["Embedded C/C++", "Embedded Systems"],
};