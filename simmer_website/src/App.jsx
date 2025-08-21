
import styles from "./style";
import {
    Navbar,
    Hero,
    SearchRecipe,
    SelectRecipe,
    MyPantryNav,
    MyPantryHero,
    NewIngredient,
    IngredientList,
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
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <SearchRecipe />
        <SelectRecipe />
        <MyPantryNav />
        <MyPantryHero />
        <NewIngredient />
        <IngredientList />
        <ContactUs />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;