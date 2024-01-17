"use client"
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const ProjectPage = () => {
  return (
    <>
      <div className='w-full flex justify-center items-center my-6'>
        <div className='w-5/6 flex flex-col justify-center items-center bg-primary rounded-lg'>
          <div className="w-full flex md:flex-row flex-col justify-between items-center p-8 gap-2">
            <Link href={'https://www.facebook.com/100045942669956/videos/901639388294936/'} className='md:w-1/2 w-full'>
              <Image src={'/project1.png'} width={400} height={400} className='w-full h-auto rounded-md' priority alt='...' />
            </Link>
            <div className='md:w-1/2 w-full text-gray-200'>
              <h1 className='font-bold text-2xl'>01 .</h1>
              <span className='font-semibold text-xl'>Selenium Framework</span>
              <p>Membuat Program Web Automation Berbasiskan Selenium Menggunakan Framework Tanpa Sentuh Coding Sama Sekali. Cuman Modal Inspect Halaman Website Saja.</p>
            </div>
          </div>

          <div className="w-full flex md:flex-row flex-col-reverse justify-between items-center p-8 gap-2">
            <div className='md:w-1/2 w-full text-gray-200 text-start'>
              <h1 className='font-bold text-2xl'>02 .</h1>
              <span className='font-semibold text-xl'>Scraping Gmail</span>
              <p>Program Scraping Gmail. Data Bisa Di Save Dalam Bentuk CSV, API, JSON, dll.</p>
            </div>
            <Link href={'https://www.facebook.com/100045942669956/videos/772111584025035/'} className='md:w-1/2 w-full'>
              <Image src={'/project2.png'} width={400} height={400} className='w-full h-auto rounded-md' priority alt='...' />
            </Link>
          </div>

        </div>
      </div>
    </>
  )
}

export default ProjectPage