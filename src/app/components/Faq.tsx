'use client';
import { FC, useEffect, useState } from 'react';
// IMAGES
import ChevrotDown from '../../../public/chevrot-down.svg';

interface FAQProps {
    faqData: any;
}
const FAQ: FC<FAQProps> = ({ faqData }) => {
    const [active, setActive] = useState(0)
    return (
        <section className='business-faq'>
            <div className="container">
                <h2>FAQs</h2>
                <p>We have answers to all your questions, here are some of the most Frequently Asked Questions</p>
                {
                    faqData.map((item: any, index: number) => (
                        <div className={active === index + 1 ? "faq-item active" : "faq-item"} key={index} >
                            <div className="faq-item-head" onClick={() => { active === index + 1 ? setActive(0) : setActive(index + 1)}}>
                                <p>0{index+1}</p>
                                <p>{item.title}</p>
                                <div className="handle-faq">
                                    <ChevrotDown />
                                </div>
                            </div>
                            <div className="faq-item-des">
                                <p>
                                    {item.des}
                                </p>
                                {item.des2 &&
                                    <p>
                                        {item.des2}
                                    </p>
                                }
                                <div>
                                    {item.list?.map((listItem: any, index: number) => (
                                        <li key={index}>{listItem}</li>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
export default FAQ;