import './StudyStepsInvolved.css'
import ConsellingLogo from '../../../Assets/Pages/Study Permit/ConsellingLogo.png';
import CoursesLogo from '../../../Assets/Pages/Study Permit/CoursesLogo.png';
import UniversityLogo from '../../../Assets/Pages/Study Permit/UniversityLogo.png';
import AdmissionsLogo from '../../../Assets/Pages/Study Permit/AdmissionsLogo.png';
import VisaPermitLogo from '../../../Assets/Pages/Study Permit/VisaPermitLogo.png';
import PreDepartureLogo from '../../../Assets/Pages/Study Permit/PreDepartureBrPogo.png';

export default function StudyStepsInvolved() {
  const studyStepsData = [
    {
      icon: ConsellingLogo, 
      heading: 'Counselling',
      text: 'This is the description for step 1.'
    },
    {
      icon: CoursesLogo,
      heading: 'Courses',
      text: 'This is the description for step 2.'
    },
    {
      icon: UniversityLogo,
      heading: 'University/College',
      text: 'This is the description for step 3.'
    },
    {
      icon: AdmissionsLogo,
      heading: 'Admissions',
      text: 'This is the description for step 4.'
    },
    {
      icon: VisaPermitLogo,
      heading: 'Visa/Study Permit',
      text: 'This is the description for step 5.'
    },
    {
      icon: PreDepartureLogo,
      heading: 'Pre Departure Briefing',
      text: 'This is the description for step 6.'
    },
  ];

return (
  <div className='study-steps-container'>
    <div className='study-steps-grid'>
      {studyStepsData.map((step, index) => (
        <div className='study-steps-card' key={index} style={{ position: 'relative' }}>
          <div 
            className={`study-steps-number square-color-${index + 1}`}
          >
            {index + 1}
          </div>
          <div className='study-steps-icon'>
            <img src={step.icon} alt={`Icon for ${step.heading}`} />
          </div>
          <h2 className='study-steps-heading'>{step.heading}</h2>
          <p className='study-steps-text'>{step.text}</p>
          <button className='study-steps-button'>Explore</button>
        </div>
      ))}
    </div>
  </div>
);


}