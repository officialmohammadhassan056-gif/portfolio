// Anatomy: https://github.com/wheresryan22/anatomy (MIT, see vendor/anatomy/LICENSE).
// Run: node scripts/build-project-art.mjs --audit
// Output is standalone, static SVG: no browser-side drawing library or animation.
import { writeFileSync, mkdirSync } from 'node:fs';
import * as k from './vendor/anatomy/iso-kit.mjs';
import * as A from './vendor/anatomy/audit.mjs';

const assets = new URL('../public/assets/', import.meta.url);
const output = new URL('../output/project-art/', import.meta.url);
mkdirSync(output, { recursive: true });

// Each specification is a physical parts list, before projection or rendering.
const part = (parts, name, x, y, z, w, d, h, material = 'steel', r = 1) => {
  parts.push({ name, plan: { x, y, w, d, r }, z, h, material });
};

function transporterz() {
  const p = [];
  part(p, 'stand.base', -145, -95, 0, 290, 190, 10, 'base', 8);
  for (const x of [-128, 110]) for (const y of [-78, 60])
    part(p, 'stand.foot', x, y, -7, 18, 18, 7, 'rubber', 3);
  for (const x of [-112, 95]) for (const y of [-24, 16])
    part(p, 'conveyor.leg', x, y, 10, 8, 8, 30);
  part(p, 'conveyor.deck', -120, -28, 40, 240, 56, 6, 'frame', 3);
  for (let x = -117; x < 118; x += 14)
    part(p, 'conveyor.slat', x, -22, 46, 12, 44, 2, 'rubber', 1);
  for (const y of [-28, 24])
    part(p, 'conveyor.guard', -120, y, 46, 240, 4, 7, 'steel');
  for (const y of [-40, 32]) {
    part(p, 'scanner.foot', 5, y - 3, 10, 22, 14, 4, 'frame');
    part(p, 'scanner.post', 10, y, 14, 12, 8, 78, 'frame');
  }
  part(p, 'scanner.bridge', 10, -40, 92, 12, 80, 12, 'frame', 2);
  part(p, 'scanner.light', 11, -28, 90, 10, 56, 2, 'subject');
  const parcels = [[-92, -13, 28, 26, 20], [-35, -15, 30, 30, 26], [56, -12, 34, 24, 18]];
  parcels.forEach(([x, y, w, d, h], i) => {
    part(p, 'parcel.box', x, y, 48, w, d, h, i === 1 ? 'subject' : 'aluminium', 1.2);
    part(p, 'parcel.tape', x + w / 2 - 2, y, 48 + h, 4, d, .35, 'frame', .1);
    part(p, 'parcel.label', x + 3, y + 3, 48 + h, 7, 9, .3, 'paper', .2);
  });
  // Three receiving bins physically share the same dispatch bench.
  for (const x of [-118, -38, 42]) {
    part(p, 'bin.floor', x, 48, 10, 65, 33, 3, 'aluminium', 2);
    part(p, 'bin.back', x, 48, 13, 65, 3, 18, 'steel');
    part(p, 'bin.front', x, 78, 13, 65, 3, 12, 'steel');
    for (const side of [x, x + 62]) part(p, 'bin.side', side, 51, 13, 3, 27, 18, 'steel');
  }
  part(p, 'control.mount', -108, -75, 10, 40, 30, 4, 'frame');
  part(p, 'control.pedestal', -99, -68, 14, 22, 16, 35, 'steel');
  part(p, 'control.panel', -109, -76, 49, 42, 32, 5, 'frame', 3);
  part(p, 'control.display', -104, -72, 54, 31, 17, .8, 'screen');
  for (const x of [-103, -94, -85]) part(p, 'control.key', x, -51, 54, 5, 4, 1.4, 'subject');
  return { parts: p, title: 'Transporterz', subtitle: 'ONE DISPATCH. EVERY DELIVERY.', caption: 'Rides / commerce / parcels', background: '#e8e5df', filename: 'work-transporterz.svg', description: 'A detailed isometric dispatch sorting station: a conveyor, scanner arch, parcels, three receiving bins and an operator console.' };
}

function fitness() {
  const p = [];
  part(p, 'stand.base', -125, -100, 0, 250, 225, 10, 'base', 8);
  for (const x of [-110, 90]) for (const y of [-85, 90])
    part(p, 'stand.foot', x, y, -7, 20, 20, 7, 'rubber', 3);
  for (const x of [-96, 76]) {
    part(p, 'rack.shoe', x - 5, -80, 10, 30, 40, 5, 'frame');
    part(p, 'rack.post', x, -72, 15, 20, 20, 140, 'frame', 2);
    part(p, 'rack.cap', x, -72, 155, 20, 20, 3, 'aluminium');
    for (const z of [38, 59, 80, 101, 122, 143])
      part(p, 'rack.adjustment', x + 6, -52, z, 8, .6, 3, 'rubber', .8);
    part(p, 'rack.grip-mount', x + 4, -52, 106, 12, 8, 8, 'aluminium');
    part(p, 'rack.grip', x + 4, -44, 106, 12, 15, 8, 'rubber', 2);
  }
  part(p, 'rack.crossbar', -96, -72, 158, 192, 20, 14, 'frame', 2);
  part(p, 'rack.top-inlay', -70, -70, 172, 140, 16, .5, 'aluminium');
  part(p, 'stack.plinth', -70, -80, 10, 140, 40, 10, 'frame', 2);
  for (const x of [-63, 56]) part(p, 'stack.guide', x, -69, 20, 7, 16, 115, 'steel');
  for (let i = 0; i < 8; i++)
    part(p, 'stack.weight', -56, -69, 20 + i * 6, 112, 24, 6, i === 7 ? 'subject' : 'rubber', 1.4);
  part(p, 'stack.carriage', -56, -69, 68, 112, 24, 4, 'aluminium');
  part(p, 'stack.lifting-rail', -3, -61, 72, 6, 8, 86, 'steel');
  part(p, 'bench.rear-foot', -49, -7, 10, 98, 18, 5, 'frame', 2);
  part(p, 'bench.front-foot', -49, 79, 10, 98, 18, 5, 'frame', 2);
  for (const y of [-3, 83]) part(p, 'bench.leg', -12, y, 15, 24, 10, 22, 'steel');
  part(p, 'bench.spine', -17, -6, 37, 34, 104, 5, 'frame');
  part(p, 'bench.backing', -29, -12, 42, 58, 116, 3, 'aluminium', 3);
  part(p, 'bench.back-pad', -28, -11, 45, 56, 69, 10, 'rubber', 4);
  part(p, 'bench.seat-pad', -28, 62, 45, 56, 41, 10, 'rubber', 4);
  part(p, 'console.bracket', 96, -67, 104, 9, 12, 8, 'steel');
  part(p, 'console.case', 105, -78, 93, 8, 37, 38, 'frame', 2);
  part(p, 'console.screen', 113, -74, 100, .6, 29, 26, 'screen');
  // A wearable sits in a real charging dock on the base, not in mid-air.
  part(p, 'wearable.dock', 62, 53, 10, 38, 46, 5, 'frame', 3);
  part(p, 'wearable.strap-back', 73, 57, 15, 15, 13, 3, 'rubber', 2);
  part(p, 'wearable.case', 69, 70, 15, 23, 19, 5, 'aluminium', 4);
  part(p, 'wearable.face', 72, 73, 20, 17, 13, .5, 'screen', 2);
  part(p, 'wearable.strap-front', 73, 89, 15, 15, 6, 3, 'rubber', 1);
  return { parts: p, title: 'FitCore', subtitle: 'PRECISION IN EVERY SESSION.', caption: 'Coaching / strength / wearables', background: '#e2e6e9', filename: 'work-fitness.svg', description: 'A detailed isometric strength-training station with an adjustable rack, eight weight plates, a padded bench, a coaching console and a wearable dock.' };
}

const materials = `
 .iso{--anatomy-weight:.65px;--anatomy-hi:#555b61;--anatomy-mid:#747a80;--anatomy-lo:#91989d;--anatomy-faint:#b6bdc2;--anatomy-dot:#333b43;--anatomy-halo:#353a40;--anatomy-halo-opacity:.2}
 .base{--anatomy-paper:#adb2b6;--anatomy-top:#cdd1d3;--anatomy-shade-0:#777f85;--anatomy-shade-1:#8d959a;--anatomy-shade-2:#a0a8ad;--anatomy-shade-3:#b2b9bd}
 .frame{--anatomy-paper:#272e34;--anatomy-top:#525b64;--anatomy-shade-0:#1b2228;--anatomy-shade-1:#252e36;--anatomy-shade-2:#323d46;--anatomy-shade-3:#414d57;--anatomy-hi:#171e25;--anatomy-faint:#68717a}
 .steel{--anatomy-paper:#858f98;--anatomy-top:#ccd2d7;--anatomy-shade-0:#5d6974;--anatomy-shade-1:#788590;--anatomy-shade-2:#919da7;--anatomy-shade-3:#adb7bf}
 .aluminium{--anatomy-paper:#c5cbd0;--anatomy-top:#e8ecee;--anatomy-shade-0:#8d98a1;--anatomy-shade-1:#aab3ba;--anatomy-shade-2:#bdc5cb;--anatomy-shade-3:#d5dbe0}
 .rubber{--anatomy-paper:#252b30;--anatomy-top:#41484f;--anatomy-shade-0:#171d23;--anatomy-shade-1:#20272d;--anatomy-shade-2:#2b3239;--anatomy-shade-3:#333c44;--anatomy-hi:#141b22;--anatomy-faint:#606b74}
 .subject,.paper{--anatomy-paper:#e4e4df;--anatomy-top:#fffef9;--anatomy-shade-0:#b0b6b7;--anatomy-shade-1:#c4c9c8;--anatomy-shade-2:#d5d9d6;--anatomy-shade-3:#e8ebe6}
 .screen{--anatomy-paper:#13252d;--anatomy-top:#304b55;--anatomy-shade-0:#15232b;--anatomy-shade-1:#20363f;--anatomy-shade-2:#29444f;--anatomy-shade-3:#36545d;--anatomy-hi:#1a303a}
`;

function build(spec) {
  const extremes = spec.parts.flatMap(p => k.boxCorners(p.plan, p.z, p.z + p.h));
  const P = k.fitProjection(extremes, 850, 650, { pad: 32, azimuth: 38, elevation: 28 });
  const R = A.recorder(P);
  for (const p of spec.parts) {
    const { plan, z, h, material } = p;
    const top = z + h;
    let inner = '';
    if (plan.w >= 25 && plan.d >= 20) {
      inner += k.lineSvg(k.planOutline(k.insetPlan(plan, 2.5), top, P, 5), { tone: 'faint' });
      inner += k.dotsSvg(k.corners(plan, 4).map(([x, y]) => k.iso([x, y, top], P)), { size: .7, tone: 'hi' });
    }
    const svg = k.solidSvg(k.slabOf(plan, z, h, P, 6, Math.min(.7, h / 4)), { className: material, tone: 'hi', crease: 'faint', inner });
    R.put({ name: R.nameFor(p.name), at: [plan.x + plan.w / 2, plan.y + plan.d / 2, z + h / 2], svg, shapes: [R.solid(A.slab(plan, z, h, { name: p.name, owner: p.name, ground: p.name.startsWith('stand.') }, 6))] });
  }
  A.settle(R, P);
  R.items.sort((a, b) => a.key - b.key);
  A.auditOrExit(R, P);
  const scene = R.items.map(item => item.svg).join('');
  const shadow = `<path class="iso-halo" d="${k.haloOf(spec.parts[0].plan, -7, 10, P)}"/>`;
  const body = `<style>${materials}</style>
    <rect width="1000" height="1000" fill="${spec.background}"/>
    <rect x="28" y="28" width="944" height="944" rx="6" fill="none" stroke="#69727a" stroke-opacity=".22"/>
    <text x="64" y="99" font-family="Arial, sans-serif" font-size="48" font-weight="600" letter-spacing="-2" fill="#20272c">${spec.title}</text>
    <text x="65" y="137" font-family="monospace" font-size="13" letter-spacing="2" fill="#5d676e">${spec.subtitle}</text>
    <g transform="translate(75 212)">${shadow}${scene}</g>
    <path d="M64 893H936" stroke="#69727a" stroke-opacity=".3"/>
    <text x="64" y="933" font-family="Arial, sans-serif" font-size="19" fill="#47515a">${spec.caption}</text>
    <text x="935" y="933" text-anchor="end" font-family="monospace" font-size="12" letter-spacing="1.5" fill="#66727c">ENGINEERED TO CONNECT</text>`;
  const svg = k.figureSvg({ width: 1000, height: 1000, label: spec.description, standalone: 'light', body });
  writeFileSync(new URL(spec.filename, assets), svg);
  writeFileSync(new URL(spec.filename.replace('.svg', '-closeup.svg'), output), svg.replace('viewBox="0 0 1000 1000"', 'viewBox="350 350 250 250"'));
  console.log(`${spec.title}: ${spec.parts.length} solid parts, ${svg.length} bytes`);
  return `<section><img src="../../public/assets/${spec.filename}" alt="${spec.description}"/><p>${spec.description}</p></section>`;
}

const specs = [transporterz(), fitness()];
const panels = specs.map(build).join('');
writeFileSync(new URL('preview.html', output), `<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Project artwork preview</title><style>body{margin:0;background:#f7f7f5;font-family:Arial;color:#39424a}main{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:28px;padding:28px}img{width:100%;display:block}p{font-size:14px;line-height:1.6}@media(max-width:600px){main{grid-template-columns:1fr;padding:16px}}</style><main>${panels}</main></html>`);
writeFileSync(new URL('parts.json', output), JSON.stringify(specs.map(({ parts, title, description }) => ({ title, concept: description, parts })), null, 2));
writeFileSync(new URL('qa.html', output), `<!doctype html><html lang="en"><meta charset="utf-8"><title>SVG size and detail checks</title><style>body{font:14px Arial;background:#f7f7f5;color:#39424a;margin:24px}.row{display:flex;gap:24px;align-items:start;margin-bottom:28px}iframe{border:0;display:block}h2{font-size:18px;font-weight:500}</style><h2>390 px cards</h2><div class="row">${specs.map(s => `<iframe title="${s.title} at phone width" width="390" height="390" src="../../public/assets/${s.filename}"></iframe>`).join('')}</div><h2>Mechanism close-ups</h2><div class="row">${specs.map(s => `<iframe title="${s.title} close-up" width="500" height="500" src="${s.filename.replace('.svg', '-closeup.svg')}"></iframe>`).join('')}</div></html>`);

// Browser icons are exported from the About portrait by build-favicon.py.
