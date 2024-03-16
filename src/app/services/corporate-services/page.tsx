import Image from 'next/image'
import Link from 'next/link';
import ScrollDownImage from '../../../../public/scroll-down.svg';
import EndIcon from '../../../../public/end-icon-2.svg';
import BusinessService from '../../../../public/business-services.webp';
import BusinessService2 from '../../../../public/business-services-2.webp';
import BusinessService3 from '../../../../public/business-services-3.webp';


export default function MainLand() {
    return (
        <main style={{ backgroundColor: '#101210' }}>
            <section className='business-banner services corporate animate__animated animate__fadeInUp'>
                <div className="container">
                    <p className='page-title'>Services</p>
                    <h1>Corporate Services</h1>
                    <p className='des'>Streamline your business operations with our tailored corporate services, ensuring compliance, efficiency, and peace of mind.</p>
                    <a href='#corporateservices'>
                        <ScrollDownImage />
                    </a>
                </div>
            </section>
            <section className='planning-services' id='corporateservices'>
                <div className="container">
                    <div className="common--container">
                        <p className='page-title'>Corporate Services</p>
                        <h2>Services to Streamline Your Corporate Business Operations</h2>
                        <p>Enhance operational efficiency with our comprehensive corporate service solutions.</p>
                    </div>
                    <div className="planning-services--container brand-corporate">
                        <div className='sixty-width white'>
                            <div>
                                <h3>Hire a P.R.O</h3>
                                <p>Leverage expert PRO services for efficient navigation of local business protocols and requirements.</p>
                            </div>
                        </div>
                        <div className='foutry-width white'>
                            <div>
                                <h3>Ministry Approvals</h3>
                                <p>Ensure swift and compliant ministry approvals to facilitate your business ventures in the UAE.</p>
                            </div>
                        </div>
                        <div className='seventy-width' style={{ alignItems: 'center' }}>
                            <div>
                                <h3>Visa Assistance</h3>
                                <p>Obtain comprehensive visa support for your team, ensuring smooth entry and operation in the UAE.</p>
                            </div>
                        </div>
                        <div className='thirty-width'>
                            <div>
                                <h3>Documentation</h3>
                                <p>Get meticulous documentation services to underpin your corporate setup and transactions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='planning-sectors'>
                <div className="container">
                    <div className="common--container">
                        <p className='page-title'>Sectors</p>
                        <h2>Corporate Service <br/>for Sectors</h2>
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
                        <Link href={'/services/brand-and-grow'} className='planning-sectors--item'>
                            <h3>Brand And Grow</h3>
                            <p>Elevate and expand your brand's reach.</p>
                            <div><p>Visit Page</p><EndIcon /></div>
                        </Link>
                        <Link href={'/services/business-planning'} className='planning-sectors--item business-planning'>
                            <h3>Business Planning</h3>
                            <p>Strategic insights to align your corporate structure with business goals.</p>
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