// Calculator, EXACT reuse from MKB Landing.
// Renders identically across all 4 landing pages.

function Calculator() {
  const {lang} = React.useContext(window.LangContext);
  const [n, setN] = React.useState(20);
  const safeN = typeof n === 'number' ? n : 0;
  const gramsPerDay = safeN * 27;                   // 1 drinker = 3 kopjes × 9 g
  const kgPerWeek = (gramsPerDay * 5) / 1000;
  const kgPerMonth = kgPerWeek * 4.33;
  const bags1kg = Math.ceil(kgPerMonth);
  const eurPerMonth = Math.round(kgPerMonth * 25);  // ~ €25/kg blended estimate

  // ── Localised number formatting ──
  const fmtDec = (n, d) => n.toLocaleString(lang === 'en' ? 'en-GB' : 'nl-NL', {maximumFractionDigits: d});

  // ── Strings ──
  const t = lang === 'en' ? {
    eyebrow:    'Calculate your subscription',
    heading:    <>How much coffee does <span style={{color:'#E5007D'}}>your office</span> need?</>,
    subline:    'We calculate with 3 cups per day per drinker (1 cup = 9 grams), 5 days a week. Slide or type, we calculate along.',
    inputLabel: 'Number of coffee drinkers at the office',
    colleagues: "colleagues",
    formula:    'Our calculation',
    perDay:     'Per day',
    perWeek:    'Per week',
    perMonth:   'Per month',
    indicative: 'Indicative',
    cups:       'cups',
    bags:       `bags of 1 kg`,
    perMonthEx: 'per month · excl. VAT',
    cta:        'Request a custom quote',
  } : {
    eyebrow:    'Bereken je abonnement',
    heading:    <>Hoeveel koffie heeft <span style={{color:'#E5007D'}}>jullie kantoor</span> nodig?</>,
    subline:    'We rekenen met 3 kopjes per dag per drinker (1 kopje = 9 gram), 5 dagen per week. Schuif of typ, we rekenen mee.',
    inputLabel: 'Aantal koffiedrinkers op kantoor',
    colleagues: "collega's",
    formula:    'Onze rekensom',
    perDay:     'Per dag',
    perWeek:    'Per week',
    perMonth:   'Per maand',
    indicative: 'Indicatief',
    cups:       'kopjes',
    bags:       `zakken van 1 kg`,
    perMonthEx: 'per maand · excl. btw',
    cta:        'Vraag een offerte op maat',
  };

  const rows = [
    {l: t.perDay,     v: `${fmtDec(gramsPerDay/1000, 2)} kg`,   s: `${safeN*3} ${t.cups}`},
    {l: t.perWeek,    v: `${fmtDec(kgPerWeek, 1)} kg`,           s: `${safeN*15} ${t.cups}`},
    {l: t.perMonth,   v: `${fmtDec(kgPerMonth, 1)} kg`,          s: `≈ ${bags1kg} ${t.bags}`},
    {l: t.indicative, v: `€ ${fmtDec(eurPerMonth, 0)}`,          s: t.perMonthEx},
  ];

  return (
    <section id="calculator" style={{background:'#EEECE1',padding:'110px 40px',position:'relative'}}>
      <div style={{maxWidth:1280,margin:'0 auto'}}>
        <Reveal style={{marginBottom:50,maxWidth:780}}>
          <span style={{fontSize:12,letterSpacing:'0.24em',textTransform:'uppercase',color:'#E5007D',fontWeight:500}}>{t.eyebrow}</span>
          <h2 style={{fontFamily:'Oswald,sans-serif',fontWeight:500,fontSize:'clamp(36px,4.4vw,58px)',margin:'12px 0 14px',color:'#212529',lineHeight:1,textTransform:'uppercase'}}>
            {t.heading}
          </h2>
          <p style={{fontSize:17,lineHeight:1.55,color:'#495057',margin:0,maxWidth:'60ch'}}>
            {t.subline}
          </p>
        </Reveal>

        <Reveal delay={120} className="calc-card" style={{
          background:'#fff',padding:'48px 56px',borderRadius:8,
          boxShadow:'0 4px 16px rgba(0,0,0,0.06)',
          display:'grid',gridTemplateColumns:'1fr 1fr',gap:64,alignItems:'center',
        }}>
          <div>
            <label htmlFor="emp" style={{display:'block',fontFamily:'Oswald,sans-serif',textTransform:'uppercase',letterSpacing:'0.10em',fontSize:13,color:'#495057',marginBottom:18,fontWeight:500}}>
              {t.inputLabel}
            </label>
            <div className="calc-input-row" style={{display:'flex',alignItems:'baseline',gap:14,marginBottom:24}}>
              <input id="emp" type="number" min="1" max="500" value={n}
                onChange={e => {
                  const v = e.target.value;
                  if (v === '') { setN(''); return; }
                  const num = parseInt(v, 10);
                  if (Number.isNaN(num)) return;
                  setN(Math.min(500, Math.max(0, num)));
                }}
                onBlur={e => { if (e.target.value === '' || Number(e.target.value) < 1) setN(1); }}
                className="calc-num-input"
                style={{
                  width:160,fontFamily:'Oswald,sans-serif',fontWeight:500,
                  fontSize:84,color:'#E5007D',background:'transparent',
                  border:0,borderBottom:'2px solid #E5007D',
                  outline:'none',padding:'0 0 4px',lineHeight:1,
                }}/>
              <span style={{fontFamily:'Oswald,sans-serif',fontSize:22,color:'#212529',textTransform:'uppercase',letterSpacing:'0.04em'}}>{t.colleagues}</span>
            </div>
            <input type="range" min="1" max="200" value={Math.min(safeN || 1, 200)}
              onChange={e => setN(Number(e.target.value))}
              style={{width:'100%',accentColor:'#E5007D',height:4}}/>
            <div style={{display:'flex',justifyContent:'space-between',fontSize:12,color:'#868E96',marginTop:8,fontFamily:'Oswald,sans-serif',letterSpacing:'0.08em',textTransform:'uppercase'}}>
              <span>1</span><span>50</span><span>100</span><span>200+</span>
            </div>

            <div className="calc-formula" style={{marginTop:36,padding:'18px 22px',background:'#F2DAE6',borderRadius:8,fontSize:14,color:'#212529',lineHeight:1.5}}>
              <strong style={{fontFamily:'Oswald,sans-serif',textTransform:'uppercase',letterSpacing:'0.08em',fontSize:13,color:'#E5007D',display:'block',marginBottom:4}}>{t.formula}</strong>
              {safeN} × 3 {lang === 'en' ? 'cups' : 'kopjes'} × 9 g × 5 {lang === 'en' ? 'days' : 'dagen'} = <strong>{fmtDec(gramsPerDay*5/1000, 2)} kg / {lang === 'en' ? 'week' : 'week'}</strong>
            </div>
          </div>

          <div style={{display:'flex',flexDirection:'column',gap:16}}>
            {rows.map((r,i) => (
              <div key={i} style={{
                display:'flex',justifyContent:'space-between',alignItems:'center',
                padding:'18px 22px',background: i === 3 ? '#272727' : '#F8F9FA',
                borderRadius:8,color: i === 3 ? '#fff' : '#212529',
                borderLeft: i === 3 ? '4px solid #FFD900' : '4px solid #E5007D',
              }}>
                <div>
                  <div style={{fontFamily:'Oswald,sans-serif',textTransform:'uppercase',letterSpacing:'0.10em',fontSize:12,color: i===3?'rgba(255,255,255,0.6)':'#868E96',fontWeight:500}}>{r.l}</div>
                  <div style={{fontSize:13,marginTop:4,color: i===3?'rgba(255,255,255,0.8)':'#495057'}}>{r.s}</div>
                </div>
                <div className="calc-result-num" style={{fontFamily:'Oswald,sans-serif',fontWeight:500,fontSize:34,lineHeight:1,color: i===3 ? '#FFD900' : '#E5007D'}}>{r.v}</div>
              </div>
            ))}
            <a href="#contact" style={{marginTop:8,background:'#E5007D',color:'#fff',padding:'16px 22px',fontFamily:'Oswald,sans-serif',fontSize:14,textTransform:'uppercase',letterSpacing:'0.08em',borderRadius:4,cursor:'pointer',textDecoration:'none',textAlign:'center',display:'flex',alignItems:'center',justifyContent:'center',gap:10}}>
              {t.cta} <IconArrow size={16}/>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, {Calculator});
