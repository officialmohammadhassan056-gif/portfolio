import React from 'react';
import { useTransition } from '../context/TransitionContext';
import { SITE } from '../data/site';
import { SKILL_GROUPS, SKILL_COUNT } from '../data/skills';
import AboutProfile from '../components/AboutProfile';

export default function About() {
  const { navigateTo } = useTransition();
  return (
    <div className="main-wrap" id="about">
      <header className="section default-header about-header">
        <div className="container medium">
          <div className="row">
            <div className="flex-col once-in">
              <h1><span>{SITE.aboutLine1}</span><span>{SITE.aboutLine2}</span></h1>
            </div>
          </div>
        </div>
      </header>

      <AboutProfile />

      <section className="section about-services">
        <div className="container">
          <div className="row">
            <div className="flex-col">
              <h2>I can help you with <span className="animate-dot">.</span><span className="animate-dot">.</span><span className="animate-dot">.</span></h2>
            </div>
          </div>
          <div className="row">
            <div className="flex-col">
              <h5>01</h5>
              <div className="stripe"></div>
              <h4>Multi-Tenant Platforms</h4>
              <p>Designing tenancy that holds. Vendor isolation resolved once and enforced everywhere, tier gating, per-tenant configuration and white-label storefronts across commerce, hospitality and mobility.</p>
            </div>
            <div className="flex-col">
              <h5>02</h5>
              <div className="stripe"></div>
              <h4>Payments &amp; Billing</h4>
              <p>Stripe Connect, idempotent webhook processing, multi-currency ledgers and split payouts — the money paths that have to be correct even when everything else is on fire.</p>
            </div>
            <div className="flex-col">
              <h5>03</h5>
              <div className="stripe"></div>
              <h4>Product Engineering</h4>
              <p>Taking a system from API and data layer through to the interface people actually touch — realtime surfaces, offline-first clients and role-separated mobile apps.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-awwwards">
        <div className="container medium">
          <div className="row">
            <div className="flex-col">
              <div className="about-disciplines">
                <h5>Disciplines</h5>
                <ul>
                  {SKILL_GROUPS.map((g, i) => (
                    <li key={g.id}>
                      <span className="about-disc-nr">{String(i + 1).padStart(2, '0')}</span>
                      <span className="about-disc-name">{g.title}</span>
                      <span className="about-disc-count">{g.items.length}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex-col">
              <h2>Background &amp;<br />Focus</h2>
              <p>I am a full-stack engineer based in {SITE.location}, building production platforms across commerce, mobility, hospitality and enterprise operations. Most of my work is multi-tenant by default, because the hard problems are almost never single-tenant.</p>
              <div className="about-credentials">
                <div className="credential-item">
                  <h5>Primary Focus</h5>
                  <h4>Backend &amp; Platform Architecture</h4>
                  <p>Data models, tenancy boundaries, payment flows and realtime systems that hold up under load.</p>
                </div>
                <div className="credential-item">
                  <h5>Also In The Toolkit</h5>
                  <h4>Product &amp; Interface Engineering</h4>
                  <p>React, Expo and Electron surfaces — design systems, offline-first clients and role-separated mobile apps.</p>
                </div>
                <div className="credential-item">
                  <h5>Everywhere Else</h5>
                  <p>
                    {SKILL_COUNT} skills across {SKILL_GROUPS.length} disciplines, drawn from the seven products — the full breakdown, with how many products evidence each one, is on the <a href="/" onClick={(e) => { e.preventDefault(); navigateTo('/', 'Home'); }}>home page</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ How I work */}
      <section className="section about-approach">
        <div className="container">
          <div className="row">
            <div className="flex-col">
              <h2>
                How I work<span className="animate-dot">.</span>
                <span className="animate-dot">.</span>
                <span className="animate-dot">.</span>
              </h2>
            </div>
          </div>
          <div className="row about-approach-grid">
            {SITE.approach.map((a, i) => (
              <div className="flex-col reveal" key={a.title} style={{ transitionDelay: `${i * 0.06}s` }}>
                <h5>{String(i + 1).padStart(2, '0')}</h5>
                <div className="stripe"></div>
                <h4>{a.title}</h4>
                <p>{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- Timeline */}
      <section className="section about-timeline">
        <div className="container">
          <div className="row">
            <div className="flex-col">
              <h2>
                Built, so far<span className="animate-dot">.</span>
                <span className="animate-dot">.</span>
                <span className="animate-dot">.</span>
              </h2>
            </div>
          </div>
          <div className="row about-timeline-list">
            {SITE.timeline.map((t, i) => (
              <div className="flex-col about-timeline-item reveal" key={t.title} style={{ transitionDelay: `${i * 0.05}s` }}>
                <div className="flex-col about-timeline-period">
                  <h5>{t.period}</h5>
                </div>
                <div className="flex-col about-timeline-body">
                  <h4>{t.title}</h4>
                  <p>{t.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
