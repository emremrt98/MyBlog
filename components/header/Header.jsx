import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './styles/header.module.css';
import { AiOutlineTwitter, AiFillInstagram, AiFillYoutube } from 'react-icons/ai';
import { BiChevronDown } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';
import { MdDarkMode } from 'react-icons/md';

export default function Header() {
    const [isActive, setIsActive] = useState(false);
    const hideDarkModeScreen = () => {
        setIsActive(false)
    }

    const [currentTime, setCurrentTime] = useState();

    useEffect(() => {
        const today = new Date();
        const formattedDate = today.toLocaleDateString();
        setCurrentTime(formattedDate);
    }, []);

    return (
        <div className={styles.header}>
            <div className='mx-auto container py-[0.625rem]'>
                <div className={`${styles['header__container']} items-center`}>
                    <div className={`${styles['header__left']} text-[13px]`}>
                        <div className={styles['header__left__item']}>
                            <div ><Link href="/about">Hakkımda</Link></div>
                            <div ><Link href="/contact">İletişim</Link></div>
                        </div>
                        <div className={`${styles['header__left__item']} ${styles['header__left__item--date']}`}>
                            <span>{currentTime}</span>
                        </div>
                    </div>
                    <div className={styles['header__right']}>
                        <div className="flex gap-[1.25rem]">
                            <div className='relative'>
                                <OutsideClickHandler
                                    onOutsideClick={hideDarkModeScreen}>
                                    <label className='flex items-center hover:cursor-pointer' htmlFor='lang'>TR <BiChevronDown /></label>
                                    <input onChange={() => setIsActive(!isActive)} id='lang' type='checkbox' checked={isActive} hidden />
                                    <div className={`gap-[1.25rem] absolute ${styles['header__right__item__lang-content']} text-primary-text-color`}>
                                        <span className='cursor-pointer hover:text-main-color transition-all'>TR</span>
                                        <span className='cursor-pointer hover:text-main-color'>EN</span>
                                    </div>
                                </OutsideClickHandler>

                            </div>
                            <div className='text-xl cursor-pointer'><MdDarkMode /></div>
                        </div>
                        <div className='flex gap-[0.625rem]'>
                            <Link href="" className='text-xl'><AiOutlineTwitter /></Link>
                            <Link href="" className='text-xl'><AiFillInstagram /></Link>
                            <Link href="" className='text-xl'><AiFillYoutube /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
