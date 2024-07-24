import './IndirectPathwaysBox.css'
import businessGroupIcon from '../../../Assets/Pages/Permanent Residency/BusinessGroupIcon2.svg'
import studyPRIcon from '../../../Assets/Pages/Permanent Residency/StudyPRIcon.svg'
import workPRIcon from '../../../Assets/Pages/Permanent Residency/WorkPRIcon.svg'

function IndirectPathwaysBox() {

    return (
        <div class="indirect-pathways-container">
            <div class="indirect-pathways-header direct-pathways-header">Indirect Pathways to Immigrate to Canada</div>
            <div class="indirect-pathways-inner-box">
                <div class="direct-pathways-button-container relative top-3">
                    <button class="indirect-pathways-button direct-pathways-button">
                        <img src={businessGroupIcon} class="direct-pathways-icon" alt="" />
                    </button>
                    <div class="indirect-pathways-text max-w-36">
                        Invest - Business to PR
                    </div>
                </div>
                <div class="direct-pathways-button-container">
                    <button class="indirect-pathways-button direct-pathways-button">
                        <img src={studyPRIcon} class="direct-pathways-icon" alt="" />
                    </button>
                    <div class="indirect-pathways-text">
                        Study to PR
                    </div>
                </div>
                <div class="direct-pathways-button-container">
                    <button class="indirect-pathways-button direct-pathways-button">
                        <img src={workPRIcon} class="direct-pathways-icon" alt="" />
                    </button>
                    <div class="indirect-pathways-text">
                        Work to PR
                    </div>
                </div>
            </div>
        </div>
    );

}

export default IndirectPathwaysBox