import Image from 'next/image'
import Link from 'next/link';
import ScrollDownImage from '../../../../public/scroll-down.svg';
import EndIcon from '../../../../public/end-icon-2.svg';
import BusinessService from '../../../../public/business-services.webp';
import BusinessService2 from '../../../../public/business-services-2.webp';
import BusinessService3 from '../../../../public/business-services-3.webp';
import ChevronRight from '../../../../public/chevron-rigjt.svg';


export default function MainLand() {
    return (
        <main style={{ backgroundColor: '#101210' }}>
            <section className='business-banner services brand'>
                <div className="container animate__animated animate__fadeInUp">
                    <p className='page-title'>Services</p>
                    <h1>Brand To UAE</h1>
                    <p className='des'>Your gateway to bring your home brands to the UAE market, offering a platform for seamless sales and expansion opportunities.</p>
                    <a href='#brandservices'>
                        <ScrollDownImage />
                    </a>
                </div>
            </section>
            <section className='planning-services' id='brandservices'>
                <div className="container">
                    <div className="common--container">
                        <p className='page-title'>Corporate Services</p>
                        <h2>Introducing Global Brands to the UAE Market</h2>
                        <p>Navigate market entry with our suite of services designed to establish and grow your brand in the UAE.</p>
                    </div>
                    <div className="planning-services--container brand">
                        <div className='sixty-width'>
                            <div>
                                <h3>Market Research </h3>
                                <p style={{color: '#200900'}}>In-depth market analysis to position your brand effectively in the UAE's competitive landscape.</p>
                            </div>
                        </div>
                        <div className='foutry-width white'>
                            <div>
                                <h3>Legal Assistance </h3>
                                <p>Expert legal guidance to ensure your brand's compliance with UAE business laws.</p>
                            </div>
                        </div>
                        <div className='hundred-width white'>
                            <div>
                                <h3>Distribution Network Setup</h3>
                                <p>Establish a robust distribution framework to ensure your brand's UAE market penetration.</p>
                            </div>
                        </div>
                        <div className='thirty-three'>
                            <div>
                                <h3>Marketing & Promotion</h3>
                                <p>Strategic marketing solutions to amplify your brand's presence across the UAE.</p>
                            </div>
                        </div>
                        <div className='thirty-three'>
                            <div>
                                <h3>Brand <br />Representation</h3>
                                <p>Professional representation to elevate your brand's identity within the UAE market</p>
                            </div>
                        </div>
                        <div className='thirty-width'>
                            <div>
                                <h3>Bring your Home Products to UAE</h3>
                                <p>Launch your brand in UAE now!</p>
                                <Link href='/contact-us' className='btn btn-primary'>Contact Us <ChevronRight /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='planning-sectors related-services'>
                <div className="container">
                    <div className="common--container">
                        <p className='page-title'>Related Services</p>
                        <h2>Related Services</h2>
                        <p>Discover additional services to complement your brand's journey to success in the UAE</p>
                    </div>
                    <div className="planning-sectors-list">
                        <Link href={'/services/brand-and-grow'} className='planning-sectors--item'>
                            <h3>Brand And Grow</h3>
                            <p>Elevate and expand your brand's reach.</p>
                            <div><p>Visit Page</p><EndIcon /></div>
                        </Link>
                        <Link href={'/services/corporate-services'} className='planning-sectors--item'>
                            <h3>Corporate Services</h3>
                            <p>Streamline operations with comprehensive support.</p>
                            <div><p>Visit Page</p><EndIcon/></div>
                        </Link>
                        <Link href={'/services/business-planning'} className='planning-sectors--item business-planning'>
                            <h3>Business Planning</h3>
                            <p>Strategic insights to align your corporate structure with business goals.</p>
                            <div><p>Visit Page</p><EndIcon /></div>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}