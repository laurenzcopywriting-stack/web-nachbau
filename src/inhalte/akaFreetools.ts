import { AKADEMIE } from './gemeinsam'

/* =========================================================================
   gienow-akademie.onepage.me/freetools — die Online-Broschuere.
   Wortlaut von der Live-Seite; Schreibfehler korrigiert.
   ========================================================================= */

/** Ein Textbaustein im Kapitelfliesstext. */
export type Block =
  | { art: 'p'; text: string }
  | { art: 'h3'; text: string }
  | { art: 'h4'; text: string }
  | { art: 'ul'; punkte: string[] }
  | { art: 'ol'; punkte: string[] }
  | { art: 'hinweis'; text: string }

export const HERO = {
  kicker: 'Kostenlose Infobroschüre',
  marke: 'GienowMethode®',
  unterzeile: 'ist Bewusstsein und Heilkraft',
  text: 'Entdecke 5 kraftvolle Tools, mit denen du dein eigenes DIY-Gesundheitssystem aufbaust – für Körper, Seele und Geist.',
  knopf: { label: 'Inhaltsverzeichnis — direkt lesen ↓', href: '#inhalt-verzeichnis' },
  cue: 'Scrollen',
}

export const VERZEICHNIS = {
  kicker: 'Kapitelübersicht',
  titel: 'Dein Weg durch die Broschüre',
  eintraege: [
    { num: '01', titel: 'Diagnosen sind flüssig', unter: 'deine Ressourcen sind unerschöpflich', werkzeug: null },
    { num: '02', titel: 'SelfClearing', unter: 'Klärung mit einem Qode', werkzeug: 'Tool 1' },
    { num: '03', titel: 'Ein Anwender spricht', unter: 'Mein Weg mit der GienowMethode®', werkzeug: null },
    { num: '04', titel: 'SelbstQ', unter: 'Du findest immer den passenden Zugang', werkzeug: 'Tool 2' },
    { num: '05', titel: 'Altes Wissen', unter: 'neue Möglichkeiten der Informationsmedizin', werkzeug: null },
    { num: '06', titel: 'DIY-Gesundheitssystem', unter: 'Die GienowMethode® in deinen Händen', werkzeug: null },
    { num: '07', titel: 'WortKlänge', unter: 'Eintauchen in die heilsamen Klänge', werkzeug: 'Tool 3' },
    { num: '08', titel: 'Notfallgeste', unter: 'dein sofortiger Zugang zur inneren Kraft', werkzeug: 'Tool 4' },
    { num: '09', titel: 'BoosterGane', unter: 'Dein Einstieg in heilsame Bilder', werkzeug: 'Tool 5' },
  ],
}

export const KAPITEL: {
  num: string
  id: string
  werkzeug: string | null
  titel: string
  bloecke: Block[]
  zitat?: string
  videos?: { id: string; titel: string }[]
}[] = [
  {
    num: '01',
    id: 'kapitel-1',
    werkzeug: null,
    titel: 'Diagnosen sind flüssig – deine Ressourcen sind unerschöpflich',
    bloecke: [
      {
        art: 'p',
        text: 'Viele Menschen erleben Diagnosen wie unwiderrufliche Urteile – als feststehende Fakten, denen man sich fügen muss. Mit der GienowMethode® erleben wir das anders: Diagnosen sind keine starren Wahrheiten, sondern fließende Zustände. Sie verändern sich, gehen ineinander über und lösen sich mit der Zeit auf. Was heute als „unheilbar" gilt, kann sich morgen in eine heilbare Form verwandeln.',
      },
      { art: 'p', text: 'Als Fachärztin habe ich das oft in meiner Praxis erlebt.' },
      { art: 'h3', text: 'Du formst deine Realität' },
      {
        art: 'p',
        text: 'Hirnforschung und Quantenphysik zeigen uns, dass du als Mitgestalter deiner Wirklichkeit deine Haltung, dein Denken und Fühlen bewusst einsetzen kannst, um deine Wahrnehmung zu verändern. Alte schamanische Weisheit spricht vom „Versammlungspunkt" – einer energetischen Quelle, aus der Information und Energie in dich strömen und die deine Realität formen.',
      },
      {
        art: 'p',
        text: 'Wenn du lernst, diesen Versammlungspunkt zu verschieben, kannst du dein Erleben und damit auch deine Gesundheit neu gestalten. Das Leben öffnet dir so viele Möglichkeiten, selbst schwere Diagnosen können sich wandeln. Und das ist nicht so schwierig, wie du vielleicht denkst.',
      },
      { art: 'h3', text: 'Ungeahnte Heilungskräfte in dir' },
      {
        art: 'p',
        text: 'In deinem Körper schlummert ein riesiger Pool von Stammzellen – diese Alleskönner können sich in jede benötigte Zelle verwandeln und helfen deinem Körper, sich nach Verletzungen und Krankheiten selbst zu reparieren.',
      },
      {
        art: 'p',
        text: 'Dazu kommt deine mächtige innere Apotheke: Tausende körpereigene Substanzen wie Schmerzmittel, Entzündungshemmer, Hormone und vieles mehr stehen dir zur Verfügung – bereit, aktiviert zu werden.',
      },
      { art: 'p', text: 'Leider sind diese Ressourcen oft blockiert, z. B. durch Giftstoffe, Stress oder Erschöpfung.' },
      { art: 'h3', text: 'Die Kraft der GienowMethode®' },
      {
        art: 'p',
        text: 'Genau hier setzt die GienowMethode® an: Mit jeder Anwendung aktivierst du deine natürlichen Heilkräfte. Du öffnest dich Schritt für Schritt deinem eigenen Heilungspotenzial und du erinnerst dich daran, wer du wirklich bist – körperlich, seelisch und geistig.',
      },
      {
        art: 'p',
        text: 'So verlieren Krankheiten ihren starren Charakter und Heilung wird möglich. Du wirst frei in Liebe. Du wirst wieder zur aktiven Gestalterin oder zum aktiven Gestalter deines Lebensprozesses.',
      },
    ],
    zitat: '„Diagnosen sind nicht endgültig – Du bist die Zauberin"',
  },
  {
    num: '02',
    id: 'kapitel-2',
    werkzeug: 'Tool Nr. 1',
    titel: 'SelfClearing – Klärung deiner inneren und äußeren Räume mit einem Qode',
    bloecke: [
      { art: 'p', text: 'Beginnen wir mit deiner ersten Anwendung: du schaust dir einen Qode an.' },
      {
        art: 'p',
        text: 'Qodes heißen die Informationseinheiten in der GienowMethode, die ähnlich wie ein QR-Code aussehen. Sie können von deinem Geist gelesen werden, nicht aber von deinem Verstand. Und genau das ist beabsichtigt. Wir sehen die Wirkung der Qodes in deinem Leben, in deinem Körper, deiner Seele und deinem Geist.',
      },
      {
        art: 'p',
        text: 'Heilungsprozesse geraten ins Stocken, wenn Körper, Seele und Geist von Belastungen blockiert sind – sei es durch Gifte, angestaute Gefühle oder festgefahrene Gedankenmuster. Reinigung ist immer der erste Schritt, deshalb beginnen wir mit dem Qode, der SelfClearing heißt.',
      },
      { art: 'p', text: 'Du schaust den Qode in diesem Kapitel einfach an. Automatisch nimmt dein System die Information auf.' },
      {
        art: 'p',
        text: 'Dieser Self-Clearing-Qode unterstützt dich dabei, deine Blockaden zu lösen und den natürlichen Fluss deiner Lebenskraft wiederherzustellen.',
      },
      {
        art: 'hinweis',
        text: '72 sek — Der Qode erscheint im Video automatisch. Er taucht im 72-Sekunden-Rhythmus auf und verschwindet wieder – du musst die Augen nicht manuell schließen oder öffnen. Das Video übernimmt den Takt für dich.',
      },
      { art: 'h3', text: 'Die nötige Information wird dir durch den Qode vermittelt' },
      {
        art: 'p',
        text: 'Stell dir einfach vor, die benötigte Information für dich steckt hier nicht in einer Tablette, sondern in dem Qode.',
      },
      { art: 'h3', text: 'So wendest du den Qode an' },
      {
        art: 'p',
        text: 'Der Qode wird im Video in einem Rhythmus angezeigt, in dem er mehrmals im Wechsel auftaucht und verschwindet.',
      },
      {
        art: 'p',
        text: 'Nimm eine entspannte Haltung ein, atme einmal bewusst ein und aus und wenn du relaxt bist, klicke auf das Video und halte die Augen offen. Schließe sie nicht, bis das Video vorbei ist. Am Ende atmest du bewusst noch einmal ein und aus.',
      },
      { art: 'p', text: 'Der Qode ist jetzt in dir aktiviert.' },
      {
        art: 'p',
        text: 'Für die Klärung äußerer Räume aktivierst du ihn auf dieselbe Weise und legst ihn eine Zeit lang in den Raum, der gereinigt werden soll. Beobachte die Veränderung und vernichte ihn anschließend.',
      },
      { art: 'h4', text: 'Reinigung im Inneren' },
      { art: 'p', text: 'Der Qode gibt dir die Information, loszulassen, was dir nicht mehr dient, z. B.:' },
      {
        art: 'ul',
        punkte: [
          'nach einem Essen, das dir nicht bekommt',
          'wenn du Gefühle anderer Menschen übernommen hast',
          'wenn alte Glaubenssätze oder Ängste dich hemmen',
        ],
      },
      { art: 'p', text: 'Eine Klientin verlor nach nur einer Anwendung ihre Flugangst.' },
      { art: 'h4', text: 'Reinigung im Außen' },
      { art: 'p', text: 'Auch äußere Räume lassen sich mit dem Self-Clearing-Qode klären, etwa:' },
      {
        art: 'ul',
        punkte: [
          'bei störenden Gerüchen nach Renovierungen',
          'nach anstrengendem Besuch, um den Raum zu reinigen',
          'wenn hartnäckiger Geruch oder „schwere Luft" im Raum hängenbleibt',
        ],
      },
      { art: 'h4', text: 'Reinigung als erster Schritt' },
      {
        art: 'p',
        text: 'Das Self-Clearing ist wie ein inneres und äußeres Lüften. Es schafft Platz für Neues und öffnet Räume für eine neue Realität in dir.',
      },
    ],
    zitat: '„Reinigung schafft Raum – für Klarheit, Leichtigkeit und eine neue Realität in dir."',
    videos: [{ id: 'eCEYRNG1sGc', titel: 'SelfClearing Qode' }],
  },
  {
    num: '03',
    id: 'kapitel-3',
    werkzeug: null,
    titel: 'Mein Weg mit der GienowMethode® – Ein Anwender spricht',
    bloecke: [
      {
        art: 'p',
        text: '„Wenn ich erklären soll, was die Gienow Methode für mich ist, erkläre ich es am besten mit den Begründern der Methode, Peter und Gertie Gienow.',
      },
      {
        art: 'p',
        text: 'Als ich erstmals Peter Gienow begegnete, spürte ich sofort etwas Besonderes: Er hat die Fähigkeit, Ungleichgewichte in einem Menschen unmittelbar wahrzunehmen – egal ob körperlich, seelisch oder auf tieferen Ebenen. Noch erstaunlicher ist, dass er zugleich Impulse geben kann, die zurück in Balance und Heilkraft führen.',
      },
      {
        art: 'p',
        text: 'Doch Peter wollte dieses Geschenk nicht nur wenigen zugänglich machen. Er tauchte zusammen mit seiner Frau Gertie Gienow tief in alte Weisheitslehren und in moderne Forschung und fand Möglichkeiten, die heute für viele Menschen verständlich und anwendbar sind.',
      },
      { art: 'h3', text: 'Klarheit durch Bilder' },
      {
        art: 'p',
        text: 'Gertie Gienow beeindruckte mich ebenso: Sie schafft durch ihren spirituellen Zugang einzigartige Bilder, die wie Landkarten der Balance wirken. Schon beim Betrachten spüre ich, wie sich innere Zustände ordnen – als ob unsichtbare Kräfte etwas zurück ins Lot rücken. Ihr spiritueller Zugang und ihre Klarheit sind ein Schlüssel, der Selbstheilung anstößt.',
      },
      { art: 'h3', text: 'Medizinischer Boden' },
      {
        art: 'p',
        text: 'Dr. Gudrun Hasler bringt als Ärztin und Homöopathin ihre medizinische Erfahrung ein. Sie verbindet wissenschaftliche Medizin mit Offenheit für neue Wege und zeigt in ihrer Arztpraxis und in der offenen Beratung, dass schon kleine Impulse große Veränderungen bewirken können. Schon früh spezialisierte sie sich auf die Möglichkeiten der Bewusstwerdung und Heilung, die Gienows in der GienowMethode zusammengefasst haben.',
      },
      { art: 'h3', text: 'Ein Schlüssel für Selbstwirksamkeit' },
      {
        art: 'p',
        text: 'Für mich lösen sich mit der GienowMethode Blockaden, die jahrelang unveränderbar schienen – leicht und überraschend, fast wie Eis, das in der Sonne schmilzt.',
      },
      {
        art: 'p',
        text: 'Die GienowMethode® wurde für mich zu einem Werkzeug, das mir echte Selbstwirksamkeit schenkt. Sie gibt uns die Schlüssel zurück, um unsere Lebenskraft selbst zu öffnen – Schritt für Schritt, hin zu mehr Gesundheit, zu Freiheit und Fülle."',
      },
      { art: 'p', text: 'Wow – was für ein Statement, danke!' },
    ],
    zitat: '„Die GienowMethode® schenkt dir die Schlüssel zurück – für Gesundheit, Fülle und Selbstwirksamkeit."',
  },
  {
    num: '04',
    id: 'kapitel-4',
    werkzeug: 'Tool Nr. 2',
    titel: 'SelbstQ: Du findest immer den passenden Zugang',
    bloecke: [
      { art: 'p', text: 'Einer der überwältigenden Schritte in deine Freiheit ist die Erstellung eines eigenen Qodes.' },
      {
        art: 'p',
        text: 'Du suchst dir deine individuelle Heilinformation, die auf deine Situation JETZT zugeschnitten ist und etwas verändern wird.',
      },
      { art: 'h3', text: 'Dein persönlicher Qode' },
      {
        art: 'p',
        text: 'Beschreibe das, was gerade jetzt ist, und zwar in Körper, Seele und Geist. Stelle daraus 3 Eckpunkte zusammen, die deine Situation beschreiben wie in einem Navi. Beachte Körper, Seele und Geist.',
      },
      { art: 'p', text: 'Ich gebe dir ein Beispiel:' },
      { art: 'p', text: '„Liebeskummer, Haarausfall, Fließschnupfen mit Niesen"' },
      {
        art: 'p',
        text: 'Weil genau das gerade die blödesten Sachen in deinem Leben sind. Es spielt keine Rolle, ob sie für dich etwas miteinander zu tun haben oder nicht.',
      },
      { art: 'h3', text: 'So funktioniert es' },
      {
        art: 'ol',
        punkte: [
          'Du gehst auf selfq.space – die SelfQ App. Dort kannst du mit einer monatlichen Membership deine personalisierten Qodes erstellen und direkt online ansehen.',
          'Du gibst deine 3 Eckpunkte in die Eingabemaske ein.',
          'Dein persönlicher Qode erscheint – direkt auf der Plattform, kein Download nötig.',
          'Der Qode erscheint und verschwindet automatisch im Video im richtigen Rhythmus. Du musst die Augen nicht manuell schließen oder öffnen – das Video übernimmt den Takt vollständig für dich.',
        ],
      },
      {
        art: 'hinweis',
        text: 'Alle Inhalte der SelfQ App sind auch in Videoform verfügbar – so läuft der Prozess vollautomatisch ab, Schritt für Schritt.',
      },
      {
        art: 'p',
        text: 'Danach bleibst du in der Wahrnehmung deines Prozesses. Den nächsten Qode erstellst du dir ebenso, mit den veränderten Punkten.',
      },
      { art: 'p', text: 'Brauchst du dabei Hilfe, buchst du einfach den GienowMethode-Kurs mit mir.' },
      {
        art: 'p',
        text: 'Du kannst für noch mehr Input in die Gienow-Community kommen. Hier helfen wir uns gegenseitig mit den DIY-Tools der GienowMethode. Für größere Projekte kontaktierst du mich am besten direkt.',
      },
    ],
  },
  {
    num: '05',
    id: 'kapitel-5',
    werkzeug: null,
    titel: 'Altes Wissen – neue Möglichkeiten mit der GienowMethode®',
    bloecke: [
      {
        art: 'p',
        text: 'Wir Menschen erleben uns in Zeit und Raum. Vergangenes liegt hinter uns, Zukünftiges vor uns, und unser Raum hat Höhe, Breite und Tiefe. Unsere Wahrnehmung ist genau darauf eingestellt – und funktioniert darin zuverlässig.',
      },
      {
        art: 'p',
        text: 'Doch wenn wir auf Mathematik und Physik schauen, wird sichtbar: Es gibt weit mehr Dimensionen, als wir uns vorstellen können. Dimensionen, die wir nutzen können – um scheinbar Unveränderliches zu wandeln.',
      },
      { art: 'p', text: 'Krankheit kann in Gesundheit übergehen, Mangel in Fülle, alte Muster in neue Chancen.' },
      { art: 'h3', text: 'Das Erbe des alten Wissens' },
      {
        art: 'p',
        text: 'Schon seit Jahrhunderten gibt es Seher*innen, die hinter die bekannten Dimensionen blicken konnten. Ihre Beschreibungen mögen uns heute fremd erscheinen, und doch finden sich erstaunliche Parallelen in moderner Mathematik und Physik.',
      },
      { art: 'p', text: 'Beginnen wir, mit diesen erweiterten Dimensionen zu arbeiten, öffnen sich überraschende Möglichkeiten:' },
      {
        art: 'ul',
        punkte: [
          'Blockaden lösen sich',
          'Möglichkeiten werden freigelegt',
          'Bewusstsein weitet sich',
          'Frieden und Lebenskraft entstehen',
          'Seele, Körper und Geist können heilen.',
        ],
      },
      { art: 'h3', text: 'Die Ebenen in der GienowMethode®' },
      { art: 'p', text: 'In der GienowMethode® unterscheiden wir verschiedene Ebenen:' },
      {
        art: 'ul',
        punkte: [
          'die Ebene der Vergiftung',
          'die Ebene der Raum-Zeit',
          'die Ebene des Zeit-Raums',
          'die Ebene der Information',
          'die göttliche Ebene',
        ],
      },
      {
        art: 'p',
        text: 'Schon Paracelsus hat diese Ebenen beschrieben. Jede Ebene funktioniert auf ihre Weise. Alle Ebenen sind miteinander verbunden. Deshalb lässt sich über die Informationsebene Raum und Zeit berühren – ohne dass ein materieller Eingriff oder eine Tablette nötig ist. Das ermöglicht eine Therapie über die Informationsebene hinein in unseren physischen Körper.',
      },
      { art: 'h3', text: 'Die Erinnerung an dein wahres Sein' },
      {
        art: 'p',
        text: 'Die Ebene der Information erinnert dich an dein wahres Wesen: unendlich, einzigartig, ewig. Rudolf Steiner nannte das dein wahres ICH. Wenn du dich auf diese Resonanz einlässt, stimmst du dich auf eine höhere Oktave deines Seins ein.',
      },
      {
        art: 'p',
        text: 'Verzerrungen, die sich als Krankheit oder Belastung und Herausforderung zeigen, treten nach und nach in den Hintergrund. Es braucht etwas Mut, Altes loszulassen, und manchmal Geduld – doch Schritt für Schritt entfaltet sich deine innere Wahrheit. Und damit geht Heilung einher. Das habe ich als Ärztin so oft gesehen, dass es mich immer noch staunen lässt.',
      },
    ],
    zitat: '„Wenn du dich in deine höheren Dimensionen einschwingst, erwacht deine wahre Natur: gesund, einzigartig, unendlich."',
  },
  {
    num: '06',
    id: 'kapitel-6',
    werkzeug: null,
    titel: 'Die GienowMethode® – Do It Yourself Gesundheitssystem',
    bloecke: [
      {
        art: 'p',
        text: 'Die GienowMethode ist über 40 Jahre hinweg gewachsen und gereift. Immer wieder wurde sie überprüft, erforscht und weiterentwickelt. So ist ein lebendiges System entstanden, das wie ein feines Resonanzfeld mit deiner eigenen Energie arbeitet.',
      },
      {
        art: 'p',
        text: 'Alles Unwirksame wurde wieder losgelassen – was wirkt, wurde verstärkt und erweitert. So hat sich ein sehr praktisches und wirksames DoItYourself-System entwickelt.',
      },
      { art: 'h3', text: 'Wie die GienowMethode zu dir spricht' },
      { art: 'p', text: 'Dein Körper und dein Bewusstsein reagieren auf viele Wege der Wahrnehmung:' },
      {
        art: 'ul',
        punkte: [
          'auf sanfte Fingergesten, die Türen im Körper öffnen (Berührung)',
          'auf äußere Bilder als Verlinkung und Heilimpulse über das Sehen',
          'auf Schwingungen von Klang und Wort über das Hören',
          'auf Sprüh-Impulse, die über das Riechen die alten Bereiche deines Gehirns erreichen',
          'auf das Licht und die Frequenzen deiner Zellen und Organe',
          'auf Informationen, die den Verstand umgehen',
          'auf deine innere Schöpferkraft, die in dir steckt',
        ],
      },
      { art: 'p', text: 'In der GienowMethode® sind alle diese Zugänge heilsam umgesetzt durch:' },
      {
        art: 'ul',
        punkte: [
          'die Fingerapotheke®, der direkte Zugang zu dir selbst',
          'BoosterGane – die Heilbilder',
          'KlangQodes und BoosterGane-Songs',
          'Sussuu® – SprühImpulse, deine Hausapotheke',
          'SelfQ, deine Qodes for Health®',
          'Kurse und Anleitungen in der Gienow-Community',
        ],
      },
      {
        art: 'p',
        text: 'So entsteht ein Zusammenspiel, das dich zurückführt in dein ewiges, unendliches Sein und in deine innere Heilkraft. Und alle Zugänge sind leicht erlernbar. Lass dich nicht von der Fülle irritieren. So wie du sehen und hören und fühlen und riechen kannst, kannst du auch alle diese Zugänge nutzen. Es ist einfacher, als du vielleicht denkst.',
      },
      { art: 'h3', text: 'Dein innerer Zauberkasten' },
      {
        art: 'p',
        text: 'In deinem Körper beherbergst du eine riesige innere Apotheke. Hormone, Schmerzmittel, selbst Gewebekleber und antientzündliche Substanzen stellt dein Körper einfach her.',
      },
      {
        art: 'p',
        text: 'Und das ist noch nicht alles: Du hast einen riesigen Pool an Stammzellen in deinem Körper. Das sind Zellen, die zu jeder benötigten Zelle werden können, die du brauchst. Du kannst alles regenerieren.',
      },
      {
        art: 'p',
        text: 'Manchmal sind diese Ressourcen blockiert oder erschöpft – doch sie lassen sich durch die Impulse der GienowMethode sanft aktivieren und du kannst lernen, sie zu lenken.',
      },
    ],
    zitat: '„Mit der GienowMethode® hältst du dein DIY-Gesundheitssystem in deinen Händen"',
  },
  {
    num: '07',
    id: 'kapitel-7',
    werkzeug: 'Tool Nr. 3',
    titel: 'Eintauchen in die WortKlänge der GienowMethode®',
    bloecke: [
      {
        art: 'p',
        text: 'Um dich mit den heilsamen WortKlängen der GienowMethode vertraut zu machen, lade ich dich ein, in die Klänge hineinzuhören – und achtsam zu spüren, was in dir resoniert.',
      },
      {
        art: 'p',
        text: 'Es darf sein, dass du einen inneren Widerstand oder auch Abwehr fühlst. Beobachte diese Reaktionen einfach in Liebe: Wo trifft dich der Klang? Wo spürst du ihn in deinem Körper?',
      },
      { art: 'h3', text: 'Fließender Klang – wie das Meer' },
      {
        art: 'p',
        text: 'Stell dir vor: Du bist wie flüssiger Klang, ein weites Meer, das wechselnde Strömungen kennt – mal warm, mal kalt – das sich nach jedem Sturm wieder beruhigt.',
      },
      {
        art: 'p',
        text: 'Der fließende Klang kondensiert wieder zu deiner ureigenen Form. Das Meer bleibt das Meer, du bleibst du. Und doch öffnen sich durch diese Klänge neue Möglichkeiten, Heilung und Wachstum.',
      },
      { art: 'h3', text: 'Wo und wie hören?' },
      {
        art: 'p',
        text: 'Schau dich am besten bei deinem Lieblings-Streamingdienst nach den Begriffen SongWriterBooster und Tsoraat um. Sie stehen für unterschiedliche Heilklänge der GienowMethode – Frequenztherapie verbunden mit Bewusstseinsentwicklung.',
      },
      { art: 'h3', text: 'Dein HeilSong – deine persönliche Heilfrequenz' },
      {
        art: 'p',
        text: 'Vielleicht berührt dich einer dieser Klänge sehr und du möchtest tiefer und heilend damit arbeiten. Dann kannst du auf tsoraat.world deinen persönlichen HeilSong erwerben. Er wird so zu deinem ganz eigenen Klangfeld, das dich begleitet und stärkt. Findest du deinen Song dort nicht, schreib uns einfach eine E-Mail.',
      },
    ],
    videos: [
      { id: 'HdA8eqS6jhk', titel: 'Ein Kraftgeber in schwierigen Momenten' },
      { id: 'AObGEyaN3kc', titel: 'Heilung für deine Lunge' },
    ],
  },
  {
    num: '08',
    id: 'kapitel-8',
    werkzeug: 'Tool Nr. 4',
    titel: 'Die Notfallgeste – dein sofortiger Zugang zu Veränderung',
    bloecke: [
      {
        art: 'p',
        text: 'Ein kraftvolles EinstiegsTool der GienowMethode ist die Notfallgeste – eine einfache, aber sehr wirksame Fingergeste, die auf uraltem, weisem Wissen beruht.',
      },
      {
        art: 'p',
        text: 'Stell dir vor, du erlebst plötzlich etwas Erschreckendes: einen Unfall, plötzlichen Schmerz oder eine emotionale Verletzung. Du hast nichts zur Hand, das dir sofort helfen könnte – außer deinen eigenen Fingern. Die hast du immer dabei.',
      },
      { art: 'h3', text: 'So funktioniert die Notfallgeste' },
      {
        art: 'p',
        text: 'Lege beide Daumen aneinander, zusätzlich den kleinen Finger der linken Hand und den Zeigefinger der rechten Hand, sodass alle Fingerspitzen sanft aneinandertreffen und sich zart berühren wie Schmetterlingsflügel.',
      },
      { art: 'p', text: 'Mache diese Geste jetzt gerne gleich mit!' },
      {
        art: 'p',
        text: 'Hole dir einen Stift und male dir jetzt auf jede Fingerspitze einen Punkt, um dich daran zu erinnern, diese Geste heute und in den kommenden Tagen immer wieder zu üben – bis sie dir in Fleisch und Blut übergeht. So baust du in deinem Gehirn eine Schnellstraße, die du später automatisch abrufen kannst, auch wenn dir sonst nichts mehr einfällt.',
      },
      { art: 'h3', text: 'Was passiert dabei?' },
      {
        art: 'p',
        text: 'Halte die Geste ganz sanft und spüre, wie sie sich anfühlt. Vielleicht bemerkst du erst einmal nichts Besonderes – das ist völlig in Ordnung. Vielleicht spürst du auch eine leichte Entspannung, eine stillere Wahrnehmung oder innere Ruhe, die sonst nicht da war.',
      },
      { art: 'p', text: 'Mit dieser Geste betrittst du einen neuen Raum der Möglichkeiten:' },
      {
        art: 'ul',
        punkte: [
          'Dein Körper erhält jetzt mehr Optionen als nur Schmerz oder Panik, die du sonst nach einer Verletzung z. B. empfindest.',
          'Dein Körper öffnet Wege zur Selbstheilung.',
          'Plötzliche, scheinbar ausweglose Momente erhalten eine neue Perspektive.',
        ],
      },
      { art: 'h3', text: 'Übe und nutze sie' },
      {
        art: 'p',
        text: 'Je häufiger du die Notfallgeste anwendest, desto wirksamer wird sie. Dein System stimmt sich darauf ein und nutzt sie immer besser als Soforthilfe in stressigen oder schmerzhaften Situationen. Probiere es aus – du hast deine Kraft immer bei dir!',
      },
    ],
    zitat: '„Die Notfallgeste ist dein sofortiger Zugang zu Ruhe, Kraft und Selbstheilung in jeder Situation."',
  },
  {
    num: '09',
    id: 'kapitel-9',
    werkzeug: 'Tool Nr. 5',
    titel: 'BoosterGane und dein Bilderbewusstsein',
    bloecke: [
      {
        art: 'p',
        text: 'Information, Frequenzen und Schwingungen erinnern dich immer wieder an die tiefe Heilkraft in deinem Inneren. Du bist die SchöpferIn.',
      },
      {
        art: 'p',
        text: 'Du hast bereits Qodes kennengelernt, den SelfClearingQode (Tool Nr. 1) und den SelbstQ (Tool Nr. 2). Sie liefern dir reine Information, mit der dein System arbeiten kann. Du hast die KlangFrequenzen gehört (Tool Nr. 3). Und du hast eine Fingergeste gehalten, die dir in allen Notsituationen hilft: die Notfallgeste (Tool Nr. 4). Damit hast du gleich vier kraftvolle HeilWerkzeuge zur Hand.',
      },
      { art: 'p', text: 'Jetzt kannst du noch einen Schritt weitergehen: Tool Nr. 5 ist der Booster für dein inneres Heilsystem.' },
      {
        art: 'p',
        text: 'Dein Bilderbewusstsein birgt eine unerschöpfliche Quelle für die Harmonisierung und Heilung deines Körpers, deiner Seele und deines Geistes.',
      },
      {
        art: 'p',
        text: 'Die Heilbilder der GienowMethode heißen BoosterGane – von Booster und (Or)gane. Sie sind zur Heilung geschaffen und arbeiten mit deinem Bilderbewusstsein. Sie berühren sanft dein innerstes Sein, Liebe ist ihre Grundlage und mit ihnen ist schon so viel Wundervolles geschehen.',
      },
      {
        art: 'p',
        text: 'Die Liebe, die in ihnen verborgen ist, ihre Farben und Formen schaffen dir einen Zugang zu deiner inneren Kraft. So können nicht nur Organe und Zellen regenerieren; es treten auch neue Verarbeitungsmöglichkeiten in dein Leben.',
      },
      {
        art: 'p',
        text: 'Stell dir vor, das Bild, das du anschaust – das BoosterGan – macht einen kleinen Ausschnitt einer gewaltigen Kraft sichtbar, die sonst für dein Auge unsichtbar bleibt. Schwingungen, Informationen, Frequenzen wirken, auch wenn du sie nicht bewusst wahrnimmst – und dennoch entfalten sie heilende Wirkung. Manche Menschen spüren sofort innere Veränderungen: Zustände ordnen sich, neue Klarheit stellt sich ein.',
      },
      {
        art: 'p',
        text: 'Die Bilder schenken dir einen Zugang in dein ureigenes, göttliches Wesen. Hier bist du frei, hier beginnt Heilung von innen heraus. Das kannst du lernen – einfach, intuitiv.',
      },
    ],
  },
]

export const ERFAHRUNGEN = {
  label: 'Schau dir viele Erfahrungsberichte und Beispiele an →',
  href: AKADEMIE.boosterganeFeedback,
}

export const ABSCHLUSS = {
  vorspann: 'Das kannst du auch. Jetzt bist du dran…',
  titel: 'Werde Teil der Gienow-Community',
  absaetze: [
    'Was, wenn es eine Community gäbe, die dich dabei unterstützt, deine innere Heilkraft zu finden und auszubilden? Was, wenn du nicht allein bist?',
    'Dort erfährst du alle Hintergründe, du lernst mit deinen neuen Heilkräften umzugehen und einzelne Schritte zu begleiten. Eine ganze Akademie steht dir zur Verfügung. Du bist niemals allein, 24/7 hast du mitfühlende Menschen und ärztliche Kompetenz um dich und Hilfe bei der Umsetzung. Hier ist ein Netzwerk der Liebe und Fürsorge füreinander entstanden.',
    'Du kannst völlig selbstständig und intuitiv Großes für dich bewirken, für deine Gesundheit und für dein Leben, und wir lassen dich nicht allein.',
    'Du bist die ZauberIn in deinem Leben.',
    'Ich zeige dir, wie du mit den Heilbildern, den Qodes und der Fingerapotheke völlig selbstständig und intuitiv arbeitest. Für dich, für deine Familie, für deine Tiere und deine Freunde.',
    'Deine Offenheit ist die einzige Voraussetzung.',
  ],
  unterTitel: 'Dein Einstieg in die GienowMethode: die Community',
  unterAbsaetze: [
    'Hier lernst du alles, was du brauchst, um dein DIY-Gesundheitssystem zu bauen. Und in deinem Alltag intuitiv und sicher zu nutzen – für Gesundheit, Heilung, Gelassenheit und Lebenskraft. Für mehr Licht und Liebe in deinem Leben.',
    'Egal, welche Beschwerden, Krankheiten oder Katastrophen dich beschäftigen: Die GienowCommunity begleitet dich Schritt für Schritt – hin zu Selbstwirksamkeit, Gesundheit und Schönheit in deinem Leben und in deinem einzigartigen Menschsein.',
  ],
  knopf: { label: 'Hier kommst du in die Community →', href: AKADEMIE.digistore },
  signatur: 'GienowAkademie · Dr. med. Gudrun Hasler',
}
