'use client';
import { FC, useState, useEffect } from 'react';
import Link from 'next/link';

// CSS
// import '../styles/header.css'
// IMAGES
// import Logo from '../../../public/logo.svg'
// import EndIcon from '../../../public/end-icon.svg'

const Header: FC = () => {
    return (
        <header>
            <div className="container">
                <div className="flex">
                    <Link href='/' className='logo'>
                        {/* <Logo /> */}
                    </Link>
                    <div className="nav-list">
                        <div className="services">
                            <Link href={'/'} className='nav-list--item services'>
                                {/* Services <EndIcon /> */}
                            </Link>
                            <div className="services-div">
                                <div className="services-div--inner">
                                    <div className="services-div--list">
                                        <div>
                                            <p>Business Setup</p>
                                            <div className="services-div--list--inner-list">
                                                <Link href={'/services'}>Link 1</Link>
                                                <Link href={'/services'}>Link 2</Link>
                                                <Link href={'/services'}>Link 3</Link>
                                                <Link href={'/services'}>Link 4</Link>
                                            </div>
                                        </div>
                                        <div>
                                            <p>Corporate</p>
                                            <div className="services-div--list--inner-list">
                                                <Link href={'/services'}>Link 1</Link>
                                                <Link href={'/services'}>Link 2</Link>
                                                <Link href={'/services'}>Link 3</Link>
                                                <Link href={'/services'}>Link 4</Link>
                                            </div>
                                        </div>
                                        <div>
                                            <p>Ministry</p>
                                            <div className="services-div--list--inner-list">
                                                <Link href={'/services'}>Link 1</Link>
                                                <Link href={'/services'}>Link 2</Link>
                                                <Link href={'/services'}>Link 3</Link>
                                                <Link href={'/services'}>Link 4</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link href={'/'} className='nav-list--item'>Why Dubai</Link>
                        <Link href={'/'} className='nav-list--item'>About Us</Link>
                        <Link href={'/'} className='nav-list--item'>Community</Link>
                        <Link href={'/'} className='nav-list--item'>Contact Us</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;  