'use client';
import { FC, useEffect, useState} from 'react';
import Link from 'next/link';
import { usePathname } from '../../../node_modules/next/navigation';
// IMAGES
import ChevronRight from '../../../public/chevron-rigjt.svg';
import WorklabIcon from '../../../public/worklabIcon.svg';
import CrossIcon from '../../../public/crossIcon.svg';

const PopupCustom: FC = () => {
    const router = usePathname();
    const [showPopup, setShowPopup] = useState(false);
    const [showPopupAlways, setShowPopupAlways] = useState(true);
    const [darkFooter, setDarkFooter] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            const footer = document.querySelector('footer');
            const footerPosition = footer?.getBoundingClientRect().top;
            const scrollPosition = window.scrollY;
            if (scrollPosition > 800 && showPopupAlways && footerPosition && footerPosition > 900) {
                setShowPopup(true);
            } else {
                setShowPopup(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    useEffect(() => {
        if (router === '/contact-us') {
            setDarkFooter(true)
        } else {
            setDarkFooter(false)
        }
    }, [router]);
    const handleCloseModal = () => {
        setShowPopupAlways(false);
        setShowPopup(false);
    }
    return (
        <>
            {showPopup && showPopupAlways && !darkFooter ?
                
                <div className={ 'worklab-icon'}>
                    <div className='cross' onClick={handleCloseModal}>
                        <CrossIcon />
                    </div>
                    <div>
                        <WorklabIcon />
                    </div>
                    <div>
                        <p>Book a discovery call now</p>
                        <Link href={'/contact-us'} className='btn btn-primary'>
                        Start Your Business
                        <ChevronRight />
                        </Link>
                    </div>
                </div> : ''
            }
        </>
    )
}
export default PopupCustom;