import Image from 'next/image'
import Link from 'next/link';
import ScrollDownImage from '../../../public/scroll-down.svg';
import Dots from '../../../public/dots.png';
import Arrowlink from '../../../public/arroe-link.svg';
import BusinessImg from '../../../public/buiness-img.svg';
import BusinessImg2 from '../../../public/buiness-img-2.svg';
import BusinessImg3 from '../../../public/buiness-img-3.svg';
import Globe from '../../../public/globe.svg';
import Certified from '../../../public/certified.svg';
import Shop from '../../../public/shop.svg';
import ArrowStep from '../../../public/arrow-step-down.svg';
import RightIcon from '../../../public/right-icon.svg';
import FAQ from '../components/Faq';

export default function MainLand() {
  const faqData = [
    {
      title: 'Is it possible to start a without having an office space?',
      des: 'Yes'
    },
    {
      title: 'What is the fee to set up a business in UAE?',
      des: 'The cost may vary on different factors like location, the scale of the business, activity etc.'
    },
    {
      title: 'What are the licenses available in UAE mainland?',
      des: 'Following are the license types of licenses available:',
      list: [
        'Commercial License',
        'Professional License',
        'Industrial License',
        'Tourism License'
      ]
    },
    {
      title: 'How has expo 2020 benefited businesses in UAE?',
      des: 'It has opened a lot of opportunities and built a network to a very large extent.'
    },
    {
      title: 'How long it takes to open a business in UAE?',
      des: 'Depending on the activity, normal companies can be issues within 5 minutes.'
    }
  ]
  return (
    <main style={{backgroundColor: '#101210'}}>
      <section className='business-banner'>
        <div className="container animate__animated animate__fadeInUp">
            <p className='page-title'>Business Setup</p>
            <h1>Mainland Business</h1>
            <p className='des'>This sector can benefit by having access to the local market as well as outside the UAE. Learn more on how to setup a Mainland Business in the UAE</p>
            <div className="business-tasgs">
              <div className="business-tag">
                <Globe/><p>Global Trading Hub</p>
              </div>
              <div className="business-tag">
                <Certified/><p>Full Ownership Rights</p>
              </div>
              <div className="business-tag">
                <Shop/><p>Access to Local Market</p>
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
            <h2>How to Setup A <br/> Mainland Business in UAE?</h2>
            <p className='des'>Here’s how your journey is going to be like while to setup a Mainland Business in the UAE</p>
          </div>
          <div className="business-steps">
            <div className="business-steps--item">
              <div className="business-steps--item--content">
                <p className='title'>Step 1</p>
                <h3>Planning and <br/>Legal Structure</h3>
                <div className="business-steps--item--content--list">
                  <div>
                    <RightIcon />
                    <p>Identify the business activity.</p>
                  </div>
                  <div>
                    <RightIcon />
                    <p>Select an appropriate legal form.</p>
                  </div>
                  <div>
                    <RightIcon />
                    <p>Register the trade name.</p>
                  </div>
                  <div>
                    <RightIcon />
                    <p>Apply for initial approval.</p>
                  </div>
                </div>
              </div>
              <div className="business-steps--item--step-path">
                <div>
                  <ArrowStep />
                  <p>IDEA</p>
                </div>
                <div className='business-steps--item--step-path--line'>

                </div>
                <div>
                  <ArrowStep />
                  <p>BUSINESS ESTABLISHED</p>
                </div>
              </div>
              <div className="business-steps--item--image">
                <Image src={Dots} alt='Dots' className='dots-iamge'  />
                <div className='custom-svg'>
                  <BusinessImg3 />
                </div>
              </div>
            </div>
            <div className="business-steps--item">
              <div className="business-steps--item--content">
                <p className='title'>Step 2</p>
                <h3>Documentation <br/>and Agreements</h3>
                <div className="business-steps--item--content--list">
                  <div>
                    <RightIcon />
                    <p>Select an appropriate legal form..</p>
                  </div>
                  <div>
                    <RightIcon />
                    <p>Draft a Memorandum of Association and local service agent.</p>
                  </div>
                </div>
              </div>
              <div className="business-steps--item--step-path">
                <div className='business-steps--item--step-path--line'>

                </div>
                <div>
                  <ArrowStep />
                  <p>PAPERWORKS READY</p>
                </div>
              </div>
              <div className="business-steps--item--image">
                <Image src={Dots} alt='Dots' className='dots-iamge'  />
                <BusinessImg2 />
              </div>
            </div>
            <div className="business-steps--item">
              <div className="business-steps--item--content">
                <p className='title'>Step 3</p>
                <h3>Government Approvals <br/> and Authorization</h3>
                <div className="business-steps--item--content--list">
                  <div>
                    <RightIcon />
                    <p>Obtain additional government approvals.</p>
                  </div>
                  <div>
                    <RightIcon />
                    <p>Submit required documents and pay fees.</p>
                  </div>
                </div>
              </div>
              <div className="business-steps--item--step-path">
                <div className='business-steps--item--step-path--line'>

                </div>
                <div>
                  <ArrowStep />
                  <p>READY FOR BUSINESS</p>
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
              <p className='page-title'>Mainland Setup Services</p>
              <h2>We’ve got everything you need to setup</h2>
              <p className='des'>Here’s how your journey is going to be like while to setup a Mainland Business in the UAE</p>
            </div>
            <div className="business-services--list">
              <div className="business-services--list--item">
                <h3>Establish Identity</h3>
                <p>Craft your business's unique brand and legal persona.</p>
                <Link href={'/services//business-planning'}>Learn More <Arrowlink /></Link>
              </div>
              <div className="business-services--list--item">
                <h3>Expansion Strategy</h3>
                <p>Strategize for growth and scale within the UAE's dynamic markets.</p>
                <Link href={'/services/brand-and-grow'}>Learn More <Arrowlink /></Link>
              </div>
              <div className="business-services--list--item">
                <h3>Hire A PRO</h3>
                <p>Secure expert Public Relations Officers for seamless documentation and liaison.</p>
                <Link href={'/services/corporate-services'}>Learn More <Arrowlink /></Link>
              </div>
            </div>
        </div>
      </section>
      <FAQ faqData={faqData} />
    </main>
  )
}