import { useGetReferendumOptions } from "@/_hooks/referendum";
import styles from "./referendum.module.css";
import VoteCardReferendum from "../card/VoteCardReferendum";
import { ReferendumOptionModel } from "@/_interfaces/referendumOption.model";

const ReferendumOptions = ({ hasUserVotedResponse, isUserAllowedToVote }) => {
  const { isSuccess, data: referendumOptions } = useGetReferendumOptions();

  return (
    <main>
      <section className={styles["container"]}>
        {isSuccess &&
          referendumOptions?.data.map(
            (option: ReferendumOptionModel, index) => (
              <VoteCardReferendum
                isUserAllowedToVote={isUserAllowedToVote}
                hasUserVotedResponse={hasUserVotedResponse}
                key={option?.optionId}
                index={index}
                option={option}
              />
            )
          )}
      </section>
    </main>
  );
};
export default ReferendumOptions;
