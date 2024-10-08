'use client';
import { FC, useEffect, useState } from 'react';
import { usePathname } from '../../../node_modules/next/navigation';
import Link from 'next/link';
import Image from 'next/image';
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
import ArrowLinkSvg from '../../../public/arrow-link.svg'
import Loading from '../../../public/loading.gif'
import Script from 'next/script';


const Header: FC = () => {
    const router = usePathname();
    useEffect(() => {
        if (router === '/about-us' || router === '/mainland' || router === '/offshore' || router === '/freezone' || router.includes('services')) {
            document.body.classList.add("dark-theme");
        } else {
            document.body.classList.remove("dark-theme");
        }
        setActive(false)
    }, [router]);
    const [active, setActive] = useState(false);
    useEffect(() => {
        if (active) {
            document.body.classList.add('openNav');
        } else {
            document.body.classList.remove('openNav');
        }
    }, [active]);
    const options = {
        enabled: true,
        chatButtonSetting: {
          backgroundColor: "#0E8730",
          ctaText: "Chat with us",
          borderRadius: "25",
          marginLeft: "0",
          marginRight: "20",
          marginBottom: "20",
          ctaIconWATI: false,
          position: "right"
        },
        brandSetting: {
          brandName: "Worklab",
          brandSubTitle: "undefined",
          brandImg: ArrowLinkSvg,
          welcomeText: "Hi there!\nHow can I help you?",
          messageText: "",
          backgroundColor: "#3b3b3b",
          ctaText: "Chat with us",
          borderRadius: "25",
          autoShow: false,
          phoneNumber: "971505472769"
        }
    };
    
    useEffect(() => {
        // Call the function after the script is loaded
        if (window.CreateWhatsappChatWidget) {
          window.CreateWhatsappChatWidget(options);
        }
    }, []);
    return (
        <>
        <Script
            src="https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?83145"
            strategy="lazyOnload"
            onLoad={() => {
            // Initialize the widget once the script has loaded
                if (window.CreateWhatsappChatWidget) {
                    window.CreateWhatsappChatWidget(options);
                }
            }}
        />
        <header className='animate__animated animate__fadeIn'>
            <div className="container">
                <div className="flex">
                    <Link href='/' className='logo'>
                        <Logo />
                    </Link>
                    <div className={!active ? 'burger' : 'burger is-active'} id="burger" onClick={() => {setActive(!active)}}>
                        <span className="burger-line"></span>
                        <span className="burger-line"></span>
                        <span className="burger-line"></span>
                    </div>
                    <div className={active ? "nav-list active" : 'nav-list'}>
                        <div className="services">
                            <p className='nav-list--item services'>
                                Business Setup <EndIcon />
                            </p>
                            <div className="services-div">
                                <div className="services-div--inner">
                                    <div className="services-div--list">
                                        <Link href={'/mainland'}>
                                            <div>
                                                <HeaderIcon5 />
                                            </div>
                                            <div>
                                                <p>Mainland </p>
                                                <p>Local Roots, Global Reach in UAE.</p>
                                            </div>
                                        </Link>
                                        <Link href={'/freezone'}>
                                            <div>
                                                <HeaderIcon6 />
                                            </div>
                                            <div>
                                                <p>Freezone</p>
                                                <p>Strategic Freedom for Growth in UAE.</p>
                                            </div>
                                        </Link>
                                        <Link href={'/offshore'}>
                                            <div>
                                                <HeaderIcon7 />
                                            </div>
                                            <div>
                                                <p>Offshore</p>
                                                <p>Expand Globally, Operate Seamlessly in UAE.</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="services">
                            <p className='nav-list--item services'>
                                Services <EndIcon />
                            </p>
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
                                        <Link href={'/services/corporate-services'}>
                                            <div>
                                                <HeaderIcon3 />
                                            </div>
                                            <div>
                                                <p>Corporate Services</p>
                                                <p>Your Corporate Journey, Elevated.</p>
                                            </div>
                                        </Link>
                                        <Link href={'/services/brand-to-uae'}>
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
                        <div className="services">
                            <p className='nav-list--item services'>
                                Community
                            </p>
                            <div className="services-div community">
                                <ArrowLinkSvg />
                                Coming Soon
                                <Image src={Loading} alt="loading" />
                            </div>
                        </div>
                    </div>
                    <Link href='/contact-us' className='nav-list--item'>Contact Us</Link>
                </div>
            </div>
        </header>
    </>
    )
}
export default Header;  