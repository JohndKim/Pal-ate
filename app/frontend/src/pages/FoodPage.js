import React, { useEffect } from 'react'
import Header2 from '../components/Header2'
import { useDispatch, useSelector } from 'react-redux';

export default function FoodPage() {
    const predictUpdate = useSelector(state => state.predictUpdate)
    const { error, loading, status } = predictUpdate

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
                        <p className="absolute w-[592px] top-0 left-[2px] plus-jakarta-sans font-normal text-black text-[17px] tracking-[0] leading-[normal]">
                            {status.intro}
                        </p>
                        <p className="absolute w-[592px] top-[177px] left-0 plus-jakarta-sans font-normal text-black text-[15px] tracking-[0] leading-[normal]">
                            {status.history}
                        </p>
                    </div>
                    <div className="w-[179px] h-[111px] top-[703px] left-[720px] absolute bg-white rounded-[30px] border-[3px] border-solid border-black">
                        Location
                    </div>
                    <div className="w-[179px] h-[111px] top-[703px] left-[1191px] absolute bg-white rounded-[30px] border-[3px] border-solid border-black">
                        Location
                    </div>
                    <div className="w-[179px] h-[111px] top-[703px] left-[955px] absolute bg-white rounded-[30px] border-[3px] border-solid border-black">
                        Location
                    </div>
                    <div className="w-[394px] h-[158px] top-[955px] left-[104px] absolute bg-white rounded-[30px] border-[3px] border-solid border-black"/>
                    <div className="w-[394px] h-[158px] top-[955px] left-[546px] absolute bg-white rounded-[30px] border-[3px] border-solid border-black"/>
                    <div className="w-[394px] h-[158px] top-[955px] left-[988px] absolute bg-white rounded-[30px] border-[3px] border-solid border-black"/>
                    <div className="absolute w-[422px] h-[522px] top-[305px] left-[104px] bg-white rounded-[100px] border-[3px] border-solid border-black">
                        <img className="absolute w-[385px] h-[476px] top-[20px] left-[25px] object-cover" alt="food_image" src="what.png"/>
                    </div>
                </div>

            </div>
            )}
        </>
    )
}