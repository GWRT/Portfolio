import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './Utils/LanguageSwitcher'

export default function NavBar({ refs }) {
  const { t } = useTranslation();

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    setNav(false);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <div className='flex w-full space-x-10'>
        <h1 className='text-3xl font-bold text-main-color'>{t('myPortfolio')}</h1>
        <LanguageSwitcher />
      </div>
      <ul className='hidden md:flex'>
        <li className='p-4 cursor-pointer' onClick={() => scrollToSection(refs.home)}>{t('home')}</li>
        <li className='p-4 cursor-pointer whitespace-nowrap' onClick={() => scrollToSection(refs.about)}>{t('aboutMeNav')}</li>
        <li className='p-4 cursor-pointer' onClick={() => scrollToSection(refs.skills)}>{t('skills')}</li>
        <li className='p-4 cursor-pointer' onClick={() => scrollToSection(refs.projects)}>{t('projects')}</li>
        <li className='p-4 cursor-pointer' onClick={() => scrollToSection(refs.contact)}>{t('contact')}</li>
      </ul>

      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-main-color m-4'>{t('myPortfolio')}</h1>
        <ul className='uppercase p-4'>
          <li className='p-4 border-b border-gray-600 cursor-pointer' onClick={() => scrollToSection(refs.home)}>{t('home')}</li>
          <li className='p-4 border-b border-gray-600 cursor-pointer' onClick={() => scrollToSection(refs.about)}>{t('aboutMeNav')}</li>
          <li className='p-4 border-b border-gray-600 cursor-pointer' onClick={() => scrollToSection(refs.skills)}>{t('skills')}</li>
          <li className='p-4 border-b border-gray-600 cursor-pointer' onClick={() => scrollToSection(refs.projects)}>{t('projects')}</li>
          <li className='p-4 border-b border-gray-600 cursor-pointer' onClick={() => scrollToSection(refs.contact)}>{t('contact')}</li>
        </ul>
      </div>
    </div>
  )
}
