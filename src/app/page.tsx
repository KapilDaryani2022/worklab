'use client';
import Image from 'next/image'
import { useEffect, useRef, useState} from 'react';
import ChevronRight from '../../public/chevron-rigjt.svg';
import Traingle from '../../public/triangle.svg';
import Rocket from '../../public/rocket.svg';
import Clouds from '../../public/clouds.svg';
import TeamWork from '../../public/team-work.svg';
import Eagle from '../../public/eagle.svg';
import Buildings from '../../public/builidings.png';
import Value1 from '../../public/value-1.webp';
import Value2 from '../../public/value-2.png';
import Value3 from '../../public/value-3.webp';
import Value4 from '../../public/value-4.webp';
import WImage from '../../public/w.png';
import Link from 'next/link';

export default function Home() {
  const link = 'Learn More >'
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState<boolean>(false);
  const [sectionSeen, setSectionSeen] = useState<boolean>(false);
  const [screenWidth, setScreenWidth] = useState<number>(0);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
        if (sectionRef.current) {
            const { top, bottom } = sectionRef.current.getBoundingClientRect();
            const sectionInView = top < 0 && bottom > 0;
            if (sectionInView) {
                setInView(true);
                setSectionSeen(true);
            }
        }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionSeen]);
  
  return (
    <main>
      <section className='hero'>
        <div className="container">
          <Traingle className='triangle' />
          <Traingle className='triangle big' />
          <span className='medium-circle'></span>
        </div>
        <div className="content">
          <span className='inner-circle'></span>
          <span className='small-circle'></span>
          <span className='big-circle'></span>
          <div className='animate__animated animate__fadeInUp'>
            <h1 className="">Swiftly Set Up Your Dream Business in UAE</h1>
            <p className=''>Experience a hassle-free journey to establish your business in the UAE with our expert guidance.</p>
            <div className="flex ">
              <input placeholder='Your Business Name' type="text" name='businessName' />
              <button className='btn-primary'>Start Your Business <ChevronRight /></button>
            </div>
          </div>
        </div>
      </section>
      <section className={`provide-section`} id="services">
        <div className="container">
          <div className="provide-section--inner">
            <h2>Services we Provide</h2>
            <p>We give services that you require and is best for you! </p>
            <Link className='learn-more' href='/mainland'>{link}</Link>
          </div>
          <div className="services-provide--list">
            <div className="services-provide--list--item">
              <div>
                <h3>Business Setup</h3>
                <p>Turning Ideas into Enterprises, Seamlessly.</p>
                <ul className='hide'>
                  <li>Mainland</li>
                  <li>Free Zones</li>
                  <li>Offshores</li>
                </ul>
              </div>
              <div>
                <div className='rocket'>
                  <div>
                    <Rocket />
                  </div>
                </div>
                <Clouds className='clouds' />
              </div>
            </div>
            <div className="services-provide--list--item">
              <div>
                <h3>Corporate Services &<br /> Assitances</h3>
                <p>Your Corporate Journey, Elevated.</p>
                <ul className='hide'>
                  <li>Comprehensive Corporate Services for Every Business Need.</li>
                  <li>Personalized Assistance in Legal and Administrative Matters.</li>
                  <li>Your Success, Our Priority – Corporate Support Redefined.</li>
                </ul>
              </div>
              <div>
                <TeamWork className='team-work' />
              </div>
            </div>
            <div className="services-provide--list--item">
              <div>
                <h3>Ministry Approvals</h3>
                <p>Navigating the Maze of Approvals with Ease.</p>
                <ul className='hide'>
                  <li>Streamlined Processes for Quick and Efficient Approvals.</li>
                  <li>Dedicated Assistance for Ministry Compliance.</li>
                  <li>Your Partner in Achieving Swift Ministry Approvals.</li>
                </ul>
              </div>
              <div>
                <div className="eagle">
                  <div>
                    <Eagle />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`section why-dubai ${inView ?'inView' : ''}`} ref={sectionRef}>
        <div className="container">
          <div className="why-dubai--content">
            <h2 className="">Why <br /> Dubaaaaaaaaaaai?!</h2>
            <p>Where Innovation Meets Limitless Horizons.</p>
            <Link className='learn-more' href='/why-dubai'>{link}</Link>
          </div>
        </div>
        <div className="moon"></div>
        <Image src={Buildings} alt='builings' />
        <Image src={Buildings} alt='builings' />
      </section>
      <section className='our-values'>
        <div className="container">
          <div className='heading-section'>
            <h2>Our Values</h2>
            <p>We give services that you require and is best for you! </p>
          </div>
          <div className="our-value-cards">
            <div className="our-value-card">
              <div className="our-value-card--content">
                <h3>Flexible</h3>
                <p>At Worklab, we follow the value of flexibility to empower your business journey. Our advanced setup adapts to your ever-growing needs in your business setup.
                <br/><br/>Our service is open to all, whether you are a startup or an established enterprise. We believe in fostering creativity and collaboration.</p>
              </div>
              <div className="our-value-card--image">
                <Image src={Value1} alt='' />
              </div>
            </div>
            <div className="our-value-card">
              <div className="our-value-card--content">
                <h3>B2B <br/> Collaborations</h3>
                <p>In the heart of B2B collaboration, Worklab is not just a business setup; it's a vibrant environment where ideas flourish. <br /><br /> We stand by the power of innovation through partnerships, and our business setup is crafted to facilitate seamless collaboration. Our team brings diverse talents together to create a flourishing community where businesses unite and grow.</p>
              </div>
              <div className="our-value-card--image">
                <Image src={Value2} alt='' />
              </div>
            </div>
            <div className="our-value-card">
              <div className="our-value-card--content">
                <h3>Marketing <br /> and Branding</h3>
                <p>Your brand is your identity, and at Worklab, we take pride in nurturing that identity through strategic marketing skills and branding support. We offer your brand a platform to showcase your uniqueness.<br/><br/> Our dedicated marketing resources help boost your brand's presence, ensuring that your business stands out in a crowded marketplace. From personalized events to campaigns, we've got your brand covered.</p>
              </div>
              <div className="our-value-card--image">
                <Image src={Value3} alt='' />
              </div>
            </div>
            <div className="our-value-card">
              <div className="our-value-card--content">
                <h3>Expertise</h3>
                <p>With Worklab, expertise is not just a buzzword; it's the foundation of our commitment to your success. Our team comprises experts who understand the challenges businesses face.<br/><br/> From legal intricacies to strategic planning, we offer a wealth of knowledge to guide you through every stage of your business journey. Our team of experts are at your service to make your business thrive!</p>      
              </div>
              <div className="our-value-card--image">
                  <Image src={Value4} alt='' width={411} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="why-us">
        <div className="container">
          <div className='heading-section'>
            <h2 className="animate__animated animate__bounce">Why Us?</h2>
            <p>Quality services unlike any service provides around here</p>
          </div>
          <div className="why-us--content">
            <p>
              At Worklab, we're more than just a business setup company; 
              <br /><br />
              We're your partners in creating digital success. 
              <br /><br />
              Choose us because we specialize in seamlessly launching your small business into the world of web.
              <br /><br />
              From establishing your dream business to mark its online presence to showcasing and selling your products on our e-commerce platforms, Worklab is committed to your business's digital transformation.
              <br /><br />
              When you choose Worklab, you choose success!
            </p>
            <Image src={WImage} alt='/' className='why-us--content--image' />
          </div>
          <div className="why-us-circle"></div>
        </div>
      </section>
    </main>
  )
}
