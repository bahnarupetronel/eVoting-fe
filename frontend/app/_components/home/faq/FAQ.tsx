import globalStyles from "@/_shared/stylesheets/global.module.css";

const FAQ = () => {
  return (
    <div className={globalStyles["container"]}>
      <h2>Întrebări frecvente (FAQ) despre alegerile electorale din România</h2>
      <ul>
        <li>
          <h3>
            Ce documente sunt necesare pentru a vota în alegerile electorale?
          </h3>
          <p>
            Pentru a vota în alegerile electorale din România, ai nevoie de un
            document de identitate valabil, cum ar fi cartea de identitate sau
            pașaportul.
          </p>
        </li>
        <li>
          <h3>Cum pot să-mi exprim votul online?</h3>
          <p>
            Pentru a-ți exprima votul online în alegerile electorale din
            România, accesează platforma de votare online și urmează
            instrucțiunile furnizate acolo. Vei fi ghidat prin procesul de
            votare și vei putea să-ți alegi opțiunile preferate în mod sigur și
            confidențial.
          </p>
        </li>
        <li>
          <h3>
            Pot vota în alegerile electorale din România dacă sunt rezident în
            străinătate?
          </h3>
          <p>
            Da, cetățenii români rezidenți în străinătate au dreptul să voteze
            în alegerile electorale din România. Aceștia pot să-și exprime votul
            prin intermediul secțiilor de votare speciale sau prin votul prin
            corespondență, în funcție de procedurile stabilite de autoritățile
            electorale.
          </p>
        </li>
        <li>
          <h3>
            Cum pot să obțin informații despre rezultatele alegerilor
            electorale?
          </h3>
          <p>
            Pentru a obține informații despre rezultatele alegerilor electorale
            din România, poți accesa direct pe site evenimentul respectiv,
            cautand dupa numele si tipul evenimentului dorit. Fiecare eveniment
            electoral are o sectiune de rezultate accesibila tuturor
            utilizatorilor.
          </p>
        </li>
        <li>
          <h3>
            Care sunt măsurile de securitate luate pentru a proteja
            confidențialitatea votului online?
          </h3>
          <p>
            Platformele de votare online folosesc tehnologii avansate de
            securitate pentru a proteja confidențialitatea și integritatea
            votului. Acestea pot include criptarea datelor, autentificarea în
            doi pași și alte măsuri de securitate pentru a preveni accesul
            neautorizat și fraudele electorale.
          </p>
        </li>
      </ul>
    </div>
  );
};
export default FAQ;
