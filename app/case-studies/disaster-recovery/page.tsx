export default function DisasterRecoveryCaseStudy() {
  return (
    <main>
      <header className="nav"><a className="brand" href="/">WG</a><nav><a href="/">Home</a><a href="/#case-studies">Case Studies</a><a href="/Willem-Grobler-Senior-Infrastructure-Resume.pdf" target="_blank">Resume</a></nav></header>
      <section className="caseHero">
        <a className="breadcrumb" href="/#case-studies">← Back to case studies</a>
        <div className="eyebrow">DISASTER RECOVERY · BUSINESS CONTINUITY</div>
        <h1>Department-Wide Recovery</h1>
        <p className="lead">Recovering an entire department from enterprise backups after a major infrastructure failure.</p>
        <div className="caseStats"><div><strong>Full recovery</strong><span>Department restored</span></div><div><strong>Backups</strong><span>Enterprise recovery source</span></div><div><strong>Operations</strong><span>Business services restored</span></div></div>
      </section>
      <section className="section caseBody">
        <div className="sectionLabel">THE INCIDENT</div>
        <h3>A backup strategy only matters when you can actually restore the business.</h3>
        <p>One of the most significant incidents in my career involved recovering an entire department following a major infrastructure failure. The priority was not simply to bring technology back online. It was to restore usable business services in the right sequence and verify that the recovered environment was operational.</p>
        <p>The experience reinforced a principle I still use today: a successful backup job is not the same thing as a proven recovery capability.</p>

        <div className="caseColumns">
          <div><div className="sectionLabel">RECOVERY APPROACH</div><ul><li>Assessed the failure and identified the systems required for recovery.</li><li>Prioritised restoration based on operational dependency and business impact.</li><li>Recovered systems from enterprise backups.</li><li>Verified restored services rather than relying only on backup-job status.</li><li>Worked through issues until the department could resume operations.</li><li>Used the incident to strengthen the focus on restore readiness and disaster-recovery planning.</li></ul></div>
          <div><div className="sectionLabel">RELEVANT EXPERIENCE</div><div className="chips"><span>Veeam</span><span>Backup Exec</span><span>Windows Server</span><span>Disaster Recovery</span><span>Business Continuity</span><span>Incident Management</span></div></div>
        </div>

        <div className="callout"><strong>What this demonstrates</strong><p>I treat recovery as an operational capability, not a checkbox. My focus is on restoreability, prioritisation, verification and getting the business working again.</p></div>
        <div className="actions"><a className="primary" href="/Willem-Grobler-Senior-Infrastructure-Resume.pdf" target="_blank">Download Resume</a><a className="secondary" href="mailto:willemgrobler72@gmail.com">Contact Me</a></div>
      </section>
    </main>
  );
}
