import React from 'react';
import { useTranslation } from 'react-i18next';
import { BiLogoReact, BiLogoHtml5, BiLogoCss3, BiLogoJavascript } from 'react-icons/bi';
import { FaNode, FaPython, FaJava, FaLaravel } from "react-icons/fa";
import { IoLogoVue } from "react-icons/io5";
import { IconContext } from 'react-icons/lib';
import { SiMysql, SiVite, SiTailwindcss, SiDjango, SiMongodb, SiSqlite } from 'react-icons/si';

import Tooltip from './Utils/Tooltip';

export default function Skills() {
  const { t } = useTranslation();

  const iconSize = 80;
  const iconColor = 'black';

  return (
    <div className='flex flex-col items-center w-full px-4 pt-16'>
      <h1 className='mb-10 text-5xl font-bold w-min text-main-color'>{t('skillsTitle')}</h1>

      <div className='grid w-full grid-cols-1 gap-4 p-10 m-10 md:grid-cols-2'>
        <div className='flex flex-col items-center p-6 bg-white rounded-lg shadow-md'>
          <h2 className='mb-4 text-2xl font-bold text-center'>{t('frontendTechnologies')}</h2>
          <div className='flex flex-wrap justify-center gap-4'>
            <IconContext.Provider value={{ color: iconColor, size: iconSize }}>
              <Tooltip text="HTML5"><BiLogoHtml5 /></Tooltip>
              <Tooltip text="CSS3"><BiLogoCss3 /></Tooltip>
              <Tooltip text="React"><BiLogoReact /></Tooltip>
              <Tooltip text="Vite"><SiVite /></Tooltip>
              <Tooltip text="Vue.js"><IoLogoVue /></Tooltip>
              <Tooltip text="Tailwind CSS"><SiTailwindcss /></Tooltip>
            </IconContext.Provider>
          </div>
        </div>
        <div className='flex flex-col items-center p-6 bg-white rounded-lg shadow-md'>
          <h2 className='mb-4 text-2xl font-bold text-center'>{t('backendTechnologies')}</h2>
          <div className='flex flex-wrap justify-center gap-4'>
            <IconContext.Provider value={{ color: iconColor, size: iconSize }}>
              <Tooltip text="JavaScript"><BiLogoJavascript /></Tooltip>
              <Tooltip text="Node.js"><FaNode /></Tooltip>
              <Tooltip text="Django"><SiDjango /></Tooltip>
              <Tooltip text="Laravel"><FaLaravel /></Tooltip>
            </IconContext.Provider>
          </div>
        </div>
        <div className='flex flex-col items-center p-6 bg-white rounded-lg shadow-md'>
          <h2 className='mb-4 text-2xl font-bold text-center'>{t('databases')}</h2>
          <div className='flex flex-wrap justify-center gap-4'>
            <IconContext.Provider value={{ color: iconColor, size: iconSize }}>
              <Tooltip text="MySQL"><SiMysql /></Tooltip>
              <Tooltip text="MongoDB"><SiMongodb /></Tooltip>
              <Tooltip text="SQLite"><SiSqlite /></Tooltip>
            </IconContext.Provider>
          </div>
        </div>
        <div className='flex flex-col items-center p-6 bg-white rounded-lg shadow-md'>
          <h2 className='mb-4 text-2xl font-bold text-center'>{t('programmingLanguages')}</h2>
          <div className='flex flex-wrap justify-center gap-4'>
            <IconContext.Provider value={{ color: iconColor, size: iconSize }}>
              <Tooltip text="Python"><FaPython /></Tooltip>
              <Tooltip text="Java"><FaJava /></Tooltip>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </div>
  )
}
