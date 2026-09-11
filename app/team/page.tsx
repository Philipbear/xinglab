import { ArrowRight, CalendarDays, Mail } from "lucide-react";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { PersonAvatar } from "@/components/PersonAvatar";
import { ProfileLinkIcon } from "@/components/ProfileLinkIcon";
import { members, type Member, type ProfileEntry, type ProfileLink } from "@/lib/content";

const groups = ["Postdocs", "PhD Students", "Master's Students", "Undergraduate Students", "Alumni"] as const;

function MemberContactLinks({
  email,
  links,
  className = ""
}: {
  email?: string;
  links?: ProfileLink[];
  className?: string;
}) {
  if (!email && !links?.length) {
    return null;
  }

  return (
    <div className={`mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 ${className}`}>
      {email ? (
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-fudan transition hover:text-ink"
        >
          <Mail aria-hidden="true" size={16} />
          {email}
        </a>
      ) : null}
      {links?.slice(0, 4).map((link) => {
        const isInternal = link.href.startsWith("/");
        const linkClassName = "inline-flex items-center gap-2 text-sm font-semibold text-fudan transition hover:text-ink";
        const linkContent = (
          <>
            {!isInternal ? <ProfileLinkIcon label={link.label} /> : null}
            {link.label}
          </>
        );

        return isInternal ? (
          <Link key={link.href} href={link.href} className={linkClassName}>
            {linkContent}
          </Link>
        ) : (
          <a key={link.href} href={link.href} className={linkClassName}>
            {linkContent}
          </a>
        );
      })}
    </div>
  );
}

function CareerSummary({ entries }: { entries?: ProfileEntry[] }) {
  if (!entries?.length) {
    return null;
  }

  return (
    <div className="grid gap-3 text-left">
      {entries.map((entry) => (
        <article key={`${entry.period}-${entry.institution}`} className="border-l-2 border-line pl-3">
          <p className="text-xs font-semibold tabular-nums text-muted">{entry.period}</p>
          <p className="mt-0.5 text-sm leading-5">
            <span className="font-semibold text-ink">{entry.title}</span>
            <span className="text-muted">, {entry.institution}</span>
          </p>
        </article>
      ))}
    </div>
  );
}

function MemberProfile({ member, compact = false }: { member: Member; compact?: boolean }) {
  return (
    <article
      className={`grid gap-7 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-8 ${
        compact ? "" : "lg:grid-cols-[8rem_17rem_minmax(0,1fr)]"
      }`}
    >
      <div className="flex justify-center sm:justify-start">
        <PersonAvatar name={member.name} image={member.image} size="xl" />
      </div>
      <div
        className={`flex min-w-0 flex-col items-center text-center sm:items-start sm:text-left ${
          member.careerSummary?.length || compact ? "" : "lg:col-span-2"
        }`}
      >
        <h3 className="text-2xl font-semibold tracking-normal text-ink">
          {member.name}
          {member.chineseName ? (
            <span lang="zh-Hans" className="font-cjk ml-3 text-lg font-normal text-muted">
              {member.chineseName}
            </span>
          ) : null}
        </h3>
        {member.role ? <p className="mt-2 text-sm font-medium leading-6 text-muted">{member.role}</p> : null}
        {member.joinedDate ? (
          <p className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium tracking-wide text-muted">
            <CalendarDays aria-hidden="true" size={14} className="text-fudan" />
            Joined {member.joinedDate}
          </p>
        ) : null}
        {member.bio ? <p className="mt-4 text-sm leading-7 text-muted">{member.bio}</p> : null}
        <MemberContactLinks
          email={member.email}
          links={member.links}
          className="justify-center sm:justify-start"
        />
        {member.profileHref ? (
          <Link
            href={member.profileHref}
            className="mt-5 inline-flex shrink-0 items-center gap-1.5 rounded-full border border-line bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition hover:border-fudan hover:text-fudan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fudan"
          >
            View full profile
            <ArrowRight aria-hidden="true" size={15} />
          </Link>
        ) : null}
      </div>
      {member.careerSummary?.length ? (
        <div className="sm:col-span-2 lg:col-span-1">
          <CareerSummary entries={member.careerSummary} />
        </div>
      ) : null}
    </article>
  );
}

export default function MembersPage() {
  return (
    <>
      <PageIntro
        eyebrow="Our Team"
        title="All Members"
        description="We aim to build a diverse group of researchers working across metabolomics/exposomics, computation, and biochemistry."
      />

      <section className="mx-auto max-w-7xl px-5 pb-12 pt-8 sm:px-8 lg:pb-16 lg:pt-10">
        <div className="grid gap-12">
          {members
            .filter((member) => member.group === "Principal Investigator")
            .map((member) => (
              <section key={member.name}>
                <h2 className="text-2xl font-semibold tracking-normal text-ink">Principal Investigator</h2>
                <div className="mx-auto mt-5 w-full max-w-5xl">
                  <MemberProfile member={member} />
                </div>
              </section>
            ))}

          {groups.map((group) => {
            const groupMembers = members.filter((member) => member.group === group);
            const isStudentGroup = group.endsWith("Students");

            if (groupMembers.length === 0) {
              return null;
            }

            return (
              <section key={group}>
                <h2 className="text-2xl font-semibold tracking-normal text-ink">{group}</h2>
                <div className={`mt-5 grid gap-10 ${isStudentGroup ? "lg:grid-cols-2" : ""}`}>
                  {groupMembers.map((member, index) => (
                    <MemberProfile
                      key={`${member.group}-${member.name}-${index}`}
                      member={member}
                      compact={isStudentGroup}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </>
  );
}
