import React from 'react';
import { SITE } from '../data/site';
import { PROJECTS } from '../data/projects';
import { SKILL_COUNT, SKILL_GROUPS } from '../data/skills';
import { useTransition } from '../context/TransitionContext';
import '../styles/about-profile.css';

export default function AboutProfile() {
  const { navigateTo } = useTransition();
  const metrics = [
    { value: PROJECTS.length, label: 'Products built', detail: 'From idea to working product' },
    { value: SKILL_COUNT, label: 'Skills & concepts', detail: 'Applied across the portfolio' },
    { value: SKILL_GROUPS.length, label: 'Disciplines', detail: 'One connected way of thinking' },
    { value: PROJECTS.filter(project => project.live).length, label: 'Live deployments', detail: 'Explore the products in action' },
  ];

  return (
    <section className="about-profile" aria-labelledby="profile-heading">
      <div className="profile-shell">
        <div className="profile-section-label">
          <span><span className="profile-blue-dot" /> Behind the build</span>
          <span>Chennai, India ↗</span>
        </div>

        <div className="profile-intro-grid">
          <figure className="profile-portrait reveal">
            <img src={SITE.aboutPortrait} alt={`${SITE.shortName}, product and platform engineer`} loading="lazy" />
            <span className="profile-photo-index" aria-hidden="true">MH / 01</span>
            <figcaption>
              <span>{SITE.shortName}</span>
              <span>Product &amp; Platform Engineer</span>
            </figcaption>
          </figure>

          <div className="profile-introduction reveal">
            <h2 id="profile-heading">From the system<br />to the <em>screen.</em></h2>
            <p className="profile-lead">{SITE.aboutBody}</p>
            <p className="profile-support">{SITE.aboutBody2}</p>
            <a className="profile-work-link" href="/work" onClick={event => {
              event.preventDefault();
              navigateTo('/work', 'Work');
            }}>
              Explore the work <span aria-hidden="true">↗</span>
            </a>
            <div className="profile-domain-list" aria-label="Industries I build for">
              <span className="profile-domain-label">Across</span>
              {['Commerce', 'Mobility', 'Hospitality', 'Fitness', 'Enterprise'].map(domain => <span key={domain}>{domain}</span>)}
            </div>
          </div>
        </div>
      </div>

      <div className="profile-numbers">
        <div className="profile-shell">
          <div className="profile-numbers-heading">
            <h3>The work, in numbers.</h3>
            <span>Built across real products.</span>
          </div>
          <dl className="profile-metric-grid">
            {metrics.map((metric, index) => (
              <div className="profile-metric" key={metric.label} data-index={`0${index + 1}`}>
                <dt>{metric.label}</dt>
                <dd>{metric.value}</dd>
                <dd className="profile-metric-detail">{metric.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="profile-shell">
        <div className="profile-story">
          <div className="profile-story-heading">
            <span className="profile-eyebrow">What I care about</span>
            <h3>The details<br />make it <em>hold.</em></h3>
          </div>
          <div className="profile-story-copy">
            <p>{SITE.aboutBody3}</p>
            <p>{SITE.aboutBody4}</p>
            <span className="profile-signoff"><span className="profile-blue-dot" /> Always exploring.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
