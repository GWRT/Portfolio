// MyProjects.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import SliderAct from './Slider';

export default function MyProjects() {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col w-full bg-white py-16 px-4 items-center justify-items-center'>
        <h1 className='text-5xl font-bold text-main-color mb-10'>{t('myProjects')}</h1>
        <SliderAct t={t} />
    </div>
  );
}
