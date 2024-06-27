import React from 'react';
import { useTranslation } from 'react-i18next';

export default function AboutMe() {
    const { t } = useTranslation();

    return (
        <>
            <div className='flex flex-col w-full bg-white py-16 px-4 items-center'>
                <h1 className='text-5xl font-bold text-main-color mb-10'>{t('aboutMe')}</h1>
                <div className='flex w-full flex-col md:flex-row items-center justify-items-center'>
                    <div className='flex w-1/2 justify-center '>
                        <img className='w-1/2 rounded-full blur-[0.5px]' src='/perfilPicture.jpg' alt='Perfil Picture' />
                    </div>
                    <div className='w-full md:2/3 p-10'>
                        <h1 className='text-3xl font-bold mb-5 text-center md:text-start'>{t('hiImGilbert')}</h1>
                        <p>{t('descriptionGilbert')}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
