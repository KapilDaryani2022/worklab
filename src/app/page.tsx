import Image from 'next/image'
import ChevronRight from '../../public/chevron-rigjt.svg';
import Traingle from '../../public/triangle.svg';
import Rocket from '../../public/rocket.svg';
import Clouds from '../../public/clouds.svg';
import TeamWork from '../../public/team-work.svg';
import Eagle from '../../public/eagle.svg';
import Buildings from '../../public/builidings.png';
import Buildings2 from '../../public/builidings-2.png';
import Link from 'next/link';

export default function Home() {
  const link = 'Learn More >'
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
          <h1>Swiftly Set Up Your Dream Business in UAE</h1>
          <p>Experience a hassle-free journey to establish your business in the UAE with our expert guidance.</p>
          <div className="flex">
            <input placeholder='Your Business Name' type="text" name='businessName' />
            <button className='btn-primary'>Start Your Business <ChevronRight /></button>
          </div>
        </div>
      </section>
      <section className='provide-section'>
        <div className="container">
          <div className="provide-section--inner">
            <h2>Services we Provide</h2>
            <p>We give services that you require and is best for you! </p>
            <Link className='learn-more' href='/'>{link}</Link>
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
      <section className='why-dubai'>
        <div className="container">
          <div className="why-dubai--content">
            <h2>Why <br /> Dubaaaaaaaaaaai ?!</h2>
            <p>Where Innovation Meets Limitless Horizons.</p>
            <Link className='learn-more' href='/'>{link}</Link>
          </div>
        </div>
        <div className="moon"></div>
        <Image src={Buildings} alt='builings' />
        <Image src={Buildings} alt='builings' />
      </section>
    </main>
  )
}
