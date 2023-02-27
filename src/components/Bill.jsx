import { apple, bill, google, robot } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={`${layout.sectionImgReverse} hid`}>
      <img className="mi rounded " src="https://th.bing.com/th/id/OIP.X6zt5_FqIDB6SUcwDC30lAHaFj?pid=ImgDet&rs=1" />
     <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Anykind of  web design you want  <br className="sm:block hidden" /> 
      
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        best UX/UI DESIGN you want 
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
       
      </div>
    </div>
  </section>
);

export default Billing;