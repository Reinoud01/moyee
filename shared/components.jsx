// Moyee landing pages, shared chrome (NoticeBar, Nav, Footer, Reveal, icons)

const {useState, useEffect, useRef, useContext} = React;

/* ───── Language context (created first so all components can use it) ───── */
window.LangContext = React.createContext({lang: 'nl', setLang: () => {}});

/* ───── Icons (Lucide-style inline) ───── */
const Icon = ({d, size = 22, stroke = 1.5, ...rest}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...rest}>
    {d}
  </svg>
);
const IconArrow   = (p) => <Icon {...p} d={<><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></>} />;
const IconArrowDn = (p) => <Icon {...p} d={<><path d="M12 5v14"/><path d="m5 12 7 7 7-7"/></>} />;
const IconPhone   = (p) => <Icon {...p} d={<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>} />;
const IconMail    = (p) => <Icon {...p} d={<><rect x="2" y="6" width="20" height="12" rx="2"/><path d="m2 8 10 6 10-6"/></>} />;
const IconCheck   = (p) => <Icon {...p} d={<><circle cx="12" cy="12" r="10"/><path d="m8 12 3 3 5-6"/></>} />;
const IconCart    = (p) => <Icon {...p} d={<><path d="M2 3h2l3 13h13l2-9H6"/><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/></>} />;
const IconUser    = (p) => <Icon {...p} d={<><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></>} />;
const IconStar    = (p) => <Icon {...p} d={<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>} fill="currentColor" stroke="none"/>;
const IconQuote   = (p) => <Icon {...p} d={<><path d="M3 21c0-9 6-13 13-13"/><path d="M3 21c3 0 6-1 6-6 0-3-3-5-6-5"/></>}/>;
const IconChat    = (p) => <Icon {...p} d={<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>} />;

/* ───── Reveal-on-scroll wrapper ───── */
function Reveal({children, delay = 0, as: As = 'div', ...rest}) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(() => setV(true), delay); o.disconnect(); }
    }, {threshold: 0.15});
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return (
    <As ref={ref} {...rest} style={{
      ...(rest.style || {}),
      opacity: v ? 1 : 0,
      transform: v ? 'translateY(0)' : 'translateY(12px)',
      transition: 'opacity 480ms ease-out, transform 480ms ease-out',
    }}>{children}</As>
  );
}

/* ───── Language toggle (NL / EN) ───── */
function LangToggle() {
  const {lang, setLang} = useContext(window.LangContext);
  return (
    <div style={{display:'flex',border:'1px solid #E5E5E5',overflow:'hidden',borderRadius:2,flexShrink:0}}>
      {['nl','en'].map(l => (
        <button key={l} onClick={() => setLang(l)} style={{
          padding:'8px 13px',
          background: l === lang ? '#272727' : 'transparent',
          color: l === lang ? '#fff' : '#868E96',
          border:0, cursor:'pointer',
          fontFamily:'Oswald,sans-serif',fontSize:11,textTransform:'uppercase',letterSpacing:'0.12em',fontWeight:500,
          transition:'all 160ms',
          lineHeight:1,
        }}>{l}</button>
      ))}
    </div>
  );
}

/* ───── Top utility bar (contact info) ───── */
function NoticeBar() {
  const {lang} = useContext(window.LangContext);
  const tagline = lang === 'en'
    ? 'Trial package · Delivery within 5 working days'
    : 'Proefpakket · Levering binnen 5 werkdagen';
  return (
    <div className="notice-bar" style={{background:'#272727',color:'#EEECE1',padding:'8px 40px',fontSize:12,fontFamily:'Oswald,sans-serif',textTransform:'uppercase',letterSpacing:'0.10em',fontWeight:500,display:'flex',justifyContent:'space-between',alignItems:'center',gap:20,flexWrap:'wrap'}}>
      <div style={{display:'flex',gap:22,alignItems:'center',flexWrap:'wrap'}}>
        <a href="mailto:b2b@moyeecoffee.com" style={{color:'#FFD900',textDecoration:'none',display:'inline-flex',alignItems:'center',gap:7}}>
          <IconMail size={13}/> b2b@moyeecoffee.com
        </a>
        <a href="tel:+31207372295" style={{color:'#EEECE1',textDecoration:'none',display:'inline-flex',alignItems:'center',gap:7}}>
          <IconPhone size={13}/> +31 20 737 22 95
        </a>
      </div>
      <span style={{color:'rgba(238,236,225,0.7)'}}>{tagline}</span>
    </div>
  );
}

/* ───── Navigation, landing-page version with page-cluster switcher ───── */
const ALL_PAGES = [
  {key:'bcorp',         nl:'B-Corp & ESG',         en:'B-Corp & ESG',         file:'/b-corps/'},
  {key:'tech',          nl:'Tech scale-ups',        en:'Tech scale-ups',       file:'/tech/'},
  {key:'creative',      nl:'Creatieve agencies',    en:'Creative agencies',    file:'/creative/'},
  {key:'professional',  nl:'Prof. services',         en:'Prof. services',        file:'/professional/'},
  {key:'cowork',        nl:'Cowork & flex',          en:'Cowork & flex',         file:'/cowork/'},
  {key:'finance',       nl:'Finance',                en:'Finance',               file:'/finance/'},
  {key:'horeca',        nl:'HoReCa',                 en:'HoReCa',                file:'/horeca/'},
  {key:'ngo',           nl:"NGO's",                  en:"NGOs",                  file:'/ngo/'},
];

function PageSwitcher({active}) {
  const {lang} = useContext(window.LangContext);
  return (
    <ul className="page-switcher" style={{display:'flex',gap:0,listStyle:'none',margin:0,padding:0,alignItems:'center'}}>
      {ALL_PAGES.map((p, i) => {
        const isActive = p.key === active;
        const label = lang === 'en' ? p.en : p.nl;
        return (
          <li key={p.key} style={{position:'relative'}}>
            <a href={p.file} style={{
              display:'inline-block',padding:'8px 12px',
              fontFamily:'Oswald,sans-serif',fontSize:11,textTransform:'uppercase',letterSpacing:'0.05em',fontWeight:500,
              color: isActive ? '#212529' : '#495057',
              background: isActive ? '#FFD900' : 'transparent',
              textDecoration:'none',
              borderRight: i < ALL_PAGES.length - 1 ? '1px solid #F1F3F5' : 'none',
              transition:'background 160ms, color 160ms',
            }}
            onMouseOver={e => { if (!isActive) { e.currentTarget.style.background='#F8F9FA'; }}}
            onMouseOut={e => { if (!isActive) { e.currentTarget.style.background='transparent'; }}}>
              {label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

function Nav({active}) {
  const {lang} = useContext(window.LangContext);
  const [mobileOpen, setMobileOpen] = useState(false);
  const ctaLabel   = lang === 'en' ? 'Trial package' : 'Proefpakket';
  const closeLabel = lang === 'en' ? 'Close menu'   : 'Sluit menu';
  const openLabel  = lang === 'en' ? 'Open menu'    : 'Open menu';
  return (
    <nav style={{
      position:'sticky',top:0,zIndex:30,
      display:'flex',alignItems:'center',gap:32,
      padding:'14px 40px',background:'#fff',
      borderBottom:'1px solid #F1F3F5',
    }}>
      <a href="/b-corps/" style={{cursor:'pointer',display:'flex',alignItems:'center'}}>
        <img src="/assets/logo/lockup-black.png" alt="moyee" style={{height:32}}/>
      </a>

      {/* Desktop page switcher */}
      <div className="nav-desktop" style={{display:'flex',alignItems:'center',marginRight:'auto',marginLeft:24,border:'1px solid #F1F3F5'}}>
        <PageSwitcher active={active}/>
      </div>

      <div className="nav-utility" style={{display:'flex',gap:12,alignItems:'center'}}>
        <LangToggle/>
        <a href="https://www.moyeecoffee.com/shop/4-flavour-pack-4-kg-1640#attribute_values=3" target="_blank" rel="noreferrer" style={{color:'#E5007D',fontFamily:'Oswald,sans-serif',fontSize:14,textTransform:'uppercase',letterSpacing:'0.08em',textDecoration:'none',padding:'10px 18px',border:'1px solid #E5007D'}}>{ctaLabel}</a>

        <button aria-label={mobileOpen ? closeLabel : openLabel} className="nav-hamburger" onClick={() => setMobileOpen(o => !o)} style={{
          background:'transparent',border:0,padding:8,cursor:'pointer',color:'#212529',
          width:42,height:42,display:'none',alignItems:'center',justifyContent:'center',
        }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {mobileOpen
              ? <><path d="M18 6 6 18"/><path d="m6 6 12 12"/></>
              : <><path d="M3 6h18"/><path d="M3 12h18"/><path d="M3 18h18"/></>
            }
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div style={{
          position:'absolute',top:'100%',left:0,right:0,
          background:'#fff',borderBottom:'4px solid #E5007D',boxShadow:'0 8px 24px rgba(0,0,0,0.12)',
          padding:'8px 0',
        }}>
          <ul style={{listStyle:'none',margin:0,padding:0}}>
            {ALL_PAGES.map(p => {
              const label = lang === 'en' ? p.en : p.nl;
              return (
                <li key={p.key}>
                  <a href={p.file} style={{
                    display:'block',padding:'14px 24px',
                    color: p.key === active ? '#212529' : '#495057',
                    background: p.key === active ? '#FFD900' : 'transparent',
                    textDecoration:'none',
                    fontFamily:'Oswald,sans-serif',fontSize:16,textTransform:'uppercase',letterSpacing:'0.06em',fontWeight:500,
                    borderBottom:'1px solid #F1F3F5',
                  }}>{label}</a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}

/* ───── Footer ───── */
function Footer() {
  const {lang} = useContext(window.LangContext);

  const cols = lang === 'en' ? [
    {h:'For businesses', items:['Custom quote','Trial package','Equipment','Service & maintenance']},
    {h:'Coffee',         items:['Single Origin','Double','Triple','Dark Roast']},
    {h:'About Moyee',   items:['Fairchain','Our farmers','Impact report','Press']},
  ] : [
    {h:'Voor bedrijven', items:['Offerte op maat','Proefpakket','Apparatuur','Service & onderhoud']},
    {h:'Koffie',         items:['Single Origin','Double','Triple','Dark Roast']},
    {h:'Over Moyee',     items:['Fairchain','Onze boeren','Impact rapport','Pers']},
  ];

  const tagline = lang === 'en'
    ? 'Radically good coffee with radical impact. Since 2012, from Amsterdam, roasted in Addis Ababa & Amsterdam-Noord.'
    : 'Radically good coffee with radical impact. Sinds 2012, vanuit Amsterdam, gebrand in Addis Abeba & Amsterdam-Noord.';

  const legalLinks = lang === 'en'
    ? ['Privacy','Terms','CoC 12345678']
    : ['Privacy','Voorwaarden','KvK 12345678'];

  return (
    <footer style={{background:'#272727',color:'#fff',padding:'70px 40px 32px'}}>
      <div style={{maxWidth:1280,margin:'0 auto'}}>
        <div style={{display:'grid',gridTemplateColumns:'1.5fr 1fr 1fr 1fr',gap:40,marginBottom:50}}>
          <div>
            <img src="/assets/logo/lockup-black.png" style={{height:32,filter:'brightness(0) invert(1)',marginBottom:18}}/>
            <p style={{fontSize:14,color:'rgba(255,255,255,0.7)',lineHeight:1.55,maxWidth:'36ch'}}>{tagline}</p>
          </div>
          {cols.map(c=>(
            <div key={c.h}>
              <h4 style={{fontFamily:'Oswald,sans-serif',fontWeight:500,fontSize:14,color:'#FFD900',textTransform:'uppercase',letterSpacing:'0.10em',marginBottom:14}}>{c.h}</h4>
              <ul style={{listStyle:'none',padding:0,margin:0,display:'flex',flexDirection:'column',gap:8}}>
                {c.items.map(i=><li key={i}><a style={{color:'rgba(255,255,255,0.7)',fontSize:14,cursor:'pointer',textDecoration:'none'}}>{i}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div style={{borderTop:'1px solid rgba(255,255,255,0.1)',paddingTop:20,display:'flex',justifyContent:'space-between',alignItems:'center',fontSize:12,color:'rgba(255,255,255,0.5)',flexWrap:'wrap',gap:14}}>
          <span>© 2026 Moyee Coffee BV · Make every sip count</span>
          <div style={{display:'flex',gap:20}}>
            {legalLinks.map(l=><a key={l} style={{color:'inherit',cursor:'pointer'}}>{l}</a>)}
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, {
  Icon, IconArrow, IconArrowDn, IconPhone, IconMail, IconCheck, IconCart, IconUser, IconStar, IconQuote, IconChat,
  Reveal, LangToggle, NoticeBar, Nav, Footer, ALL_PAGES,
});
