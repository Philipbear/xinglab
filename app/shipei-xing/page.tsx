import { Mail } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";
import { PersonAvatar } from "@/components/PersonAvatar";
import { ProfileLinkIcon } from "@/components/ProfileLinkIcon";
import { piProfile } from "@/lib/content";
import type { ProfileEntry } from "@/lib/content";
import type { ProfileHonor } from "@/lib/content/types";

const subtleDetailLinkLabels = new Set(["Tao Huan", "Zhan Lu", "Feihe Huang"]);

function detailLinkClassName(label: string) {
  if (subtleDetailLinkLabels.has(label)) {
    return "font-medium text-muted underline decoration-line underline-offset-2 transition hover:text-fudan";
  }

  return "font-semibold text-fudan underline decoration-fudan/40 underline-offset-2 transition hover:text-ink";
}

function renderLinkedText(text: string, links: ProfileEntry["detailLinks"] = []) {
  if (links.length === 0) {
    return text;
  }

  const content = [];
  let cursor = 0;

  links.forEach((link) => {
    const index = text.indexOf(link.label, cursor);

    if (index === -1) {
      return;
    }

    if (index > cursor) {
      content.push(text.slice(cursor, index));
    }

    content.push(
      <a key={`${link.href}-${index}`} href={link.href} className={detailLinkClassName(link.label)}>
        {link.label}
      </a>
    );
    cursor = index + link.label.length;
  });

  if (cursor < text.length) {
    content.push(text.slice(cursor));
  }

  return content;
}

function renderEntryDetails(entry: ProfileEntry) {
  if (!entry.detail) {
    return entry.institution;
  }

  return (
    <>
      <span className="block">{entry.institution}</span>
      <span className="block">{renderLinkedText(entry.detail, entry.detailLinks)}</span>
    </>
  );
}

function renderServiceItem(item: string) {
  const servicePrefixes = ["Reviewer: ", "Editorial Board Member: "];
  const prefix = servicePrefixes.find((servicePrefix) => item.startsWith(servicePrefix));

  if (!prefix) {
    return item;
  }

  const journals = item
    .slice(prefix.length)
    .replace(", and ", ", ")
    .split(", ")
    .map((journal) => journal.trim())
    .filter(Boolean);

  return (
    <>
      <span className="block">{prefix.trim()}</span>
      <span className="mt-1 block pl-4">
        {journals.map((journal, index) => (
          <span key={journal} className="inline-block whitespace-nowrap">
            {journal}
            {index < journals.length - 1 ? <span className="mx-3 text-line">|</span> : null}
          </span>
        ))}
      </span>
    </>
  );
}

export default function ShipeiXingPage() {
  const experienceAndEducation = [...piProfile.experience, ...piProfile.education];
  const serviceItems = piProfile.service.map((item) => ({
    item,
    content: renderServiceItem(item)
  }));
  const honors: ProfileHonor[] = piProfile.honors;

  return (
    <>
      <PageIntro
        eyebrow="Principal Investigator"
        title={piProfile.name}
      />

      <section className="mx-auto grid max-w-5xl gap-6 px-5 py-10 sm:px-8 lg:py-12">
        <section className="rounded-lg border border-line bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <PersonAvatar name={piProfile.name} image={piProfile.image} size="xl" />
            <div className="min-w-0">
              <h2 className="text-3xl font-semibold tracking-normal text-ink">
                {piProfile.name}
                {piProfile.chineseName ? (
                  <span lang="zh-Hans" className="font-cjk ml-3 text-xl font-normal text-muted">
                    {piProfile.chineseName}
                  </span>
                ) : null}
              </h2>
              <p className="mt-2 text-sm font-medium text-muted">{piProfile.title}</p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm">
                <a
                  href={`mailto:${piProfile.email}`}
                  className="inline-flex items-center gap-2 font-semibold text-fudan transition hover:text-ink"
                >
                  <Mail aria-hidden="true" size={16} />
                  {piProfile.email}
                </a>
                {piProfile.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center gap-2 font-semibold text-fudan transition hover:text-ink"
                  >
                    <ProfileLinkIcon label={link.label} />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          {piProfile.bio ? (
            <p className="mt-6 text-sm leading-6 text-muted">{piProfile.bio}</p>
          ) : null}
        </section>

        <section className="rounded-lg border border-line bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold tracking-normal text-ink">Appointments and Education</h2>
          <div className="mt-5 grid gap-4">
            {experienceAndEducation.map((entry) => (
              <article key={`${entry.period}-${entry.institution}`} className="border-l-2 border-fudan pl-4">
                <p className="text-sm font-semibold text-ink">
                  {entry.period}
                  <span className="mx-2 text-line">|</span>
                  <span className="text-ink">{entry.title}</span>
                </p>
                <p className="mt-1 text-sm leading-6 text-muted">{renderEntryDetails(entry)}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-lg border border-line bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold tracking-normal text-ink">Selected Honors & Awards</h2>
          <ul className="mt-5 grid gap-3 text-sm leading-6 text-muted">
            {honors.map((honor) => (
              <li key={`${honor.year}-${honor.title}`} className="grid grid-cols-[4rem_minmax(0,1fr)] gap-3">
                <span className="font-semibold tabular-nums text-fudan">{honor.year}</span>
                <span className={honor.highlight ? "font-semibold text-ink" : undefined}>
                  <span className="block">{honor.title}</span>
                  {honor.chineseTitle ? (
                    <span lang="zh-Hans" className="font-cjk mt-1 block">
                      {honor.chineseTitle}
                    </span>
                  ) : null}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-lg border border-line bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold tracking-normal text-ink">Service</h2>
          <ul className="mt-5 grid gap-3 text-sm leading-6 text-muted">
            {serviceItems.map(({ item, content }) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-sage" />
                <span>{content}</span>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </>
  );
}
