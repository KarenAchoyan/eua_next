import React from 'react';
import {Image} from 'antd';

const Content = ({result, lang}) => {
    const content = lang === "hy" ? result.content_hy : result.content_en;

    return (
        <div>
            <div className='container mx-auto '>
                <div className='w-[80%] mx-auto mt-24 shadow-2xl'>
                    <img src='/banner.jpg' alt='Banner'/>
                    <div className='text-3xl w-[90%] my-8 mx-auto tracking-wider text-gray-600 font-bold'>
                        <h1 className='text-start w-[80%]'>
                            Registration Open for CaseKey 2025 International Business Competition
                        </h1>
                    </div>
                    <div className='text-start mx-auto  mb-24 w-[90%] text-xl mt-10 tracking-wider font-sans '>
                        <p className='my-6 py-[20px]'>
                            <span>
                                YEREVAN, Armenia — CaseKey Case Competition 2025 registration is now open. This is a great
                            chance
                            for students to demonstrate their problem-solving and analytical skills by tackling
                            real-world
                            business challenges.
                            </span>
                        </p>
                        <p>
                             <span>
                                 This year’s competition introduces an expanded international training
                            program, giving
                            participants the opportunity to collaborate with both local and global experts. The
                            initiative is designed to strengthen students’ strategic thinking and teamwork
                            abilities.
                             </span>
                        </p>
                        <p className='my-6 py-[20px]'>
                            <span>
                               Students from the American University of Armenia (AUA) have actively participated in the CaseKey competition in previous years, showcasing their skills and innovative thinking on both local and international stages
                            </span>
                        </p>
                        <p>
                            <span>
                               In April 2024, students Ovsanna Hovhannisyan (BAB ’24) and Anush Muradyan (BAB ’25), alongside two other team members, advanced to the grand finale in Budapest, Hungary. The event was hosted by Corvinus University and organized by the Corvinus Case Track Community. The Armenia team beat HEC Montreal, Copenhagen Business School, and the University of Washington, attaining first place in the divisional level. Overall, the team achieved an impressive fourth place finish among 16 finalists, following the University of Melbourne, the University of Minnesota, and Niagara College Canada.
                            </span>
                        </p>
                        <p className='my-6 py-[20px]'>
                            <span>
                               “Every step of this journey has been a testament to resilience and growth,” Muradyan shared. “This experience was more than just a competition; it was a journey of self-discovery and empowerment. The network and knowledge we acquired during the competition and beyond were ineffable.” Hovhannisyan concurred, emphasizing the instrumental role her classmates and AUA education played in their success: “At the local level, the team of AUA classmates we formed in the beginning was the most valuable asset. If not for my classmates, I would not have been part of this journey. The innovative mindset, English language skills, and pitching, all of which I developed through the EPIC Strive program at AUA, helped me significantly in this process.”
                            </span>
                        </p>
                    </div>

                    <div className="w-full ">
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
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Content;