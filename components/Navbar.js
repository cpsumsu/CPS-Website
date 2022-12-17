import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { motion } from 'framer-motion'

export default function Navbar({darkMode, handleThemeToggle}) {
  const leftMotions = {
    hidden: {
      x: -500,
      opacity: 0.6,
      scale: 0.4
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1
    }
  };

  const rightMotions = {
    hidden: {
      x: 500,
      opacity: 0.6,
      scale: 0.4
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1
    }
  };

  const bulbMotions = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 3,
        duration: 1,
      }
    }
  };

  const mobileMenuItems = [
    {id: 0, name: '公告', url: ''},
    {id: 1, name: '活動', url: ''},
    {id: 2, name: '關於我們', url: ''},
  ];

  const [themeBtnPressed, setThemeBtnPressed] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    let menuHandler = (e) => {
      if(e?.composedPath()[0].id !== 'hamburger-menu') {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", menuHandler);
    document.addEventListener("scroll", menuHandler, true);

    return() => {
      document.removeEventListener("click", menuHandler);
      document.removeEventListener("scroll", menuHandler, true);
    }

  }, []);

  return (
    <header className='sticky h-0 top-0 w-full z-50'>
      {/* <div className="dark:bg-navbar h-20 px-7 py-5 flex justify-between bg-black/10 backdrop-blur-sm shadow-lg"> */}
      <div className="relative bg-navbar py-5 dark:bg-navbarDark shadow-lg theme-toggle-transition">
        <div className="w-full flex justify-between items-center h-12 width-wrapper px-8 md:px-20">
          <motion.div className='flex items-center space-x-4'
            initial="hidden" animate="visible" variants={leftMotions} transition={{duration: 1.5}}
          >
            <Image src={'/icons/logo.svg'} alt="Logo" className="active:scale-105 cursor-pointer" width={40} height={40} priority={true}/>
            <a className="hidden md:block lg:hidden text-3xl text-white font-mono cursor-pointer">CPSUMSU</a>
            <a className="hidden lg:block text-2xl text-white font-bold font-mono self-end cursor-pointer select-none active:scale-[102%]">澳門大學電腦學會</a>
          </motion.div>

          <motion.div className='flex items-center space-x-8'
            initial="hidden" animate="visible" variants={rightMotions} transition={{duration: 1.5}}
          >
            <ul className='hidden md:flex space-x-6'>
              <li><Link href="#" className='text-lg text-white font-bold hover:text-gray-200'>公告</Link></li>
              <li><Link href="#" className='text-lg text-white font-bold hover:text-gray-200'>活動</Link></li>
              <li><Link href="#" className='text-lg text-white font-bold hover:text-gray-200'>關於我們</Link></li>
            </ul>

          {/* Theme Toggler For Beyond Mobile Screen */}
          { darkMode 
            ? <>
                <Image onClick={() => {handleThemeToggle(); setThemeBtnPressed(true)}} src={'/icons/sun.svg'} className={`hidden md:block active:scale-105 cursor-pointer ${themeBtnPressed ? '' : 'animate-pulse'} w-10 h-10 md:w-8 md:h-8`} alt="Light Theme Button" width={40} height={40}/>
              </>
            : <>
                <Image onClick={() => {handleThemeToggle(); setThemeBtnPressed(true)}} src={'/icons/moon.svg'} className={`hidden md:block active:scale-105 cursor-pointer ${themeBtnPressed ? '' : 'animate-pulse'} w-10 h-10 md:w-8 md:h-8`} alt="Dark Theme Button" width={40} height={40}/>
              </>
          }
          
          {/* Mobile Hamburger */}
          <Image id='hamburger-menu' onClick={(e) => {setShowMenu(prev => !prev);}} src={'/icons/hamburger.svg'} className={`md:hidden active:scale-105 cursor-pointer`} alt="Menu Button" width={30} height={30} quality={100} priority={true}/>

          </motion.div>

          {/* Light Bulb For Mobile Screen*/}
          <motion.div drag dragElastic={0.1} dragConstraints={{top: 0, left: 0, right: 0, bottom:10}} dragDirectionLock
            dragMomentum dragTransition={{ bounceStiffness: 500, bounceDamping: 100 }}
            onDragEnd={handleThemeToggle}
            initial="hidden" animate="visible" variants={bulbMotions}
            className={`absolute md:hidden right-8 top-12 w-16 cursor-pointer -z-10 flex justify-end`}
          >
            <Image className='select-none pointer-events-none' src={"/icons/light-bulb.svg"} alt="Light Bulb" width={30} height={70}/>
          </motion.div>
          
          {/* Mobile Menu */}
          <aside className={`md:hidden absolute top-[70px] z-50 right-8 w-1/2 bg-white rounded-sm drop-shadow-md ${showMenu ? 'menu-active' : 'menu-hidden'}`}>
            <div className="flex justify-center menu">
              <ul className='text-center w-full cursor-pointer py-1'>
                {mobileMenuItems.map(item => 
                  <li key={item.id} className="py-3 active:bg-gray-300 font-bold">
                    <Link href={item.url}>
                      {item.name}
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </header>
  )
}