import React from 'react';
import Slider from 'react-slick';
import { FaSearch, FaShoppingCart, FaLeaf } from 'react-icons/fa';
import styled from 'styled-components';
import plant1 from '../assets/images/plant1.png';
import plant2 from '../assets/images/plant2.png';

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
              <Slide key={index}>
                <SlideText>
                  <h1>{slide.title}</h1>
                  <p>{slide.description}</p>
                  <button>Shop Now</button>
                </SlideText>
                <SlideImages>
                  <img src={slide.images[0]} alt={`Slide ${index + 1} Large`} className="large-image" />
                  <img src={slide.images[1]} alt={`Slide ${index + 1} Small`} className="small-image" />
                </SlideImages>
              </Slide>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

const Slide = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
`;

const SlideText = styled.div`
  flex: 1;
  padding-right: 2rem;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }

  button {
    background-color: #38a169;
    color: white;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 0.375rem;
    cursor: pointer;
  }
`;

const SlideImages = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .large-image {
    max-width: 70%;
    height: auto;
    margin-bottom: 1rem;
  }

  .small-image {
    max-width: 30%;
    height: auto;
  }
`;

export default Header;
