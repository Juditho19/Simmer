
import styles from "./style";

import {
    Navbar,
    Hero,
    SearchRecipe,
    ContactUs,
    Footer,

} from './components';

const App = () => (
  <div className="bg-dimSecondary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    
    <div id="search-recipes" className={`${styles.boxWidth} bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <SearchRecipe />
    </div>
    <div id="contact-us" className={`${styles.boxWidth} bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <ContactUs />
    </div>
    <div className={`${styles.boxWidth} bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <Footer />
    </div>
  </div>
  
);

export default App;