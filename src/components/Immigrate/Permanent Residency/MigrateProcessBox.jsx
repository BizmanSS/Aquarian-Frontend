
import './MigrateProcessBox.css'
import inquiryIcon from '../../../Assets/Pages/Permanent Residency/InquiryIcon.svg'
import counsellingIcon from '../../../Assets/Pages/Permanent Residency/CounsellingIcon.svg'
import eligibilityIcon from '../../../Assets/Pages/Permanent Residency/EligibilityIcon.svg'
import documentationIcon from '../../../Assets/Pages/Permanent Residency/DocumentationIcon.svg'
import processingIcon from '../../../Assets/Pages/Permanent Residency/ProcessingIcon.svg'
import arrow1 from '../../../Assets/Pages/Permanent Residency/Arrow1.svg'
import arrow2 from '../../../Assets/Pages/Permanent Residency/Arrow2.svg'
import arrow3 from '../../../Assets/Pages/Permanent Residency/Arrow3.svg'
import arrow4 from '../../../Assets/Pages/Permanent Residency/Arrow4.svg'
import arrow5 from '../../../Assets/Pages/Permanent Residency/Arrow5.svg'
import arrow6 from '../../../Assets/Pages/Permanent Residency/Arrow6.svg'


function MigrateProcessBox() {
    return (
        <div class="migrate-box-container">
            <div class="migrate-box-header">Migrate Process</div>
            <div class="migrate-box-summary">
                In recent times, migration has become a dream for everyone
                willing to settle abroad. People move
                abroad to study, work, or have a better
                quality of life.
            </div>
            <div class="migrate-box-inner-box">
                <div class="migrate-box-card-container">
                    <img src={inquiryIcon} class="migrate-box-card-icon" alt="Inquiry_Icon" />
                    <div class="migrate-box-card-header">Inquiry</div>
                    <div class="migrate-box-card-text">Welcome! Your immigration journey starts here...</div>
                </div>
                <div class="migrate-box-card-container">
                    <img src={counsellingIcon} class="migrate-box-card-icon" alt="Inquiry_Icon" />
                    <div class="migrate-box-card-header">Expert Counselling</div>
                    <div class="migrate-box-card-text">Our expert will personally guide you based on your interests and goals.</div>
                </div>
                <div class="migrate-box-card-container">
                    <img src={eligibilityIcon} class="migrate-box-card-icon" alt="Inquiry_Icon" />
                    <div class="migrate-box-card-header">Eligibility</div>
                    <div class="migrate-box-card-text max-w-60">Check your eligibility for immigration to specific country and sign-up for this process.</div>
                </div>
                <div class="migrate-box-card-container">
                    <img src={documentationIcon} class="migrate-box-card-icon" alt="Inquiry_Icon" />
                    <div class="migrate-box-card-header">Documentation</div>
                    <div class="migrate-box-card-text">All your documents will be compiled to create a strong application.</div>
                </div>
                <div class="migrate-box-card-container">
                    <img src={processingIcon} class="migrate-box-card-icon" alt="Inquiry_Icon" />
                    <div class="migrate-box-card-header">Processing</div>
                    <div class="migrate-box-card-text">Assists you in every step while filing the application.</div>
                </div>
            </div>
            <div class="migrate-box-arrows-container">
                <img src={arrow1} class="migrate-box-arrow-1" alt="arrow" />
                <img src={arrow2} class="migrate-box-arrow-2" alt="arrow" />
                <img src={arrow3} class="migrate-box-arrow-3" alt="arrow" />
                <img src={arrow4} class="migrate-box-arrow-4" alt="arrow" />
            </div>
            <div class="migrate-box-arrows-container-2">
                <img src={arrow5} class="migrate-box-arrow-5" alt="arrow" />
                <img src={arrow6} class="migrate-box-arrow-6" alt="arrow" />
                <img src={arrow5} class="migrate-box-arrow-7" alt="arrow" />
                <img src={arrow6} class="migrate-box-arrow-8" alt="arrow" />
            </div>
        </div>
    );

}

export default MigrateProcessBox