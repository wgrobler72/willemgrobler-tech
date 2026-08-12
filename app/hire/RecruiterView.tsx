"use client";

import { useEffect, useState } from "react";

const roleFits = [
  {
    title: "Senior Infrastructure Engineer",
    fit: "Strong",
    skills: "Windows Server · Active Directory · Hyper-V · VMware · Veeam · Networking"
  },
  {
    title: "Microsoft 365 / Azure Administrator",
    fit: "Strong",
    skills: "Microsoft 365 · Azure · Entra ID · Intune · Defender · MFA · Conditional Access"
  },
  {
    title: "Senior MSP Engineer",
    fit: "Strong",
    skills: "Multi-client support · Escalations · Windows Server · Microsoft 365 · Azure · Virtualisation"
  },
  {
    title: "IT Operations Manager",
    fit: "Strong",
    skills: "Operations · Budgets · Vendors · Staff leadership · Infrastructure · Business continuity"
  }
];

const evidence = [
  ["Microsoft 365 & Azure Migration", "Large-scale public-sector cloud transition", "/case-studies/microsoft-365-azure-migration/"],
  ["Department-Wide Recovery", "Recovered an entire department from enterprise backups", "/case-studies/disaster-recovery/"],
  ["Active Directory Time Synchronisation", "Diagnosed and corrected domain time hierarchy", "/case-studies/active-directory-time-sync/"]
];

export default function RecruiterView() {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [source, setSource] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setCompany((params.get("company") || "").replaceAll("-", " "));
    setRole((params.get("role") || "").replaceAll("-", " "));
    setSource(params.get("src") || "");
  }, []);

  const subject = encodeURIComponent(
    role || company
      ? `Remote IT Opportunity${role ? ` - ${role}` : ""}${company ? ` at ${company}` : ""}`
      : "Remote IT Opportunity"
  );

  return (
    <main>
      <header className="nav">
        <a className="brand" href="/" aria-label="Willem Grobler home">WG</a>
        <nav>
          <a href="/">Portfolio</a>
          <a href="/resume/">Resume</a>
          <a href="/#case-studies">Case Studies</a>
          <a href="https://www.linkedin.com/in/willem-grobler-b17746347" target="_blank" rel="noreferrer">LinkedIn</a>
        </nav>
      </header>

      <section className="hireHero">
        <div className="eyebrow">RECRUITER OVERVIEW</div>
        <h1>{role ? `A closer look for the ${role} role.` : "A quick view of where I fit."}</h1>
        {company && <div className="personalisedFor">Prepared for <strong>{company}</strong></div>}
        <p className="lead">
          Senior infrastructure and Microsoft cloud professional with more than 20 years across enterprise, MSP, government, healthcare, aerospace and manufacturing environments. I combine hands-on engineering with operational ownership.
        </p>
        <div className="availability"><span></span>South Africa based · Available for fully remote international opportunities</div>
        <div className="actions">
          <a className="primary" href={`/Willem-Grobler-Senior-Infrastructure-Resume.pdf${source ? `?src=${encodeURIComponent(source)}` : ""}`} target="_blank" rel="noreferrer">Download Resume</a>
          <a className="secondary" href={`mailto:willemgrobler72@gmail.com?subject=${subject}`}>Contact Willem</a>
          <a className="secondary" href="/">Full Portfolio</a>
        </div>
      </section>

      <section className="section alt">
        <div className="sectionLabel">ROLE FIT</div>
        <h3>Where my experience is strongest.</h3>
        <div className="roleFitGrid">
          {roleFits.map(item => (
            <article className="roleFitCard" key={item.title}>
              <div className="fitBadge">{item.fit} fit</div>
              <h4>{item.title}</h4>
              <p>{item.skills}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="sectionLabel">IMMEDIATE VALUE</div>
        <h3>What I can take ownership of.</h3>
        <div className="grid3">
          <article className="card"><h4>Microsoft cloud operations</h4><p>Microsoft 365, Azure, Entra ID, Exchange Online, Teams, SharePoint, OneDrive, Intune, Defender, MFA and Conditional Access.</p></article>
          <article className="card"><h4>Windows infrastructure</h4><p>Windows Server, Active Directory, Group Policy, Hyper-V, VMware, DNS, DHCP, networking, backup and restore operations.</p></article>
          <article className="card"><h4>Escalations & recovery</h4><p>Complex technical incidents, backup recovery, root-cause troubleshooting, documentation and service continuity.</p></article>
          <article className="card"><h4>MSP service delivery</h4><p>Experience supporting customer environments ranging from approximately 20 to 600 users across different technical estates.</p></article>
          <article className="card"><h4>Operational leadership</h4><p>Budgets, procurement, vendors, licensing, staff supervision, infrastructure lifecycle and business-critical systems.</p></article>
          <article className="card"><h4>Remote collaboration</h4><p>Comfortable supporting distributed users, multi-site environments and international teams across remote working arrangements.</p></article>
        </div>
      </section>

      <section className="section alt">
        <div className="sectionLabel">PROOF</div>
        <h3>Three examples worth reviewing.</h3>
        <div className="grid3">
          {evidence.map(([title, result, href]) => (
            <a className="case caseLink" href={href} key={title}>
              <h4>{title}</h4>
              <strong className="result">{result}</strong>
              <span className="readMore">Read case study →</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section recruiterFacts">
        <div className="sectionLabel">QUICK FACTS</div>
        <div className="quickFactsGrid">
          <div><strong>110+</strong><span>Current users supported</span></div>
          <div><strong>120</strong><span>Microsoft 365 accounts</span></div>
          <div><strong>12</strong><span>Windows Servers</span></div>
          <div><strong>10</strong><span>Hyper-V virtual machines</span></div>
          <div><strong>39</strong><span>Multi-site locations supported</span></div>
          <div><strong>99.9%</strong><span>Service availability</span></div>
        </div>
      </section>

      <section className="section contact conversion">
        <div className="sectionLabel">NEXT STEP</div>
        <h3>If the role needs someone senior who still works hands-on, we should talk.</h3>
        <p>I am specifically looking for fully remote international roles where infrastructure depth, Microsoft cloud experience and operational judgement are useful.</p>
        <div className="actions">
          <a className="primary" href={`mailto:willemgrobler72@gmail.com?subject=${subject}`}>Discuss the Role</a>
          <a className="secondary" href="/resume/">View Resume</a>
          <a className="secondary" href="https://www.linkedin.com/in/willem-grobler-b17746347" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </section>

      <footer><span>© 2026 Willem Grobler</span><span>willemgrobler.tech/hire</span></footer>
    </main>
  );
}
