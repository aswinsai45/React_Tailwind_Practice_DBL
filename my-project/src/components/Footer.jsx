import React from 'react'
import {FaFacebook, FaGithub, FaInstagram, FaPinterest, FaTwitter, FaYoutube} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full bg-emerald-600/30 py-16'>
        <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
            <div className='sm:flex text-center justify-between items-center'>
                <h1>BEACHES.</h1>
                <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
                    <FaFacebook className='icon' />
                    <FaTwitter className='icon' />
                    <FaYoutube className='icon' />
                    <FaPinterest className='icon' />
                    <FaInstagram className='icon' />
                </div>
            </div>

            <div className='flex justify-between'>
                <ul className='lg:flex'>
                    <li>About</li>
                    <li>Partnership</li>
                    <li>Careers</li>
                    <li>Newsroom</li>
                    <li>Advertising</li>
                </ul>
            
            

                <ul className='text-right lg:flex'>
                    <li>Home</li>
                    <li>Destinations</li>
                    <li>Travel</li>
                    <li>View</li>
                    <li>Book</li>
                </ul>
                
            </div>
            

            
            <div className='flex justify-between items-left text-left'>
                <ul className='lg:flex'>
                    <li className='border-2 border-rounded border-blue-300/90 p-2 bg-emerald-200/40'>Made by Sai Aswin</li>
                </ul>
                <div className="flex items-center border-2 border-blue-300/90 rounded p-2 bg-emerald-200/40">
                    <p>Sai Aswin's GitHub - </p>
                    <a href="https://github.com/aswinsai45" target="_blank" rel="noopener noreferrer" className="icon mr-2">
                    <FaGithub className='ml-2'/>
                    </a>
                </div>
            </div>



        </div>
    </div>
  )
}

export default Footer