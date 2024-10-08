import React, { useState } from 'react';
import "../../styles/shared/FaqBox.css";
import faqBoxIcon from '../../Assets/Pages/Permanent Residency/FaqBoxIcon.svg';
import faqDropDownButton from '../../Assets/Pages/Permanent Residency/FaqDropDownButton.svg';

function FaqBox({ title = "Would you like to know?", description = "Get your answers..", faqItems }) {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div class="faq-box-container">
            <img class="faq-box-icon" src={faqBoxIcon} alt="faq box icon" />
            <div class="faq-box-header">{title}</div>
            <div class="faq-box-description">{description}</div>
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
                        <div class="faq-box-card-line"></div>
                        {item.answer}

                        {item.listAnswer && (
            <ul className='my-1'>
              {item.listAnswer.map((line, idx) => (
                <li key={idx}>{line}</li>
              ))}
            </ul>
          )}


                    </div>
                </div>
            ))}
        </div>
    );
}

export default FaqBox;
