import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Active Directory Time Synchronisation Case Study",
  description: "A practical Windows domain troubleshooting case study covering Active Directory time hierarchy, NTP configuration and verification."
};

export default function TimeSyncCaseStudy() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="/">WG</a>
        <nav><a href="/">Home</a><a href="/resume/">Resume</a><a href="/#case-studies">Case Studies</a><a href="/#contact">Contact</a></nav>
      </header>

      <section className="caseHero">
        <a className="breadcrumb" href="/#case-studies">← Back to case studies</a>
        <div className="eyebrow">WINDOWS SERVER · ACTIVE DIRECTORY</div>
        <h1>Restoring Reliable Time Synchronisation in an AD Environment</h1>
        <p className="lead">A domain time-skew incident that required tracing the Windows Time hierarchy, correcting the authoritative source and verifying that domain members were synchronising correctly.</p>
        <div className="caseStats">
          <div><strong>Active Directory</strong><span>Environment</span></div>
          <div><strong>Windows Time</strong><span>Service investigated</span></div>
          <div><strong>Resolved</strong><span>Hierarchy verified</span></div>
        </div>
      </section>

      <section className="section caseBody">
        <div className="sectionLabel">THE PROBLEM</div>
        <p>Two domain controllers were approximately three minutes apart. In an Active Directory environment, that is not just a cosmetic clock problem. Reliable time is important to authentication and other domain services, so the source and hierarchy had to be verified rather than manually adjusting clocks.</p>

        <div className="caseColumns">
          <div>
            <div className="sectionLabel">APPROACH</div>
            <h3>Trace the source before changing the configuration.</h3>
            <ul>
              <li>Queried Windows Time status and source information with <code>w32tm</code>.</li>
              <li>Confirmed which server was acting as the upstream time source.</li>
              <li>Corrected the time hierarchy so the appropriate domain controller synchronised with an external NTP source.</li>
              <li>Forced resynchronisation and then checked source, stratum and last successful sync information.</li>
              <li>Verified that downstream domain systems were taking time from the domain hierarchy rather than arbitrary external sources.</li>
            </ul>
          </div>
          <div>
            <div className="sectionLabel">TOOLS & TECHNOLOGY</div>
            <div className="chips"><span>Windows Server</span><span>Active Directory</span><span>w32tm</span><span>NTP</span><span>PowerShell</span></div>
          </div>
        </div>

        <div className="callout">
          <strong>Operational lesson</strong>
          <p>A successful resync command does not prove that the architecture is correct. The important verification is where the machine is actually sourcing time from, and whether that source fits the intended AD time hierarchy.</p>
        </div>
      </section>
    </main>
  );
}
