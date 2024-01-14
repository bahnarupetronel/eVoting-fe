import Link from "next/link";
import globalStyles from "@/_stylesheets/App.module.css";

export const page = () => {
  return (
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
            href="/admin/political-party"
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
        <li>
          <Link
            href="/admin/political-party"
            target="_blank"
          >
            Localitate
          </Link>
        </li>
      </ul>

      <p>
        Vezi lista de evenimente nepublicate:{" "}
        <Link
          href="/admin/election/unpublished"
          target="_blank"
        >
          aici.
        </Link>
      </p>
    </div>
  );
};
export default page;
