import RegisterIcon from "../../assets/icons/register.jpg";
import LocationIcon from "../../assets/icons/location.jpg";
import ElectionIcon from "../../assets/icons/election.jpg";
import NewsIcon from "../../assets/icons/news.jpg";
import HowToVoteIcon from "../../assets/icons/vote.jpg";
import UnknownIcon from "../../assets/icons/unknown.jpg";

const cards = [
  {
    icon: RegisterIcon,
    title: "Registration",
    imageAlt: "registerIcon",
    href: "/register",
    target: "",
  },
  {
    icon: HowToVoteIcon,
    title: "How to vote",
    imageAlt: "howToVoteIcon",
    href: "/howtovote",
    target: "_blank",
  },
  {
    icon: ElectionIcon,
    title: "Election Results",
    imageAlt: "electionResultsIcon",
    href: "/results",
  },
  {
    icon: UnknownIcon,
    title: "Card1???",
    imageAlt: "unknownIcon",
    href: "/unknown",
    target: "_blank",
  },
  {
    icon: LocationIcon,
    title: "Where to vote in person",
    imageAlt: "locationIcon",
    href: "/vote/locations",
  },
  {
    icon: UnknownIcon,
    title: "Card2??",
    imageAlt: "unknownIcon",
    href: "/unknown",
    target: "_blank",
  },
  {
    icon: UnknownIcon,
    title: "Card3??",
    imageAlt: "unknownIcon",
    href: "/unknown",
    target: "_blank",
  },
  {
    icon: NewsIcon,
    title: "News and releases",
    imageAlt: "newsIcon",
    href: "/news",
    target: "_blank",
  },
];

export default cards;
