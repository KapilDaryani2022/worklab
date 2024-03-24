import Image from 'next/image'
import Link from 'next/link';
import FAQ from '../components/Faq';
import ScrollDownImage from '../../../public/scroll-down.svg';
import Dots from '../../../public/dots.png';
import Arrowlink from '../../../public/arroe-link.svg';
import BusinessImg1 from '../../../public/buiness-img-4.svg';
import BusinessImg2 from '../../../public/buiness-img-5.svg';
import BusinessImg3 from '../../../public/buiness-img-6.svg';
import BusinessImg4 from '../../../public/buiness-img-7.svg';
import BusinessImg5 from '../../../public/buiness-img-8.svg';
import Dollar from '../../../public/dollor.svg';
import Certified from '../../../public/certified.svg';
import Building from '../../../public/building.svg';
import ArrowStep from '../../../public/arrow-step-down.svg';
import RightIcon from '../../../public/right-icon.svg';

export default function FreeZone() {
  const faqData = [
    {
      title: 'What is the difference between Freezone and Mainland visas?',
      des: ' The primary difference between employment visas of Mainland and Freezone - A Freezone visa is valid for 3 years, whereas the validity for Mainland visas is 2 years.With a Mainland visa, you can do business anywhere across UAE. But with a Freezone visa, you’ll need to appoint a Local agent for working in non-Freezone regions.'
    },
    {
      title: 'What are the rules for applying for a Freezone Visa?',
      des: '',
      list: [
        'Minimum age for applying for employment visas is 18 years & the maximum age is 60 years.',
        'You need an attested education certificate if you’re a lady or are applying for managerial positions.',
        'Most authorities limit the number of visas alloted to businesses operating in Freezones. You can apply for an increase in the quota, but for that you will need approval.'
      ]
    },
    {
      title: 'What documents are required for getting Family’s visa?',
      des: 'First step is to get your esidency visa, only then you can apply for your family’s visa.',
      list: [
        'Income certificate from your Freezone company. Minimum earning should be AED 5500.',
        'A security deposit of AED 5000 for women & AED 3000 for men.',
        'Passport copies of your family members.',
        'Personal Bank statement of the company.',
        'Memorandum Of Association (MOA) & the Articles Of Association (AOA).',
        'Colored copy of your Trade license.',
        'Electricty & water bill under the sponsorer’s name.',
        'Ejari of the sponsor.',
        'Labor contract.',
        'Emirates ID',
        'Birth Certificate of your family members',
        'Marriage certificate if you’re married (original certifcate)',
        'Insurance copy'
      ]
    },
    {
      title: 'How much time is required for getting a Family Visa?',
      des: 'It will take approximately 10-15 days.'
    },
    {
      title: 'Which authority is issuing Freezone visas?',
      des: 'The Immigratin Department.',
      des2: '2 types of Entry Visa permit applications -',
      list: [
        'Outside the country application',
        'Inside the country application'
      ]
    },
    {
        title: 'What is the validity of a Freezone visa in UAE?',
        des: 'Its validity is 3 years.',
    }
  ]
  return (
    <main style={{backgroundColor: '#101210'}}>
      <section className='business-banner'>
        <div className="container animate__animated animate__fadeInUp">
            <p className='page-title'>Business Setup</p>
            <h1>Freezone Business</h1>
            <p className='des'>Free zones are economic areas where investors can trade goods and services with preferential tax and customs rates.</p>
            <div className="business-tasgs">
              <div className="business-tag">
                <Dollar/><p>100% foreign ownership</p>
              </div>
              <div className="business-tag">
                <Certified/><p>Tax Benefits</p>
              </div>
              <div className="business-tag">
                <Building/><p>2 year UAE residence visa</p>
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
            <p className='des'>Here’s how your journey is going to be like while to setup a Freezone Business in the UAE</p>
          </div>
          <div className="business-steps">
            <div className="business-steps--item">
              <div className="business-steps--item--content">
                <p className='title'>Step 1</p>
                <h3>Legal Entity <br/>Selection</h3>
                <div className="business-steps--item--content--list">
                  <div>
                    <RightIcon />
                    <p>Choose the appropriate legal structure.</p>
                  </div>
                  <div>
                    <RightIcon />
                    <p>Check capital requirements for specific free zones.</p>
                  </div>
                  <div>
                    <RightIcon />
                    <p>Options include FZ LLC, FZ Co., and branch offices.</p>
                  </div>
                </div>
              </div>
              <div className="business-steps--item--step-path">
                <div>
                  <ArrowStep />
                  <p>LAY THE FOUNDATION</p>
                </div>
                <div className='business-steps--item--step-path--line'>

                </div>
                <div>
                  <ArrowStep />
                  <p>OFFICIALLY RECOGNIZE</p>
                </div>
              </div>
              <div className="business-steps--item--image">
                <Image src={Dots} alt='Dots' className='dots-iamge'  />
                <BusinessImg1 />
              </div>
            </div>
            <div className="business-steps--item">
              <div className="business-steps--item--content">
                <p className='title'>Step 2</p>
                <h3>Trade Name <br/> Selection</h3>
                <div className="business-steps--item--content--list">
                  <div>
                    <RightIcon />
                    <p>Choose a unique and permissible trading name.</p>
                  </div>
                  <div>
                    <RightIcon />
                    <p>Verify availability and register with the free zone authority.</p>
                  </div>
                </div>
              </div>
              <div className="business-steps--item--step-path">
                <div className='business-steps--item--step-path--line'>

                </div>
                <div>
                  <ArrowStep />
                  <p>DEFINE YOUR BRAND</p>
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
                <h3>Business License <br/> Application</h3>
                <div className="business-steps--item--content--list">
                  <div>
                    <RightIcon />
                    <p>Apply for the relevant business license.</p>
                  </div>
                  <div>
                    <RightIcon />
                    <p>Submit required documents as per activity type.</p>
                  </div>
                  <div>
                    <RightIcon />
                    <p>Options include trade, service, industrial licenses, etc.</p>
                  </div>
                </div>
              </div>
              <div className="business-steps--item--step-path">
                <div className='business-steps--item--step-path--line'>

                </div>
                <div>
                  <ArrowStep />
                  <p>NAVIGATE LICENSE PROCESS</p>
                </div>
              </div>
              <div className="business-steps--item--image">
                <Image src={Dots} alt='Dots' className='dots-iamge'  />
                <BusinessImg3 />
              </div>
            </div>
            <div className="business-steps--item">
              <div className="business-steps--item--content">
                <p className='title'>Step 4</p>
                <h3>Office Space Acquisition</h3>
                <div className="business-steps--item--content--list">
                  <div>
                    <RightIcon />
                    <p>Select suitable office space.</p>
                  </div>
                  <div>
                    <RightIcon />
                    <p>Options range from flex-desk services to leased offices.</p>
                  </div>
                  <div>
                    <RightIcon />
                    <p>Consider business needs and employee count.</p>
                  </div>
                </div>
              </div>
              <div className="business-steps--item--step-path">
                <div className='business-steps--item--step-path--line'>

                </div>
                <div>
                  <ArrowStep />
                  <p>YOUR OFFICE IS READY</p>
                </div>
              </div>
              <div className="business-steps--item--image">
                <Image src={Dots} alt='Dots' className='dots-iamge'  />
                <BusinessImg4 />
              </div>
            </div>
            <div className="business-steps--item">
              <div className="business-steps--item--content">
                <p className='title'>Step 5</p>
                <h3>Approval, Registration, and Licensing</h3>
                <div className="business-steps--item--content--list">
                  <div>
                    <RightIcon />
                    <p>Obtain pre-approval and necessary permits.</p>
                  </div>
                  <div>
                    <RightIcon />
                    <p>Receive the official business license.</p>
                  </div>
                  <div>
                    <RightIcon />
                    <p>Process typically takes 2-4 weeks for completion depending on the selected freezone</p>
                  </div>
                </div>
              </div>
              <div className="business-steps--item--step-path">
                <div className='business-steps--item--step-path--line'>

                </div>
                <div>
                  <ArrowStep />
                  <p>REGISTER AND LAUNCH!</p>
                </div>
              </div>
              <div className="business-steps--item--image">
                <Image src={Dots} alt='Dots' className='dots-iamge'  />
                <BusinessImg5 />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='business-services'>
        <div className="container">
            <div className="business-services-container">
              <p className='page-title'>Freezone Setup Services</p>
              <h2>We’ve got everything you need to setup</h2>
              <p className='des'>Here’s how your journey is going to be like while to setup a Mainland Business in the UAE</p>
            </div>
            <div className="business-services--list">
              <div className="business-services--list--item">
                <h3>Identity Creation</h3>
                <p>Define your FreeZone entity with a distinct corporate identity</p>
                <Link href={'/services//business-planning'}>Learn More <Arrowlink /></Link>
              </div>
              <div className="business-services--list--item">
                <h3>Portfolio Creation</h3>
                <p>Build a compelling business portfolio to attract FreeZone opportunities.</p>
                <Link href={'/services/brand-and-grow'}>Learn More <Arrowlink /></Link>
              </div>
              <div className="business-services--list--item">
                <h3>Ministry Approvals</h3>
                <p>Navigate Freezone regulations with guaranteed ministry endorsements.</p>
                <Link href={'/services/corporate-services'}>Learn More <Arrowlink /></Link>
              </div>
            </div>
        </div>
      </section>
      <FAQ faqData={faqData} />
    </main>
  )
}