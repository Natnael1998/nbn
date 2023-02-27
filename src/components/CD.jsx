import { bill, card, robot } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Improve Your Business<br className="sm:block hidden" /> In Few Easy
        Steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        you can contact us for everything you us to Build you a Personal web or Anything you want  
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} hid hidd`}>
      <img  src={"https://th.bing.com/th/id/R.33b3261872b996cf382d2ff0766d09a5?rik=gEFsXJV25s%2bhDg&pid=ImgRaw&r=0"} alt="" className="w-[100%] h-[100%] rounded-xl nn" />
    </div>
  </section>
);

export default CardDeal;