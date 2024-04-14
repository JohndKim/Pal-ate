import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next slide
  const nextSlide = () => {
    const slidesLength = children.length;
    setCurrentIndex((currentIndex + 1) % slidesLength);
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    const slidesLength = children.length;
    setCurrentIndex(
      currentIndex === 0 ? (slidesLength - 1) : currentIndex - 1
    );
  };

  return (


 

    <div className="relative">
      <button
        onClick={prevSlide}
        className="absolute top-1/2 transform -translate-y-1/2 left-4 z-10 bg-gray-300 p-2 rounded"
      >
        <img
            className="left-[36px] absolute w-[29px] h-[52px] top-[26px]"
            alt="Arrow"
            src="https://c.animaapp.com/WxRntFR4/img/arrow-2.svg"/>

      </button>

      <TransitionGroup className="flex transition-all duration-500 ease-in-out">
        <CSSTransition key={currentIndex} timeout={500} classNames="slide">

          <div className="w-full h-64 md:h-96 lg:h-screen relative overflow-hidden">
                    {/* SHADOW */}
                <img
                    className="absolute w-[564px] h-[686px] top-[25px] left-[26px]"
                    alt="Rectangle"
                    src="https://c.animaapp.com/WxRntFR4/img/rectangle-22.svg"
                />        
                {/* WHITE BOX */}
                <img
                    className="absolute w-[564px] h-[686px] top-0 left-0"
                    alt="Rectangle"
                    src="https://c.animaapp.com/WxRntFR4/img/rectangle-23.svg"
                />
                
                {/* ORIGIN */}
                <div className="absolute w-[432px] top-[508px] left-[52px] [font-family:'Orelega_One',Helvetica] font-normal text-black text-[40px] tracking-[0] leading-[normal]">
                    Region of Origin: China
                </div>
                {/* TOTAL TIMES EATEN */}
                <div className="absolute w-[525px] top-[557px] left-[52px] [font-family:'Orelega_One',Helvetica] font-normal text-black text-[40px] tracking-[0] leading-[normal]">
                    Total Times Eaten:
                </div>
                {/* NAME OF MASCOT */}
                <div className="absolute w-[160px] top-[37px] left-[207px] [font-family:'Orelega_One',Helvetica] font-normal text-black text-[70px] tracking-[0] leading-[normal] whitespace-nowrap">
                    BAO
                </div>
                
                {/* MASCOT IMAGE */}
                {/* <img
                    className="absolute w-[406px] h-[405px] top-[94px] left-[61px] object-cover"
                    alt="Untitled artwork"
                    src="https://c.animaapp.com/WxRntFR4/img/untitled-artwork--3--2@2x.png"
                /> */}
                {children[currentIndex]}

                
                {/* LOGO */}
                <img
                    className="top-[25px] left-[418px] absolute w-[132px] h-[132px] object-cover"
                    alt="Untitled artwork"
                    src="https://c.animaapp.com/WxRntFR4/img/untitled-artwork--8--2@2x.png"
                />
          </div>
        </CSSTransition>
      </TransitionGroup>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 transform -translate-y-1/2 right-4 z-10 bg-gray-300 p-2 rounded"
      >
        <img
            className="left-[39px] absolute w-[29px] h-[52px] top-[26px]"
            alt="Arrow"
            src="https://c.animaapp.com/WxRntFR4/img/arrow-3.svg"
        />
      </button>
    </div>
  );
};

export default Carousel;