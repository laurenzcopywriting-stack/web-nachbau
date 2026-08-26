/*
 * Videos abspielbar machen.
 *
 * Der Baukasten legt im HTML nur die Huelle an: ein Vorschaubild und einen
 * Knopf, dazu die Adresse in `data-video-url`. Das eigentliche Video wird
 * erst beim Klick nachgeladen — von einem Skript, das beim Spiegeln entfernt
 * wurde. In der Kopie passierte darum beim Klick nichts.
 *
 * Diese Datei stellt genau diesen einen Schritt wieder her: Klick -> Video
 * einsetzen und starten. Sonst nichts.
 *
 * Zwei bewusste Abweichungen vom Original:
 *
 *   - youtube-nocookie.com statt youtube.com. Gleiches Bild, aber YouTube
 *     setzt erst beim Abspielen Kennungen statt schon beim Seitenaufruf.
 *   - Geladen wird erst beim Klick, nicht im Voraus. Wer das Video nicht
 *     ansieht, baut auch keine Verbindung zu YouTube auf. Das entspricht
 *     dem Verhalten des Originals und ist datenschutzrechtlich die saubere
 *     Variante.
 */
(function () {
  'use strict';

  /* Holt die Video-Kennung aus den verschiedenen YouTube-Adressformen.
     Auf den Seiten kommen alle drei vor:
       https://youtube.com/shorts/zuMNlkbbxSQ
       https://youtube.com/shorts/hDPaBNDJlLU?feature=share
       https://youtu.be/P_yGfpupWS0?si=D_5iz8044qQNOnBU
     `watch?v=` und `embed/` sind mit abgedeckt, damit spaetere Seiten mit
     anders eingefuegten Adressen ebenfalls laufen. */
  function kennung(url) {
    var m =
      url.match(/[?&]v=([A-Za-z0-9_-]{6,})/) ||
      url.match(/\/shorts\/([A-Za-z0-9_-]{6,})/) ||
      url.match(/\/embed\/([A-Za-z0-9_-]{6,})/) ||
      url.match(/youtu\.be\/([A-Za-z0-9_-]{6,})/);
    return m ? m[1] : null;
  }

  function abspielen(huelle, id) {
    var rahmen = huelle.querySelector('.con-kit-component-video') || huelle;
    var vorschau = huelle.querySelector('.con-kit-component-video-preview');

    // Die Hoehe des Bereichs kommt von der Vorschau. Sie darf deshalb nicht
    // aus dem Fluss genommen werden — sonst klappt der Kasten zusammen und
    // das Video haette keine Hoehe. `visibility` versteckt sie, ohne dass
    // ihr Platz verlorengeht.
    if (vorschau) {
      vorschau.style.setProperty('visibility', 'hidden', 'important');
    }

    if (getComputedStyle(rahmen).position === 'static') {
      rahmen.style.setProperty('position', 'relative', 'important');
    }

    var video = document.createElement('iframe');
    video.src = 'https://www.youtube-nocookie.com/embed/' + id +
                '?autoplay=1&rel=0&playsinline=1';
    video.title = 'Video';
    video.allow = 'accelerometer; autoplay; encrypted-media; picture-in-picture';
    video.setAttribute('allowfullscreen', '');
    video.setAttribute('frameborder', '0');
    video.style.cssText =
      'position:absolute;inset:0;width:100%;height:100%;border:0;' +
      'border-radius:inherit;z-index:2';

    rahmen.appendChild(video);
    huelle.dataset.laeuft = '1';
  }

  function aufbauen() {
    document.querySelectorAll('.con-kit-atom-video[data-video-url]').forEach(function (huelle) {
      // Der Baukasten kennt zwei Arten, ein Video zu zeigen:
      //   image_button — Vorschaubild mit Knopf, Video kommt erst beim Klick
      //   embedded     — Video steht schon als iframe im HTML
      // Nur die erste Art braucht Hilfe. Bei der zweiten wuerde ein zweiter
      // Rahmen ueber dem vorhandenen liegen (auf der Tanzschulseite gemessen:
      // zwei iframes statt einem), darum hier abbrechen.
      if (huelle.querySelector('iframe')) return;

      var id = kennung(huelle.getAttribute('data-video-url') || '');
      if (!id) return;

      var knopf = huelle.querySelector('button') || huelle;
      knopf.style.cursor = 'pointer';

      function starten(e) {
        if (huelle.dataset.laeuft) return;
        e.preventDefault();
        e.stopPropagation();
        abspielen(huelle, id);
      }

      knopf.addEventListener('click', starten);

      // Auch ein Klick aufs Bild startet — so verhaelt es sich im Original,
      // und Besucher treffen den Knopf nicht immer.
      var vorschau = huelle.querySelector('.con-kit-component-video-preview');
      if (vorschau && vorschau !== knopf) vorschau.addEventListener('click', starten);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', aufbauen);
  } else {
    aufbauen();
  }
})();
