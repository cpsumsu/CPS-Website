import React from 'react'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className='bg-navbar px-7 py-5 flex justify-between'>
      <Image src={'/logo.svg'} width={40} height={40}/>
      <Image src={'/hamburger.svg'} width={30} height={30}/>
    </nav>
  )
}
