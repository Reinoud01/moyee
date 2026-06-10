// Landing-page sections, Hero, Story, Steps, Testimonials, Impact, FinalCTA
// Data-driven: each section takes its content from the page-data registry.

const PROEFPAKKET_URL = 'https://www.moyeecoffee.com/shop/4-flavour-pack-4-kg-1640#attribute_values=3';

/* ───── Hero (manifesto) ───── */
function Hero({ data, showBcorpBadge = false }) {
  const {lang} = React.useContext(window.LangContext);
  const calcLabel  = lang === 'en' ? 'Calculate quantity'  : 'Bereken hoeveelheid';
  const sinceLabel = lang === 'en' ? 'Fairchain · since 2012' : 'Fairchain · sinds 2012';
  return (
    <section className="hero" style={{
      background: '#272727', color: '#fff',
      padding: '100px 40px 110px', position: 'relative', overflow: 'hidden'
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 80, alignItems: 'center', position: 'relative' }}>
        <div>
          <span className="hero-eyebrow" style={{ display: 'inline-block', fontSize: 12, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#E5007D', fontWeight: 500, marginBottom: 24, borderTop: '2px solid #E5007D', paddingTop: 14 }}>
            {data.hero.eyebrow}
          </span>
          <h1 style={{
            fontFamily: 'Oswald,sans-serif', fontWeight: 500,
            fontSize: 'clamp(38px,5.4vw,76px)',
            color: '#fff', textTransform: 'uppercase',
            lineHeight: 0.94, margin: '0 0 32px',
            letterSpacing: '-0.005em'
          }}>
            {data.hero.headline.map((line, i) =>
            <span key={i} style={{ display: 'block', color: i === data.hero.headline.length - 1 ? '#E5007D' : '#fff' }}>{line}</span>
            )}
          </h1>
          <p style={{
            fontSize: 'clamp(17px,1.5vw,21px)', lineHeight: 1.5, color: 'rgba(255,255,255,0.85)',
            maxWidth: '52ch', margin: '0 0 40px'
          }}>{data.hero.subline}</p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
            <a href={PROEFPAKKET_URL} target="_blank" rel="noreferrer" className="hero-cta" style={{ background: '#E5007D', color: '#fff', border: 0, padding: '18px 30px', fontFamily: 'Oswald,sans-serif', fontSize: 15, textTransform: 'uppercase', letterSpacing: '0.08em', cursor: 'pointer', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10, fontWeight: 500 }}>
              {data.hero.ctaPrimary} <IconArrow size={16} />
            </a>
            <a href="#calculator" className="hero-cta" style={{ background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.5)', padding: '18px 30px', fontFamily: 'Oswald,sans-serif', fontSize: 15, textTransform: 'uppercase', letterSpacing: '0.08em', cursor: 'pointer', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10, fontWeight: 500 }}>
              {calcLabel} <IconArrowDn size={16} />
            </a>
          </div>
        </div>
        <div className="hero-image" style={{ position: 'relative', aspectRatio: '4/5', background: '#1a1a1a', overflow: 'hidden' }}>
          <image-slot
            id={`hero-${data.key}`}
            placeholder={data.hero.imagePlaceholder || 'Sleep een sfeerfoto hier'}
            shape="rect"
            style={{ width: '100%', height: '100%', display: 'block', background: '#1a1a1a', color: '#FFD900' }}>
          </image-slot>
          <span style={{ position: 'absolute', bottom: 24, left: 24, background: '#E5007D', color: '#fff', padding: '8px 14px', fontFamily: 'Oswald,sans-serif', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.10em', zIndex: 2 }}>{sinceLabel}</span>

          {showBcorpBadge &&
          <a href="https://www.bcorporation.net" target="_blank" rel="noreferrer"
          className="bcorp-hero-badge"
          title="Certified B Corporation"
          style={{
            position: 'absolute', right: 20, bottom: 20,
            width: 78, height: 104, zIndex: 3,
            filter: 'drop-shadow(0 6px 14px rgba(0,0,0,0.45))',
            transition: 'transform 240ms ease-out',
            display: 'block'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px) scale(1.04)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0) scale(1)'}>
              <img src="../assets/bcorp-badge.png" alt="Certified B Corporation"
            style={{ width: '100%', height: '100%', display: 'block' }} />
            </a>
          }
        </div>
      </div>
    </section>);

}

/* ───── Verhaal / Story ───── */
function Story({ data }) {
  const {lang} = React.useContext(window.LangContext);
  const sectionLabel = lang === 'en' ? 'The story' : 'Het verhaal';
  return (
    <section id="verhaal" style={{ background: '#fff', padding: '120px 40px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 80, alignItems: 'start' }}>
        <Reveal>
          <span style={{ fontSize: 12, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#E5007D', fontWeight: 500 }}>{sectionLabel}</span>
          <h2 style={{ fontFamily: 'Oswald,sans-serif', fontWeight: 500, fontSize: 'clamp(34px,4vw,52px)', margin: '16px 0 0', color: '#212529', lineHeight: 1.02, textTransform: 'uppercase' }}>{data.story.heading}</h2>
        </Reveal>
        <Reveal delay={120}>
          <p style={{ fontSize: 'clamp(17px,1.4vw,19px)', lineHeight: 1.6, color: '#212529', margin: '0 0 36px', maxWidth: '58ch' }}>
            {data.story.body}
          </p>
          <div style={{ padding: '30px 34px', background: '#F2DAE6', borderLeft: '4px solid #E5007D' }}>
            <p style={{ fontSize: 'clamp(16px,1.3vw,18px)', lineHeight: 1.6, color: '#212529', margin: 0, maxWidth: '58ch' }}>
              {data.story.highlight}
            </p>
          </div>
        </Reveal>
      </div>
    </section>);

}

/* ───── Hoe het werkt, 3 stappen ───── */
function Steps({ data }) {
  const {lang} = React.useContext(window.LangContext);
  const eyebrow = lang === 'en' ? 'How it works'        : 'Hoe het werkt';
  const heading = lang === 'en'
    ? <>In <span style={{ color: '#FFD900' }}>3 steps</span> into your kitchen</>
    : <>In <span style={{ color: '#FFD900' }}>3 stappen</span> in jullie keuken</>;

  return (
    <section id="hoe" style={{ background: '#272727', color: '#fff', padding: '120px 40px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <Reveal style={{ marginBottom: 60, maxWidth: 780 }}>
          <span style={{ fontSize: 12, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#FFD900', fontWeight: 500, borderTop: '2px solid #FFD900', paddingTop: 12, display: 'inline-block' }}>{eyebrow}</span>
          <h2 style={{ fontFamily: 'Oswald,sans-serif', fontWeight: 500, fontSize: 'clamp(36px,4.4vw,58px)', margin: '18px 0 0', color: '#fff', lineHeight: 1, textTransform: 'uppercase' }}>
            {heading}
          </h2>
        </Reveal>
        <div className="hscroll-mobile steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 32 }}>
          {data.steps.map((s, i) =>
          <Reveal key={i} delay={i * 120} style={{
            padding: '42px 36px 40px', background: 'rgba(255,255,255,0.04)',
            borderTop: '3px solid #FFD900', position: 'relative', minHeight: 280,
            display: 'flex', flexDirection: 'column'
          }}>
              <div style={{ fontFamily: 'Oswald,sans-serif', fontWeight: 500, fontSize: 84, lineHeight: 1, color: '#FFD900', marginBottom: 24, letterSpacing: '-0.02em' }}>
                0{i + 1}
              </div>
              <p style={{ fontFamily: 'Oswald,sans-serif', fontWeight: 500, fontSize: 'clamp(20px,1.8vw,26px)', lineHeight: 1.2, color: '#fff', margin: 0, textTransform: 'uppercase' }}>
                {s}
              </p>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}

/* ───── Testimonials ───── */
function Testimonials({ data }) {
  return (
    <section id="klanten" style={{ background: '#EEECE1', padding: '120px 40px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <Reveal style={{ marginBottom: 54, maxWidth: 780 }}>
          <span style={{ fontSize: 12, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#E5007D', fontWeight: 500 }}>{data.testimonials.label}</span>
          <h2 style={{ fontFamily: 'Oswald,sans-serif', fontWeight: 500, fontSize: 'clamp(36px,4.4vw,58px)', margin: '14px 0 0', color: '#212529', lineHeight: 1, textTransform: 'uppercase' }}>
            {data.testimonials.heading}
          </h2>
        </Reveal>
        <div className="hscroll-mobile testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
          {data.testimonials.items.map((t, i) =>
          <Reveal key={i} delay={i * 100} style={{
            background: '#fff', padding: '40px 36px',
            display: 'flex', flexDirection: 'column', gap: 22,
            position: 'relative', height: '100%', boxSizing: 'border-box'
          }}>
              <div style={{ minHeight: 44, display: 'flex', alignItems: 'center' }}>
                {t.logo
                  ? <img src={t.logo} alt={t.client} style={{ maxHeight: 38, maxWidth: 160, objectFit: 'contain', objectPosition: 'left center', filter: 'grayscale(1) brightness(0.15)' }} />
                  : <span style={{ color: '#E5007D' }}><IconQuote size={36} stroke={1.8} /></span>
                }
              </div>
              <p style={{ fontSize: 'clamp(16px,1.3vw,18px)', lineHeight: 1.55, color: '#212529', margin: 0, flex: 1, fontWeight: 400 }}>
                "{t.quote}"
              </p>
              <div style={{ paddingTop: 18, borderTop: '1px solid #F1F3F5' }}>
                <div style={{ fontFamily: 'Oswald,sans-serif', fontWeight: 500, fontSize: 15, color: '#212529', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{t.client}</div>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}

/* ───── Impact-blok (4 numbers) ───── */
function Impact({ data }) {
  const {lang} = React.useContext(window.LangContext);

  const numbers = lang === 'en' ? [
    { n: '80%',    l: 'Roasted in Ethiopia or Kenya' },
    { n: '+40%',   l: 'More income for the farmer vs. fairtrade' },
    { n: '10,000', l: 'Farmers in the Fairchain network' },
    { n: '2',      l: 'Own roasteries in Africa' },
  ] : [
    { n: '80%',    l: 'Gebrand in Ethiopië of Kenia' },
    { n: '+40%',   l: 'Meer inkomen voor de boer vs. fairtrade' },
    { n: '10.000', l: 'Boeren in het Fairchain-netwerk' },
    { n: '2',      l: 'Eigen branderijen in Afrika' },
  ];

  const subheading = lang === 'en' ? 'The numbers behind every cup' : 'De cijfers achter elke kop';

  return (
    <section id="impact" style={{ background: '#fff', padding: '110px 40px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <Reveal style={{ marginBottom: 48, maxWidth: 780 }}>
          <span style={{ fontSize: 12, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#E5007D', fontWeight: 500 }}>{data.impact.label}</span>
          <h2 style={{ fontFamily: 'Oswald,sans-serif', fontWeight: 500, fontSize: 'clamp(32px,3.6vw,46px)', margin: '12px 0 0', color: '#212529', lineHeight: 1, textTransform: 'uppercase' }}>
            {subheading}
          </h2>
        </Reveal>
        <div className="hscroll-mobile impact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0, borderTop: '1px solid #F1F3F5', borderBottom: '1px solid #F1F3F5' }}>
          {numbers.map((s, i) =>
          <Reveal key={i} delay={i * 80} style={{
            padding: '48px 32px',
            borderRight: i < 3 ? '1px solid #F1F3F5' : '0',
            display: 'flex', flexDirection: 'column', gap: 8
          }}>
              <div className="impact-num" style={{
              fontFamily: 'Oswald,sans-serif', fontWeight: 500,
              fontSize: 'clamp(56px,6vw,84px)', lineHeight: 0.95,
              color: '#E5007D', letterSpacing: '-0.02em'
            }}>{s.n}</div>
              <div style={{ fontSize: 14, color: '#495057', lineHeight: 1.4, marginTop: 6 }}>{s.l}</div>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}

/* ───── Final CTA (donker) ───── */
function FinalCTA({ data }) {
  const {lang} = React.useContext(window.LangContext);
  const eyebrow = lang === 'en' ? "Yes, let's go" : 'Ja, laat maar komen';
  return (
    <section id="cta" style={{
      background: '#272727', color: '#fff',
      padding: '120px 40px', position: 'relative', overflow: 'hidden'
    }}>
      <div style={{ maxWidth: 980, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
        <Reveal>
          <span style={{ display: 'inline-block', fontSize: 12, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#FFD900', fontWeight: 500, marginBottom: 24, borderTop: '2px solid #FFD900', paddingTop: 12 }}>{eyebrow}</span>
          <h2 style={{
            fontFamily: 'Oswald,sans-serif', fontWeight: 500,
            fontSize: 'clamp(40px,5.4vw,72px)',
            color: '#fff', textTransform: 'uppercase',
            lineHeight: 0.96, margin: '0 0 24px', letterSpacing: '-0.005em'
          }}>
            {data.cta.heading}
          </h2>
          <p style={{
            fontSize: 'clamp(17px,1.5vw,21px)', lineHeight: 1.5,
            color: 'rgba(255,255,255,0.85)',
            maxWidth: '56ch', margin: '0 auto 44px'
          }}>{data.cta.sub}</p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href={PROEFPAKKET_URL} target="_blank" rel="noreferrer" className="cta-button" style={{ background: '#FFD900', color: '#212529', padding: '18px 32px', fontFamily: 'Oswald,sans-serif', fontSize: 15, textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10, fontWeight: 500 }}>
              {data.cta.primary} <IconArrow size={16} />
            </a>
            <a href="#" className="cta-button" style={{ background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.5)', padding: '18px 32px', fontFamily: 'Oswald,sans-serif', fontSize: 15, textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10, fontWeight: 500 }}>
              {data.cta.secondary}
            </a>
          </div>
        </Reveal>
      </div>
    </section>);

}

/* ───── Full-bleed partner quote, manifesto image with yellow overlay ───── */
function FullBleedQuote({ data, quote }) {
  return (
    <section style={{
      position: 'relative', width: '100%',
      minHeight: 'min(720px, 90vh)',
      background: '#272727', color: '#FFD900',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden'
    }}>
      <image-slot
        id={`fullbleed-${data.key}`}
        placeholder="Sleep een breedformaat sfeerfoto hier, koffiebar, team, productie"
        shape="rect"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block', background: '#1a1a1a', color: '#FFD900', zIndex: 0 }}>
      </image-slot>
      {/* dim scrim so the yellow text is readable on any photo */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.32) 0%, rgba(0,0,0,0.45) 100%)', zIndex: 1, pointerEvents: 'none' }} />
      <Reveal style={{ position: 'relative', zIndex: 2, maxWidth: 1280, padding: '120px 40px', width: '100%', boxSizing: 'border-box' }}>
        <p className="fullbleed-quote" style={{
          fontFamily: 'Oswald,sans-serif', fontWeight: 500,
          fontSize: 'clamp(28px,3.8vw,56px)',
          lineHeight: 1.12, color: '#FFD900',
          textTransform: 'uppercase', letterSpacing: '-0.005em',
          textAlign: 'center', margin: 0,
          textShadow: '0 2px 24px rgba(0,0,0,0.5)'
        }}>
          {quote}
        </p>
      </Reveal>
    </section>);

}

/* ───── Fairchain pillars, 3 images with yellow caption ───── */
function FairchainPillars({ data }) {
  const {lang} = React.useContext(window.LangContext);

  const heading = lang === 'en'
    ? <><span style={{ color: '#E5007D' }}>Fairchain</span> coffee, what is it?</>
    : <>Wat is <span style={{ color: '#E5007D' }}>Fairchain</span> koffie?</>;

  const pillars = lang === 'en' ? [
    { key: 'roast',  caption: ['Roasted in the',     'country of origin'],  placeholder: 'Photo roastery in Addis Ababa / Nairobi' },
    { key: 'income', caption: ['Living wages',        'for farmers'],        placeholder: 'Photo farmer / cooperative / harvest' },
    { key: 'forest', caption: ['Protecting and',      'restoring forests'],  placeholder: 'Photo regenerative farming / reforestation' },
  ] : [
    { key: 'roast',  caption: ['Gebrand in het land', 'van herkomst'],       placeholder: 'Foto roastery in Addis Abeba / Nairobi' },
    { key: 'income', caption: ['Leefbare inkomens',   'voor boeren'],        placeholder: 'Foto boer / cooperatief / oogst' },
    { key: 'forest', caption: ['Bossen beschermen',   'en herstellen'],      placeholder: 'Foto regeneratieve landbouw / herbebossing' },
  ];

  return (
    <section style={{ background: '#EEECE1', padding: '100px 0 110px' }}>
      <Reveal style={{ maxWidth: 1280, margin: '0 auto 60px', padding: '0 40px', textAlign: 'center' }}>
        <h2 style={{
          fontFamily: 'Oswald,sans-serif', fontWeight: 500,
          fontSize: 'clamp(36px,4.8vw,64px)',
          margin: 0, color: '#212529', lineHeight: 1,
          textTransform: 'uppercase', letterSpacing: '-0.005em'
        }}>
          {heading}
        </h2>
      </Reveal>
      <div className="pillars-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 4, width: '100%', padding: '0 4px' }}>
        {pillars.map((p, i) =>
        <Reveal key={p.key} delay={i * 100} className="pillar-cell" style={{
          position: 'relative', aspectRatio: '3/4', overflow: 'hidden',
          background: '#272727'
        }}>
            <image-slot
            id={`pillar-${data.key}-${p.key}`}
            placeholder={p.placeholder}
            shape="rect"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block', background: '#1a1a1a', color: '#FFD900', zIndex: 0 }}>
            </image-slot>
            <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: '55%', background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 75%, rgba(0,0,0,0.7) 100%)', zIndex: 1, pointerEvents: 'none' }} />
            <div className="pillar-caption" style={{
            position: 'absolute', left: 32, right: 32, bottom: 32, zIndex: 2,
            color: '#FFD900',
            fontFamily: 'Oswald,sans-serif', fontWeight: 500,
            fontSize: 'clamp(22px,2.2vw,34px)',
            lineHeight: 1.05, textTransform: 'uppercase',
            textShadow: '0 2px 14px rgba(0,0,0,0.6)'
          }}>
              {p.caption.map((line, j) => <div key={j}>{line}</div>)}
            </div>
          </Reveal>
        )}
      </div>
    </section>);

}

/* ───── Products grid (5 koffies, EXACT from MKB Landing) ───── */
function Products() {
  const {lang} = React.useContext(window.LangContext);

  // Prices and shop URLs are the same regardless of language
  const PRODUCT_META = [
    { price: lang === 'en' ? '€ 27.00' : '€ 27,00', url: 'https://www.moyeecoffee.com/shop/single-1-kg-4' },
    { price: lang === 'en' ? '€ 25.00' : '€ 25,00', url: 'https://www.moyeecoffee.com/shop/double-1-kg-5' },
    { price: lang === 'en' ? '€ 23.00' : '€ 23,00', url: 'https://www.moyeecoffee.com/shop/triple-1-kg-6' },
    { price: lang === 'en' ? '€ 21.00' : '€ 21,00', url: 'https://www.moyeecoffee.com/shop/dark-1-kg-7'   },
    { price: lang === 'en' ? '€ 33.50' : '€ 33,50', url: 'https://www.moyeecoffee.com/shop' },
  ];

  const items = (lang === 'en' ? [
    { src: '../assets/products/single.webp', intensity: 2, acidity: 5, hi: false,
      title: 'Single Origin', tag: 'Bright & refined',
      copy: 'One origin, one bean. Delicate and fruity with a hint of honey. High acidity, low intensity, for those who appreciate nuance.' },
    { src: '../assets/products/double.webp', intensity: 3, acidity: 3, hi: false,
      title: 'Double Blend', tag: 'In balance',
      copy: 'A blend of two beans. Full-bodied with fruit and chocolate. Medium acidity, slightly higher intensity, the all-rounder for the office.' },
    { src: '../assets/products/triple.webp', intensity: 4, acidity: 2, hi: true,
      title: 'Triple Blend', tag: 'Crowd-pleaser',
      copy: 'Blend of three beans, from bean to bag. Full and creamy with chocolate, more approachable and intense. The coffee everyone likes.' },
    { src: '../assets/products/dark.webp', intensity: 5, acidity: 1, hi: false,
      title: 'Dark Roast', tag: 'Deep & round',
      copy: 'Traditional Italian style with notes of brown sugar and almond. Our most intense, and least acidic, coffee.' },
    { src: '../assets/products/lion-hills.webp', intensity: 3, acidity: 4, hi: false, badge: 'Microlot',
      title: 'Emma Microlot', tag: 'Limited edition',
      copy: 'Our Microlot Series, a single-farm specialty from Ethiopia, with distinctive citrus and floral notes. For the connoisseur.' },
  ] : [
    { src: '../assets/products/single.webp', intensity: 2, acidity: 5, hi: false,
      title: 'Single Origin', tag: 'Helder & verfijnd',
      copy: 'Eén herkomst, één boon. Delicaat, fruitig met een vleugje honing. Hoge aciditeit, lage intensiteit, voor wie nuance proeft.' },
    { src: '../assets/products/double.webp', intensity: 3, acidity: 3, hi: false,
      title: 'Double Blend', tag: 'In balans',
      copy: 'Mix van twee bonen. Full-bodied met fruit en chocolade. Medium aciditeit, iets hogere intensiteit, de allrounder voor op kantoor.' },
    { src: '../assets/products/triple.webp', intensity: 4, acidity: 2, hi: true,
      title: 'Triple Blend', tag: 'Crowd-pleaser',
      copy: 'Blend van drie bonen, from bean to bag. Vol en romig met chocolade, toegankelijker en intenser. De koffie die iedereen lekker vindt.' },
    { src: '../assets/products/dark.webp', intensity: 5, acidity: 1, hi: false,
      title: 'Dark Roast', tag: 'Diep & rond',
      copy: 'Traditionele Italiaanse stijl met noten van bruine suiker en amandel. Onze meest intense, en minst zure, koffie.' },
    { src: '../assets/products/lion-hills.webp', intensity: 3, acidity: 4, hi: false, badge: 'Microlot',
      title: 'Emma Microlot', tag: 'Limited edition',
      copy: 'Onze Microlot Series, een single-farm specialty uit Ethiopië, met kenmerkende citrus- en bloemennoten. Voor de fijnproever.' },
  ]).map((item, i) => ({...item, ...PRODUCT_META[i]}));

  const sectionLabel  = lang === 'en' ? 'Our coffee'                          : 'Onze koffie';
  const sectionTitle  = lang === 'en' ? <>Five characters,<br/>one Fairchain</> : <>Vijf karakters,<br />één Fairchain</>;
  const sectionSub    = lang === 'en'
    ? 'All blends are 100% specialty-grade and roasted in Addis Ababa and Amsterdam. Per 1 kg bag, also available ground or in cups.'
    : 'Alle blends zijn 100% specialty-grade en gebrand in Addis Abeba én Amsterdam. Per zak van 1 kg, ook gemalen of in cups.';
  const intensityLabel = lang === 'en' ? 'Intensity' : 'Intensiteit';
  const acidityLabel   = lang === 'en' ? 'Acidity'   : 'Aciditeit';
  const detailsLabel   = lang === 'en' ? 'Details'   : 'Details';
  const unsureTitle    = lang === 'en' ? "Not sure which one fits?" : 'Niet zeker welke past?';
  const unsureSub      = lang === 'en'
    ? "We'll send you a trial package with all four, drink, compare, choose."
    : 'We sturen je een proefpakket met alle vier, drink, vergelijk, kies.';
  const unsureCta      = lang === 'en' ? 'Request trial package' : 'Vraag proefpakket aan';

  return (
    <section id="producten" style={{ background: '#fff', padding: '110px 40px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <Reveal style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 50, flexWrap: 'wrap', gap: 20 }}>
          <div>
            <span style={{ fontSize: 12, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#E5007D', fontWeight: 500 }}>{sectionLabel}</span>
            <h2 style={{ fontFamily: 'Oswald,sans-serif', fontWeight: 500, fontSize: 'clamp(36px,4.4vw,58px)', margin: '12px 0 0', color: '#212529', lineHeight: 1, textTransform: 'uppercase' }}>{sectionTitle}</h2>
          </div>
          <p style={{ maxWidth: '44ch', fontSize: 16, color: '#495057', lineHeight: 1.55, margin: 0 }}>
            {sectionSub}
          </p>
        </Reveal>

        <div className="products-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 20 }}>
          {items.map((p, i) =>
          <Reveal key={p.title} className="products-card" delay={i * 80} style={{ background: '#fff', borderRadius: 6, overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 1px 4px rgba(0,0,0,0.06)', transition: 'box-shadow 240ms, transform 240ms' }}>
              <a href={p.url} target="_blank" rel="noreferrer" style={{ position: 'relative', background: '#F8F9FA', padding: '22px 14px 14px', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', aspectRatio: '1/1', overflow: 'hidden', textDecoration: 'none', cursor: 'pointer' }}>
                {p.hi && <span style={{ position: 'absolute', top: 14, left: 14, background: '#FFD900', color: '#212529', padding: '5px 10px', fontFamily: 'Oswald,sans-serif', fontSize: 10, letterSpacing: '0.10em', textTransform: 'uppercase', fontWeight: 500, zIndex: 1 }}>Bestseller</span>}
                {p.badge && <span style={{ position: 'absolute', top: 14, left: 14, background: '#272727', color: '#FFD900', padding: '5px 10px', fontFamily: 'Oswald,sans-serif', fontSize: 10, letterSpacing: '0.10em', textTransform: 'uppercase', fontWeight: 500, zIndex: 1 }}>{p.badge}</span>}
                <img src={p.src} alt={p.title} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain', filter: 'drop-shadow(4px 6px 14px rgba(0,0,0,0.18))', transition: 'transform 480ms ease-out' }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} />
              </a>
              <div style={{ padding: '20px 22px 24px', display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
                  <h3 style={{ fontFamily: 'Oswald,sans-serif', fontWeight: 500, fontSize: 22, color: '#212529', margin: 0, textTransform: 'uppercase', lineHeight: 1.05 }}>{p.title}</h3>
                </div>
                <span style={{ fontSize: 11, fontFamily: 'Oswald,sans-serif', textTransform: 'uppercase', letterSpacing: '0.10em', color: '#E5007D' }}>{p.tag}</span>
                <p style={{ fontSize: 13.5, color: '#495057', lineHeight: 1.5, margin: '4px 0 0', flex: 1 }}>{p.copy}</p>
                <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 5 }}>
                  {[[intensityLabel, p.intensity], [acidityLabel, p.acidity]].map(([k, v]) =>
                <div key={k} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ fontSize: 10, fontFamily: 'Oswald,sans-serif', textTransform: 'uppercase', letterSpacing: '0.08em', width: 64, color: '#868E96' }}>{k}</span>
                      <div style={{ flex: 1, display: 'flex', gap: 3 }}>
                        {[1, 2, 3, 4, 5].map((j) => <span key={j} style={{ flex: 1, height: 4, background: j <= v ? '#E5007D' : '#F1F3F5' }} />)}
                      </div>
                    </div>
                )}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 14, paddingTop: 14, borderTop: '1px solid #F1F3F5' }}>
                  <span style={{ fontFamily: 'Oswald,sans-serif', color: '#E5007D', fontSize: 20, fontWeight: 500 }}>{p.price}<small style={{ fontSize: 11, color: '#868E96', fontWeight: 400, marginLeft: 4 }}>/ kg</small></span>
                  <a href={p.url} target="_blank" rel="noreferrer" style={{ background: '#E5007D', color: '#fff', fontFamily: 'Oswald,sans-serif', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.08em', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none', padding: '8px 14px' }}>{detailsLabel} <IconArrow size={13} /></a>
                </div>
              </div>
            </Reveal>
          )}
        </div>

        <Reveal delay={300} style={{ marginTop: 50, padding: '28px 32px', background: '#272727', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
          <div>
            <div style={{ fontFamily: 'Oswald,sans-serif', fontWeight: 500, fontSize: 22, textTransform: 'uppercase', letterSpacing: '0.02em' }}>{unsureTitle}</div>
            <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', marginTop: 4 }}>{unsureSub}</div>
          </div>
          <a href={PROEFPAKKET_URL} target="_blank" rel="noreferrer" style={{ background: '#FFD900', color: '#212529', padding: '14px 24px', fontFamily: 'Oswald,sans-serif', fontSize: 14, textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            {unsureCta} <IconArrow size={14} />
          </a>
        </Reveal>
      </div>
    </section>);

}

/* ───── Fairchain blueprint (infographic + text) ───── */
function FairchainBlueprint() {
  const {lang} = React.useContext(window.LangContext);

  const heading = 'Fairchain is our blueprint for the future of coffee';
  const body = lang === 'en'
    ? "FairChain is not charity but a viable business model, designed to leave more added value in the communities where our coffee grows. By roasting in the origin country, paying farmers living incomes and protecting their forests (and planting many new ones), we've created a Fairchain blueprint, and we invite others to follow. The only real downside: brands like us earn less profit. That's why the big coffee multinationals and typical venture capitalists don't love us. It took us 12 years, falling, getting up, trying again, but we now dare to say that Fairchain is a very real blueprint for the future of coffee."
    : "FairChain is geen liefdadigheid maar een levensvatbaar bedrijfsmodel, ontworpen om méér toegevoegde waarde achter te laten in de gemeenschappen waar onze koffie groeit. Door te branden in het herkomstland, boeren leefbare inkomens te betalen en hun bossen te beschermen (en massaal nieuwe bossen aan te planten), hebben we een Fairchain-blueprint gemaakt, en we nodigen anderen uit om te volgen. Het enige grote nadeel: merken als wij verdienen minder winst. Daarom houden de grote koffie-multinationals en typische venture capitalists niet zo van ons. Het kostte ons 12 jaar, vallen, opstaan, opnieuw proberen, maar inmiddels durven we te zeggen dat Fairchain een heel reële blauwdruk is voor de toekomst van koffie.";

  const cta = lang === 'en' ? 'Get the coffee' : 'Haal de koffie';

  return (
    <section style={{ background: '#EEECE1', padding: '120px 40px' }}>
      <div className="blueprint-grid" style={{ maxWidth: 1600, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 80, alignItems: 'center' }}>
        <Reveal>
          <div
            role="img"
            aria-label="Fairchain euro-breakdown"
            style={{
              width: '100%',
              aspectRatio: '1 / 1',
              backgroundImage: 'url(../assets/fairchain-circle.png)',
              backgroundSize: '235% 100%',
              backgroundPosition: 'left center',
              backgroundRepeat: 'no-repeat',
            }}/>
        </Reveal>
        <Reveal delay={120}>
          <h2 style={{ fontFamily: 'Oswald,sans-serif', fontWeight: 500, fontSize: 'clamp(36px,4.4vw,60px)', margin: '0 0 26px', color: '#212529', lineHeight: 1.02, textTransform: 'uppercase', letterSpacing: '-0.005em' }}>
            {heading}
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: '#495057', margin: '0 0 32px', maxWidth: '56ch' }}>
            {body}
          </p>
          <a href="#producten" style={{ background: '#E5007D', color: '#fff', padding: '16px 28px', fontFamily: 'Oswald,sans-serif', fontSize: 14, textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10, borderRadius: 9999, fontWeight: 500 }}>
            {cta} <IconArrow size={14} />
          </a>
        </Reveal>
      </div>
    </section>);

}

/* ───── Tasting (pink manifesto) ───── */
function Tasting() {
  const {lang} = React.useContext(window.LangContext);

  const eyebrow  = lang === 'en' ? 'Order a trial package' : 'Proefpakket bestellen';
  const h2       = lang === 'en'
    ? <>You are going to love our coffee.<br /><span style={{ color: '#FFD900' }}>And our story.</span></>
    : <>You are going to love our coffee.<br /><span style={{ color: '#FFD900' }}>And our story.</span></>;
  const subline  = lang === 'en'
    ? 'Order a trial package and discover which Moyee fits your office. Three blends, 750g, delivered to your door.'
    : 'Bestel een proefpakket en ontdek welke Moyee past bij jullie kantoor. Drie blends, 750 gram, bezorgd bij jou.';
  const ctaLabel = lang === 'en' ? 'Order trial package' : 'Bestel proefpakket';
  const checkTitle = lang === 'en' ? "What's included?" : 'Wat zit erin?';

  const checks = lang === 'en' ? [
    '3 tasting packs · 750g total',
    'Single, Double, Triple & Dark Roast',
    'Choose your grind: whole bean, filter or espresso',
    'Delivered within 5 working days',
  ] : [
    '3 smaakpakketten · 750 gram',
    'Single, Double, Triple & Dark Roast',
    'Kies je maling: bonen, filter of espresso',
    'Bezorgd binnen 5 werkdagen',
  ];

  return (
    <section id="tasting" style={{ background: '#E5007D', color: '#fff', padding: '120px 40px', position: 'relative', overflow: 'hidden' }}>
      <div className="tasting-grid" style={{ maxWidth: 1180, margin: '0 auto', position: 'relative', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 70, alignItems: 'center' }}>
        <Reveal>
          <span style={{ display: 'inline-block', fontSize: 12, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#FFD900', fontWeight: 500, marginBottom: 22, borderTop: '2px solid #FFD900', paddingTop: 12 }}>{eyebrow}</span>
          <h2 style={{ fontFamily: 'Oswald,sans-serif', fontWeight: 500, fontSize: 'clamp(44px,6vw,86px)', color: '#fff', margin: '0 0 24px', lineHeight: 0.92, textTransform: 'uppercase' }}>
            {h2}
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: 'rgba(255,255,255,0.92)', maxWidth: '52ch', marginBottom: 38 }}>
            {subline}
          </p>
          <a href={PROEFPAKKET_URL} target="_blank" rel="noreferrer" style={{ background: '#FFD900', color: '#212529', padding: '18px 30px', fontFamily: 'Oswald,sans-serif', fontSize: 15, textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10, fontWeight: 500 }}>
            {ctaLabel} <IconArrow size={16} />
          </a>
        </Reveal>
        <Reveal delay={120} className="tasting-checks" style={{ background: 'rgba(0,0,0,0.18)', padding: '36px 36px', backdropFilter: 'blur(2px)' }}>
          <div style={{ fontFamily: 'Oswald,sans-serif', textTransform: 'uppercase', letterSpacing: '0.10em', fontSize: 13, color: '#FFD900', marginBottom: 22 }}>{checkTitle}</div>
          {checks.map((t, i) =>
          <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', padding: '14px 0', borderBottom: i < checks.length - 1 ? '1px solid rgba(255,255,255,0.18)' : '0' }}>
              <IconCheck size={22} style={{ color: '#FFD900', flexShrink: 0, marginTop: 2 }} />
              <span style={{ fontSize: 16, lineHeight: 1.45 }}>{t}</span>
            </div>
          )}
        </Reveal>
      </div>
    </section>);

}

/* ───── Contact (3 cards: bel / mail / chat) ───── */
function Contact() {
  const {lang} = React.useContext(window.LangContext);

  const heading  = lang === 'en' ? 'Call, email or chat' : 'Bellen, mailen of chatten';
  const subline  = lang === 'en'
    ? 'No form with 15 fields. No ticket number. Just a Moyista who knows you and calls you back.'
    : 'Geen formulier-met-15-velden. Geen ticketnummer. Wel een Moyista die je kent en terugbelt.';

  const ways = lang === 'en' ? [
    { ic: <IconPhone size={28} />, h: 'Call us',              sub: 'Mon–Fri · 9:00–17:30', v: '020 737 22 95',     href: 'tel:+31207372295' },
    { ic: <IconMail  size={28} />, h: 'Email us',             sub: 'Response within 1 working day', v: 'b2b@moyeecoffee.com', href: 'mailto:b2b@moyeecoffee.com' },
    { ic: <IconChat  size={28} />, h: 'Chat with a Moyista',  sub: 'Mon–Fri · 9:00–17:30', v: 'Start chat →',        href: '#' },
  ] : [
    { ic: <IconPhone size={28} />, h: 'Bel ons',              sub: 'Ma–vr · 9:00–17:30', v: '020 737 22 95',     href: 'tel:+31207372295' },
    { ic: <IconMail  size={28} />, h: 'Mail ons',             sub: 'Reactie binnen 1 werkdag', v: 'b2b@moyeecoffee.com', href: 'mailto:b2b@moyeecoffee.com' },
    { ic: <IconChat  size={28} />, h: 'Chat met een Moyista', sub: 'Ma–vr · 9:00–17:30', v: 'Start chat →',        href: '#' },
  ];

  return (
    <section id="contact" style={{ background: '#fff', padding: '110px 40px', borderTop: '1px solid #F1F3F5' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <Reveal style={{ textAlign: 'center', marginBottom: 54, maxWidth: 780, marginInline: 'auto' }}>
          <span style={{ fontSize: 12, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#E5007D', fontWeight: 500 }}>Contact</span>
          <h2 style={{ fontFamily: 'Oswald,sans-serif', fontWeight: 500, fontSize: 'clamp(36px,4.4vw,58px)', margin: '12px 0 12px', color: '#212529', lineHeight: 1, textTransform: 'uppercase' }}>
            {heading}
          </h2>
          <p style={{ fontSize: 17, color: '#495057', margin: 0 }}>{subline}</p>
        </Reveal>
        <div className="hscroll-mobile contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
          {ways.map((w, i) =>
          <Reveal key={i} delay={i * 90}>
              <a href={w.href} className="contact-card" style={{
              display: 'flex', flexDirection: 'column', gap: 16, padding: '34px 30px',
              background: '#F8F9FA', borderRadius: 8, textDecoration: 'none', color: '#212529',
              border: '1px solid transparent', transition: 'all 240ms', height: '100%', boxSizing: 'border-box'
            }}
            onMouseOver={(e) => {e.currentTarget.style.background = '#fff';e.currentTarget.style.borderColor = '#E5007D';e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)';}}
            onMouseOut={(e) => {e.currentTarget.style.background = '#F8F9FA';e.currentTarget.style.borderColor = 'transparent';e.currentTarget.style.boxShadow = 'none';}}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#E5007D', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{w.ic}</div>
                <div>
                  <h3 style={{ fontFamily: 'Oswald,sans-serif', fontWeight: 500, fontSize: 22, textTransform: 'uppercase', margin: '0 0 4px', color: '#212529' }}>{w.h}</h3>
                  <span style={{ fontSize: 13, color: '#868E96' }}>{w.sub}</span>
                </div>
                <div style={{ fontFamily: 'Oswald,sans-serif', fontSize: 22, color: '#E5007D', textTransform: 'uppercase', letterSpacing: '0.02em', marginTop: 'auto' }}>{w.v}</div>
              </a>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}

/* ───── Sticky CTA buttons (fixed bottom-right) ───── */
function StickyButtons() {
  const {lang} = React.useContext(window.LangContext);
  const koopLabel  = lang === 'en' ? 'Buy coffee'     : 'Koop koffie';
  const proefLabel = lang === 'en' ? 'Trial package'  : 'Proefpakket';

  return (
    <>
      <style>{`
        .sticky-btns {
          position: fixed; bottom: 28px; right: 28px; z-index: 40;
          display: flex; flex-direction: column; gap: 8px; align-items: stretch;
        }
        .sticky-btns a {
          display: flex; align-items: center; justify-content: center; gap: 9px;
          padding: 15px 22px;
          font-family: Oswald, sans-serif; font-size: 13px;
          text-transform: uppercase; letter-spacing: 0.09em; font-weight: 500;
          text-decoration: none; white-space: nowrap;
          transition: transform 160ms ease-out, box-shadow 160ms ease-out;
        }
        .sticky-btns a:hover { transform: translateY(-2px); }
        .sticky-btn-koop  { background: #272727; color: #FFD900; box-shadow: 0 4px 18px rgba(0,0,0,0.28); }
        .sticky-btn-koop:hover { box-shadow: 0 8px 24px rgba(0,0,0,0.38) !important; }
        .sticky-btn-proef { background: #E5007D; color: #fff; box-shadow: 0 4px 18px rgba(229,0,125,0.38); }
        .sticky-btn-proef:hover { box-shadow: 0 8px 24px rgba(229,0,125,0.48) !important; }
        @media (max-width: 600px) {
          .sticky-btns { bottom: 14px; right: 14px; gap: 6px; }
          .sticky-btns a { padding: 12px 16px; font-size: 12px; }
        }
      `}</style>
      <div className="sticky-btns">
        <a href="https://www.moyeecoffee.com/shop" target="_blank" rel="noreferrer" className="sticky-btn-koop">
          <IconCart size={15}/> {koopLabel}
        </a>
        <a href={PROEFPAKKET_URL} target="_blank" rel="noreferrer" className="sticky-btn-proef">
          <IconCart size={15}/> {proefLabel}
        </a>
      </div>
    </>
  );
}

/* ───── Price & Value, specialty coffee uitleg + prijspropositie ───── */
function PriceValue() {
  const {lang} = React.useContext(window.LangContext);
  const [open, setOpen] = React.useState(false);

  const t = lang === 'en' ? {
    eyebrow: 'Price & quality',
    heading: 'Specialty coffee. Surprisingly affordable.',
    intro: 'Most specialty coffee brands charge a premium. Moyee cuts out the middlemen, we roast at origin. That saving goes to the farmer and to you. Sometimes up to 2× cheaper than comparable specialty brands.',
    priceFrom: 'From',
    priceUnit: '/ kg',
    priceSub: 'Specialty grade. Roasted in Ethiopia or Kenya.',
    toggleShow: 'What is specialty coffee?',
    toggleHide: 'Close',
    specTitle: 'What is specialty coffee?',
    specBody: 'Specialty coffee is the highest quality coffee, produced with extreme care from plantation to cup. It is fully traceable and assessed by certified experts (Q-graders) on a 100-point scale.',
    specPoints: [
      { label: 'Score 80+', text: 'The coffee must score at least 80 out of 100 in a professional cupping session according to Specialty Coffee Association standards.' },
      { label: 'No defects', text: 'Specialty beans have zero taste-ruining defects, no rotten or unripe beans.' },
      { label: 'Distinctive terroir', text: 'The unique character of the soil, climate and altitude is clearly perceptible in the cup.' },
      { label: 'Full traceability', text: 'You know exactly where the coffee comes from, traceable to a cooperative, farmer, region or even a single micro-lot.' },
      { label: 'Arabica only', text: 'Specialty coffee always comes from the high-quality Arabica plant, known for its complexity of flavour.' },
    ],
  } : {
    eyebrow: 'Prijs & kwaliteit',
    heading: 'Specialty coffee. Verrassend betaalbaar.',
    intro: 'De meeste specialty koffiemerken rekenen een flinke toeslag. Moyee snijdt de tussenschakels eruit, wij branden aan de bron. Die besparing gaat naar de boer én naar jou. Soms wel 2× goedkoper dan vergelijkbare specialty merken.',
    priceFrom: 'Vanaf',
    priceUnit: '/ kg',
    priceSub: 'Specialty grade. Gebrand in Ethiopië of Kenia.',
    toggleShow: 'Wat is specialty coffee?',
    toggleHide: 'Sluiten',
    specTitle: 'Wat is specialty coffee?',
    specBody: 'Specialty coffee is de allerhoogste kwaliteit koffie, geproduceerd met extreme zorg en aandacht vanaf de plantage tot in jouw kopje. Volledig traceerbaar en beoordeeld door gecertificeerde experts (Q-graders) op een schaal van 100 punten.',
    specPoints: [
      { label: 'Score 80+', text: 'De koffie moet tijdens een professionele cupping minimaal 80 van de 100 punten behalen volgens de normen van de Specialty Coffee Association.' },
      { label: 'Geen defecten', text: 'Specialty bonen hebben géén smaakverpestende afwijkingen, zoals rotte of onrijpe bonen.' },
      { label: 'Onderscheidend terroir', text: 'Het unieke karakter van de grond, het klimaat en de hoogte waarop de koffie groeit, is duidelijk proefbaar in de kop.' },
      { label: 'Volledige transparantie', text: 'Je weet precies waar de koffie vandaan komt, traceerbaar tot een specifieke coöperatie, boer, regio of zelfs micro-kavel.' },
      { label: 'Alleen Arabica', text: 'Specialty coffee is altijd afkomstig van de hoogwaardige Arabica-plant, bekend om zijn complexiteit in smaak.' },
    ],
  };

  return (
    <section style={{ background: '#E5007D', padding: '100px 40px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <Reveal>
          <span style={{ fontSize: 12, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#FFD900', fontWeight: 500 }}>{t.eyebrow}</span>
          <h2 style={{ fontFamily: 'Oswald,sans-serif', fontWeight: 500, fontSize: 'clamp(32px,4vw,54px)', color: '#fff', textTransform: 'uppercase', margin: '12px 0 0', lineHeight: 1.05 }}>{t.heading}</h2>
        </Reveal>

        <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'start' }}>
          {/* Left: price block */}
          <Reveal>
            <div style={{ background: 'rgba(0,0,0,0.15)', padding: '36px 32px', borderLeft: '4px solid #FFD900' }}>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', fontFamily: 'Oswald,sans-serif', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 8 }}>{t.priceFrom}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                <span style={{ fontFamily: 'Oswald,sans-serif', fontSize: 'clamp(64px,8vw,96px)', color: '#FFD900', fontWeight: 500, lineHeight: 1 }}>€ 21</span>
                <span style={{ fontFamily: 'Oswald,sans-serif', fontSize: 22, color: 'rgba(255,255,255,0.7)' }}>{t.priceUnit}</span>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 14, margin: '12px 0 0', lineHeight: 1.5 }}>{t.priceSub}</p>
            </div>
          </Reveal>

          {/* Right: intro text + toggle button */}
          <Reveal delay={100}>
            <p style={{ color: '#fff', fontSize: 17, lineHeight: 1.65, margin: '0 0 24px' }}>{t.intro}</p>
            <button onClick={() => setOpen(o => !o)} style={{
              background: 'transparent', border: '1px solid rgba(255,255,255,0.4)', color: '#FFD900',
              fontFamily: 'Oswald,sans-serif', fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.10em',
              padding: '10px 18px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8,
            }}>
              {open ? t.toggleHide : t.toggleShow}
              <span style={{ fontSize: 18, lineHeight: 1, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 240ms', display: 'inline-block' }}>↓</span>
            </button>
          </Reveal>
        </div>

        {/* Specialty coffee uitleg, full width, buiten de grid */}
        {open && (
          <div style={{ marginTop: 40, borderTop: '1px solid rgba(255,255,255,0.25)', paddingTop: 32 }}>
            <h3 style={{ fontFamily: 'Oswald,sans-serif', fontWeight: 500, fontSize: 22, color: '#fff', textTransform: 'uppercase', margin: '0 0 14px' }}>{t.specTitle}</h3>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: 15, lineHeight: 1.65, margin: '0 0 20px', maxWidth: '72ch' }}>{t.specBody}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: '72ch' }}>
              {t.specPoints.map(pt => (
                <p key={pt.label} style={{ margin: 0, color: 'rgba(255,255,255,0.9)', fontSize: 14, lineHeight: 1.65 }}>
                  <span style={{ fontFamily: 'Oswald,sans-serif', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#FFD900', marginRight: 8 }}>{pt.label}:</span>
                  {pt.text}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

Object.assign(window, { Hero, Story, Steps, Testimonials, Impact, FinalCTA, FullBleedQuote, FairchainPillars, Products, PriceValue, FairchainBlueprint, Tasting, Contact, StickyButtons });
