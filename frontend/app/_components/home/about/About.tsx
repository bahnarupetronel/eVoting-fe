import globalStyles from "@/_shared/stylesheets/global.module.css";

const About = () => {
  return (
    <div className={globalStyles["container"]}>
      <h1>Despre eVoting</h1>
      <p>
        Bine ai venit pe platforma noastră de alegeri online! Suntem dedicați
        oferirii unei experiențe de votare sigură, transparentă și accesibilă
        pentru toți utilizatorii noștri.
      </p>
      <h2>Ce oferim?</h2>
      <p>
        Platforma noastră de alegeri online îți oferă posibilitatea de a
        participa la alegeri și referendumuri din confortul casei tale.
        Beneficiile includ:
      </p>
      <ul>
        <li>Acces ușor și comod la procesul de votare</li>
        <li>Securitate și confidențialitate pentru voturile tale</li>
        <li>
          O gamă largă de opțiuni de vot, inclusiv pentru alegerile
          parlamentare, prezidențiale, locale și europene
        </li>
        <li>
          Posibilitatea de a te informa în detaliu despre candidați și opțiunile
          de vot înainte de a-ți exprima opțiunea
        </li>
      </ul>
      <h2>Cum funcționează?</h2>
      <p>Procesul de votare pe platforma noastră este simplu și intuitiv:</p>
      <ol>
        <li>Înregistrează-te sau autentifică-te în contul tău</li>
        <li>
          Verifică-ți identitatea și contul de email conform instrucțiunilor
          noastre
        </li>
        <li>Alege evenimentul electoral la care vrei să participi</li>
        <li>Exploră opțiunile de vot și candidații disponibili</li>
        <li>Votează în mod confidential pentru opțiunea dorită</li>
        <li>
          Primești confirmarea votului tău și posibilitatea de a urmări
          rezultatele alegerilor
        </li>
      </ol>
      <h2>De ce să alegi platforma noastră?</h2>
      <p>
        Există mai multe motive pentru care ar trebui să alegi platforma noastră
        de alegeri online:
      </p>
      <ul>
        <li>
          Transparență și integritate: ne angajăm să oferim un proces de votare
          corect și transparent pentru toți utilizatorii noștri
        </li>
        <li>
          Securitate: folosim tehnologii avansate pentru a-ți proteja datele și
          pentru a asigura confidențialitatea votului tău
        </li>
        <li>
          Accesibilitate: platforma noastră este concepută pentru a fi ușor de
          utilizat de către toți utilizatorii, indiferent de vârstă sau
          pregătire tehnică
        </li>
        <li>
          Implicare civică: încurajăm participarea activă în procesul democratic
          și oferim resurse și informații relevante pentru a-ți face alegerea
          informata
        </li>
      </ul>
    </div>
  );
};
export default About;
