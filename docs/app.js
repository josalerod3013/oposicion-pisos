(() => {
  'use strict';

  const KEY = 'pisos-progreso-v1';
  const DAY = 864e5;
  const LEITNER_DAYS = [0, 1, 3, 7, 14];
  const $ = (s, el = document) => el.querySelector(s);
  const view = $('#view');
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const pct = (a, b) => (b ? Math.round((a / b) * 100) : 0);

  // ---------- Datos ----------
  const TEMA = Object.fromEntries(TEMAS.map((t) => [t.id, t]));
  const QS = [];
  const CARDS = [];
  for (const t of TEMAS) {
    (PREGUNTAS[t.id] || []).forEach((r, i) => QS.push({ id: `${t.id}-${i + 1}`, t: t.id, q: r[0], o: r[1], e: r[2], p: r[3] }));
    (TARJETAS[t.id] || []).forEach((r, i) => CARDS.push({ id: `${t.id}-c${i + 1}`, t: t.id, f: r[0], b: r[1] }));
  }
  const QBYID = Object.fromEntries(QS.map((q) => [q.id, q]));

  // ---------- Progreso (localStorage) ----------
  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; }
  }
  let S = Object.assign({ q: {}, f: {}, c: {}, sims: [] }, load());
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(S)); } catch { /* sin almacenamiento: se trabaja en memoria */ }
  }
  function record(id, ok) {
    const r = S.q[id] || (S.q[id] = { ok: 0, ko: 0, st: 0 });
    if (ok) {
      r.ok++; r.st++;
      if (S.f[id] && r.st >= 2) delete S.f[id];
    } else {
      r.ko++; r.st = 0; S.f[id] = 1;
    }
    r.t = Date.now();
    save();
  }
  function topicStats(tids) {
    const qs = QS.filter((q) => tids.includes(q.t));
    let seen = 0, ok = 0, ko = 0, fails = 0;
    for (const q of qs) {
      const r = S.q[q.id];
      if (r) { seen++; ok += r.ok; ko += r.ko; }
      if (S.f[q.id]) fails++;
    }
    return { total: qs.length, seen, acc: pct(ok, ok + ko), answered: ok + ko, fails };
  }
  const failIds = () => Object.keys(S.f).filter((id) => QBYID[id]);

  // ---------- UI helpers ----------
  function setTitle(t, back) {
    $('#title').textContent = t;
    document.title = t === 'Pisos' ? 'Pisos · Estudio' : `${t} · Pisos`;
    const b = $('#back');
    b.hidden = !back;
    b.onclick = () => { location.hash = back; };
  }
  function setTab(tab) {
    document.querySelectorAll('.tabbar a').forEach((a) => a.classList.toggle('on', a.dataset.tab === tab));
  }
  function toast(msg) {
    const t = document.createElement('div');
    t.className = 'toast'; t.textContent = msg; t.setAttribute('role', 'status');
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 2200);
  }
  function render(html) {
    view.innerHTML = html;
    window.scrollTo(0, 0);
  }
  function bar(p) { return `<div class="bar" role="progressbar" aria-valuenow="${p}" aria-valuemin="0" aria-valuemax="100"><i style="width:${p}%"></i></div>`; }

  // ---------- Inicio ----------
  function viewHome() {
    setTitle('Pisos'); setTab('inicio');
    const all = topicStats(TEMAS.map((t) => t.id));
    const nf = failIds().length;
    const due = dueCards(TEMAS.map((t) => t.id)).length;
    let h = `
<section class="card">
  <h2>Tu progreso</h2>
  <div class="stats">
    <div class="stat"><b>${all.seen}/${all.total}</b><span>preguntas vistas</span></div>
    <div class="stat"><b>${all.answered ? all.acc + '%' : '–'}</b><span>aciertos</span></div>
    <div class="stat"><b>${nf}</b><span>fallos por repasar</span></div>
  </div>
  <div style="margin-top:12px">${bar(pct(all.seen, all.total))}</div>
</section>
<div class="row" style="margin-bottom:12px">
  <button class="btn primary" style="flex:1 1 100%" data-act="quick">Test rápido · 10 preguntas</button>
  <button class="btn" style="flex:1" data-act="fails" ${nf ? '' : 'disabled'}>Repasar fallos (${nf})</button>
  <a class="btn" style="flex:1" href="#/test?modo=simulacro">Simulacro</a>
</div>
${due ? `<a class="card topic" href="#/tarjetas" style="display:flex;align-items:center;gap:12px"><span style="font-size:1.6rem">❏</span><span><b>${due} tarjetas</b> pendientes de repaso hoy</span></a>` : ''}
${installHint()}`;
    for (const libro of LIBROS) {
      h += `<div class="section-title">${esc(libro.titulo)}</div>`;
      for (const t of TEMAS.filter((x) => x.libro === libro.id)) {
        const s = topicStats([t.id]);
        h += `
<a class="card topic" href="#/tema/${t.id}">
  <h3>Tema ${t.num}. ${esc(t.titulo)}</h3>
  <div class="meta"><span>${s.seen}/${s.total} vistas</span><span>${s.answered ? s.acc + '% aciertos' : 'Sin empezar'}${s.fails ? ` · ${s.fails} fallos` : ''}</span></div>
  ${bar(pct(s.seen, s.total))}
</a>`;
      }
    }
    h += `<p class="muted small" style="text-align:center;margin-top:20px"><a href="#/ajustes">Copia de seguridad y ajustes</a></p>`;
    render(h);
    view.querySelector('[data-act="quick"]').onclick = () => startQuiz({ mode: 'test', tids: TEMAS.map((t) => t.id), n: 10 });
    const bf = view.querySelector('[data-act="fails"]');
    if (bf) bf.onclick = () => startQuiz({ mode: 'fallos' });
  }

  // ---------- Temario ----------
  function viewTemario() {
    setTitle('Temario'); setTab('temario');
    let h = '';
    for (const libro of LIBROS) {
      h += `<div class="section-title">${esc(libro.titulo)}</div>`;
      for (const t of TEMAS.filter((x) => x.libro === libro.id)) {
        h += `<a class="card topic" href="#/tema/${t.id}"><h3>Tema ${t.num}. ${esc(t.titulo)}</h3><div class="muted small">${t.secciones.length} apartados · ${(PREGUNTAS[t.id] || []).length} preguntas</div></a>`;
      }
    }
    h += `<p class="muted small">Son resúmenes de estudio, no el texto de los libros. Las páginas indican dónde ampliar en tu libro.</p>`;
    render(h);
  }

  function viewTema(id) {
    const t = TEMA[id];
    if (!t) return go('#/temario');
    setTitle(`Tema ${t.num}`, '#/temario'); setTab('temario');
    const s = topicStats([id]);
    let h = `
<section class="card">
  <div class="muted small">${esc(LIBROS.find((l) => l.id === t.libro).titulo)}</div>
  <h2 style="margin-top:4px">${esc(t.titulo)}</h2>
  <div class="meta muted small" style="margin-bottom:10px">${s.seen}/${s.total} preguntas vistas${s.answered ? ` · ${s.acc}% aciertos` : ''}</div>
  <div class="row"><button class="btn primary" style="flex:1" data-act="test">Test de este tema</button><a class="btn" style="flex:1" href="#/tarjetas/${id}">Tarjetas</a></div>
</section>`;
    t.secciones.forEach((sec, i) => {
      h += `<details class="sec"${i === 0 ? ' open' : ''}><summary>${esc(sec.h)} <span class="pg">${esc(sec.p)}</span></summary><div class="body">${sec.html}</div></details>`;
    });
    render(h);
    view.querySelector('[data-act="test"]').onclick = () => startQuiz({ mode: 'test', tids: [id], n: Math.min(10, s.total) });
  }

  // ---------- Configuración de test ----------
  let cfg = { tids: TEMAS.map((t) => t.id), n: 10, simN: 40, timer: true };
  function viewTestConfig(params) {
    setTitle('Test'); setTab('test');
    const sim = params.get('modo') === 'simulacro';
    const nf = failIds().length;
    const chip = (t) => `<button class="chip" data-t="${t.id}" aria-pressed="${cfg.tids.includes(t.id)}">${t.libro === 'A' ? 'L1' : 'L2'}·T${t.num} ${esc(t.titulo)}</button>`;
    render(`
<div class="chips" role="tablist" style="margin-bottom:14px">
  <a class="chip" href="#/test" aria-pressed="${!sim}">Test por temas</a>
  <a class="chip" href="#/test?modo=simulacro" aria-pressed="${sim}">Simulacro</a>
</div>
${sim ? `
<section class="card">
  <h2>Simulacro de examen</h2>
  <p class="muted">Preguntas de todo el temario. No ves si aciertas hasta que terminas, como en el examen real.</p>
  <div class="section-title" style="margin-top:8px">Número de preguntas</div>
  <div class="chips" id="simn">${[20, 40, 60].map((n) => `<button class="chip" data-n="${n}" aria-pressed="${cfg.simN === n}">${n}</button>`).join('')}</div>
  <label class="check" style="margin-top:12px"><input type="checkbox" id="timer" ${cfg.timer ? 'checked' : ''}> Con tiempo (1 minuto por pregunta)</label>
  <button class="btn primary block" style="margin-top:12px" id="go">Empezar simulacro</button>
</section>
${S.sims.length ? `<div class="section-title">Últimos simulacros</div><div class="card">${S.sims.slice(-5).reverse().map((r) => `<div class="row" style="justify-content:space-between;padding:4px 0"><span class="muted small">${new Date(r.d).toLocaleDateString('es-ES')}</span><b>${r.ok}/${r.n} · ${pct(r.ok, r.n)}%</b></div>`).join('')}</div>` : ''}
` : `
<section class="card">
  <h2>Elige los temas</h2>
  <div class="chips" id="tchips">${TEMAS.map(chip).join('')}</div>
  <div class="row" style="margin-top:8px"><button class="btn ghost small" id="all">Todos</button><button class="btn ghost small" id="none">Ninguno</button></div>
  <div class="section-title">Número de preguntas</div>
  <div class="chips" id="nchips">${[10, 20, 30].map((n) => `<button class="chip" data-n="${n}" aria-pressed="${cfg.n === n}">${n}</button>`).join('')}</div>
  <p class="muted small" style="margin:12px 0 0">Salen primero las que no has visto y las que fallaste.</p>
  <button class="btn primary block" style="margin-top:12px" id="go">Empezar test</button>
</section>
<button class="btn block" id="fails" ${nf ? '' : 'disabled'}>Repasar solo fallos (${nf})</button>
<p class="muted small">Una pregunta sale de «fallos» cuando la aciertas dos veces seguidas.</p>
`}`);
    if (sim) {
      view.querySelectorAll('#simn .chip').forEach((b) => (b.onclick = () => { cfg.simN = +b.dataset.n; viewTestConfig(params); }));
      $('#timer').onchange = (e) => { cfg.timer = e.target.checked; };
      $('#go').onclick = () => startQuiz({ mode: 'simulacro', n: cfg.simN, timer: cfg.timer });
    } else {
      view.querySelectorAll('#tchips .chip').forEach((b) => (b.onclick = () => {
        const id = b.dataset.t;
        cfg.tids = cfg.tids.includes(id) ? cfg.tids.filter((x) => x !== id) : cfg.tids.concat(id);
        b.setAttribute('aria-pressed', cfg.tids.includes(id));
        $('#go').disabled = !cfg.tids.length;
      }));
      $('#all').onclick = () => { cfg.tids = TEMAS.map((t) => t.id); viewTestConfig(params); };
      $('#none').onclick = () => { cfg.tids = []; viewTestConfig(params); };
      view.querySelectorAll('#nchips .chip').forEach((b) => (b.onclick = () => { cfg.n = +b.dataset.n; viewTestConfig(params); }));
      $('#go').disabled = !cfg.tids.length;
      $('#go').onclick = () => startQuiz({ mode: 'test', tids: cfg.tids, n: cfg.n });
      const bf = $('#fails');
      if (bf) bf.onclick = () => startQuiz({ mode: 'fallos' });
    }
  }

  // ---------- Quiz ----------
  let Q = null;
  let timerId = null;
  const isTF = (o) => o.length === 2 && o.includes('Verdadero') && o.includes('Falso');

  function pick(pool, n) {
    const w = (q) => {
      const r = S.q[q.id];
      let s = Math.random() * 1.5;
      if (S.f[q.id]) s += 3;
      if (!r) s += 2; else s += r.ko / (r.ok + r.ko + 1);
      return s;
    };
    return shuffle(pool.map((q) => [w(q), q]).sort((a, b) => b[0] - a[0]).slice(0, n).map((x) => x[1]));
  }

  function startQuiz(opts) {
    let qs;
    if (opts.mode === 'fallos') qs = shuffle(failIds().map((id) => QBYID[id])).slice(0, 30);
    else if (opts.mode === 'simulacro') qs = shuffle(QS).slice(0, opts.n);
    else qs = pick(QS.filter((q) => opts.tids.includes(q.t)), opts.n);
    if (!qs.length) { toast('No hay preguntas para esa selección'); return; }
    Q = {
      mode: opts.mode,
      feedback: opts.mode !== 'simulacro',
      i: 0,
      items: qs.map((q) => {
        const idx = q.o.map((_, k) => k);
        const order = isTF(q.o) ? idx.sort((a, b) => (q.o[a] === 'Verdadero' ? -1 : q.o[b] === 'Verdadero' ? 1 : 0)) : shuffle(idx);
        return { q, order, ans: null };
      }),
      end: opts.timer ? Date.now() + qs.length * 60e3 : null
    };
    go('#/quiz');
  }

  function fmtTime(ms) {
    const s = Math.max(0, Math.ceil(ms / 1000));
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
  }

  function viewQuiz() {
    if (!Q) return go('#/test');
    const label = { test: 'Test', fallos: 'Repaso de fallos', simulacro: 'Simulacro' }[Q.mode];
    setTitle(label, '#/test'); setTab('test');
    $('#back').onclick = () => { if (confirmLeave()) { Q = null; clearInterval(timerId); go('#/test'); } };
    const it = Q.items[Q.i];
    const q = it.q;
    const answered = it.ans !== null;
    const reveal = Q.feedback && answered;
    const optHtml = it.order.map((k) => {
      let cls = 'opt';
      if (reveal) { if (k === 0) cls += ' ok'; else if (k === it.ans) cls += ' ko'; }
      else if (it.ans === k) cls += ' sel';
      return `<button class="${cls}" data-k="${k}" ${reveal ? 'disabled' : ''}>${esc(q.o[k])}</button>`;
    }).join('');
    const last = Q.i === Q.items.length - 1;
    const nAns = Q.items.filter((x) => x.ans !== null).length;
    render(`
<div class="qhead"><span>${Q.i + 1} / ${Q.items.length}</span><span>${esc(TEMA[q.t].libro === 'A' ? 'Libro 1' : 'Libro 2')} · T${TEMA[q.t].num}</span>${Q.end ? `<span id="clock">${fmtTime(Q.end - Date.now())}</span>` : ''}</div>
${bar(pct(Q.i + (answered ? 1 : 0), Q.items.length))}
<section class="card" style="margin-top:12px">
  <p class="qtext">${esc(q.q)}</p>
  <div class="opts">${optHtml}</div>
  ${reveal ? `<div class="explain">${it.ans === 0 ? '<b class="ok">¡Correcto!</b>' : `<b class="ko">Incorrecto.</b> La respuesta es: <b>${esc(q.o[0])}</b>`}<br>${esc(q.e)} <span class="muted small">(${esc(q.p)})</span></div>` : ''}
</section>
<div class="quiz-foot row">
  ${!Q.feedback && Q.i > 0 ? '<button class="btn" id="prev">Anterior</button>' : ''}
  <span class="spacer"></span>
  ${Q.feedback
    ? (reveal ? `<button class="btn primary" id="next">${last ? 'Ver resultado' : 'Siguiente'}</button>` : '')
    : `<button class="btn ${last ? 'primary' : ''}" id="next">${last ? `Terminar (${nAns}/${Q.items.length})` : 'Siguiente'}</button>`}
</div>`);
    view.querySelectorAll('.opt').forEach((b) => (b.onclick = () => {
      if (Q.feedback && it.ans !== null) return;
      it.ans = +b.dataset.k;
      if (Q.feedback) record(q.id, it.ans === 0);
      viewQuiz();
    }));
    const nx = $('#next');
    if (nx) nx.onclick = () => {
      if (last) {
        if (!Q.feedback && nAns < Q.items.length && !window.confirm(`Te quedan ${Q.items.length - nAns} sin contestar. ¿Terminar igualmente?`)) return;
        finishQuiz();
      } else { Q.i++; viewQuiz(); }
    };
    const pv = $('#prev');
    if (pv) pv.onclick = () => { Q.i--; viewQuiz(); };
    clearInterval(timerId);
    if (Q.end) {
      timerId = setInterval(() => {
        const left = Q.end - Date.now();
        const c = $('#clock');
        if (c) c.textContent = fmtTime(left);
        if (left <= 0) { clearInterval(timerId); toast('Se acabó el tiempo'); finishQuiz(); }
      }, 1000);
    }
  }

  function confirmLeave() {
    return !Q || Q.items.every((x) => x.ans === null) || window.confirm('¿Salir del test? Lo que ya has respondido queda guardado.');
  }

  function finishQuiz() {
    clearInterval(timerId);
    if (!Q.feedback) {
      for (const it of Q.items) if (it.ans !== null) record(it.q.id, it.ans === 0);
    }
    const ok = Q.items.filter((x) => x.ans === 0).length;
    if (Q.mode === 'simulacro') {
      S.sims.push({ d: Date.now(), n: Q.items.length, ok });
      S.sims = S.sims.slice(-30);
      save();
    }
    Q.done = { ok };
    go('#/resultado');
  }

  function viewResult() {
    if (!Q || !Q.done) return go('#/test');
    setTitle('Resultado', '#/test'); setTab('test');
    const n = Q.items.length, ok = Q.done.ok;
    const blank = Q.items.filter((x) => x.ans === null).length;
    const wrong = Q.items.filter((x) => x.ans !== null && x.ans !== 0);
    const p = pct(ok, n);
    const msg = p >= 90 ? '¡Excelente!' : p >= 70 ? 'Muy bien, sigue así.' : p >= 50 ? 'Aprobado, pero repasa los fallos.' : 'Toca repasar el temario.';
    let h = `
<section class="card" style="text-align:center">
  <div class="result-big">${p}%</div>
  <div>${ok} de ${n} correctas${blank ? ` · ${blank} sin contestar` : ''}</div>
  <p class="muted">${msg}</p>
  <div class="row" style="justify-content:center">
    ${wrong.length || blank ? '<button class="btn primary" id="again-fails">Repasar fallos</button>' : ''}
    <a class="btn" href="#/test">Otro test</a>
    <a class="btn ghost" href="#/">Inicio</a>
  </div>
</section>`;
    const bad = Q.items.filter((x) => x.ans !== 0);
    if (bad.length) {
      h += `<div class="section-title">Para repasar</div>`;
      for (const it of bad) {
        h += `<div class="review-item"><b>${esc(it.q.q)}</b><br>${it.ans === null ? '<span class="muted">Sin contestar.</span> ' : `Tu respuesta: ${esc(it.q.o[it.ans])}<br>`}Correcta: <b>${esc(it.q.o[0])}</b><br><span class="muted small">${esc(it.q.e)} (${esc(TEMA[it.q.t].libro === 'A' ? 'Libro 1' : 'Libro 2')}, ${esc(it.q.p)})</span></div>`;
      }
    }
    render(h);
    const ag = $('#again-fails');
    if (ag) ag.onclick = () => startQuiz({ mode: 'fallos' });
  }

  // ---------- Tarjetas (Leitner) ----------
  function dueCards(tids) {
    const now = Date.now();
    return CARDS.filter((c) => tids.includes(c.t) && (!S.c[c.id] || S.c[c.id].n <= now));
  }
  let F = null;
  function viewCardsHome() {
    setTitle('Tarjetas'); setTab('tarjetas');
    const allT = TEMAS.map((t) => t.id);
    const totalDue = dueCards(allT).length;
    let h = `
<section class="card">
  <h2>Repaso con tarjetas</h2>
  <p class="muted">Lee el concepto, piensa la respuesta y toca la tarjeta para darle la vuelta. Las que te sabes vuelven a salir cada vez más espaciadas (1, 3, 7 y 14 días).</p>
  <a class="btn primary block" href="#/tarjetas/todas" ${totalDue ? '' : 'aria-disabled="true"'}>${totalDue ? `Repasar ${totalDue} pendientes` : 'Todo al día · repasar igualmente'}</a>
</section>`;
    for (const libro of LIBROS) {
      h += `<div class="section-title">${esc(libro.titulo)}</div>`;
      for (const t of TEMAS.filter((x) => x.libro === libro.id)) {
        const cs = CARDS.filter((c) => c.t === t.id);
        const known = cs.filter((c) => S.c[c.id] && S.c[c.id].b >= 2).length;
        const due = dueCards([t.id]).length;
        h += `<a class="card topic" href="#/tarjetas/${t.id}"><h3>Tema ${t.num}. ${esc(t.titulo)}</h3><div class="meta"><span>${cs.length} tarjetas · ${known} dominadas</span><span>${due ? due + ' pendientes' : 'Al día'}</span></div>${bar(pct(known, cs.length))}</a>`;
      }
    }
    render(h);
  }

  function startCards(sel) {
    const tids = sel === 'todas' ? TEMAS.map((t) => t.id) : [sel];
    let deck = shuffle(dueCards(tids)).slice(0, 25);
    if (!deck.length) deck = shuffle(CARDS.filter((c) => tids.includes(c.t))).slice(0, 25);
    F = { sel, deck, i: 0, flipped: false, ok: 0, total: deck.length };
  }

  function viewCards(sel) {
    if (!F || F.sel !== sel) startCards(sel);
    const t = TEMA[sel];
    setTitle(t ? `Tarjetas · T${t.num}` : 'Tarjetas', '#/tarjetas'); setTab('tarjetas');
    if (!F.deck.length) {
      F = null;
      render(`<section class="card empty"><p style="font-size:2rem;margin:0">✓</p><p>¡Sesión terminada!</p><a class="btn primary" href="#/tarjetas">Volver</a></section>`);
      return;
    }
    const c = F.deck[0];
    const box = S.c[c.id] ? S.c[c.id].b : 0;
    render(`
<div class="qhead"><span>Quedan ${F.deck.length}</span><span>Nivel ${box + 1}/5</span></div>
<div class="flash${F.flipped ? ' flipped' : ''}" id="flash" role="button" tabindex="0" aria-label="Dar la vuelta a la tarjeta">
  <div class="flash-inner">
    <div class="face front"><b>${esc(c.f)}</b><span class="hint">Toca para ver la respuesta</span></div>
    <div class="face back"><div>${esc(c.b)}</div></div>
  </div>
</div>
<div class="flash-actions" ${F.flipped ? '' : 'style="visibility:hidden"'}>
  <button class="btn ko" id="no">No lo sabía</button>
  <button class="btn ok" id="yes">Lo sabía</button>
</div>`);
    const flip = () => { F.flipped = !F.flipped; viewCards(sel); };
    $('#flash').onclick = flip;
    $('#flash').onkeydown = (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); flip(); } };
    $('#yes').onclick = () => rate(true);
    $('#no').onclick = () => rate(false);
    function rate(knew) {
      const r = S.c[c.id] || { b: 0, n: 0 };
      if (knew) {
        r.b = Math.min(r.b + 1, LEITNER_DAYS.length - 1);
        r.n = Date.now() + LEITNER_DAYS[r.b] * DAY;
        F.deck.shift();
      } else {
        r.b = 0; r.n = Date.now();
        F.deck.push(F.deck.shift());
      }
      S.c[c.id] = r; save();
      F.flipped = false;
      viewCards(sel);
    }
  }

  // ---------- Ajustes / copia de seguridad ----------
  function viewAjustes() {
    setTitle('Ajustes', '#/'); setTab('inicio');
    const theme = (() => { try { return localStorage.getItem('pisos-tema') || 'auto'; } catch { return 'auto'; } })();
    render(`
<section class="card">
  <h2>Copia de seguridad</h2>
  <p class="muted">Tu progreso se guarda solo en este móvil. Exporta una copia si vas a cambiar de móvil o a borrar los datos del navegador.</p>
  <div class="row"><button class="btn" id="exp">Exportar progreso</button><label class="btn" for="imp">Importar…</label><input type="file" id="imp" accept="application/json,.json" hidden></div>
</section>
<section class="card">
  <h2>Apariencia</h2>
  <div class="chips" id="theme">${[['auto', 'Automático'], ['light', 'Claro'], ['dark', 'Oscuro']].map(([v, l]) => `<button class="chip" data-v="${v}" aria-pressed="${theme === v}">${l}</button>`).join('')}</div>
</section>
<section class="card">
  <h2>Empezar de cero</h2>
  <p class="muted">Borra todas las respuestas, fallos y tarjetas.</p>
  <button class="btn ko" id="reset">Borrar progreso</button>
</section>
<p class="muted small">${QS.length} preguntas · ${CARDS.length} tarjetas · ${TEMAS.length} temas</p>`);
    $('#exp').onclick = () => {
      const blob = new Blob([JSON.stringify({ app: 'pisos', v: 1, fecha: new Date().toISOString(), S })], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `progreso-pisos-${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    };
    $('#imp').onchange = async (e) => {
      const file = e.target.files[0];
      if (!file) return;
      try {
        const data = JSON.parse(await file.text());
        if (data.app !== 'pisos' || !data.S || typeof data.S.q !== 'object') throw new Error('formato');
        S = Object.assign({ q: {}, f: {}, c: {}, sims: [] }, data.S);
        save(); toast('Progreso importado');
      } catch { toast('Ese archivo no es una copia válida'); }
      e.target.value = '';
    };
    view.querySelectorAll('#theme .chip').forEach((b) => (b.onclick = () => {
      applyTheme(b.dataset.v);
      try { localStorage.setItem('pisos-tema', b.dataset.v); } catch { /* ignorar */ }
      viewAjustes();
    }));
    $('#reset').onclick = () => {
      if (!window.confirm('¿Seguro? Se borrará todo tu progreso.')) return;
      S = { q: {}, f: {}, c: {}, sims: [] }; save(); toast('Progreso borrado');
    };
  }
  function applyTheme(v) {
    if (v === 'light' || v === 'dark') document.documentElement.dataset.theme = v;
    else delete document.documentElement.dataset.theme;
  }
  try { applyTheme(localStorage.getItem('pisos-tema')); } catch { /* ignorar */ }

  // ---------- Instalación ----------
  let deferredPrompt = null;
  const standalone = () => window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    $('#install').hidden = false;
  });
  $('#install').onclick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    $('#install').hidden = true;
  };
  window.addEventListener('appinstalled', () => { $('#install').hidden = true; toast('App instalada'); });
  function installHint() {
    if (standalone() || !isIOS) return '';
    return `<div class="card aviso" style="border:0"><b>Instálala en tu iPhone:</b> toca el botón <b>Compartir</b> (□↑) de Safari y elige <b>«Añadir a pantalla de inicio»</b>.</div>`;
  }

  // ---------- Router ----------
  function go(hash) {
    if (location.hash === hash) route(); else location.hash = hash;
  }
  function route() {
    const raw = location.hash.replace(/^#/, '') || '/';
    const [path, qs] = raw.split('?');
    const params = new URLSearchParams(qs || '');
    const parts = path.split('/').filter(Boolean);
    if (parts[0] !== 'quiz') clearInterval(timerId);
    switch (parts[0]) {
      case undefined: return viewHome();
      case 'temario': return viewTemario();
      case 'tema': return viewTema(parts[1]);
      case 'test': return viewTestConfig(params);
      case 'quiz': return viewQuiz();
      case 'resultado': return viewResult();
      case 'tarjetas': return parts[1] ? viewCards(parts[1]) : (F = null, viewCardsHome());
      case 'ajustes': return viewAjustes();
      default: return viewHome();
    }
  }
  window.addEventListener('hashchange', route);
  route();

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
  }
})();
