const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const tags = (list = []) => `<ul class="tags">${list.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>`;
const linkRow = (links = {}) => {
  const out = Object.entries(links).filter(([, url]) => url)
    .map(([label, url]) => `<a href="${esc(url)}" target="_blank" rel="noopener">${esc(label)} ↗</a>`);
  return out.length ? `<div class="links">${out.join("")}</div>` : "";
};

function contactButtons(l) {
  const b = [];
  if (l.email) b.push(`<a class="btn primary" href="mailto:${esc(l.email)}">Email me</a>`);
  if (l.linkedin) b.push(`<a class="btn" href="${esc(l.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>`);
  if (l.github) b.push(`<a class="btn" href="${esc(l.github)}" target="_blank" rel="noopener">GitHub</a>`);
  if (l.resume) b.push(`<a class="btn" href="${esc(l.resume)}" target="_blank" rel="noopener">Resume</a>`);
  return b.join("");
}

const C = CONTENT;
$("name").textContent = C.name;
$("tagline").textContent = C.tagline;
$("intro").textContent = C.intro;
$("hero-links").innerHTML = contactButtons(C.links);
$("contact-links").innerHTML = contactButtons(C.links);
$("year").textContent = new Date().getFullYear();

$("experience-list").innerHTML = C.experience.map((e) => `
  <article class="item">
    <div class="meta"><span>${esc(e.dates)}</span><span>${esc(e.location)}</span></div>
    <div>
      <h3>${esc(e.role)}</h3>
      <p class="org">${esc(e.org)}</p>
      <ul class="points">${e.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
      ${tags(e.tags)}
    </div>
  </article>`).join("");

$("project-list").innerHTML = C.projects.map((p) => `
  <article class="card">
    <p class="date">${esc(p.dates)}</p>
    <h3>${esc(p.title)}</h3>
    <p>${esc(p.summary)}</p>
    <div class="highlights">${(p.highlights || []).map((h) => `<span>${esc(h)}</span>`).join("")}</div>
    ${tags(p.tags)}
    ${linkRow(p.links)}
  </article>`).join("");

$("research-list").innerHTML = C.research.map((r) => `
  <article class="card wide">
    <p class="date">${esc(r.dates)}</p>
    <h3>${esc(r.title)}</h3>
    <p class="org">${esc(r.lab)}</p>
    <p>${esc(r.summary)}</p>
    ${tags(r.outputs)}
    ${linkRow(r.links)}
  </article>`).join("");

$("education-list").innerHTML = C.education.map((e) => `
  <article class="card">
    <p class="date">${esc(e.dates)}</p>
    <h3>${esc(e.school)}</h3>
    <p class="org">${esc(e.degree)}</p>
    <p class="muted">${esc(e.detail)}</p>
  </article>`).join("");

$("skill-list").innerHTML = Object.entries(C.skills).map(([group, list]) => `
  <div class="skill-row"><h4>${esc(group)}</h4>${tags(list)}</div>`).join("");
