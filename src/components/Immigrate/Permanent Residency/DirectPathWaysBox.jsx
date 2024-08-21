import './DirectPathWaysBox.css'
import expressEntryIcon from "../../../Assets/Pages/Permanent Residency/ExpressEntryIcon.svg"
import canadaIcon from '../../../Assets/Pages/Permanent Residency/CanadaIcon.svg'
import businessGroupIcon from '../../../Assets/Pages/Permanent Residency/BusinessGroupIcon.svg'
import caregiverIcon from '../../../Assets/Pages/Permanent Residency/CaregiverIcon.svg'
import atlanticImmIcon from '../../../Assets/Pages/Permanent Residency/AtlanticImmigrationIcon.svg'
import pilotProgramsIcon from '../../../Assets/Pages/Permanent Residency/PilotProgramsIcon.svg'

function DirectPathWaysBox() {

    return (
        <div class="direct-pathways-container">
            <div class="direct-pathways-header">Direct Pathways to Immigrate to Canada</div>
            <div class="direct-pathways-inner-box">
                <div class="direct-pathways-button-container">
                    <button class="direct-pathways-button">
                        <img src={expressEntryIcon} class="direct-pathways-icon" alt="" />
                    </button>
                    <div class="direct-pathways-text">
                        Express Entry
                    </div>
                </div>
                <div class="direct-pathways-button-container relative top-3">
                    <button class="direct-pathways-button">
                        <img src={canadaIcon} class="direct-pathways-icon" alt="" />
                    </button>
                    <div class="direct-pathways-text">
                        Provincial Nominee Program
                    </div>
                </div>
                <div class="direct-pathways-button-container">
                    <button class="direct-pathways-button">
                        <img src={businessGroupIcon} class="direct-pathways-icon" alt="" />
                    </button>
                    <div class="direct-pathways-text">
                        Sponsorship
                    </div>
                </div>
                <div class="direct-pathways-button-container">
                    <button class="direct-pathways-button">
                        <img src={caregiverIcon} class="direct-pathways-icon" alt="" />
                    </button>
                    <div class="direct-pathways-text">
                        Caregiver Programs
                    </div>
                </div>
                <div class="direct-pathways-button-container relative top-3">
                    <button class="direct-pathways-button">
                        <img src={atlanticImmIcon} class="direct-pathways-icon" alt="" />
                    </button>
                    <div class="direct-pathways-text">
                        Atlantic Immigration Programs
                    </div>
                </div>
                <div class="direct-pathways-button-container">
                    <button class="direct-pathways-button">
                        <img src={pilotProgramsIcon} class="direct-pathways-icon" alt="" />
                    </button>
                    <div class="direct-pathways-text">
                        Pilot Programs
                    </div>
                </div>
            </div>
        </div>
    );

}

export default DirectPathWaysBox