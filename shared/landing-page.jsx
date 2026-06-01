// LandingPage — composes all sections from a page-data entry.

/* ── Merge English overrides onto the Dutch base data ── */
function getPageData(data, lang) {
  if (lang !== 'en' || !data.en) return data;
  const en = data.en;
  return {
    ...data,
    title:        en.title        || data.title,
    hero:         {...data.hero,         ...en.hero},
    story:        {...data.story,        ...en.story},
    steps:        en.steps        || data.steps,
    testimonials: en.testimonials || data.testimonials,
    impact:       {...data.impact,  ...(en.impact || {})},
    cta:          {...data.cta,    ...en.cta},
    // key stays the same (drives image-slot IDs)
    key: data.key,
  };
}

function LandingPage({pageKey}) {
  const rawData = window.PAGE_DATA[pageKey];
  const [quizOpen, setQuizOpen] = React.useState(false);

  /* ── Language state — persisted in localStorage ── */
  const [lang, setLang] = React.useState(() => {
    try { return localStorage.getItem('moyee-lang') || 'nl'; } catch { return 'nl'; }
  });
  const handleSetLang = (l) => {
    setLang(l);
    try { localStorage.setItem('moyee-lang', l); } catch {}
  };

  const data = getPageData(rawData, lang);

  React.useEffect(() => { document.title = data.title; }, [data.title]);

  /* ── Fairchain manifesto quote — bilingual ── */
  const manifestoQuote = lang === 'en'
    ? "We are not just your supplier; we are your partner. In our Fairchain mission to leave no one behind, we can only be successful if you are too."
    : "Wij zijn niet alleen jullie leverancier; wij zijn jullie partner. In onze Fairchain-missie om niemand achter te laten, kunnen wij alleen succesvol zijn als jullie dat ook zijn.";

  // JSX requires capitalised component names; destructure Provider here
  const LangProvider = window.LangContext.Provider;

  return (
    <LangProvider value={{lang, setLang: handleSetLang}}>
      <main data-screen-label={data.hero.eyebrow}>
        <NoticeBar/>
        <Nav active={pageKey}/>
        <Hero data={data} showBcorpBadge={pageKey === 'bcorp'}/>
        <Story data={data}/>
        <PriceValue/>
        <FairchainPillars data={data}/>
        <Steps data={data}/>
        <Products/>
        <Calculator/>
        <QuizTeaser onOpen={() => setQuizOpen(true)}/>
        <FullBleedQuote data={data} quote={manifestoQuote}/>
        <FairchainBlueprint/>
        <Testimonials data={data}/>
        <Impact data={data}/>
        <Tasting/>
        <Contact/>
        <Footer/>
        <QuizModal open={quizOpen} onClose={() => setQuizOpen(false)}/>
        <StickyButtons/>
        <MoyeeTweaks pageKey={pageKey}/>
      </main>
    </LangProvider>
  );
}

window.LandingPage = LandingPage;
