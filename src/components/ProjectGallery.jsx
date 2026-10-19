import React, { useState, useEffect, useCallback } from 'react';

/**
 * ProjectGallery — image carousel for the case-study page.
 *
 * Renders a static frame when there is only one image, so projects without a
 * multi-screen live site don't get dead prev/next controls.
 *
 * Images are sized with `object-fit: cover` inside a frame whose aspect ratio
 * matches the capture ratio, so nothing is ever cropped.
 */
export default function ProjectGallery({ images = [], alt = '' }) {
  const [index, setIndex] = useState(0);
  const count = images.length;

  const go = useCallback(
    (next) => setIndex(((next % count) + count) % count),
    [count]
  );

  // Reset when the project changes
  useEffect(() => {
    setIndex(0);
  }, [images]);

  // Arrow-key navigation while the gallery is on screen
  useEffect(() => {
    if (count < 2) return undefined;
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') go(index - 1);
      if (e.key === 'ArrowRight') go(index + 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [count, index, go]);

  if (!count) return null;

  const current = images[index];

  return (
    <div className="pd-gallery">
      <div className="pd-gallery-frame">
        <img
          className="pd-gallery-img"
          src={current.src}
          alt={current.caption || alt}
          key={current.src}
        />

        {count > 1 && (
          <>
            <button
              type="button"
              className="pd-gallery-nav pd-gallery-prev"
              onClick={() => go(index - 1)}
              aria-label="Previous image"
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              className="pd-gallery-nav pd-gallery-next"
              onClick={() => go(index + 1)}
              aria-label="Next image"
            >
              <span aria-hidden="true">→</span>
            </button>
            <div className="pd-gallery-count">
              {String(index + 1).padStart(2, '0')}
              <span className="pd-gallery-slash">/</span>
              {String(count).padStart(2, '0')}
            </div>
          </>
        )}
      </div>

      {current.caption && <p className="pd-gallery-caption">{current.caption}</p>}

      {count > 1 && (
        <div className="pd-gallery-dots" role="tablist" aria-label="Gallery images">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Image ${i + 1}: ${img.caption || ''}`}
              className={`pd-gallery-dot${i === index ? ' is-active' : ''}`}
              onClick={() => go(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}