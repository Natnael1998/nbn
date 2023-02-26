import styles from "./style";
import { Bill, F, CD, Clients, C, Footer, Navbar, Stats, Test, H } from "./components/index";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <H />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <F />
        <Bill />
        <CD />
        <Test />
        <Clients />
        <C />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;