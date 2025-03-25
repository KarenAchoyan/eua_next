import React from 'react';
import Image from "next/image";

const Page = () => {
    return (
        <div className='w-full h-auto'>
            <p className='text-[35px] text-center mt-10'>Մագիստրոսի կրթական ծրագրեր</p>
            <div className='w-full mb-10 flex justify-center items-center mt-10'>
                <div className='w-[80%] h-full flex justify-between flex-wrap items-center'>

                    {/* Մարքեթինգ */}
                    <div className='w-[32%] h-[250px] border-2 relative'>
                        <Image src={'/news.png'} width={300} height={200} alt={'education'} preview={false} title={'img'} className='w-full h-full' />
                        <div className='w-full h-full flex justify-center items-center absolute top-0 bg-black bg-opacity-50'>
                            <p className='text-[20px] text-center text-white font-bold'>Մարքեթինգ</p>
                        </div>
                    </div>

                    {/* Միջազգային հարաբերություններ */}
                    <div className='w-[32%] h-[250px] border-2 relative'>
                        <Image src={'/news.png'} width={300} height={200} alt={'education'} preview={false} title={'img'} className='w-full h-full' />
                        <div className='w-full h-full flex justify-center items-center absolute top-0 bg-black bg-opacity-50'>
                            <p className='text-[20px] text-center text-white font-bold'>Միջազգային հարաբերություններ (MA)</p>
                        </div>
                    </div>

                    {/* Լեզու և հաղորդակցություն */}
                    <div className='w-[32%] h-[250px] border-2 relative'>
                        <Image src={'/news.png'} width={300} height={200} alt={'education'} preview={false} title={'img'} className='w-full h-full' />
                        <div className='w-full h-full flex justify-center items-center absolute top-0 bg-black bg-opacity-50'>
                            <p className='text-[20px] text-center text-white font-bold'>Լեզու և հաղորդակցություն (MA)</p>
                        </div>
                    </div>
                    {/* Լեզու և հաղորդակցություն */}
                    <div className='w-[32%] h-[250px] border-2 relative'>
                        <Image src={'/news.png'} width={300} height={200} alt={'education'} preview={false} title={'img'} className='w-full h-full' />
                        <div className='w-full h-full flex justify-center items-center absolute top-0 bg-black bg-opacity-50'>
                            <p className='text-[20px] text-center text-white font-bold'>Լեզու և հաղորդակցություն (MA)</p>
                        </div>
                    </div>
                    {/* Լեզու և հաղորդակցություն */}
                    <div className='w-[32%] h-[250px] border-2 relative'>
                        <Image src={'/news.png'} width={300} height={200} alt={'education'} preview={false} title={'img'} className='w-full h-full' />
                        <div className='w-full h-full flex justify-center items-center absolute top-0 bg-black bg-opacity-50'>
                            <p className='text-[20px] text-center text-white font-bold'>Լեզու և հաղորդակցություն (MA)</p>
                        </div>
                    </div>
                    {/* Լեզու և հաղորդակցություն */}
                    <div className='w-[32%] h-[250px] border-2 relative'>
                        <Image src={'/news.png'} width={300} height={200} alt={'education'} preview={false} title={'img'} className='w-full h-full' />
                        <div className='w-full h-full flex justify-center items-center absolute top-0 bg-black bg-opacity-50'>
                            <p className='text-[20px] text-center text-white font-bold'>Լեզու և հաղորդակցություն (MA)</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Page;
