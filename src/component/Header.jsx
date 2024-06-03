import React from 'react';
import Slider from 'react-slick';
import { FaSearch, FaShoppingCart, FaLeaf } from 'react-icons/fa';
import plant1 from '../assets/images/plant1.png';
import plant2 from '../assets/images/plant2.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      title: "LET'S MAKE A BETTER PLANET",
      description: "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create a unique Urban Jungle. Order your favorite plants!",
      images: [plant1, plant2],
    },
    {
      title: "STYLING TRENDS & MUCH MORE",
      description: "Discover the latest in styling trends with our wide range of plants. Create your own green space at home!",
      images: [plant1, plant2],
    },
    {
      title: "BRING NATURE INDOORS",
      description: "Turn your home into a green paradise with our beautiful and affordable plants. Shop now and bring nature indoors!",
      images: [plant1, plant2],
    },
  ];

  return (
    <>
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="flex items-center">
            <FaLeaf className="text-green-500 text-3xl" />
            <span className="text-xl font-bold text-green-500 ml-2">GREENSHOP</span>
          </div>
          <nav className="flex items-center space-x-6">
            <a href="#" className="text-gray-800 hover:text-green-500">Home</a>
            <a href="#" className="text-gray-800 hover:text-green-500">Shop</a>
            <a href="#" className="text-gray-800 hover:text-green-500">Plant Care</a>
            <a href="#" className="text-gray-800 hover:text-green-500">Blogs</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="text-gray-800 hover:text-green-500">
              <FaSearch />
            </button>
            <button className="text-gray-800 hover:text-green-500">
              <FaShoppingCart />
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded">
              Login
            </button>
          </div>
        </div>
      </header>
      <section className="hero">
        <div className="container mx-auto py-16 px-6">
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div key={index} className="flex items-center justify-between p-8">
                <div className="flex-1 pr-8">
                  <h1 className="text-3xl font-bold mb-4">{slide.title}</h1>
                  <p className="text-lg mb-8">{slide.description}</p>
                  <button className="bg-green-500 text-white px-4 py-2 rounded">Shop Now</button>
                </div>
                <div className="flex-1 flex justify-center items-center">
                  <div className="flex items-end">
                    <img src={slide.images[0]} alt={`Slide ${index + 1} Large`} className="w-2/3 mb-4" />
                    <img src={slide.images[1]} alt={`Slide ${index + 1} Small`} className="w-1/3 ml-4 mb-4" />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Header;
