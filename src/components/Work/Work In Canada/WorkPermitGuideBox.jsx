import './WorkPermitGuideBox.css'
import wpGuideIcon1 from '../../../Assets/Pages/Work Permit/wpGuideIcon1.svg'
import wpGuideIcon2 from '../../../Assets/Pages/Work Permit/wpGuideIcon2.svg'
import wpGuideIcon3 from '../../../Assets/Pages/Work Permit/wpGuideIcon3.svg'
import wpGuideIcon4 from '../../../Assets/Pages/Work Permit/wpGuideIcon4.svg'
import wpGuideIcon5 from '../../../Assets/Pages/Work Permit/wpGuideIcon5.svg'
import wpGuideIcon6 from '../../../Assets/Pages/Work Permit/wpGuideIcon6.svg'
import wpGuideIcon7 from '../../../Assets/Pages/Work Permit/wpGuideIcon7.svg'
import wpGuideIcon8 from '../../../Assets/Pages/Work Permit/wpGuideIcon8.svg'
import wpGuideIcon9 from '../../../Assets/Pages/Work Permit/wpGuideIcon9.svg'
import wpGuideIcon10 from '../../../Assets/Pages/Work Permit/wpGuideIcon10.svg'



function WorkPermitGuideBox() {

    return (
        <div class="wp-guide-box-container">
            <div class="wp-guide-box-header">A Step-by-Step Guide <br />
                To Securing a Work Permit in Canada</div>
            <div class="wp-guide-box-line"></div>
            <div class="wp-guide-box-inner-box">
                <div class="wp-guide-box-button-container">
                    <button class="wp-guide-box-button">
                        <img src={wpGuideIcon1} class="wp-guide-box-icon" alt="" />
                        <div class="wp-guide-box-number-circle">1</div>
                    </button>
                    <div class="wp-guide-box-text">
                        Determine Eligibility
                    </div>
                </div>
                <div class="wp-guide-box-button-container relative top-3">
                    <button class="wp-guide-box-button">
                        <img src={wpGuideIcon2} class="wp-guide-box-icon" alt="" />
                        <div class="wp-guide-box-number-circle wp-guide-box-number-circle-2">2</div>

                    </button>
                    <div class="wp-guide-box-text">
                        Identify type of work permit
                    </div>
                </div>
                <div class="wp-guide-box-button-container relative top-3">
                    <button class="wp-guide-box-button">
                        <img src={wpGuideIcon3} class="wp-guide-box-icon wp-guide-box-icon-2" alt="" />
                        <div class="wp-guide-box-number-circle wp-guide-box-number-circle-2">3</div>

                    </button>
                    <div class="wp-guide-box-text">
                        Gather Required Documents
                    </div>
                </div>
                <div class="wp-guide-box-button-container relative top-3">
                    <button class="wp-guide-box-button">
                        <img src={wpGuideIcon4} class="wp-guide-box-icon" alt="" />
                        <div class="wp-guide-box-number-circle wp-guide-box-number-circle-2">4</div>

                    </button>
                    <div class="wp-guide-box-text">
                        Complete Application forms
                    </div>
                </div>
                <div class="wp-guide-box-button-container">
                    <button class="wp-guide-box-button">
                        <img src={wpGuideIcon5} class="wp-guide-box-icon wp-guide-box-icon-2" alt="" />
                        <div class="wp-guide-box-number-circle">5</div>

                    </button>
                    <div class="wp-guide-box-text">
                        Pay Application Fees
                    </div>
                </div>
                <div class="wp-guide-box-button-container">
                    <button class="wp-guide-box-button">
                        <img src={wpGuideIcon6} class="wp-guide-box-icon" alt="" />
                        <div class="wp-guide-box-number-circle">6</div>

                    </button>
                    <div class="wp-guide-box-text">
                        Submit Application
                    </div>
                </div>
                <div class="wp-guide-box-button-container relative top-3">
                    <button class="wp-guide-box-button">
                        <img src={wpGuideIcon7} class="wp-guide-box-icon" alt="" />
                        <div class="wp-guide-box-number-circle wp-guide-box-number-circle-2">7</div>

                    </button>
                    <div class="wp-guide-box-text">
                        Biometrics and Medical exam
                    </div>
                </div>
                <div class="wp-guide-box-button-container relative top-3">
                    <button class="wp-guide-box-button">
                        <img src={wpGuideIcon8} class="wp-guide-box-icon" alt="" />
                        <div class="wp-guide-box-number-circle wp-guide-box-number-circle-2">8</div>

                    </button>
                    <div class="wp-guide-box-text">
                        Wait for Processing and Decision
                    </div>
                </div>
                <div class="wp-guide-box-button-container relative top-3">
                    <button class="wp-guide-box-button">
                        <img src={wpGuideIcon9} class="wp-guide-box-icon" alt="" />
                        <div class="wp-guide-box-number-circle wp-guide-box-number-circle-2">9</div>
                    </button>
                    <div class="wp-guide-box-text">
                        Obtain Work Permit at the Port of Entry
                    </div>
                </div>
                <div class="wp-guide-box-button-container relative top-3">
                    <button class="wp-guide-box-button">
                        <img src={wpGuideIcon10} class="wp-guide-box-icon" alt="" />
                        <div class="wp-guide-box-number-circle wp-guide-box-number-circle-2">10</div>
                    </button>
                    <div class="wp-guide-box-text">
                        Start your job in Canada
                    </div>
                </div>
            </div>
        </div>
    );

}

export default WorkPermitGuideBox;