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
    <main style={{backgroundColor: '#101210'}}>
      <section className='business-banner services animate__animated animate__fadeInUp'>
        <div className="container">
            <p className='page-title'>Services</p>
            <h1>Business Planning</h1>
            <p className='des'>Strategize your venture's future with comprehensive business planning that sets the foundation for sustainable growth</p>
            <a href='#planningServices'>
              <ScrollDownImage />
            </a>
        </div>
      </section>
      <section className='planning-services' id='planningServices'>
        <div className="container">
            <div className="common--container">
                <p className='page-title'>Planning Services</p>
                <h2>Services To Plan Your Business ideas</h2>
                <p>Here’s how your journey is going to be like while to setup a Mainland Business in the UAE</p>
            </div>
            <div className="planning-services--container">
                <div className='sixty-width'>
                    <div>
                        <h3>Identify <br/>Business Sector</h3>
                        <p>Pinpoint your niche in the UAE's diverse economic landscape for targeted success.</p>
                    </div>
                </div>
                <div className='foutry-width white'>
                    <div>
                        <h3>Branding, Identity <br/>and Name</h3>
                        <p>Craft a resonant brand identity that embodies your business ethos and vision.</p>
                    </div>
                </div>
                <div className='hundred-width'>
                    <div>
                        <h3>Registration & <br/>Paper Works</h3>
                        <p>Secure your unique business name and trademarks in the UAE market</p>
                    </div>
                </div>
                <div className='seventy-width'>
                    <div>
                        <h3>Expansion <br/> Strategies</h3>
                        <p>Expertly navigate legal documentation and scale your business with forward-thinking strategies</p>
                    </div>
                </div>
                <div className='thirty-width'>
                    <div>
                        <h3>Plan Your <br/>Business Now!</h3>
                        <p>Embark on Your Planning Journey</p>
                        <Link href='/contact-us' className='btn btn-primary'>Contact Us <ChevronRight /></Link>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <section className='planning-sectors'>
        <div className="container">
            <div className="common--container">
                <p className='page-title'>Planning Services</p>
                <h2>Planning for Sectors</h2>
                <p>Custom sector strategies to position your business advantageously in the UAE.</p>
            </div>
            <div className="planning-sectors-list">
                <Link href={'/mainland'} className='planning-sectors--item'>
                    <div className="planning-sectors--item--image">
                        <Image src={BusinessService} alt='BusinessService' />
                    </div>
                    <div>
                        <h3>Mainland Sector</h3>
                        <p>Tailored planning for Mainland ventures, optimizing for local market integration.</p>
                    </div>
                    <div><p>Learn More</p><EndIcon/></div>
                </Link>
                <Link href={'/offshore'} className='planning-sectors--item'>
                    <div className="planning-sectors--item--image">
                        <Image src={BusinessService2} alt='BusinessService' />
                    </div>
                    <div>
                        <h3>Offshore Sector</h3>
                        <p>Strategic blueprints for offshore entities focusing on global market access.</p>
                    </div>
                    <div><p>Learn More</p><EndIcon/></div>
                </Link>
                <Link href={'/freezone'} className='planning-sectors--item'>
                    <div className="planning-sectors--item--image">
                        <Image src={BusinessService3} alt='BusinessService' />
                    </div>
                    <div>
                        <h3>Freezone Sector</h3>
                        <p>Navigate FreeZone advantages with bespoke business planning and insights.</p>
                    </div>
                    <div><p>Learn More</p><EndIcon/></div>
                </Link>
            </div>
        </div>
      </section>
      <section className='planning-sectors related-services'>
        <div className="container">
            <div className="common--container">
                <p className='page-title'>Related Services</p>
                <h2>Related Services</h2>
                <p>Here’s how your journey is going to be like while to setup a Mainland Business in the UAE</p>
            </div>
            <div className="planning-sectors-list">
                <Link href={'/services/brand-and-grow'} className='planning-sectors--item'>
                    <h3>Brand And Grow</h3>
                    <p>Elevate and expand your brand's <br/>reach.</p>
                    <div><p>Visit Page</p><EndIcon/></div>
                </Link>
                <Link href={'/services/corporate-services'} className='planning-sectors--item'>
                    <h3>Corporate Services</h3>
                    <p>Streamline operations with comprehensive support.</p>
                    <div><p>Visit Page</p><EndIcon/></div>
                </Link>
                <Link href={'/services/brand-to-uae'} className='planning-sectors--item'>
                    <h3>Brand To UAE</h3>
                    <p>Launch your brand into the UAE's thriving market.</p>
                    <div><p>Visit Page</p><EndIcon/></div>
                </Link>
            </div>
        </div>
      </section>
    </main>
  )
}