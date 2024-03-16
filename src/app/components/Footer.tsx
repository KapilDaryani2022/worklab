'use client';
import { FC, useEffect, useState} from 'react';
import Link from 'next/link';
import { usePathname } from '../../../node_modules/next/navigation';
import Image from 'next/image'
// IMAGES
import ChevronRight from '../../../public/chevron-rigjt.svg';
import LogoSmall from '../../../public/logo-small.png';
import Instagram from '../../../public/instagram.svg';
import Facebook from '../../../public/facebook.svg';
import Twitter from '../../../public/twitter.svg';
import Linkedin from '../../../public/linedin.svg';

const Footer: FC = () => {
    const router = usePathname();
    const [darkFooter, setDarkFooter] = useState(false)
    useEffect(() => {
        if (router === '/about-us' || router === '/mainland' || router === '/offshore' || router === '/freezone' || router.includes('services')) {
            setDarkFooter(true)
        } else {
            setDarkFooter(false)
        }
    }, [router]);
    const currentYear = new Date().getFullYear();
    return (
        <footer className={darkFooter ? 'darkFooter' : ''}>
            <div className="container">
               <div className="get-in-touch">
                    <div className="get-in-touch-contact">
                        <div className='blank'>
                            <h3>Get In Touch With Us</h3>
                            <p>Take the first step towards your business success in the UAE. Reach out now for tailored guidance and dedicated support</p>
                        </div>
                        <Link href='/contact-us' className='btn btn-primary'>Contact Us <ChevronRight /></Link>
                    </div>
               </div>
               <div className="footer-bottom">
                   <div className="footer-bottom--social-links">
                        <a href=""><Image src={LogoSmall} alt='logo-small' /></a>
                        <div>
                            <p className="lead">Contact Us</p>
                            <ul>
                                <li><a href="tel:+971568234147">+971 56 8234 147</a></li>
                                <li><a href="mailto:info@worklab.ae">info@worklab.ae</a></li>
                            </ul>
                        </div>
                        <div className='footer-bottom--social-links-media'>
                            <a href="https://www.facebook.com/WorkLabMedia/" target='_blank'><Facebook /></a>
                            <a href="https://www.linkedin.com/company/worklabmedia" target='_blank'><Linkedin /></a>
                            <a href="https://www.instagram.com/worklab.ae/" target='_blank'><Instagram /></a>
                        </div>
                   </div>
                   <div className="footer-bottom--links">
                        <div>
                            <p className="lead">Business Setup</p>
                            <ul>
                                <li><Link href="/mainland">Mainland</Link></li>
                                <li><Link href="/freezone">Freezone</Link></li>
                                <li><Link href="/offshore">Offshore </Link></li>
                            </ul>
                        </div>
                        <div>
                            <p className="lead">services</p>
                            <ul>
                                <li><Link href="/services/business-planning">Business Planning</Link></li>
                                <li><Link href="/services/brand-and-grow">Brand And Grow</Link></li>
                                <li><Link href="/services/corporate-services">Corporate Services </Link></li>
                                <li><Link href="/services/brand-to-uae">Brand To UAE </Link></li>
                            </ul>
                        </div>
                        <div>
                            <p className="lead">why dubai</p>
                            <ul>
                                <li><Link href="/why-dubai/#recognition">Recognition</Link></li>
                                <li><Link href="/why-dubai/#figuresGrowth">Growth Figures</Link></li>
                                <li><Link href="/why-dubai/#gdpGrowth">GDP</Link></li>
                            </ul>
                        </div>
                        <div>
                            <p className="lead">about us</p>
                            <ul>
                                <li><Link href="/about-us/#whyWeBuild">Why Worklab</Link></li>
                                <li><Link href="/about-us/#ourMission">Mission</Link></li>
                                <li><Link href="/about-us/#joinUs">Join Us</Link></li>
                            </ul>
                        </div>
                        <p className="lead copyright">© {currentYear} — Worklab UAE. Copyright</p>
                   </div>
               </div>
            </div>
        </footer>
    )
}
export default Footer;