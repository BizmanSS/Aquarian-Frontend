import '../../../styles/shared/ReadyToStartCard.css'
import rtsCardBgImage from "../../../Assets/Pages/Permanent Residency/RtsCardBgImage.jpg"
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
                    Discover your Canadian
                    immigration options! Complete our free assessment today
                    and a member of the Aquarian Team will contact you to
                    discuss your immigration to Canada.
                </div>
                <button class="rts-card-button">Lets Get Started</button>
            </div>
        </div>
    );
}

export default ReadyToStartCard;