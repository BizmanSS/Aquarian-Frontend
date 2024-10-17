import React, { useState } from 'react';
import "../../styles/shared/FaqBox.css";
import faqBoxIcon from '../../Assets/Pages/Permanent Residency/FaqBoxIcon.svg';
import faqDropDownButton from '../../Assets/Pages/Permanent Residency/FaqDropDownButton.svg';

function FaqBox({ title = "Permanent Residency FAQs", description = "Get your answers..", faqItems }) {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-box-container" style={{
            marginTop:"-120px"
        }}>
            <img className="faq-box-icon" src={faqBoxIcon} alt="faq box icon" />
            <div className="faq-box-header">{title}</div>
            <div className="faq-box-description">{description}</div>
            {faqItems.map((item, index) => (
                <div
                    key={index}
                    className={`faq-box-card ${activeIndex === index ? 'faq-box-card-active' : ''}`}
                >
                    <div className="faq-box-card-qbox">
                        <div className="faq-box-card-question" onClick={() => toggleAnswer(index)}>
                            {item.question}
                        </div>
                        <button className="faq-box-card-button" onClick={() => toggleAnswer(index)}>
                            <img
                                src={faqDropDownButton}
                                className={`faq-box-card-button-img ${activeIndex === index ? 'faq-button-rotated' : ''}`}
                                alt="dropdown button"
                            />
                        </button>
                    </div>
                    <div
                        className={`faq-box-card-answer ${activeIndex === index ? 'expanded' : ''}`}
                    >
                        <div className="faq-box-card-line"></div>
                        <p>{item.answer}</p>
                        {item.bulletList && (
                            <ol style={{
                                listStyleType:"decimal",
                                marginTop:"10px",
                                marginLeft:"30px",
                               
                            }}>
                                {item.bulletList.map((line, idx) => (
                                    <li style={{
                                         paddingLeft:"10px"
                                    }} key={idx}>
                                        {line.text}
                                        {line.subList && (
                                            <ul style={{
                                                listStyleType:"disc",
                                                marginTop:"10px",
                                                marginLeft:"20px",
                                            }}>
                                                {line.subList.map((subItem, subIdx) => (
                                                    <li key={subIdx}>{subItem}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ol>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default FaqBox;
