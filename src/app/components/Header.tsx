'use client';
import { FC, useState, useEffect } from 'react';
import Link from 'next/link';

// CSS
// import '../styles/header.css'
// IMAGES
import Logo from '../../../public/logo.svg'
import EndIcon from '../../../public/end-icon.svg'
import HeaderIcon from '../../../public/header-1.svg'
import HeaderIcon2 from '../../../public/header-2.svg'
import HeaderIcon3 from '../../../public/header-3.svg'
import HeaderIcon4 from '../../../public/header-4.svg'
import HeaderIcon5 from '../../../public/header-5.svg'
import HeaderIcon6 from '../../../public/header-6.svg'
import HeaderIcon7 from '../../../public/header-7.svg'


const Header: FC = () => {
    return (
        <header>
            <div className="container">
                <div className="flex">
                    <Link href='/' className='logo'>
                        <Logo />
                    </Link>
                    <div className="nav-list">
                        <div className="services">
                            <Link href='/' className='nav-list--item services'>
                                Business Setup <EndIcon />
                            </Link>
                            <div className="services-div">
                                <div className="services-div--inner">
                                    <div className="services-div--list">
                                        <Link href={'/mainland'}>
                                            <div>
                                                <HeaderIcon5 />
                                            </div>
                                            <div>
                                                <p>Mainland </p>
                                                <p>Turning Ideas into Enterprises, Seamlessly.</p>
                                            </div>
                                        </Link>
                                        <Link href={'/freezone'}>
                                            <div>
                                                <HeaderIcon6 />
                                            </div>
                                            <div>
                                                <p>Freezone</p>
                                                <p>Your Corporate Journey, Elevated.</p>
                                            </div>
                                        </Link>
                                        <Link href={'/offshore'}>
                                            <div>
                                                <HeaderIcon7 />
                                            </div>
                                            <div>
                                                <p>Offshore</p>
                                                <p>Navigating the Maze of Approvals with Ease.</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="services">
                            <Link href='/' className='nav-list--item services'>
                                Services <EndIcon />
                            </Link>
                            <div className="services-div">
                                <div className="services-div--inner">
                                    <div className="services-div--list">
                                        <Link href={'/services/business-planning'}>
                                            <div>
                                                <HeaderIcon />
                                            </div>
                                            <div>
                                                <p>Business Planning</p>
                                                <p>Turning Ideas into Enterprises, Seamlessly.</p>
                                            </div>
                                        </Link>
                                        <Link href={'/services/brand-and-grow'}>
                                            <div>
                                                <HeaderIcon2 />
                                            </div>
                                            <div>
                                                <p>Brand And Grow</p>
                                                <p>Your Corporate Journey, Elevated.</p>
                                            </div>
                                        </Link>
                                        <Link href={'/'}>
                                            <div>
                                                <HeaderIcon3 />
                                            </div>
                                            <div>
                                                <p>Corporate Services</p>
                                                <p>Your Corporate Journey, Elevated.</p>
                                            </div>
                                        </Link>
                                        <Link href={'/'}>
                                            <div>
                                                <HeaderIcon4 />
                                            </div>
                                            <div>
                                                <p>Brand To UAE</p>
                                                <p>Navigating the Maze of Approvals with Ease.</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link href='/why-dubai' className='nav-list--item'>Why Dubai</Link>
                        <Link href='/about-us' className='nav-list--item'>About Us</Link>
                        <Link href='/' className='nav-list--item'>Community</Link>
                    </div>
                    <Link href='/contact-us' className='nav-list--item'>Contact Us</Link>
                </div>
            </div>
        </header>
    )
}
export default Header;  