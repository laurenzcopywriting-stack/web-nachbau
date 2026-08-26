/*
 * Bedienung der Seitenkopien.
 *
 * Die Kopien tragen die Skripte des Baukastens nicht mehr — sie wurden beim
 * Spiegeln entfernt, damit nichts nachtraeglich Inhalte ausblendet oder an
 * den Anbieter zurueckfunkt. Damit fehlt aber auch alles, was auf Klick
 * reagiert. Diese Datei stellt genau das wieder her, nicht mehr:
 *
 *   - FAQ-Akkordeon oeffnen und schliessen
 *   - Menue auf schmalen Fenstern auf- und zuklappen
 *   - Ankersprunge weich statt hart
 *   - Kontaktformular: Eingaben in eine vorbereitete E-Mail uebergeben
 *
 * Zum Setzen der Werte wird durchgaengig `setProperty(..., 'important')`
 * benutzt: korrektur.css haelt einige Zustaende mit `!important` fest, und
 * ein gewoehnlicher Inline-Wert kaeme dagegen nicht an.
 */
(function () {
  'use strict';

  var SANFT = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------------------------------------------- Akkordeon */

  function panelSuchen(eintrag) {
    // Das zugeklappte Panel ist der Nachfahre, der Inhalt hat, aber keine
    // Hoehe — genau daran erkennt man es, ohne Klassennamen zu raten.
    var treffer = null;
    eintrag.querySelectorAll('*').forEach(function (el) {
      if (treffer) return;
      var stil = getComputedStyle(el);
      // Schwelle bewusst niedrig: eine einzeilige Antwort ist nur 24 px hoch.
      // Mit '> 24' fielen genau solche Panels durch und liessen sich nicht
      // oeffnen — auf der Community-Seite betraf das beide FAQ-Eintraege.
      if (el.scrollHeight > 8 && el.getBoundingClientRect().height < 3 && stil.overflow === 'hidden') {
        treffer = el;
      }
    });
    return treffer;
  }

  function akkordeonAufbauen() {
    var eintraege = document.querySelectorAll('[class*="list-item-accordion"]');

    eintraege.forEach(function (eintrag) {
      var panel = panelSuchen(eintrag);
      if (!panel) return;

      var kopf = eintrag.querySelector('[class*="accordion__header"]')
        || eintrag.querySelector('[class*="list-item__header"]')
        || eintrag.firstElementChild;
      if (!kopf) return;

      var offen = false;

      // Tastaturbedienbar machen: die Vorlage nutzt DIVs ohne Rolle.
      kopf.setAttribute('role', 'button');
      kopf.setAttribute('tabindex', '0');
      kopf.setAttribute('aria-expanded', 'false');
      panel.setAttribute('role', 'region');

      if (SANFT) {
        panel.style.setProperty('transition', 'height .28s ease, opacity .22s ease', 'important');
      }

      function umschalten() {
        offen = !offen;
        kopf.setAttribute('aria-expanded', offen ? 'true' : 'false');

        if (offen) {
          panel.style.setProperty('height', panel.scrollHeight + 'px', 'important');
          panel.style.setProperty('opacity', '1', 'important');
          // Nach der Bewegung auf `auto`, damit spaetere Umbrueche — etwa
          // beim Drehen des Geraets — den Text nicht abschneiden.
          window.setTimeout(function () {
            if (offen) panel.style.setProperty('height', 'auto', 'important');
          }, 300);
        } else {
          panel.style.setProperty('height', panel.scrollHeight + 'px', 'important');
          // Ein erzwungener Umbruch, sonst springt es ohne Uebergang zu.
          void panel.offsetHeight;
          panel.style.setProperty('height', '0px', 'important');
          panel.style.setProperty('opacity', '0', 'important');
        }
      }

      kopf.addEventListener('click', function (e) {
        e.preventDefault();
        umschalten();
      });

      kopf.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          umschalten();
        }
      });
    });
  }

  /* -------------------------------------------------------------------- Menue */

  function menueAufbauen() {
    var knopf = document.querySelector('[class*="menu-v2-more"]');
    if (!knopf) return;

    var offen = false;

    knopf.setAttribute('role', 'button');
    knopf.setAttribute('tabindex', '0');
    knopf.setAttribute('aria-expanded', 'false');
    knopf.setAttribute('aria-label', 'Menü öffnen');

    function umschalten() {
      offen = !offen;
      knopf.setAttribute('aria-expanded', offen ? 'true' : 'false');
      knopf.setAttribute('aria-label', offen ? 'Menü schließen' : 'Menü öffnen');

      // Die Menuepunkte liegen im Knopf; sie sind per visibility versteckt.
      knopf.querySelectorAll('a, [class*="menu-v2-item"]').forEach(function (el) {
        el.style.setProperty('visibility', offen ? 'visible' : '', 'important');
      });
      var klappe = knopf.querySelector('[class*="dropdown"], [class*="submenu"], ul');
      if (klappe) {
        klappe.style.setProperty('display', offen ? 'block' : '', 'important');
        klappe.style.setProperty('visibility', offen ? 'visible' : '', 'important');
        klappe.style.setProperty('opacity', offen ? '1' : '', 'important');
      }
    }

    knopf.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      umschalten();
    });

    knopf.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        umschalten();
      }
    });

    // Klick daneben schliesst wieder.
    document.addEventListener('click', function (e) {
      if (offen && !knopf.contains(e.target)) umschalten();
    });
  }

  /* -------------------------------------------------------------------- Anker */

  function ankerAufbauen() {
    document.querySelectorAll('a[href*="#"]').forEach(function (a) {
      var roh = a.getAttribute('href') || '';
      var raute = roh.indexOf('#');
      if (raute < 0) return;

      var kennung = roh.slice(raute + 1);
      if (!kennung) return;

      // Nur Anker auf dieser Seite abfangen.
      var vorne = roh.slice(0, raute);
      if (vorne && vorne.indexOf('#') !== 0 && !/^\.?\/?$/.test(vorne) && vorne.indexOf(location.pathname) !== 0) {
        if (/^https?:/.test(vorne)) return;
      }

      a.addEventListener('click', function (e) {
        var ziel = document.getElementById(kennung)
          || document.querySelector('[name="' + CSS.escape(kennung) + '"]');
        if (!ziel) return;
        e.preventDefault();
        ziel.scrollIntoView({ behavior: SANFT ? 'smooth' : 'auto', block: 'start' });
        history.replaceState(null, '', '#' + kennung);
      });
    });
  }

  /* ----------------------------------------------------------------- Formular */

  var EMPFAENGER = 'laurenz.copywriting@gmail.com';

  /* Ordnet ein sichtbares Feld einem Formularnamen zu.
     Der Baukasten vergibt weder `name` noch stabile `id` — die IDs sind von
     React erzeugt (`:R2cddpkqfl4n:`) und aendern sich bei jedem Neubau. Die
     Platzhalter sind das einzig Verlaessliche. */
  function feldName(el) {
    var ph = (el.placeholder || '').toLowerCase();
    if (ph.indexOf('alex') >= 0) return 'vorname';
    if (ph.indexOf('weber') >= 0) return 'nachname';
    if (el.type === 'email') return 'email';
    if (el.tagName === 'SELECT') return 'vorwahl';
    if (el.type === 'tel') return 'telefon';
    return null;
  }

  function felderLesen() {
    var werte = {};
    document.querySelectorAll('input, select, textarea').forEach(function (el) {
      // Die verdeckte Zwillingsfassung fuer die Netlify-Erkennung auslassen,
      // sonst wuerden ihre leeren Felder die echten Eingaben ueberschreiben.
      if (el.closest('form[name="kontakt"]')) return;
      var name = feldName(el);
      if (!name) return;
      var wert = (el.value || '').trim();
      if (wert) werte[name] = wert;
    });
    return werte;
  }

  function perMail(werte) {
    var zeilen = Object.keys(werte).map(function (k) { return k + ': ' + werte[k]; });
    window.location.href =
      'mailto:' + EMPFAENGER +
      '?subject=' + encodeURIComponent('Anfrage über arl-consulting.de') +
      '&body=' + encodeURIComponent(zeilen.join('\n'));
  }

  /* Schickt die Anfrage an die eigene Annahmestelle.

     Frueher ging das an Netlify Forms. Nach dem Umzug auf Cloudflare gibt es
     diesen Dienst nicht mehr; an seine Stelle tritt /api/kontakt, eine
     Pages Function, die jede Anfrage zuerst ablegt und danach zu versenden
     versucht. Siehe werkzeug/formular/kontakt.js.

     Der Weg wird nicht mehr am HTML erkannt, sondern ausprobiert: die
     Annahmestelle antwortet, oder sie tut es nicht. Das ist verlaesslicher
     als jede Vorab-Erkennung — auf GitHub Pages und beim Oeffnen als Datei
     gibt es sie schlicht nicht, dort greift der Rueckfall aufs Mailprogramm. */
  function perAnnahme(werte, fertig) {
    var daten = new URLSearchParams();
    daten.append('seite', location.pathname);
    Object.keys(werte).forEach(function (k) { daten.append(k, werte[k]); });

    fetch('/api/kontakt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: daten.toString()
    }).then(function (a) {
      if (!a.ok) { fertig(false); return; }
      return a.json().then(function (d) { fertig(!!(d && d.ok)); })
                     .catch(function () { fertig(false); });
    }).catch(function () {
      fertig(false);
    });
  }

  function formularAufbauen() {
    var knopf = null;
    document.querySelectorAll('button, [class*="component-button"]').forEach(function (el) {
      if (knopf) return;
      if ((el.textContent || '').trim() === 'Angaben absenden') knopf = el;
    });
    if (!knopf) return;

    // Als Datei geoeffnet gibt es keine Annahmestelle — dort gleich das
    // Mailprogramm, statt in einen Fehler zu laufen. Ueberall sonst wird es
    // versucht und bei Misserfolg zurueckgefallen.
    var kannAnnahme = location.protocol === 'http:' || location.protocol === 'https:';
    var laeuft = false;

    knopf.addEventListener('click', function (e) {
      e.preventDefault();
      if (laeuft) return;

      var werte = felderLesen();

      if (!werte.email && !werte.telefon) {
        melden('Bitte hinterlasse eine E-Mail-Adresse oder eine Telefonnummer.');
        return;
      }

      if (!kannAnnahme) {
        perMail(werte);
        return;
      }

      laeuft = true;
      var vorher = knopf.textContent;
      knopf.textContent = 'Wird gesendet …';

      perAnnahme(werte, function (geklappt) {
        laeuft = false;
        knopf.textContent = vorher;

        if (geklappt) {
          melden('Danke — deine Anfrage ist angekommen. Wir melden uns.');
          document.querySelectorAll('input, textarea').forEach(function (el) {
            if (!el.closest('form[name="kontakt"]') && feldName(el)) el.value = '';
          });
        } else {
          // Lieber das Mailprogramm als eine verlorene Anfrage.
          melden('Senden hat nicht geklappt — ich öffne dein E-Mail-Programm.');
          window.setTimeout(function () { perMail(werte); }, 1200);
        }
      });
    });
  }

  function melden(text) {
    var kasten = document.createElement('div');
    kasten.setAttribute('role', 'status');
    kasten.textContent = text;
    kasten.style.cssText =
      'position:fixed;left:50%;bottom:28px;transform:translateX(-50%);z-index:9999;' +
      'padding:14px 22px;border-radius:999px;background:#16203a;color:#fff;' +
      'font:500 14px/1.4 system-ui,sans-serif;box-shadow:0 8px 30px rgba(0,0,0,.25)';
    document.body.appendChild(kasten);
    window.setTimeout(function () { kasten.remove(); }, 4000);
  }

  /* ------------------------------------------------------------------- Start */

  function los() {
    try { akkordeonAufbauen(); } catch (e) { /* eine Panne darf den Rest nicht mitreissen */ }
    try { menueAufbauen(); } catch (e) {}
    try { ankerAufbauen(); } catch (e) {}
    try { formularAufbauen(); } catch (e) {}
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', los);
  } else {
    los();
  }
})();
