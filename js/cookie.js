document.addEventListener("DOMContentLoaded", function () {
  if (document.cookie.indexOf("cookie_hinweis=ok") !== -1) {
    return;
  }

  const banner = document.createElement("div");
  banner.id = "cookie-hinweis";
  banner.innerHTML = `
    Diese Website verwendet ausschließlich technisch notwendige Cookies.
    <a href="impressum.html">Impressum / Datenschutzerklärung</a>
    <button id="cookie-ok">OK</button>
  `;

  document.body.appendChild(banner);

  document.getElementById("cookie-ok").addEventListener("click", function () {
    document.cookie = "cookie_hinweis=ok;max-age=86400;path=/";
    banner.remove();
  });
});
