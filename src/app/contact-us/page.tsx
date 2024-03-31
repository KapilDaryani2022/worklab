'use client';
import Image from 'next/image'
import Link from 'next/link';
import {useState, useEffect} from 'react';
import ContactUsImage from '../../../public/contact-us-image.webp';
import Location from '../../../public/location.svg';
import Contact from '../../../public/contact.svg';
import Social from '../../../public/social.svg';
import Email from '../../../public/email.svg';


export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        businessName: '',
        message: ''
    });
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
    };
    const handleSubmit = (e: any) => {
        // e.preventDefault();
        // console.log(formData);
    };
    const handleClear = () => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          businessName: '',
          message: ''
        });
    };
    useEffect(() => {
        const storedItemString = localStorage.getItem('business-name');
        if (storedItemString) {
            const storedItem = JSON.parse(storedItemString);
            setFormData(prevState => ({
                ...prevState,
                'businessName': storedItem
            }));
        } else {
            console.log('Item not found in localStorage');
        }
    }, []);
  return (
    <main>
      <section className='contact-us'>
        <div className="container">
            <div className="contact-us-inner animate__animated animate__fadeInUp">
                <div className='contact-us-form'>
                    <h2>Have a coffee with us</h2>
                    <p>Send us a message and get in touch</p>
                    <form onSubmit={handleSubmit} action="https://api.web3forms.com/submit" method="POST">
                        <input readOnly type="hidden" name="access_key" value="fe62baa7-63dd-4289-8181-bfd2fca59364" />
                        <div>
                            <label htmlFor="name">Name</label>
                            <input
                            required
                            type="text"
                            name='name'
                            placeholder='Enter Full Name'
                            value={formData.name}
                            onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="businessName">Business Name</label>
                            <input
                            required
                            type="text"
                            name='businessName'
                            placeholder='Enter Business Name'
                            value={formData.businessName}
                            onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email ID</label>
                            <input
                            required
                            type="email"
                            name='email'
                            placeholder='Enter Email'
                            value={formData.email}
                            onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="phone">Phone No.</label>
                            <input
                            required
                            type="tel"
                            name='phone'
                            placeholder='Enter Phone No'
                            value={formData.phone}
                            onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="message">Message</label>
                            <textarea
                            name="message"
                            placeholder='Enter your message'
                            cols={30}
                            rows={3}
                            value={formData.message}
                            onChange={handleChange}
                            ></textarea>
                        </div>
                        <div className='contact-btns'>
                            <button onClick={handleClear}>Clear Fields</button>
                            <button type='submit' className='btn-primary'>Send Message</button>
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
                            <a href="https://www.instagram.com/worklab.ae/" target='_blank'>Instagram</a>
                            <a href="https://www.facebook.com/WorkLabMedia/" target='_blank'>Facebook</a>
                            <a href="https://www.linkedin.com/company/worklabmedia" target='_blank'>LinkedIn</a>
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