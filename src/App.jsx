import styles from "./style";
import { Bill, F, CD, Clients, C, Footer, Navbar, Stats, Test, H } from "./components/index";

const App = () => {
  setTimeout(() => {
    const observer = new IntersectionObserver((e) => {
      e.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });
    const hiddenEle = document.querySelectorAll(".hid");
    hiddenEle.forEach((el) => observer.observe(el));
  }, 100)
 
  return(
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
       
        <Clients />
        <C />
        <Footer />
      </div>
    </div>
  </div>
)};

export default App;