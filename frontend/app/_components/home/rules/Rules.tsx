import globalStyles from "@/_shared/stylesheets/global.module.css";

const Rules = () => {
  return (
    <div className={globalStyles["container"]}>
      <header>
        <h1>Alegeri Electorale în România</h1>
        <p>Informații despre regulile și procedurile electorale din România.</p>
        <h2>Drepturile și Regulile Alegătorilor</h2>
        <ul>
          <li>
            <a href="#drepturi">Drepturile Alegătorilor</a>
            <p>
              Drepturile alegătorilor sunt fundamentale pentru un proces
              electoral corect și transparent. Ele includ dreptul de a vota,
              dreptul la confidențialitatea votului și dreptul la acces la
              informații despre candidați și partide politice.
            </p>
          </li>
          <li>
            <a href="#reguli">Regulile Alegătorilor</a>
            <p>
              În timpul procesului electoral, alegătorii trebuie să respecte
              anumite reguli, inclusiv:
            </p>
            <ul>
              <li>Să aibă un cont verificat pentru a putea vota online</li>
              <li>Să nu folosească identitatea altcuiva pentru a vota</li>
              <li>
                Să respecte orice alte reguli specifice stabilite de
                autoritățile electorale
              </li>
            </ul>
          </li>
          <li>
            <a href="#proceduri">Proceduri Electorale</a>
            <p>
              Procedurile electorale sunt etapele și regulile care guvernează
              întregul proces electoral, de la înregistrarea și actualizarea
              listelor electorale până la numărarea și raportarea voturilor.
            </p>
          </li>
        </ul>
        <h2 id="drepturi">Drepturile Alegătorilor</h2>
        <ul>
          <li>Dreptul de a vota</li>
          <li>Dreptul la confidențialitatea votului</li>
          <li>
            Dreptul la acces la informații despre candidați și partide politice
          </li>
          <li>Dreptul la asistență în procesul de votare</li>
        </ul>
        <h2 id="reguli">Regulile Alegătorilor</h2>
        <ul>
          <li>Să aibă un cont verificat pentru a putea vota online</li>
          <li>Să nu folosească identitatea altcuiva pentru a vota</li>
          <li>
            Să respecte orice alte reguli specifice stabilite de autoritățile
            electorale
          </li>
        </ul>
        <h2 id="proceduri">Proceduri Electorale</h2>
        <ul>
          <li>Înregistrarea și actualizarea listelor electorale</li>
          <li>Procesul de votare la secțiile de votare</li>
          <li>Votul prin corespondență și votul anticipat</li>
          <li>Numărarea și raportarea voturilor</li>
        </ul>
      </header>
    </div>
  );
};
export default Rules;
