import React, { useEffect, useState } from 'react';
import { FaCode, FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { IoIosArrowDown } from 'react-icons/io';
import welcomehand from "../assets/images/welcomehand.png"
import { FaPhoneAlt } from 'react-icons/fa';


export default function IndexPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const currentYear = new Date().getFullYear();

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId); 
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); 
    }
    setMenuOpen(false); 
  };

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.menu') && !event.target.closest('.menu-toggle')) {
        setMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='bacground-imgs'>
      <div className="">
        <nav className="flex fixed top-0 z-50 justify-between items-center bg-[#1C1C1Ccc] md:px-12 px-4 py-2 w-full">
          <div>
            <FaCode className="w-12 h-12 text-[#ab92af]" />
          </div>

          <div className="hidden md:flex space-x-8  items-center text-[#ab92af]">
            <button
              onClick={() => handleScroll('home')}
              className="hover:text-white px-4 py-2"
            >
              HOME
            </button>
            <button
              onClick={() => handleScroll('about')}
              className="hover:text-white px-4 py-2"
            >
              ABOUT
            </button>
            <button
              onClick={() => handleScroll('work')}
              className="hover:text-white px-4 py-2"
            >
              PROJECTS
            </button>
            <button
              onClick={() => handleScroll('contact')}
              className="hover:text-white px-4 py-2"
            >
              CONTACT
            </button>
          </div>

          <button
            className="menu-toggle text-[#ab92af] md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </nav>

        {menuOpen && (
          <div
            className="menu fixed top-0 right-0 h-screen bg-[#45154e] text-white md:w-80 w-64 p-4 shadow-lg z-50 animate__animated animate__fadeInRight animate__faster flex flex-col justify-between"
          >
            <button
              className="flex justify-end text-xl animate__animated animate__fadeInLeft"
              onClick={() => setMenuOpen(false)}
            >
              <img src="/Images/Close.svg" alt="close" />
            </button>

            <div className="flex-grow flex flex-col justify-center items-center poppins-600 animate__animated animate__fadeInUp">
              <ul className="w-full text-center">
                <li className="py-2 hover:bg-[#ab92af] rounded-md w-full">
                  <button onClick={() => handleScroll('home')} className="w-full h-full block">
                    HOME
                  </button>
                </li>
                <li className="py-2 hover:bg-[#ab92af] rounded-md w-full my-3">
                  <button onClick={() => handleScroll('about')} className="w-full h-full block">
                    ABOUT
                  </button>
                </li>
                <li className="py-2 hover:bg-[#ab92af] rounded-md w-full my-3">
                  <button onClick={() => handleScroll('work')} className="w-full h-full block">
                    PROJECTS
                  </button>
                </li>
                <li className="py-2 hover:bg-[#ab92af] rounded-md w-full">
                  <button onClick={() => handleScroll('contact')} className="w-full h-full block">
                    CONTACT
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}

        {menuOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={() => setMenuOpen(false)}
          ></div>
        )}
      </div>
      <div className='overflow-hidden'>
        <div id="home" className="relative h-screen overflow-hidden px-6 md:px-16">
          <div className="relative z-10 flex flex-col justify-center h-full text-left ">
            <span className="text-white text-sm sm:text-lg mb-3 poppins-500 flex w-fit">
              <span className='write-text flex items-center'>
                <span className='text-4xl md:text-5xl'>Hello</span>
                <img
                  style={{ marginLeft: "10px" }}
                  className='img-fluid my-auto mt-1 w-8 h-8 md:w-10 md:h-10'
                  alt='welcome'
                  src={welcomehand}
                />
              </span>
            </span>
            <h1 className='mb-2 text-[#ab92af] text-base font-semibold'>MY NAME IS </h1>
            <h1 className="text-white text-5xl lg:text-9xl mb-12 poppins-500 text-wrap">David <span className='text-[#ab92af]'>Nwokeabia</span></h1>
            <div >
              <a href='/Resume/David Nwokeabia - Resume.pdf' download="resume.pdf" className='inline-block reserv-space rounded-md bg-[#45154e] text-white px-8 py-3 md:px-12 md:py-2 hover:bg-[#ab92af] herobtn poppins-500 text-xs md:text-base'>
                <span className='flex space-x-2 my-auto'>
                    <span className='my-auto'>DOWNLOAD RESUME</span>
                    <span className='my-auto'><FaDownload className='h-4 w-4' /></span>
                </span>
              </a>
            </div>
          </div>

          <div className="absolute bottom-12 md:bottom-10 left-1/2 z-20 vertical-animation">
            <button
               onClick={() => handleScroll('about')}
              className=" text-white  flex justify-center items-center"
            >
              <IoIosArrowDown className='w-10 h-10' />
            </button>
          </div>
        </div>
        <div id="about" className='bg-[#1C1C1C] grid-con py-24 px-6 md:py-24 md:px-16 overflow-hidden'>
          <div className='py-4 poppins-400 my-auto'>
            <h1 className='text-[#ab92af] text-3xl md:text-4xl' data-aos="fade-left">SOFTWARE ENGINEER</h1>
            <div className='pt-4'>
              <p className='text-white text-justify text-sm mb-2'>
                Hello, My name is David. A passionate frontend developer with 4+ years of experience in creating responsive and user-friendly web applications. 
              </p>
              <p className='text-white text-justify text-sm mb-2'>
                My expertise lies in using technologies like HTML, CSS, JavaScript, and the ReactJs framework to build engaging user interfaces that are not only visually appealing but also functional.
              </p>
              <p className='text-white text-justify text-sm mb-2'>
                So far, I’ve successfully worked on projects ranging from small dynamic business websites to complex web applications. I thrive in fast-paced environments where I can continually learn and apply new technologies. My attention to detail and commitment has enabled me to work closely with design and backend teams, ensuring efficient project delivery.
              </p>
              <p className='text-white text-justify text-sm'>
                I am always eager to take on new challenges and collaborate with other professionals to create innovative digital solutions. Let’s connect and explore how we can work together to bring ideas to life!
              </p>
            </div>
          </div>
          <div className='poppins-400 my-auto' data-aos="zoom-in-up">
            <h1 className='mb-6 text-[#ab92af] text-base font-semibold text-center'>EXPERIENCE WITH</h1>
            <div className='flex flex-wrap gap-x-3 gap-y-3 justify-center items-center'>
              <svg className='w-12 h-12' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26"></path> <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529"></path> <path d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z" fill="white"></path> </g></svg>
              <svg className='w-12 h-12' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"></path> <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"></path> <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white"></path> </g></svg>
              <svg className='w-12 h-12' viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M0 222.991C0 241.223 14.779 256 33.009 256H222.99C241.223 256 256 241.221 256 222.991V33.01C256 14.777 241.221 0 222.991 0H33.01C14.777 0 0 14.779 0 33.009V222.99z" fill="#563D7C"></path><path d="M106.158 113.238V76.985h31.911c3.04 0 5.97.253 8.792.76 2.822.506 5.319 1.41 7.49 2.713 2.17 1.303 3.907 3.112 5.21 5.427 1.302 2.316 1.954 5.283 1.954 8.9 0 6.513-1.954 11.217-5.862 14.111-3.907 2.895-8.9 4.342-14.979 4.342h-34.516zM72.075 50.5v155h75.112c6.947 0 13.713-.868 20.298-2.605 6.585-1.737 12.446-4.414 17.584-8.032 5.137-3.618 9.226-8.286 12.265-14.002 3.04-5.717 4.559-12.483 4.559-20.298 0-9.697-2.352-17.982-7.055-24.856-4.704-6.875-11.832-11.687-21.384-14.437 6.947-3.328 12.194-7.598 15.74-12.808 3.545-5.21 5.318-11.722 5.318-19.538 0-7.236-1.194-13.314-3.582-18.235-2.388-4.92-5.753-8.864-10.095-11.831-4.341-2.967-9.551-5.102-15.63-6.404-6.078-1.303-12.808-1.954-20.189-1.954H72.075zm34.083 128.515v-42.549h37.121c7.381 0 13.315 1.7 17.802 5.102 4.486 3.401 6.73 9.081 6.73 17.041 0 4.053-.688 7.381-2.063 9.986-1.375 2.605-3.22 4.668-5.536 6.187-2.315 1.52-4.993 2.605-8.032 3.257-3.04.65-6.223.976-9.552.976h-36.47z" fill="#FFF"></path></g></svg>
              <svg className='w-12 h-12' viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>file_type_tailwind</title><path d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z" style={{fill:"#44a8b3"}}></path></g></svg>
              <svg className='w-12 h-12' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="2" y="2" width="28" height="28" fill="#FFCA28"></rect> <path d="M19 25.2879L21.0615 23.9237C21.2231 24.4313 22.2462 25.6368 23.5385 25.6368C24.8308 25.6368 25.4308 24.931 25.4308 24.463C25.4308 23.1878 24.1112 22.7382 23.4774 22.5223C23.374 22.4871 23.289 22.4581 23.2308 22.4328C23.2009 22.4198 23.1558 22.4025 23.0979 22.3804C22.393 22.1111 19.7923 21.1175 19.7923 18.2373C19.7923 15.065 22.8538 14.7002 23.5462 14.7002C23.9991 14.7002 26.1769 14.7557 27.2615 16.7939L25.2615 18.1898C24.8231 17.3015 24.0946 17.0081 23.6462 17.0081C22.5385 17.0081 22.3077 17.8201 22.3077 18.1898C22.3077 19.227 23.5112 19.6919 24.5273 20.0844C24.7932 20.1871 25.0462 20.2848 25.2615 20.3866C26.3692 20.91 28 21.7666 28 24.463C28 25.8136 26.8672 28.0002 24.0154 28.0002C20.1846 28.0002 19.1692 25.7003 19 25.2879Z" fill="#3E3E3E"></path> <path d="M9 25.5587L11.1487 24.1953C11.317 24.7026 11.9713 25.638 12.9205 25.638C13.8698 25.638 14.3557 24.663 14.3557 24.1953V15.0002H16.9982V24.1953C17.041 25.4636 16.3376 28.0002 13.2332 28.0002C10.379 28.0002 9.19242 26.3039 9 25.5587Z" fill="#3E3E3E"></path> </g></svg>
              <svg className='w-12 h-12' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="#00D8FF" fill-rule="evenodd"> <circle cx="11.996" cy="11.653" r="2.142"></circle> <path fill-rule="nonzero" d="M11.9957722,7.80914159 C14.763782,7.80914159 17.3932297,8.19939152 19.3922491,8.88758063 C21.6123871,9.6518808 22.9666335,10.7818833 22.9666335,11.652558 C22.9666335,12.5799965 21.5040812,13.7840336 19.1293161,14.5708627 C17.2387355,15.1972602 14.7092455,15.538679 11.9957722,15.538679 C9.14520032,15.538679 6.58717845,15.203913 4.71853163,14.565185 C3.54866968,14.1653247 2.58256656,13.6456709 1.92037292,13.0785821 C1.32532838,12.5689984 1.02491103,12.0630628 1.02491103,11.652558 C1.02491103,10.7789546 2.32734001,9.66464781 4.49959681,8.90729393 C6.49945246,8.21010004 9.19325759,7.80914159 11.9957722,7.80914159 L11.9957722,7.80914159 L11.9957722,7.80914159 L11.9957722,7.80914159 L11.9957722,7.80914159 M11.9957722,6.78423056 C9.08437994,6.78423056 6.2777499,7.20198239 4.1621939,7.93951199 C1.62214541,8.82509585 0,10.2129394 0,11.652558 C0,13.1394248 1.74140227,14.6307252 4.38703934,15.5350074 C6.37567236,16.2147483 9.04125041,16.56359 11.9957722,16.56359 C14.8115523,16.56359 17.4474553,16.2078081 19.4516644,15.5437626 C22.2020573,14.632477 23.9915445,13.1592927 23.9915445,11.652558 C23.9915445,10.2077356 22.3170688,8.81052922 19.7258695,7.91848823 C17.6128656,7.19105846 14.871718,6.78423056 11.9957722,6.78423056 L11.9957722,6.78423056 L11.9957722,6.78423056 L11.9957722,6.78423056 L11.9957722,6.78423056 M8.64782576,9.74318674 C10.0306294,7.34537922 11.6822995,5.26251432 13.2771145,3.87459857 C15.0483324,2.33318986 16.7037652,1.72455661 17.4580053,2.15950561 C18.2614273,2.62281187 18.5738182,4.49132292 18.0690455,6.94154209 C17.6671734,8.89223963 16.6992742,11.2540339 15.3437168,13.6046372 C13.9196524,16.0740185 12.3517605,18.1226845 10.8648902,19.4223695 C9.93407029,20.2360369 9.00127666,20.8133347 8.17921011,21.1036655 C7.44050831,21.3645543 6.85214323,21.3720417 6.49651234,21.1669615 C5.73974814,20.7305244 5.42512511,19.045619 5.85426462,16.7855049 C6.24932455,14.7048419 7.24772098,12.1710157 8.64782671,9.74318508 L8.64782576,9.74318674 L8.64782576,9.74318674 L8.64782576,9.74318674 L8.64782576,9.74318674 M7.759974,9.23116928 C6.30547459,11.7533204 5.26525979,14.3932772 4.84734364,16.5943171 C4.34554839,19.2370813 4.73740525,21.3355983 5.98449631,22.0548141 C7.2725788,22.7976074 9.43439148,22.0341158 11.5394159,20.1940284 C13.121755,18.8108935 14.7555742,16.6760844 16.2315707,14.1166508 C17.6382359,11.6774242 18.6468519,9.21627599 19.0728759,7.1483441 C19.6574939,4.31054745 19.2752706,2.02434609 17.9700071,1.27164481 C16.7184046,0.549880923 14.6715337,1.30242953 12.6042836,3.1014613 C10.9185312,4.56851694 9.19669947,6.73986025 7.75997496,9.23116762 L7.759974,9.23116928 L7.759974,9.23116928 L7.759974,9.23116928 L7.759974,9.23116928 M8.65102932,13.6102163 C7.26423584,11.2147037 6.28457878,8.74353725 5.87862056,6.66870559 C5.42774955,4.36439699 5.72720706,2.6262057 6.48072727,2.18999639 C7.28337846,1.72531755 9.05821175,2.38783711 10.9288592,4.04883669 C12.4181905,5.37119379 13.9809502,7.38921897 15.3404734,9.7376059 C16.7686644,12.2045881 17.7605533,14.5861039 18.1440168,16.5233658 C18.384086,17.7361541 18.4183857,18.8326057 18.2593637,19.6898062 C18.1164684,20.4600771 17.8291151,20.9735449 17.473831,21.1792215 C16.7177635,21.6169189 15.1008664,21.0480332 13.3571194,19.5474962 C11.7518336,18.1661133 10.0552117,16.0356933 8.65102599,13.6102105 L8.65102932,13.6102163 L8.65102932,13.6102163 L8.65102932,13.6102163 L8.65102932,13.6102163 M7.76403451,14.1237168 C9.2227685,16.6434222 10.9904487,18.863069 12.6886037,20.3243677 C14.727583,22.0789594 16.7414064,22.7874988 17.9873239,22.0662207 C19.2741476,21.3212689 19.6923336,19.0670565 19.1494202,16.3243517 C18.741335,14.2627011 17.7077401,11.7810493 16.2274688,9.22410641 C14.8166895,6.78718171 13.1881856,4.68425955 11.6093526,3.2824351 C9.4428116,1.3587035 7.27122101,0.548080175 5.96723274,1.30299809 C4.71682218,2.02685487 4.34655386,4.17606524 4.87278214,6.8655093 C5.30188762,9.05864543 6.32316039,11.6347867 7.76403118,14.1237111 L7.76403451,14.1237168 L7.76403451,14.1237168 L7.76403451,14.1237168 L7.76403451,14.1237168"></path> </g> </g></svg>
              <svg className='w-12 h-12' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2.58536 17.4132C1.80488 16.6327 1.80488 15.3673 2.58536 14.5868L14.5868 2.58536C15.3673 1.80488 16.6327 1.80488 17.4132 2.58536L29.4146 14.5868C30.1951 15.3673 30.1951 16.6327 29.4146 17.4132L17.4132 29.4146C16.6327 30.1951 15.3673 30.1951 14.5868 29.4146L2.58536 17.4132Z" fill="#EE513B"></path> <path d="M12.1489 5.06152L10.9336 6.27686L14.0725 9.41577C13.9455 9.68819 13.8746 9.99201 13.8746 10.3124C13.8746 11.222 14.4461 11.9981 15.2496 12.3012V19.9798C14.4461 20.2829 13.8746 21.059 13.8746 21.9686C13.8746 23.1422 14.826 24.0936 15.9996 24.0936C17.1732 24.0936 18.1246 23.1422 18.1246 21.9686C18.1246 21.144 17.6549 20.429 16.9684 20.0768V12.3117L19.9689 15.3122C19.8481 15.5791 19.7809 15.8754 19.7809 16.1874C19.7809 17.361 20.7323 18.3124 21.9059 18.3124C23.0795 18.3124 24.0309 17.361 24.0309 16.1874C24.0309 15.0138 23.0795 14.0624 21.9059 14.0624C21.6778 14.0624 21.4582 14.0983 21.2522 14.1648L18.0297 10.9423C18.0914 10.7433 18.1246 10.5317 18.1246 10.3124C18.1246 9.13878 17.1732 8.18738 15.9996 8.18738C15.7803 8.18738 15.5688 8.22061 15.3697 8.2823L12.1489 5.06152Z" fill="white"></path> </g></svg>
            </div>
          </div>
          
        </div>
        <div className='w-full h-60'>
        </div>
        <div id="work" className='bg-[#1C1C1C] pt-20 pb-24 px-6 md:pt-24 md:px-16 poppins-400'>
          <h1 className='text-[#ab92af] text-3xl md:text-4xl' data-aos="fade-up">WORK EXPERIENCE</h1>
          <p className='text-white text-sm mt-3 text-left box-con'>Explore my work experiences and projects on LinkedIn and GitHub.</p>
          <div className="w-full my-12">
            <a 
              href="https://www.linkedin.com/in/david-nwokeabia-20b6452ab" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mb-5 button-con flex justify-center items-center glass text-white border border-gray-300 shadow-md hover:shadow-lg px-4 py-2 rounded-md transition transform hover:-translate-y-1"
            >
              <div className="bg-[#45154e] p-2 rounded-full shadow-md">
                <FaLinkedin className="text-[#ab92af] text-3xl" />
              </div>
              <span className="ml-4 text-white text-sm font-semibold">Check out my LinkedIn profile</span>
            </a>
            <a 
              href="https://github.com/daavhidd" 
              target="_blank" 
              rel="noopener noreferrer"
              className="button-con flex items-center justify-center glass text-white border border-gray-300 shadow-md hover:shadow-lg px-4 py-2 rounded-md transition transform hover:-translate-y-1"
            >
              <div className="bg-[#45154e] p-2 rounded-full shadow-md">
                <FaGithub className="text-[#ab92af] text-3xl" />
              </div>
              <span className="ml-4 text-white text-sm font-semibold">Check out my GitHub projects</span>
            </a>
          </div>
        </div>
        <div className='w-full h-60'>
        </div>
        <div id="contact" className='bg-[#1C1C1C] py-24 px-6 md:py-24 md:px-16 poppins-400'>
          <h1 className='text-[#ab92af] text-3xl md:text-4xl' data-aos="fade-up" >CONTACT ME</h1>
          <p className='text-white text-sm mt-3 text-left box-con'>Feel free to reach out to me! Whether you have a question, want to collaborate, or just want to say hi, I’d love to hear from you. </p>
          <div className="flex space-x-8 my-12">
          <a href="mailto:davidnwokeabia@gmail.com" className="text-red-500 hover:text-red-700 text-5xl">
            <FaEnvelope />
          </a>
          <a href="tel:+2348162255348" className="text-green-500 hover:text-green-700 text-5xl">
            <FaPhoneAlt />
          </a>
          <a href="https://wa.me/2348162255348" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700 text-5xl">
            <FaWhatsapp />
          </a>
        </div>
        </div>
        <div className='w-full h-16'>
        </div>
        <footer className="bg-[#1C1C1C] text-[#ab92af] py-4 lato-regular">
          <p className="text-sm px-4">&copy; {currentYear} <b>DAVID NWOKEABIA</b> | All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}
