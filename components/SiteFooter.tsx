import Image from "next/image";
import { contactInfo, contactInfoZh } from "@/lib/content";
import { withBasePath } from "@/lib/site-paths";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-white/90">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-4 text-xs leading-5 text-muted sm:px-8 md:flex-row md:items-center md:justify-between">
        <p>
          <span className="font-semibold text-ink">Xing Lab</span>
          <span className="mx-2 text-line">|</span>
          <span>© {new Date().getFullYear()}</span>
        </p>
        <div className="flex items-center gap-3 md:justify-end">
          <Image
            src={withBasePath("/images/branding/fudan-footer.png")}
            alt="Fudan University seal"
            width={36}
            height={36}
            className="size-8 shrink-0 object-contain sm:size-9"
          />
          <p className="max-w-xl md:text-right">
            <span className="block">
              {contactInfo.institution}, {contactInfo.address}
            </span>
            <span lang="zh-Hans" className="font-cjk block">
              {contactInfoZh.institution}，{contactInfoZh.address}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
