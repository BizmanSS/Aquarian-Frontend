import '../../../styles/shared/ReadyToStartCard.css'
import rtsCardBgImage from "../../../Assets/Pages/Work Permit/ReadyToStartBanner.jpeg"
import rtsCardDesign from '../../../Assets/Pages/Permanent Residency/RtsCardDesign.png'

function ReadyToStartCard() {
    return (
        <div class="rts-card-container">
            <div class="rts-card-image-box">
                <img src={rtsCardBgImage} alt="" />
                <div class="rts-card-header">Ready to Start ?</div>
            </div>
            <div class="rts-card-text-box">
                <img src={rtsCardDesign} alt="" />
                <div class="rts-card-sub-header">Free Immigration Assessment</div>
                <div class="rts-card-text">
                    Do you need assistance regarding employment in 
                    Canada or hiring international workers? Reach out
                     to us today to discover how we can assist you!
                </div>
                <button class="rts-card-button">Lets Get Started</button>
            </div>
        </div>
    );
}

export default ReadyToStartCard;