
import React, { useState } from 'react';
import styles from "../style"

const ContactUs = () => {
  // to store form data 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  
  const [status, setStatus] = useState('');


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value  
    }));
  };

  // Function for when form is submitted
  const handleSubmit = (e) => {
    e.preventDefault(); 
    // Stop page from refreshing

    // Simple validation - check if all fields are filled
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all fields');
      return;
    }

    // Check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('Please enter a valid email address');
      return;
    }

    
    console.log('Form submitted:', formData); 
    setStatus('Thank you! Your message has been sent.');
    
    // Clear form use
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="justify-center items-center ">

      <h1 className={`${styles.flexCenter} font-montserrat font-semibold 
        ss:text-[72px] text-[52px] text-gradient 
        ss:leading-[100px] leading-[75px] `}>
        Contact Us
      </h1>
          


      <form className="flex flex-col justify-center items-center gap-2" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name"  
          placeholder="Your Name" 
          value={formData.name}  
          onChange={handleChange}  
          className="bg-transparent outline-none text-green placeholder-mutedGreen 
            border-4 border-secondary rounded-t-lg w-full max-w-xl py-2 px-1"
        />

        <input 
          type="email" 
          name="email"  
          placeholder="Email Address" 
          value={formData.email}  
          onChange={handleChange}  
          className="bg-transparent outline-none text-green placeholder-mutedGreen 
            border-4 border-secondary w-full max-w-xl py-2 px-1"
        />

        <textarea 
          name="message"  
          placeholder="Tell us what's on your mind..." 
          rows="5"
          value={formData.message}  
          onChange={handleChange}  
          className="bg-transparent outline-none text-green placeholder-mutedGreen 
            border-4 border-secondary rounded-b-lg w-full max-w-xl py-2 px-1"
        />

        
        {status && (
          <p className={`text-center mt-2 ${
            status.includes('Thank you') ? 'text-green-500' : 'text-red-500'
          }`}>
            {status}
          </p>
        )}

        <button 
          type="submit"  
          className={`py-4 px-6 bg-secondary font-montserrat font-medium text-[18px] 
            text-white outline-none rounded-full mr-5 hover:bg-opacity-80 transition-all
            ${styles}`}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default ContactUs