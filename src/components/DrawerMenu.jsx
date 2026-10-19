import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTransition } from '../context/TransitionContext';
import { SITE } from '../data/site';

export default function DrawerMenu({ onClose, isOpen }) {
  const location = useLocation();
  const { navigateTo } = useTransition();

  useEffect(() => {
    if (!isOpen) return;
    const opener = document.activeElement;
    document.querySelector('#site-menu a')?.focus({ preventScroll: true });
    const handleKey = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
      } else if (event.key === 'Tab' && !event.ctrlKey && !event.metaKey && !event.altKey) {
        const targets = [...document.querySelectorAll('.btn-hamburger button, #site-menu a')];
        const index = targets.indexOf(document.activeElement);
        const next = (index + (event.shiftKey ? -1 : 1) + targets.length) % targets.length;
        event.preventDefault();
        targets[next]?.focus({ preventScroll: true });
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('keydown', handleKey);
      if (opener?.isConnected) opener.focus({ preventScroll: true });
    };
  }, [isOpen, onClose]);

  const handleNav = (path, label) => {
    onClose();
    navigateTo(path, label);
  };

  const isHome = location.pathname === '/' || location.pathname === '/index.html';
  const isWork = location.pathname.includes('work');
  const isAbout = location.pathname.includes('about');
  const isContact = location.pathname.includes('contact');

  return (
    <>
      <div className="overlay fixed-nav-back" onClick={onClose}></div>
      <div id="site-menu" className="fixed-nav theme-dark" role="dialog" aria-label="Site navigation" aria-modal={isOpen ? true : undefined} aria-hidden={!isOpen} inert={isOpen ? undefined : ''}>
        <div className="fixed-nav-rounded-div">
          <div className="rounded-div-wrap">
            <div className="rounded-div"></div>
          </div>
        </div>
        <div className="fixed-nav-inner">
          <div className="row nav-row">
            <h5>Navigation</h5>
            <div className="stripe"></div>
            <ul className="links-wrap">
              <li className={`btn btn-link ${isHome ? 'active' : ''}`}>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('/', 'Home');
                  }}
                  className="btn-click magnetic"
                >
                  <span className="btn-text">
                    <span className="btn-text-inner">Home</span>
                  </span>
                </a>
              </li>
              <li className={`btn btn-link ${isWork ? 'active' : ''}`}>
                <a
                  href="/work"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('/work', 'Work');
                  }}
                  className="btn-click magnetic"
                >
                  <span className="btn-text">
                    <span className="btn-text-inner">Work</span>
                  </span>
                </a>
              </li>
              <li className={`btn btn-link ${isAbout ? 'active' : ''}`}>
                <a
                  href="/about"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('/about', 'About');
                  }}
                  className="btn-click magnetic"
                >
                  <span className="btn-text">
                    <span className="btn-text-inner">About</span>
                  </span>
                </a>
              </li>
              <li className={`btn btn-link ${isContact ? 'active' : ''}`}>
                <a
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('/contact', 'Contact');
                  }}
                  className="btn-click magnetic"
                >
                  <span className="btn-text">
                    <span className="btn-text-inner">Contact</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="row social-row">
            <div className="stripe"></div>
            <div className="socials">
              <h5>Socials</h5>
              <ul>
                {SITE.socials.map((s) => (
                  <li className="btn btn-link btn-link-external" key={s.label}>
                    <a
                      href={s.href}
                      {...(s.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="btn-click magnetic"
                    >
                      <span className="btn-text">
                        <span className="btn-text-inner">{s.label}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
