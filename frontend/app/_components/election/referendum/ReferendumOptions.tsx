import { useGetReferendumOptions } from "@/_hooks/referendum";
import styles from "./referendum.module.css";
import OptionCardDisplay from "./OptionCardDisplay";
import { ReferendumOptionModel } from "@/_interfaces/referendumOption.model";

const ReferendumOptions = ({ hasUserVotedResponse, isUserAllowedToVote }) => {
  const { isSuccess, data: referendumOptions } = useGetReferendumOptions();

  return (
    <main>
      <h3>Variante de votare:</h3>
      <section className={styles["container"]}>
        {isSuccess &&
          referendumOptions?.data.map(
            (option: ReferendumOptionModel, index) => (
              <OptionCardDisplay
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
