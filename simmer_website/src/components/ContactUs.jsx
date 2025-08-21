

const ContactUs = () => {
  return (
    <div className="justify-center items-center ">
      <h1 className="justify-center text-center text-[120px] font-montec my-24">Contact Us</h1>

      <form className="flex flex-col justify-center items-center gap-2">
        <input 
            type="text" 
            placeholder="Your Name" 
            className="bg-transparent outline-none text-[#24402D] placeholder-[#24402d9c] border-4 border-[#B35E42] rounded-t-lg w-full max-w-xl py-2 px-1"
        />

        <input 
              type="email" 
              placeholder="Email Address" 
              className="bg-transparent outline-none text-[#24402D] placeholder-[#24402d9c] border-4 border-[#B35E42] w-full max-w-xl py-2 px-1"
        />

        <textarea 
              placeholder="Tell us what’s on your mind..." 
              rows="5"
              className="bg-transparent outline-none text-[#24402D] placeholder-[#24402d9c] border-4 border-[#B35E42] rounded-b-lg w-full max-w-xl py-2 px-1 "
        />

        <button type="submit" className="bg-[#B35E41] text-white py-3 rounded-full hover:bg-[#a14f36] transition max-w-xl py-2 px-1" >
          Submit
        </button>
      </form>
    </div>
  )
}

export default ContactUs