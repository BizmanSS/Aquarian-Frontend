import './QLinksBox.css'
import qLinksBoxArrow from '../../../Assets/Pages/Work Permit/QLinksBoxArrow.svg'
import qLinksBoxLMIAImage from '../../../Assets/Pages/Work Permit/QLinksBoxLMIAImage.png'
import qLinksBoxOpenPermit from '../../../Assets/Pages/Work Permit/QLinksBoxOpenPermit.png'
import qLinksBoxJobOffer from '../../../Assets/Pages/Work Permit/QLinksBoxJobOffer.png'


function QLinksWorkPermitBox() {
    return (
        <div class="qlinks-box-container">

            <div class="qlinks-box-header">Types of Canadian Work Permits</div>

            <div class="qlinks-box-subheader">Closed Work Permits</div>

            <div class="qlinks-box-pointer">
                &#x2022; Requiring a Labor Market Impact Assessment (LMIA)
            </div>

            <div class="qlinks-box-inner-container">
                <div class="qlinks-box-links-container">
                    <div class="qlinks-box-link" >
                        <div class="qlinks-box-text">
                            Temporary Foreign Worker Program (TFWP)
                        </div>
                        <div className="qlinks-box-dashes">_______</div>
                        <div class="qlinks-box-arrow">
                            <img src={qLinksBoxArrow} alt="" />
                        </div>
                    </div>
                    <div class="qlinks-box-link">
                        <div class="qlinks-box-text">
                            Facilitated LMIA (Quebec)
                        </div>
                        <div className="qlinks-box-dashes">____________________</div>
                        <div class="qlinks-box-arrow">
                            <img src={qLinksBoxArrow} alt="" />
                        </div>
                    </div>
                    <div class="qlinks-box-link">
                        <div class="qlinks-box-text">
                            Global Talent Stream
                        </div>
                        <div className="qlinks-box-dashes">_______________________</div>
                        <div class="qlinks-box-arrow">
                            <img src={qLinksBoxArrow} alt="" />
                        </div>
                    </div>
                </div>
                <div class="qlinks-box-image ">
                    <img src={qLinksBoxLMIAImage} alt="" /></div>
            </div>

            <div class="qlinks-box-pointer pt-5">
                &#x2022; LMIA-Exempt but requiring a job offer or
                employment contract
            </div>

            <div class="qlinks-box-inner-container">
                <div class="qlinks-box-links-container">
                    <div class="qlinks-box-link" >
                        <div class="qlinks-box-text">
                            International Mobility Program (IMP)
                        </div>
                        <div className="qlinks-box-dashes">____________</div>
                        <div class="qlinks-box-arrow">
                            <img src={qLinksBoxArrow} alt="" />
                        </div>
                    </div>
                    <div class="qlinks-box-link">
                        <div class="qlinks-box-text">
                            NAFTA Work Permits
                        </div>
                        <div className="qlinks-box-dashes">________________________</div>
                        <div class="qlinks-box-arrow">
                            <img src={qLinksBoxArrow} alt="" />
                        </div>
                    </div>
                    <div class="qlinks-box-link">
                        <div class="qlinks-box-text">
                            CETA Work Permits
                        </div>
                        <div className="qlinks-box-dashes">_________________________</div>
                        <div class="qlinks-box-arrow">
                            <img src={qLinksBoxArrow} alt="" />
                        </div>
                    </div>
                    <div class="qlinks-box-link">
                        <div class="qlinks-box-text">
                            Intra-Company Transfers
                        </div>
                        <div className="qlinks-box-dashes">____________________</div>
                        <div class="qlinks-box-arrow">
                            <img src={qLinksBoxArrow} alt="" />
                        </div>
                    </div>
                </div>
                <div class="!w-[70%] qlinks-box-image">
                    <img src={qLinksBoxJobOffer} alt="" /></div>
            </div>

            <div class="qlinks-box-subheader pt-5">Open Work Permits</div>

            <div class="qlinks-box-pointer">
                &#x2022; LMIA-Exempt but requiring a job offer or
                employment contract
            </div>

            <div class="qlinks-box-inner-container">
                <div class="qlinks-box-links-container">
                    <div class="qlinks-box-link" >
                        <div class="qlinks-box-text">
                            Post-Graduation Work Permits (PGWP)
                        </div>
                        <div className="qlinks-box-dashes">__________</div>
                        <div class="qlinks-box-arrow">
                            <img src={qLinksBoxArrow} alt="" />
                        </div>
                    </div>
                    <div class="qlinks-box-link">
                        <div class="qlinks-box-text">
                            Spousal Sponsorship from Inside of Canada
                        </div>
                        <div className="qlinks-box-dashes">______</div>
                        <div class="qlinks-box-arrow">
                            <img src={qLinksBoxArrow} alt="" />
                        </div>
                    </div>
                    <div class="qlinks-box-link">
                        <div class="qlinks-box-text">
                            International Experience Canada (IEC)
                        </div>
                        <div className="qlinks-box-dashes">__________</div>
                        <div class="qlinks-box-arrow">
                            <img src={qLinksBoxArrow} alt="" />
                        </div>
                    </div>
                    <div class="qlinks-box-link">
                        <div class="qlinks-box-text">
                            Bridging Open Work Permit (BOWP)
                        </div>
                        <div className="qlinks-box-dashes">_____________</div>
                        <div class="qlinks-box-arrow">
                            <img src={qLinksBoxArrow} alt="" />
                        </div>
                    </div>
                    <div class="qlinks-box-link">
                        <div class="!mr-0 qlinks-box-text">
                            Spouse Accompanying International Student or Worker
                        </div>
                        <div className="qlinks-box-dashes"></div>
                        <div class="qlinks-box-arrow">
                            <img src={qLinksBoxArrow} alt="" />
                        </div>
                    </div>
                </div>
                <div class="!w-[70%] qlinks-box-image">
                    <img src={qLinksBoxOpenPermit} alt="" /></div>
            </div>



        </div>

    );
}

export default QLinksWorkPermitBox;