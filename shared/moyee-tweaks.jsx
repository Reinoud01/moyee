// Tweaks: simple page switcher between the 4 landing pages.
// Persists the active page via the standard EDITMODE block so a reload lands on the same page.

function MoyeeTweaks({pageKey}) {
  const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
    "page": "bcorp"
  }/*EDITMODE-END*/;

  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // When user picks a different page, jump there.
  function pickPage(key) {
    const page = ALL_PAGES.find(p => p.key === key);
    if (!page) return;
    setTweak('page', key);
    if (key !== pageKey) {
      window.location.href = page.file;
    }
  }

  return (
    <TweaksPanel>
      <TweakSection label="Pagina"/>
      <div style={{display:'flex',flexDirection:'column',gap:6,padding:'6px 12px 12px'}}>
        {ALL_PAGES.map(p => {
          const isActive = p.key === pageKey;
          return (
            <button key={p.key} onClick={() => pickPage(p.key)} style={{
              textAlign:'left',padding:'9px 11px',
              background: isActive ? '#272727' : '#fff',
              color: isActive ? '#FFD900' : '#29261b',
              border: isActive ? '1px solid #272727' : '1px solid rgba(0,0,0,.12)',
              borderRadius:6,cursor: isActive ? 'default' : 'pointer',
              font:'inherit',fontWeight: isActive ? 600 : 500,
              display:'flex',alignItems:'center',justifyContent:'space-between',gap:8,
            }}>
              <span>{p.label}</span>
              {isActive && <span style={{fontSize:10,letterSpacing:'.1em',textTransform:'uppercase',color:'#FFD900'}}>● Open</span>}
            </button>
          );
        })}
      </div>
      <div style={{padding:'2px 12px 12px',fontSize:11,color:'rgba(0,0,0,.55)',lineHeight:1.45}}>
        Vier varianten van dezelfde landingspagina — voor verschillende doelgroepen. Klik om te wisselen.
      </div>
    </TweaksPanel>
  );
}

window.MoyeeTweaks = MoyeeTweaks;
