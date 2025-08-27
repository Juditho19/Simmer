
import styles from "./style";

import {
    Navbar,
    Hero,
    SearchRecipe,
    ContactUs,
    Footer,

} from './components';

const App = () => (
  <div className="bg-dimSecondary w-full min-h-screen">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div id="home" className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    
    <div id="search-recipes" className={`${styles.boxWidth} bg-primary ${styles.paddingX} ${styles.flexCenter} ${styles.paddingY} scroll-mt-24`}>
      <SearchRecipe />
    </div>
    <div id="contact-us" className={`${styles.boxWidth} bg-primary ${styles.paddingX} ${styles.flexCenter} ${styles.paddingY}`}>
      <ContactUs />
    </div>
    <div className={`${styles.boxWidth} bg-dimSecondary ${styles.paddingX} ${styles.flexCenter}  py-1 bg-dimSecondary`}>
      <Footer />
    </div>
  </div>
  
);

export default App;