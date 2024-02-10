import { useGetReferendumOptions } from "@/_hooks/referendum";
import styles from "./referendum.module.css";
import OptionCardDisplay from "./OptionCardDisplay";

const ReferendumOptions = () => {
  const { isSuccess, data: referendumOptions } = useGetReferendumOptions();
  return (
    <div>
      <h3>Variante de votare:</h3>
      <section className={styles["container"]}>
        {isSuccess &&
          referendumOptions?.data.map((option, index) => (
            <OptionCardDisplay
              key={option?.optionId}
              index={index}
              option={option}
            />
          ))}
      </section>
    </div>
  );
};
export default ReferendumOptions;
