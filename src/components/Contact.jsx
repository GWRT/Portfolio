import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';

import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BiLogoGithub } from 'react-icons/bi';

import Modal from 'react-modal';
Modal.setAppElement('#root');

export default function Contact() {
    const { t } = useTranslation();
    const form = useRef();

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const openModal = (message, success) => {
        setModalMessage(message);
        setIsSuccess(success);
        setModalIsOpen(true);
        setTimeout(() => {
            closeModal();
        }, 3000);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5r1gjo8', 'template_u1zwuzi', form.current, 'nzCTtGBliCW08dlR_')
            .then((result) => {
                console.log(result.text);
                openModal(t('messageSend'), true);
                form.current.reset(); 
            }, (error) => {
                console.log(error.text);
                openModal(t('messageErrorSend'), false);
            });
    }

    return (
        <div className='flex flex-col w-full py-16 px-4 items-center justify-items-center'>
            <h1 className='text-5xl font-bold text-main-color mb-10'>{t('contactMe')}</h1>
            <div className='max-w-md w-full mx-auto p-6 bg-gray-600 rounded-lg shadow-md'>
                <form ref={form} onSubmit={sendEmail}>
                    <div className='mb-4'>
                        <label className='block text-white text-sm font-semibold mb-2'>{t('yourName')}</label>
                        <input name='from_name' className='text-white w-full px-3 py-2 border rounded-lg bg-gray-800 focus:outline-none focus:border-main-color' required type="text" />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-white text-sm font-semibold mb-2'>{t('yourEmail')}</label>
                        <input name='reply_to' placeholder='email@example.com' className='text-white w-full px-3 py-2 border rounded-lg bg-gray-800 focus:outline-none focus:border-main-color' required type="email" />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-white text-sm font-semibold mb-2'>{t('yourMessage')}</label>
                        <textarea name='message' rows='4' placeholder={t('yourMessagePlaceholder')} className='text-white w-full px-3 py-2 border rounded-lg bg-gray-800 focus:outline-none focus:border-main-color' required type="text" />
                    </div>
                    <div className='flex justify-center'>
                        <button type='submit' className='bg-main-color text-white font-semibold px-4 py-2 rounded-lg hover:bg-main-color/50 focus:outline-white'>{t('sendMessage')}</button>
                    </div>
                </form>
            </div>
            <div className='flex flex-col mt-10'>
                <h2 className="text-center text-white font-semibold underline">{t('contactMeByNetwork')}</h2>
                <div className='flex justify-center space-x-7 mt-5'>
                    <a href="https://www.linkedin.com/in/gramost" target='_blank' rel='noopener noreferrer' className="text-white hover:text-main-color hover:scale-150">
                        <FaLinkedin size={50} />
                    </a>
                    <a href="https://github.com/GWRT" target='_blank' rel='noopener noreferrer' className="text-white hover:text-main-color hover:scale-150">
                        <BiLogoGithub size={50} />
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=gramosti20@gmail.com" target='_blank' rel='noopener noreferrer' title='gramosti20@gmail.com' className="text-white hover:text-main-color hover:scale-150">
                        <IoMdMail size={50} />
                    </a>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Notification Modal"
                className={`p-5 rounded-lg shadow-md flex flex-col items-center fixed top-5 left-1/2 transform -translate-x-1/2 ${isSuccess ? 'bg-green-500' : 'bg-red-500'
                    }`}
                overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50"
            >
                <h2 className="text-white text-lg">{modalMessage}</h2>
                <button onClick={closeModal} className="mt-4 bg-white text-black px-4 py-2 rounded-lg">{t('okMessageForm')}</button>
            </Modal>
        </div>
    )
}
