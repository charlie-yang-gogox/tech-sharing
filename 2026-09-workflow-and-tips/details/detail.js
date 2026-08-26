/* Detail-page behaviour — tooltip popover, zoom controls, bilingual toggle.
   Same three blocks the June detail pages inline; shared here across the September pages. */
(function () {
    var tip = document.getElementById('ov-tip');
    if (!tip) return;
    var tagEl  = tip.querySelector('.ov-tip-tag');
    var nameEl = tip.querySelector('.ov-tip-name');
    var descEl = tip.querySelector('.ov-tip-desc');
    var PAD = 14;
    function classFromTag(tag) {
      var t = (tag || '').toUpperCase();
      if (t.indexOf('GUARD') >= 0) return 'guard';
      if (t.indexOf('SCAN') >= 0) return 'scan';
      if (t.indexOf('LOCK') >= 0) return 'lock';
      if (t.indexOf('FANOUT') >= 0) return 'fanout';
      if (t.indexOf('MONITOR') >= 0) return 'monitor';
      if (t.indexOf('RECONCILE') >= 0) return 'reconcile';
      if (t.indexOf('CLASSIFY') >= 0) return 'classify';
      if (t.indexOf('FILTER') >= 0 || t.indexOf('SCREEN') >= 0) return 'filter';
      if (t.indexOf('JUDGE') >= 0 || t.indexOf('REVIEW') >= 0) return 'judge';
      if (t.indexOf('LOOP') >= 0) return 'loop';
      if (t.indexOf('WRITE') >= 0 || t.indexOf('ADOPT') >= 0) return 'write';
      if (t.indexOf('HUMAN') >= 0 || t.indexOf('HITL') >= 0) return 'human';
      return '';
    }
    function showTipFor(el) {
      var tag  = el.getAttribute('data-tip-tag')  || '';
      var name = el.getAttribute('data-tip-name') || '';
      var lang = document.body.getAttribute('data-lang') || 'zh';
      var desc = (lang === 'en' ? el.getAttribute('data-tip-desc-en') : null)
              || el.getAttribute('data-tip-desc-zh')
              || el.getAttribute('data-tip-desc') || '';
      tagEl.className = 'ov-tip-tag ' + classFromTag(tag);
      tagEl.textContent = tag;
      nameEl.textContent = name;
      descEl.textContent = desc;
      tip.classList.add('show');
    }
    function hideTip() { tip.classList.remove('show'); }
    function moveTip(e) {
      var x = e.clientX + PAD;
      var y = e.clientY + PAD;
      var rect = tip.getBoundingClientRect();
      if (x + rect.width  > window.innerWidth  - PAD) x = e.clientX - rect.width  - PAD;
      if (y + rect.height > window.innerHeight - PAD) y = e.clientY - rect.height - PAD;
      if (x < PAD) x = PAD;
      if (y < PAD) y = PAD;
      tip.style.left = x + 'px';
      tip.style.top  = y + 'px';
    }
    document.querySelectorAll('.flow-svg-wrap svg [data-tip-name]').forEach(function (el) {
      el.style.cursor = 'help';
      el.addEventListener('mouseenter', function () { showTipFor(el); });
      el.addEventListener('mousemove', moveTip);
      el.addEventListener('mouseleave', hideTip);
    });
  })();

  // === Zoom controls (− + 全覽) ===
  (function () {
    var svg = document.querySelector('.flow-svg-wrap svg');
    if (!svg) return;
    var board = svg.parentElement;
    var label = document.querySelector('.zoom-level');
    var vbW = (svg.viewBox && svg.viewBox.baseVal && svg.viewBox.baseVal.width) || 1240;

    var STEPS = ['fit', 1.0, 1.4, 1.8, 2.4, 3.0];
    var idx = 0;

    function applyZoom() {
      var z = STEPS[idx];
      var w;
      if (z === 'fit') {
        var pad = 24;
        w = Math.max(320, board.clientWidth - pad);
      } else {
        w = Math.round(vbW * z);
      }
      svg.style.width = w + 'px';
      svg.style.minWidth = '0';
      svg.style.maxWidth = 'none';
      if (label) {
        var pct = Math.round((w / vbW) * 100);
        var lang = document.body.getAttribute('data-lang') || 'zh';
        var prefix = '';
        if (z === 'fit') prefix = (lang === 'en' ? 'Fit ' : '全覽 ');
        label.textContent = prefix + pct + '%';
      }
    }

    function zoomIn()  { if (idx < STEPS.length - 1) { idx++; applyZoom(); } }
    function zoomOut() { if (idx > 0) { idx--; applyZoom(); } }
    function fit()     { idx = 0; applyZoom(); board.scrollTo({ left: 0, top: 0, behavior: 'smooth' }); }

    var btnIn  = document.querySelector('[data-zoom-in]');
    var btnOut = document.querySelector('[data-zoom-out]');
    var btnFit = document.querySelector('[data-zoom-fit]');
    if (btnIn)  btnIn.addEventListener('click', zoomIn);
    if (btnOut) btnOut.addEventListener('click', zoomOut);
    if (btnFit) btnFit.addEventListener('click', fit);

    document.addEventListener('keydown', function (e) {
      if (e.target && e.target.matches && e.target.matches('input, textarea, select')) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      var k = e.key;
      if (k === '+' || k === '=') { e.preventDefault(); zoomIn(); }
      else if (k === '-' || k === '_') { e.preventDefault(); zoomOut(); }
      else if (k === '0') { e.preventDefault(); fit(); }
    });

    var resizeTimer;
    window.addEventListener('resize', function () {
      if (idx !== 0) return;
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(applyZoom, 80);
    });

    requestAnimationFrame(applyZoom);
  })();
(function () {
    var body = document.body;
    var stored = null;
    try { stored = localStorage.getItem('tech-sharing-lang'); } catch (e) {}
    if (stored === 'zh' || stored === 'en') {
      body.setAttribute('data-lang', stored);
    }
    function syncButtons() {
      var lang = body.getAttribute('data-lang') || 'zh';
      document.querySelectorAll('.pill.lang button').forEach(function (b) {
        b.classList.toggle('active', b.getAttribute('data-set-lang') === lang);
      });
      document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'zh-Hant');
    }
    syncButtons();
    document.querySelectorAll('.pill.lang button').forEach(function (b) {
      b.addEventListener('click', function () {
        var lang = b.getAttribute('data-set-lang');
        body.setAttribute('data-lang', lang);
        try { localStorage.setItem('tech-sharing-lang', lang); } catch (e) {}
        syncButtons();
      });
    });
  })();