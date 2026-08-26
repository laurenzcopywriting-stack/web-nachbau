/*
 * Bewegung im Hero-Bereich.
 *
 * Markup und CSS des Heros stecken bereits in der gespiegelten Seite — der
 * Baukasten traegt sie als eigenen HTML-Block. Nur das Skript fehlte: beim
 * Spiegeln wurden alle Skripte entfernt, damit nichts nachtraeglich Inhalte
 * ausblendet oder an den Anbieter zurueckfunkt. Diese Datei stellt die
 * Bewegung wieder her, nicht mehr:
 *
 *   - Der Farbschein hinter der Ueberschrift folgt dem Mauszeiger.
 *   - Der Knopf zieht den Zeiger leicht an und federt beim Verlassen zurueck.
 *
 * Der Ankersprung auf das Formular ist bewusst NICHT hier: bedienung.js faengt
 * bereits jeden Link mit Raute ab und scrollt weich. Zwei Handler auf demselben
 * Knopf wuerden denselben Sprung doppelt ausloesen.
 *
 * GSAP liegt unter dateien/gsap.min.js im Projekt statt am CDN — die Seite
 * bleibt damit in sich geschlossen und laedt auch dann, wenn ein Besucher
 * fremde Skript-Hosts blockiert.
 */
(function () {
  'use strict';

  // Wer Bewegung reduziert haben moechte, bekommt den ruhenden Ausgangszustand.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (typeof gsap === 'undefined') return;

  /* ------------------------------------------------------- Farbschein */

  var hero = document.querySelector('.hero');
  var radial = document.querySelector('.hero-radial');

  if (hero && radial) {
    // Ruhelage entspricht den Vorgabewerten im CSS: var(--mx, 75%).
    var stand = { x: 75, y: 40 };

    function scheinSetzen() {
      radial.style.setProperty('--mx', stand.x.toFixed(1) + '%');
      radial.style.setProperty('--my', stand.y.toFixed(1) + '%');
      // Der zweite, goldene Schein laeuft gedaempft mit, sonst wirken beide
      // wie eine einzige Flaeche.
      radial.style.setProperty('--mx2', (stand.x * 0.9 + 10).toFixed(1) + '%');
      radial.style.setProperty('--my2', (stand.y * 0.85 + 8).toFixed(1) + '%');
    }

    hero.addEventListener('mousemove', function (e) {
      var r = hero.getBoundingClientRect();
      gsap.to(stand, {
        x: ((e.clientX - r.left) / r.width) * 100,
        y: ((e.clientY - r.top) / r.height) * 100,
        duration: 0.6,
        ease: 'power2.out',
        onUpdate: scheinSetzen
      });
    });

    hero.addEventListener('mouseleave', function () {
      gsap.to(stand, {
        x: 75, y: 40,
        duration: 1.8,
        ease: 'power3.out',
        onUpdate: scheinSetzen
      });
    });
  }

  /* ------------------------------------------------------ Knopf */

  var knopf = document.getElementById('hero-cta');

  if (knopf) {
    knopf.addEventListener('mousemove', function (e) {
      var r = knopf.getBoundingClientRect();
      gsap.to(knopf, {
        x: (e.clientX - r.left - r.width / 2) * 0.35,
        y: (e.clientY - r.top - r.height / 2) * 0.35,
        duration: 0.35,
        ease: 'power2.out'
      });
    });

    knopf.addEventListener('mouseleave', function () {
      gsap.to(knopf, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.45)' });
    });
  }
})();
