import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

function base({ size = 20, ...props }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...props,
  };
}

export function IconGithub({ size = 20, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export function IconGitlab({ size = 20, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M22.65 14.39 12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .4 0 .43.43 0 0 1 .16.53l2.44 7.49h8.36l2.44-7.49A.43.43 0 0 1 18.6 2a.42.42 0 0 1 .38.17a.42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94Z" />
    </svg>
  );
}

export function IconMail({ size = 20, ...props }: IconProps) {
  return (
    <svg {...base({ size, ...props })}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  );
}

export function IconLinkedin({ size = 20, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

export function IconInstagram({ size = 20, ...props }: IconProps) {
  return (
    <svg {...base({ size, ...props })}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}

export function IconFacebook({ size = 20, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M13.5 21v-7h2.35l.4-3H13.5V9.05c0-.87.28-1.55 1.65-1.55h1.35v-2.7c-.45-.06-1.45-.15-2.4-.15-2.4 0-4.1 1.45-4.1 4.15v2.15H8v3h2v7h3.5Z" />
    </svg>
  );
}

export function IconPhone({ size = 20, ...props }: IconProps) {
  return (
    <svg {...base({ size, ...props })}>
      <path d="M5 4h4l1.5 4.5-2.2 1.5a13 13 0 0 0 5.7 5.7l1.5-2.2L20 15v4a2 2 0 0 1-2.1 2A16.9 16.9 0 0 1 3 6.1 2 2 0 0 1 5 4Z" />
    </svg>
  );
}

export function IconExternal({ size = 20, ...props }: IconProps) {
  return (
    <svg {...base({ size, ...props })}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
    </svg>
  );
}

export function IconArrowRight({ size = 20, ...props }: IconProps) {
  return (
    <svg {...base({ size, ...props })}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function IconChevronDown({ size = 20, ...props }: IconProps) {
  return (
    <svg {...base({ size, ...props })}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function IconSun({ size = 20, ...props }: IconProps) {
  return (
    <svg {...base({ size, ...props })}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

export function IconMoon({ size = 20, ...props }: IconProps) {
  return (
    <svg {...base({ size, ...props })}>
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

export function IconMenu({ size = 20, ...props }: IconProps) {
  return (
    <svg {...base({ size, ...props })}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h10" />
    </svg>
  );
}

export function IconClose({ size = 20, ...props }: IconProps) {
  return (
    <svg {...base({ size, ...props })}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export function IconSearch({ size = 20, ...props }: IconProps) {
  return (
    <svg {...base({ size, ...props })}>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export function IconArrowUp({ size = 20, ...props }: IconProps) {
  return (
    <svg {...base({ size, ...props })}>
      <path d="M12 19V5" />
      <path d="m6 11 6-6 6 6" />
    </svg>
  );
}

export function IconPrompt({ size = 20, ...props }: IconProps) {
  return (
    <svg {...base({ size, ...props })}>
      <path d="m5 17 7-5-7-5v10Z" />
      <path d="M17 6v12" />
    </svg>
  );
}

export function IconDownload({ size = 20, ...props }: IconProps) {
  return (
    <svg {...base({ size, ...props })}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="m7 10 5 5 5-5" />
      <path d="M12 15V3" />
    </svg>
  );
}