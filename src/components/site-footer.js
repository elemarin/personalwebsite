import Link from "next/link";
import { ArrowUp, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { Flower } from "./graphics";

export default function SiteFooter() {
  return (
    <footer>
      <section id="contact" className="contact-section section-space" aria-labelledby="contact-title">
        <div className="shell">
          <p className="eyebrow section-kicker">Have an idea? Say hello.</p>
          <div className="contact-heading">
            <h2 id="contact-title" className="display section-title">Let&apos;s make<br />something<br /><span className="contact-underline">click.</span></h2>
            <Flower className="contact-flower" />
          </div>
          <div className="contact-bottom">
            <p>Let&apos;s talk full-stack engineering, applied AI, or an idea worth building.</p>
            <div className="contact-links">
              <a className="button button-ink" href="https://www.linkedin.com/in/estebanleandro/" target="_blank" rel="noopener noreferrer">
                <Linkedin aria-hidden="true" size={20} /> Let&apos;s connect
                <ArrowUpRight aria-hidden="true" size={20} />
                <span className="sr-only"> on LinkedIn (opens in a new tab)</span>
              </a>
              <a className="button button-outline" href="https://github.com/elemarin" target="_blank" rel="noopener noreferrer">
                <Github aria-hidden="true" size={20} /> GitHub
                <ArrowUpRight aria-hidden="true" size={20} />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="footer-bottom">
        <div className="shell footer-inner">
          <Link href="/" className="footer-name">Esteban Leandro Marin<span>Developer. Thinker. Maker.</span></Link>
          <p className="eyebrow">Built with care.<br />And a little extra color.</p>
          <a href="#top" className="back-top" aria-label="Back to top"><ArrowUp aria-hidden="true" size={22} /></a>
        </div>
      </div>
    </footer>
  );
}
