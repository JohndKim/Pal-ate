import React from 'react'
import Header2 from '../components/Header2'

export default function FriendsPage() {
    return(
        <>
            <Header2/>
            <div className="bg-[#fff4e2] flex flex-row justify-center w-full">
                <div className="bg-[#fff4e2] overflow-hidden w-[1440px] h-[2000px] ">
                    {/* FRIENDS HEADER */}
                    <div className="absolute w-[280px] top-[163px] left-[622px] [font-family:'Orelega_One',Helvetica] font-normal text-black text-[70px] tracking-[0] leading-[normal] whitespace-nowrap">
                        Friends
                    </div>
                    {/* titles */}
                    <div className="absolute w-[1089px] h-[53px] top-[259px] left-[233px]">
                        <div className="left-0 absolute w-[226px] h-[43px] top-0 bg-white rounded-[10px] border-[3px] border-solid border-black" />
                        <div className="left-[266px] absolute w-[226px] h-[43px] top-0 bg-white rounded-[10px] border-[3px] border-solid border-black" />
                        <div className="left-[532px] absolute w-[226px] h-[43px] top-0 bg-white rounded-[10px] border-[3px] border-solid border-black" />
                        <div className="left-[798px] absolute w-[226px] h-[43px] top-0 bg-white rounded-[10px] border-[3px] border-solid border-black" />
                        <div className="absolute w-[285px] top-[5px] left-[17px] [font-family:'Orelega_One',Helvetica] font-normal text-black text-[30px] tracking-[0] leading-[normal]">
                            Pals Collected
                        </div>
                        <div className="absolute w-[285px] top-[5px] left-[554px] [font-family:'Orelega_One',Helvetica] font-normal text-black text-[30px] tracking-[0] leading-[normal]">
                            Total Uploads
                        </div>
                        <div className="absolute w-[285px] top-[5px] left-[804px] [font-family:'Orelega_One',Helvetica] font-normal text-black text-[30px] tracking-[0] leading-[normal]">
                            Favorite Cuisine
                        </div>
                        <div className="absolute w-[285px] top-[3px] left-[289px] [font-family:'Orelega_One',Helvetica] font-normal text-black text-[30px] tracking-[0] leading-[normal]">
                            Daily Streak
                        </div>
                    </div>
                    <div className="absolute w-[216px] h-[120px] top-[434px] left-[74px]">
                    {/* ICON 1 */}
                    <div>
                        <div className="top-[41px] absolute w-[216px] left-0 [font-family:'Orelega_One',Helvetica] font-normal text-black text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
                            1.
                        </div>
                        <div className="w-[116px] h-[116px] top-[4px] left-[57px] bg-black rounded-[58px] absolute border-[3px] border-solid" />
                        <div className="w-[115px] h-[115px] top-0 left-[51px] bg-white rounded-[57.5px] border-black absolute border-[3px] border-solid" />
                        <img
                            className="absolute w-[93px] h-[103px] top-[4px] left-[62px] object-cover"
                            alt="Untitled artwork"
                            src="https://c.animaapp.com/6l5Bpvi0/img/untitled-artwork--5--2@2x.png"
                            />
                        </div>
                    </div>
                    {/* NAME 1 */}
                    <div className="absolute w-[258px] top-[468px] left-[294px] [font-family:'Orelega_One',Helvetica] font-normal text-black text-[45px] tracking-[0] leading-[normal]">
                    Sadie
                    </div>
                    {/* ICON 2 */}
                    <div className="absolute w-[216px] h-[125px] top-[573px] left-[74px]">
                        <div className="absolute w-[216px] top-[45px] left-0 [font-family:'Orelega_One',Helvetica] font-normal text-black text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
                            2.
                        </div>
                        <div className="w-[120px] h-[120px] top-[5px] left-[58px] bg-black rounded-[60px] absolute border-[3px] border-solid" />
                        <div className="w-[121px] h-[121px] top-0 left-[51px] bg-white rounded-[60.5px] border-black absolute border-[3px] border-solid" />
                        <img
                            className="h-[111px] left-[57px] absolute w-[109px] top-[3px] object-cover"
                            alt="Untitled artwork"
                            src="https://c.animaapp.com/6l5Bpvi0/img/untitled-artwork--7--4@2x.png"
                        />
                    </div>
                    {/* NAME 2 */}
                    <div className="w-[258px] top-[619px] left-[290px] absolute [font-family:'Orelega_One',Helvetica] font-normal text-black text-[45px] tracking-[0] leading-[normal]">
                    Matthew
                    </div>
                    {/* ICON 3 */}
                    <div className="absolute w-[216px] h-[124px] top-[722px] left-[74px]">
                        <div className="top-[48px] absolute w-[216px] left-0 [font-family:'Orelega_One',Helvetica] font-normal text-black text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
                            3.
                        </div>
                        <div className="w-[120px] h-[120px] top-[4px] left-[58px] bg-black rounded-[60px] absolute border-[3px] border-solid" />
                        <div className="w-[121px] h-[121px] top-0 left-[51px] bg-white rounded-[60.5px] border-black absolute border-[3px] border-solid" />
                        <img
                            className="h-[110px] left-[57px] absolute w-[109px] top-[3px] object-cover"
                            alt="Untitled artwork"
                            src="https://c.animaapp.com/6l5Bpvi0/img/untitled-artwork--7--3@2x.png"
                        />
                    </div>
                    {/* NAME 3 */}
                    <div className="absolute w-[259px] top-[761px] left-[296px] [font-family:'Orelega_One',Helvetica] font-normal text-black text-[45px] tracking-[0] leading-[normal]">
                    Khang
                    </div>
                     {/* ICON 4 */}
                    <div className="absolute w-[216px] h-[125px] top-[870px] left-[74px]">
                        <div className="absolute w-[216px] top-[45px] left-0 [font-family:'Orelega_One',Helvetica] font-normal text-black text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
                            4.
                        </div>
                        <div className="w-[120px] h-[120px] top-[5px] left-[62px] bg-black rounded-[60px] absolute border-[3px] border-solid" />
                        <div className="w-[121px] h-[121px] top-0 left-[54px] bg-white rounded-[60.5px] border-black absolute border-[3px] border-solid" />
                        <img
                            className="h-[111px] left-[61px] absolute w-[109px] top-[3px] object-cover"
                            alt="Untitled artwork"
                            src="https://c.animaapp.com/6l5Bpvi0/img/untitled-artwork--7--4@2x.png"
                        />
                    </div>
                    {/* NAME 4 */}
                    <div className="w-[259px] top-[901px] left-[296px] absolute [font-family:'Orelega_One',Helvetica] font-normal text-black text-[45px] tracking-[0] leading-[normal]">
                    John
                    </div>
                    
                    {/* FRIENDS FOODS */}
                    <div className="absolute w-[680px] h-[108px] top-[1079px] left-[444px]">
                        <div className="absolute w-[584px] top-[16px] left-0 [font-family:'Orelega_One',Helvetica] font-normal text-black text-[70px] tracking-[0] leading-[normal]">
                            Your friends’ food
                        </div>
                        <img
                            className="absolute w-[104px] h-[104px] top-0 left-[576px] object-cover"
                            alt="Camera"
                            src="https://c.animaapp.com/6l5Bpvi0/img/camera-2@2x.png"
                        />
                    </div>

                    {/* ???? */}
                    <div className="absolute w-[18px] h-[22px] top-[678px] left-[727px] bg-[url(https://c.animaapp.com/6l5Bpvi0/img/line-7.svg)] bg-[100%_100%]">
                    <img
                        className="absolute w-[18px] h-[22px] top-0 left-0"
                        alt="Line"
                        src="https://c.animaapp.com/6l5Bpvi0/img/line-7.svg"
                    />
                    </div>

                    <div className="absolute w-[280px] top-[337px] left-[146px] [font-family:'Orelega_One',Helvetica] font-normal text-black text-[50px] tracking-[0] leading-[normal]">
                    Category
                    </div>
                    <div className="absolute w-[280px] top-[337px] left-[1042px] [font-family:'Orelega_One',Helvetica] font-normal text-black text-[50px] tracking-[0] leading-[normal]">
                    Placement
                    </div>
                    <div className="absolute w-[1131px] h-[103px] top-[1546px] left-[215px]">
                    <div className="absolute w-[408px] top-[4px] left-[445px] [font-family:'Orelega_One',Helvetica] font-normal text-black text-[30px] tracking-[0] leading-[normal]">
                        Baklava
                    </div>
                    <div className="absolute w-[408px] top-0 left-[723px] [font-family:'Orelega_One',Helvetica] font-normal text-black text-[30px] text-center tracking-[0] leading-[normal]">
                        Pho
                        <br />
                        from: Sadie
                    </div>
                    <div className="top-[34px] left-[432px] absolute w-[433px] [font-family:'Orelega_One',Helvetica] font-normal text-black text-[30px] tracking-[0] leading-[normal]">
                        from: John
                    </div>
                    <div className="top-[36px] left-[4px] absolute w-[433px] [font-family:'Orelega_One',Helvetica] font-normal text-black text-[30px] tracking-[0] leading-[normal]">
                        from: Matthew
                    </div>
                    <div className="absolute w-[408px] top-[6px] left-0 [font-family:'Orelega_One',Helvetica] font-normal text-black text-[30px] tracking-[0] leading-[normal]">
                        Fried Calamari
                    </div>
                    </div>
                    <div className="absolute w-[408px] top-[2014px] left-[953px] [font-family:'Orelega_One',Helvetica] font-normal text-black text-[30px] text-center tracking-[0] leading-[normal]">
                    Carbonara <br />
                    from John
                    </div>
                    <div className="absolute w-[408px] top-[2014px] left-[112px] [font-family:'Orelega_One',Helvetica] font-normal text-black text-[30px] text-center tracking-[0] leading-[normal]">
                    Huevos Rancheros
                    <br />
                    from: Matthew
                    </div>
                    <div className="absolute w-[408px] top-[2014px] left-[527px] [font-family:'Orelega_One',Helvetica] font-normal text-black text-[30px] text-center tracking-[0] leading-[normal]">
                    Feijoada
                    <br />
                     from: Khang
                    </div>
                    <img
                    className="absolute w-[337px] h-[326px] top-[1208px] left-[147px] object-cover"
                    alt="Calamari"
                    src="https://c.animaapp.com/6l5Bpvi0/img/calamari-1@2x.png"
                    />
                    <img
                    className="absolute w-[338px] h-[326px] top-[1207px] left-[562px] object-cover"
                    alt="Baklava"
                    src="https://c.animaapp.com/6l5Bpvi0/img/baklava-1--1@2x.png"
                    />
                    <img
                    className="absolute w-[345px] h-[326px] top-[1208px] left-[978px] object-cover"
                    alt="Pho"
                    src="https://c.animaapp.com/6l5Bpvi0/img/pho-2@2x.png"
                    />
                    <img
                    className="absolute w-[337px] h-[326px] top-[1669px] left-[147px] object-cover"
                    alt="Element ATK"
                    src="https://c.animaapp.com/6l5Bpvi0/img/2021-04-13-atk-50922-1@2x.png"
                    />
                    <img
                    className="absolute w-[337px] h-[326px] top-[1664px] left-[567px] object-cover"
                    alt="Feji"
                    src="https://c.animaapp.com/6l5Bpvi0/img/feji-1@2x.png"
                    />
                    <img
                    className="absolute w-[333px] h-[331px] top-[1659px] left-[990px] object-cover"
                    alt="Carbonara horizontal"
                    src="https://c.animaapp.com/6l5Bpvi0/img/carbonara-horizontal-square640-v2-1@2x.png"
                    />

                </div>
            </div>
        </>

    );
};

