import React, { useEffect } from 'react'
import Header2 from '../components/Header2'
import { useDispatch, useSelector } from 'react-redux';
import { foods } from '../images/food_images/food';

export default function FoodPage() {
    const predictUpdate = useSelector(state => state.predictUpdate)
    const { error, loading, status } = predictUpdate

    const imageUrl = foods[status.name]

    return (
        <>
            <Header2 />
            {loading ? <div>loading</div>
                : error ? <div>error</div>
                    : (
                        <div className="bg-[#fff4e2] flex flex-row justify-center w-full">
                            <div className="bg-[#fff4e2] overflow-hidden w-[1440px] h-[1641px] relative">
                                <div className="absolute w-[556px] h-[132px] top-[160px] left-[110px]">
                                    <div className="absolute w-[284px] top-0 left-0 font-orelega font-normal text-black text-[80px] tracking-[0] leading-[normal]">
                                        {status.name}
                                    </div>
                                    {/* <p className="absolute w-[552px] top-[79px] left-[4px] plus-jakarta-sans font-normal text-black text-[30px] tracking-[0] leading-[normal]">
                            <span className="font-normal text-black text-[30px] tracking-[0]">
                                originated in:{" "}
                            </span>
                            <span className="plus-jakarta-sans font-light">Vietnam</span>
                        </p> */}
                                </div>
                                <div className="absolute w-[394px] top-[644px] left-[724px] plus-jakarta-sans font-normal text-black text-[30px] tracking-[0] leading-[normal]">
                                    locations in south bend:
                                </div>
                                <div className="absolute w-[394px] top-[884px] left-[103px] plus-jakarta-sans font-normal text-black text-[30px] tracking-[0] leading-[normal]">
                                    recipes:
                                </div>
                                <div className="absolute w-[394px] top-[178px] left-[719px] plus-jakarta-sans font-normal text-black text-[30px] tracking-[0] leading-[normal]">
                                    description:
                                </div>
                                <div className="absolute w-[594px] h-[380px] top-[224px] left-[723px]">
                                    <div className="absolute w-[190px] top-[120px] left-px plus-jakarta-sans font-normal text-black text-[30px] tracking-[0] leading-[normal]">
                                        history:
                                    </div>
                                    <p className="absolute w-[592px] top-0 left-[2px] plus-jakarta-sans font-normal text-black text-[15px] tracking-[0] leading-[normal]">
                                        {status.intro}
                                    </p>
                                    <p className="absolute w-[592px] top-[177px] left-0 plus-jakarta-sans font-normal text-black text-[15px] tracking-[0] leading-[normal]">
                                        {status.history}
                                    </p>
                                </div>
                                <div className="w-[179px] h-[111px] top-[703px] left-[720px] absolute bg-white rounded-[30px] border-[3px] border-solid border-black">
                                    <div className="text-center font-semibold">{status.location[0].name}</div>
                                    <div className="text-center">Rating: {status.location[0].rating}</div>
                                    <div className="text-center">{status.location[0].address}</div>
                                </div>
                                <div className="w-[179px] h-[111px] top-[703px] left-[1191px] absolute bg-white rounded-[30px] border-[3px] border-solid border-black">
                                    <div className="text-center font-semibold">{status.location[1].name}</div>
                                    <div className="text-center">Rating: {status.location[1].rating}</div>
                                    <div className="text-center">{status.location[1].address}</div>
                                </div>
                                <div className="w-[179px] h-[111px] top-[703px] left-[955px] absolute bg-white rounded-[30px] border-[3px] border-solid border-black">
                                    <div className="text-center font-semibold">{status.location[2].name}</div>
                                    <div className="text-center">Rating: {status.location[2].rating}</div>
                                    <div className="text-center">{status.location[2].address}</div>
                                </div>
                                <div className="w-[394px] h-[158px] top-[955px] left-[104px] absolute bg-white rounded-[30px] border-[3px] border-solid border-black">
                                    <div className="text-center font-semibold">{status.recipes[0].title}</div>
                                    <div className="p-2">{status.recipes[0].content}</div>
                                </div>
                                <div className="w-[394px] h-[158px] top-[955px] left-[546px] absolute bg-white rounded-[30px] border-[3px] border-solid border-black">
                                    <div className="text-center font-semibold">{status.recipes[1].title}</div>
                                    <div className="p-2">{status.recipes[1].content}</div>
                                </div>
                                <div className="w-[394px] h-[158px] top-[955px] left-[988px] absolute bg-white rounded-[30px] border-[3px] border-solid border-black">
                                <div className="text-center font-semibold">{status.recipes[2].title}</div>
                                    <div className="p-2">{status.recipes[2].content}</div>
                                </div>
                                <div className="absolute w-[422px] h-[522px] top-[305px] left-[104px] bg-white rounded-[10px] border-[3px] border-solid border-black">
                                    <img className="absolute w-[385px] h-[476px] top-[20px] left-[25px] object-cover" alt="food_image" src={imageUrl} />
                                </div>
                            </div>

                        </div>
                    )}
        </>
    )
}