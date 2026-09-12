import type { LocaleString } from "@/lib/types";

export type SkillGroup = {
  id: string;
  num: string;
  label: LocaleString;
  hint: LocaleString;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "backend",
    num: "01",
    label: { en: "Backend", ar: "الباك-إند" },
    hint: {
      en: "The server-side foundation every system stands on.",
      ar: "الأساس على الخادم الذي يقوم عليه كل نظام.",
    },
    skills: ["C#", ".NET", "ASP.NET Core", "REST APIs", "Entity Framework Core", "MVC"],
  },
  {
    id: "architecture",
    num: "02",
    label: { en: "Architecture", ar: "البنية البرمجية" },
    hint: {
      en: "How the system is structured before it is written.",
      ar: "كيف يُشكَّل النظام قبل أن يُكتب.",
    },
    skills: ["Clean Architecture", "SOLID", "Microservices", "Monolithic Architecture", "System Analysis"],
  },
  {
    id: "databases",
    num: "03",
    label: { en: "Databases", ar: "قواعد البيانات" },
    hint: {
      en: "Where durable, queryable state lives.",
      ar: "حيث يعيش التخزين الدائم القابل للاستعلام.",
    },
    skills: ["SQL Server", "MySQL", "Oracle"],
  },
  {
    id: "frontend",
    num: "04",
    label: { en: "Frontend", ar: "الواجهات" },
    hint: {
      en: "The interface layer, kept pragmatic.",
      ar: "طبقة الواجهة، مع الحفاظ على التركيز الهندسي.",
    },
    skills: ["Razor Pages", "Blazor", "JavaScript", "TypeScript", "HTML", "CSS", "Bootstrap"],
  },
  {
    id: "tools",
    num: "05",
    label: { en: "Engineering Tools", ar: "الأدوات الهندسية" },
    hint: {
      en: "The workflow that surrounds the code.",
      ar: "سير العمل الذي يدور حول الكود.",
    },
    skills: ["Git", "GitHub", "GitLab", "Docker", "CI/CD"],
  },
  {
    id: "testing",
    num: "06",
    label: { en: "Testing", ar: "الاختبار" },
    hint: {
      en: "Proof over promises.",
      ar: "إثبات بدلاً من الوعود.",
    },
    skills: ["Unit Testing", "Integration Testing", "xUnit", "Moq", "FluentAssertions"],
  },
];