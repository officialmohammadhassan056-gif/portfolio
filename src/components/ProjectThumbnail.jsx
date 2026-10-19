import React, { useState } from 'react';

export default function ProjectThumbnail({ project }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`tile-image project-thumbnail${project.preview ? '' : ' is-square'}`} style={{ backgroundColor: project.bgColor }}>
      <img
        src={failed ? project.svg : (project.preview || project.image)}
        alt={`${project.title} — ${project.services}`}
        width={project.preview ? 1280 : 1000}
        height={project.preview ? 659 : 1000}
        decoding="async"
        onError={() => { if (!failed) setFailed(true); }}
      />
    </div>
  );
}
