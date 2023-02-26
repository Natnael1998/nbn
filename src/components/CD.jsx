import { bill, card, robot } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better web builder <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        you can contact us for everything you us to Build you a Personal web or Anything you want  
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={bill} alt="" className="w-[100%] h-[100%] rounded-xl" />
    </div>
  </section>
);

export default CardDeal;