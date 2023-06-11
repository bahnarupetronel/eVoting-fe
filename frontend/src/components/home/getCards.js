import RegisterIcon from "../../assets/icons/register.jpg";
import LocationIcon from "../../assets/icons/location.jpg";
import ElectionIcon from "../../assets/icons/election.jpg";
import NewsIcon from "../../assets/icons/news.jpg";
import HowToVoteIcon from "../../assets/icons/vote.jpg";
import UnknownIcon from "../../assets/icons/unknown.jpg";

const cards = [
  {
    icon: RegisterIcon,
    title: "Inregistrare",
    imageAlt: "registerIcon",
    href: "/register",
    target: "",
  },
  {
    icon: HowToVoteIcon,
    title: "Cum sa votezi",
    imageAlt: "howToVoteIcon",
    href: "/howtovote",
    target: "_blank",
  },
  {
    icon: ElectionIcon,
    title: "Ultimele rezultate",
    imageAlt: "electionResultsIcon",
    href: "/results",
  },
  {
    icon: UnknownIcon,
    title: "Alegeri in derulare",
    imageAlt: "unknownIcon",
    href: "/unknown",
    target: "_blank",
  },
  {
    icon: LocationIcon,
    title: "Unde sa votezi in persoana",
    imageAlt: "locationIcon",
    href: "/vote/locations",
  },
  {
    icon: UnknownIcon,
    title: "Reguli",
    imageAlt: "unknownIcon",
    href: "/unknown",
    target: "_blank",
  },
  {
    icon: UnknownIcon,
    title: "FAQ",
    imageAlt: "unknownIcon",
    href: "/unknown",
    target: "_blank",
  },
  {
    icon: NewsIcon,
    title: "Stiri si update-uri",
    imageAlt: "newsIcon",
    href: "/news",
    target: "_blank",
  },
];

export default cards;
