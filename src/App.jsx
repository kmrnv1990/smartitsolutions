import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Cpu,
  Database,
  Headphones,
  Laptop,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  Printer,
  Server,
  ShieldCheck,
  Wifi,
  X,
} from "lucide-react";

const phoneDisplay = "+61 416 728 611";
const phoneLink = "+61416728611";
const email = "sales@smartitsolutions.com.au";
const whatsappUrl = "https://wa.me/61416728611?text=Hi%20Smart%20I.T%20Solutions%2C%20I%20would%20like%20to%20enquire%20about%20your%20IT%20services.";

const services = [
  {
    icon: Headphones,
    title: "Managed IT Support",
    desc: "Responsive remote and onsite IT support for homes, remote workers and small businesses that need reliable technology without unnecessary complexity.",
  },
  {
    icon: Laptop,
    title: "Laptop & Desktop Repairs",
    desc: "Professional troubleshooting, repairs, tune-ups and upgrades for laptops, desktops and business computers.",
  },
  {
    icon: Cpu,
    title: "Hardware Procurement & Leasing",
    desc: "Device supply, workstation setup, replacement equipment and leasing options for business laptops, desktops and office technology.",
  },
  {
    icon: Cloud,
    title: "Microsoft 365 & Cloud",
    desc: "Microsoft 365 licensing, Outlook, Teams, business email setup and cloud productivity support for growing teams.",
  },
  {
    icon: Server,
    title: "VoIP Phone Services",
    desc: "Business VoIP setup, handset configuration, call flow support and modern communication solutions.",
  },
  {
    icon: Wifi,
    title: "Internet & Networking",
    desc: "Wi-Fi, router, modem, internet, printer and small office network troubleshooting and setup.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Antivirus",
    desc: "Antivirus setup, virus removal, spyware protection and practical cybersecurity guidance for devices and users.",
  },
  {
    icon: Database,
    title: "Backup & Data Protection",
    desc: "Backup planning, data protection, storage setup and recovery guidance to help protect important business and personal files.",
  },
  {
    icon: Printer,
    title: "Printers & Devices",
    desc: "Printer, scanner and connected device setup, configuration and troubleshooting for home and office environments.",
  },
];

const navLinks = ["Home", "About", "Services", "Contact"];

function Nav({ page, setPage }) {
  const [open, setOpen] = useState(false);

  function goTo(item) {
    setPage(item);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <header className="siteHeader">
      <div className="wrap navWrap">
        <button className="brand" onClick={() => goTo("Home")} type="button">
          <img src="/Logo.jpg" alt="Smart I.T Solutions" />
          <span>Smart I.T Solutions</span>
        </button>

        <nav className={open ? "navLinks open" : "navLinks"}>
          {navLinks.map((item) => (
            <button
              key={item}
              type="button"
              className={page === item ? "active" : ""}
              onClick={() => goTo(item)}
            >
              {item}
            </button>
          ))}
        </nav>

        <button className="menuBtn" type="button" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

function HeroIllustration() {
  return (
    <div className="heroIllustration">
      <div className="itDashboard">
        <div className="dashHeader">
          <span className="windowDot red" />
          <span className="windowDot yellow" />
          <span className="windowDot green" />
          <strong>IT Operations</strong>
        </div>

        <div className="dashGrid">
          <div className="dashCard mainMetric">
            <small>Support Status</small>
            <strong>Online</strong>
            <div className="progress"><span /></div>
          </div>
          <div className="dashCard"><ShieldCheck /><span>Security</span></div>
          <div className="dashCard"><Cloud /><span>Cloud</span></div>
          <div className="dashCard"><Server /><span>VoIP</span></div>
          <div className="dashCard"><Wifi /><span>Network</span></div>
        </div>

        <div className="dashRows">
          <p><CheckCircle2 /> Devices monitored and supported</p>
          <p><CheckCircle2 /> Microsoft 365 and email ready</p>
          <p><CheckCircle2 /> Backup, security and remote support aligned</p>
        </div>
      </div>
    </div>
  );
}

function AboutVisual() {
  return (
    <div className="aboutVisual imageVisual">
      <img src="/global-it-section.png" alt="Global IT support, cloud, security and managed services" />
    </div>
  );
}

function ContactVisual() {
  return (
    <div className="contactVisual">
      <div className="contactFlowCard">
        <h3>Fast enquiry flow</h3>
        <p><span>1</span> Submit your enquiry</p>
        <p><span>2</span> We review your requirement</p>
        <p><span>3</span> We recommend the right support path</p>
      </div>
    </div>
  );
}

function ServiceCard({ service }) {
  const Icon = service.icon;
  return (
    <article className="serviceCard">
      <div className="serviceIcon"><Icon /></div>
      <h3>{service.title}</h3>
      <p>{service.desc}</p>
    </article>
  );
}

function Home({ setPage }) {
  return (
    <>
      <section className="heroSection animatedBg">
        <div className="wrap heroGrid">
          <div className="heroCopy revealUp">
            <p className="kicker">Reliable IT Infrastructure & Support</p>
            <h1>We deliver <span className="accent">modern IT solutions</span> for homes and growing teams.</h1>
            <p className="heroText">
              Smart I.T Solutions provides onsite and remote IT services to keep your computers,
              networks, cloud tools, phones and security responsive, reliable and ready for growth.
            </p>
            <div className="heroActions">
              <button className="primaryBtn" onClick={() => setPage("Contact")} type="button">
                Get a Quote <ArrowRight size={18} />
              </button>
              <button className="outlineBtn" onClick={() => setPage("Services")} type="button">
                Explore Services
              </button>
            </div>
            <div className="trustLine">
              <span>SLA-minded support</span>
              <span>Remote readiness</span>
              <span>Global-style support</span>
            </div>
          </div>
          <HeroIllustration />
        </div>
      </section>

      <section className="wrap sectionBlock revealUp">
        <div className="sectionIntro">
          <h2>Core Services</h2>
          <p>
            End-to-end IT support, repairs, procurement, cloud, networking and managed services
            designed to keep your systems reliable and your users productive.
          </p>
        </div>
        <div className="serviceGrid coreGrid">
          {services.slice(0, 6).map((service) => <ServiceCard key={service.title} service={service} />)}
        </div>
      </section>

      <section className="whySection revealUp">
        <div className="wrap whyGrid">
          <div>
            <h2>Why choose Smart I.T Solutions?</h2>
            <p>
              Your day depends on working technology. We focus on fast response, clear communication
              and dependable execution so you can stay focused on what matters most.
            </p>
            <div className="checkRow">
              <span><CheckCircle2 /> High-touch communication</span>
              <span><CheckCircle2 /> Committed to quality</span>
              <span><CheckCircle2 /> Fast response focus</span>
            </div>
          </div>
          <div className="statsCard">
            <h3>Business-ready support</h3>
            <p>
              From computer repairs and device upgrades to Microsoft 365, VoIP, networking,
              security and hardware leasing, we provide practical IT support with a global-service mindset from one place.
            </p>
            <div className="statsGrid">
              <div><strong>GLOBAL</strong><span>Support mindset</span></div>
              <div><strong>365</strong><span>Cloud support</span></div>
              <div><strong>IT</strong><span>Managed help</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="globalPresence revealUp">
        <div className="wrap presenceLayout">
          <div className="presenceCopy">
            <span className="presencePill">Australia-wide presence</span>
            <h2>Supporting Australians across the country</h2>
            <p>
              Smart I.T Solutions is headquartered in Australia and built with a global-service mindset — supporting customers through remote-first IT support, cloud services, VoIP, cybersecurity, networking and managed IT solutions.
            </p>
            <div className="presenceFeatures">
              <div><strong>Australia HQ</strong><span>Based in Australia</span></div>
              <div><strong>Nationwide Support</strong><span>Remote and onsite assistance</span></div>
              <div><strong>Managed IT Services</strong><span>Cloud • VoIP • Security</span></div>
            </div>
          </div>
          <div className="presenceImageCard">
            <img src="/australia-presence-modern.png" alt="Australia-wide Smart I.T Solutions support presence" />
          </div>
        </div>
      </section>

      <section className="wrap workspaceSection revealUp">
        <div className="workspaceImage">
          <div className="deviceFrame">
            <div className="deviceHeader" />
            <div className="deviceBody">
              <Laptop />
              <Wifi />
              <Cloud />
              <ShieldCheck />
            </div>
          </div>
        </div>
        <div className="workspaceCopy">
          <h2>Workspace Infrastructure</h2>
          <p>
            We help you design and support a digital workspace that lets users work confidently
            from the right devices, with fast access to email, apps, files, printers, phones and collaboration tools.
          </p>
          <button className="primaryBtn" onClick={() => setPage("About")} type="button">
            Learn About Us <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </>
  );
}

function About({ setPage }) {
  return (
    <>
      <section className="heroSection aboutHero animatedBg">
        <div className="wrap heroGrid">
          <div className="heroCopy revealUp">
            <p className="kicker">Trusted IT Specialists</p>
            <h1>About <span className="accent">Smart I.T Solutions</span></h1>
            <p className="heroText">
              Smart I.T Solutions is an IT services partner helping homes, professionals and small businesses run secure, resilient and efficient technology operations.
            </p>
            <div className="heroActions">
              <button className="primaryBtn" onClick={() => setPage("Contact")} type="button">Get in Touch</button>
              <button className="outlineBtn" onClick={() => setPage("Services")} type="button">View Services</button>
            </div>
            <div className="trustLine">
              <span>Enterprise-ready delivery</span>
              <span>Remote support model</span>
            </div>
          </div>
          <AboutVisual />
        </div>
      </section>

      <section className="wrap aboutWorkSection revealUp">
        <div>
          <h2>What we do</h2>
          <p>
            We plan, support and operate practical IT environments end-to-end. From home and business device support to Microsoft 365, VoIP phones, internet, networking, security, backups and hardware leasing, we provide reliable service quality across devices, users and locations.
          </p>
          <div className="pillGrid">
            <span>Managed IT support</span>
            <span>Laptop & desktop repairs</span>
            <span>Microsoft 365 services</span>
            <span>VoIP & networking</span>
            <span>Security & antivirus</span>
            <span>Hardware procurement</span>
          </div>
        </div>
        <div className="workflowCard">
          <h3>How we support you</h3>
          <div className="workflowStep"><span>01</span><p>Understand your device, network or business IT issue.</p></div>
          <div className="workflowStep"><span>02</span><p>Explain the best practical options in plain English.</p></div>
          <div className="workflowStep"><span>03</span><p>Repair, configure, secure or support your technology.</p></div>
        </div>
      </section>

      <section className="wrap aboutCards revealUp">
        <div><h3>Our Mission</h3><p>To provide reliable IT support that makes technology easier, safer and more productive.</p></div>
        <div><h3>Our Approach</h3><p>We listen first, explain clearly and recommend practical solutions without confusing jargon.</p></div>
        <div><h3>Who We Support</h3><p>Home users, remote workers, retail stores, restaurants, professional offices and small businesses.</p></div>
      </section>
    </>
  );
}

function Services() {
  return (
    <main className="wrap pageBlock revealUp">
      <h1>Services</h1>
      <p className="pageLead">
        Choose the service you need today or speak with us about simple ongoing support for your home office or business.
      </p>
      <div className="serviceGrid">
        {services.map((service) => <ServiceCard key={service.title} service={service} />)}
      </div>
    </main>
  );
}

function Contact() {
  return (
    <>
      <section className="heroSection contactHero animatedBg">
        <div className="wrap heroGrid">
          <div className="heroCopy revealUp">
            <p className="kicker">Let’s Talk IT</p>
            <h1>Contact <span className="accent">Smart I.T Solutions</span></h1>
            <p className="heroText">
              Reach out for computer repair, managed IT support, Microsoft 365, VoIP, networking, hardware or security questions.
            </p>
            <div className="heroActions">
              <a href={`tel:${phoneLink}`} className="outlineBtn"><Phone size={18} /> Call {phoneDisplay}</a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="primaryBtn"><MessageCircle size={18} /> WhatsApp</a>
            </div>
            <div className="trustLine">
              <span>Fast response focus</span>
              <span>Remote support ready</span>
            </div>
          </div>
          <ContactVisual />
        </div>
      </section>

      <main className="wrap pageBlock contactPage revealUp">
        <div className="contactHeader">
          <h1>Get a Quote / Contact Us</h1>
          <p className="pageLead">Tell us about your requirement and we’ll get back to you quickly.</p>
        </div>

        <div className="quoteLayout">
          <form className="quoteForm" action={`https://formsubmit.co/${email}`} method="POST">
            <input type="hidden" name="_subject" value="New Website Enquiry - Smart I.T Solutions" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <div className="formTwo">
              <input name="name" required placeholder="Full Name" />
              <input type="email" name="email" required placeholder="Work Email" />
              <input name="company" placeholder="Company Name" />
              <input name="phone" placeholder="Phone Number" />
            </div>
            <select name="service">
              <option>Service Interested In</option>
              <option>Managed IT Support</option>
              <option>Laptop & Desktop Repairs</option>
              <option>Hardware Procurement & Leasing</option>
              <option>VoIP Phone Services</option>
              <option>Microsoft 365 / Licences</option>
              <option>Internet / Networking</option>
              <option>Data Security / Antivirus</option>
              <option>Backup / Data Protection</option>
              <option>Other</option>
            </select>
            <textarea name="message" rows="6" required placeholder="Project Details" />
            <button className="primaryBtn full" type="submit">Submit Enquiry</button>
            <small>First submission may require email verification from FormSubmit.</small>
          </form>

          <div className="contactSideGraphic">
            <div className="contactProcessBox">
              <h3>What happens next?</h3>
              <p><span>1</span> We review your enquiry.</p>
              <p><span>2</span> We contact you to understand the issue.</p>
              <p><span>3</span> We recommend the right support path.</p>
            </div>
            <div className="miniContactCards">
              <p><Mail /> {email}</p>
              <p><Phone /> {phoneDisplay}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default function App() {
  const [page, setPage] = useState("Home");

  return (
    <div>
      <style>{css}</style>
      <Nav page={page} setPage={setPage} />
      {page === "Home" && <Home setPage={setPage} />}
      {page === "About" && <About setPage={setPage} />}
      {page === "Services" && <Services />}
      {page === "Contact" && <Contact />}
      <footer className="footer">
        <div className="wrap footerGrid">
          <div>
            <h3>Smart I.T Solutions</h3>
            <p>Managed IT • Computer Repair • VoIP • Microsoft 365 • Security</p>
          </div>
          <div>
            <p>Email: {email}</p>
            <p>Phone: {phoneDisplay}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const css = `
:root{--navy:#071f38;--blue:#1d7fe8;--blue2:#16a5df;--light:#eef6ff;--text:#102033;--muted:#5c6d7e;--line:#dce7ef;--card:#ffffff}
*{box-sizing:border-box}
body{margin:0;font-family:Arial,Helvetica,sans-serif;background:#edf6ff;color:var(--text)}
button,input,textarea,select{font-family:inherit}
button{cursor:pointer}
.wrap{width:min(100% - 48px,1180px);margin:0 auto;padding:0}
.siteHeader{background:#fff;border-bottom:1px solid var(--line);position:sticky;top:0;z-index:50}
.navWrap{height:102px;display:flex;align-items:center;justify-content:space-between;gap:30px}
.brand{display:flex;align-items:center;gap:14px;background:transparent;border:0;color:var(--navy);font-weight:900;font-size:20px}
.brand img{width:74px;height:74px;object-fit:contain;border-radius:8px}
.navLinks{display:flex;align-items:center;gap:36px}
.navLinks button{background:transparent;border:0;color:#21384f;font-weight:800;font-size:15px;padding:10px 0;border-bottom:3px solid transparent}
.navLinks button.active,.navLinks button:hover{color:var(--blue);border-bottom-color:var(--blue)}
.menuBtn{display:none;background:var(--navy);color:white;border:0;border-radius:8px;padding:10px}

.animatedBg{position:relative;overflow:hidden;background:linear-gradient(110deg,#dff2ff 0%,#d7e7ff 55%,#dce7ff 100%);color:var(--text)}
.animatedBg:before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(29,127,232,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(29,127,232,.08) 1px,transparent 1px);background-size:38px 38px;opacity:.55;animation:gridMove 24s linear infinite}
.animatedBg:after{content:"";position:absolute;left:-4%;right:-4%;bottom:-34px;height:90px;background:#edf6ff;transform:rotate(2deg);transform-origin:left top}
@keyframes gridMove{from{background-position:0 0}to{background-position:152px 76px}}

.heroSection{padding:98px 0 118px}
.heroSection .wrap{position:relative;z-index:1}
.heroGrid{position:relative;z-index:1;display:grid;grid-template-columns:1fr .95fr;gap:82px;align-items:center}
.kicker{display:inline-flex;background:rgba(29,127,232,.1);border:1px solid rgba(29,127,232,.22);color:#154775;border-radius:999px;padding:10px 18px;font-size:14px;font-weight:900;letter-spacing:.02em;margin:0 0 22px}
h1{font-size:clamp(42px,4.3vw,68px);line-height:1.04;letter-spacing:-1.8px;margin:0 0 24px;color:var(--navy)}
.heroCopy h1{max-width:670px}
.accent{color:var(--blue)}
.heroText{font-size:18px;line-height:1.75;color:#43566a;max-width:650px;margin:0}
.heroActions{display:flex;gap:14px;flex-wrap:wrap;margin-top:32px}
.primaryBtn,.outlineBtn{border:0;border-radius:999px;padding:15px 24px;font-weight:900;font-size:15px;display:inline-flex;align-items:center;justify-content:center;gap:9px;text-decoration:none;transition:.2s ease;position:relative;overflow:hidden}
.primaryBtn:after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,.3),transparent);transform:translateX(-120%);transition:.45s}
.primaryBtn:hover:after{transform:translateX(120%)}
.primaryBtn{background:var(--blue);color:white;box-shadow:0 14px 30px rgba(29,127,232,.22)}
.primaryBtn:hover,.outlineBtn:hover{transform:translateY(-2px)}
.outlineBtn{background:white;color:var(--blue);border:2px solid var(--blue)}
.primaryBtn.full{width:100%}
.trustLine{display:grid;grid-template-columns:repeat(2,max-content);gap:12px 24px;margin-top:28px;color:#43566a;font-weight:700;font-size:14px}
.trustLine span:before{content:"•";color:var(--blue);margin-right:8px}

.heroIllustration{display:flex;justify-content:flex-end}
.itDashboard{width:min(100%,520px);background:white;border-radius:24px;padding:24px;box-shadow:0 30px 70px rgba(7,31,56,.2);animation:softFloat 5s ease-in-out infinite}
@keyframes softFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
.dashHeader{height:44px;border-bottom:1px solid var(--line);display:flex;align-items:flex-start;gap:8px;color:var(--navy)}
.dashHeader strong{margin-left:auto;font-size:14px}
.windowDot{width:10px;height:10px;border-radius:50%;display:block}
.windowDot.red{background:#ff6b6b}.windowDot.yellow{background:#ffd166}.windowDot.green{background:#06d6a0}
.dashGrid{display:grid;grid-template-columns:1.35fr 1fr 1fr;gap:14px;margin-top:22px}
.dashCard{min-height:94px;border-radius:18px;background:linear-gradient(135deg,#eef6ff,#f8fbff);border:1px solid #d9e9f7;padding:16px;display:flex;flex-direction:column;justify-content:center;gap:10px;animation:fadeUp .7s ease both}
.dashCard svg{color:var(--blue)}
.dashCard span{font-weight:900;color:var(--navy)}
.mainMetric{grid-row:span 2;min-height:202px}
.mainMetric small{color:var(--muted);font-weight:800}
.mainMetric strong{font-size:36px;color:var(--blue)}
.progress{height:10px;background:#dbeafe;border-radius:999px;overflow:hidden}
.progress span{display:block;width:78%;height:100%;border-radius:999px;background:linear-gradient(90deg,var(--blue),var(--blue2));animation:progressMove 2.6s ease-in-out infinite}
@keyframes progressMove{0%,100%{width:64%}50%{width:88%}}
.dashRows{display:grid;gap:12px;margin-top:18px}
.dashRows p{margin:0;background:#f3f9fd;border:1px solid #e1eef7;color:var(--navy);border-radius:14px;padding:13px 14px;font-weight:800;display:flex;align-items:center;gap:10px}
.dashRows svg{color:var(--blue);flex:none}

.imageVisual{background:white;border:1px solid var(--line);border-radius:24px;padding:14px;box-shadow:0 26px 60px rgba(7,31,56,.15);animation:softFloat 5s ease-in-out infinite;overflow:hidden}
.imageVisual img{display:block;width:100%;height:auto;border-radius:18px}
.contactVisual{display:flex;justify-content:flex-end}
.contactFlowCard,.workflowCard{background:white;border:1px solid var(--line);border-radius:24px;padding:30px;box-shadow:0 26px 60px rgba(7,31,56,.15);animation:softFloat 5s ease-in-out infinite}
.contactFlowCard h3,.workflowCard h3{font-size:28px;margin:0 0 24px;color:var(--navy)}
.contactFlowCard p,.workflowStep{display:grid;grid-template-columns:54px 1fr;gap:14px;align-items:center;padding:16px 0;border-top:1px solid #e5eef7;margin:0;color:var(--muted);font-weight:800}
.contactFlowCard span,.workflowStep span{width:42px;height:42px;border-radius:14px;background:#e8f7fd;color:var(--blue);display:grid;place-items:center;font-weight:900}
.workflowStep p{margin:0;color:var(--muted);line-height:1.55;font-weight:700}

.revealUp{animation:fadeUp .7s ease both}
@keyframes fadeUp{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}
.sectionBlock{padding:82px 0}
.sectionIntro{max-width:760px;margin-bottom:34px}
.sectionIntro h2,.whySection h2,.workspaceCopy h2,.aboutWorkSection h2{font-size:clamp(34px,3vw,46px);line-height:1.15;margin:0 0 14px;color:var(--navy)}
.sectionIntro p,.whySection p,.workspaceCopy p,.pageLead,.aboutWorkSection p{color:var(--muted);font-size:17px;line-height:1.75;margin:0}
.serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.serviceCard{background:white;border:1px solid var(--line);border-radius:16px;padding:28px;min-height:285px;box-shadow:0 12px 30px rgba(7,31,56,.06);transition:.22s ease;animation:fadeUp .6s ease both}
.serviceCard:hover{transform:translateY(-5px);box-shadow:0 20px 40px rgba(7,31,56,.1)}
.serviceIcon{width:52px;height:52px;background:#e8f7fd;color:var(--blue);border-radius:14px;display:grid;place-items:center;margin-bottom:20px}
.serviceIcon svg{width:28px;height:28px}
.serviceCard h3{font-size:21px;margin:0 0 12px;color:var(--navy)}
.serviceCard p{color:var(--muted);line-height:1.68;margin:0;font-size:15px}

.whySection{background:white;padding:76px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.whyGrid{display:grid;grid-template-columns:1fr .82fr;gap:54px;align-items:center}
.checkRow{display:grid;gap:12px;margin-top:26px}
.checkRow span{display:flex;align-items:center;gap:10px;color:var(--navy);font-weight:800}
.checkRow svg{color:var(--blue)}
.statsCard{background:var(--navy);color:white;border-radius:18px;padding:34px}
.statsCard h3{font-size:26px;margin:0 0 14px}
.statsCard p{color:#dcebf6}
.statsGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:26px}
.statsGrid div{background:rgba(255,255,255,.08);border-radius:12px;padding:16px}
.statsGrid strong{display:block;font-size:28px}
.statsGrid span{font-size:13px;color:#dcebf6}

.globalPresence{padding:92px 0;background:radial-gradient(circle at top left,#ffffff 0%,transparent 34%),linear-gradient(135deg,#f6fbff 0%,#dcecff 100%);border-top:1px solid rgba(29,127,232,.14);border-bottom:1px solid rgba(29,127,232,.14);overflow:hidden}
.presenceLayout{display:grid;grid-template-columns:.88fr 1.12fr;gap:48px;align-items:center}
.presencePill{display:inline-flex;align-items:center;background:rgba(29,127,232,.1);border:1px solid rgba(29,127,232,.22);color:var(--blue);border-radius:999px;padding:10px 18px;font-size:14px;font-weight:900;margin-bottom:20px}
.presenceCopy h2{font-size:clamp(36px,4vw,58px);line-height:1.08;color:var(--navy);margin:0 0 22px}
.presenceCopy p{font-size:18px;line-height:1.75;color:var(--muted);margin:0 0 28px}
.presenceFeatures{display:grid;gap:14px}
.presenceFeatures div{background:white;border:1px solid var(--line);border-radius:18px;padding:18px 20px;box-shadow:0 14px 34px rgba(7,31,56,.07);transition:.25s ease}
.presenceFeatures div:hover{transform:translateX(6px)}
.presenceFeatures strong{display:block;color:var(--navy);font-size:18px;margin-bottom:5px}
.presenceFeatures span{color:var(--muted);font-size:15px}
.presenceImageCard{background:white;border:1px solid rgba(29,127,232,.16);border-radius:30px;overflow:hidden;box-shadow:0 34px 80px rgba(7,31,56,.14);animation:softFloat 5s ease-in-out infinite}
.presenceImageCard img{display:block;width:100%;height:auto;filter:saturate(.98) contrast(1.02)}

.workspaceSection{padding:82px 0;display:grid;grid-template-columns:.9fr 1.1fr;gap:58px;align-items:center}
.deviceFrame{background:#fff;border:1px solid var(--line);border-radius:20px;padding:22px;box-shadow:0 18px 45px rgba(7,31,56,.08)}
.deviceHeader{height:22px;border-radius:999px;background:#e8f1f7;margin-bottom:24px}
.deviceBody{height:240px;border-radius:14px;background:linear-gradient(135deg,#e8f7fd,#fff);display:grid;grid-template-columns:repeat(2,1fr);gap:16px;padding:36px}
.deviceBody svg{width:52px;height:52px;color:var(--blue);align-self:center;justify-self:center}
.workspaceCopy .primaryBtn{margin-top:28px}

.aboutWorkSection{padding:82px 0;display:grid;grid-template-columns:.95fr 1.05fr;gap:70px;align-items:center}
.pillGrid{display:flex;flex-wrap:wrap;gap:12px;margin-top:30px}
.pillGrid span{background:rgba(29,127,232,.1);border:1px solid rgba(29,127,232,.25);border-radius:999px;padding:12px 18px;color:#154775;font-weight:900}
.aboutCards{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;padding-bottom:82px}
.aboutCards div{background:white;border:1px solid var(--line);border-radius:16px;padding:26px}
.aboutCards h3{color:var(--navy);font-size:22px;margin:0 0 12px}
.aboutCards p{color:var(--muted);line-height:1.65;margin:0}
.pageBlock{padding:82px 0}
.pageBlock h1{color:var(--navy)}

.contactPage{animation:fadeUp .55s ease both}
.contactHeader{max-width:760px;margin:0 0 38px;text-align:left}
.contactHeader h1{text-align:left;margin-bottom:14px}
.quoteLayout{display:grid;grid-template-columns:.95fr 1.05fr;gap:54px;align-items:start}
.quoteForm{background:white;border:1px solid var(--line);border-radius:22px;padding:32px;box-shadow:0 16px 38px rgba(7,31,56,.07);text-align:left;animation:fadeUp .65s ease both}
.quoteForm input,.quoteForm textarea,.quoteForm select{width:100%;border:1px solid #c8d7e3;border-radius:12px;padding:15px;font-size:15px;background:#f9fbff;transition:.2s ease}
.quoteForm input:focus,.quoteForm textarea:focus,.quoteForm select:focus{outline:none;border-color:var(--blue);box-shadow:0 0 0 4px rgba(29,127,232,.12);background:white}
.formTwo{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.quoteForm select,.quoteForm textarea{margin-top:14px}
.quoteForm button{margin-top:14px}
.quoteForm small{display:block;color:var(--muted);margin-top:12px}
.contactSideGraphic{display:grid;gap:20px}
.contactProcessBox{background:white;border:1px solid var(--line);border-radius:22px;padding:30px;box-shadow:0 18px 45px rgba(7,31,56,.08)}
.contactProcessBox h3{font-size:28px;margin:0 0 18px;color:var(--navy)}
.contactProcessBox p{margin:12px 0;color:var(--muted);font-weight:800;display:flex;align-items:center;gap:12px}
.contactProcessBox span{width:34px;height:34px;border-radius:50%;background:#e8f7fd;color:var(--blue);display:grid;place-items:center;font-weight:900;flex:none}
.miniContactCards{display:grid;gap:12px}
.miniContactCards p{margin:0;background:white;border:1px solid var(--line);border-radius:14px;padding:16px;display:flex;gap:12px;align-items:center;color:var(--navy);font-weight:900}
.miniContactCards svg{color:var(--blue)}

.footer{background:var(--navy);color:white;padding:38px 0}
.footerGrid{display:flex;justify-content:space-between;gap:30px}
.footer h3{margin:0 0 8px}
.footer p{margin:5px 0;color:#dcebf6}

@media(max-width:950px){
  .wrap{width:min(100% - 36px,1180px)}
  .navLinks{display:none;position:absolute;left:24px;right:24px;top:102px;background:white;border:1px solid var(--line);box-shadow:0 20px 50px rgba(0,0,0,.15);border-radius:14px;padding:14px;flex-direction:column;align-items:stretch}
  .navLinks.open{display:flex}
  .navLinks button{text-align:left;padding:14px}
  .menuBtn{display:inline-flex}
  .heroGrid,.whyGrid,.workspaceSection,.aboutWorkSection,.quoteLayout,.presenceLayout{grid-template-columns:1fr}
  .heroSection{padding:64px 0 86px}
  .serviceGrid,.aboutCards{grid-template-columns:1fr 1fr}
  .workspaceSection{padding-top:58px}
  .footerGrid{flex-direction:column}
  .presenceImageCard{order:-1}
}

@media(max-width:620px){
  .wrap{width:min(100% - 32px,1180px)}
  .navWrap{height:82px}
  .brand img{width:58px;height:58px}
  .brand span{font-size:16px}
  .navLinks{top:82px}
  .heroSection{padding:48px 0 78px}
  .heroActions{display:grid}
  .primaryBtn,.outlineBtn{width:100%}
  .trustLine{display:grid;grid-template-columns:1fr;gap:10px}
  .dashGrid{grid-template-columns:1fr}
  .mainMetric{grid-row:auto;min-height:150px}
  .serviceGrid,.aboutCards,.formTwo{grid-template-columns:1fr}
  .statsGrid{grid-template-columns:1fr}
  .workspaceSection,.sectionBlock,.pageBlock,.aboutWorkSection,.globalPresence{padding:54px 0}
  .sectionIntro h2,.whySection h2,.workspaceCopy h2,.aboutWorkSection h2{font-size:32px}
  .footerGrid{gap:16px}
}
`;
