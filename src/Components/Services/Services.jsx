import React, { useContext } from 'react'
import frontend from '../../Assets/frontend.png'
import backend from '../../Assets/BACKEND.png'
import fullstack from '../../Assets/fullstack.png'
import hosting from '../../Assets/hosting.png'
import ThemeContext from '../Context/ThemeContext'


const Services = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
    
    <div className={`w-full rounded-2xl py-6 shadow-sm ${theme === 'light' ? 'bg-white' : 'bg-gray-800 text-white'}`}>
      <h2 className={`text-2xl font-bold text-start mb-8 ms-10 ${theme === 'light' ? 'text-black' : 'text-white'}`}>My Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {/* Full Stack Development */}
        <div className="flex flex-col items-center p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
        <img src={fullstack} alt=""  className='w-20'/>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Full Stack </h3>
        </div>

        {/* Front-End Development */}
        <div className="flex flex-col items-center p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
        <img src={frontend} alt="" className='w-20' />
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Front-End </h3>
        </div>

        {/* Back-End Development */}
        <div className="flex flex-col items-center p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
        <img src={backend} alt="" className='w-20' />
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Back-End </h3>
        </div>

        {/* Another Service */}
        <div className="flex flex-col items-center p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
        <img src={hosting} alt="" className='w-20' />
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Web Hosting</h3>
        </div>
      </div>
    </div>




    
    </>
  )
}

export default Services