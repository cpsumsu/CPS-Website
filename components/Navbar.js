import React from 'react'
import Image from 'next/image'

export default function Navbar({darkMode, handleThemeToggle}) {
  return (
    <header className='sticky h-0 top-0 w-full z-50'>
      {/* <div className="dark:bg-navbar h-20 px-7 py-5 flex justify-between bg-black/10 backdrop-blur-sm shadow-lg"> */}
      <div className="bg-navbar py-5 dark:bg-navbar/20 dark:backdrop-blur-sm shadow-lg theme-toggle-transition">
        <div className="w-full flex justify-between items-center h-12 width-wrapper px-8 md:px-20">
          <Image src={'/logo.svg'} alt="Logo" className="active:scale-105 cursor-pointer" width={40} height={40}/>
          { darkMode 
            ? <>
                <Image onClick={handleThemeToggle} src={'/sun.svg'} className="active:scale-105 cursor-pointer" alt="Menu" width={40} height={40}/>
              </>
            : <>
                <Image onClick={handleThemeToggle} src={'/moon.svg'} className="active:scale-105 cursor-pointer" alt="Menu" width={40} height={40}/>
              </>
          }
        </div>
      </div>
    </header>
  )
}
