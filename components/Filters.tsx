"use client"

import { useSearchParams, useRouter } from 'next/navigation'
import { useState } from "react"
import { formUrlQuery } from "./formUrl";
const products = ['Todos', 'Whey Protein', 'Albumina', "BCAA", "Creatina"]

const Filters = () => {
  const [active, setActive] = useState('');
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleFilter = (product: string) => {
    let newUrl = '';
    
     if(active === product) {
      setActive('');

      newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: 'category',
      value: null,
    })
  } else {
    setActive(product);

    newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: 'category',
      value: product.toLocaleLowerCase(),
  })}
  router.push(newUrl, { scroll: false})
}
  
  
  return (
    <ul className="text-light_100 body-text no-scrollbar flex w-full max-w-full gap-2 overflow-auto py-12 sm:max-w-2xl  mx-auto">
      {products.map((product) => (
        <button
          key={product}
          onClick={() => handleFilter(product)}
          className={`${active === product? 'gradient_red' : ''}  whitespace-nowrap rounded-lg px-8 py-2.5 capitalize`}
        >
          {product}
        </button>
      ))}
    </ul>
  )
}

export default Filters