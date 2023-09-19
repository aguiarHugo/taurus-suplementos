import SearchForm from '@/components/SearchForm'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <main className='flex-center sm:p-16 xs:p-8 px-6 py-12 max-auto w-full max-w-screen-2xl flex-col'>
      <section className='w-full pt-[98px]'>
        <div className='flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center'>
          <h1 className='sm:heading1 heading2 mb-6 text-center text-gradient_red'>Taurus Suplementos</h1>
        </div>
        <SearchForm />
      </section>
    </main>
  )
}

export default page