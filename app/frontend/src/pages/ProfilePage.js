import React, { useState } from "react";

import Header2 from '../components/Header2'
import china from '../images/profilepage/china.png'
import india from '../images/profilepage/india.png'
import greece from '../images/profilepage/greece.png'
import mexico from '../images/profilepage/mexico.png'
import algeria from '../images/profilepage/algeria.png'


export default function ProfilePage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const children = [
        china,
        india,
        greece,
        mexico,
        algeria,
    ]

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
        )
    }


    return (
        <>
            <Header2 />

            {/* BELOW HEADER */}
            <div className="bg-[#fff4e2] flex flex-row justify-center w-full">
                <div className="bg-[#fff4e2] overflow-hidden w-[1440px] h-[1000px] relative">
                    {/* RIGHT BUTTON */}
                    <button onClick={nextSlide}>
                        <div className="absolute w-[110px] h-[110px] top-[575px] left-[1300px] bg-white rounded-[55px] border-[3px] border-solid border-black">
                            <img
                                className="left-[39px] absolute w-[29px] h-[52px] top-[26px]"
                                alt="Arrow"
                                src="https://c.animaapp.com/WxRntFR4/img/arrow-3.svg"
                            />
                        </div>
                    </button>

                    {/* PFP + NAME */}
                    <div className="absolute w-[398px] h-[347px] top-[165px] left-[69px]">
                        {/* PFP + NAME */}
                        <div className="absolute w-[380px] h-[347px] top-0 left-[18px]">
                            <div className="absolute w-[380px] h-[45px] top-[302px] left-0 bg-white rounded-[30px] border-[3px] border-solid border-black" />
                            <div className="top-[9px] left-[62px] bg-black absolute w-[257px] h-[257px] rounded-[128.5px] border-[3px] border-solid" />
                            <div className="top-0 left-[48px] bg-white border-black absolute w-[257px] h-[257px] rounded-[128.5px] border-[3px] border-solid" />
                            <img
                                className="absolute w-[209px] h-[228px] top-[15px] left-[66px] object-cover"
                                alt="Untitled artwork"
                                src="https://c.animaapp.com/WxRntFR4/img/untitled-artwork--5--1@2x.png"
                            />
                            <div className="absolute w-[380px] h-[45px] top-[302px] left-0 bg-white rounded-[30px] border-[3px] border-solid border-black" />
                            <div className="absolute w-[117px] top-[262px] left-[6px] [font-family:'Orelega_One',Helvetica] font-normal text-black text-[30px] tracking-[0] leading-[normal]">
                                Name:
                            </div>
                        </div>
                        {/* IDK */}
                        <div className="absolute w-[19px] h-[23px] top-[165px] left-0 bg-[url(https://c.animaapp.com/WxRntFR4/img/line-5.svg)] bg-[100%_100%]">
                            <img
                                className="absolute w-[19px] h-[23px] top-0 left-0"
                                alt="Line"
                                src="https://c.animaapp.com/WxRntFR4/img/line-5.svg"
                            />
                        </div>
                    </div>


                    {/* BIO + TOTAL CUISINES */}
                    <div className="absolute w-[374px] h-[233px] top-[518px] left-[93px]">
                        {/* BIO */}
                        <div className="absolute w-[374px] h-[192px] top-[41px] left-0 bg-white rounded-[30px] border-[3px] border-solid border-black" />
                        <div className="absolute w-[117px] top-0 left-[2px] [font-family:'Orelega_One',Helvetica] font-normal text-black text-[30px] tracking-[0] leading-[normal]">
                            Bio:
                        </div>
                    </div>
                    {/* TOTAL CUISINES */}
                    <div className="absolute w-[380px] h-[87px] top-[774px] left-[87px]">
                        <div className="absolute w-[380px] h-[45px] top-[42px] left-0 bg-white rounded-[30px] border-[3px] border-solid border-black" />
                        <div className="absolute w-[238px] top-0 left-[6px] [font-family:'Orelega_One',Helvetica] font-normal text-black text-[25px] tracking-[0] leading-[normal]">
                            Total Cuisines:
                        </div>
                    </div>

                    {/* FAVORITE CUISINES */}
                    <div className="absolute w-[380px] h-[45px] top-[915px] left-[87px] bg-white rounded-[30px] border-[3px] border-solid border-black" />
                    <div className="absolute w-[202px] top-[872px] left-[95px] [font-family:'Orelega_One',Helvetica] font-normal text-black text-[25px] tracking-[0] leading-[normal] whitespace-nowrap">
                        Favorite Cuisines:
                    </div>

                    {/* TF IS THIS */}
                    <div className="absolute w-[656px] h-[138px] top-[-488px] left-[717px]">
                        <div className="absolute top-[79px] left-[12px] rotate-[-31.63deg] [font-family:'Orelega_One',Helvetica] font-normal text-black text-[50px] tracking-[0] leading-[normal] whitespace-nowrap">
                            P
                        </div>
                        <div className="absolute top-[62px] left-[44px] rotate-[-27.93deg] [font-family:'Orelega_One',Helvetica] font-normal text-black text-[50px] tracking-[0] leading-[normal] whitespace-nowrap">
                            a
                        </div>
                        <div className="absolute top-[50px] left-[73px] rotate-[-25.17deg] [font-family:'Orelega_One',Helvetica] font-normal text-black text-[50px] tracking-[0] leading-[normal] whitespace-nowrap">
                            l
                        </div>
                        <div className="top-[40px] left-[90px] rotate-[-22.41deg] absolute [font-family:'Orelega_One',Helvetica] font-normal text-black text-[50px] tracking-[0] leading-[normal] whitespace-nowrap">
                            a
                        </div>
                        <div className="absolute top-[30px] left-[120px] rotate-[-19.32deg] [font-family:'Orelega_One',Helvetica] font-normal text-black text-[50px] tracking-[0] leading-[normal] whitespace-nowrap">
                            t
                        </div>
                        <div className="absolute top-[21px] left-[144px] rotate-[-16.23deg] [font-family:'Orelega_One',Helvetica] font-normal text-black text-[50px] tracking-[0] leading-[normal] whitespace-nowrap">
                            e
                        </div>
                        <div className="absolute top-[14px] left-[175px] rotate-[-13.03deg] [font-family:'Orelega_One',Helvetica] font-normal text-black text-[50px] tracking-[0] leading-[normal] whitespace-nowrap">
                            s
                        </div>
                        <div className="absolute top-[9px] left-[202px] rotate-[-10.49deg] [font-family:'Orelega_One',Helvetica] font-normal text-black text-[50px] tracking-[0] leading-[normal] whitespace-nowrap">
                            {""}
                        </div>
                        <div className="absolute top-[5px] left-[221px] rotate-[-7.45deg] [font-family:'Orelega_One',Helvetica] font-normal text-black text-[50px] tracking-[0] leading-[normal] whitespace-nowrap">
                            P
                        </div>
                        <div className="top-px left-[258px] rotate-[-3.75deg] absolute [font-family:'Orelega_One',Helvetica] font-normal text-black text-[50px] tracking-[0] leading-[normal] whitespace-nowrap">
                            a
                        </div>
                        <div className="top-0 left-[289px] rotate-[-0.99deg] absolute [font-family:'Orelega_One',Helvetica] font-normal text-black text-[50px] tracking-[0] leading-[normal] whitespace-nowrap">
                            l
                        </div>
                        <div className="absolute top-0 left-[309px] rotate-[1.55deg] [font-family:'Orelega_One',Helvetica] font-normal text-black text-[50px] tracking-[0] leading-[normal] whitespace-nowrap">
                            s
                        </div>
                        <div className="absolute top-px left-[336px] rotate-[4.08deg] [font-family:'Orelega_One',Helvetica] font-normal text-black text-[50px] tracking-[0] leading-[normal] whitespace-nowrap">
                            {""}
                        </div>
                        <div className="absolute top-[4px] left-[356px] rotate-[6.95deg] [font-family:'Orelega_One',Helvetica] font-normal text-black text-[50px] tracking-[0] leading-[normal] whitespace-nowrap">
                            u
                        </div>
                        <div className="absolute top-[9px] left-[389px] rotate-[10.60deg] [font-family:'Orelega_One',Helvetica] font-normal text-black text-[50px] tracking-[0] leading-[normal] whitespace-nowrap">
                            n
                        </div>
                        <div className="top-[15px] left-[422px] rotate-[13.47deg] absolute [font-family:'Orelega_One',Helvetica] font-normal text-black text-[50px] tracking-[0] leading-[normal] whitespace-nowrap">
                            l
                        </div>
                        <div className="absolute top-[21px] left-[441px] rotate-[16.23deg] [font-family:'Orelega_One',Helvetica] font-normal text-black text-[50px] tracking-[0] leading-[normal] whitespace-nowrap">
                            o
                        </div>
                        <div className="absolute top-[31px] left-[471px] rotate-[19.60deg] [font-family:'Orelega_One',Helvetica] font-normal text-black text-[50px] tracking-[0] leading-[normal] whitespace-nowrap">
                            c
                        </div>
                        <div className="absolute top-[42px] left-[499px] rotate-[23.07deg] [font-family:'Orelega_One',Helvetica] font-normal text-black text-[50px] tracking-[0] leading-[normal] whitespace-nowrap">
                            k
                        </div>
                        <div className="absolute top-[56px] left-[530px] rotate-[26.61deg] [font-family:'Orelega_One',Helvetica] font-normal text-black text-[50px] tracking-[0] leading-[normal] whitespace-nowrap">
                            e
                        </div>
                        <div className="absolute top-[72px] left-[558px] rotate-[30.14deg] [font-family:'Orelega_One',Helvetica] font-normal text-black text-[50px] tracking-[0] leading-[normal] whitespace-nowrap">
                            d
                        </div>
                        <div className="absolute top-[85px] left-[588px] rotate-[32.79deg] [font-family:'Orelega_One',Helvetica] font-normal text-black text-[50px] tracking-[0] leading-[normal] whitespace-nowrap">
                            :
                        </div>
                    </div>

                    {/* CAROUSEL */}
                    <div className="absolute w-[590px] h-[711px] top-[262px] left-[675px]">
                        <img
                            className="absolute w-[596px] h-[711px] top-[25px] left-0"
                            alt="Rectangle"
                            src={children[currentIndex]}
                        />
                    </div>

                    {/* LEFT ARROW */}
                    <button onClick={prevSlide}>
                        <div className="absolute w-[110px] h-[110px] top-[575px] left-[530px] bg-white rounded-[55px] border-[3px] border-solid border-black">
                            <img
                                className="left-[36px] absolute w-[29px] h-[52px] top-[26px]"
                                alt="Arrow"
                                src="https://c.animaapp.com/WxRntFR4/img/arrow-2.svg"
                            />
                        </div>
                    </button>

                    {/* PALS UNLOCKED */}
                    <div className="absolute w-[578px] h-[74px] top-[165px] left-[675px] bg-white rounded-[30px] border-[3px] border-solid border-black">
                        <div className="absolute w-[421px] top-[5px] left-[132px] [font-family:'Orelega_One',Helvetica] font-normal text-black text-[50px] tracking-[0] leading-[normal] whitespace-nowrap">
                            Pals unlocked:
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};