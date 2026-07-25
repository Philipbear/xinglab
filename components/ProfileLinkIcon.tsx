import { ExternalLink, Github, GraduationCap } from "lucide-react";

export function ProfileLinkIcon({ label, size = 16 }: { label: string; size?: number }) {
  const normalizedLabel = label.toLowerCase();

  if (normalizedLabel === "google scholar") {
    return <GraduationCap aria-hidden="true" size={size} />;
  }

  if (normalizedLabel === "github") {
    return <Github aria-hidden="true" size={size} />;
  }

  if (normalizedLabel === "orcid") {
    return (
      <span
        aria-hidden="true"
        className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#a6ce39] font-sans font-bold leading-none text-white"
        style={{ width: size, height: size, fontSize: size * 0.5 }}
      >
        iD
      </span>
    );
  }

  return <ExternalLink aria-hidden="true" size={size} />;
}
