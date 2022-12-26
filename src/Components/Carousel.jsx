import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function Carousel() {
  const slides = [
    {
      url: 'https://www.algerie-eco.com/wp-content/uploads/2018/09/terre-agricole.jpg',
    },
    {
      url: 'https://www.beytic.com/_uploads/photos/IMG-781af21b63f05236141b6c3b7ef40708-V_1.jpeg',
    },
    {
      url: 'https://img.hwnstatic.com/500/350/80/false/hS6xM66VW7aNaENID2Tg7d19G6qdXpjnewxnKUfqbvlQ6ej8o:v5OGtc4T7tox5PKrWFnQWSoktVUZAXRE5tZYkscSw4dvnT0JiQ:ls1KSDUb0P:RQ__',
    },

    {
      url: 'https://www.ifress-dz.com/Edisoft/images/activites/fixe/bungalow/6.jpg',
    },
    {
      url: 'https://cdn7.ouedkniss.com/1600/medias/announcements/images/48RQZ0/IkbqlbjvPG9BJoAejLgEHMApqqeTzP8VN8YQNLlM.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1 ;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='mt-[-50px] max-w-[300px] h-[300px] w-full py-16 px-4 '>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className=' w-full h-full rounded-2xl bg-center  bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;