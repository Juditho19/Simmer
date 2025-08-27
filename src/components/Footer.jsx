
import logo from "../assets/simmer_logo.png";
import Facebook from '../assets/Facebook.png'
import Instagram from '../assets/Instagram.png'
import Twitter from '../assets/Twitter.png'

const Footer = () => {
  return (

  <footer className="w-full flex py-6 justify-between 
    items-center md:flex-row flex-col pt-6">
    <div className='flex justify-start items-center pt-6'>
      <a href="/">
        <img src={logo} width={109} height={109} 
        alt=" Simmer Logo" />
      </a>
    </div>

    <div className="flex justify-center items-center">
      <p className="font-montserrat font-normal text-center text-[18px] leading-[27px] text-mutedGreen">
        Copyright Ⓒ 2025 Simmer. All Rights Reserved.
      </p>
    </div>
    
    <div>
      <ul className="flex gap-4 justify-end items-center">
        <li><a href="#"><img src={Facebook} alt="Facebook Logo" /></a></li>
        <li><a href="#"><img src={Instagram} alt="Instagram Logo" /></a></li>
        <li><a href="#"><img src={Twitter} alt="Twitter Logo" /></a></li>
      </ul>
    </div>

    
  </footer>

  )
}

export default Footer