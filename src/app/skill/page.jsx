import React from 'react'
import { FaJava, FaPython, FaTerminal } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";
import { SiAndroidstudio, SiCsharp, SiNotepadplusplus, SiPhp } from "react-icons/si";

const SkillPage = () => {
    return (
        <>
            <div className='w-full flex flex-col justify-center items-center'>
                <div className='w-5/6 mt-6 text-center'>
                    <h1 className='font-semibold text-2xl'>Skill</h1>
                </div>
                <div className='w-5/6 mt-4 grid md:grid-cols-6 sm:grid-cols-4 grid-cols-2 gap-4'>
                    <div className='w-full flex justify-center items-center'>
                        <div className='sm:w-[130px] sm:h-[130px] w-full h-[120px] flex flex-col justify-center items-center rounded hover:text-white text-primary duration-200 hover:bg-primary border border-primary'>
                            <FaPython size={50} />
                            <span className='font-semibold '>Python</span>
                        </div>
                    </div>
                    <div className='w-full flex justify-center items-center'>
                        <div className='sm:w-[130px] sm:h-[130px] w-full h-[120px] flex justify-center items-center border rounded hover:text-white text-primary duration-200 hover:bg-primary flex-col border-primary'>
                            <DiJavascript1 size={50} />
                            <span className='font-semibold'>Javascript</span>
                        </div>
                    </div>
                    <div className='w-full flex justify-center items-center'>
                        <div className='sm:w-[130px] sm:h-[130px] w-full h-[120px] flex justify-center items-center border rounded hover:text-white text-primary duration-200 hover:bg-primary flex-col border-primary'>
                            <FaJava size={50} />
                            <span className='font-semibold'>Java</span>
                        </div>
                    </div>
                    <div className='w-full flex justify-center items-center'>
                        <div className='sm:w-[130px] sm:h-[130px] w-full h-[120px] flex justify-center items-center border rounded hover:text-white text-primary duration-200 hover:bg-primary flex-col border-primary'>
                            <TbBrandCpp size={50} />
                            <span className='font-semibold'>C++</span>
                        </div>
                    </div>
                    <div className='w-full flex justify-center items-center'>
                        <div className='sm:w-[130px] sm:h-[130px] w-full h-[120px] flex justify-center items-center border rounded hover:text-white text-primary duration-200 hover:bg-primary flex-col border-primary'>
                            <SiCsharp size={50} />
                            <span className='font-semibold'>C#</span>
                        </div>
                    </div>
                    <div className='w-full flex justify-center items-center'>
                        <div className='sm:w-[130px] sm:h-[130px] w-full h-[120px] flex justify-center items-center border rounded hover:text-white text-primary duration-200 hover:bg-primary flex-col border-primary'>
                            <SiPhp size={50} />
                            <span className='font-semibold'>PHP</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-col justify-center items-center mt-4'>
                <div className='w-5/6 mt-6 text-center'>
                    <h1 className='font-semibold text-2xl'>Tools</h1>
                </div>
                <div className='w-5/6 mt-4 grid md:grid-cols-6 sm:grid-cols-4 grid-cols-2 gap-4'>
                    <div className='w-full flex justify-center items-center'>
                        <div className='sm:w-[130px] sm:h-[130px] w-full h-[120px] flex flex-col justify-center items-center rounded hover:text-white text-primary duration-200 hover:bg-primary border border-primary'>
                            <SiNotepadplusplus size={50} />
                            <span className='font-semibold '>Notepad++</span>
                        </div>
                    </div>
                    <div className='w-full flex justify-center items-center'>
                        <div className='sm:w-[130px] sm:h-[130px] w-full h-[120px] flex flex-col justify-center items-center rounded hover:text-white text-primary duration-200 hover:bg-primary border border-primary'>
                            <SiAndroidstudio size={50} />
                            <span className='font-semibold whitespace-nowrap'>Android Studio</span>
                        </div>
                    </div>
                    <div className='w-full flex justify-center items-center'>
                        <div className='sm:w-[130px] sm:h-[130px] w-full h-[120px] flex flex-col justify-center items-center rounded hover:text-white text-primary duration-200 hover:bg-primary border border-primary'>
                            <FaTerminal size={50} />
                            <span className='font-semibold '>CMD</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SkillPage