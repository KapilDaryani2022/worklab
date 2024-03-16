import Image from 'next/image'
import Link from 'next/link';
import ContactUsImage from '../../../public/contact-us-image.webp';
import Location from '../../../public/location.svg';
import Contact from '../../../public/contact.svg';
import Social from '../../../public/social.svg';
import Email from '../../../public/email.svg';


export default function ContactUs() {
  return (
    <main>
      <section className='contact-us'>
        <div className="container">
            <div className="contact-us-inner animate__animated animate__fadeInUp">
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
            <div className="container">
                <h2>Reach out to us</h2>
                <p>Send us a message and get in touch</p>
                <div className="reach-out-inner">
                    <div>
                        <div>
                            <div className="reach-out-inner--icon">
                                <Contact />
                            </div>
                            <div className="flex">
                                <p>Phone</p>
                            </div>
                            <a href="tel:+971505472769">+971 50 5472 769</a>
                        </div>
                        <div>
                            <div className="reach-out-inner--icon">
                                <Email />
                            </div>
                            <div className="flex">
                                <p>Email</p>
                            </div>
                            <a href="mailtozanan@worklab.ae">zanan@worklab.ae</a>
                        </div>
                        <div>
                            <div className="reach-out-inner--icon">
                                <Social />
                            </div>
                            <div className="flex">
                                <p>Socials</p>
                            </div>
                            <a href="#">Instagram</a>
                            <a href="#">Facebook</a>
                            <a href="#">LinkedIn</a>
                        </div>
                        <div>
                            <div className="reach-out-inner--icon">
                                <Location />
                            </div>
                            <div className="flex">
                                <p>Address</p>
                            </div>
                            <p>Office 08, Golden Gate Business Centre, 3rd Floor - Block C, Al Hudaiba Awards Building, Dubai.</p>
                        </div>
                    </div>
                    <div className='reach-out-iframe'>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1804.4386168851754!2d55.2710574!3d25.2410596!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa2549d59ba4bf041%3A0x792fca74a4013310!2sWorkLab%20Setup%20%26%20Marketing%20Co.!5e0!3m2!1sen!2sin!4v1710592305407!5m2!1sen!2sin" 
                            width="530" 
                            height="354" 
                            style={{ border: '0' }}
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