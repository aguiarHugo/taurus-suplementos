"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"


const SearchForm = () => {
    const [search, setSearch] = useState('')
    return (
        <form className='flex-center mx-auto mt-10 w-full sm:-mt-10 sm:px-5'>
            <label className='flex-center relative w-full max-w-3xl'>
                <Image
                    src="/magnifying-glass.svg"
                    className='absolute left-8'
                    width={32}
                    height={32}
                    alt='Pesquisar'
                />
                <Input 
                    className="h-fit border-0 bg-dark_200 pl-20 pr-8 text-light_100 !ring-0 !ring-offset-0"
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </label>
        </form>
    )
    }

export default SearchForm