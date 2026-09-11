# Website Content Editing Guide

Most editable website content lives in `lib/content/`. Page files in `app/` and reusable components in `components/` read this content and handle the layout, styling, and interaction.

After editing content, run the local site:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

For a production check, run:

```bash
npm run build
```

## File Map

| File | What It Controls |
| --- | --- |
| `home.ts` | Homepage featured lab papers carousel |
| `profile.ts` | Shipei Xing profile page and PI data reused by the team page |
| `team.ts` | Team/member cards, alumni, and open positions card |
| `publications.ts` | Publication list and highlighted publication flags |
| `news.ts` | News page and homepage latest-news ticker |
| `research.ts` | Research direction intro text and research direction content |
| `contact.ts` | Join Us page, contact email, and application instructions |
| `navigation.ts` | Header navigation labels and links |
| `types.ts` | Shared TypeScript data shapes; edit only when the data structure changes |
| `../content.ts` | Barrel export so app files can import from `@/lib/content` |

## Image Paths

Website images live in `public/images/`.

```text
public/images/branding/   site logo and brand assets
public/images/hero/       hero SVG/image assets and reusable visual assets
public/images/papers/     featured paper figures
public/images/profiles/   profile and team photos
public/images/research/   research section illustrations
public/images/news/       news-specific images
```

Reference images from content files with paths that begin at `/images/...`.

```ts
image: "/images/papers/2026_conjugate.png"
```

Do not include `public` in the path.

Current examples:

```text
/images/branding/fudan.png
/images/hero/LCMS.svg
/images/hero/tomatidine.svg
/images/hero/tomatidine-PEA.svg
/images/papers/2026_conjugate.png
/images/papers/2023_buddy.png
/images/profiles/shipei-xing-profile.png
/images/research/apple-metabolism-illustration.png
/images/research/public-metabolomics-data-mining.png
/images/research/mass-spectrometry-informatics.png
/images/research/microbial-xenobiotic-metabolism.png
```

## Homepage Featured Lab Papers

Edit:

```text
lib/content/home.ts
```

The homepage carousel is controlled by `featuredPapers`:

```ts
const featuredPapers = [
  {
    title: "Navigating the conjugated metabolome",
    image: "/images/papers/2026_conjugate.png"
  },
  {
    title: "BUDDY: molecular formula discovery via bottom-up MS/MS interrogation",
    image: "/images/papers/2023_buddy.png"
  }
];
```

How it works:

- Every entry in `featuredPapers` is shown on the homepage.
- The order in `featuredPapers` is the display order.
- The dots under the carousel are generated automatically.
- The paper title must match a title in `publications.ts`.
- The carousel pulls journal, year, author list, author labels, and link from the matching publication.
- You do not need to add `alt` text here; the component generates figure alt text from the paper title.

To add another featured paper:

1. Add the publication to `publications.ts` if it is not already there.
2. Add the figure image to `public/images/papers/`.
3. Add a `{ title, image }` entry to `featuredPapers`.

Important: if the title does not match a publication title, the current mapping falls back to the first publication. Exact title matching keeps the homepage correct.

## Publications

Edit:

```text
lib/content/publications.ts
```

Add a publication object:

```ts
{
  title: "Paper title here",
  authors: "Author One, Author Two, Author Three",
  venue: "Journal Name",
  year: 2026,
  url: "https://doi.org/10.xxxx/example",
  coFirstAuthors: ["Author One", "Author Two"],
  correspondingAuthors: ["Author Three"],
  preprint: false,
  highlighted: true
}
```

Fields:

- `title`: paper title. This is also used by `home.ts` to match featured lab papers.
- `authors`: one comma-separated string.
- `venue`: journal, preprint server, or status text.
- `year`: publication year as a number.
- `url`: optional link. DOI links should be full URLs, such as `https://doi.org/...`.
- `coFirstAuthors`: optional author names that receive a co-first marker.
- `correspondingAuthors`: optional author names that receive a corresponding-author marker.
- `preprint`: set `true` to show the preprint label.
- `highlighted`: set `true` to include the paper in the highlighted publications section on `/publications`.

Notes:

- Keep recent papers near the top if you want them to appear first.
- Lab member names are bolded when the author string includes a name from `team.ts`.
- The highlighted publications section has a custom priority list in `app/publications/page.tsx`. New highlighted papers still show, but edit that priority list if you need a specific highlighted order.

## Team Members

Edit:

```text
lib/content/team.ts
```

Add a member object:

```ts
{
  name: "First Last",
  chineseName: "中文名",
  role: "PhD Student",
  group: "Master's Students",
  bio: "Short research description.",
  email: "first.last@example.com",
  image: "/images/profiles/person-photo.png",
  joinedDate: "September 2026",
  links: [
    { label: "Google Scholar", href: "https://scholar.google.com/" },
    { label: "GitHub", href: "https://github.com/" }
  ]
}
```

Allowed `group` values are defined in `types.ts`:

```ts
"Principal Investigator" | "Postdocs" | "PhD Students" | "Master's Students" | "Undergraduate Students" | "Researchers" | "Alumni"
```

Notes:

- `chineseName`, `role`, `email`, `image`, `joinedDate`, and `links` are optional.
- If no image is provided, the site shows initials.
- Team profile links are limited to the first 4 links on the team page.
- The PI card is generated from `profile.ts` and inserted into `team.ts`.
- The "Open Positions" card is also in `team.ts`; edit or remove it there.
- Publications and homepage featured papers automatically bold names that match non-open-position members.

## Alumni

Edit:

```text
lib/content/team.ts
```

Set a member's group to:

```ts
group: "Alumni"
```

The Alumni section is hidden when empty. It appears automatically once at least one member has `group: "Alumni"`.

## PI Profile

Edit:

```text
lib/content/profile.ts
```

This controls `/shipei-xing` and also feeds the PI entry on `/team`.

Common fields:

- `name`, `chineseName`, `title`, `email`, `image`
- `links`: profile links shown near the email
- `experience`: appointment entries
- `education`: education entries
- `honors`: honors and awards
- `service`: service entries

For `experience` and `education`, each entry can include `detailLinks`. The page links matching text inside `detail`.

Example:

```ts
{
  period: "2023.8 - Present",
  title: "Postdoctoral Scholar",
  institution: "University of California, San Diego",
  detail: "Supervisor: Pieter C. Dorrestein",
  detailLinks: [
    { label: "Pieter C. Dorrestein", href: "https://dorresteinlab.ucsd.edu" }
  ]
}
```

## News

Edit:

```text
lib/content/news.ts
```

Add a news item:

```ts
{
  title: "News title",
  date: "2026-04-26",
  summary: "One or two sentence summary.",
  category: "Publication",
  link: "/publications",
  image: "/images/news/news-image.png",
  imageVariant: "side"
}
```

Allowed categories:

```ts
"Lab" | "Publication" | "Opening" | "Conference" | "Award"
```

Notes:

- News anchor links are generated automatically from the date and title.
- Use date format `YYYY-MM-DD` or `YYYY-MM` for month-only news.
- `link`, `image`, and `imageVariant` are optional.
- `imageVariant` can be `"wide"` or `"side"`.
- News images use the news title as the image alt text.
- The homepage latest-news ticker cycles through `newsItems` in array order.

## Research Directions

Edit:

```text
lib/content/research.ts
```

The homepage and research page use:

- `researchDirectionsQuestion`: larger opening question shown above the research intro.
- `researchDirectionsIntro`: intro text for the research directions section.
- `researchAreas`: the list of research direction objects.

Each research area has this shape:

```ts
{
  slug: "public-metabolomics-data-mining",
  title: "Data Mining of Public Metabolomics Repositories",
  shortDescription: "Short text for the homepage card.",
  longDescription: "Longer text for the research page.",
  relatedPublicationTitles: ["Exact publication title from publications.ts"],
  image: "/images/research/example.png"
}
```

Notes:

- The opening research question and intro are rendered by `components/ResearchIntroPanel.tsx`.
- `slug` is used as the section id on `/research`.
- `shortDescription` appears on the homepage.
- `longDescription` appears on `/research`.
- `relatedPublicationTitles` appears as linked papers on `/research`; each title must exactly match a title in `publications.ts`.
- `image` appears as the background illustration for each research direction on `/research`.

## Contact And Join Us

Edit:

```text
lib/content/contact.ts
```

This controls `/contact` and `/contact/zh`.

Main fields:

- `institution`
- `address`
- `email`
- `joinText`
- `applicationSections`

Use `joinText` for general application instructions, including the requested email subject format.
Use `contactInfoZh` for the Chinese version of the same page.

Each application section has:

```ts
{
  title: "Postdoctoral Researchers",
  description: "Short instruction text.",
  materials: [
    "Required or optional material.",
    "Another material."
  ]
}
```

## Navigation

Edit:

```text
lib/content/navigation.ts
```

Link items use:

```ts
{ label: "RESEARCH", href: "/research" }
```

Items may also include child links for the header dropdown:

```ts
{
  label: "LAB GUIDE",
  children: [
    { label: "LAB LIFE", href: "/guide/lab-life" },
    { label: "RESEARCH PRACTICE", href: "/guide/research-practice" }
  ]
}
```

Use internal paths that match routes under `app/`, such as `/research`, `/team`, `/guide/lab-life`, `/guide/research-practice`, `/publications`, `/news`, and `/contact`.

## Types

Edit only when the data structure needs to change:

```text
lib/content/types.ts
```

If you add a new required field to a type, update every content object that uses that type and the page/component that renders it.

## What Is Not In `lib/content/`

Some visual and layout settings are outside content files:

| File | What To Edit There |
| --- | --- |
| `app/globals.css` | Theme colors, especially `--color-paper`, `--color-fudan`, `--color-sage`, and `--color-line` |
| `app/page.tsx` | Homepage section order, hero text, hero tags, and major section spacing |
| `components/HeroVisual.tsx` | Hero SVG artwork, node colors, icons, labels, module hover behavior, and artwork offset |
| `components/HeroScrollAnimation.tsx` | Hero scroll animation direction, distance, scale, opacity, blur, and rotation |
| `components/FeaturedPapersRail.tsx` | Featured papers carousel layout and controls |
| `components/NewsTicker.tsx` | Latest-news ticker timing and layout |

## Common Checks

Run TypeScript check:

```bash
npm run typecheck
```

Run production build:

```bash
npm run build
```

Start local development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```
