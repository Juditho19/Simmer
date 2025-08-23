// import headerLogo from '../assets/images/simmer_logo.png'
// import Facebook from '../assets/icons/Facebook.png'
// import Instagram from '../assets/icons/Instagram.png'
// import Twitter from '../assets/icons/Twitter.png'
// import Hamburger from '../assets/icons/Hamburger-menu.png'
// import ContactUs from '../sections/ContactUs'

// //import icons

// const Nav = () => {
//   return (
//     <header className='bg-[#D9AF98] '>
//       <nav className=' px-4 flex flex-row flex-wrap items-center text-center justify-between text-xs'>
        
//         <ul className='font-bold flex gap-4 flex-1 text-center  '> 
//           <li><a href="./ContactUs.jsx">Contact Us</a></li>
//           <li><a href="#">My Pantry</a></li>
//         </ul>
       
        
        // <div className='flex justify-center flex-1 items-center'>
        //   <a href="/">
        //     <img src={headerLogo} width={109} height={109} alt=" Simmer Logo" />
        //   </a>
        // </div>

        // <ul className="flex gap-4 justify-end flex-1 items-center ">
        //   <li><a href="#"><img src={Facebook} alt="Facebook Logo" /></a></li>
        //   <li><a href="#"><img src={Instagram} alt="Instagram Logo" /></a></li>
        //   <li><a href="#"><img src={Twitter} alt="Twitter Logo" /></a></li>
        //   <li><a href="#"><button className="font-bold text-[#F7EEDD] bg-[#24402D] px-4 py-2 rounded-full ">Submit a Recipe</button></a></li>
        // </ul>


//       </nav>
//     </header>
//   )
// }

// export default Nav
//mnj


// import { useState } from "react";
// import {close} from "../assets/close.png";
// import {logo} from "../assets/simmer_logo.png";
// import {menu} from "../assets/menu.png";
// import { navLinks } from "../constants";

import { useState } from "react";
import close from "../assets/close.png";
import logo from "../assets/simmer_logo.png";
import menu from "../assets/menu.png";
import { navLinks } from "../constants";

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex py-6 justify-between 
    items-center navbar'>
      <img src={logo} alt="simmer-logo"
        className='w-[109px] h-[109px]' />

      {/* navlicks */}
      <ul className='list-none sm:flex hidden 
          justify-end items-center flex-1'>
          {navLinks.map((nav, index) => (
            <li 
                key= {nav.id}
                className={`font-montserrat font-normal cursor-pointer
                  text-[16px] ${index === navLinks.length - 1
                    ? 'mr-0' : 'mr-10'} text-green`}
            >
              <a href= {`#${nav.id}`}>
                {nav.title}
              </a>

              

            </li>
          ))}

      </ul>

      <div className='sm:hidden flex flex-1 justify-end
      items-center'>
        {/* if toggle is on close else menu */}
        <img 
            src={toggle ? close : menu} 
            alt="menu"
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle((prev) => !prev)} 
        />

        <div
            className= {`${toggle ? 'flex' : 'hidden'} p-6
            bg- absolute top-20 right-0 mx-4
            my-2 min-w-[140px] rounded-xl sidebar`}
        
        >
          <ul className='list-none flex flex-col
            justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li 
                  key= {nav.id}
                  className={`font-montserrat font-normal cursor-pointer
                    text-[16px] ${index === navLinks.length - 1
                      ? 'mr-0' : 'mb-4'} text-green`}
              >
                <a href= {`#${nav.id}`}>
                  {nav.title}
                </a>


              </li>
            ))}

          </ul>




        </div>
        

      </div>


    </nav>
    

    
  )
}

export default Navbar