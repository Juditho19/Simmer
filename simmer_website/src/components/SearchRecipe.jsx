import React, { useState } from 'react';
import styles from '../style';

const SearchRecipe = () => {
  // Stores users input
  const [searchTerm, setSearchTerm] = useState(''); 
  const [recipes, setRecipes] = useState([]);       
  const [loading, setLoading] = useState(false);

  // Update searchTerm as user types
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value); 
  };

  
  const handleSearch = async (e) => {
    e.preventDefault(); 
    
  
    if (!searchTerm.trim()) {
        alert('Please enter something!');
        return;
    }

    setLoading(true); // Show "searching..." message

    try {
        // Ask API for recipes with ingredient
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
        const data = await response.json();
        
        // Save the recipes we got back
        if (data.meals) {
          setRecipes(data.meals);
        } else {
          setRecipes([]);
        }
    } catch (error) {
        alert('Something went wrong!');
    }

    setLoading(false); 
    // Hide "searching..." message
  };

  return(
    <div id="search-recipes" className="py-12">
      <h2 className='text-center text-4xl font-bold text-white mb-8'>
        What would you like to try?
      </h2>

      {/* Search Form */}
      <form className="flex justify-center mb-8" onSubmit={handleSearch}>
        <input 
          type="text" 
          value={searchTerm}           
          onChange={handleInputChange} 
          placeholder='Try: chicken, pasta, cake' 
          className="bg-white py-4 px-4 border-4 border-secondary w-96
            mr-4 rounded focus:outline-none" 
        />
        <button 
          type="submit" 
          className='py-4 px-6 bg-secondary font-montserrat font-medium 
            text-white rounded hover:bg-opacity-80' 
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {/* Results */}
      <div className="max-w-6xl mx-auto px-4">
        {/* Show "searching..." */}
        {loading && (
          <p className="text-center text-white text-xl">Searching...</p>
        )}

        {/* Show "no recipes found" */}
        {!loading && recipes.length === 0 && searchTerm && (
          <p className="text-center text-white text-xl">
            No recipes found. Try something else!
          </p>
        )}

        {/* Show the recipes */}
        {!loading && recipes.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.idMeal} recipe={recipe} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// card component
const RecipeCard = ({ recipe }) => {
  const [showMore, setShowMore] = useState(false);
  const [fullRecipe, setFullRecipe] = useState(null);
  const [loading, setLoading] = useState(false);

  // Get full recipe details 
  const getFullRecipe = async () => {
    if (showMore) {
      setShowMore(false); 
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipe.idMeal}`);
      const data = await response.json();
      setFullRecipe(data.meals[0]);
      setShowMore(true);
    } catch (error) {
      alert('Could not get recipe details');
    }
    setLoading(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Recipe Image */}
      <img 
        src={recipe.strMealThumb} 
        alt={recipe.strMeal}
        className="w-full h-48 object-cover"
      />
      
      {/* Recipe Name and Button */}
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{recipe.strMeal}</h3>
        
        <button
          onClick={getFullRecipe}
          className="bg-secondary text-white px-4 py-2 rounded hover:bg-opacity-80"
        >
          {loading ? 'Loading...' : showMore ? 'Hide Recipe' : 'Show Recipe'}
        </button>

        {/* Full Recipe Details */}
        {showMore && fullRecipe && (
          <div className="mt-4 pt-4 border-t">
            {/* Ingredients */}
            <h4 className="font-bold mb-2">Ingredients:</h4>
            <ul className="mb-4 text-sm">
              
              {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map(i => {
                const ingredient = fullRecipe[`strIngredient${i}`];
                const measure = fullRecipe[`strMeasure${i}`];
                if (ingredient && ingredient.trim()) {
                  return <li key={i}>• {measure} {ingredient}</li>
                }
                return null;
              })}
            </ul>

            {/* Instructions */}
            <h4 className="font-bold mb-2">Instructions:</h4>
            <p className="text-sm text-gray-600">
              {fullRecipe.strInstructions}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchRecipe;