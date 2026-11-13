// 화면을 그리는 코드입니다. 내용 수정은 data.js에서만 하세요.
(function () {
  var S = window.SITE || {};
  var side = document.getElementById('side');
  var main = document.getElementById('main');
  var body = document.body;
  var lang = S.defaultLang || 'ko';

  try {
    var saved = localStorage.getItem('lang');
    if (S.showLangToggle && (saved === 'ko' || saved === 'en')) lang = saved;
  } catch (e) {}

  function setLang(l) {
    lang = l;
    body.classList.remove('lang-ko', 'lang-en');
    body.classList.add('lang-' + l);
    try { localStorage.setItem('lang', l); } catch (e) {}
    document.title = currentTitle();
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function br(s) { return esc(s).replace(/\n/g, '<br>'); }

  // 글자: "문자열" 또는 { ko: "...", en: "..." }
  function t(v) {
    if (v == null || v === '') return '';
    if (typeof v !== 'object') return br(v);
    var ko = v.ko || '', en = v.en || v.ko || '';
    if (ko === en) return br(ko);
    return '<span class="ko">' + br(ko) + '</span><span class="en">' + br(en) + '</span>';
  }
  function plain(v) {
    if (v == null) return '';
    if (typeof v !== 'object') return String(v);
    return v[lang] || v.ko || '';
  }

  function items(list) {
    if (!list || !list.length) return '';
    return '<div class="items">' + list.map(function (w) {
      return '<a class="item" href="#' + esc(w.id) + '" data-id="' + esc(w.id) + '">' + t(w.title) + '</a>';
    }).join('') + '</div>';
  }

  function sideHTML() {
    var h = '<a class="name" href="#">' + esc(S.name || '') + '</a><nav>';
    h += '<div class="group"><span class="head">Films</span>' + items(S.films) + '</div>';
    h += '<div class="group"><span class="head">Photos</span>' + items(S.photos) + '</div>';
    h += '<div class="group"><a class="head" href="#cv" data-id="cv">CV</a></div>';
    h += '</nav><div class="contact">';
    (S.contact || []).forEach(function (c) {
      var ext = /^https?:/.test(c.url) ? ' target="_blank" rel="noopener"' : '';
      h += '<a href="' + esc(c.url) + '"' + ext + '>' + esc(c.text) + '</a>';
    });
    if (S.showLangToggle) {
      h += '<div class="lang"><button data-l="ko">KO</button> / <button data-l="en">EN</button></div>';
    }
    return h + '</div>';
  }

  function mediaHTML(m) {
    if (typeof m === 'string') m = { type: 'image', src: m };
    var cap = m.caption ? '<p class="cap">' + t(m.caption) + '</p>' : '';
    var inner = '';
    switch (m.type) {
      case 'image':
        inner = '<img src="' + esc(m.src) + '" alt="' + esc(plain(m.alt) || '') + '" loading="lazy">';
        break;
      case 'vimeo':
        inner = '<div class="embed"><iframe src="https://player.vimeo.com/video/' + esc(m.id) +
          '" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>';
        break;
      case 'youtube':
        inner = '<div class="embed"><iframe src="https://www.youtube-nocookie.com/embed/' + esc(m.id) +
          '" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>';
        break;
      case 'pdf':
        inner = '<iframe class="pdf" src="' + esc(m.src) + '"></iframe>';
        cap = '<p class="cap"><a href="' + esc(m.src) + '" target="_blank" rel="noopener">PDF ↗</a></p>' + cap;
        break;
      case 'audio':
        inner = '<audio controls preload="none" src="' + esc(m.src) + '"></audio>';
        break;
      case 'embed':
        inner = '<div class="embed-fixed"><iframe src="' + esc(m.url) + '" style="height:' +
          (parseInt(m.height, 10) || 166) + 'px" loading="lazy" allow="autoplay"></iframe></div>';
        break;
      default:
        return '';
    }
    return '<figure>' + inner + cap + '</figure>';
  }

  function sectionsHTML(list) {
    return (list || []).map(function (s) {
      var h = '<section class="sec">';
      if (s.heading) h += '<h2>' + t(s.heading) + '</h2>';
      if (s.text) h += '<p>' + t(s.text) + '</p>';
      if (s.list && s.list.length) {
        h += '<ul>' + s.list.map(function (li) { return '<li>' + t(li) + '</li>'; }).join('') + '</ul>';
      }
      return h + '</section>';
    }).join('');
  }

  function workHTML(w) {
    var h = '';
    if (w.cover) h += '<div class="cover"><img src="' + esc(w.cover) + '" alt=""></div>';
    h += '<div class="detail"><h1 class="title">' + t(w.title) + '</h1>';
    if (w.subtitle) h += '<p class="subtitle">' + t(w.subtitle) + '</p>';
    if (w.info) h += '<p class="meta">' + t(w.info) + '</p>';
    h += sectionsHTML(w.sections) + '</div>';
    if (w.media && w.media.length) h += '<div class="media">' + w.media.map(mediaHTML).join('') + '</div>';
    return h;
  }

  function find(id) {
    var all = (S.films || []).concat(S.photos || []);
    for (var i = 0; i < all.length; i++) if (all[i].id === id) return all[i];
    return null;
  }

  var current = '';
  function currentTitle() {
    var name = S.name || '';
    if (current === 'cv') return 'CV — ' + name;
    if (current === 'photos') return 'Photos — ' + name;
    var w = current && find(current);
    return w ? plain(w.title) + ' — ' + name : name;
  }

  function route() {
    var id = decodeURIComponent(location.hash.replace(/^#\/?/, ''));
    var html = '';
    if (id === 'cv') html = '<div class="cv">' + sectionsHTML(S.cv) + '</div>';
    else if (id === 'photos') html = '';
    else if (id) {
      var w = find(id);
      if (w) html = workHTML(w); else id = '';
    }
    current = id;
    main.innerHTML = html;
    main.classList.remove('fade');
    void main.offsetWidth;
    if (html) main.classList.add('fade');
    body.classList.toggle('has-sel', !!id);
    Array.prototype.forEach.call(side.querySelectorAll('[data-id]'), function (a) {
      a.classList.toggle('active', a.getAttribute('data-id') === id);
    });
    document.title = currentTitle();
    if (id && window.matchMedia('(max-width: 768px)').matches) main.scrollIntoView();
    else window.scrollTo(0, 0);
  }

  side.innerHTML = sideHTML();
  side.addEventListener('click', function (e) {
    var b = e.target.closest('[data-l]');
    if (b) setLang(b.getAttribute('data-l'));
  });
  setLang(lang);
  window.addEventListener('hashchange', route);
  route();
})();
