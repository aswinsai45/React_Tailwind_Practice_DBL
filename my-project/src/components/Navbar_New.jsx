import React, {useState} from 'react'
import {BsPerson} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube} from 'react-icons/fa'

const Navbar_New = () => {

  const [nav, setNav] = useState(false)
  const [logo, setLogo] = useState(false)
  const handleNav = () =>(
    setNav(!nav),
    setLogo(!logo)
  );
  return (
    <div className='flex justify-between items-center h-20 px-4'>
        <div>
          <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'} >BEACHES.</h1>
        </div>
        <ul className='hidden md:flex'>
          <li>Home</li>
          <li>Destinations</li>
          <li>Travel</li>
          <li>View</li>
          <li>Book</li>
        </ul>
        <div className='hidden md:flex'>
        <BiSearch className='mr-4' size = {20}/>
        <BsPerson size = {20}/>
        </div>
        
        {/*hamburger nav action */}

        <div onClick={handleNav} className='md:hidden z-10'> {/*hamburger menu for devices less than md width*/}
              {nav ? <AiOutlineClose size={20} /> : <HiOutlineMenuAlt4 size={20} />}
           
        </div>

        {/*dropdown div : MOBILE ONLY*/}

        <div onClick={handleNav} className={nav ? 'absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
          <ul>
            <h1>BEACHES</h1>
            <li className='border-b'>Home</li>
            <li className='border-b'>Destinations</li>
            <li className='border-b'>Travel</li>
            <li className='border-b'>View</li>
            <li className='border-b'>Book</li>

            <div className='flex flex-col '>
              <button className='my-5'>SEARCH</button>
              <button>ACCOUNT</button>
            </div>

            <div className='flex justify-between my-5'>
              <FaFacebook className='icon' />
              <FaTwitter className='icon' />
              <FaYoutube className='icon' />
              <FaPinterest className='icon' />
              <FaInstagram className='icon' />
            </div>
          </ul>
        </div>
        

    </div>


  )
}

export default Navbar_New