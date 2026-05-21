import React, { useState } from "react";
import {
  ArrowRight, CheckCircle2, Cloud, Database, Headphones, Laptop, Mail,
  MapPin, Menu, MessageCircle, Phone, Printer, Server, ShieldCheck,
  Wifi, X, Zap, Cpu
} from "lucide-react";

const phone = "0416728611";
const email = "sales@smartitsolutions.com.au";
const cleanPhone = phone.replace(/^0/, "");
const whatsappUrl = `https://wa.me/61${cleanPhone}?text=${encodeURIComponent(
  "Hi Smart I.T Solutions, I would like to enquire about your IT services."
)}`;

const services = [
  {
    icon: Headphones,
    title: "Managed IT Support",
    badge: "Core",
    desc: "Ongoing IT support for small businesses, remote workers and teams that need reliable technology without hiring full-time IT staff.",
    points: ["Remote support", "Onsite assistance", "Business IT guidance"],
  },
  {
    icon: Laptop,
    title: "Laptop & Desktop Repairs",
    badge: "Repairs",
    desc: "Professional troubleshooting, repairs and upgrades for laptops, desktops and business computers.",
    points: ["Laptop repairs", "Desktop troubleshooting", "SSD & RAM upgrades"],
  },
  {
    icon: Cpu,
    title: "Hardware Procurement & Leasing",
    badge: "Business IT",
    desc: "Hardware supply, device leasing and workstation setup for businesses needing reliable equipment.",
    points: ["Device leasing", "Hardware supply", "Workstation setup"],
  },
  {
    icon: Cloud,
    title: "Microsoft 365 & Cloud",
    badge: "Cloud",
    desc: "Microsoft 365, Outlook, Teams, email setup, licensing and cloud productivity support.",
    points: ["Microsoft 365", "Business email", "Teams & Outlook"],
  },
  {
    icon: Server,
    title: "VoIP Phone Services",
    badge: "Phones",
    desc: "Business VoIP setup, handset configuration, call flow support and phone system assistance.",
    points: ["VoIP setup", "Handset support", "Call routing"],
  },
  {
    icon: Wifi,
    title: "Internet & Networking",
    badge: "Network",
    desc: "Wi-Fi, router, modem, printer and small office network troubleshooting and setup.",
    points: ["Wi-Fi support", "Router setup", "Internet troubleshooting"],
  },
  {
    icon: ShieldCheck,
    title: "Security & Antivirus",
    badge: "Security",
    desc: "Antivirus setup, virus removal, spyware protection and practical cybersecurity guidance.",
    points: ["Antivirus", "Virus removal", "Security advice"],
  },
  {
    icon: Database,
    title: "Backup & Data Protection",
    badge: "Backup",
    desc: "Backup planning, data protection, storage setup and recovery guidance for important files.",
    points: ["Backup setup", "Data safety", "Recovery guidance"],
  },
  {
    icon: Printer,
    title: "Printers & Devices",
    badge: "Devices",
    desc: "Printer, scanner and connected device setup, configuration and troubleshooting.",
    points: ["Printer setup", "Scanner support", "Device configuration"],
  },
];

const industries = [
  "Small Businesses",
  "Retail Stores",
  "Restaurants",
  "Professional Offices",
  "Home Offices",
  "Remote Workers",
];

const navLinks = ["Home", "About", "Services", "Contact"];

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article className="serviceCard">
      <div className="serviceTop">
        <span className="iconBubble"><Icon /></span>
        <span className="badge">{service.badge}</span>
      </div>

      <div className="serviceBody">
        <h3>{service.title}</h3>
        <p>{service.desc}</p>
      </div>

      <ul>
        {service.points.map((point) => (
          <li key={point}><CheckCircle2 size={16} /> {point}</li>
        ))}
      </ul>
    </article>
  );
}

function Nav({ page, setPage }) {
  const [open, setOpen] = useState(false);

  function goTo(item) {
    setPage(item);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <header className="header">
      <div className="wrap nav">
        <button className="brand" onClick={() => goTo("Home")}>
          <img src="/Logo.jpg" alt="Smart I.T Solutions" />
          <div>
            <strong>Smart I.T Solutions</strong>
            <span>Managed IT • VoIP • Security</span>
          </div>
        </button>

        <nav className={open ? "navLinks open" : "navLinks"}>
          {navLinks.map((item) => (
            <button key={item} onClick={() => goTo(item)} className={page === item ? "active" : ""}>
              {item}
            </button>
          ))}
        </nav>

        <div className="navActions">
          <a className="ghostCall" href={`tel:+61${cleanPhone}`}><Phone size={16} /> Call</a>
          <a className="navCta" href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a>
          <button className="menuBtn" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}

function Home({ setPage }) {
  return (
    <>
      <section className="hero">
        <div className="wrap heroGrid">
          <div>
            <div className="pill"><Zap size={16} /> Responsive IT support for modern businesses</div>
            <h1>Managed IT services that keep your business moving.</h1>
            <p className="lead">
              Smart I.T Solutions supports homes and businesses with managed IT support,
              laptop and desktop repair, VoIP phone services, Microsoft 365, internet,
              cybersecurity, antivirus, backups and hardware solutions.
            </p>

            <div className="actions">
              <a className="primary" href={`tel:+61${cleanPhone}`}><Phone size={18} /> Call 0416 728 611</a>
              <a className="secondary" href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle size={18} /> WhatsApp Enquiry
              </a>
            </div>

            <div className="trustStrip">
              <div><strong>IT</strong><span>Support made simple</span></div>
              <div><strong>AU</strong><span>Australia-wide support</span></div>
              <div><strong>365</strong><span>Microsoft cloud support</span></div>
            </div>
          </div>

          <div className="heroPanel">
            <div className="panelHeader">
              <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
              <small>Smart Support Console</small>
            </div>

            <div className="logoStage">
              <img src="/Logo.jpg" alt="Smart I.T Solutions Logo" />
            </div>

            <div className="statusList">
              <p><CheckCircle2 /> Computer repair and upgrades</p>
              <p><CheckCircle2 /> Microsoft 365 and cloud support</p>
              <p><CheckCircle2 /> VoIP, internet and networking</p>
              <p><CheckCircle2 /> Security, antivirus and backup</p>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap section">
        <div className="sectionHead">
          <p className="eyebrow dark">What We Do</p>
          <h2>Complete IT solutions under one roof.</h2>
          <p>
            From computer repairs to managed IT, Microsoft 365, VoIP, security,
            device leasing and hardware procurement, we help you keep technology reliable.
          </p>
        </div>

        <div className="serviceGrid">
          {services.slice(0, 6).map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      <section className="darkBand">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Why Smart I.T Solutions?</p>
            <h2>Less downtime. Clearer support. Better technology decisions.</h2>
            <p>
              We help users and businesses stay productive by fixing issues quickly,
              improving connectivity, securing devices and making IT easier to manage.
            </p>
          </div>

          <div className="ticks">
            <p><CheckCircle2 /> Responsive remote and onsite support</p>
            <p><CheckCircle2 /> Microsoft 365, VoIP and device assistance</p>
            <p><CheckCircle2 /> Cybersecurity and antivirus guidance</p>
            <p><CheckCircle2 /> Simple communication without jargon</p>
          </div>
        </div>
      </section>

      <section className="wrap section">
        <div className="sectionHead">
          <p className="eyebrow dark">Who We Help</p>
          <h2>Support for busy people and growing businesses.</h2>
        </div>

        <div className="industryGrid">
          {industries.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section className="wrap ctaSection">
        <div className="ctaBox">
          <div>
            <p className="eyebrow">Need IT help today?</p>
            <h2>Tell us what is not working. We will help you find the right fix.</h2>
          </div>
          <button className="primary light" onClick={() => setPage("Contact")}>
            Contact Us <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </>
  );
}

function About() {
  return (
    <main className="wrap page aboutPage">
      <p className="eyebrow dark aboutEyebrow">About Us</p>

      <h1 className="aboutTitle">
        Trusted IT support for homes, professionals and growing businesses.
      </h1>

      <div className="aboutLead expanded">
        <p>
          Smart I.T Solutions provides practical and dependable technology support
          designed for everyday users, remote workers and small businesses across Australia.
        </p>
        <p>
          We understand how frustrating technology problems can be when computers slow down,
          internet drops, emails fail, phones stop working or security becomes a concern.
          Our goal is to make technology easier to manage, understand and rely on.
        </p>
      </div>

      <div className="aboutHighlight">
        <div>
          <h2>We make IT simple, reliable and business-ready.</h2>
          <p>
            Our support is focused on practical outcomes. Whether you need help with a slow
            laptop, business computers, Microsoft 365, VoIP phones, Wi-Fi issues,
            cybersecurity or ongoing managed IT support, we work towards solutions that are
            clear, efficient and dependable.
          </p>
        </div>

        <div className="highlightList">
          <p><CheckCircle2 /> Clear advice before unnecessary spending</p>
          <p><CheckCircle2 /> Remote and onsite support available</p>
          <p><CheckCircle2 /> Laptop, desktop and business computer repair</p>
          <p><CheckCircle2 /> Hardware procurement and device leasing</p>
          <p><CheckCircle2 /> Cloud, VoIP, security and backup support</p>
        </div>
      </div>

      <div className="aboutGrid detailed">
        <div className="infoBox large">
          <h3>What we manage</h3>
          <p>
            We support the essential technology that keeps homes and businesses running smoothly.
            This includes laptops, desktops, business computers, Microsoft 365, Outlook, Teams,
            business email, VoIP phones, internet connections, Wi-Fi, routers, printers,
            scanners, backups, antivirus and everyday cybersecurity.
          </p>
          <p>
            We also assist with hardware procurement, device leasing, workstation setup,
            replacement systems and practical technology recommendations based on business
            needs and budgets.
          </p>
          <p>
            Whether you are a home user needing simple support or a business looking for
            ongoing IT assistance, Smart I.T Solutions focuses on responsive service, clear
            communication and reliable technology outcomes.
          </p>
        </div>

        <div className="infoBox">
          <h3>Our Mission</h3>
          <p>
            To provide reliable and professional IT support that makes technology easier,
            safer and more productive for every customer.
          </p>
        </div>

        <div className="infoBox">
          <h3>Our Approach</h3>
          <p>
            We listen first, understand the issue properly and recommend the most practical
            solution without unnecessary complexity or confusing language.
          </p>
        </div>

        <div className="infoBox">
          <h3>Who We Support</h3>
          <p>
            Home users, remote workers, retail stores, restaurants, professional offices,
            startups and small businesses requiring dependable technology support.
          </p>
        </div>

        <div className="infoBox">
          <h3>Why Customers Choose Us</h3>
          <p>
            Customers value our honest communication, responsive support and practical
            solutions that help reduce downtime and keep systems running efficiently.
          </p>
        </div>
      </div>
    </main>
  );
}

function Services() {
  return (
    <main className="wrap page">
      <p className="eyebrow dark">Services</p>
      <h1>Managed IT services for support, security and growth.</h1>
      <p className="pageIntro">
        Choose the service you need today or speak with us about a simple support
        setup for your home office or business.
      </p>

      <div className="serviceGrid">
        {services.map((service) => <ServiceCard key={service.title} service={service} />)}
      </div>
    </main>
  );
}

function Contact() {
  return (
    <main className="wrap page contactGrid">
      <div>
        <p className="eyebrow dark">Contact Us</p>
        <h1>Get IT support.</h1>
        <p className="pageIntro">
          Fill the form and your enquiry will be sent to our email. You can also
          call or send a WhatsApp message for a quicker conversation.
        </p>

        <div className="contactDetails">
          <p><Phone /> 0416 728 611</p>
          <p><Mail /> {email}</p>
          <p><MapPin /> Australia-wide support available</p>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="secondary darkBtn">
            <MessageCircle size={18} /> Send WhatsApp Enquiry
          </a>
        </div>
      </div>

      <form className="form" action={`https://formsubmit.co/${email}`} method="POST">
        <input type="hidden" name="_subject" value="New Website Enquiry - Smart I.T Solutions" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />

        <label>Name<input name="name" required placeholder="Your name" /></label>
        <label>Email<input type="email" name="email" required placeholder="you@example.com" /></label>
        <label>Phone<input name="phone" placeholder="Your phone number" /></label>

        <label>Service Required
          <select name="service">
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
        </label>

        <label>Message<textarea name="message" rows="5" required placeholder="Tell us what you need help with" /></label>

        <button className="primary full" type="submit">Send Enquiry</button>
        <small>First submission may require email verification from FormSubmit.</small>
      </form>
    </main>
  );
}

export default function App() {
  const [page, setPage] = useState("Home");

  return (
    <div>
      <style>{css}</style>
      <Nav page={page} setPage={setPage} />

      {page === "Home" && <Home setPage={setPage} />}
      {page === "About" && <About />}
      {page === "Services" && <Services />}
      {page === "Contact" && <Contact />}

      <footer>
        <div className="wrap footerGrid">
          <div>
            <strong>Smart I.T Solutions</strong>
            <p>Managed IT • Computer Repair • VoIP • Microsoft 365 • Security</p>
          </div>
          <div>
            <p>Phone: 0416 728 611</p>
            <p>Email: {email}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const css = `
:root{
--navy:#06172d;
--navy2:#0b3159;
--blue:#00a9e8;
--cyan:#7de7ff;
--text:#102a43;
--muted:#52677a;
--bg:#f4f8fc;
--card:#ffffff;
--line:#d9e8f5;
--shadow:0 18px 50px rgba(6,23,45,.12);
}

*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;font-family:Arial,Helvetica,sans-serif;background:var(--bg);color:var(--text)}
button,input,select,textarea{font-family:inherit}
button{cursor:pointer}
.wrap{max-width:1180px;margin:auto;padding:0 24px}

.header{background:rgba(6,23,45,.94);position:sticky;top:0;z-index:50;backdrop-filter:blur(18px);box-shadow:0 4px 25px rgba(0,0,0,.18)}
.nav{height:84px;display:flex;align-items:center;justify-content:space-between;gap:18px}
.brand{display:flex;align-items:center;gap:14px;background:transparent;border:0;color:white;text-align:left;min-width:max-content}
.brand img{width:58px;height:58px;object-fit:contain;background:white;border-radius:14px;padding:5px}
.brand strong{font-size:21px}
.brand span{display:block;color:#a7e8ff;font-size:12px;letter-spacing:1px;text-transform:uppercase;margin-top:3px}
.navLinks{display:flex;gap:8px;align-items:center}
.navLinks button{background:transparent;border:0;color:#e8f6ff;font-weight:800;font-size:15px;padding:12px 14px;border-radius:999px}
.navLinks .active,.navLinks button:hover{color:white;background:rgba(125,231,255,.13)}
.navActions{display:flex;align-items:center;gap:10px}
.ghostCall{color:white;text-decoration:none;display:inline-flex;align-items:center;gap:7px;border:1px solid rgba(255,255,255,.18);padding:11px 14px;border-radius:999px;font-weight:800}
.navCta{background:linear-gradient(135deg,var(--blue),#45d6ff);color:white;text-decoration:none;padding:13px 20px;border-radius:999px;font-weight:900}
.menuBtn{display:none;background:white;border:0;border-radius:12px;padding:10px;color:var(--navy)}

.hero{background:linear-gradient(130deg,#06172d 0%,#0b3159 60%,#0079b8 115%);color:white;padding:92px 0 76px}
.heroGrid{display:grid;grid-template-columns:1.05fr .95fr;gap:52px;align-items:center}
.pill{display:inline-flex;align-items:center;gap:9px;color:#dff8ff;background:rgba(125,231,255,.12);border:1px solid rgba(125,231,255,.26);padding:10px 14px;border-radius:999px;font-weight:800;font-size:13px}
.eyebrow{color:var(--cyan);font-weight:900;text-transform:uppercase;letter-spacing:2px;font-size:13px}
.eyebrow.dark{color:#0077aa}
.aboutEyebrow{font-size:16px;margin-bottom:18px}
.hero h1,.page h1{font-size:clamp(38px,5vw,62px);line-height:1.04;margin:18px 0 22px;letter-spacing:-1.4px;color:inherit}
.page h1{color:var(--navy)}
.aboutTitle{font-size:clamp(40px,5vw,58px);line-height:1.07;margin-bottom:30px;max-width:1050px}
.lead{font-size:19px;line-height:1.75;color:#eef9ff;max-width:720px}
.pageIntro,.aboutLead p{font-size:18px;line-height:1.82;color:#435b70}
.actions{display:flex;gap:15px;flex-wrap:wrap;margin-top:30px}
.primary,.secondary{border:0;text-decoration:none;display:inline-flex;align-items:center;justify-content:center;gap:10px;border-radius:999px;padding:15px 24px;font-weight:900;transition:.2s ease}
.primary{background:linear-gradient(135deg,var(--blue),#45d6ff);color:white}
.primary:hover,.secondary:hover{transform:translateY(-2px)}
.secondary{background:white;color:var(--navy)}
.primary.light{background:white;color:var(--navy)}
.primary.full{width:100%}
.darkBtn{background:var(--navy);color:white;margin-top:15px;width:max-content}

.trustStrip{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:34px}
.trustStrip div{background:rgba(255,255,255,.09);border:1px solid rgba(255,255,255,.12);border-radius:18px;padding:16px;min-height:86px}
.trustStrip strong{display:block;font-size:25px;color:white}
.trustStrip span{display:block;color:#cbefff;font-size:13px;margin-top:4px}

.heroPanel{background:white;color:var(--navy);border-radius:26px;padding:22px;box-shadow:0 30px 80px rgba(0,0,0,.25);max-width:500px;margin-left:auto}
.panelHeader{display:flex;align-items:center;gap:8px;border-bottom:1px solid #e5eef7;padding-bottom:14px}
.dot{width:10px;height:10px;border-radius:50%}
.red{background:#ff5f57}.yellow{background:#ffbd2e}.green{background:#28c840}
.panelHeader small{margin-left:auto;color:#60758a;font-weight:800}
.logoStage{display:grid;place-items:center;padding:30px 0}
.logoStage img{width:165px;max-width:70%;background:white;border-radius:20px}
.statusList{display:grid;gap:12px}
.statusList p{display:flex;align-items:center;gap:12px;margin:0;background:#f0f8ff;color:#243b53;border-radius:16px;padding:14px;font-weight:800}
.statusList svg{color:var(--blue);flex:none}

.section,.page{padding:76px 24px}
.sectionHead{max-width:820px;margin-bottom:34px}
.sectionHead h2,.darkBand h2,.ctaBox h2{font-size:clamp(32px,4vw,46px);line-height:1.13;margin:10px 0 18px;color:var(--navy)}
.sectionHead p{color:#52677a;line-height:1.75;font-size:17px}

.serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;align-items:stretch}
.serviceCard{background:white;border-radius:24px;padding:24px;box-shadow:var(--shadow);border:1px solid var(--line);display:flex;flex-direction:column;min-height:390px}
.serviceTop{display:flex;align-items:center;justify-content:space-between;gap:12px}
.iconBubble{width:56px;height:56px;border-radius:18px;background:#eaf8ff;display:grid;place-items:center;border:1px solid #c9eefc;flex:none}
.iconBubble svg{color:var(--blue);width:29px;height:29px}
.badge{font-size:11px;font-weight:900;color:#0077aa;background:#eaf8ff;border:1px solid #c9eefc;padding:7px 9px;border-radius:999px;white-space:nowrap}
.serviceBody{min-height:165px}
.serviceCard h3{font-size:20px;line-height:1.25;color:var(--navy);margin:22px 0 12px}
.serviceCard p{color:#415a77;line-height:1.62;margin:0;font-size:15px}
.serviceCard ul{margin:auto 0 0;padding:16px 0 0;list-style:none;display:grid;gap:9px;border-top:1px solid #e8f1f8}
.serviceCard li{display:flex;gap:9px;align-items:flex-start;color:#243b53;line-height:1.42;font-weight:800;font-size:14px}
.serviceCard li svg{color:var(--blue);flex:none;margin-top:2px}

.darkBand{background:linear-gradient(135deg,#06172d,#0b3159);color:white;padding:80px 0}
.darkBand h2{color:white}
.split{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center}
.split p{color:#e8f6ff;line-height:1.75;font-size:17px}
.ticks{display:grid;gap:14px}
.ticks p{background:rgba(255,255,255,.09);border:1px solid rgba(255,255,255,.12);padding:18px;border-radius:18px;display:flex;gap:12px;align-items:center;color:white;margin:0;font-weight:800}

.industryGrid{display:grid;grid-template-columns:repeat(6,1fr);gap:14px}
.industryGrid span{background:white;border:1px solid var(--line);border-radius:999px;text-align:center;padding:16px 12px;font-weight:900;color:var(--navy);box-shadow:0 8px 24px rgba(6,23,45,.07)}

.ctaSection{padding-bottom:76px}
.ctaBox{background:linear-gradient(135deg,var(--blue),#095996);color:white;border-radius:28px;padding:42px;display:grid;grid-template-columns:1fr auto;align-items:center;gap:28px}
.ctaBox h2{color:white;margin-bottom:0}

.aboutLead{display:grid;grid-template-columns:1fr 1fr;gap:28px}
.aboutLead.expanded{margin-bottom:42px}
.aboutHighlight{background:linear-gradient(135deg,#06172d,#0b3159);color:white;border-radius:30px;padding:42px;display:grid;grid-template-columns:1.1fr .9fr;gap:40px;align-items:center;margin:42px 0;box-shadow:0 22px 60px rgba(6,23,45,.16)}
.aboutHighlight h2{font-size:40px;line-height:1.15;margin:0 0 18px;color:white}
.aboutHighlight p{color:#e8f6ff;line-height:1.8;font-size:17px}
.highlightList{display:grid;gap:14px}
.highlightList p{margin:0;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);padding:16px;border-radius:18px;display:flex;gap:10px;align-items:flex-start;font-weight:800;line-height:1.45}
.highlightList svg{color:var(--cyan);flex:none;margin-top:2px}
.aboutGrid{display:grid;grid-template-columns:1.2fr 1fr 1fr;gap:22px;margin-top:36px}
.infoBox{background:white;padding:30px;border-radius:24px;box-shadow:var(--shadow);border:1px solid var(--line);display:flex;flex-direction:column}
.infoBox.large{grid-row:span 2}
.infoBox h3{color:var(--navy);margin:0 0 12px;font-size:22px}
.infoBox p{color:#415a77;line-height:1.75;margin:0 0 16px}

.contactGrid{display:grid;grid-template-columns:.9fr 1.1fr;gap:54px;align-items:start}
.contactDetails{background:white;border:1px solid var(--line);border-radius:24px;padding:24px;box-shadow:var(--shadow);margin-top:24px}
.contactDetails p{display:flex;align-items:center;gap:12px;font-weight:900;color:#243b53}
.contactDetails svg{color:var(--blue);flex:none}
.form{background:white;padding:34px;border-radius:26px;box-shadow:var(--shadow);border:1px solid var(--line)}
.form label{display:block;font-weight:900;margin-bottom:16px;color:var(--navy)}
.form input,.form textarea,.form select{width:100%;margin-top:8px;padding:15px;border:1px solid #b7c9d9;border-radius:14px;font-size:15px;color:#102a43;background:#fbfdff}
.form small{display:block;color:#627d98;margin-top:12px;line-height:1.5}

footer{background:#06172d;color:#e8f6ff;padding:35px 0}
.footerGrid{display:flex;justify-content:space-between;gap:22px}
footer strong{font-size:20px}
footer p{margin:7px 0;color:#b6d7ec}

@media(max-width:1100px){
.serviceGrid{grid-template-columns:repeat(2,1fr)}
.industryGrid{grid-template-columns:repeat(3,1fr)}
.heroGrid{grid-template-columns:1fr}
.heroPanel{margin-left:0;max-width:none}
}

@media(max-width:860px){
.wrap{padding:0 18px}
.nav{height:76px}
.brand img{width:50px;height:50px}
.brand strong{font-size:18px}
.brand span{font-size:10px}
.ghostCall,.navCta{display:none}
.menuBtn{display:inline-flex}
.navLinks{display:none;position:absolute;left:18px;right:18px;top:82px;background:white;border-radius:22px;padding:12px;box-shadow:0 24px 60px rgba(0,0,0,.22);border:1px solid var(--line);flex-direction:column;align-items:stretch}
.navLinks.open{display:flex}
.navLinks button{color:var(--navy);text-align:left;padding:15px}
.navLinks .active,.navLinks button:hover{background:#eaf8ff;color:var(--navy)}
.hero{padding:64px 0 54px}
.split,.contactGrid,.aboutLead,.aboutHighlight,.ctaBox{grid-template-columns:1fr}
.actions{display:grid}
.primary,.secondary{width:100%}
.trustStrip{grid-template-columns:1fr}
.serviceGrid,.aboutGrid{grid-template-columns:1fr}
.serviceCard{min-height:auto}
.serviceBody{min-height:auto}
.industryGrid{grid-template-columns:1fr 1fr}
.section,.page{padding:56px 18px}
.aboutHighlight{padding:28px}
.aboutHighlight h2{font-size:30px}
.footerGrid{flex-direction:column}
}

@media(max-width:520px){
.brand div{display:none}
.industryGrid{grid-template-columns:1fr}
.aboutTitle{font-size:38px}
.sectionHead h2,.darkBand h2,.ctaBox h2{font-size:31px}
.panelHeader small{display:none}
}
`;