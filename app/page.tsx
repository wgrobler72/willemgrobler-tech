const metrics = [
  ["110+", "Users Supported"],
  ["120", "Microsoft 365 Users"],
  ["39", "Sites Supported"],
  ["99.9%", "Service Availability"]
];

const expertise = [
  ["Microsoft Cloud", "Microsoft 365, Azure, Exchange Online, Teams, SharePoint Online and OneDrive"],
  ["Identity & Endpoint", "Entra ID, Intune, MFA, Conditional Access and Microsoft Defender"],
  ["Infrastructure", "Windows Server, Active Directory, Group Policy, Hyper-V and VMware"],
  ["Backup & Recovery", "Veeam, Backup Exec, restore operations, recovery planning and disaster recovery"],
  ["Networking & Security", "TCP/IP, VPN, VLANs, Cisco networking and Sophos firewalls"],
  ["Enterprise Systems", "SYSPRO, Teamcenter, CATIA, Jarrison and business-critical engineering systems"]
];

const experience = [
  {
    period: "2023 — Present",
    role: "IT Manager / Senior IT Administrator",
    company: "Paramount Aerospace Industries",
    points: [
      "Lead IT operations supporting approximately 110 users across business, engineering and manufacturing functions.",
      "Administer Microsoft 365 for approximately 120 users across Exchange Online, Teams, SharePoint Online, OneDrive, Entra ID, Intune and Defender.",
      "Manage 12 Windows Servers and 10 Hyper-V virtual machines while maintaining close to 99.9% service availability.",
      "Manage MFA, Conditional Access, backup and recovery, infrastructure lifecycle, vendors, budgets and business-critical systems."
    ]
  },
  {
    period: "2019 — 2023",
    role: "IT Engineer",
    company: "CHM Vuwani First Technology",
    points: [
      "Delivered Microsoft cloud and infrastructure services in an MSP environment supporting customer estates of approximately 20 to 600 users.",
      "Administered approximately 21 Windows Servers plus VMware and Hyper-V environments.",
      "Performed Microsoft 365 and Azure migrations, including the Limpopo Department of Health and Social Development."
    ]
  },
  {
    period: "2015 — 2019",
    role: "IT Technical Lead",
    company: "IT Masters",
    points: [
      "Administered Windows Server, Office 365, Hyper-V, VMware, firewalls and backup solutions across MSP customer environments.",
      "Provided technical leadership to a team of approximately 10 people while remaining hands-on with escalated technical work."
    ]
  },
  {
    period: "2014 — 2015",
    role: "Helpdesk Manager & Technical Lead",
    company: "Enabling Solutions",
    points: [
      "Managed IT support for approximately 450 Limpopo Department of Health users across 39 geographically distributed sites.",
      "Led ticket prioritisation, escalations, SLA delivery and infrastructure support across sites with typically 2 to 8 servers each."
    ]
  }
];

const caseStudies = [
  {
    tag: "MICROSOFT CLOUD",
    title: "Microsoft 365 & Azure Migration",
    result: "Large-scale public-sector cloud transition",
    body: "Led or played a key technical role in migrating the Limpopo Department of Health and Social Development to Microsoft 365 and Azure. The work covered cloud administration, identity, migration planning and operational support across a distributed organisation."
  },
  {
    tag: "DISASTER RECOVERY",
    title: "Department-Wide Recovery",
    result: "Business operations restored from enterprise backups",
    body: "Recovered an entire department after a major infrastructure failure. The incident required practical restore work, prioritisation and verification rather than simply assuming that successful backup jobs meant the environment was recoverable."
  },
  {
    tag: "MULTI-SITE IT",
    title: "39-Site Government Support",
    result: "Approximately 450 users across 39 locations",
    body: "Managed distributed support operations, escalations and infrastructure service delivery for the Limpopo Department of Health across sites with different local requirements and server footprints."
  },
  {
    tag: "AEROSPACE IT",
    title: "Business-Critical Infrastructure",
    result: "Close to 99.9% service availability",
    body: "Lead day-to-day IT operations in an aerospace and manufacturing environment, supporting Microsoft 365, Windows Server, Hyper-V, backup, networking and engineering systems where downtime directly affects operations."
  }
];

const projects = [
  ["Grovoris", "IT service-management platform project covering ticketing, CMDB, asset discovery, service workflows and knowledge capture."],
  ["Knowledge Capture", "Standalone project designed to turn resolved IT support tickets into reviewed, searchable knowledge articles."],
  ["Remote IT Engineer", "Infrastructure analysis and reporting project for Windows, Microsoft 365, backups, Active Directory and operational health."],
  ["Quality Operations Dashboard", "Read-only operational dashboard for calibration, NCR and approved-supplier visibility."],
  ["Windows Server File Search", "Local-first file discovery project designed to search multiple server drives and network locations without sending file data outside the network."]
];

const certs = [
  "Microsoft Certified Systems Engineer (MCSE)",
  "Microsoft Certified Systems Administrator (MCSA)",
  "VMware VCP6-DCV",
  "ITIL Foundation",
  "CompTIA Network+",
  "CompTIA A+",
  "Cyberoam CCNSP",
  "Certified Novell Administrator"
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top" aria-label="Willem Grobler home">WG</a>
        <nav>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#case-studies">Case Studies</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="eyebrow">SENIOR IT INFRASTRUCTURE · MICROSOFT CLOUD · IT OPERATIONS</div>
        <h1>Willem Grobler</h1>
        <h2>Senior Infrastructure Engineer <span>·</span> Microsoft 365 & Azure <span>·</span> IT Operations</h2>
        <p className="lead">
          I keep business-critical IT environments available, recoverable and secure. My background spans hands-on Windows and Microsoft cloud engineering, MSP service delivery and IT leadership across aerospace, manufacturing, government and healthcare.
        </p>
        <div className="availability">Based in South Africa · Open to fully remote international opportunities</div>
        <div className="actions">
          <a className="primary" href="#case-studies">See Business Impact</a>
          <a className="secondary" href="#experience">View Experience</a>
          <a className="secondary" href="mailto:willemgrobler72@gmail.com">Email Me</a>
        </div>
        <div className="metrics">
          {metrics.map(([n,l]) => <div className="metric" key={l}><strong>{n}</strong><span>{l}</span></div>)}
        </div>
      </section>

      <section id="about" className="section">
        <div className="sectionLabel">ABOUT</div>
        <div className="twoCol">
          <h3>Senior enough to lead. Technical enough to stay hands-on.</h3>
          <div>
            <p>I’m an IT infrastructure and operations professional with more than 20 years in enterprise, MSP, government, aerospace and manufacturing environments.</p>
            <p>My current role combines technical administration with operational ownership. I still troubleshoot difficult server, Microsoft 365, backup, network and application incidents, while also managing staff, budgets, vendors, licensing, security controls and infrastructure lifecycle decisions.</p>
            <p>I’m now targeting fully remote senior infrastructure, Microsoft cloud, MSP engineering and IT operations roles where practical judgement and ownership matter as much as the technology itself.</p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="sectionLabel">TECHNICAL EXPERTISE</div>
        <h3>Microsoft-first infrastructure, backed by real operations experience.</h3>
        <div className="grid3">
          {expertise.map(([title, body]) => <article className="card" key={title}><h4>{title}</h4><p>{body}</p></article>)}
        </div>
      </section>

      <section id="case-studies" className="section">
        <div className="sectionLabel">SELECTED CASE STUDIES</div>
        <h3>Evidence behind the resume.</h3>
        <p className="sectionIntro">A few examples of the environments, incidents and projects that shaped how I approach infrastructure and IT operations.</p>
        <div className="grid2">
          {caseStudies.map(c => (
            <article className="case" key={c.title}>
              <div className="tag">{c.tag}</div>
              <h4>{c.title}</h4>
              <strong className="result">{c.result}</strong>
              <p>{c.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="section alt">
        <div className="sectionLabel">EXPERIENCE</div>
        <h3>From technical support to infrastructure leadership.</h3>
        <div className="timeline">
          {experience.map(e => (
            <article className="job" key={e.company}>
              <div className="period">{e.period}</div>
              <div>
                <h4>{e.role}</h4>
                <div className="company">{e.company}</div>
                <ul>{e.points.map(p => <li key={p}>{p}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <div className="sectionLabel">PROJECTS</div>
        <h3>Using AI and modern tooling to solve practical IT problems.</h3>
        <p className="sectionIntro">These are working projects and product concepts built around problems I have encountered in IT operations, service management and reporting.</p>
        <div className="projectList">
          {projects.map(([name, body]) => <article className="project" key={name}><h4>{name}</h4><p>{body}</p></article>)}
        </div>
        <div className="projectCta"><a className="secondary" href="https://github.com/wgrobler72" target="_blank" rel="noreferrer">View GitHub Profile</a></div>
      </section>

      <section className="section alt">
        <div className="sectionLabel">CERTIFICATIONS</div>
        <h3>Technical foundations built over a long IT career.</h3>
        <div className="chips">{certs.map(c => <span key={c}>{c}</span>)}</div>
      </section>

      <section id="contact" className="section contact">
        <div className="sectionLabel">CONTACT</div>
        <h3>Looking for a senior remote infrastructure professional?</h3>
        <p>I’m open to fully remote international opportunities in senior infrastructure engineering, Microsoft 365/Azure, MSP engineering and IT operations.</p>
        <div className="actions">
          <a className="primary" href="mailto:willemgrobler72@gmail.com">Email Willem</a>
          <a className="secondary" href="https://www.linkedin.com/in/willem-grobler-b17746347" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="secondary" href="https://github.com/wgrobler72" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </section>

      <footer>
        <span>© 2026 Willem Grobler</span>
        <span>Johannesburg, South Africa · Available for remote international work</span>
      </footer>
    </main>
  );
}
