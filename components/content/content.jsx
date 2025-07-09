import React from 'react';
import {Image} from 'antd';

const Content = ({result, lang}) => {
    const content = lang === "hy" ? result?.content_hy : result?.content_en;

    return (
        <div>
            <div className='container mx-auto '>
                <div className='w-[80%] mx-auto mt-24 shadow-2xl'>
                    {/* <img src='/banner.jpg' alt='Banner'/>
                    <div className='text-3xl w-[90%] my-8 mx-auto tracking-wider text-gray-600 font-bold'>
                        <h1 className='text-start w-[80%]'>
                            Registration Open for CaseKey 2025 International Business Competition
                        </h1>
                    </div> */}
                    <div className='text-start mx-auto  mb-24 w-[90%] text-xl mt-10 tracking-wider font-sans ' dangerouslySetInnerHTML={{__html: content || ""}}>
                    </div>

                    {/* <div className="w-full ">
                        <div className="flex flex-wrap justify-center gap-5 w-[95%] mx-auto pb-[20px] mb-[30px]">
                            <div><Image src="/banner.jpg" width={250} height={200}/></div>
                            <div><Image src="/banner.jpg" width={250} height={200}/></div>
                            <div><Image src="/banner.jpg" width={250} height={200}/></div>
                            <div><Image src="/banner.jpg" width={250} height={200}/></div>
                            <div><Image src="/banner.jpg" width={250} height={200}/></div>
                            <div><Image src="/banner.jpg" width={250} height={200}/></div>
                            <div><Image src="/banner.jpg" width={250} height={200}/></div>
                            <div><Image src="/banner.jpg" width={250} height={200}/></div>
                        </div>
                    </div> */}


                </div>
            </div>
        </div>
    );
};

export default Content;