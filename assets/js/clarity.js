/* Microsoft Clarity — carrega apenas em produção (origamilab.com.br).
   Localhost, previews da Vercel e qualquer outro host são ignorados. */
(function (w, d) {
  var HOSTS_PRODUCAO = ['origamilab.com.br', 'www.origamilab.com.br'];
  if (HOSTS_PRODUCAO.indexOf(w.location.hostname) === -1) return;

  var PROJETO = 'vc6w85nr2e';
  w.clarity = w.clarity || function () { (w.clarity.q = w.clarity.q || []).push(arguments); };

  var s = d.createElement('script');
  s.async = 1;
  s.src = 'https://www.clarity.ms/tag/' + PROJETO;
  var primeiro = d.getElementsByTagName('script')[0];
  primeiro.parentNode.insertBefore(s, primeiro);
})(window, document);
