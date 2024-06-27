import React from 'react';
import { useTranslation } from 'react-i18next';
import { ReactTyped } from 'react-typed';

import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BiLogoGithub } from 'react-icons/bi'

export default function FrontPage() {
  const { t } = useTranslation();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/CV.pdf';
    link.download = 'CV_Gilbert_Ramos_Ticona.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className='text-white'>
      <div className='mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center pt-[96px]'>
        <h1 className='text-main-color font-bold md:text-6xl sm:text-6xl text-4xl md:py-6'>{t('gilbertName')}</h1>
        <div className='flex justify-center items-center py-4'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold'>{t('myMainSkills')}</p>
          <ReactTyped className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-gray-500' strings={['React', 'Javascript', 'Java', 'Python']} typeSpeed={120} backSpeed={140} loop />
        </div>
        <button onClick={handleDownload} className='bg-main-color w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>{t('downloadCV')}</button>
        <div className='flex w-full justify-center space-x-5 mt-14'>
          <a href="https://www.linkedin.com/in/gramost" target='_blank' rel='noopener noreferrer' className="text-white hover:text-main-color hover:scale-150">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/GWRT" target='_blank' rel='noopener noreferrer' className="text-white hover:text-main-color hover:scale-150">
            <BiLogoGithub size={30} />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=gramosti20@gmail.com" target='_blank' rel='noopener noreferrer' title='gramosti20@gmail.com' className="text-white hover:text-main-color hover:scale-150">
            <IoMdMail size={30} />
          </a>
        </div>
      </div>
    </div>
  )
}
