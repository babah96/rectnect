import React from 'react'
import ProductCard from './ProductCard'

const productsData = [
  {
    img: "/img-3.png",
    title: "chaussures",
    desc: "ha4o n3ayel zeynin 7att",
    rating: 4,
    price: "2500.00",
  },
   {
    img: "/img-4.png",
    title: "Terki",
    desc: "Terki asli w zeyn",
    rating: 5,
    price: "10000.00",
  }, {
    img: "/img-5.png",
    title: "sac",
    desc: "ha4o sakaat zeynin 7att",
    rating: 3,
    price: "9000.00",
  },
   {
    img: "/img-6.png",
    title: "pantelloh",
    desc: "pantloh zeyn w wase3",
    rating: 4,
    price: "7000.00",
  },
   {
    img: "/img-7.png",
    title: "chirts",
    desc: "tichert 7a9iiii9i w bared eni9",
    rating: 4,
    price: "3500.00",
  },
  
]

const NewProducts = () => {
 
  return (
    <div>
      <div className='container pt-16'>
        <h2 className='font-medium text-2xl pb-4'>New Product</h2>

        <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2
        lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl-gap-y-10'>
          {productsData.map((item, index)  => 
          <ProductCard
          key={index}
          img={item.img}
          title={item.title}
          desc={item.desc}
          rating={item.rating}
          price={item.price}
          />
          
        
        
        
        ) }
        </div>
      </div>
    </div>
  )
}

export default NewProducts