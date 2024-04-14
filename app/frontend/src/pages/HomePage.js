import React from 'react'
import Header1 from '../components/Header1'
import line15 from '../images/homepage/line-15.svg'
import line14 from '../images/homepage/line-14.svg'
import line13 from '../images/homepage/line-13.svg'
import line12 from '../images/homepage/line-12.svg'
import chef from '../images/homepage/chef.png'
import ramen from '../images/homepage/ramen.png'
import camera2 from '../images/homepage/camera-2.png'
import usa from '../images/homepage/usa.png'
import chinese from '../images/homepage/chinese.png'
import mexico from '../images/homepage/mexico.png'
import mainpals from '../images/homepage/main_pals.png'


export default function HomePage() {
    return (
        <>
            <Header1 />
            <div className="bg-[#fff4e2] flex flex-row justify-center w-full">
                <div className="bg-[#fff4e2] overflow-hidden w-[1440px] h-[3389px] relative">
                    <div className="w-[656px] h-[653px]>">
                        <img
                            className="absolute w-[656px] h-[653px] top-[-100px] left-[40px] object-cover"
                            alt="main_pal"
                            src={mainpals}
                        />
                    </div>
                    <p className="absolute w-[521px] top-[100px] left-[761px] font-orelega text-black text-[65px] tracking-[0] leading-[normal]">
                        Breaking down&nbsp;&nbsp;barriers one bite at a time!
                    </p>
                    <div className="absolute w-[184px] top-[620px] left-[639px] font-orelega text-black text-[60px] tracking-[0] leading-[normal]">
                        about
                    </div>
                    <p className="absolute w-[487px] top-[350px] left-[761px] font-orelega text-black text-[30px] tracking-[0] leading-[normal]">
                        Compete with your friends &amp; unlock pals along the way!
                    </p>
                    <div className="absolute w-[954px] h-[55px] top-[1902px] left-[486px]">
                        <div className="absolute w-[535px] top-0 left-0 font-orelega text-black text-[60px] tracking-[0] leading-[normal] whitespace-nowrap">
                            cuisine of the day!
                        </div>
                        <img className="absolute w-[429px] h-[2px] top-[37px] left-[525px]" alt="Line" src={line12} />
                    </div>
                    <div className="absolute w-[279px] top-[2697px] left-[604px] font-orelega text-black text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
                        april 14, 2024
                    </div>
                    <div className="absolute w-[535px] top-[2620px] left-[476px] font-orelega text-black text-[60px] tracking-[0] leading-[normal] whitespace-nowrap">
                        dining hall options
                    </div>
                    <img className="absolute w-[429px] h-[4px] top-[2668px] left-[1011px]" alt="Line" src={line12} />
                    <img className="absolute w-[576px] h-[4px] top-[660px] left-[864px]" alt="Line" src={line14} />
                    <img className="absolute w-[569px] h-[4px] top-[660px] left-0" alt="Line" src={line15} />
                    <img className="absolute w-[440px] h-[4px] top-[1939px] left-0" alt="Line" src={line13} />
                    <img className="absolute w-[429px] h-[2px] top-[2668px] left-0" alt="Line" src={line12} />
                    <p className="absolute w-[937px] top-[760px] left-[252px] [font-family:'Plus_Jakarta_Sans-SemiBold',Helvetica] font-semibold text-black text-[30px] text-center tracking-[0] leading-[normal]">
                        Pal-ate game-ifies the way people interact with food! Compete with your friends and collect all of your new
                        cuddly companions! Learn about different foods’ culture, recipes, and local restaurants to buy from all with a
                        single photo!
                    </p>

                    <div className="w-[1714px] h-px">
                        <img className="absolute w-[1440px] h-[3px] top-[1000px] left-0" alt="Line" src={line13} />
                    </div>
                    <div className="absolute w-[1115px] h-[577px] top-[2001px] left-[162px] rounded-[30px]">
                        <div className="w-[1115px] h-[577px] top-0 left-0 rounded-[30px] absolute bg-white border-[3px] border-solid border-black" />
                        <img
                            className="absolute w-[538px] h-[538px] top-[20px] left-[12px] object-cover"
                            alt="Untitled artwork"
                            src={ramen}
                        />
                        <div className="absolute w-[279px] top-[23px] left-[713px] font-orelega text-black text-[55px] tracking-[0] leading-[normal] whitespace-nowrap">
                            Ramen
                        </div>
                        <div className="absolute w-[306px] top-[348px] left-[543px] font-orelega text-black text-[40px] tracking-[0] leading-[normal]">
                            Region of Origin:
                            <div className="w-[98px] h-[29px]">
                                <div className="absolute w-[98px] top-[15px] left-[300px] plus-jakarta-sans font-semibold text-black text-[20px] text-center tracking-[0] leading-[normal]">
                                    Japan
                                </div>
                            </div>
                        </div>
                        <div className="absolute w-[306px] top-[105px] left-[543px] font-orelega text-black text-[40px] tracking-[0] leading-[normal]">
                            Description:
                        </div>
                        <div className="w-[553px] h-[156px]">
                            <p className="absolute w-[553px] top-[160px] left-[540px] plus-jakarta-sans font-semibold text-black text-[18px] tracking-[0] leading-[normal]">
                                Ramen is more than just a bowl of noodles; it&#39;s a culinary journey that captivates the senses. Picture a
                                steaming bowl filled with chewy noodles swimming in a rich, flavorful broth, topped with an array of tantalizing
                                ingredients. The broth, often the heart and soul of ramen, can vary from clear and delicate to creamy and
                                robust, infused with layers of unami goodness derived from ingredients like pork, chicken, seafood, or
                                vegetables.
                            </p>
                        </div>
                    </div>
                    <div className="absolute w-[545px] h-[542px] top-[1234px] left-[133px]">
                        <div className="w-[403px] h-[403px] top-[139px] left-[142px] rounded-[201.5px] absolute bg-white border-[5px] border-solid border-black" />
                        <img
                            className="w-[259px] h-[259px] top-[211px] left-[214px] absolute object-cover"
                            alt="Camera"
                            src={camera2}
                        />
                        <div className="w-[277px] h-[277px] top-0 left-0 rounded-[138.5px] absolute bg-white border-[5px] border-solid border-black" />
                        <img
                            className="absolute w-[228px] h-[246px] top-[16px] left-[18px] object-cover"
                            alt="Untitled artwork"
                            src={chef}
                        />
                        <div className="w-[510px] h-[294px]">
                            <p className="absolute w-[510px] top-[150px] left-[650px] plus-jakarta-sans font-semibold text-black text-[30px] text-center tracking-[0] leading-[normal]">
                                It's simple, really.
                                <br />
                                Take a picture, upload it, and learn all the information about it.
                                <br />
                                Try new cuisines and obtain new Pals! See how your friends compare through a real-time leaderboard!
                            </p>
                        </div>
                    </div>
                    <div className="absolute w-[376px] h-[632px] top-[2781px] left-[956px]">
                        <div className="w-[132px] h-[31px]">
                            <div className="absolute w-[134px] top-[30px] left-[128px] plus-jakarta-sans font-semibold text-black text-[30px] tracking-[0] leading-[normal] whitespace-nowrap">
                                dinner:
                            </div>
                        </div>
                        <p className="absolute w-[346px] top-[333px] left-[20px] plus-jakarta-sans font-semibold text-black text-[18px] text-center tracking-[0] leading-[normal]">
                            Homestyle: Black Pepper Chicken, Fortune Cookie, Fried Pork Pot Sticker, Soy Sauce, Sriracha Sauce Teaspoon,
                            Steamed Brown Rice, Steamed Long Grain Rice4z Portion, Steamed Plant Based Pot Sticker, Sweet &amp; Sour
                            Sauce, Vegetable Fried Rice
                        </p>
                        <img
                            className="absolute w-[376px] h-[376px] top-0 left-0 object-cover"
                            alt="Chinese flag"
                            src={chinese}
                        />
                    </div>
                    <img
                        className="absolute w-[260px] h-[236px] top-[2862px] left-[590px] object-cover"
                        alt="Mexico"
                        src={mexico}
                    />
                    <div className="absolute w-[376px] h-[632px] top-[2781px] left-[570px]">
                        <div className="w-[132px] h-[31px]">
                            <div className="absolute w-[134px] top-[30px] left-[110px] plus-jakarta-sans font-semibold text-black text-[30px] tracking-[0] leading-[normal] whitespace-nowrap">
                                lunch:
                            </div>
                        </div>
                        <p className="absolute w-[260px] top-[333px] left-[20px] plus-jakarta-sans font-semibold text-black text-[18px] text-center tracking-[0] leading-[normal]">
                            Homestyle: Beef Taco Meat Pound, Cajun Baked, Chicken Taco Meat, Mexican Rice, Mexican Toppings,Vegan Refried
                            Beans
                        </p>
                    </div>
                    <img
                        className="absolute w-[279px] h-[279px] top-[2839px] left-[163px] object-cover"
                        alt="Usa"
                        src={usa}
                    />
                    <div className="absolute w-[376px] h-[632px] top-[2781px] left-[160px]">
                        <div className="w-[132px] h-[31px]">
                            <div className="absolute w-[134px] top-[30px] left-[75px] plus-jakarta-sans font-semibold text-black text-[30px] tracking-[0] leading-[normal] whitespace-nowrap">
                                breakfast:
                            </div>
                        </div>
                        <p className="absolute w-[260px] top-[333px] left-[20px] plus-jakarta-sans font-semibold text-black text-[18px] text-center tracking-[0] leading-[normal]">
                            Breakfast: Denver Tofu Scramble, Hard Boiled Eggs, Maple Sausage Links, Oatmeal Station, Sausage Gravy,
                            Scrambled Eggs, Three-Cheese Strata
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}