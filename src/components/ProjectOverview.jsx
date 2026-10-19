import React from 'react';
import { PROJECTS } from '../data/projects';

const headlines = {
  skyalle: 'One platform. A business of your own.',
  'xovo-pos': 'Every counter. Every room. One system.',
  portz: 'Extraordinary journeys, connected.',
  streetpulse: 'A new city, already familiar.',
  agentx: 'The right access. At the right time.',
  transporterz: 'One city. Three ways to keep it moving.',
  'fitness-marketplace': 'Better coaching, beyond the workout.',
};

export default function ProjectOverview({ project, index }) {
  const boundary = project.overview.indexOf('. ');
  const intro = boundary < 0 ? project.overview : project.overview.slice(0, boundary + 1);
  const detail = boundary < 0 ? '' : project.overview.slice(boundary + 2);

  return (
    <section className="section project-story" aria-labelledby={`story-${project.id}`} style={{ '--story-accent': project.accent }}>
      <div className="container">
        <div className="story-topline reveal">
          <span><span className="story-status" /> Project overview</span>
          <span>{String(index + 1).padStart(2, '0')} / {String(PROJECTS.length).padStart(2, '0')}</span>
        </div>
        <div className="story-editorial">
          <div className="story-heading reveal">
            <span className="story-eyebrow">{project.title} / {project.year}</span>
            <h2 id={`story-${project.id}`}>{headlines[project.id] || project.sub}</h2>
            <a className="story-explore" href="#project-capabilities">Explore the build <span aria-hidden="true">↘</span></a>
          </div>
          <div className="story-copy reveal">
            <p className="story-intro">{intro}</p>
            {detail && <p>{detail}</p>}
            <dl className="story-facts">
              <div><dt>Built for</dt><dd>{project.location}</dd></div>
              <div><dt>Focus</dt><dd>{project.services}</dd></div>
            </dl>
          </div>
        </div>
        <div className="story-challenge reveal">
          <div className="story-challenge-title">
            <span className="story-eyebrow">The challenge</span>
            <h3>Where the real<br />engineering begins.</h3>
            <svg className="story-orbit" viewBox="0 0 160 80" fill="none" aria-hidden="true">
              <ellipse cx="80" cy="40" rx="69" ry="28" stroke="currentColor" />
              <ellipse cx="80" cy="40" rx="69" ry="28" stroke="currentColor" transform="rotate(-25 80 40)" />
              <circle cx="80" cy="40" r="6" fill="currentColor" />
            </svg>
          </div>
          <p>{project.challenge}</p>
        </div>
      </div>
    </section>
  );
}
