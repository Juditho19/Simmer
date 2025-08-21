import MagnifyingGlass from '../assets/icons/magnifying_glass.png'
import User from '../assets/icons/user 1.png'

const SearchRecipe = () => {
  return (
    <div className="flex justify-center py-8">
      {/* serach container*/}
      {/* search input with icons */}
      <div className="flex items-center bg-[#F7EEDD] border-4 border-[#B35E42] rounded-full px-4 py-3 w-full max-w-2xl">
        <img 
            src={MagnifyingGlass} 
            alt="Search"
            width={20} 
            height={20}
            className='mr-3'
        />

        <input
          type="text"
          placeholder="Search for a recipe..."
          className="flex-1 bg-transparent outline-none text-[#24402D] placeholder-[#24402d9c]"
        />

        <img 
            src={User} 
            alt="User Profile"
            width={20} 
            height={20}
            className='ml-3 cursor-pointer hover:opacity-80'
        />

      </div>


      {/* 
      <button
        className="bg-[#B35E41] text-white px-6 py-2 rounded-lg hover:bg-[#a14f36]"
      >
        Search
      </button> */}
     
    </div>
  )
}

export default SearchRecipe

// outline-[#B35E42]