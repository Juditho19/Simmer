import styles from "../style"
import hero_image from "../assets/hero_image.png";

const Hero = () => (
    <section id="home" className={`flex md:flex-row 
      flex-col ${styles.paddingY}`}>
      <div className= {`flex-1 ${styles.flexStart} flex-col
      xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-dimSecondary rounded-[10px] mb-2">
          <p className={`${styles.paragraph} ml-2 text-green`}>
            DISCOVER. SHARE. COOK.
          </p>
        </div>

        <div className="flex flex-row justify-between items-center
          w-full">
          <h1 className="flex-1 font-montserrat font-semibold 
            ss:text-[72px] text-[52px] text-secondary 
            ss:leading-[100px] leading-[75px]">
            The Next <br className="sm:block hidden"/> {" "}
            <span 
              className="text-gradient">Generation
            </span> {" "}
          </h1>

          
        </div>

        <h1 className="font-montserrat font-semibold 
            ss:text-[68px] text-[52px] text-secondary 
            ss:leading-[100px] leading-[75px] w-full">Recipe Platform.</h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          A platform where food lovers can share their  favorite recipes,
          explore new cuisines, and connect with other home cooks.
        </p>

        <div>
          <button>Search Recipes</button>
          <button>Submit a Recipe</button>
        </div>
        
      </div>

      <div className= {`flex-1 flex ${styles.flexCenter} md:my-0
          my-0`}>
          <img src={hero_image} alt="cooking"
            className="w-[100%] h-[100%] relative z-[5]" />

          {/* gradient start */}
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          {/* gradient end */}
      </div>

      

      


      
        
    </section>
)

export default Hero;