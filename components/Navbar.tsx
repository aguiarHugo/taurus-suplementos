import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className='flex-center fixed top-0 z-50 w-full border-b-2 border-red_100 py-7 text-white'>
      <div className='flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16'>
        <Link href="/">
          <Image 
            src="/logo.png" 
            alt='logo' 
            width={48} 
            height={48} 
            className='rounded-xl'
          />
        </Link>

        <Image
          src="/hamburger-menu.svg"
          width={30}
          height={30}
          alt="Menu Hamburguer"
          className='block md:hidden'
        />

        <ul className='flex-center gap-x-3 max-md:hidden md:gap-x-10'>
          <li className='font-bold hover:text-red_100 transition-all duration-300 '>
            <Link href="#">
              Suplementos
            </Link>
          </li>

          <li className='font-bold hover:text-red_100 transition-all duration-300'>
            <Link href="#">
              Fale Conosco
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar