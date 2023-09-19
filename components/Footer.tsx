import Link from 'next/link'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='text-light_100 flex-between w-full gap-y-10 border-t border-dark_200 px-20 py-12 max-md:flex-col'>
      <p>&copy; 2023 Taurus Suplementos | Todos os Direitos Reservados</p>
      <div className='flex gap-x-9'>
        <Link href="#" className='hover:text-red_100 transition-all duration-300'>
          Termos e Condições
        </Link>

        <Link href="#" className='hover:text-red_100 transition-all duration-300'>
          Política de Privacidade
        </Link>

      </div>
    </footer>
  )
}

export default Footer