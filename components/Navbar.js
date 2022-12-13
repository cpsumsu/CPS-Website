import React from 'react'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className='fixed top-0 w-full z-50 bg-navbar h-20 px-7 py-5 flex justify-between overflow-x-hidden'>
      <Image src={'/logo.svg'} alt="Logo" width={40} height={40}/>
      <Image src={'/hamburger.svg'} alt="Menu" width={30} height={30}/>
    </nav>
  )
}
