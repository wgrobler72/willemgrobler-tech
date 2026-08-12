const skillGroups = [
  ["Microsoft Cloud", "Microsoft 365, Azure, Exchange Online, Teams, SharePoint Online, OneDrive, Entra ID, Intune, Defender, MFA, Conditional Access"],
  ["Infrastructure", "Windows Server 2012/2016/2019/2022, Active Directory, Group Policy, Hyper-V, VMware, DNS, DHCP, TCP/IP, VPN, VLANs"],
  ["Backup & Recovery", "Veeam, Backup Exec, backup planning, restore operations, disaster recovery and business continuity"],
  ["Leadership & Delivery", "IT operations, MSP environments, incident escalation, SLA management, staff supervision, vendor management, budgets and procurement"]
];

export default function ResumePage() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="/" aria-label="Willem Grobler home">WG</a>
        <nav><a href="/">Home</a><a href="/#case-studies">Case Studies</a><a href="/#projects">Projects</a><a href="/#contact">Contact</a></nav>
      </header>

      <section className="resumeHero">
        <a className="breadcrumb" href="/">← Back to portfolio</a>
        <div className="eyebrow">RESUME</div>
        <h1>Senior Infrastructure & Microsoft Cloud</h1>
        <p className="lead">A recruiter-friendly overview of my infrastructure, Microsoft cloud, MSP and IT operations background.</p>
        <div className="actions">
          <a className="primary" href="/Willem-Grobler-Senior-Infrastructure-Resume.pdf" target="_blank" rel="noreferrer">Download PDF Resume</a>
          <a className="secondary" href="mailto:willemgrobler72@gmail.com">Contact Me</a>
        </div>
      </section>

      <section className="section resumeBody">
        <div className="resumeSummary">
          <div>
            <div className="sectionLabel">PROFILE</div>
            <h3>Hands-on infrastructure leadership.</h3>
          </div>
          <div>
            <p>Senior infrastructure and Microsoft systems professional with more than 20 years of hands-on experience delivering, administering and troubleshooting Windows Server, Microsoft 365, Azure, Active Directory, Hyper-V, VMware, networking, endpoint, security and backup technologies.</p>
            <p>Experienced across enterprise, MSP, government, healthcare, aerospace and manufacturing environments. Currently combines IT management responsibility with direct technical administration of Microsoft cloud and on-premises infrastructure.</p>
          </div>
        </div>

        <div className="resumeGrid">
          {skillGroups.map(([title, body]) => <article className="resumeSkill" key={title}><h4>{title}</h4><p>{body}</p></article>)}
        </div>

        <div className="resumeHighlights">
          <div className="sectionLabel">CAREER HIGHLIGHTS</div>
          <ul>
            <li>Lead IT operations supporting approximately 110 users and 120 Microsoft 365 accounts.</li>
            <li>Administer 12 Windows Servers and 10 Hyper-V virtual machines in a business-critical aerospace and manufacturing environment.</li>
            <li>Previously administered approximately 21 Windows Servers across MSP customer environments ranging from approximately 20 to 600 users.</li>
            <li>Led or played a key technical role in migrating the Limpopo Department of Health and Social Development to Microsoft 365 and Azure.</li>
            <li>Recovered an entire department from enterprise backups after a major infrastructure failure.</li>
            <li>Managed IT support for approximately 450 users across 39 sites.</li>
          </ul>
        </div>

        <div className="resumeActions">
          <a className="primary" href="/Willem-Grobler-Senior-Infrastructure-Resume.pdf" target="_blank" rel="noreferrer">Download Full PDF Resume</a>
          <a className="secondary" href="/#case-studies">View Case Studies</a>
        </div>
      </section>
    </main>
  );
}
