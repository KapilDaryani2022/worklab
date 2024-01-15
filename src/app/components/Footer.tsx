'use client';
import { FC, } from 'react';
import Link from 'next/link';

// IMAGES
import ChevronRight from '../../../public/chevron-rigjt.svg';
import LogoSmall from '../../../public/logo-small.svg';
import Instagram from '../../../public/instagram.svg';
import Facebook from '../../../public/facebook.svg';
import Twitter from '../../../public/twitter.svg';

const Footer: FC = () => {
    return (
        <footer>
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
                        <a href=""><LogoSmall /></a>
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
                        </div>
                        <div>
                            <p className="lead">services</p>
                            <ul>
                                <li><Link href="/">Coats</Link></li>
                                <li><Link href="/">Denim</Link></li>
                                <li><Link href="/">Jackets</Link></li>
                                <li><Link href="/">Polo shirts</Link></li>
                                <li><Link href="/">Shirts</Link></li>
                            </ul>
                        </div>
                        <div>
                            <p className="lead">why dubai</p>
                            <ul>
                                <li><Link href="/">New arrivals</Link></li>
                            </ul>
                        </div>
                        <div>
                            <p className="lead">about us</p>
                            <ul>
                                <li><Link href="/">New arrivals</Link></li>
                                <li><Link href="/">Top picks</Link></li>
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