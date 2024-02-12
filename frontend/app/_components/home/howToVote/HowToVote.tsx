import globalStyles from "@/_shared/stylesheets/global.module.css";

const HowToVote = () => {
  return (
    <div className={globalStyles["container"]}>
      <h2>Cum să votezi</h2>
      <p>
        Pentru a vota online în alegerile electorale din România, urmează acești
        pași simpli:
      </p>
      <ol>
        <li>
          <p>
            Creează-ți un cont pe platforma de votare online folosind adresa ta
            de e-mail si codul numeric personal.
          </p>
        </li>
        <li>
          <p>
            Verifică-ți contul de e-mail pentru a confirma adresa de e-mail.
          </p>
        </li>
        <li>
          <p>
            Verifică-ți identitatea conform instrucțiunilor furnizate pe pagina
            Contul meu.
          </p>
        </li>
        <li>
          <p>
            Accesează pagina de Voteaza și urmează instrucțiunile pentru a alege
            evenimentul electoral la care dorești să votezi.
          </p>
        </li>
        <li>
          <p>
            Selectează candidatul sau opțiunea pe care dorești să o votezi
            conform preferințelor tale.
          </p>
        </li>
        <li>
          <p>
            Finalizează votul. Reține că votul este ireversibil și nu poate fi
            modificat sau retras după confirmare.
          </p>
        </li>
      </ol>
      <p>
        În cazul în care optezi pentru votul fizic, te poți prezenta la secția
        de votare corespunzătoare și să votezi conform procedurilor stabilite de
        autoritățile electorale. Votul fizic va fi utilizat în locul votului
        online.
      </p>
      <p>
        Asigură-te că urmezi toate instrucțiunile și regulile stabilite de
        autoritățile electorale pentru un proces de votare corect și
        transparent.
      </p>
    </div>
  );
};
export default HowToVote;
