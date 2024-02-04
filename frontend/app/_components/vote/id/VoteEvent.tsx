import { usePathname } from "next/navigation";

const VoteEvent = () => {
  const pathname = usePathname();
  const id: string = pathname.split("/")[2];
  console.log(id);
  return <div>VoteEvent</div>;
};
export default VoteEvent;
