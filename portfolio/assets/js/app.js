/*
 * Portfolio app: reads window.PORTFOLIO (assets/js/content.js) and renders the
 * <template id="tpl"> in index.html. To change what the page says, edit
 * content.js; this file only handles layout logic, tabs and links.
 *
 * Addresses: #/ (overview), #/work, #/impact, #/campaigns, #/career.
 * A case opens at #/<tab>/<campaign-id>, so phone back buttons close it.
 */
(function () {
  'use strict';

  const C = window.PORTFOLIO;
  const CAMPAIGN_IMAGES = 'assets/images/campaigns/';
  const COLORS = { yellow: '#FFE07A', pink: '#FFCAD4', green: '#C9EEDB', blue: '#D6E6FF' };
  const NOTE_CYCLE = ['yellow', 'pink', 'green', 'blue'];
  const PIN_TILT = [-1.5, 1.5, -1, 2, -2, 1];
  const NOTE_TILT = [2, -2, 1.5, -1.5];
  const TABS = [
    { slug: '', label: 'Overview' },
    { slug: 'work', label: 'Flagship work' },
    { slug: 'impact', label: 'Impact' },
    { slug: 'campaigns', label: 'All campaigns' },
    { slug: 'career', label: 'Career' }
  ];

  const color = (name) => COLORS[name] || name || COLORS.yellow;
  const noteStyle = (name, tilt) => `--bg:${color(name)};--tilt:${tilt || 0}deg`;
  const image = (file) => (file ? CAMPAIGN_IMAGES + file : '');

  const byId = {};
  C.campaigns.forEach((c) => { byId[c.id] = c; });

  const state = { tab: '', sel: '', job: 'All', medium: 'All', view: 'Cards' };
  let caseOpenedHere = false;

  function setState(patch) {
    Object.assign(state, patch);
    render();
  }

  // ---------- routing ----------

  function readHash() {
    const parts = location.hash.replace(/^#\/?/, '').split('/');
    if (byId[parts[0]]) return { tab: '', sel: parts[0] }; // a case opened from Overview
    const tab = TABS.some((t) => t.slug === parts[0]) ? parts[0] : '';
    const sel = parts[1] && byId[parts[1]] ? parts[1] : '';
    return { tab, sel, contact: parts[0] === 'contact' };
  }

  function go(tab, sel) {
    location.hash = '#/' + [tab, sel].filter(Boolean).join('/');
  }

  function onRoute() {
    const r = readHash();
    const tabChanged = r.tab !== state.tab;
    if (!r.sel) caseOpenedHere = false;
    state.tab = r.tab;
    state.sel = r.sel;
    render();
    if (r.contact) scrollToContact();
    else if (tabChanged) window.scrollTo(0, 0);
  }

  function openCase(id) {
    return (e) => {
      if (e && e.stopPropagation) e.stopPropagation();
      caseOpenedHere = true;
      go(state.tab, id);
    };
  }

  function closeCase() {
    if (caseOpenedHere) history.back();
    else location.replace('#/' + state.tab);
  }

  function scrollToContact() {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // ---------- view model ----------

  function chip(label, on, pick, key) {
    return { label, on: on ? 'true' : 'false', pick, key };
  }

  function viewModel() {
    const { tab, sel, job, medium, view } = state;

    const shown = C.campaigns
      .filter((c) => (job === 'All' || c.jobs.includes(job)) && (medium === 'All' || c.mediums.includes(medium)))
      .sort((a, b) => b.date.localeCompare(a.date));

    const pins = shown.map((c, i) => Object.assign({}, c, {
      img: image(c.cover), hasImg: !!c.cover, noImg: !c.cover,
      hasLink: !!c.link, link: c.link || '', medText: c.mediums.join(', '), open: openCase(c.id),
      style: `--bg:${color(NOTE_CYCLE[i % 4])};--tilt:${PIN_TILT[i % 6]}deg;--ntilt:${NOTE_TILT[i % 4]}deg`
    }));

    const flagship = C.flagship.filter((f) => byId[f.id]).map((f, i) => {
      const c = byId[f.id];
      return Object.assign({ mediaKind: 'Campaign' }, f, {
        title: f.title || c.title, film: !!c.film,
        img: image(c.cover), hasImg: !!c.cover, noImg: !c.cover,
        hasLink: !!c.link, link: c.link || '',
        cta: c.linkText || (c.film ? 'Watch on LinkedIn' : 'Read my post'),
        mediaHref: c.link || C.contact.linkedin,
        mediaLabel: c.link ? (c.linkText || (c.film ? 'Watch the film on LinkedIn' : 'See it on LinkedIn')) : 'See my LinkedIn',
        style: `--bg:${color(NOTE_CYCLE[i % 4])}`, open: openCase(c.id)
      });
    });

    const s = byId[sel];
    const selected = s ? Object.assign({}, s, {
      medText: s.mediums.join(', '), hasHero: !!s.cover, img: image(s.cover),
      hasLink: !!s.link, link: s.link || '',
      cta: s.linkText || (s.film ? 'Watch on LinkedIn' : 'Read my LinkedIn post'),
      results: s.results || [],
      gallery: (s.gallery || []).map((g) => {
        const o = typeof g === 'string' ? { image: g } : g;
        return { src: image(o.image), video: o.video || '', hasVideo: !!o.video, noVideo: !o.video, caption: o.caption || s.title };
      }),
      hasGallery: !!(s.gallery && s.gallery.length),
      watch: (s.watch || []).map((w) => Object.assign({ source: /youtu/.test(w.url) ? 'YouTube' : 'Instagram' }, w)),
      hasWatch: !!(s.watch && s.watch.length),
      press: s.press || [], hasPress: !!(s.press && s.press.length)
    }) : { title: '', results: [], gallery: [], watch: [], press: [] };

    const pct = (v, max) => Math.round((v / max) * 100) + '%';

    return {
      contact: C.contact,
      tabs: TABS.map((t) => ({
        label: t.label, selected: t.slug === tab ? 'true' : 'false', key: 'tab-' + (t.slug || 'overview'),
        pick: () => go(t.slug)
      })),
      isOverview: tab === '', isWork: tab === 'work', isImpact: tab === 'impact',
      isArchive: tab === 'campaigns', isCareer: tab === 'career',
      goHome: (e) => {
        e.preventDefault();
        if (state.tab === '' && !state.sel) window.scrollTo({ top: 0, behavior: 'smooth' });
        else go('');
      },
      toContact: scrollToContact,

      proof: C.proof.map((p) => Object.assign({}, p, { style: noteStyle(p.color, p.tilt) })),
      rules: C.rules.map((r) => Object.assign({}, r, { style: noteStyle(r.color, r.tilt) })),
      flagship,
      impact: C.impact.map((m) => Object.assign({}, m, {
        beforeStyle: '--w:' + pct(m.beforeValue, m.scaleMax),
        afterStyle: '--w:' + pct(m.afterValue, m.scaleMax)
      })),

      jobChips: ['All'].concat(C.filters.jobs).map((l) => chip(l, l === job, () => setState({ job: l }), 'job-' + l)),
      mediumChips: ['All'].concat(C.filters.mediums).map((l) => chip(l, l === medium, () => setState({ medium: l }), 'med-' + l)),
      viewChips: ['Cards', 'Table'].map((l) => chip(l, l === view, () => setState({ view: l }), 'view-' + l)),
      isCards: view === 'Cards', isTable: view === 'Table',
      pins, empty: pins.length === 0,
      countText: pins.length + ' of ' + C.campaigns.length + ' campaigns · newest first · tap any card for the full case',

      career: C.career.map((r) => Object.assign({}, r, { style: '--bar:' + color(r.color) })),
      awards: C.awards.map((a) => Object.assign({ link: '' }, a, { hasLink: !!a.link, style: noteStyle(a.color, a.tilt) })),

      hasSel: !!s, sel: selected,
      close: closeCase,
      closeBg: (e) => { if (e.target === e.currentTarget) closeCase(); }
    };
  }

  // ---------- tiny template renderer ----------

  const TPL = document.getElementById('tpl');

  function look(path, scopes) {
    path = path.trim();
    if (path === 'true') return true;
    if (path === 'false') return false;
    const parts = path.split('.');
    for (let i = scopes.length - 1; i >= 0; i--) {
      if (parts[0] in scopes[i]) {
        let v = scopes[i][parts[0]];
        for (const p of parts.slice(1)) v = v == null ? v : v[p];
        return v;
      }
    }
    return undefined;
  }

  function interp(str, scopes) {
    return str.replace(/\{\{([^}]+)\}\}/g, (m, e) => {
      const v = look(e, scopes);
      return v == null ? '' : String(v);
    });
  }

  function build(node, scopes, out) {
    if (node.nodeType === 3) { out.appendChild(document.createTextNode(interp(node.textContent, scopes))); return; }
    if (node.nodeType !== 1) return;
    const tag = node.tagName.toLowerCase();
    if (tag === 'sc-for') {
      const list = look(node.getAttribute('list').replace(/[{}]/g, ''), scopes) || [];
      const as = node.getAttribute('as');
      list.forEach((item) => { const sc = scopes.concat([{ [as]: item }]); node.childNodes.forEach((c) => build(c, sc, out)); });
      return;
    }
    if (tag === 'sc-if') {
      if (look(node.getAttribute('value').replace(/[{}]/g, ''), scopes)) node.childNodes.forEach((c) => build(c, scopes, out));
      return;
    }
    if (node.hasAttribute('data-scfor')) {
      const [listPath, as] = node.getAttribute('data-scfor').split('|');
      const list = look(listPath, scopes) || [];
      const clone = node.cloneNode(true);
      clone.removeAttribute('data-scfor');
      list.forEach((item) => build(clone, scopes.concat([{ [as]: item }]), out));
      return;
    }
    const el = document.createElement(tag);
    for (const a of node.attributes) {
      if (/^on/i.test(a.name)) {
        const fn = look(a.value.replace(/[{}]/g, ''), scopes);
        if (typeof fn === 'function') el.addEventListener(a.name.slice(2).toLowerCase(), fn);
        continue;
      }
      el.setAttribute(a.name, interp(a.value, scopes));
    }
    node.childNodes.forEach((c) => build(c, scopes, el));
    out.appendChild(el);
  }

  // ---------- render ----------

  const app = document.getElementById('app');
  let modalWasOpen = false;

  function centerActiveTab() {
    const bar = app.querySelector('.nav__tabs');
    const tab = bar && bar.querySelector('[aria-selected="true"]');
    if (!bar || !tab || bar.scrollWidth <= bar.clientWidth) return;
    bar.scrollLeft = tab.offsetLeft - (bar.clientWidth - tab.offsetWidth) / 2;
  }

  function render() {
    // Rebuilding the DOM loses scroll position of chip rows and keyboard focus; keep both.
    const scrolls = {};
    app.querySelectorAll('[data-keep-scroll]').forEach((el) => { scrolls[el.dataset.keepScroll] = el.scrollLeft; });
    const active = document.activeElement;
    const focusKey = active && active.dataset ? active.dataset.focusKey : '';

    const frag = document.createDocumentFragment();
    const vals = viewModel();
    TPL.content.childNodes.forEach((n) => build(n, [vals], frag));
    app.replaceChildren(frag);

    app.querySelectorAll('[data-keep-scroll]').forEach((el) => {
      if (el.dataset.keepScroll in scrolls) el.scrollLeft = scrolls[el.dataset.keepScroll];
    });
    if (focusKey) {
      const el = Array.from(app.querySelectorAll('[data-focus-key]')).find((x) => x.dataset.focusKey === focusKey);
      if (el) el.focus({ preventScroll: true });
    }
    centerActiveTab();

    const modalOpen = !!state.sel;
    document.body.classList.toggle('modal-open', modalOpen);
    if (modalOpen && !modalWasOpen) {
      const panel = app.querySelector('.modal__panel'); // Tab then reaches the close button
      if (panel) panel.focus({ preventScroll: true });
    }
    modalWasOpen = modalOpen;
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && state.sel) closeCase();
  });
  window.addEventListener('hashchange', onRoute);
  window.addEventListener('resize', centerActiveTab);
  onRoute();
})();
