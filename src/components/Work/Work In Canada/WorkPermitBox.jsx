import './WorkPermitBox.css'
import workPermitBoxIcon1 from '../../../Assets/Pages/Work Permit/WorkPermitBoxIcon1.png'
import workPermitBoxIcon2 from '../../../Assets/Pages/Work Permit/WorkPermitBoxIcon2.png'
import workPermitBoxIcon3 from '../../../Assets/Pages/Work Permit/WorkPermitBoxIcon3.png'
import workPermitBoxIcon4 from '../../../Assets/Pages/Work Permit/WorkPermitBoxIcon4.png'



function WorkPermitBox() {
    return (
        <div class='work-permit-box-container'>
            <div class='work-permit-box-header'>What is a Canadian work permit?</div>
            <div class="work-permit-box-card-container">
                <div class="work-permit-box-card work-permit-box-card-1">
                    <div class="work-permit-box-card-text work-permit-box-card-text-1">
                        A Canada work permit is
                        an official document issued by the Canadian government that
                        allows foreign nationals to legally work in Canada for a
                        specific period.</div>
                    <div class="work-permit-box-card-icon work-permit-box-card-icon-1">
                        <img src={workPermitBoxIcon1} alt='official document icon'/>
                    </div>
                </div>
                <div class="work-permit-box-card work-permit-box-card-2">
                    <div class="work-permit-box-card-icon work-permit-box-card-icon-2">
                        <img src={workPermitBoxIcon2} alt='Work Permit document'/>
                    </div>
                    <div class="work-permit-box-card-text work-permit-box-card-text-2">
                        This document usually specifies crucial
                        information such as the type of work permitted,
                        the name of the employer, the location of work,
                        and the duration of employment.
                    </div>
                </div>
                <div class="work-permit-box-card work-permit-box-card-3">
                    <div class="work-permit-box-card-text work-permit-box-card-text-3">
                        While some work permits in Canada are tied to a 
                        specific job or employer, there are also open 
                        work permits that provide flexibility for the 
                        holder to work for any employer in the country. 
                    </div>
                    <div class="work-permit-box-card-icon work-permit-box-card-icon-3">
                        <img src={workPermitBoxIcon3} alt='different Work Permits'/>
                    </div>
                </div>
                <div class="work-permit-box-card work-permit-box-card-4">
                    <div class="work-permit-box-card-icon work-permit-box-card-icon-4">
                        <img src={workPermitBoxIcon4} alt='Approved icon' />
                    </div>
                    <div class="work-permit-box-card-text work-permit-box-card-text-4">
                        In Canada, individuals who are not citizens or 
                        permanent residents are required to possess a 
                        valid work permit to engage in employment 
                        activities, there are some exceptions 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkPermitBox;