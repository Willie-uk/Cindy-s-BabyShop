import React, { useState } from "react";

const Carousel = () => {
  const slides = [
    {
      title: "Welcome to Slide 1",
      description: "Discover amazing products and services for your family.",
      image: "https://via.placeholder.com/800x400",
    },
    {
      title: "Slide 2: Trusted Quality",
      description: "Experience the best baby products designed for comfort.",
      image: "https://via.placeholder.com/800x400",
    },
    {
      title: "Slide 3: Exceptional Service",
      description: "We're here to help you find what you need with ease.",
      image: "https://via.placeholder.com/800x400",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-lg shadow-lg">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full h-64 bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: `url(${slide.image})`,
              filter: "brightness(0.7)",
            }}
          >
            <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold text-white">{slide.title}</h2>
              <p className="text-lg text-white mt-2">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex items-center justify-between px-4">
        {/* Back Button */}
        <button
          className="bg-gray-800 bg-opacity-75 text-white px-4 py-2 rounded-full hover:bg-opacity-90 focus:outline-none"
          onClick={prevSlide}
        >
          Back
        </button>

        {/* Next Button */}
        <button
          className="bg-gray-800 bg-opacity-75 text-white px-4 py-2 rounded-full hover:bg-opacity-90 focus:outline-none"
          onClick={nextSlide}
        >
          Next
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
