import Link from "next/link";
import globalStyles from "@/_shared/stylesheets/global.module.css";

const Home = () => {
  return (
    <div>
      <div className={globalStyles["container"]}>
        <p>Creeaza: </p>
        <ul>
          <li>
            <Link
              href="/admin/create/political-party"
              target="_blank"
            >
              Partid politic
            </Link>
          </li>
          <li>
            <Link
              href="/admin/create/candidate"
              target="_blank"
            >
              Candidat
            </Link>
          </li>
          <li>
            <Link
              href="/admin/create/election"
              target="_blank"
            >
              Eveniment
            </Link>
          </li>
        </ul>

        {/* <p>Editeaza: </p>
        <ul>
          <li>
            <Link
              href="/admin/edit"
              target="_blank"
            >
              Profil candidati
            </Link>
          </li>
          <li>
            <Link
              href="/admin/edit"
              target="_blank"
            >
              Partid politic
            </Link>
          </li>
        </ul> */}
        <p>
          Vezi lista de evenimente nepublicate:{" "}
          <Link
            href="/admin/election/unpublished"
            target="_blank"
          >
            aici.
          </Link>
        </p>
        {/* <p>
          Trimite invitatie pentru roluri de admin:{" "}
          <Link
            href="/admin/invitation"
            target="_blank"
          >
            aici.
          </Link>
        </p> */}
      </div>
    </div>
  );
};
export default Home;
