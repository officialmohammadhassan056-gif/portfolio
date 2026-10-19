import React from 'react';
import { SKILL_GROUPS, SKILL_COUNT } from '../data/skills';

/**
 * Skills — a cross-project capability breakdown on the Home page.
 *
 * Each discipline lists skills and their manually maintained project counts.
 */
export default function Skills() {
  return (
    <section className="section home-skills" id="skills">
      <div className="container">
        <div className="row">
          <div className="flex-col">
            <h2>
              Skills &amp; concepts<span className="animate-dot">.</span>
              <span className="animate-dot">.</span>
              <span className="animate-dot">.</span>
            </h2>
          </div>
          <div className="flex-col skills-intro-col">
            <p>
              Everything below is exercised somewhere across the seven products —
              not a keyword list, but the stack and the thinking behind it.
              Each skill carries how many of those seven it appears in.
            </p>
            <h5 className="skills-total">{SKILL_COUNT} skills across {SKILL_GROUPS.length} disciplines</h5>
          </div>
        </div>

        <div className="row skills-groups">
          {SKILL_GROUPS.map((group) => (
            <div className="flex-col skills-group reveal" key={group.id}>
              <h5>{group.title}</h5>
              <p className="skills-blurb">{group.blurb}</p>
              <ul className="skills-list">
                {group.items.map((item, index) => (
                  <li key={item.name} style={{ '--skill-delay': `${index * 30}ms` }}>
                    <span className="skills-name">{item.name}</span>
                    <span className="skills-note">{item.note}</span>
                    <span className="skills-used">{item.usedIn}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
