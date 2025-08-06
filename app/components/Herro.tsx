"use client";
import React from 'react';
import Slide from './Slide';
import Slider from "react-slick"

const Herro = () => {


    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay : false,
        pauseOnHover: false,

    };

const slideData = [
    {
        id: 0,
        img:"/img.jpg",
        title: "trending Item",
        mainTitle: "WOMEN'S LATSET FASHION SALE",
        price: "$20",

    },
     {
        id: 1,
        img:"/img-1.jpg",
        title: "trending Accessoires",
        mainTitle: "modern sunglass",
        price: "$15",

    },
     {
        id: 2,
        img:"/img-2.jpg",
        title: "salle ofer",
        mainTitle: "new fashion somer salle",
        price: "$30",

    },
];









  return (
    <div>
        <div className='container pt-6 lg:pt-0'>
            <Slider {...settings}>
                {slideData.map((item) =>(
                    <Slide
                      key={item.id}
                      img={item.img}
                      title={item.title}
                      mainTitle={item.mainTitle}
                      price={item.price}
                      />
                )
                )}

            </Slider>


        </div>
    </div>
  )
}

export default Herro