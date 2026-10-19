# Anatomy SVG toolkit

Source: https://github.com/wheresryan22/anatomy

Revision: 1482e8469b0a9e0d8cc18ea2740a01423d29ae80

License: MIT (included in LICENSE).

The project artwork generator uses the original isometric geometry and audit modules at build time. The website loads only standalone SVG files; no toolkit code is bundled in the application.

Run `node scripts/build-project-art.mjs --audit` to regenerate both project illustrations and the photograph favicon. The two physical parts lists are in the generator and exported to `output/project-art/parts.json`. The user's original uploaded photo is retained in `scripts/source-assets/profile-reference.png` so favicon regeneration does not depend on temporary clipboard files.
