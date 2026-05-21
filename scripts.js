/* ═══════════════════════════════════════════════
   Dating App Safety · Chart Logic · 44 Women
═══════════════════════════════════════════════ */

const ALL_STRAT = 'She avoids sharing personal info, checks socials and researches her match, moves conversations to other platforms cautiously, and trusts her intuition';
const ALL_PREC  = 'She shares her location with friends/family, meets in crowded areas, and takes her own transport';

const women = [
  { id:  1, concern: 5,
    apps: 'She no longer uses dating apps',
    stratText: 'She has never used a dating app',
    precautions: 'She shares her location with friends/family',
    stillUses: false, whyText: '',
    suspicious: false, highSafety: true,  highImportance: true,  didntMeet: false, traumatic: false },

  { id:  2, concern: 4,
    apps: 'She no longer uses dating apps',
    stratText: ALL_STRAT,
    precautions: ALL_PREC,
    stillUses: false, whyText: '',
    suspicious: true,  highSafety: true,  highImportance: true,  didntMeet: true,  traumatic: true  },

  { id:  3, concern: 5,
    apps: 'She uses Tinder and Hinge',
    stratText: 'She avoids sharing personal info such as her address and workplace',
    precautions: 'She meets in crowded areas',
    stillUses: true, whyText: "She'd rather meet people in person but continues to use apps",
    suspicious: true,  highSafety: true,  highImportance: true,  didntMeet: true,  traumatic: true  },

  { id:  4, concern: 5,
    apps: 'She uses Hinge',
    stratText: 'She avoids sharing personal info, checks socials, moves conversations cautiously, trusts her intuition, and checks for mutual friends',
    precautions: 'She shares her location, meets in crowded areas, takes her own transport, and only meets in places she knows well',
    stillUses: true, whyText: "She doesn't go out much; it started as a lighthearted joke and stuck",
    suspicious: true,  highSafety: true,  highImportance: true,  didntMeet: true,  traumatic: false },

  { id:  5, concern: 3,
    apps: 'She used Hinge and no longer uses dating apps',
    stratText: ALL_STRAT,
    precautions: ALL_PREC,
    stillUses: false, whyText: '',
    suspicious: false, highSafety: false, highImportance: true,  didntMeet: true,  traumatic: false },

  { id:  6, concern: 3,
    apps: 'She no longer uses dating apps',
    stratText: 'She checks socials and researches her match online',
    precautions: 'She meets in crowded areas',
    stillUses: false, whyText: '',
    suspicious: false, highSafety: false, highImportance: true,  didntMeet: false, traumatic: false },

  { id:  7, concern: 4,
    apps: 'She uses Bumble',
    stratText: 'She avoids sharing personal info such as her address and workplace',
    precautions: 'She shares her location with friends/family',
    stillUses: true, whyText: 'She uses it as another platform alongside meeting people in person',
    suspicious: false, highSafety: true,  highImportance: true,  didntMeet: true,  traumatic: false },

  { id:  8, concern: 4,
    apps: 'She used Tinder and Hinge and no longer uses dating apps',
    stratText: 'She avoids sharing personal info such as her address and workplace',
    precautions: 'She shares her location with friends/family',
    stillUses: false, whyText: '',
    suspicious: true,  highSafety: true,  highImportance: true,  didntMeet: true,  traumatic: false },

  { id:  9, concern: 3,
    apps: 'She no longer uses dating apps',
    stratText: 'She avoids sharing personal info such as her address and workplace',
    precautions: 'She shares her location with friends/family',
    stillUses: false, whyText: '',
    suspicious: true,  highSafety: false, highImportance: false, didntMeet: true,  traumatic: false },

  { id: 10, concern: 3,
    apps: 'She no longer uses dating apps',
    stratText: 'She checks socials and researches her match online',
    precautions: 'She takes her own transport',
    stillUses: false, whyText: '',
    suspicious: true,  highSafety: false, highImportance: true,  didntMeet: true,  traumatic: false },

  { id: 11, concern: 4,
    apps: 'She uses Tinder and Hinge',
    stratText: 'She avoids sharing personal info such as her address and workplace',
    precautions: 'She shares her location with friends/family',
    stillUses: true, whyText: "She doesn't meet people organically",
    suspicious: false, highSafety: true,  highImportance: true,  didntMeet: true,  traumatic: false },

  { id: 12, concern: 2,
    apps: 'She uses Tinder',
    stratText: 'She moves conversations to other platforms cautiously',
    precautions: 'She meets in crowded areas',
    stillUses: true, whyText: 'She believes in finding love online',
    suspicious: true,  highSafety: false, highImportance: true,  didntMeet: true,  traumatic: false },

  { id: 13, concern: 5,
    apps: 'She no longer uses dating apps',
    stratText: 'She checks socials and researches her match online',
    precautions: 'She shares her location with friends/family',
    stillUses: false, whyText: '',
    suspicious: true,  highSafety: true,  highImportance: true,  didntMeet: true,  traumatic: false },

  { id: 14, concern: 3,
    apps: 'She used Hinge and no longer uses dating apps',
    stratText: "She trusts her intuition and doesn't reply if something feels off",
    precautions: 'She shares her location with friends/family',
    stillUses: false, whyText: '',
    suspicious: true,  highSafety: false, highImportance: true,  didntMeet: false, traumatic: true  },

  { id: 15, concern: 2,
    apps: 'She no longer uses dating apps',
    stratText: "She trusts her intuition and doesn't reply if something feels off",
    precautions: 'She meets in crowded areas',
    stillUses: false, whyText: '',
    suspicious: true,  highSafety: false, highImportance: true,  didntMeet: true,  traumatic: false },

  { id: 16, concern: 4,
    apps: 'She uses Tinder',
    stratText: 'She avoids sharing personal info such as her address and workplace',
    precautions: 'She meets in crowded areas',
    stillUses: true, whyText: "Time and cost constraints; it helps her find people with similar intentions",
    suspicious: true,  highSafety: true,  highImportance: true,  didntMeet: true,  traumatic: false },

  { id: 17, concern: 3,
    apps: 'She has never used a dating app',
    stratText: 'She has never used a dating app',
    precautions: 'She shares her location with friends/family',
    stillUses: false, whyText: '',
    suspicious: false, highSafety: false, highImportance: true,  didntMeet: true,  traumatic: false },

  { id: 18, concern: 5,
    apps: 'She uses Tinder',
    stratText: ALL_STRAT,
    precautions: ALL_PREC,
    stillUses: true, whyText: 'She felt meeting a partner in real life was unlikely; apps broaden the dating pool',
    suspicious: true,  highSafety: true,  highImportance: true,  didntMeet: true,  traumatic: false },

  { id: 19, concern: 2,
    apps: 'She no longer uses dating apps',
    stratText: 'She avoids sharing personal info such as her address and workplace',
    precautions: 'She has not met up with anyone in person',
    stillUses: false, whyText: '',
    suspicious: true,  highSafety: false, highImportance: true,  didntMeet: true,  traumatic: false },

  { id: 20, concern: 5,
    apps: 'She used Tinder, Bumble and Hinge and no longer uses dating apps',
    stratText: 'She checks socials and researches her match online',
    precautions: 'She meets in crowded areas',
    stillUses: false, whyText: '',
    suspicious: true,  highSafety: true,  highImportance: true,  didntMeet: true,  traumatic: false },

  { id: 21, concern: 2,
    apps: 'She no longer uses dating apps',
    stratText: ALL_STRAT,
    precautions: 'She shares her location with friends/family and avoids excessive alcohol',
    stillUses: false, whyText: '',
    suspicious: true,  highSafety: false, highImportance: true,  didntMeet: true,  traumatic: false },

  { id: 22, concern: 4,
    apps: 'She no longer uses dating apps (previously used Hinge)',
    stratText: 'She avoids sharing personal info such as her address and workplace',
    precautions: 'She meets in crowded areas',
    stillUses: false, whyText: '',
    suspicious: true,  highSafety: true,  highImportance: true,  didntMeet: true,  traumatic: false },

  { id: 23, concern: 3,
    apps: 'She uses Hinge',
    stratText: 'She avoids sharing personal info such as her address and workplace',
    precautions: 'She takes her own transport',
    stillUses: true, whyText: "She's introverted and uses it alongside attending events",
    suspicious: true,  highSafety: false, highImportance: true,  didntMeet: true,  traumatic: false },

  { id: 24, concern: 3,
    apps: 'She uses Tinder and Badoo',
    stratText: 'She avoids sharing personal info such as her address and workplace',
    precautions: 'She meets in crowded areas',
    stillUses: true, whyText: 'She started using them out of curiosity',
    suspicious: false, highSafety: false, highImportance: true,  didntMeet: true,  traumatic: false },

  { id: 25, concern: 5,
    apps: 'She uses Tinder',
    stratText: 'She checks socials and researches her match online',
    precautions: 'She meets in crowded areas',
    stillUses: true, whyText: 'Apps offer more options and let her meet people outside her usual circle',
    suspicious: true,  highSafety: true,  highImportance: true,  didntMeet: true,  traumatic: true  },

  { id: 26, concern: 5,
    apps: 'She no longer uses dating apps',
    stratText: 'She avoids sharing personal info such as her address and workplace',
    precautions: 'She shares her location with friends/family',
    stillUses: false, whyText: '',
    suspicious: true,  highSafety: true,  highImportance: true,  didntMeet: true,  traumatic: false },

  { id: 27, concern: 3,
    apps: 'She used Tinder and no longer uses dating apps',
    stratText: 'She moves conversations to other platforms cautiously',
    precautions: 'She meets in crowded areas',
    stillUses: false, whyText: '',
    suspicious: true,  highSafety: false, highImportance: true,  didntMeet: true,  traumatic: false },

  { id: 28, concern: 3,
    apps: 'She no longer uses dating apps',
    stratText: 'She avoids sharing personal info such as her address and workplace',
    precautions: 'She shares her location with friends/family',
    stillUses: false, whyText: '',
    suspicious: true,  highSafety: false, highImportance: true,  didntMeet: true,  traumatic: false },

  { id: 29, concern: 4,
    apps: 'She uses Hinge',
    stratText: 'She moves conversations to other platforms cautiously',
    precautions: 'She meets in crowded areas',
    stillUses: true, whyText: 'Boredom',
    suspicious: true,  highSafety: true,  highImportance: true,  didntMeet: true,  traumatic: false },

  { id: 30, concern: 3,
    apps: 'She no longer uses dating apps',
    stratText: 'She avoids sharing personal info such as her address and workplace',
    precautions: 'She meets in crowded areas',
    stillUses: false, whyText: '',
    suspicious: true,  highSafety: false, highImportance: true,  didntMeet: true,  traumatic: true  },

  { id: 31, concern: 4,
    apps: 'She uses Tinder, Bumble and OkCupid',
    stratText: 'She avoids sharing personal info such as her address and workplace',
    precautions: 'She meets in crowded areas',
    stillUses: true, whyText: 'She wants to try all possible options for finding love',
    suspicious: true,  highSafety: true,  highImportance: true,  didntMeet: true,  traumatic: false },

  { id: 32, concern: 3,
    apps: 'She uses Tinder',
    stratText: 'She only speaks to verified accounts',
    precautions: 'She meets in crowded areas',
    stillUses: true, whyText: 'Convenience and access to a larger pool of potential matches',
    suspicious: true,  highSafety: false, highImportance: true,  didntMeet: true,  traumatic: false },

  { id: 33, concern: 4,
    apps: 'She uses Tinder and Bumble',
    stratText: 'She avoids sharing personal info such as her address and workplace',
    precautions: 'She takes her own transport, meets in crowded areas, and shares her location with friends/family',
    stillUses: true, whyText: "She values getting to know someone's thinking before meeting, with the option to disengage safely",
    suspicious: true,  highSafety: true,  highImportance: true,  didntMeet: true,  traumatic: true  },

  { id: 34, concern: 4,
    apps: 'She uses Tinder',
    stratText: 'She avoids sharing personal info such as her address and workplace',
    precautions: 'She meets in crowded areas',
    stillUses: true, whyText: 'She finds it easy and convenient',
    suspicious: true,  highSafety: true,  highImportance: true,  didntMeet: true,  traumatic: false },

  { id: 35, concern: 3,
    apps: 'She no longer uses dating apps',
    stratText: 'She checks socials and researches her match online',
    precautions: 'She takes her own transport',
    stillUses: false, whyText: '',
    suspicious: true,  highSafety: false, highImportance: true,  didntMeet: false, traumatic: false },

  { id: 36, concern: 4,
    apps: 'She no longer uses dating apps',
    stratText: 'She avoids sharing personal info such as her address and workplace',
    precautions: 'She shares her location with friends/family',
    stillUses: false, whyText: '',
    suspicious: true,  highSafety: true,  highImportance: true,  didntMeet: true,  traumatic: true  },

  { id: 37, concern: 4,
    apps: 'She no longer uses dating apps',
    stratText: 'She checks socials, moves conversations to other platforms cautiously, trusts her intuition, and avoids sharing personal info',
    precautions: 'She takes her own transport, meets in crowded areas, and shares her location with friends/family',
    stillUses: false, whyText: '',
    suspicious: true,  highSafety: true,  highImportance: true,  didntMeet: true,  traumatic: false },

  { id: 38, concern: 4,
    apps: 'She uses Tinder',
    stratText: 'She checks socials, trusts her intuition, and avoids sharing personal info',
    precautions: 'She takes her own transport, meets in crowded areas, and shares her location with friends/family',
    stillUses: true, whyText: 'Intentions are clearer online from the start',
    suspicious: true,  highSafety: true,  highImportance: true,  didntMeet: true,  traumatic: false },

  { id: 39, concern: 4,
    apps: 'She no longer uses dating apps',
    stratText: 'She avoids sharing personal info such as her address and workplace',
    precautions: 'She takes her own transport, avoids excessive alcohol use, meets in crowded areas, and shares her location with friends/family',
    stillUses: false, whyText: '',
    suspicious: true,  highSafety: true,  highImportance: true,  didntMeet: true,  traumatic: false },

  { id: 40, concern: 4,
    apps: 'She uses Bumble',
    stratText: 'She checks socials and moves conversations to other platforms cautiously',
    precautions: 'She meets in crowded areas',
    stillUses: true, whyText: 'She prefers getting to know someone before investing time in meeting',
    suspicious: true,  highSafety: true,  highImportance: true,  didntMeet: true,  traumatic: false },

  { id: 41, concern: 5,
    apps: 'She uses Tinder',
    stratText: 'She checks socials and researches her match online',
    precautions: 'She meets in crowded areas',
    stillUses: true, whyText: 'Apps help her meet people she would not normally cross paths with',
    suspicious: true,  highSafety: true,  highImportance: false, didntMeet: true,  traumatic: false },

  { id: 42, concern: 5,
    apps: 'She used Hinge and no longer uses dating apps',
    stratText: 'She checks socials, moves conversations cautiously, and trusts her intuition',
    precautions: 'She takes her own transport, avoids alcohol, meets in crowded areas, and shares her location with friends/family',
    stillUses: false, whyText: '',
    suspicious: true,  highSafety: true,  highImportance: true,  didntMeet: true,  traumatic: true  },

  { id: 43, concern: 5,
    apps: 'She uses Tinder',
    stratText: 'She checks socials, trusts her intuition, and avoids sharing personal info',
    precautions: 'She takes her own transport and meets in crowded areas',
    stillUses: true, whyText: 'Less pressure to get to know each other before meeting in person',
    suspicious: false, highSafety: true,  highImportance: true,  didntMeet: true,  traumatic: false },

  { id: 44, concern: 5,
    apps: 'She used Tinder and no longer uses dating apps',
    stratText: 'She checks socials, moves conversations cautiously, trusts her intuition, and avoids sharing personal info',
    precautions: 'She meets in crowded areas and shares her location with friends/family',
    stillUses: false, whyText: '',
    suspicious: true,  highSafety: true,  highImportance: true,  didntMeet: true,  traumatic: false },
];

women.forEach(w => { w.usesStrategies = true; });


// ─────────────────────────────────────────────
// CIRCLE GEOMETRY
// ─────────────────────────────────────────────

const ECX = 400, ECY = 400, ERX = 280, ERY = 280;
const OX  = ECX, OY = ECY + ERY;

function arcPt(θDeg, R) {
  const r = θDeg * Math.PI / 180;
  return { x: ECX + R * Math.cos(r), y: ECY - R * Math.sin(r) };
}
const ovalPt = θ => arcPt(θ, ERX);

function outDir(x, y) {
  const dx = x - ECX, dy = y - ECY, l = Math.hypot(dx, dy);
  return { x: dx / l, y: dy / l };
}


// ─────────────────────────────────────────────
// CATEGORIES
// ─────────────────────────────────────────────

const CATS = [
  { key: 'highImportance', label: 'Prioritised Safety Before Meeting In Person', pct: '95%',  color: '#260F26', startAngle: 210, endAngle: 165 },
  { key: 'highSafety',     label: 'Felt Unsafe Using Dating Apps',               pct: '61%',  color: '#3A173A', startAngle: 157, endAngle: 134 },
  { key: 'suspicious',     label: 'Experienced Suspicious Behaviour Online',     pct: '82%',  color: '#582358', startAngle: 126, endAngle:  90 },
  { key: 'usesStrategies', label: 'Using Safety Strategies',                     pct: '100%', color: '#752F75', startAngle:  82, endAngle:  36 },
  { key: 'didntMeet',      label: 'Avoided Meeting Due to Safety Concerns',      pct: '91%',  color: '#984091', startAngle:  28, endAngle: -13 },
  { key: 'traumatic',      label: 'Traumatic Experience',                        pct: '18%',  color: '#BA50AC', startAngle: -21, endAngle: -29 },
];

const LABEL_R = ERX + 25, PCT_R = ERX + 42, ARC_PAD = 15;

CATS.forEach(cat => {
  cat.members = women.filter(w => w[cat.key]);
  cat.count   = cat.members.length;
  cat.members.sort((a, b) => a.id - b.id);
  const θMid = (cat.startAngle + cat.endAngle) / 2;
  cat.members.forEach((w, j) => {
    const θ  = cat.count === 1 ? θMid : cat.startAngle + j * (cat.endAngle - cat.startAngle) / (cat.count - 1);
    const pt = ovalPt(θ);
    w[`lx_${cat.key}`] = pt.x;
    w[`ly_${cat.key}`] = pt.y;
  });
});

const BSPREAD = 1.85;
women.forEach((w, i) => {
  w.bx     = OX - (women.length - 1) * BSPREAD / 2 + i * BSPREAD;
  const dx = w.bx - ECX, t = 1 - (dx / ERX) ** 2;
  w.by     = t >= 0 ? ECY + ERY * Math.sqrt(t) : OY;
});


// ─────────────────────────────────────────────
// SVG
// ─────────────────────────────────────────────

const svg = document.getElementById('fan-svg');
const NS  = 'http://www.w3.org/2000/svg';

function mk(tag, a = {}) {
  const el = document.createElementNS(NS, tag);
  for (const [k, v] of Object.entries(a)) el.setAttribute(k, String(v));
  return el;
}
function mkTxt(s, a = {}) { const t = mk('text', a); t.textContent = s; return t; }

svg.appendChild(mk('ellipse', {
  cx: ECX, cy: ECY, rx: ERX, ry: ERY,
  fill: 'none', stroke: '#BA50AC', 'stroke-opacity': '0.25', 'stroke-width': '0.9',
}));

const groups = {};
women.forEach(w => {
  const g = mk('g', { 'data-id': w.id });
  CATS.forEach(cat => {
    if (!w[cat.key]) return;
    const lx = w[`lx_${cat.key}`], ly = w[`ly_${cat.key}`];
    const od = outDir(lx, ly);
    g.appendChild(mk('path', {
      d: `M${w.bx.toFixed(2)},${w.by.toFixed(2)} C${w.bx.toFixed(2)},${(w.by - 245).toFixed(2)} ${(lx - od.x * 200).toFixed(2)},${(ly - od.y * 200).toFixed(2)} ${lx.toFixed(2)},${ly.toFixed(2)}`,
      stroke: cat.color, 'stroke-width': '1.0', fill: 'none', opacity: '0.55', class: 'strand',
    }));
  });
  g.appendChild(mk('rect', { x: (w.bx - 7).toFixed(2), y: (w.by - 10).toFixed(2), width: 14, height: 25, fill: 'transparent', cursor: 'pointer' }));
  g.appendChild(mk('line', { x1: w.bx.toFixed(2), y1: w.by.toFixed(2), x2: w.bx.toFixed(2), y2: (w.by - 5).toFixed(2), stroke: '#260F26', 'stroke-width': '0.9', opacity: '0.4' }));

  g.addEventListener('mouseenter', () => { if (!selected) { highlight(w.id); setLabel(w.id); openPanel(w); } });
  g.addEventListener('mouseleave', () => { if (!selected) { reset(); resetLabel(); showDefault(); } });
  g.addEventListener('click', () => {
    if (selected === w.id) { selected = null; reset(); resetLabel(); showDefault(); syncNav(null); }
    else { selected = w.id; highlight(w.id); setLabel(w.id); openPanel(w); syncNav(w.id); }
  });

  svg.appendChild(g);
  groups[w.id] = g;
});

svg.addEventListener('click', e => {
  if (!e.target.closest('[data-id]')) { selected = null; reset(); resetLabel(); showDefault(); syncNav(null); }
});

const defs = mk('defs');
CATS.forEach((cat, ci) => {
  const la = arcPt(cat.startAngle + ARC_PAD, LABEL_R), lb = arcPt(cat.endAngle - ARC_PAD, LABEL_R);
  defs.appendChild(mk('path', { id: `lp${ci}`, d: `M${la.x.toFixed(2)},${la.y.toFixed(2)} A${LABEL_R},${LABEL_R},0,0,1,${lb.x.toFixed(2)},${lb.y.toFixed(2)}`, fill: 'none' }));
  const pa = arcPt(cat.startAngle + ARC_PAD, PCT_R), pb = arcPt(cat.endAngle - ARC_PAD, PCT_R);
  defs.appendChild(mk('path', { id: `pp${ci}`, d: `M${pa.x.toFixed(2)},${pa.y.toFixed(2)} A${PCT_R},${PCT_R},0,0,1,${pb.x.toFixed(2)},${pb.y.toFixed(2)}`, fill: 'none' }));
});
svg.appendChild(defs);

CATS.forEach((cat, ci) => {
  ['pp', 'lp'].forEach((prefix, idx) => {
    const el = mk('text', {
      'font-family': "'Fredoka', sans-serif",
      'font-size': idx === 0 ? '11' : '10',
      'font-weight': idx === 0 ? '500' : '300',
      fill: idx === 0 ? cat.color : '#260F26',
      'letter-spacing': '0.04em',
    });
    const tp = document.createElementNS(NS, 'textPath');
    tp.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `#${prefix}${ci}`);
    tp.setAttribute('href', `#${prefix}${ci}`);
    tp.setAttribute('startOffset', '50%');
    tp.setAttribute('text-anchor', 'middle');
    tp.textContent = idx === 0 ? cat.pct : cat.label;
    el.appendChild(tp);
    svg.appendChild(el);
  });
});

const bottomLabel = mkTxt('44 Women', {
  x: OX, y: OY + 20, 'text-anchor': 'middle',
  'font-family': "'Fredoka', sans-serif", 'font-size': '12', 'font-weight': '300',
  fill: '#752F75', 'letter-spacing': '0.12em',
});
svg.appendChild(bottomLabel);


// ─────────────────────────────────────────────
// INTERACTION
// ─────────────────────────────────────────────

let selected = null;

function highlight(id) {
  for (const [wid, g] of Object.entries(groups)) {
    const mine = parseInt(wid) === id;
    g.querySelectorAll('.strand').forEach(p => {
      p.setAttribute('opacity', mine ? '1' : '0.06');
      p.setAttribute('stroke-width', mine ? '1.8' : '1.0');
    });
  }
}

function reset() {
  for (const g of Object.values(groups)) {
    g.querySelectorAll('.strand').forEach(p => {
      p.setAttribute('opacity', '0.55');
      p.setAttribute('stroke-width', '1.0');
    });
  }
}

function setLabel(id)  { bottomLabel.textContent = `Woman #${id}`; }
function resetLabel()  { bottomLabel.textContent = '44 Women'; }

function syncNav(id) {
  document.querySelectorAll('.wb').forEach(b =>
    b.classList.toggle('sel', id !== null && parseInt(b.dataset.id) === id)
  );
}


// ─────────────────────────────────────────────
// PANEL
// ─────────────────────────────────────────────

function showDefault() {
  document.getElementById('p-title').textContent = 'Woman #—';
  document.getElementById('p-body').innerHTML =
    '<div id="panel-default">Hover over a strand or click a number to explore an individual experience.</div>';
}

function openPanel(w) {
  document.getElementById('p-title').textContent = `Woman #${w.id}`;
  const body = document.getElementById('p-body');
  body.innerHTML = '';

  function field(label, text) {
    const l = document.createElement('div'); l.className = 'fl'; l.textContent = label;
    const v = document.createElement('div'); v.className = 'fv'; v.textContent = text;
    body.appendChild(l); body.appendChild(v);
  }

  // Concern dots
  const dots = Array.from({ length: 5 }, (_, i) =>
    `<div class="bar-dot${i < w.concern ? ' on' : ''}"></div>`
  ).join('');
  const cl = document.createElement('div'); cl.className = 'fl'; cl.textContent = 'Safety Concern Level';
  const cv = document.createElement('div'); cv.className = 'fv';
  cv.innerHTML = `<div class="bar">${dots}</div><div style="font-size:9.5px;color:#582358;margin-top:2px">${w.concern} / 5</div>`;
  body.appendChild(cl); body.appendChild(cv);

  field('Apps', w.apps);
  field('Online Safety Strategies', w.stratText);
  field('Precautions Before Meeting', w.precautions);

  // Still uses dating apps
  const sl = document.createElement('div'); sl.className = 'fl'; sl.textContent = 'Still Uses Dating Apps';
  const sv = document.createElement('div'); sv.className = 'fv'; sv.textContent = w.stillUses ? 'Yes' : 'No';
  body.appendChild(sl); body.appendChild(sv);

  // Why — only if still uses
  if (w.stillUses && w.whyText) {
    field('Why She Uses Dating Apps', w.whyText);
  }

  // Key outcomes — only true ones
  const outcomes = [
    ['Experienced suspicious behaviour online', w.suspicious],
    ['Felt unsafe using dating apps',           w.highSafety],
    ['Prioritised safety before meeting',       w.highImportance],
    ['Avoided meeting due to safety concerns',  w.didntMeet],
    ['Had a traumatic in-person experience',    w.traumatic],
  ].filter(([, val]) => val);

  if (outcomes.length) {
    const ol = document.createElement('div'); ol.className = 'fl'; ol.textContent = 'Key Outcomes';
    body.appendChild(ol);
    outcomes.forEach(([label]) => {
      const row = document.createElement('div'); row.className = 'outcome';
      row.innerHTML = `<div class="oi"></div><span>${label}</span>`;
      body.appendChild(row);
    });
  }
}

document.getElementById('p-close').addEventListener('click', () => {
  selected = null; reset(); resetLabel(); showDefault(); syncNav(null);
});

showDefault();


// ─────────────────────────────────────────────
// NAV
// ─────────────────────────────────────────────

const nav = document.getElementById('nav');
women.forEach(w => {
  const btn = document.createElement('button');
  btn.className = 'wb'; btn.textContent = w.id; btn.dataset.id = w.id;

  btn.addEventListener('mouseenter', () => { if (!selected) { highlight(w.id); setLabel(w.id); openPanel(w); } });
  btn.addEventListener('mouseleave', () => { if (!selected) { reset(); resetLabel(); showDefault(); } });
  btn.addEventListener('click', () => {
    if (selected === w.id) { selected = null; reset(); resetLabel(); showDefault(); syncNav(null); }
    else { selected = w.id; highlight(w.id); setLabel(w.id); openPanel(w); syncNav(w.id); }
  });

  nav.appendChild(btn);
});