import React, { useState } from 'react';
import "../../../styles/shared/FaqBox.css"
import faqBoxIcon from '../../../Assets/Pages/Permanent Residency/FaqBoxIcon.svg'
import faqDropDownButton from '../../../Assets/Pages/Permanent Residency/FaqDropDownButton.svg'



const faqItems = [
    { question: 'What is a Citizen?', answer: 'A citizen can live, work, and study, anywhere in Canada, and has the right to vote in Canadian elections. Citizens have access to healthcare, social services, and support under the law. As well, citizenship cannot be revoked or removed. All people born in Canada automatically qualify for Canadian citizenship. ' },
    { question: 'What is a Permanent Resident?', answer: 'A Canadian permanent resident is a citizen of another country who has been granted permission to live in Canada as a permanent resident. Once a person has permanent resident status, they have the right to live and work anywhere in the country. ' },
    { question: 'Can I Work Anywhere in Canada?', answer: 'YES! Once a person has Canadian permanent resident status, they have the authorization to live and work anywhere in Canada. If a foreign national does not have Canadian permanent resident status, then they must have the proper authorization to work in Canada. Usually, this authorization comes in the form of a Canadian work permit.' },
    { question: 'Can I Bring My Family to Canada?', answer: 'YES! Certain immigration programs allow foreign nationals to immigrate to Canada with their family members. However, the family members able to accompany a foreign national varies depending on the immigration program. For example, those immigrating through Canada’s Express Entry system are eligible to include their spouse and dependent children on the application, but not their parents. '},
    { question: 'Why is Canada Looking for Immigrants?', answer: 'Canadian cities and rural areas depend on newcomers to keep their populations growing and to support their labour markets. Canada also has an ageing population, and without a robust system of immigration, Canada would be on a similar trajectory to that of Japan in the 1990s.'},
];


function FaqBoxImmigration() {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div class="faq-box-container">
            <img class="faq-box-icon" src={faqBoxIcon} alt="faq box icon" />
            <div class="faq-box-header">
                Would you like to know?</div>
            <div class="faq-box-description">Get your answers..</div>
            {faqItems.map((item, index) => (
                <div
                    key={index}
                    className={`faq-box-card ${activeIndex === index ? 'active' : ''}`}
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
                        <div class= "faq-box-card-line"></div>
                        {item.answer}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default FaqBoxImmigration;