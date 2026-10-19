import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useTransition } from '../context/TransitionContext';
import ProjectGallery from '../components/ProjectGallery';
import { PROJECTS, getProject, getProjectIndex } from '../data/projects';
import { SITE } from '../data/site';

export default function ProjectDetail() {
  const { id } = useParams();
  const { navigateTo } = useTransition();
  const project = getProject(id);

  // Scroll to top whenever the project changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return <Navigate to="/work" replace />;

  const idx = getProjectIndex(project.id);
  const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  const goWork = (e) => {
    e.preventDefault();
    navigateTo('/work', 'Work');
  };

  return (
    <div className="main-wrap" id="work">
      {/* ---------------------------------------------------------- Header */}
      <header className="section default-header pd-header">
        <div className="container medium">
          <div className="row once-in">
            <div className="flex-col">
              <h1>
                <span>{project.title}</span>
                <span className="pd-header-sub">{project.sub}</span>
              </h1>
            </div>
          </div>
          <div className="row pd-meta once-in">
            <div className="flex-col">
              <h5>Location</h5>
              <p>{project.location}</p>
            </div>
            <div className="flex-col">
              <h5>Services</h5>
              <p>{project.services}</p>
            </div>
            <div className="flex-col">
              <h5>Started</h5>
              <p>{project.year}</p>
            </div>
            <div className="flex-col">
              <h5>Stack</h5>
              <p>{project.tags}</p>
            </div>
          </div>
        </div>
      </header>

      {/* ----------------------------------------------------- Image gallery */}
      <section className="section pd-hero no-padding">
        <div className="container">
          {project.gallery && project.gallery.length > 0 ? (
            <ProjectGallery images={project.gallery} alt={project.title} />
          ) : (
            <div className={`pd-hero-frame reveal${project.preview ? ' is-wide' : ' is-square'}`}>
              <div
                className="overlay overlay-image"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundColor: project.bgColor,
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: project.preview ? 'cover' : 'contain'
                }}
              ></div>
            </div>
          )}
          {project.live && (
            <div className="pd-live-cta">
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="pd-live-btn">
                Visit live site <span className="work-live-arrow">↗</span>
              </a>
              <span className="pd-live-url">{project.liveLabel || project.live}</span>
            </div>
          )}
        </div>
      </section>

      {/* -------------------------------------------------------- Overview */}
      <section className="section pd-overview">
        <div className="container medium">
          <div className="row">
            <div className="flex-col">
              <div className="stripe"></div>
              <h5>Overview</h5>
            </div>
            <div className="flex-col">
              <h4 className="span-lines animate">
                <span className="span-line">
                  <span className="span-line-inner">{project.overview}</span>
                </span>
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- Challenge */}
      <section className="section pd-challenge">
        <div className="container medium">
          <div className="row">
            <div className="flex-col">
              <div className="stripe"></div>
              <h5>The challenge</h5>
            </div>
            <div className="flex-col">
              <p className="pd-lead">{project.challenge}</p>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- Capabilities */}
      {project.capabilities && project.capabilities.length > 0 && (
        <section className="section pd-caps">
          <div className="container">
            <div className="row">
              <div className="flex-col">
                <h2>
                  What it does<span className="animate-dot">.</span>
                  <span className="animate-dot">.</span>
                  <span className="animate-dot">.</span>
                </h2>
              </div>
            </div>
            <div className="row">
              {project.capabilities.map((cap) => (
                <div className="pd-cap reveal" key={cap.title}>
                  <h4>{cap.title}</h4>
                  <ul>
                    {cap.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---------------------------------------------------------- Metrics */}
      {project.metrics && project.metrics.length > 0 && (
        <section className="section pd-metrics">
          <div className="container">
            <div className="row">
              {project.metrics.map((m, i) => (
                <div className="flex-col reveal" key={m.label} style={{ transitionDelay: `${i * 0.08}s` }}>
                  <h3 className="pd-metric-value">{m.value}</h3>
                  <h5 className="pd-metric-label">{m.label}</h5>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* -------------------------------------------------------- Highlights */}
      <section className="section pd-highlights">
        <div className="container">
          <div className="row">
            <div className="flex-col">
              <h2>
                Highlights<span className="animate-dot">.</span>
                <span className="animate-dot">.</span>
                <span className="animate-dot">.</span>
              </h2>
            </div>
          </div>
          <div className="row pd-highlight-grid">
            {project.highlights.map((h, i) => (
              <div className="flex-col reveal" key={i}>
                <h5>{String(i + 1).padStart(2, '0')}</h5>
                <div className="stripe"></div>
                <p>{h}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ Stack */}
      <section className="section pd-stack">
        <div className="container medium">
          <div className="row">
            <div className="flex-col">
              <div className="stripe"></div>
              <h5>Built with</h5>
            </div>
            <div className="flex-col">
              <div className="credential-tags pd-stack-tags">
                {project.stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------- Prev / next nav */}
      <section className="section pd-pagenav">
        <div className="container">
          <div className="row">
            <div className="flex-col">
              <a
                href={`/work/${prev.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo(`/work/${prev.id}`, 'Work');
                }}
                className="pd-nav-link pd-nav-prev"
              >
                <h5>Previous</h5>
                <h4>{prev.title}</h4>
              </a>
            </div>
            <div className="flex-col pd-nav-right">
              <a
                href={`/work/${next.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo(`/work/${next.id}`, 'Work');
                }}
                className="pd-nav-link"
              >
                <h5>Next project</h5>
                <h4>{next.title}</h4>
              </a>
            </div>
          </div>
          <div className="row pd-back-row">
            <div className="flex-col">
              <div className="btn btn-round">
                <a
                  href="/work"
                  onClick={goWork}
                  className="btn-click magnetic"
                  data-strength="25"
                  data-strength-text="15"
                >
                  <div className="btn-fill"></div>
                  <span className="btn-text">
                    <span className="btn-text-inner">Back to all work</span>
                  </span>
                </a>
              </div>
            </div>
            <div className="flex-col pd-nav-contact">
              <p>
                Building something similar? <a href="/contact" onClick={(e) => { e.preventDefault(); navigateTo('/contact', 'Contact'); }}>Get in touch<span className="animate-dot">.</span></a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
