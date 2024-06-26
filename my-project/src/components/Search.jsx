import React from 'react'
import { RiCustomerServiceFill } from "react-icons/ri";
import { MdOutlineTravelExplore } from 'react-icons/md';

const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
      <div className='lg:col-span-2 flex flex-col justify-evenly'>
        <div>
          <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
          <p className='py-4'>
            Come experience the very pinnacle of luxury Caribbean all-inclusive
            vacations for couples at BEACHES Resorts. Our luxury beach resorts,
            set along the most gorgeous tropical settings and exquisite beaches
            in Saint Lucia, Jamaica, Antigua, The Bahamas, Grenada, Barbados and
            Curaçao, feature unlimited gourmet dining, unique bars serving
            premium liquors and wines, and every land and water sport, including
            complimentary green fees at our golf resorts and certified scuba
            diving at most resorts. If you are planning a wedding, BEACHES is
            the leader in Caribbean destination weddings and honeymoon packages.
          </p>
        </div>
        <div className='grid sm:grid-cols-2 gap-8 py-4'>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button><RiCustomerServiceFill size={20}/></button>
            <div>
              <h3 className='py-2'>LEADING SERVICE</h3>
              <p className='py-2'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-center text-center'>
              <button><MdOutlineTravelExplore size={20}/></button>
              <div>
              <h3 className='py-2'>AUTOMATED BOOKINGS</h3>
              <p className='py-2'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
              </div>
          </div>
        </div>
      </div>

      {/*rightside*/}

      <div className='border rounded bg-amber-200/45 p-3 shadow-[3px] hover:scale-105 transition-transform'>
        <div className='border text-center'>
          <p className='pt-4'>GET AN ADDITIONAL 10% OFF</p>
          <p className='py-2'>12 HOURS LEFT</p>
          <p className='bg-gray-800 text-white'>BOOK NOW AND SAVE</p>
        </div>
        <form className='w-full'>
          <div className='border flex flex-col my-2 '>
            <label>DESTINATION</label>
            <select className='border rounded-md p-2'>
              <option>BlueBeach</option>
              <option>KeyWest</option>
              <option>Maldives</option>
              <option>Cozumel</option>
            </select>
          </div>
          <div className='flex flex-col my-2'>
            <label>CheckIn</label>
            <input className='border rounded-md p-2' type="date" />
          </div>
          <div className='flex flex-col my-2'>
            <label>CheckOut</label>
            <input className='border rounded-md p-2' type="date" />
          </div>
            <button className='w-full bg-emerald-400'>Check Availability ;)</button>
        </form>
      </div>

    </div>
  )
}

export default Search
