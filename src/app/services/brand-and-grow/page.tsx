import Image from 'next/image'
import Link from 'next/link';
import ScrollDownImage from '../../../../public/scroll-down.svg';
import EndIcon from '../../../../public/end-icon-2.svg';
import BusinessService from '../../../../public/business-services.webp';
import BusinessService2 from '../../../../public/business-services-2.webp';
import BusinessService3 from '../../../../public/business-services-3.webp';
import ChevronRight from '../../../../public/chevron-rigjt.svg';
import Creative from '../../../../public/creative-grow.webp';
import Community from '../../../../public/community.webp';


export default function MainLand() {
    return (
        <main style={{ backgroundColor: '#101210' }}>
            <section className='business-banner services grow'>
                <div className="container animate__animated animate__fadeInUp">
                    <p className='page-title'>Services</p>
                    <h1>Brand And Grow</h1>
                    <p className='des'>Elevate your brand with our innovative strategies, bolstered by a vibrant freelance community ready to bring creative excellence.</p>
                    <a href='#planningServices'>
                        <ScrollDownImage />
                    </a>
                </div>
            </section>
            <section className='planning-services' id='planningServices'>
                <div className="container">
                    <div className="common--container">
                        <p className='page-title'>Brand and Grow Services</p>
                        <h2>Elevate Your Presence with Our Powerful Services!</h2>
                        <p>Empower your brand with creative strategies that resonate with your audience and drive growth.</p>
                    </div>
                    <div className="planning-services--container brand-grow">
                        <div className='sixty-width white'>
                            <div>
                                <h3>Naming</h3>
                                <p>Craft a compelling name that captures the essence and values of your brand.</p>
                            </div>
                        </div>
                        <div className='foutry-width'>
                            <div>
                                <h3>Portfolio </h3>
                                <p>Curate your brand's essence with impactful brochures and presentations that captivate and convince</p>
                            </div>
                        </div>
                        <div className='seventy-width white' style={{ alignItems: 'center' }}>
                            <div>
                                <h3>Design Services</h3>
                                <p>From logos to social media graphics, our design mastery covers all your branding needs with creativity and flair.</p>
                            </div>
                        </div>
                        <div className='thirty-width'>
                            <div>
                                <h3>Grow Your <br />Business Now!</h3>
                                <p>Start your journey to brand prominence in the UAE market today.</p>
                                <Link href='/contact-us' className='btn btn-primary'>Contact Us <ChevronRight /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='business-designation'>
                <div className="container">
                    <div className="business-designation--container">
                        <p className='page-title'>Business Digitalization</p>
                        <Image src={Creative} alt='Creative' />
                        <div className="common--container">
                            <h2>Digitalize Your Business</h2>
                            <p>Want to take your offline business to  online and generate massive revenue? You’re in the right place!</p>
                        </div>
                    </div>
                    <Image src={Community} alt='Community' />
                </div>
            </section>
            <section className='planning-sectors'>
                <div className="container">
                    <div className="common--container">
                        <p className='page-title'>Sectors</p>
                        <h2>Brand And Grow <br/>For Sectors</h2>
                        <p>Specialized corporate services tailored for Mainland, Offshore, and FreeZone sector intricacies.</p>
                    </div>
                    <div className="planning-sectors-list">
                        <Link href={'/mainland'} className='planning-sectors--item'>
                            <div className="planning-sectors--item--image">
                                <Image src={BusinessService} alt='BusinessService' />
                            </div>
                            <div>
                                <h3>Mainland Sector</h3>
                                <p>Navigate the mainland market with brand strategies that make an impact.</p>
                            </div>
                            <div><p>Learn More</p><EndIcon /></div>
                        </Link>
                        <Link href={'/offshore'} className='planning-sectors--item'>
                            <div className="planning-sectors--item--image">
                                <Image src={BusinessService2} alt='BusinessService' />
                            </div>
                            <div>
                                <h3>Offshore Sector</h3>
                                <p>Build a strong offshore brand presence with targeted growth tactics.</p>
                            </div>
                            <div><p>Learn More</p><EndIcon /></div>
                        </Link>
                        <Link href={'/freezone'} className='planning-sectors--item'>
                            <div className="planning-sectors--item--image">
                                <Image src={BusinessService3} alt='BusinessService' />
                            </div>
                            <div>
                                <h3>Freezone Sector</h3>
                                <p>Leverage FreeZone benefits to accelerate your brand's growth and visibility.</p>
                            </div>
                            <div><p>Learn More</p><EndIcon /></div>
                        </Link>
                    </div>
                </div>
            </section>
            <section className='planning-sectors related-services'>
                <div className="container">
                    <div className="common--container">
                        <p className='page-title'>Related Services</p>
                        <h2>Related Services</h2>
                        <p>Explore complementary services tailored for effective business planning strategies.</p>
                    </div>
                    <div className="planning-sectors-list">
                        <Link href={'/services/business-planning'} className='planning-sectors--item business-planning'>
                            <h3>Business Planning</h3>
                            <p>Strategic insights to align your corporate structure with business goals.</p>
                            <div><p>Visit Page</p><EndIcon /></div>
                        </Link>
                        <Link href={'/services/corporate-services'} className='planning-sectors--item'>
                            <h3>Corporate Services</h3>
                            <p>Streamline operations with comprehensive support.</p>
                            <div><p>Visit Page</p><EndIcon /></div>
                        </Link>
                        <Link href={'/services/brand-to-uae'} className='planning-sectors--item'>
                            <h3>Brand To UAE</h3>
                            <p>Launch your brand into the UAE's thriving market.</p>
                            <div><p>Visit Page</p><EndIcon /></div>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}