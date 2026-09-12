const basePath = process.env.BASE_PATH || "";

export const site = {
  name: "Saad Nofal",
  fullName: "Saad Eddin Nofal",
  shortName: "Saad Nofal",
  title: "Software Engineer | .NET Developer",
  tagline: "Building reliable software systems from architecture to production.",
  github: "https://github.com/SaadEddinNofal",
  githubHandle: "SaadEddinNofal",
  email: "",
  linkedin: "https://www.linkedin.com/in/saad-nofal/",
  instagram: "https://www.instagram.com/saad_eddin_ibrahim/",
  facebook: "https://www.facebook.com/profile.php?id=100068615084512",
  phone: "+963 993 735 995",
  phoneHref: "tel:+963993735995",
  gitlab: "",
  cvPath: `${basePath}/Saad-Nofal-CV.pdf`,
  ogImage: `${basePath}/og-image.png`,
  basePath,
  url: "https://saadnofal.me",
  localeDefault: "en",
  localeCookie: "locale",
  themeCookie: "theme",
  sameAs: [
    "https://github.com/SaadEddinNofal",
    "https://www.linkedin.com/in/saad-nofal/",
    "https://www.instagram.com/saad_eddin_ibrahim/",
    "https://www.facebook.com/profile.php?id=100068615084512",
  ],
} as const;

export const navItems = [
  { id: "home", anchor: "#home" },
  { id: "about", anchor: "#about" },
  { id: "projects", anchor: "#projects" },
  { id: "experience", anchor: "#experience" },
  { id: "skills", anchor: "#skills" },
  { id: "achievements", anchor: "#achievements" },
  { id: "contact", anchor: "#contact" },
] as const;