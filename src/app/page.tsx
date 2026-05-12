import Image from "next/image";
import Link from "next/link";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=1600&auto=format&fit=crop&q=80";
const TRAINER_IMAGE =
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=80";
const ARTIFACT_IMAGE =
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&auto=format&fit=crop&q=80";
const TESTIMONIAL_AVATAR =
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=200&auto=format&fit=crop&q=80";

const NAMED_CUSTOMERS = "3 zorginstellingen · 2 accountantskantoren · 4 SaaS-bedrijven";

const facts = [
  {
    kicker: "Sancties",
    title: "tot €35 miljoen",
    body: "of 7% van de wereldwijde jaaromzet bij overtreding van Artikel 5 (verboden praktijken).",
    cite: "Art. 99 AI-verordening",
  },
  {
    kicker: "Verplicht sinds 2 feb 2025",
    title: "AI-geletterdheid",
    body: "Iedere organisatie die AI inzet moet aantoonbaar zorgen voor passende AI-geletterdheid.",
    cite: "Art. 4 AI-verordening",
  },
  {
    kicker: "Deadline",
    title: "2 augustus 2026",
    body: "Hoog-risico AI-systemen — waaronder werving, performance-evaluatie en kredietbeoordeling.",
    cite: "Annex III, Art. 6",
  },
];

const deliverables = [
  {
    title: "AI-register",
    body: "Een levend overzicht van iedere AI-toepassing in uw organisatie, per leverancier, doel en risicoklasse.",
    span: "row-span-2",
  },
  {
    title: "Risico-classificatie",
    body: "Per systeem getoetst aan Annex III en Artikel 5: verboden, hoog, beperkt of minimaal.",
  },
  {
    title: "30/60/90-dagen plan",
    body: "Concrete acties met eigenaarschap, deadlines en bewijsstukken voor het bestuur.",
  },
  {
    title: "AI-geletterdheid plan",
    body: "Trainingsstructuur per rol, conform Artikel 4. Inclusief log dat u aan een toezichthouder kunt overleggen.",
    span: "col-span-2",
  },
  {
    title: "Werkbare templates",
    body: "Beleidsdocument, transparantie-teksten naar sollicitanten, incident-procedure en leveranciers-DD.",
  },
];

const agenda = [
  {
    time: "09:00",
    title: "Wat staat er op het spel",
    body: "EU AI-verordening in 30 minuten. Tijdslijn, sancties, en waar uw organisatie waarschijnlijk al onder valt.",
  },
  {
    time: "09:30",
    title: "Live AI-inventaris",
    body: "Whiteboard-oefening: iedere AI-toepassing in uw organisatie op tafel. ChatGPT, Copilot, recruitment-tools, chatbots. Dit is het oh-shit-moment voor de meeste teams.",
  },
  {
    time: "10:45",
    title: "Risico-classificatie",
    body: "Per systeem koppelen aan Annex III. Wat is verboden, wat is hoog-risico, wat mag wel.",
  },
  {
    time: "13:00",
    title: "Wat te doen per categorie",
    body: "Conformiteit, transparantie, menselijk toezicht, bias-monitoring. Concreet, geen juridisch college.",
  },
  {
    time: "14:30",
    title: "AI-geletterdheid plan",
    body: "Welke rol krijgt welke training. Hoe documenteert u dat u voldoet aan Art. 4.",
  },
  {
    time: "15:30",
    title: "Actieplan + besluit",
    body: "30/60/90-dagen plan, eigenaren benoemd, eerste deadline gezet voor commitment in dezelfde week.",
  },
];

const faqs = [
  {
    q: "Voor welke organisaties is deze workshop relevant?",
    a: "MKB-organisaties met 10–250 medewerkers die AI inzetten in HR, klantenservice, marketing, financiën of operatie. Bijzonder relevant als u CV-screening, chatbots, geautomatiseerde besluitvorming of geavanceerde analyses gebruikt — vrijwel iedere organisatie die ChatGPT of Microsoft Copilot heeft uitgerold.",
  },
  {
    q: "Wat als wij \"eigenlijk geen AI gebruiken\"?",
    a: "Vrijwel iedere organisatie gebruikt AI zonder het door te hebben. Microsoft 365 Copilot, Google Workspace, recruitment-tools, e-mail-filters, chatbots — allemaal AI. De inventaris die u tijdens de workshop maakt onthult dit binnen 30 minuten.",
  },
  {
    q: "Is dit een juridische cursus?",
    a: "Nee. Wij vertalen de regelgeving naar werkbare acties. Aan het einde van de dag heeft u een ingevuld register, een classificatie en een actieplan — geen 80-pagina memo. Een jurist controleert nadien indien gewenst.",
  },
  {
    q: "In-company of online?",
    a: "Beide. In-company bij u op locatie geeft de beste resultaten omdat de eigenaren van de systemen aan tafel zitten. Online (max. 12 deelnemers, twee dagdelen) werkt ook goed voor verspreide teams.",
  },
  {
    q: "Krijgen we een certificaat?",
    a: "Ja. Iedere deelnemer ontvangt een certificaat AI-geletterdheid op grond van Artikel 4. Wij leveren tevens het trainingslog dat u aan een toezichthouder kunt overleggen.",
  },
  {
    q: "Wat na 2 augustus 2026?",
    a: "Dan zijn de verplichtingen voor hoog-risico AI-systemen onmiddellijk afdwingbaar. Wie dan begint, is te laat. Wie de workshop nu doet, heeft een werkend kader voordat de toezichthouder kan vragen om bewijs.",
  },
  {
    q: "Komt mijn workshop in aanmerking voor subsidie?",
    a: "Veel MKB-organisaties kunnen de SLIM-regeling inzetten voor scholing rond AI-geletterdheid. Wij ondersteunen bij de aanvraag (€1.000–€2.500 cofinanciering mogelijk).",
  },
];

function CourseSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "AI Verordening Workshop voor MKB",
    description:
      "Eendaagse in-company training EU AI Act compliance en AI-geletterdheid (art. 4) voor MKB-organisaties.",
    provider: {
      "@type": "Organization",
      name: "AI Verordening",
      url: "https://aiverordening.eu",
    },
    educationalCredentialAwarded: "Certificaat AI-geletterdheid (EU AI Act art. 4)",
    inLanguage: "nl",
    audience: {
      "@type": "BusinessAudience",
      audienceType: "MKB / SME",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "onsite",
      courseWorkload: "PT6H",
      location: {
        "@type": "Place",
        name: "In-company op locatie van de klant, of online",
      },
      offers: {
        "@type": "Offer",
        price: "1495",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        url: "https://aiverordening.eu/#contact",
      },
    },
  };
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function FaqSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function OrgSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AI Verordening",
    url: "https://aiverordening.eu",
    description:
      "Praktische AI-verordening compliance voor het Nederlandse MKB. In-company workshops, registers en doorlopende ondersteuning.",
    areaServed: "NL",
    knowsLanguage: ["nl"],
  };
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function Page() {
  return (
    <div className="relative min-h-screen bg-[var(--color-canvas)] text-[var(--color-ink)]">
      <CourseSchema />
      <FaqSchema />
      <OrgSchema />

      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-[var(--color-border)]/60 bg-[var(--color-canvas)]/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="font-display text-base font-semibold tracking-tight">
            AI Verordening
          </Link>
          <nav className="hidden gap-8 text-sm text-[var(--color-ink-muted)] md:flex">
            <a href="#programma" className="hover:text-[var(--color-ink)]">Programma</a>
            <a href="#wat-je-krijgt" className="hover:text-[var(--color-ink)]">Deliverables</a>
            <a href="#prijs" className="hover:text-[var(--color-ink)]">Prijs</a>
            <a href="#veelgestelde-vragen" className="hover:text-[var(--color-ink)]">FAQ</a>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-[var(--color-ink)] px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-px hover:bg-[var(--color-accent-hover)]"
          >
            Plan workshop
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[var(--color-border)]">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent-ring)] bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-medium text-[var(--color-accent)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
              Vóór 2 augustus 2026 compliant
            </span>
            <h1 className="font-display mt-8 text-[clamp(2.5rem,5.5vw,4.5rem)] font-semibold leading-[1.04] tracking-tight">
              AI-verordening workshop voor het MKB.
              <br />
              <span className="text-[var(--color-ink-muted)]">
                Compliant vóór{" "}
                <span className="font-serif-italic text-[var(--color-accent)]">2026.</span>
              </span>
            </h1>
            <p className="mt-8 max-w-xl text-[1.0625rem] leading-relaxed text-[var(--color-ink-muted)]">
              In één in-company werkdag levert u een ingevuld AI-register, een
              risico-classificatie per systeem, en een 30/60/90-dagen actieplan voor het
              bestuur. Praktisch. Geen juridisch college.
            </p>
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-6 py-3.5 text-sm font-medium text-white shadow-[0_8px_24px_-12px_rgba(20,17,13,0.5)] transition hover:-translate-y-px hover:bg-[var(--color-accent-hover)]"
              >
                Plan een workshop
                <span aria-hidden>→</span>
              </a>
              <span className="text-sm text-[var(--color-ink-soft)]">
                Vanaf <strong className="font-medium text-[var(--color-ink)]">€1.495</strong>{" "}
                · max. 12 deelnemers
              </span>
            </div>
            <p className="mt-10 text-xs uppercase tracking-[0.18em] text-[var(--color-ink-soft)]">
              Gegeven bij MKB-organisaties
            </p>
            <p className="mt-3 text-sm text-[var(--color-ink-muted)]">{NAMED_CUSTOMERS}</p>
          </div>

          {/* Hero photo */}
          <div className="relative md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface-2)] shadow-[var(--shadow-elev)]">
              <Image
                src={HERO_IMAGE}
                alt="In-company AI-verordening workshop met een MKB-team rond een tafel"
                fill
                priority
                sizes="(min-width: 768px) 42vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/70">
                  In-company sessie
                </p>
                <p className="mt-1 font-display text-lg font-medium text-white">
                  Bestuur · HR · IT aan één tafel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="border-b border-[var(--color-border)] bg-[var(--color-canvas)]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Wat staat er op het spel
            </p>
            <h2 className="font-display mt-3 text-4xl font-semibold tracking-tight md:text-[2.75rem]">
              Drie feiten die uw bestuur moet weten.
            </h2>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-border)] md:grid-cols-3">
            {facts.map((f) => (
              <div key={f.title} className="bg-white p-8">
                <p className="font-mono text-xs uppercase tracking-wider text-[var(--color-ink-soft)]">
                  {f.kicker}
                </p>
                <p className="font-display mt-4 text-3xl font-semibold tracking-tight">
                  {f.title}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                  {f.body}
                </p>
                <p className="mt-6 font-mono text-[11px] uppercase tracking-wider text-[var(--color-ink-soft)]">
                  {f.cite}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINER */}
      <section className="border-b border-[var(--color-border)] bg-[var(--color-canvas)]">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-24 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface-2)] shadow-[var(--shadow-card)]">
              <Image
                src={TRAINER_IMAGE}
                alt="De docent — Ibrahim Ben Moussa"
                fill
                sizes="(min-width: 768px) 36vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-7">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
              De docent
            </p>
            <h2 className="font-display mt-3 text-4xl font-semibold tracking-tight md:text-[2.75rem]">
              Een dag met iemand die het{" "}
              <span className="font-serif-italic">bouwt,</span> niet alleen begrijpt.
            </h2>
            <p className="mt-6 text-[1.0625rem] leading-relaxed text-[var(--color-ink-muted)]">
              Ibrahim Ben Moussa adviseert MKB-bedrijven over AI-implementatie en
              externe security. Hij bouwt zelf AI-tools en kent de praktische kant van
              wat de AI-verordening voor uw werkprocessen betekent — niet alleen wat de
              richtlijn op papier zegt.
            </p>
            <p className="mt-4 text-[1.0625rem] leading-relaxed text-[var(--color-ink-muted)]">
              Op één werkdag zit hij naast uw team aan tafel. Geen powerpoint-cursus,
              maar een werkende sessie waarin uw eigen AI-register, classificatie en
              actieplan worden opgebouwd op basis van uw echte situatie.
            </p>
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-[var(--color-border)] pt-8">
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-wider text-[var(--color-ink-soft)]">
                  Achtergrond
                </dt>
                <dd className="mt-2 font-display text-base font-medium">
                  Cyber &amp; AI
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-wider text-[var(--color-ink-soft)]">
                  KvK
                </dt>
                <dd className="mt-2 font-display text-base font-medium">87908727</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-wider text-[var(--color-ink-soft)]">
                  Locatie
                </dt>
                <dd className="mt-2 font-display text-base font-medium">Nederland</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* BENTO — WAT JE KRIJGT */}
      <section
        id="wat-je-krijgt"
        className="border-b border-[var(--color-border)] bg-[var(--color-surface-2)]/40"
      >
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid items-end gap-8 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
                Deliverables
              </p>
              <h2 className="font-display mt-3 text-4xl font-semibold tracking-tight md:text-[2.75rem]">
                Resultaat, geen <span className="font-serif-italic">theorie.</span>
              </h2>
            </div>
            <p className="md:col-span-5 text-[1.0625rem] leading-relaxed text-[var(--color-ink-muted)]">
              Een werkdag waarna u kunt aantonen dat u in beweging bent. Geen sheets voor de
              boekenkast — werkende documenten die u dezelfde week kunt overhandigen aan
              uw directie of een toezichthouder.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3 md:grid-rows-2">
            {deliverables.map((d) => (
              <div
                key={d.title}
                className={`group relative rounded-[var(--radius-card)] border border-[var(--color-border)] bg-white p-8 shadow-[var(--shadow-card)] transition hover:border-[var(--color-accent-ring)] ${d.span ?? ""}`}
              >
                <div className="flex items-start justify-between">
                  <h3 className="font-display text-xl font-semibold tracking-tight">
                    {d.title}
                  </h3>
                  <span
                    aria-hidden
                    className="text-[var(--color-ink-soft)] transition group-hover:translate-x-1 group-hover:text-[var(--color-accent)]"
                  >
                    →
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                  {d.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AGENDA TIMELINE */}
      <section id="programma" className="border-b border-[var(--color-border)]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Programma
            </p>
            <h2 className="font-display mt-3 text-4xl font-semibold tracking-tight md:text-[2.75rem]">
              De werkdag, uur voor <span className="font-serif-italic">uur.</span>
            </h2>
            <p className="mt-6 text-[1.0625rem] leading-relaxed text-[var(--color-ink-muted)]">
              09:00 – 16:30. Inclusief lunch. Maximaal 12 deelnemers, bij voorkeur
              gemengde groep: directie, HR, IT en relevante teamleads.
            </p>
          </div>

          <ol className="mt-14 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
            {agenda.map((row) => (
              <li
                key={row.time}
                className="group grid grid-cols-12 gap-6 px-2 py-7 transition hover:bg-[var(--color-surface-2)]/40"
              >
                <div className="col-span-3 md:col-span-2">
                  <span className="inline-flex items-center rounded-full border border-[var(--color-border-strong)] bg-white px-3 py-1 font-mono text-xs tracking-wider text-[var(--color-ink)]">
                    {row.time}
                  </span>
                </div>
                <div className="col-span-9 md:col-span-4">
                  <h3 className="font-display text-lg font-semibold tracking-tight">
                    {row.title}
                  </h3>
                </div>
                <p className="col-span-12 text-sm leading-relaxed text-[var(--color-ink-muted)] md:col-span-6">
                  {row.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ARTIFACT BAND */}
      <section className="relative overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-canvas)]">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-24 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Wat u meeneemt
            </p>
            <h2 className="font-display mt-3 text-4xl font-semibold tracking-tight md:text-[2.75rem]">
              Geen sheets. Werkende{" "}
              <span className="font-serif-italic">documenten.</span>
            </h2>
            <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-[var(--color-ink-muted)]">
              Aan het einde van de werkdag heeft u een ingevuld AI-register, een
              risico-classificatie per systeem en een 30/60/90-dagen plan. Werkende
              bestanden die u dezelfde week kunt overhandigen aan uw directie of een
              toezichthouder kunt tonen.
            </p>
            <ul className="mt-10 grid gap-x-10 gap-y-3 text-sm text-[var(--color-ink-muted)] sm:grid-cols-2">
              {[
                "AI-register · Excel + PDF",
                "Risico-classificatie matrix",
                "Beleidsdocument (template)",
                "Trainingslog (Art. 4)",
                "Leveranciers-DD checklist",
                "30/60/90-dagen plan",
              ].map((it) => (
                <li key={it} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-1 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)]"
                  >
                    ✓
                  </span>
                  {it}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-5">
            <div className="relative aspect-[5/6] overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface-2)] shadow-[var(--shadow-elev)]">
              <Image
                src={ARTIFACT_IMAGE}
                alt="Documenten en notitieboek met AI-register tijdens een workshop"
                fill
                sizes="(min-width: 768px) 36vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DARK PROOF */}
      <section className="border-b border-black bg-[#14110d] text-white">
        <div className="mx-auto max-w-4xl px-6 py-28 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/40">
            Pilot · Q1 2026
          </p>
          <blockquote className="mt-8">
            <p className="font-serif-italic text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.3] tracking-tight text-white">
              &ldquo;We dachten dat dit een juridisch traject van maanden zou worden. Na
              één dag hadden we ons register, ons beleid en wisten we welke leveranciers
              we moesten bevragen.&rdquo;
            </p>
            <footer className="mt-10 flex items-center justify-center gap-4 text-sm text-white/60">
              <span className="relative h-11 w-11 overflow-hidden rounded-full ring-1 ring-white/20">
                <Image
                  src={TESTIMONIAL_AVATAR}
                  alt="Portret van een HR-directeur"
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </span>
              <span className="text-left">
                <span className="block font-medium text-white">HR-directeur</span>
                <span className="block text-white/50">SaaS · 80 medewerkers · Q1 2026</span>
              </span>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* PRICING — SINGLE CARD */}
      <section id="prijs" className="border-b border-[var(--color-border)]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
                Investering
              </p>
              <h2 className="font-display mt-3 text-4xl font-semibold tracking-tight md:text-[2.75rem]">
                Eén prijs. Geen <span className="font-serif-italic">verrassingen.</span>
              </h2>
              <p className="mt-6 text-[1.0625rem] leading-relaxed text-[var(--color-ink-muted)]">
                Een externe consultancy rekent voor hetzelfde traject doorgaans
                €8.000–€15.000. Wij leveren dezelfde deliverables in één werkdag.
              </p>

              <dl className="mt-10 space-y-3 text-sm">
                <div className="flex items-center justify-between border-b border-dashed border-[var(--color-border)] pb-3">
                  <dt className="text-[var(--color-ink-muted)]">Externe consultancy</dt>
                  <dd className="font-mono text-[var(--color-ink-soft)] line-through">
                    €8.000–€15.000
                  </dd>
                </div>
                <div className="flex items-center justify-between border-b border-dashed border-[var(--color-border)] pb-3">
                  <dt className="text-[var(--color-ink-muted)]">Cursus per persoon × team</dt>
                  <dd className="font-mono text-[var(--color-ink-soft)] line-through">
                    €4.000+
                  </dd>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <dt className="font-medium text-[var(--color-ink)]">
                    Onze in-company workshop
                  </dt>
                  <dd className="font-display text-lg font-semibold text-[var(--color-accent)]">
                    €1.495
                  </dd>
                </div>
              </dl>
            </div>

            <div className="md:col-span-7">
              <div className="relative rounded-[var(--radius-card)] border border-[var(--color-ink)] bg-white p-10 shadow-[var(--shadow-elev)]">
                <span className="absolute -top-3 left-10 inline-flex items-center rounded-full bg-[var(--color-ink)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white">
                  In-company workshop
                </span>
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-6xl font-semibold tracking-tight">
                    €1.495
                  </span>
                  <span className="text-sm text-[var(--color-ink-soft)]">excl. btw</span>
                </div>
                <p className="mt-3 text-sm text-[var(--color-ink-muted)]">
                  Eén volle werkdag · tot 12 deelnemers · op uw locatie of online
                </p>

                <ul className="mt-8 grid gap-3 text-sm md:grid-cols-2">
                  {[
                    "Werkdag 09:00 – 16:30",
                    "Volledig AI-register, ingevuld",
                    "Risico-classificatie per systeem",
                    "30/60/90-dagen actieplan",
                    "AI-geletterdheid plan (Art. 4)",
                    "Certificaat per deelnemer",
                    "Templates voor beleid + procedures",
                    "30 dagen e-mailondersteuning",
                    "Slide-deck (uw huisstijl)",
                    "Lunch en materialen",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[var(--color-ink-muted)]"
                    >
                      <span
                        aria-hidden
                        className="mt-1 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)]"
                      >
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-10 flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-ink)] px-6 py-4 text-sm font-medium text-white transition hover:-translate-y-px hover:bg-[var(--color-accent-hover)]"
                >
                  Plan een workshop
                  <span aria-hidden>→</span>
                </a>
                <p className="mt-4 text-center text-xs text-[var(--color-ink-soft)]">
                  Mogelijk subsidie via SLIM (€1.000–€2.500 cofinanciering).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="veelgestelde-vragen"
        className="border-b border-[var(--color-border)] bg-[var(--color-surface-2)]/40"
      >
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
                Veelgestelde vragen
              </p>
              <h2 className="font-display mt-3 text-4xl font-semibold tracking-tight md:text-[2.75rem]">
                Wat u waarschijnlijk wilt <span className="font-serif-italic">weten.</span>
              </h2>
            </div>
            <div className="md:col-span-8">
              <dl className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
                {faqs.map((f) => (
                  <details
                    key={f.q}
                    className="group py-6 [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                      <dt className="font-display text-lg font-medium tracking-tight">
                        {f.q}
                      </dt>
                      <span
                        aria-hidden
                        className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-[var(--color-border-strong)] text-[var(--color-ink-muted)] transition group-open:rotate-45 group-open:border-[var(--color-accent)] group-open:bg-[var(--color-accent-soft)] group-open:text-[var(--color-accent)]"
                      >
                        +
                      </span>
                    </summary>
                    <dd className="mt-4 max-w-3xl text-[1rem] leading-relaxed text-[var(--color-ink-muted)]">
                      {f.a}
                    </dd>
                  </details>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA + FORM */}
      <section id="contact" className="border-b border-[var(--color-border)]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
                Plan een workshop
              </p>
              <h2 className="font-display mt-3 text-4xl font-semibold tracking-tight md:text-[2.75rem]">
                Eén werkdag is <span className="font-serif-italic">genoeg.</span>
              </h2>
              <p className="mt-6 text-[1.0625rem] leading-relaxed text-[var(--color-ink-muted)]">
                Stuur uw bedrijfsnaam en een datumvoorkeur. U ontvangt binnen één werkdag
                een bevestiging met agenda en factuur.
              </p>
              <div className="mt-10 space-y-2 text-sm text-[var(--color-ink-muted)]">
                <p>
                  <span className="font-medium text-[var(--color-ink)]">E-mail:</span>{" "}
                  info@aiverordening.eu
                </p>
                <p>
                  <span className="font-medium text-[var(--color-ink)]">Reactietijd:</span>{" "}
                  binnen één werkdag
                </p>
              </div>
            </div>

            <form
              name="workshop-aanvraag"
              method="POST"
              action="/?success=1"
              encType="application/x-www-form-urlencoded"
              className="md:col-span-7 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-white p-8 shadow-[var(--shadow-card)]"
            >
              <input type="hidden" name="form-name" value="workshop-aanvraag" />
              <p className="hidden" aria-hidden>
                <label>
                  Niet invullen: <input name="bot-field" />
                </label>
              </p>

              <div className="grid gap-5">
                <div>
                  <label
                    htmlFor="naam"
                    className="block text-xs font-medium uppercase tracking-wider text-[var(--color-ink-soft)]"
                  >
                    Uw naam
                  </label>
                  <input
                    id="naam"
                    name="naam"
                    required
                    autoComplete="name"
                    className="mt-2 w-full rounded-md border border-[var(--color-border)] bg-white px-3 py-3 text-sm focus:border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-ring)]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="bedrijf"
                    className="block text-xs font-medium uppercase tracking-wider text-[var(--color-ink-soft)]"
                  >
                    Bedrijf
                  </label>
                  <input
                    id="bedrijf"
                    name="bedrijf"
                    required
                    autoComplete="organization"
                    className="mt-2 w-full rounded-md border border-[var(--color-border)] bg-white px-3 py-3 text-sm focus:border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-ring)]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium uppercase tracking-wider text-[var(--color-ink-soft)]"
                  >
                    Zakelijk e-mailadres
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="mt-2 w-full rounded-md border border-[var(--color-border)] bg-white px-3 py-3 text-sm focus:border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-ring)]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="bericht"
                    className="block text-xs font-medium uppercase tracking-wider text-[var(--color-ink-soft)]"
                  >
                    Voorkeursdatum of vraag (optioneel)
                  </label>
                  <textarea
                    id="bericht"
                    name="bericht"
                    rows={3}
                    className="mt-2 w-full rounded-md border border-[var(--color-border)] bg-white px-3 py-3 text-sm focus:border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-ring)]"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-ink)] px-6 py-4 text-sm font-medium text-white transition hover:-translate-y-px hover:bg-[var(--color-accent-hover)]"
                >
                  Verstuur aanvraag
                  <span aria-hidden>→</span>
                </button>
                <p className="text-center text-xs text-[var(--color-ink-soft)]">
                  Wij reageren binnen één werkdag. Geen verkoop-spam.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[var(--color-canvas)]">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-col items-start justify-between gap-4 border-t border-[var(--color-border)] pt-8 text-sm text-[var(--color-ink-soft)] md:flex-row md:items-center">
            <div>
              <p className="font-display font-semibold text-[var(--color-ink)]">
                AI Verordening
              </p>
              <p className="mt-1">
                Praktische AI-compliance voor het Nederlandse MKB.
              </p>
            </div>
            <div className="md:text-right">
              <p>Verordening (EU) 2024/1689 · EU AI Act</p>
              <p className="mt-1">© {new Date().getFullYear()} aiverordening.eu</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-[var(--color-border)] bg-white/95 px-4 py-3 backdrop-blur md:hidden">
        <a
          href="#contact"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-ink)] px-6 py-3 text-sm font-medium text-white"
        >
          Plan workshop · €1.495
        </a>
      </div>
    </div>
  );
}
