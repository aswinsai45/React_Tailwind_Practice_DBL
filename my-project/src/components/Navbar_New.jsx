import React from 'react'
import {BsPerson} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'

const Navbar_New = () => {
  return (
    <div className='flex justify-between items-center h-20 px-4'>
        <div>
          <h1>BEACHES.</h1>
        </div>
        <ul className='hidden md:flex'>
          <li>Home</li>
          <li>Destinations</li>
          <li>Travel</li>
          <li>View</li>
          <li>Book</li>
        </ul>
        <div className='hidden md:flex'>
          <BiSearch size = {20}/>
          <BsPerson size = {20}/>
        </div>
        
        <div className='md:block hidden'> {/*hamburger menu for devices less than md width*/}
            <HiOutlineMenuAlt4 size = {20}/>
        </div>
        

    </div>


  )
}

export default Navbar_New