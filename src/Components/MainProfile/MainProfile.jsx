import React from 'react'
import profImg from '../../Assets/4.jpg'
import { LuPhoneCall } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { SiInstagram } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { useRef } from 'react';
import { IoMdDownload } from "react-icons/io";
import  resumePdf from '../../Assets/AROMAL_MERN.pdf'


const MainProfile = () => {

  const downloadFile = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'AROMAL_MERN.pdf'; // The name of the file to be downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const emailAddress = 'aromalsureshr@gmail.com'; // Replace with your email address
  const emailSubject = 'Connection request'; // Replace with your desired subject
  const emailBody = 'I am interested in getting in touch.'; // Replace with your desired body text

  // Construct the mailto link
  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  return (
    <>

   
<div className="max-w-sm w-full bg-white border shadow-2xl border-gray-200 rounded-xl  dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center p-5  ">

<h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">AROMAL S 👋 </h5>
  <div className="flex flex-col sm:flex-row gap-4 w-full items-center">
    <img src={profImg} alt="Profile" className="w-full sm:w-6/12 rounded-lg" />
    
    <div className="flex flex-col w-full sm:w-6/12 items-center sm:items-start justify-center ">
    
      <button type="button" className="w-full text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 flex justify-center items-center gap-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 mb-2"><LuPhoneCall/> Call</button>
      <button type="button" className="w-full text-gray-900  border border-gray-800  focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 flex justify-center items-center gap-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 mb-2"
      onClick={downloadFile}>
        <div className="group relative">
  <button className="bg-white w-10 h-10 flex justify-center items-center rounded-lg hover:text-blue-600 hover:translate-y-1 hover:duration-300">
    <svg
      className="w-6 h-6"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  </button>

  <span className="absolute w-20 text-center -bottom-12 left-[50%] -translate-x-[50%] origin-bottom tracking-wider z-20 scale-0 px-1 rounded-lg bg-white text-blue-600 py-2 text-sm transition-all duration-300 ease-in-out group-hover:scale-100">
    890.00 Kb<span> </span>
  </span>
</div>

        CV</button>
      
      <div className="flex w-full justify-between mb-2 gap-1">
        <button type="button" className="w-full text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 flex justify-center items-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
         onClick={() => window.location.href = mailtoLink}>
          <TfiEmail/></button>
        <button type="button" className="w-full text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 flex justify-center items-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"><FaWhatsapp/></button>
      </div>
      
      <div className="flex w-full justify-between mb-2 gap-1">
        <button type="button" className="w-full text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 flex justify-center items-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
          <a href="https://github.com/arOmal-5"><FaGithub/></a>
          </button>
        
        <button type="button" className="w-full text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 flex justify-center items-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
        <a href="https://www.linkedin.com/in/aromal-s-developer"><FaLinkedin/> </a>
        </button>
       
      </div>

      <div className="flex w-full justify-between gap-1">
        <button type="button" className="w-full text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 flex justify-center items-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"><SiInstagram/></button>
        <button type="button" className="w-full text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 flex justify-center items-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"><FaFacebook/></button>
      </div>
    </div>
  </div>
  
  <p className="mt-3 text-start font-normal text-gray-700 dark:text-gray-400">
  A Passionate <strong className="font-bold">Full Stack Developer</strong> 🖥️ having <strong className="font-bold">1 year</strong> of experience in 20+ Technologies so far.
  I specialize in building responsive and dynamic web applications using modern technologies using React, Node.js, and MongoDB. With a passion for continuous learning, I have successfully implemented several projects that integrate complex backend functionalities with intuitive front-end designs.
</p>

<p className="mt-3 text-start font-normal  text-gray-700 dark:text-gray-400">
 
</p>


</div>


    
    
    </>
  )
}

export default MainProfile