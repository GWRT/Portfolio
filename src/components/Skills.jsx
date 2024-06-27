import React from 'react';
import { useTranslation } from 'react-i18next';
import { BiLogoReact, BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoGithub } from 'react-icons/bi';
import { FaNode, FaPython, FaJava } from "react-icons/fa";
import { IconContext } from 'react-icons/lib';
import { SiMysql, SiVite, SiTailwindcss, SiDjango, SiMongodb, SiSqlite } from 'react-icons/si';

import Tooltip from './Utils/Tooltip';

export default function Skills() {
  const { t } = useTranslation();

  const iconSize = 80;
  const iconColor = 'black';

  return (
    <div className='flex flex-col w-full pt-16 px-4 items-center'>
      <h1 className='w-min text-5xl font-bold text-main-color mb-10'>{t('skillsTitle')}</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 m-10 p-10 w-full'>
        <div className='bg-white p-6 rounded-lg shadow-md flex flex-col items-center'>
          <h2 className='text-2xl font-bold mb-4 text-center'>{t('frontendTechnologies')}</h2>
          <div className='flex flex-wrap justify-center gap-4'>
            <IconContext.Provider value={{ color: iconColor, size: iconSize }}>
              <Tooltip text="HTML5"><BiLogoHtml5 /></Tooltip>
              <Tooltip text="CSS3"><BiLogoCss3 /></Tooltip>
              <Tooltip text="React"><BiLogoReact /></Tooltip>
              <Tooltip text="Vite"><SiVite /></Tooltip>
              <Tooltip text="Tailwind CSS"><SiTailwindcss /></Tooltip>
            </IconContext.Provider>
          </div>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-md flex flex-col items-center'>
          <h2 className='text-2xl font-bold mb-4 text-center'>{t('backendTechnologies')}</h2>
          <div className='flex flex-wrap justify-center gap-4'>
            <IconContext.Provider value={{ color: iconColor, size: iconSize }}>
              <Tooltip text="JavaScript"><BiLogoJavascript /></Tooltip>
              <Tooltip text="Node.js"><FaNode /></Tooltip>
              <Tooltip text="Django"><SiDjango /></Tooltip>
            </IconContext.Provider>
          </div>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-md flex flex-col items-center'>
          <h2 className='text-2xl font-bold mb-4 text-center'>{t('databases')}</h2>
          <div className='flex flex-wrap justify-center gap-4'>
            <IconContext.Provider value={{ color: iconColor, size: iconSize }}>
              <Tooltip text="MySQL"><SiMysql /></Tooltip>
              <Tooltip text="MongoDB"><SiMongodb /></Tooltip>
              <Tooltip text="SQLite"><SiSqlite /></Tooltip>
            </IconContext.Provider>
          </div>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-md flex flex-col items-center'>
          <h2 className='text-2xl font-bold mb-4 text-center'>{t('programmingLanguages')}</h2>
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
