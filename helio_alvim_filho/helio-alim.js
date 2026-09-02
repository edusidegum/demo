// ═══════════════════════════════════════════
// Cookie Consent • helio-alvim
// Salvar em: https://edusidegum.github.io/demo/empresas/helio-alvim/helio-alvim.js
// ═══════════════════════════════════════════

(function() {
  'use strict';

  // ── Banner HTML ──
  var bannerHTML =
    '<div id="cookie-banner" style="' +
      'position:fixed;bottom:0;left:0;width:100%;' +
      'background:rgba(13,13,13,0.97);color:#E0E0E0;z-index:99999;' +
      'padding:14px 20px;display:flex;flex-wrap:wrap;align-items:center;' +
      'justify-content:center;gap:12px;font-size:0.82rem;' +
      'font-family:\'Open Sans\',sans-serif;' +
      'border-top:1px solid rgba(120,190,32,0.3);' +
      'box-shadow:0 -4px 20px rgba(0,0,0,0.4);">' +
      '<span style="flex:1 1 auto;text-align:center;max-width:700px;">' +
        '🍪 Este site usa cookies para melhorar sua experiência e analisar o tráfego. ' +
        'Ao continuar navegando, você concorda com nossa ' +
        '<a href="https://edusidegum.github.io/menu/compartilhado/politicadeprivacidade.html" ' +
        'style="color:#78BE20;text-decoration:underline;">Política de Privacidade</a>.' +
      '</span>' +
      '<button id="btn-aceitar-cookies" style="' +
        'background:#78BE20;color:#fff;border:none;padding:8px 22px;' +
        'border-radius:50px;font-weight:700;font-size:0.8rem;cursor:pointer;' +
        'white-space:nowrap;font-family:\'Montserrat\',sans-serif;letter-spacing:0.5px;">' +
        'Aceitar' +
      '</button>' +
    '</div>';

  // ── Injeta banner no body ──
  function injectBanner() {
    var div = document.createElement('div');
    div.innerHTML = bannerHTML;
    document.body.appendChild(div.firstElementChild);
  }

  if (document.body) {
    injectBanner();
  } else {
    document.addEventListener('DOMContentLoaded', injectBanner);
  }

  // ── Lógica de aceite ──
  document.addEventListener('click', function(e) {
    if (e.target && e.target.id === 'btn-aceitar-cookies') {
      var banner = document.getElementById('cookie-banner');
      if (banner) banner.style.display = 'none';
      localStorage.setItem('lgpd_cookies_aceitos', '1');
    }
  });

  // ── Verifica se já aceitou ──
  function hideIfAccepted() {
    var banner = document.getElementById('cookie-banner');
    if (banner && localStorage.getItem('lgpd_cookies_aceitos') === '1') {
      banner.style.display = 'none';
      return true;
    }
    return false;
  }

  if (!hideIfAccepted()) {
    var attempts = 0;
    var timer = setInterval(function() {
      attempts++;
      if (hideIfAccepted() || attempts > 20) clearInterval(timer);
    }, 300);
  }

  // ── Link Política de Privacidade no rodapé ──
  document.addEventListener('DOMContentLoaded', function() {
    var footer = document.querySelector('footer') || document.querySelector('.footer') || document.body;
    var div = document.createElement('div');
    div.style.cssText = 'text-align:center;margin-top:12px;font-size:0.7rem;color:#888;';
    div.innerHTML =
      '<a href="https://edusidegum.github.io/menu/compartilhado/politicadeprivacidade.html" ' +
      'style="color:#888;text-decoration:none;">Política de Privacidade</a>' +
      '<br><a href="https://edusidegum.github.io/" ' +
      'style="color:#888;text-decoration:none;">Desenvolvido por e-Sid Solutions M.E.</a>';
    footer.appendChild(div);
  });

})();
