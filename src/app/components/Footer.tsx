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
    return (
        <footer className={darkFooter ? 'darkFooter' : ''}>
            <div className="container">
               <div className="get-in-touch">
                    <div className="get-in-touch-contact">
                        <div className='blank'>
                            <h3>Get In Touch With Us</h3>
                            <p>Lorem ipsum dolor sit amet consectetur. In a duis mi massa pharetra cursus purus tortor turpis. Egestas egestas molestie neque sit nullam.</p>
                        </div>
                        <Link href='/contact-us' className='btn btn-primary'>Contact Us <ChevronRight /></Link>
                    </div>
               </div>
               <div className="footer-bottom">
                   <div className="footer-bottom--social-links">
                        <a href=""><Image src={LogoSmall} alt='logo-small' /></a>
                        <div>
                            <p className="lead">Contact</p>
                            <ul>
                                <li><a href="tel:+19998887654">+1 999 888-76-54</a></li>
                                <li><a href="mailto:hello@worklab.ae">hello@worklab.ae</a></li>
                            </ul>
                        </div>
                        <div className='footer-bottom--social-links-media'>
                            <a href=""><Facebook /></a>
                            <a href=""><Twitter /></a>
                            <a href=""><Instagram /></a>
                        </div>
                   </div>
                   <div className="footer-bottom--links">
                        <div>
                            <p className="lead">Home</p>
                            <ul>
                                <li><Link href="/#services">Services</Link></li>
                                <li><Link href="/#whyDubai">Why Dubai</Link></li>
                                <li><Link href="/#ourValues">Our Values</Link></li>
                                <li><Link href="/#whyUs">Why Us?</Link></li>
                            </ul>
                        </div>
                        <div>
                            <p className="lead">services</p>
                            <ul>
                                <li><Link href="/">Business Setup</Link></li>
                                <li><Link href="/">Ministry Approvals</Link></li>
                                <li><Link href="/">Corporate Services </Link></li>
                            </ul>
                        </div>
                        <div>
                            <p className="lead">why dubai</p>
                            <ul>
                                <li><Link href="/why-dubai">Growth</Link></li>
                                <li><Link href="/why-dubai">Recognition</Link></li>
                                <li><Link href="/why-dubai">Growth Figures</Link></li>
                                <li><Link href="/why-dubai">GDP</Link></li>
                                <li><Link href="/why-dubai">Partnerships</Link></li>
                                <li><Link href="/why-dubai">Innovative Drive</Link></li>
                            </ul>
                        </div>
                        <div>
                            <p className="lead">about us</p>
                            <ul>
                                <li><Link href="/about-us">Why Worklab</Link></li>
                                <li><Link href="/about-us">Mission</Link></li>
                                <li><Link href="/about-us">Values</Link></li>
                                <li><Link href="/about-us">Founders</Link></li>
                                <li><Link href="/about-us">Join Us</Link></li>
                            </ul>
                        </div>
                        <p className="lead copyright">© 2023 — Copyright</p>
                   </div>
               </div>
            </div>
        </footer>
    )
}
export default Footer;