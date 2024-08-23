import eligCardImage from '../../../Assets/Pages/Work Permit/WPCheckEligBanner.png'
import '../../../styles/shared/CheckEligibilityCard.css'
import buttonArrow from '../../../Assets/Pages/Permanent Residency/EligCardButtonArrow.svg'

function EligibilityCardWorkPermit() {

    return (
        <div class="elig-card-container">
            <div class="elig-card-mask"></div>
            <img src={eligCardImage} class="elig-card-background-img" alt="eligibility card image" />
            <div class="elig-card-header">Check your eligibility instantly</div>
            <div class="!w-[300px] elig-card-text">"Determine Your Work Permit Eligibility Now!”</div>
            <button>
            <div class="elig-card-button-text">Check Now</div>
                <img src={buttonArrow} class="elig-card-button-arrow" alt="buttonArrow" />
            </button>
        </div>
    );

}

export default EligibilityCardWorkPermit;