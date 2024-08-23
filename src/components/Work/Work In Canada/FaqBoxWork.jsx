import React, { useState } from 'react';
import "../../../styles/shared/FaqBox.css"
import faqBoxIcon from '../../../Assets/Pages/Permanent Residency/FaqBoxIcon.svg'
import faqDropDownButton from '../../../Assets/Pages/Permanent Residency/FaqDropDownButton.svg'



const faqItems = [
    { question: 'How long will it take to process my work permit application?', answer: 'The processing time for a work permit application depends on the type of permit and the applicant’s country of residence at the time of application. Processing times range anywhere from a few weeks to several months.' },
    { question: 'How long will it take to process my LMIA application?', answer: 'There are two types of Labour Market Impact Assessment (LMIA) applications: a regular LMIA and a simplified LMIA. The simplified LMIA is only available in the province of Quebec. The regular LMIA is processed on a case-by-case basis with processing times varying greatly from applicant to applicant. Generally, it takes a minimum of five months to receive a response on a regular LMIA application. If an employer is eligible for Canada’s Global Talent Stream, they may qualify for expedited LMIA processing. The simplified LMIA completed for Quebec employment is usually processed in approximately two to three months.' },
    { question: 'What is the rate of success for work permit/LMIA applications?', answer: 'It is impossible to give a rate of success for work permit/LMIA applications, as all applications are processed on a case-by-case basis. If an applicant meets the requirements of the LMIA, their application should be approved. However, applications are assessed by individual officers, each exercising their own discretion in choosing whether or not to approve a work permit application.' },
    { question: 'How can I check the status of my work permit application?', answer: 'If you submitted an online work permit application, you may check the status through your online account. If you submitted a paper-based application, you may check the status by linking it to an online IRCC account.'},
    { question: 'How do I activate my work permit?', answer: 'How you activate your work permit will depend on where you are applying from and how you are applying.'},
];


function FaqBoxWork() {

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

export default FaqBoxWork;