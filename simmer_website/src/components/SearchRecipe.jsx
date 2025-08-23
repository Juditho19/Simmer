import MagnifyingGlass from '../assets/icons/magnifying_glass.png';
import User from '../assets/icons/user 1.png';
import styles, {layout} from '../style';

const SearchRecipe = () => {
  // return (
  //   <div className="flex justify-center py-8">
  //     {/* serach container*/}
  //     {/* search input with icons */}
  //     <div className="flex items-center bg-white border-4 border-[#B35E42] rounded-full px-4 py-3 w-full max-w-2xl">

  //       <img 
  //           src={MagnifyingGlass} 
  //           alt="Search"
  //           width={20} 
  //           height={20}
  //           className='mr-3'
  //       />

  //       <input
  //         type="text"
  //         placeholder="Search for a recipe..."
  //         className="flex-1 bg-transparent outline-none text-[#24402D] placeholder-[#24402d9c]"
  //       />

  //       <img 
  //           src={User} 
  //           alt="User Profile"
  //           width={20} 
  //           height={20}
  //           className='ml-3 cursor-pointer hover:opacity-80'
  //       />

  //     </div>


  //     {/* 
  //     <button
  //       className="bg-[#B35E41] text-white px-6 py-2 rounded-lg hover:bg-[#a14f36]"
  //     >
  //       Search
  //     </button> */}
     
  //   </div>
  // )


  return(
    <section id='recipe' className={layout.section}>

      
      {/* <div className="flex flex items-start py-[6px] px-4 bg-dimSecondary rounded-[10px] mb-2">
        <p className={`${styles.paragraph} ml-2 text-green`}>
          What can I make with...?
        </p>
      </div> */}
      
     {/* search bar */}
     <div className={`${styles.flexCenter} bg-white 
      py-4 px-2 rounded-full border-4 border-secondary
      w-full `}>
        
      search bar
     </div>
    </section>
  )
}

export default SearchRecipe

// outline-[#B35E42]