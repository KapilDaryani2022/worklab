import Image from 'next/image'
import Link from 'next/link';
import ScrollDownImage from '../../../public/scroll-down.svg';
import ChevronRight from '../../../public/chevron-rigjt.svg';

export default function ContactUs() {
  return (
    <main style={{ backgroundColor: '#101210' }} className="about-page">
        <section className='about-banner'>
            <div className="container">
                <div className='heading-section'>
                    <h1>For the next generation <br /> of innovators.</h1>
                    <p>We are here to make a revolution for the next generation, here’s some more about us.</p>
                    <ScrollDownImage />
                </div>
            </div>
        </section>
        <section className='map-hope'>
            <div className="shape"></div>
            <h2>MAP THE HOPE</h2>
        </section>
        <section className='why-we-build'>
            <div className="container">
                <div className="flex">
                    <div>
                        <h2>Why We Build Worklab?</h2>
                        <p>Our mission at WorkLab is to empower small businesses by boosting their digital transformation. We are committed to helping businesses establish a strong online presence.</p>
                        <p>Our focus extends beyond mere services; we are committed to promoting the branding and marketing strategies of businesses like yours.</p>
                        <p>Recognizing that reaching the target audience and building a strong brand presence is essential for achieving business goals, WorkLab is here to support and guide you throughout the journey.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className='our-mission'>
            <div className="container">
                <div className="heading-section">
                    <h2>Our mission</h2>
                    <p>Our never ending missions is what keeps us wanting to work and contribute more to this world and our community.</p>
                </div>
                <div className="flex">
                    <h2>Enabling Business </h2>
                    <p> From crafting compelling brands and navigating legal intricacies to the exciting moment of launching your venture, we're committed to making the process seamless. <br/><br/> Our goal is to be your guiding partner, ensuring that your business not only takes root in Dubai but flourishes.</p>
                </div>
            </div>
        </section>
        <section className='free-community'>
            <div className="container">
                <div className="flex">
                    <h2>Freelancer Community</h2>
                    <p>We believe in the power of community. Our mission extends beyond business setups; <br /><br /> We aim to build a thriving community of freelancers in Dubai. This space is designed to connect talented individuals, providing a platform for collaboration and growth. Whether you're seeking services or offering your skills, our community fosters a network where talents converge and opportunities flourish.</p>
                </div>
            </div>
        </section>
        <section className='global-projects'>
            <div className="container">
                <div className="flex">
                    <h2>Global Products</h2>
                    <p>Our mission at Worklab is not confined to geographical borders. <br/><br/> We're dedicated to supporting products with great market potential in in your home country products. By leveraging our expertise and local insights, we aim to bridge the gap, ensuring these products reach the right audiences. It's about fostering global impact while maintaining a connection to one's roots.</p>
                </div>
            </div>
        </section>
        <section className='about-our-values'>
            <div className="container">
                <div className="heading-section">
                    <h2>Our Values</h2>
                    <p>We give services that you require and is best for you! </p>
                </div>
                <div className="our-values-list">
                    <div className="our-values-list--item">
                        <div className="our-values-list--item--content">
                            <h3>Flexible</h3>
                            <p>At Worklab, we follow the value of flexibility to empower your business journey.</p>
                        </div>
                        <div className="our-values-list--item--content--img">

                        </div>
                    </div>
                    <div className="our-values-list--item">
                        <div className="our-values-list--item--content">
                            <h3>B2B <br/>Collaborations</h3>
                            <p>Worklab is not just a business setup; it's a vibrant environment where ideas flourish.</p>
                        </div>
                        <div className="our-values-list--item--content--img">

                        </div>
                    </div>
                    <div className="our-values-list--item">
                        <div className="our-values-list--item--content">
                            <h3>Marketing <br/>and Branding</h3>
                            <p>Your brand is your identity, and at Worklab, we take pride in nurturing that identity.</p>
                        </div>
                        <div className="our-values-list--item--content--img">

                        </div>
                    </div>
                    <div className="our-values-list--item">
                        <div className="our-values-list--item--content">
                            <h3>Expertise</h3>
                            <p>With Worklab, expertise is not just a buzzword; it's the foundation of our commitment to your success. </p>
                        </div>
                        <div className="our-values-list--item--content--img">

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="our-founders">
            <div className="container">
                <div className="heading-section">
                    <h2>Our Founders</h2>
                    <p>We give services that you require and is best for you! </p>
                </div>
                <div className="our-founders--card">
                    <div>
                        <h3>Zanan Mohammed</h3>
                        <p className='founder--designation'>Co-Founder</p>
                        <p>From crafting compelling brands and navigating legal intricacies to the exciting moment of launching your venture, we're committed to making the process seamless.</p>
                    </div>
                </div>
                <div className="our-founders--card">
                    <div>
                        <h3>Suhail MK</h3>
                        <p className='founder--designation'>Co-Founder - Business Consultant</p>
                        <p> From crafting compelling brands and navigating legal intricacies to the exciting moment of launching your venture, we're committed to making the process seamless.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="join-our-comunity">
            <div className="container">
                <div className="heading-section">
                    <h2>Join Our Community</h2>
                    <p>Be the Pioneer, Join the Movement. Connect, Collaborate, and Thrive. Reach out to us and secure your spot on the Early Waitlist – where opportunities unfold and connections flourish</p>
                </div>
                <button className='btn-primary'>Join The Community <ChevronRight /></button>
            </div>
        </section>
    </main>
  )
}