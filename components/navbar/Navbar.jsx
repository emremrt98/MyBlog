import React from 'react'
import { FaUserCheck } from 'react-icons/fa';
import { FiLogIn, FiSearch } from 'react-icons/fi';
import Link from 'next/link';

export default function Navbar() {
    return (
        <div className='border-b border-border-color shadow-md'>
            <div className='container mx-auto pt-[1.25rem]'>
                <div className='flex justify-between items-center'>
                    <div className='text-[2.25rem] text-primary-text-color flex-1 logo'>Betül Karaağaçlı</div>
                    <div className='relative flex-1'>
                        <input className="search-input" placeholder='Ara...' />
                        <button className='search-btn absolute right-0' type='button'><FiSearch /></button>
                    </div>
                    <div className='flex gap-[1.875rem] flex-1 justify-end'>
                        <Link href="/" className='flex flex-col items-center gap-[0.313rem] hover:text-main-color transition-all'>
                            <FaUserCheck />
                            <span>Üye Ol</span>
                        </Link>
                        <Link href="/" className='flex flex-col items-center gap-[0.313rem] hover:text-main-color transition-all '>
                            <FiLogIn />
                            <span>Giriş Yap</span>
                        </Link>
                    </div>
                </div>
                <nav className='my-[1.875rem]'>
                    <ul className='flex gap-[1.875rem]'>
                        <li><Link href="/" className='text-primary-text-color text-[1rem] hover:text-main-color transition-all'>Haberler</Link></li>
                        <li><Link href="/" className='text-primary-text-color text-[1rem] hover:text-main-color transition-all'>İş Dünyası</Link></li>
                        <li><Link href="/" className='text-primary-text-color text-[1rem] hover:text-main-color transition-all'>Teknoloji</Link></li>
                        <li><Link href="/" className='text-primary-text-color text-[1rem] hover:text-main-color transition-all'>Kişisel Gelişim</Link></li>
                        <li><Link href="/" className='text-primary-text-color text-[1rem] hover:text-main-color transition-all'>Sağlık</Link></li>
                        <li><Link href="/" className='text-primary-text-color text-[1rem] hover:text-main-color transition-all'>Seyahat</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
