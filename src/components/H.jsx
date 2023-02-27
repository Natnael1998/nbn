
import styles from "../style";
import {  robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[42px] text-white ss:leading-[100.8px] leading-[75px]">
             <br className="sm:block hidden" />{" "}
            <span className="text-gradient">NBN</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[52px] text-[32px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          WEB DEVELOPING AGENCY.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5  `}>
 Our team of experts uses best and modern way  to build anykind of websites that our customer desires.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-20 relative `}>
        <img  src="https://th.bing.com/th/id/R.3618ac47d6528f0b020122e91be86e1b?rik=KYKzuprFV6%2bBug&pid=ImgRaw&r=0" alt="" className="w-[600px] h-[400px] object-cover relative z-[5] rounded-xl  hh " />

        
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;