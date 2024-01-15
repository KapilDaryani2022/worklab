import Image from 'next/image'
import Link from 'next/link';
import ContactUsImage from '../../../public/contact-us-image.webp';
import Location from '../../../public/location.svg';
import Contact from '../../../public/contact.svg';
import Social from '../../../public/social.svg';


export default function ContactUs() {
  return (
    <main>
      <section className='contact-us'>
        <div className="container">
            <div className="contact-us-inner">
                <div className='contact-us-form'>
                    <h2>Have a coffee with us</h2>
                    <p>Send us a message and get in touch</p>
                    <form>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input type="text" name='name' placeholder='Enter Full Name' />
                        </div>
                        <div>
                            <label htmlFor="email">Email ID</label>
                            <input type="email" name='email' placeholder='Enter Email' />
                        </div>
                        <div>
                            <label htmlFor="phone">Phone No.</label>
                            <input type="tel" name='phone' placeholder='Enter Phone No.' />
                        </div>
                        <div>
                            <label htmlFor="message">Message</label>
                            <textarea name="message" placeholder='Enter your message' cols={30} rows={5}></textarea>
                        </div>
                        <div className='contact-btns'>
                            <button>Clear Fields</button>
                            <button className='btn-primary'>Send Message</button>
                        </div>
                    </form>
                </div>
                <div>
                    <Image src={ContactUsImage} alt='/' />
                </div>
            </div>
        </div>
      </section>
      <section className='reach-out'>
          <h2>Reach out to us</h2>
            <div className="container">
                <div className="reach-out-inner">
                    <div>
                        <div>
                            <div className="flex">
                                <Location />
                                <p>Address</p>
                            </div>
                            <p>Dmart Community Management,<br /> Ground Floor, Souq Al Manzil,<br /> Opp Al Abra, Dubai, UAE.</p>
                        </div>
                        <div>
                            <div className="flex">
                                <Contact />
                                <p>Contact</p>
                            </div>
                            <a href="tel:+971505472769">+971 50 5472 769</a>
                            <a href="mailto:zanan@worklab.ae">zanan@worklab.ae</a>
                        </div>
                        <div>
                            <div className="flex">
                                <Social />
                                <p>Socials</p>
                            </div>
                            <a href="/">Instagram</a>
                            <a href="/">Facebook</a>
                            <a href="/">LinkedIn</a>
                        </div>
                    </div>
                    <div className='reach-out-iframe'>
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.3311172515173!2d55.40118207415092!3d25.124494034643963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f63cac34a2433%3A0x512986a8b6946d2c!2sSilicon%20Oasis!5e0!3m2!1sen!2sin!4v1705261221522!5m2!1sen!2sin" width="600" height="451" style={{border:0}} allowfullscreen={true} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.3311172515173!2d55.40118207415092!3d25.124494034643963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f63cac34a2433%3A0x512986a8b6946d2c!2sSilicon%20Oasis!5e0!3m2!1sen!2sin!4v1705261221522!5m2!1sen!2sin"
                            width="600"
                            height="451"
                            style={{ border: 'your-border' }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>
      </section>
    </main>
  )
}