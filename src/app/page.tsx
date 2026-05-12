import Link from "next/link";

const deliverables = [
  {
    title: "AI-register",
    body: "Ingevuld overzicht van alle AI-tools die uw organisatie gebruikt, per leverancier en doel.",
  },
  {
    title: "Risico-classificatie",
    body: "Per AI-systeem: verboden, hoog-risico, beperkt of minimaal. Conform de richtlijn.",
  },
  {
    title: "30/60/90-dagen plan",
    body: "Concrete acties met eigenaarschap, deadlines en bewijsstukken voor het bestuur.",
  },
  {
    title: "AI-geletterdheid plan",
    body: "Trainingsstructuur per rol, conform Artikel 4 van de AI-verordening.",
  },
];

const agenda = [
  { time: "09:00", title: "Wat staat er op het spel", body: "Tijdslijn, sancties, wettelijke kaders." },
  { time: "09:30", title: "Live AI-inventaris", body: "Alle AI-systemen in uw organisatie in kaart." },
  { time: "10:45", title: "Risico-classificatie", body: "Per systeem: wat zegt de richtlijn?" },
  { time: "13:00", title: "Wat te doen per categorie", body: "Concrete maatregelen, geen juridisch college." },
  { time: "14:30", title: "AI-geletterdheid plan", body: "Welke rol krijgt welke training." },
  { time: "15:30", title: "Actieplan + besluit", body: "30/60/90-dagen plan, eigenaren benoemd." },
];

const faqs = [
  {
    q: "Voor welke bedrijven is deze workshop geschikt?",
    a: "MKB-organisaties (10–250 medewerkers) die AI inzetten in HR, klantenservice, marketing of operatie. Bijzonder relevant als u CV-screening, chatbots of geautomatiseerde besluitvorming gebruikt.",
  },
  {
    q: "Is dit een juridische cursus?",
    a: "Nee. Dit is een praktische sessie die u in staat stelt direct concrete maatregelen te nemen. Aan het einde van de dag heeft u werkende documenten, geen theoretisch kader.",
  },
  {
    q: "Hoe wordt de workshop geleverd?",
    a: "In-company bij uw kantoor, of via video. Maximaal 12 deelnemers per sessie. Bestuur, HR, IT en relevante teamleads.",
  },
  {
    q: "Kan ik subsidie krijgen?",
    a: "Veel MKB-bedrijven komen in aanmerking voor de SLIM-regeling, die scholing rond AI-geletterdheid (Art. 4) ondersteunt. Wij helpen u bij de aanvraag.",
  },
  {
    q: "Wat als ik na de workshop hulp nodig heb?",
    a: "U ontvangt 30 dagen e-mailondersteuning kosteloos. Daarna kunt u kiezen voor een doorlopend abonnement of ad-hoc consultaties.",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <header className="border-b border-zinc-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-sm font-semibold tracking-tight">
            AI-verordening<span className="text-emerald-700">.nl</span>
          </Link>
          <nav className="hidden gap-8 text-sm text-zinc-600 md:flex">
            <a href="#workshop" className="hover:text-zinc-900">Workshop</a>
            <a href="#agenda" className="hover:text-zinc-900">Programma</a>
            <a href="#prijs" className="hover:text-zinc-900">Prijs</a>
            <a href="#contact" className="hover:text-zinc-900">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-800"
          >
            Plan workshop
          </a>
        </div>
      </header>

      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-5">
            <div className="md:col-span-3">
              <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800">
                EU AI-verordening &middot; deadline hoog-risico systemen: 2 augustus 2026
              </span>
              <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight text-zinc-900">
                AI-verordening voor uw bedrijf, in &eacute;&eacute;n dag geregeld.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600">
                Een in-company workshop voor MKB-organisaties die AI inzetten en de
                verplichtingen uit de EU AI-verordening serieus willen invullen. Aan het
                einde van de dag heeft u een ingevuld AI-register, een risico-classificatie
                per systeem en een concreet 30/60/90-dagen plan voor het bestuur.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="rounded-md bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
                >
                  Plan een workshop &mdash; &euro;1.495
                </a>
                <a
                  href="#workshop"
                  className="rounded-md border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-900 transition hover:bg-white"
                >
                  Eerst meer informatie
                </a>
              </div>
              <p className="mt-4 text-xs text-zinc-500">
                Vanaf 2 februari 2025 verplicht voor &eacute;lke organisatie die AI inzet (Artikel 4).
              </p>
            </div>
            <div className="md:col-span-2">
              <div className="rounded-lg border border-zinc-200 bg-white p-8 shadow-sm">
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Wat u meeneemt
                </p>
                <ul className="mt-4 space-y-3 text-sm text-zinc-700">
                  <li className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-600" />
                    AI-register, ingevuld voor uw organisatie
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-600" />
                    Risico-classificatie per AI-systeem
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-600" />
                    30/60/90-dagen actieplan
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-600" />
                    AI-geletterdheid plan (Art. 4)
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-600" />
                    Werkbare beleids- en proceduretemplates
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-600" />
                    30 dagen kosteloze e-mailondersteuning
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="workshop" className="border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="md:col-span-1">
              <p className="text-xs font-medium uppercase tracking-wider text-emerald-700">
                Deliverables
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                Resultaat, geen theorie.
              </h2>
              <p className="mt-4 text-zinc-600">
                Een werkdag waarna u kunt aantonen dat u in beweging bent. Geen sheets
                voor de boekenkast.
              </p>
            </div>
            <div className="grid gap-6 md:col-span-2 md:grid-cols-2">
              {deliverables.map((d) => (
                <div key={d.title} className="rounded-lg border border-zinc-200 p-6">
                  <h3 className="text-base font-semibold text-zinc-900">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">{d.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="agenda" className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-medium uppercase tracking-wider text-emerald-700">
            Programma
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            De werkdag, uur voor uur.
          </h2>
          <div className="mt-10 overflow-hidden rounded-lg border border-zinc-200 bg-white">
            {agenda.map((row, idx) => (
              <div
                key={row.time}
                className={`grid gap-4 px-6 py-5 md:grid-cols-12 ${
                  idx !== agenda.length - 1 ? "border-b border-zinc-100" : ""
                }`}
              >
                <div className="md:col-span-2 text-sm font-medium text-zinc-500">{row.time}</div>
                <div className="md:col-span-4 text-base font-semibold text-zinc-900">
                  {row.title}
                </div>
                <div className="md:col-span-6 text-sm text-zinc-600">{row.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="prijs" className="border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-medium uppercase tracking-wider text-emerald-700">
            Investering
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            E&eacute;n prijs, geen verrassingen.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-zinc-200 p-8">
              <p className="text-sm font-medium text-zinc-500">In-company workshop</p>
              <p className="mt-4 text-4xl font-semibold tracking-tight">
                &euro;1.495 <span className="text-base font-normal text-zinc-500">excl. BTW</span>
              </p>
              <p className="mt-3 text-sm text-zinc-600">E&eacute;n werkdag, tot 12 deelnemers, op locatie of online.</p>
              <ul className="mt-6 space-y-2 text-sm text-zinc-700">
                <li>Volledige werkdag (09:00&ndash;16:30)</li>
                <li>Alle deliverables inbegrepen</li>
                <li>30 dagen e-mailondersteuning</li>
              </ul>
            </div>
            <div className="rounded-lg border-2 border-emerald-700 p-8">
              <p className="text-sm font-medium text-emerald-700">Workshop + traject</p>
              <p className="mt-4 text-4xl font-semibold tracking-tight">
                &euro;2.995 <span className="text-base font-normal text-zinc-500">excl. BTW</span>
              </p>
              <p className="mt-3 text-sm text-zinc-600">Workshop plus 90 dagen begeleiding en kwartaalreview.</p>
              <ul className="mt-6 space-y-2 text-sm text-zinc-700">
                <li>Alles uit de workshop</li>
                <li>90 dagen begeleiding</li>
                <li>1x kwartaal-review (1 uur)</li>
                <li>Toegang tot updates bij wijzigingen</li>
              </ul>
            </div>
            <div className="rounded-lg border border-zinc-200 p-8">
              <p className="text-sm font-medium text-zinc-500">Doorlopend abonnement</p>
              <p className="mt-4 text-4xl font-semibold tracking-tight">
                &euro;249 <span className="text-base font-normal text-zinc-500">/ maand</span>
              </p>
              <p className="mt-3 text-sm text-zinc-600">Voor organisaties die hun AI-register actueel willen houden.</p>
              <ul className="mt-6 space-y-2 text-sm text-zinc-700">
                <li>AI-register up-to-date</li>
                <li>Kwartaal-review</li>
                <li>Updates bij regelgevingswijzigingen</li>
                <li>Onbeperkte e-mailondersteuning</li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-sm text-zinc-500">
            Mogelijk subsidie via de SLIM-regeling voor scholing rond AI-geletterdheid. Wij ondersteunen bij de aanvraag.
          </p>
        </div>
      </section>

      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-medium uppercase tracking-wider text-emerald-700">
            Veelgestelde vragen
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Wat u waarschijnlijk wilt weten.
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="text-base font-semibold text-zinc-900">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-emerald-700">
                Plan een workshop
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                Een werkdag is genoeg. Een mail kost u &eacute;&eacute;n minuut.
              </h2>
              <p className="mt-6 text-zinc-600">
                Stuur uw bedrijfsnaam, het aantal deelnemers en een datumvoorkeur. U
                ontvangt binnen &eacute;&eacute;n werkdag een bevestiging met agenda en factuur.
              </p>
              <div className="mt-8 space-y-2 text-sm text-zinc-700">
                <p><span className="font-medium text-zinc-900">E-mail:</span> info@ai-verordening.nl</p>
                <p><span className="font-medium text-zinc-900">Telefoon:</span> beschikbaar na contact</p>
              </div>
            </div>
            <form
              action="https://formspree.io/f/your-form-id"
              method="POST"
              className="rounded-lg border border-zinc-200 bg-white p-8"
            >
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-900">Bedrijfsnaam</label>
                  <input
                    name="bedrijf"
                    required
                    className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-900">Uw naam</label>
                  <input
                    name="naam"
                    required
                    className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-900">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-900">Aantal deelnemers</label>
                  <input
                    name="deelnemers"
                    type="number"
                    min={1}
                    max={20}
                    className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-900">Bericht (optioneel)</label>
                  <textarea
                    name="bericht"
                    rows={3}
                    className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-zinc-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
                >
                  Verstuur aanvraag
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} AI-verordening.nl &mdash; praktische AI-compliance voor het MKB.</p>
          <p>EU AI Act &middot; Verordening (EU) 2024/1689</p>
        </div>
      </footer>
    </div>
  );
}
