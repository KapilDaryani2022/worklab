import Image from 'next/image'
import Link from 'next/link';
import ScrollDownImage from '../../../public/scroll-down.svg';
import Dots from '../../../public/dots.png';
import Arrowlink from '../../../public/arroe-link.svg';
import BusinessImg from '../../../public/buiness-img.svg';
import Security from '../../../public/security.svg';
import Eye from '../../../public/eye.svg';
import Dollar from '../../../public/dollor.svg';
import ArrowStep from '../../../public/arrow-step-down.svg';
import RightIcon from '../../../public/right-icon.svg';
import FAQ from '../components/Faq';

export default function Offshore() {
  const faqData = [
    {
      title: 'Can I open a multi-currency account for my offshore business in the UAE?',
      des: 'Yes, you can.'
    },
    {
      title: 'How long does it take to incorporate a business in the UAE offshore?',
      des: 'It does not take more than 2 days.'
    },
    {
      title: 'Do I have to have the physical premise for the offshore company?',
      des: 'Not necessarily; you can only incorporate your business without having any business entity in the UAE'
    },
    {
      title: 'Which documents are accepted as proof of residence for offshore incorporation?',
      des: 'ID Card, UAE Residence visa, utility bills like gas bills etc. (most recent)'
    },
    {
      title: 'How many countries are there with the avoidance of double taxation policy in the UAE?',
      des: '115 countries.'
    }
  ]
  return (
    <main style={{backgroundColor: '#101210'}}>
      <section className='business-banner'>
        <div className="container animate__animated animate__fadeInUp">
            <p className='page-title'>Business Setup</p>
            <h1>Offshore Business</h1>
            <p className='des'>Offshore Business sector of companies allow foreign investors to own and operate a business in the UAE without having a physical presence in the country</p>
            <div className="business-tasgs">
              <div className="business-tag">
                <Dollar/><p>Tax Benefits</p>
              </div>
              <div className="business-tag">
                <Security/><p>Asset Protection</p>
              </div>
              <div className="business-tag">
                <Eye/><p>Business Confidentiality</p>
              </div>
            </div>
            <a href='#howItWorks'>
              <ScrollDownImage />
            </a>
        </div>
      </section>
      <section className='how-it-works-b' id='howItWorks'>
        <div className="container">
          <div className="how-it-works-container">
            <p className='page-title'>How It Works</p>
            <h2>How to Setup A <br/>Freezone Business in UAE?</h2>
            <p className='des'>Here’s how your journey is going to be like while to setup a Offshore Business in the UAE</p>
          </div>
          <div className="business-steps">
            <div className="business-steps--item">
              <div className="business-steps--item--content">
                <p className='title'>Step 1</p>
                <h3>Understanding <br/>Offshore Concept</h3>
                <div className="business-steps--item--content--list">
                  <div>
                    <RightIcon />
                    <p>Learn about tax haven benefits</p>
                  </div>
                  <div>
                    <RightIcon />
                    <p>Explore legal tax exemptions.</p>
                  </div>
                  <div>
                    <RightIcon />
                    <p>Discover no-tax jurisdiction advantages.</p>
                  </div>
                </div>
              </div>
              <div className="business-steps--item--step-path">
                <div>
                  <ArrowStep />
                  <p>IDEA PROPOSAL</p>
                </div>
                <div className='business-steps--item--step-path--line'>

                </div>
                <div>
                  <ArrowStep />
                  <p>CONCEPT ANALYSED</p>
                </div>
              </div>
              <div className="business-steps--item--image">
                <Image src={Dots} alt='Dots' className='dots-iamge'  />
                <BusinessImg />
              </div>
            </div>
            <div className="business-steps--item">
              <div className="business-steps--item--content p-0">
                <p className='title'>Step 2</p>
                <h3>Choosing the <br/> Right Location</h3>
                <div className="business-steps--item--content--list">
                  <div>
                    <RightIcon />
                    <p>Dubai Offshore: Popular choice in the Middle East.</p>
                  </div>
                  <div>
                    <RightIcon />
                    <p>RAK Offshore: Ideal for cost-effective setups.</p>
                  </div>
                  <div>
                    <RightIcon />
                    <p>Ajman Offshore: Promising incentives for businesses.</p>
                  </div>
                  <div>
                    <RightIcon />
                    <p>Jebel Ali FreeZone Auhtority : The flagship integral part of the DP World Region’s integrated business hub.</p>
                  </div>
                </div>
              </div>
              <div className="business-steps--item--step-path">
                <div className='business-steps--item--step-path--line'>

                </div>
                <div>
                  <ArrowStep />
                  <p>LOCATION CHOSED</p>
                </div>
              </div>
              <div className="business-steps--item--image">
                <Image src={Dots} alt='Dots' className='dots-iamge'  />
                <BusinessImg />
              </div>
            </div>
            <div className="business-steps--item">
              <div className="business-steps--item--content">
                <p className='title'>Step 3</p>
                <h3>Activities Permitted</h3>
                <div className="business-steps--item--content--list">
                  <div>
                    <RightIcon />
                    <p>International trading and consulting.</p>
                  </div>
                  <div>
                    <RightIcon />
                    <p>Holding company and real estate ownership.</p>
                  </div>
                  <div>
                    <RightIcon />
                    <p>Patents, copyrights, and shipping management.</p>
                  </div>
                </div>
              </div>
              <div className="business-steps--item--step-path">
                <div className='business-steps--item--step-path--line'>

                </div>
                <div>
                  <ArrowStep />
                  <p>ACTIVITIES PLANNED</p>
                </div>
              </div>
              <div className="business-steps--item--image">
                <Image src={Dots} alt='Dots' className='dots-iamge'  />
                <BusinessImg />
              </div>
            </div>
            <div className="business-steps--item">
              <div className="business-steps--item--content p-0">
                <p className='title'>Step 4</p>
                <h3>Registration Process</h3>
                <div className="business-steps--item--content--list">
                  <div>
                    <RightIcon />
                    <p>Gather required documents: IDs, residence proof.</p>
                  </div>
                  <div>
                    <RightIcon />
                    <p>Confirm business activity scope.</p>
                  </div>
                  <div>
                    <RightIcon />
                    <p>Finalize shareholders and share capital.</p>
                  </div>
                  <div>
                    <RightIcon />
                    <p>Submit application with necessary forms.</p>
                  </div>
                  <div>
                    <RightIcon />
                    <p>Open corporate bank account.</p>
                  </div>
                </div>
              </div>
              <div className="business-steps--item--step-path">
                <div className='business-steps--item--step-path--line'>

                </div>
                <div>
                  <ArrowStep />
                  <p>READY FOR BUSINESS!</p>
                </div>
              </div>
              <div className="business-steps--item--image">
                <Image src={Dots} alt='Dots' className='dots-iamge'  />
                <BusinessImg />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='business-services'>
        <div className="container">
            <div className="business-services-container">
              <p className='page-title'>Offshore Setup Services</p>
              <h2>We’ve got everything you need to setup</h2>
              <p className='des'>Here’s how your journey is going to be like while to setup a Offshore Business in the UAE</p>
            </div>
            <div className="business-services--list">
              <div className="business-services--list--item">
                <h3>Visa Assistance</h3>
                <p>Effortless visa processing to facilitate your offshore setup.</p>
                <Link href={'/'}>Learn More <Arrowlink /></Link>
              </div>
              <div className="business-services--list--item">
                <h3>Documentation</h3>
                <p>Complete your offshore documentation with precision and expertise</p>
                <Link href={'/'}>Learn More <Arrowlink /></Link>
              </div>
              <div className="business-services--list--item">
                <h3>Portfolio Creation</h3>
                <p>Assemble a strong business portfolio tailored for offshore success.</p>
                <Link href={'/'}>Learn More <Arrowlink /></Link>
              </div>
            </div>
        </div>
      </section>
      <FAQ faqData={faqData} />
    </main>
  )
}