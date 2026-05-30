import { useState, useEffect, useRef, useCallback } from "react";

const LOGO_GREEN = "/logo-transparent.png";
const LOGO_WHITE = "/logo-white.png";

/* ══════════════════════════════════════════════════════════════════════════
   VERGE ASSURE TECHNOLOGY — Enterprise-Grade InsurTech Website
   Design: Dark corporate futuristic with emerald accents
   ══════════════════════════════════════════════════════════════════════════ */

function useInView(t=0.1){const r=useRef(null);const[v,s]=useState(false);useEffect(()=>{const e=r.current;if(!e)return;const o=new IntersectionObserver(([e])=>{if(e.isIntersecting)s(true)},{threshold:t});o.observe(e);return()=>o.disconnect()},[]);return[r,v]}

function R({children,d=0,c=""}){const[r,v]=useInView();return<div ref={r} className={c} style={{opacity:v?1:0,transform:v?"translateY(0)":"translateY(28px)",transition:`all .65s cubic-bezier(.16,1,.3,1) ${d}s`}}>{children}</div>}

const go=id=>{document.getElementById(id)?.scrollIntoView({behavior:"smooth"})};

// Icons
const Arr=({s=14})=><svg width={s} height={s} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>;
const Chk=()=><svg width="16" height="16" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>;

// Data
const NAVLINKS=["Home","About","Services","Solutions","Industries","Insights","Contact"];

const SERVICES=[
  {icon:"⚡",title:"Workflow Automation",desc:"Streamline complex business processes with intelligent automation that reduces manual effort by 70%."},
  {icon:"📋",title:"Claims Process Automation",desc:"End-to-end claims lifecycle management with AI-powered routing, assessment, and settlement."},
  {icon:"🧠",title:"AI & ML Solutions",desc:"Advanced machine learning models for fraud detection, risk scoring, and predictive analytics."},
  {icon:"💻",title:"Enterprise Software Development",desc:"Custom-built enterprise applications tailored to your operational requirements and scale."},
  {icon:"📊",title:"Dashboard & Analytics",desc:"Real-time operational intelligence with interactive dashboards and deep-dive analytics."},
  {icon:"🔗",title:"API Integrations",desc:"Seamless connectivity between legacy systems, modern platforms, and third-party services."},
  {icon:"👥",title:"CRM & Operations Platforms",desc:"Unified customer relationship and operations management for insurance enterprises."},
  {icon:"🔄",title:"Digital Transformation Consulting",desc:"Strategic advisory and implementation support for enterprise-wide digital modernization."},
  {icon:"🏗️",title:"Embedded Insurance Technology",desc:"White-label insurance infrastructure for platforms, fintechs, and distribution partners."},
  {icon:"📄",title:"Document Processing Automation",desc:"AI-powered OCR, extraction, and classification for policy documents and claims paperwork."},
];

const SOLUTIONS=[
  {title:"Insurance Technology Challenges We Solve",items:["Legacy system modernization","Manual claims processing bottlenecks","Fragmented data across systems","Poor customer experience in claims","Regulatory compliance complexity","Inefficient underwriting workflows"]},
  {title:"How AI is Transforming Insurance Operations",items:["Automated fraud detection with 95%+ accuracy","Predictive claims triage and routing","Natural language processing for documents","Computer vision for damage assessment","Risk scoring and pricing optimization","Customer sentiment analysis"]},
  {title:"Enterprise Workflow Modernization",items:["End-to-end process digitization","Intelligent task routing and assignment","Real-time SLA monitoring","Automated escalation workflows","Cross-department collaboration tools","Audit trail and compliance tracking"]},
  {title:"Technology Solutions for Modern Insurers",items:["Cloud-native insurance platforms","Microservices architecture","Event-driven processing pipelines","Low-code workflow builders","Self-service portals for policyholders","Mobile-first field operations"]},
];

const INDUSTRIES=[
  {name:"Insurance",desc:"Motor, health, property, and life insurance carriers",icon:"🏛️"},
  {name:"Reinsurance",desc:"Treaty and facultative reinsurance operations",icon:"🔄"},
  {name:"BFSI",desc:"Banking, financial services, and fintech platforms",icon:"🏦"},
  {name:"Enterprise Operations",desc:"Large-scale corporate process automation",icon:"⚙️"},
  {name:"Healthcare",desc:"Health claims, TPA, and provider network management",icon:"🏥"},
  {name:"Logistics",desc:"Supply chain, fleet, and operations management",icon:"🚚"},
];



const INSIGHTS=[
  {tag:"AI & Insurance",title:"The Future of AI in Insurance Claims Processing",date:"May 2026",read:"8 min read"},
  {tag:"Digital Transformation",title:"Why Legacy Insurance Systems Are Costing You Millions",date:"Apr 2026",read:"6 min read"},
  {tag:"Technology",title:"Building Scalable InsurTech Platforms: Architecture Guide",date:"Mar 2026",read:"12 min read"},
  {tag:"Automation",title:"Document Processing Automation: ROI Analysis for Insurers",date:"Feb 2026",read:"5 min read"},
];

const PROCESS=[
  {n:"01",t:"Discovery & Assessment",d:"Deep-dive into your operations, pain points, and technology landscape."},
  {n:"02",t:"Strategy & Architecture",d:"Custom solution blueprint aligned with your business objectives."},
  {n:"03",t:"Development & Integration",d:"Agile development with continuous stakeholder feedback."},
  {n:"04",t:"Deployment & Optimization",d:"Production rollout with performance monitoring and iterative improvement."},
];

export default function App(){
  const[sc,setSc]=useState(false);
  const[mob,setMob]=useState(false);
  const[page,setPage]=useState("Home");
  const[form,setForm]=useState({n:"",e:"",c:"",p:"",m:""});

  useEffect(()=>{const f=()=>setSc(window.scrollY>30);window.addEventListener("scroll",f,{passive:true});return()=>window.removeEventListener("scroll",f)},[]);

  const nav=(p)=>{setPage(p);setMob(false);window.scrollTo({top:0,behavior:"smooth"})};

  return(
<div style={{fontFamily:"'Sora',sans-serif",background:"#0a0f1a",color:"#e2e8f0",overflowX:"hidden",minHeight:"100vh",WebkitFontSmoothing:"antialiased"}}>
<style>{`
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap');
*{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}
::selection{background:#10b981;color:#000}
.ctr{max-width:1200px;margin:0 auto;padding:0 24px}
@keyframes glow{0%,100%{opacity:.4}50%{opacity:.8}}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}
@keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
@keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
@keyframes slideD{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes growBar{from{height:0%}}
.grd-mesh{position:absolute;width:600px;height:600px;border-radius:50%;filter:blur(120px);opacity:.15;pointer-events:none}
.card-e{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:16px;transition:all .35s cubic-bezier(.22,1,.36,1)}
.card-e:hover{background:rgba(255,255,255,.06);border-color:rgba(16,185,129,.2);transform:translateY(-4px);box-shadow:0 20px 60px rgba(0,0,0,.3)}
.btn-p{background:linear-gradient(135deg,#10b981,#059669);color:#fff;border:none;padding:14px 28px;border-radius:12px;font-size:14.5px;font-weight:600;cursor:pointer;transition:all .3s;font-family:inherit;display:inline-flex;align-items:center;gap:8px;letter-spacing:-.2px}
.btn-p:hover{transform:translateY(-2px);box-shadow:0 12px 32px rgba(16,185,129,.25)}
.btn-s{background:transparent;color:#e2e8f0;border:1px solid rgba(255,255,255,.15);padding:14px 28px;border-radius:12px;font-size:14.5px;font-weight:600;cursor:pointer;transition:all .3s;font-family:inherit;letter-spacing:-.2px}
.btn-s:hover{border-color:#10b981;color:#10b981;transform:translateY(-2px)}
.inp{width:100%;padding:13px 16px;border-radius:10px;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.04);font-size:14px;font-family:inherit;color:#e2e8f0;outline:none;transition:border .2s}
.inp:focus{border-color:#10b981}
.inp::placeholder{color:rgba(255,255,255,.3)}
.tag{display:inline-block;padding:4px 12px;border-radius:100px;font-size:11px;font-weight:600;letter-spacing:.5px;text-transform:uppercase}
.grad-text{background:linear-gradient(135deg,#10b981 0%,#34d399 50%,#6ee7b7 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.grid-bg{background-image:linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px);background-size:60px 60px}
.nav-a{text-decoration:none;color:rgba(255,255,255,.55);font-size:13.5px;font-weight:500;transition:color .2s;cursor:pointer}
.nav-a:hover,.nav-a.act{color:#fff}
@media(max-width:768px){.desk{display:none!important}.mob-btn{display:flex!important}}
@media(min-width:769px){.mob-btn{display:none!important}}
`}</style>

{/* ═══ NAVBAR ═══ */}
<nav style={{position:"fixed",top:0,left:0,right:0,zIndex:100,backdropFilter:"blur(20px) saturate(180%)",WebkitBackdropFilter:"blur(20px) saturate(180%)",background:sc?"rgba(10,15,26,.92)":"rgba(10,15,26,.6)",borderBottom:sc?"1px solid rgba(255,255,255,.06)":"1px solid transparent",transition:"all .3s"}}>
<div className="ctr" style={{display:"flex",alignItems:"center",justifyContent:"space-between",height:64}}>
<div style={{display:"flex",alignItems:"center",gap:10,cursor:"pointer"}} onClick={()=>nav("Home")}>
<img src={LOGO_GREEN} alt="VCA" style={{height:24,width:"auto"}}/>
<div style={{lineHeight:1}}>
<span style={{fontWeight:700,fontSize:15,color:"#fff",letterSpacing:"-.3px"}}>Verge Assure</span>
<span style={{display:"block",fontSize:9.5,color:"rgba(255,255,255,.35)",letterSpacing:"1.5px",textTransform:"uppercase",fontWeight:500,marginTop:1}}>Technology</span>
</div>
</div>
<div className="desk" style={{display:"flex",alignItems:"center",gap:24}}>
{NAVLINKS.map(l=><span key={l} className={`nav-a${page===l?" act":""}`} onClick={()=>nav(l)}>{l}</span>)}
<button className="btn-p" style={{padding:"9px 20px",fontSize:13}} onClick={()=>nav("Contact")}>Get Started</button>
</div>
<button className="mob-btn" style={{background:"none",border:"none",color:"#fff",cursor:"pointer",padding:4,display:"none"}} onClick={()=>setMob(!mob)}>
{mob?<svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>
:<svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg>}
</button>
</div>
</nav>

{/* Mobile menu */}
{mob&&<div style={{position:"fixed",top:64,left:0,right:0,bottom:0,background:"rgba(10,15,26,.98)",backdropFilter:"blur(20px)",zIndex:99,display:"flex",flexDirection:"column",padding:"24px",gap:4,animation:"slideD .2s ease"}}>
{NAVLINKS.map(l=><span key={l} className="nav-a" style={{fontSize:18,padding:"14px 0",borderBottom:"1px solid rgba(255,255,255,.06)"}} onClick={()=>nav(l)}>{l}</span>)}
</div>}

{/* ═══ PAGE CONTENT ═══ */}
{page==="Home"&&<HomePage nav={nav}/>}
{page==="About"&&<AboutPage nav={nav}/>}
{page==="Services"&&<ServicesPage nav={nav}/>}
{page==="Solutions"&&<SolutionsPage/>}
{page==="Industries"&&<IndustriesPage nav={nav}/>}
{page==="Insights"&&<InsightsPage/>}
{page==="Contact"&&<ContactPage form={form} setForm={setForm}/>}

{/* ═══ FOOTER ═══ */}
<footer style={{background:"#060a14",borderTop:"1px solid rgba(255,255,255,.05)",padding:"60px 0 32px"}}>
<div className="ctr">
<div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:40,marginBottom:48}}>
<div style={{maxWidth:280}}>
<div style={{display:"flex",alignItems:"center",gap:10,marginBottom:12}}>
<img src={LOGO_WHITE} alt="VCA" style={{height:20,width:"auto"}}/>
<span style={{fontWeight:700,fontSize:15,color:"#fff"}}>Verge Assure Technology</span>
</div>
<p style={{fontSize:12.5,color:"rgba(255,255,255,.3)",lineHeight:1.7,marginBottom:12}}>Technology. Automation. Transformation.</p>
<p style={{fontSize:12,color:"rgba(255,255,255,.25)",lineHeight:1.7}}>Transforming insurance and enterprise operations through intelligent technology solutions.</p>
</div>
<div style={{display:"flex",gap:48,flexWrap:"wrap"}}>
{[
{h:"Company",l:["About Us","Services","Solutions","Industries","Insights","Careers"]},
{h:"Solutions",l:["Claims Automation","AI & Analytics","Workflow Systems","API Integrations","Document Processing"]},
{h:"Contact",l:["contact@vergeassure.com","+91 98765 43210","Delhi, India","LinkedIn →"]},
].map((c,i)=><div key={i}>
<h4 style={{fontSize:11,textTransform:"uppercase",letterSpacing:1.5,color:"rgba(255,255,255,.25)",marginBottom:14,fontWeight:600}}>{c.h}</h4>
{c.l.map((t,j)=><div key={j} style={{fontSize:13,color:"rgba(255,255,255,.45)",marginBottom:8,cursor:"pointer",transition:"color .2s"}} onMouseEnter={e=>e.target.style.color="#fff"} onMouseLeave={e=>e.target.style.color="rgba(255,255,255,.45)"}>{t}</div>)}
</div>)}
</div>
</div>
<div style={{borderTop:"1px solid rgba(255,255,255,.05)",paddingTop:20,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12}}>
<span style={{fontSize:12,color:"rgba(255,255,255,.2)"}}>© 2026 Verge Assure Technology. All rights reserved.</span>
<div style={{display:"flex",gap:16}}>
{["Privacy Policy","Terms of Service"].map(t=><span key={t} style={{fontSize:12,color:"rgba(255,255,255,.25)",cursor:"pointer"}}>{t}</span>)}
<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{color:"rgba(255,255,255,.3)"}}>
<svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
</a>
</div>
</div>
</div>
</footer>
</div>);
}

/* ═══════════════════════════════════════════════════════════════════
   HOME PAGE
   ═══════════════════════════════════════════════════════════════════ */
function HomePage({nav}){
return(<>
{/* HERO */}
<section className="grid-bg" style={{position:"relative",minHeight:"100vh",display:"flex",alignItems:"center",overflow:"hidden",padding:"120px 0 80px"}}>
<div className="grd-mesh" style={{top:"-20%",right:"-10%",background:"#10b981"}}/>
<div className="grd-mesh" style={{bottom:"-30%",left:"-15%",background:"#0ea5e9"}}/>
<div className="ctr" style={{position:"relative",zIndex:2}}>
<R><div className="tag" style={{background:"rgba(16,185,129,.12)",color:"#10b981",marginBottom:20}}>
<span style={{display:"inline-block",width:6,height:6,borderRadius:"50%",background:"#10b981",marginRight:8,animation:"pulse 2s ease infinite"}}/>
AI-Powered Enterprise Solutions
</div></R>
<R d={.08}><h1 style={{fontSize:"clamp(36px,5.2vw,64px)",fontWeight:800,lineHeight:1.06,letterSpacing:"-2px",maxWidth:800,marginBottom:24}}>
Transforming Insurance & Enterprise Operations Through <span className="grad-text">Technology</span>
</h1></R>
<R d={.16}><p style={{fontSize:"clamp(15px,1.6vw,17px)",color:"rgba(255,255,255,.5)",maxWidth:580,lineHeight:1.7,marginBottom:36}}>
We help insurers, brokers, TPAs, and enterprises streamline operations, automate workflows, improve customer experiences, and accelerate digital transformation.
</p></R>
<R d={.22}><div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
<button className="btn-p" onClick={()=>nav("Contact")}>Book a Demo <Arr/></button>
<button className="btn-s" onClick={()=>nav("Solutions")}>Explore Solutions</button>
</div></R>

</div>
</section>

{/* SERVICES OVERVIEW */}
<section style={{padding:"100px 0",position:"relative"}}>
<div className="ctr">
<R><Lbl>Services</Lbl>
<h2 style={h2s}>Enterprise Technology Services</h2>
<p style={subs}>Comprehensive technology solutions designed for insurance and enterprise digital transformation.</p></R>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:16}}>
{SERVICES.slice(0,6).map((s,i)=><R key={i} d={i*.05}>
<div className="card-e" style={{padding:28}}>
<div style={{fontSize:28,marginBottom:14}}>{s.icon}</div>
<h3 style={{fontSize:16,fontWeight:700,color:"#fff",marginBottom:8,letterSpacing:"-.2px"}}>{s.title}</h3>
<p style={{fontSize:13,color:"rgba(255,255,255,.4)",lineHeight:1.65}}>{s.desc}</p>
</div></R>)}
</div>
<R d={.1}><div style={{textAlign:"center",marginTop:32}}>
<button className="btn-s" onClick={()=>nav("Services")}>View All Services <Arr/></button>
</div></R>
</div>
</section>

{/* INSURANCE TRANSFORMATION */}
<section style={{padding:"100px 0",background:"linear-gradient(180deg,rgba(16,185,129,.04),transparent)",position:"relative"}}>
<div className="grd-mesh" style={{top:"0",right:"0",background:"#10b981",opacity:.08}}/>
<div className="ctr" style={{position:"relative"}}>
<R><Lbl>Solutions</Lbl>
<h2 style={h2s}>Insurance Technology Challenges We Solve</h2></R>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:20,marginTop:40}}>
{SOLUTIONS[0].items.map((item,i)=><R key={i} d={i*.04}>
<div style={{display:"flex",gap:12,alignItems:"flex-start",padding:20,borderRadius:12,background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.05)"}}>
<div style={{marginTop:2}}><Chk/></div>
<p style={{fontSize:14,color:"rgba(255,255,255,.6)",lineHeight:1.6}}>{item}</p>
</div></R>)}
</div>
</div>
</section>

{/* AI SECTION */}
<section style={{padding:"100px 0",position:"relative"}}>
<div className="ctr">
<R><Lbl>AI & Automation</Lbl>
<h2 style={h2s}>How AI is Transforming Insurance Operations</h2>
<p style={subs}>Intelligent technology that learns, adapts, and optimizes your operations continuously.</p></R>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:40,alignItems:"center"}} className="ai-grid">
<R d={.1}><div style={{display:"flex",flexDirection:"column",gap:12}}>
{SOLUTIONS[1].items.map((item,i)=><div key={i} style={{display:"flex",gap:10,alignItems:"center",padding:"12px 16px",borderRadius:10,background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.04)",transition:"all .3s"}} onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(16,185,129,.2)";e.currentTarget.style.background="rgba(16,185,129,.04)"}} onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,.04)";e.currentTarget.style.background="rgba(255,255,255,.02)"}}>
<span style={{color:"#10b981",fontSize:14}}>→</span>
<span style={{fontSize:13.5,color:"rgba(255,255,255,.6)"}}>{item}</span>
</div>)}
</div></R>
<R d={.2}><DashboardMockup/></R>
</div>
<style>{`@media(max-width:768px){.ai-grid{grid-template-columns:1fr!important}}`}</style>
</div>
</section>

{/* PROCESS */}
<section style={{padding:"100px 0"}}>
<div className="ctr">
<R><Lbl>Process</Lbl>
<h2 style={h2s}>Our Engagement Model</h2>
<p style={subs}>A proven methodology that ensures successful delivery, from discovery to deployment.</p></R>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:16,marginTop:40}}>
{PROCESS.map((p,i)=><R key={i} d={i*.08}>
<div className="card-e" style={{padding:28,position:"relative",overflow:"hidden"}}>
<div style={{position:"absolute",top:16,right:16,fontFamily:"'Space Mono',monospace",fontSize:40,fontWeight:700,color:"rgba(16,185,129,.06)"}}>{p.n}</div>
<div style={{fontFamily:"'Space Mono',monospace",fontSize:13,color:"#10b981",fontWeight:700,marginBottom:12}}>{p.n}</div>
<h3 style={{fontSize:16,fontWeight:700,color:"#fff",marginBottom:8}}>{p.t}</h3>
<p style={{fontSize:13,color:"rgba(255,255,255,.4)",lineHeight:1.6}}>{p.d}</p>
</div></R>)}
</div>
</div>
</section>


{/* CTA BANNER */}
<section style={{padding:"80px 0"}}>
<div className="ctr">
<R><div style={{background:"linear-gradient(135deg,#0d3320,#0a2a1a,#0d1f2d)",border:"1px solid rgba(16,185,129,.15)",borderRadius:20,padding:"56px 48px",position:"relative",overflow:"hidden",textAlign:"center"}}>
<div className="grd-mesh" style={{top:"-50%",right:"-20%",background:"#10b981",opacity:.12}}/>
<h2 style={{fontSize:"clamp(26px,3.5vw,40px)",fontWeight:800,color:"#fff",letterSpacing:"-1px",marginBottom:14,position:"relative"}}>Ready to Transform Your Operations?</h2>
<p style={{fontSize:15,color:"rgba(255,255,255,.5)",maxWidth:500,margin:"0 auto 28px",lineHeight:1.6,position:"relative"}}>Schedule a consultation with our team and discover how Verge Assure Technology can modernize your enterprise.</p>
<div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap",position:"relative"}}>
<button className="btn-p" onClick={()=>nav("Contact")}>Schedule Consultation <Arr/></button>
<button className="btn-s" onClick={()=>nav("Solutions")}>View Solutions</button>
</div>
</div></R>
</div>
</section>
</>);
}

/* ═══════════════════════════════════════════════════════════════════
   ABOUT PAGE
   ═══════════════════════════════════════════════════════════════════ */
function AboutPage({nav}){return(<section style={{padding:"140px 0 100px"}}>
<div className="ctr">
<R><Lbl>About Us</Lbl>
<h2 style={{...h2s,maxWidth:700}}>We Build What Assurance Looks Like In Code</h2></R>
<R d={.08}><p style={{fontSize:16,color:"rgba(255,255,255,.5)",lineHeight:1.8,maxWidth:700,marginBottom:48}}>
Verge Assure Technology is a product-focused technology company building AI-powered digital solutions for the insurance, BFSI, and enterprise operations ecosystem. We combine deep domain expertise with cutting-edge engineering to deliver platforms that transform how organizations operate.
<br/><br/>
Founded by Yash Chandra and Ansh Srivastava, our mission is to eliminate operational friction across the insurance value chain — from first notice of loss to final settlement, from policy issuance to claims resolution.
</p></R>

<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:20,marginBottom:48}}>
{[{n:"Yash Chandra",r:"Founder & CEO",i:"YC"},{n:"Ansh Srivastava",r:"Co-Founder & CTO",i:"AS"}].map((f,i)=><R key={i} d={.15+i*.08}>
<div className="card-e" style={{padding:32,display:"flex",alignItems:"center",gap:20}}>
<div style={{width:64,height:64,borderRadius:16,background:"linear-gradient(135deg,#10b981,#059669)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,fontWeight:800,color:"#fff",flexShrink:0}}>{f.i}</div>
<div><div style={{fontSize:17,fontWeight:700,color:"#fff"}}>{f.n}</div><div style={{fontSize:13,color:"rgba(255,255,255,.35)",marginTop:3}}>{f.r}</div></div>
</div></R>)}
</div>

</div>
</section>);}

/* ═══════════════════════════════════════════════════════════════════
   SERVICES PAGE
   ═══════════════════════════════════════════════════════════════════ */
function ServicesPage({nav}){return(<section style={{padding:"140px 0 100px"}}>
<div className="ctr">
<R><Lbl>Our Services</Lbl>
<h2 style={h2s}>Comprehensive Technology Solutions</h2>
<p style={subs}>From workflow automation to AI-powered analytics — everything your enterprise needs to modernize operations.</p></R>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(340px,1fr))",gap:16}}>
{SERVICES.map((s,i)=><R key={i} d={i*.04}>
<div className="card-e" style={{padding:28}}>
<div style={{fontSize:28,marginBottom:14}}>{s.icon}</div>
<h3 style={{fontSize:16,fontWeight:700,color:"#fff",marginBottom:8}}>{s.title}</h3>
<p style={{fontSize:13,color:"rgba(255,255,255,.4)",lineHeight:1.65}}>{s.desc}</p>
</div></R>)}
</div>
<R d={.3}><div style={{textAlign:"center",marginTop:40}}>
<button className="btn-p" onClick={()=>nav("Contact")}>Discuss Your Requirements <Arr/></button>
</div></R>
</div>
</section>);}

/* ═══════════════════════════════════════════════════════════════════
   SOLUTIONS PAGE
   ═══════════════════════════════════════════════════════════════════ */
function SolutionsPage(){return(<section style={{padding:"140px 0 100px"}}>
<div className="ctr">
<R><Lbl>Solutions</Lbl>
<h2 style={h2s}>Technology Solutions for Modern Enterprises</h2></R>
{SOLUTIONS.map((sol,i)=><R key={i} d={i*.08}>
<div style={{marginBottom:48}}>
<h3 style={{fontSize:22,fontWeight:700,color:"#fff",marginBottom:20,letterSpacing:"-.5px"}}>{sol.title}</h3>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:12}}>
{sol.items.map((item,j)=><div key={j} style={{display:"flex",gap:10,alignItems:"center",padding:"14px 18px",borderRadius:10,background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.05)",transition:"all .2s"}} onMouseEnter={e=>e.currentTarget.style.borderColor="rgba(16,185,129,.2)"} onMouseLeave={e=>e.currentTarget.style.borderColor="rgba(255,255,255,.05)"}>
<Chk/><span style={{fontSize:13.5,color:"rgba(255,255,255,.6)"}}>{item}</span>
</div>)}
</div>
</div></R>)}
</div>
</section>);}

/* ═══════════════════════════════════════════════════════════════════
   INDUSTRIES PAGE
   ═══════════════════════════════════════════════════════════════════ */
function IndustriesPage({nav}){return(<section style={{padding:"140px 0 100px"}}>
<div className="ctr">
<R><Lbl>Industries</Lbl>
<h2 style={h2s}>Industries We Serve</h2>
<p style={subs}>Deep vertical expertise across insurance, financial services, and enterprise operations.</p></R>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))",gap:20}}>
{INDUSTRIES.map((ind,i)=><R key={i} d={i*.06}>
<div className="card-e" style={{padding:32}}>
<div style={{fontSize:36,marginBottom:16}}>{ind.icon}</div>
<h3 style={{fontSize:18,fontWeight:700,color:"#fff",marginBottom:8}}>{ind.name}</h3>
<p style={{fontSize:13.5,color:"rgba(255,255,255,.4)",lineHeight:1.6}}>{ind.desc}</p>
</div></R>)}
</div>
<R d={.3}><div style={{textAlign:"center",marginTop:40}}>
<button className="btn-p" onClick={()=>nav("Contact")}>Discuss Your Industry <Arr/></button>
</div></R>
</div>
</section>);}

/* ═══════════════════════════════════════════════════════════════════
   INSIGHTS PAGE
   ═══════════════════════════════════════════════════════════════════ */
function InsightsPage(){return(<section style={{padding:"140px 0 100px"}}>
<div className="ctr">
<R><Lbl>Insights & Blog</Lbl>
<h2 style={h2s}>Latest Thinking on InsurTech & Enterprise Technology</h2></R>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:20,marginTop:40}}>
{INSIGHTS.map((ins,i)=><R key={i} d={i*.06}>
<div className="card-e" style={{padding:0,overflow:"hidden",cursor:"pointer"}}>
<div style={{height:160,background:`linear-gradient(135deg,rgba(16,185,129,${.08+i*.03}),rgba(14,165,233,${.05+i*.02}))`,display:"flex",alignItems:"center",justifyContent:"center"}}>
<span style={{fontSize:48,opacity:.3}}>📄</span>
</div>
<div style={{padding:24}}>
<div className="tag" style={{background:"rgba(16,185,129,.1)",color:"#10b981",marginBottom:10}}>{ins.tag}</div>
<h3 style={{fontSize:16,fontWeight:700,color:"#fff",marginBottom:8,lineHeight:1.4}}>{ins.title}</h3>
<div style={{fontSize:12,color:"rgba(255,255,255,.3)"}}>{ins.date} · {ins.read}</div>
</div>
</div></R>)}
</div>
</div>
</section>);}

/* ═══════════════════════════════════════════════════════════════════
   CONTACT PAGE
   ═══════════════════════════════════════════════════════════════════ */
function ContactPage({form,setForm}){
const u=k=>e=>setForm({...form,[k]:e.target.value});
return(<section style={{padding:"140px 0 100px"}}>
<div className="ctr">
<R><Lbl>Contact Us</Lbl>
<h2 style={h2s}>Let's Build Something Extraordinary</h2>
<p style={subs}>Schedule a consultation, request a demo, or discuss your enterprise technology requirements.</p></R>
<R d={.1}><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:48}} className="contact-grid">
<div style={{display:"flex",flexDirection:"column",gap:14}}>
<input className="inp" placeholder="Full Name" value={form.n} onChange={u("n")}/>
<input className="inp" placeholder="Work Email" type="email" value={form.e} onChange={u("e")}/>
<input className="inp" placeholder="Company Name" value={form.c} onChange={u("c")}/>
<input className="inp" placeholder="Phone Number" value={form.p} onChange={u("p")}/>
<textarea className="inp" placeholder="Tell us about your project..." value={form.m} onChange={u("m")} style={{minHeight:120,resize:"vertical"}}/>
<button className="btn-p" style={{justifyContent:"center"}}>Submit Inquiry <Arr/></button>
</div>
<div style={{display:"flex",flexDirection:"column",gap:20}}>
{[["✉️","Email","contact@vergeassure.com"],["📞","Phone","+91 98765 43210"],["📍","Location","Delhi, India"],["💼","LinkedIn","linkedin.com/company/vergeassure"]].map(([ic,lb,vl],i)=><div key={i} style={{display:"flex",gap:14,alignItems:"flex-start"}}>
<div style={{width:40,height:40,borderRadius:10,background:"rgba(16,185,129,.08)",border:"1px solid rgba(16,185,129,.12)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,flexShrink:0}}>{ic}</div>
<div><div style={{fontSize:11,color:"rgba(255,255,255,.3)",fontWeight:600,textTransform:"uppercase",letterSpacing:.5}}>{lb}</div><div style={{fontSize:14,color:"rgba(255,255,255,.7)",marginTop:3}}>{vl}</div></div>
</div>)}
<div style={{marginTop:12,padding:24,borderRadius:14,background:"linear-gradient(135deg,rgba(16,185,129,.08),rgba(14,165,233,.05))",border:"1px solid rgba(16,185,129,.12)"}}>
<div style={{fontSize:15,fontWeight:700,color:"#fff",marginBottom:6}}>📅 Book a Meeting</div>
<p style={{fontSize:13,color:"rgba(255,255,255,.45)",lineHeight:1.6,marginBottom:14}}>Schedule a 30-minute consultation with our team to discuss your technology requirements.</p>
<button className="btn-p" style={{width:"100%",justifyContent:"center",padding:"11px 20px",fontSize:13}}>Open Calendly →</button>
</div>
</div>
</div></R>
<style>{`@media(max-width:768px){.contact-grid{grid-template-columns:1fr!important}}`}</style>
</div>
</section>);
}

/* ═══════════════════════════════════════════════════════════════════
   SHARED COMPONENTS
   ═══════════════════════════════════════════════════════════════════ */
function Lbl({children}){return<div style={{display:"inline-flex",alignItems:"center",gap:8,fontSize:11,fontWeight:600,textTransform:"uppercase",letterSpacing:1.5,color:"#10b981",marginBottom:12}}><span style={{width:16,height:1.5,background:"#10b981",display:"inline-block"}}/>{children}</div>}

function DashboardMockup(){
return(<div className="card-e" style={{padding:24,position:"relative"}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
<span style={{fontSize:13,fontWeight:700,color:"#fff"}}>AI Claims Dashboard</span>
<div style={{display:"flex",gap:3}}>{["Live","7D","30D"].map((t,i)=><span key={t} style={{padding:"3px 10px",borderRadius:5,fontSize:10,fontWeight:600,color:i===0?"#000":"rgba(255,255,255,.4)",background:i===0?"#10b981":"transparent",cursor:"pointer"}}>{t}</span>)}</div>
</div>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:16}}>
{[{l:"Processing",v:"1,247",c:"+18%"},{l:"Approved",v:"892",c:"+24%"},{l:"Avg TAT",v:"2.4d",c:"-31%"},{l:"AI Score",v:"97.8%",c:"+2.1%"}].map((m,i)=><div key={i} style={{padding:12,borderRadius:8,background:"rgba(255,255,255,.03)",border:"1px solid rgba(255,255,255,.05)"}}>
<div style={{fontSize:9.5,color:"rgba(255,255,255,.3)",fontWeight:600,textTransform:"uppercase",letterSpacing:.5,marginBottom:4}}>{m.l}</div>
<div style={{fontSize:20,fontWeight:800,color:"#fff",letterSpacing:"-1px"}}>{m.v}</div>
<div style={{fontSize:10,color:"#10b981",fontWeight:600,marginTop:2}}>{m.c}</div>
</div>)}
</div>
<div style={{padding:14,borderRadius:8,background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.04)",height:80}}>
<div style={{fontSize:9.5,color:"rgba(255,255,255,.25)",fontWeight:600,marginBottom:8}}>Claims Volume</div>
<div style={{display:"flex",alignItems:"flex-end",gap:4,height:"calc(100% - 20px)"}}>
{[35,48,42,56,62,55,70,75,68,82,78,88].map((h,i)=><div key={i} style={{flex:1,height:`${h}%`,borderRadius:"2px 2px 0 0",background:`linear-gradient(180deg,#10b981,rgba(16,185,129,.3))`,opacity:.5,animation:`growBar .6s ease-out ${i*.05}s both`}}/>)}</div>
</div>
<div style={{position:"absolute",top:-8,right:-8,background:"#0a0f1a",borderRadius:8,padding:"8px 12px",border:"1px solid rgba(16,185,129,.15)",animation:"float 4s ease-in-out infinite",boxShadow:"0 8px 24px rgba(0,0,0,.4)"}}>
<div style={{fontSize:9,color:"rgba(255,255,255,.3)"}}>AI Confidence</div>
<div style={{fontSize:15,fontWeight:800,color:"#10b981"}}>98.4%</div>
</div>
</div>);
}

const h2s={fontSize:"clamp(28px,3.8vw,44px)",fontWeight:800,letterSpacing:"-1.5px",lineHeight:1.1,marginBottom:14,color:"#fff"};
const subs={fontSize:15,color:"rgba(255,255,255,.4)",maxWidth:560,lineHeight:1.65,marginBottom:40};
