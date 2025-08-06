import Image from 'next/image'
import React from 'react'

const Testimonial = () => {
  return (
    <div className="container pt-16 pb-16">
          <h2 className="font-medium text-2xl pb-4">Testimonials</h2>
      <div className="flex flex-col lg:flex-row gap-8 items-stretch">
        <div className="flex-1">
          <div className='border border-gray-200 rounded-xl flex items-center justify-center p-8 h-[300px] w-[350px]'>
            <div className='text-center flex flex-col items-center gap-1'>
              <Image
                className='rounded-full inline-block'
                src="/img-8.jpg"
                width={80}
                height={80}
                alt='dp'
              />
              <h2 className='text-gray-500 font-black text-[20px]'>Babah Abbe</h2>
              <p>développeur & modérateur de cette boutique</p>
              <Image
                className='rounded-full inline-block'
                src="/img-9.png"
                width={60}
                height={60}
                alt='quotes'
              />
              <p className='max-w-[200px] text-gray-500'>
                ellah eli jane w chre mn 3ndne y3mlo yjbar 4ak eli idor 3nd molane
              </p>
            </div>
          </div>
        </div>

        {/* Discount Section - Now properly beside the testimonial */}
        <div className="flex-1">
          <div className="bg-red-600 bg-[url(/cta-img-9.png)] bg-cover h-[200px] rounded-xl flex items-center justify-center w-full">
            <div className='bg-[#ffffffab] min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 px-2 grid place-content-center gap-3'>
              <button className='bg-blackish text-white p-2 rounded-md'>
                25% DISCOUNT
              </button>
              <h2 className='font-extrabold text-2xl text-[#272727]'>
                summer collection
              </h2>
              <p className='text-gray-500 text-[20px]'>
                starting @ 1000UM <b>whaaw</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Testimonial