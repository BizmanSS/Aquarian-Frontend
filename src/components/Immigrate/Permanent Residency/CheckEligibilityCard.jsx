import eligCardImage from '../../../Assets/Pages/Permanent Residency/EligCardImage.png'
import '../../../styles/shared/CheckEligibilityCard.css'
import buttonArrow from '../../../Assets/Pages/Permanent Residency/EligCardButtonArrow.svg'

function CheckEligibilityCard() {

    return (
        <div class="elig-card-container">
            <div class="elig-card-mask"></div>
            <img src={eligCardImage} class="elig-card-background-img" alt="eligibility card image" />
            <div class="elig-card-header">Check your eligibility instantly</div>
            <div class="elig-card-text">Evaluate your eligibility instantly for free!</div>
            <button>
            <div class="elig-card-button-text">Check Now</div>
                <img src={buttonArrow} class="elig-card-button-arrow" alt="buttonArrow" />
            </button>
        </div>
    );

}

export default CheckEligibilityCard;