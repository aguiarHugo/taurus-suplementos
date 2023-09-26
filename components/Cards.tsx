import Image from 'next/image'
import { BsCart4 } from 'react-icons/bs'

// Suplementos
const suplements = [
    {
        id: '1',
        category: 'whey',
        title: 'Whey Protein',
        imgUrl: '/whey.png',
        price: '99,99'
    },
    {
        id: '2',
        category: 'creatina',
        title: 'Creatina',
        imgUrl: '/creatina.png',
        price: '79,99'
    },
    {
        id: '3',
        category: 'bcaa',
        title: 'BCAA',
        imgUrl: '/bcaa.png',
        price: '69,99'
    },
    {
        id: '4',
        category: 'albumina',
        title: 'Albumina',
        imgUrl: '/albumina.png',
        price: '59,99'
    },
    {
        id: '5',
        category: 'whey',
        title: 'Whey Protein',
        imgUrl: '/whey.png',
        price: '99,99'
    },
    {
        id: '6',
        category: 'creatina',
        title: 'Creatina',
        imgUrl: '/creatina.png',
        price: '79,99'
    },
    {
        id: '7',
        category: 'bcaa',
        title: 'BCAA',
        imgUrl: '/bcaa.png',
        price: '69,99'
    },
    {
        id: '8',
        category: 'albumina',
        title: 'Albumina',
        imgUrl: '/albumina.png',
        price: '59,99'
    },
]

const Cards = () => {
  return (
    <div className='flex flex-wrap justify-center items-center mx-auto gap-8 max-w-5xl'>
        {suplements.map((suplement) => (
            <div 
                className='flex flex-col items-center gap-y-2 bg-dark_200 rounded-lg p-10 border border-red_100 text-light_100'
                key={suplement.id}
            >
                <Image width={150} height={140} className='max-w-[140px] max-h-[140px]' src={suplement.imgUrl} alt={suplement.title} />
                <h3 className='font-bold text-2xl'>{suplement.title}</h3>
                <div className='flex justify-between items-center gap-10 mt-10'>
                    <p>R$ {suplement.price}</p>
                    <button className='bg-red_100 rounded-full p-2'>
                        <BsCart4 />
                    </button>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Cards