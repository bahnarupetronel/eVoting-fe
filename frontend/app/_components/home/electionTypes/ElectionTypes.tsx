import globalStyles from "@/_shared/stylesheets/global.module.css";

const ElectionTypes = () => {
  return (
    <div className={globalStyles["container"]}>
      <h1>Tipuri de Alegeri Electorale în România</h1>
      <p>
        Alegerile electorale din România sunt parte integrantă a procesului
        democratic și oferă cetățenilor posibilitatea de a-și exercita dreptul
        la vot și de a-și alege reprezentanții în diferite instituții
        guvernamentale.
      </p>
      <h2>Alegeri Parlamentare</h2>
      <p>
        Alegerile parlamentare sunt cele mai importante alegeri din sistemul
        politic românesc și au loc la fiecare patru ani. În cadrul acestora,
        cetățenii aleg membrii Parlamentului României, care este format din două
        camere: Camera Deputaților și Senatul.
      </p>
      <ul>
        <li>Tipuri: alegeri pentru Camera Deputaților, alegeri pentru Senat</li>
        <li>
          Detalii: Alegerile parlamentare sunt guvernate de legea electorală și
          se desfășoară în conformitate cu procedurile stabilite de Comisia
          Electorală Centrală.
        </li>
      </ul>
      <h2>Alegeri Prezidențiale</h2>
      <p>
        Alegerile prezidențiale au loc o dată la cinci ani și oferă cetățenilor
        posibilitatea de a-și alege președintele țării. Președintele României
        are rolul de șef al statului și reprezentant al poporului român în plan
        intern și internațional.
      </p>
      <ul>
        <li>
          Detalii: Procesul electoral pentru alegerile prezidențiale implică
          campanii electorale, dezbateri, votarea în tururile de scrutin și
          numărarea voturilor conform procedurilor legale.
        </li>
      </ul>
      <h2>Alegeri Locale</h2>
      <p>
        Alegerile locale sunt organizate pentru a alege autoritățile locale,
        precum primarii, consiliile locale și județene și consiliile locale ale
        minorităților naționale.
      </p>
      <ul>
        <li>
          Detalii: Aceste alegeri includ și alegerile pentru consiliile locale
          ale minorităților naționale, în conformitate cu drepturile acestora
          garantate de Constituție.
        </li>
      </ul>
      <h2>Alegeri pentru Parlamentul European</h2>
      <p>
        Alegerile pentru Parlamentul European au loc o dată la cinci ani și
        permit cetățenilor români să-și aleagă reprezentanții în Parlamentul
        European, care este una dintre instituțiile Uniunii Europene.
      </p>
      <ul>
        <li>
          Detalii: România are un număr specific de locuri în Parlamentul
          European, iar cetățenii români au dreptul de a vota pentru candidații
          și partidele politice care își doresc să îi reprezinte în Parlamentul
          European.
        </li>
      </ul>
      <h2>Referendumuri</h2>
      <p>
        Referendumurile sunt consultări populare care au loc pentru a obține
        opinia cetățenilor asupra anumitor probleme de interes național.
      </p>
      <ul>
        <li>
          Detalii: Referendumurile pot fi consultative sau obligatorii și pot fi
          organizate de autoritățile publice sau la inițiativa cetățenilor.
        </li>
      </ul>
    </div>
  );
};
export default ElectionTypes;
