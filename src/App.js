import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import HomePage from './components/Pages/HomePages/HomePage';
import Sidebar from './components/globalComponents/Sidebar/Sidebar';
// import Header from "./components/globalComponents/Header/Header";
import Footer from './components/globalComponents/Footer/Footer';
import AboutUs from './components/Pages/AboutUs/AboutUs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import img4 from './Assets/clipart/Vector.png';
import clip1 from './Assets/clipart/newsroom 2.png';
import clip2 from './Assets/clipart/free assessment 2.png';
import clip3 from './Assets/clipart/resources and tools 2.png';
import clip4 from './Assets/clipart/aquarian services 2.png';
import clip5 from './Assets/clipart/blog 2.png';
import { IoMdClose } from 'react-icons/io';

import Header from './components/globalComponents/Header/Header';
import ContactUsPage from './components/Pages/ContactUs/Contact';
import SitemapImmigrateDesktop from './components/globalComponents/Sidebar/SitemapImmigrateDesktop';
import SitemapWorkDesktop from './components/globalComponents/Sidebar/SitemapWorkDesktop';
import SitemapStudyDesktop from './components/globalComponents/Sidebar/SitemapStudyDesktop';
import SitemapVisitDesktop from './components/globalComponents/Sidebar/SitemapVisitDesktop';
import SitemapBusinessDesktop from './components/globalComponents/Sidebar/SitemapBusinessDesktop';
import SitemapSponsorshipDesktop from './components/globalComponents/Sidebar/SitemapSponsorshipDesktop';
import SitemapEmployersDesktop from './components/globalComponents/Sidebar/SitemapEmployersDesktop';
import {
  useMobile,
  MobileProvider,
} from './components/globalComponents/MobileContext/IsMobileContext';
import ClbCalculator from './components/Pages/Clbcalculator/ClbCalculator';
import CrsCalculator from './components/Pages/CrsCalculator/CrsCalculator';
import Blogs from './components/Pages/Blogs/Blogs';
import FreeAssessment from './components/AssessmentForm/FreeAssessment';
import LatestNews from './components/Pages/Latest News/LatestNews';
import PR from './components/Immigrate/Permanent Residency/pr';
import FederalSkilledWorkerClass from './components/Immigrate/Express Entry/Federal Skilled Worker Class/federal-skilled-worker-class';
import FederalSkilledTradesClass from './components/Immigrate/Express Entry/Federal Skilled Trades Class/federal-skilled-trades-class';
import CanadianExperienceClass from './components/Immigrate/Express Entry/Canadian Experience Class/canadian-experience-class';
import PRCards from './components/Immigrate/After Permanent Residency/PR Cards/prCards';
import PRCardRenewal from './components/Immigrate/After Permanent Residency/PR Card Renewal/prCardRenewal';
import PRTravel from './components/Immigrate/After Permanent Residency/PR Travel/prTravel';
import ResidencyObligation from './components/Immigrate/After Permanent Residency/Residency Obligation/residencyobligation';
import CanadianCitizenship from './components/Immigrate/After Permanent Residency/Canadian Citizenship/canadianCitizenship';
import PRFAQs from './components/Immigrate/PR FAQs/prFaqs';
import RuralAndNorthern from './components/Immigrate/Rural and Northern Immigration Pilot/ruralAndNorthern';
import CaregiverPrograms from './components/Immigrate/Caregiver Programs/caregiver-programs';
import HomeChild from './components/Immigrate/Caregiver Programs/Home Child Care Provider Pilot/homeChild';
import HomeSupport from './components/Immigrate/Caregiver Programs/Home Support Worker Pilot/homeSupport';
import AIP from './components/Immigrate/AIP Atlantic Immigration Program/aip-atlantic-immigration-program';
import AgriFoodPilot from './components/Immigrate/Agri-Food Pilot/agri-food-pilot';
import AfterPR from './components/Immigrate/After Permanent Residency/after-permanent-residency';
import ExpressEntry from './components/Immigrate/Express Entry/expressEntry';
import PNP from './components/Immigrate/PNP/provincial-nominee-program';
import AlbertaImmigrantNomineeProgram from './components/Immigrate/PNP/Alberta Immigrant Nominee Program/alberta-immigrant-nominee-program';
import BritishColumbia from './components/Immigrate/PNP/British Columbia/british-columbia';
import Manitoba from './components/Immigrate/PNP/Manitoba/manitoba';
import NewBrunswick from './components/Immigrate/PNP/New Brunswick/new-brunswick';
import NewFoundlandAndLabrador from './components/Immigrate/PNP/Newfoundland and Labrador/newfoundland-and-Labrador';
import NorthwestTerritories from './components/Immigrate/PNP/Northwest Territories/northwestTerritories';
import NovaScotia from './components/Immigrate/PNP/Nova Scotia/nova-scotia';
import Ontario from './components/Immigrate/PNP/Ontario/ontario';
import PrinceEdwardIsland from './components/Immigrate/PNP/Prince Edward Island/PrinceEdwardIsland';
import Saskatchewan from './components/Immigrate/PNP/Saskatchewan/Saskatchewan';
import Yukon from './components/Immigrate/PNP/Yukon/yukon';
import AlbertaOpportunityStream from './components/Immigrate/PNP/Alberta Immigrant Nominee Program/Alberta Opportunity Stream/AlbertaOpportunityStream';
import AlbertaExpressEntry from './components/Immigrate/PNP/Alberta Immigrant Nominee Program/Alberta Express Entry/AlbertaExpressEntry';
import AlbertaAcceleratedTechPathway from './components/Immigrate/PNP/Alberta Immigrant Nominee Program/Alberta Accelerated Tech Pathway/AlbertaAcceleratedTechPathway';
import AlbertaFarmStream from './components/Immigrate/PNP/Alberta Immigrant Nominee Program/Alberta Farm Stream/AlbertaFarmStream';
import AlbertaGraduateEntrepreneurStream from './components/Immigrate/PNP/Alberta Immigrant Nominee Program/Alberta Graduate Entrepreneur Stream/AlbertaGraduateEntrepreneurStream';
import AlbertaForeignGraduateEntrepreneurStream from './components/Immigrate/PNP/Alberta Immigrant Nominee Program/Alberta Foreign Graduate Entrepreneur Stream/AlbertaForeignGraduateEntrepreneurStream';
import AlbertaTourismAndHospitatlityStream from './components/Immigrate/PNP/Alberta Immigrant Nominee Program/Alberta Tourism and Hospitatlity Stream/AlbertaTourismAndHospitatlityStream';
import AlbertaRuralRenewalStream from './components/Immigrate/PNP/Alberta Immigrant Nominee Program/Alberta Rural Renewal Stream/AlbertaRuralRenewalStream';
import AlbertaRuralEntrepreneur from './components/Immigrate/PNP/Alberta Immigrant Nominee Program/Alberta Rural Entrepreneur/AlbertaRuralEntrepreneur';
import BritishColumbiaSkilledWorker from './components/Immigrate/PNP/British Columbia/British Columbia Skilled Worker/BritishColumbiaSkilledWorker';
import BritishColumbiaEntrepreneurImmigration from './components/Immigrate/PNP/British Columbia/British Columbia Entrepreneur Immigration/BritishColumbiaEntrepreneurImmigration';
import BritishColumbiaPilotProgram from './components/Immigrate/PNP/British Columbia/British Columbia Pilot Program/BritishColumbiaPilotProgram';
import EntryLevelAndSemiSkilledWorker from './components/Immigrate/PNP/British Columbia/British Columbia Skilled Worker/British Columbia Entry Level and Semi-Skilled Worker (ELSS)/EntryLevelAndSemi-SkilledWorker';
import BritishColumbiaHealthcareProfessional from './components/Immigrate/PNP/British Columbia/British Columbia Skilled Worker/British Columbia Healthcare Professional/BritishColumbiaHealthcareProfessional';
import BritishColumbiaInternationalPostGraduate from './components/Immigrate/PNP/British Columbia/British Columbia Skilled Worker/British Columbia International Post-Graduate/BritishColumbiaInternationalPost-Graduate';
import BritishColumbiaInternationalGraduate from './components/Immigrate/PNP/British Columbia/British Columbia Skilled Worker/British Columbia International Graduate/BritishColumbiaInternationalGraduate';
import BritishColumbiaStrategicProjects from './components/Immigrate/PNP/British Columbia/British Columbia Entrepreneur Immigration/British Columbia Strategic Projects/BritishColumbiaStrategicProjects';
import BritishColumbiaEntrepreneurStream from './components/Immigrate/PNP/British Columbia/British Columbia Entrepreneur Immigration/British Columbia Entrepreneur Stream/BritishColumbiaEntrepreneurStream';
import BritishColumbiaEntrepreneurRegionalPilot from './components/Immigrate/PNP/British Columbia/British Columbia Entrepreneur Immigration/British Columbia Entrepreneur Regional Pilot/BritishColumbiaEntrepreneurRegionalPilot';
import BritishColumbiaPNPTechPilot from './components/Immigrate/PNP/British Columbia/British Columbia Pilot Program/British Columbia PNP Tech Pilot/BritishColumbiaPNPTechPilot';
import SkilledWorkersInManitoba from './components/Immigrate/PNP/Manitoba/Skilled Workers in Manitoba (SWM)/SkilledWorkers-inManitoba';
import SkilledWorkersOverseas from './components/Immigrate/PNP/Manitoba/Skilled Workers Overseas (SWO)/SkilledWorkersOverseas';
import ManitobaInternationalEducationStream from './components/Immigrate/PNP/Manitoba/Manitoba International Education Stream (IES)/ManitobaInternationalEducationStream';
import ManitobaBusinessInvestorStream from './components/Immigrate/PNP/Manitoba/Manitoba Business Investor Stream (BIS)/ManitobaBusinessInvestorStream';
import SkilledWorkersInManitobaStream from './components/Immigrate/PNP/Manitoba/Skilled Workers in Manitoba (SWM)/Skilled Workers in Manitoba Stream/SkilledWorkers-inManitobaStream';
import ManitobaExperiencePathway from './components/Immigrate/PNP/Manitoba/Skilled Workers in Manitoba (SWM)/Manitoba Experience Pathway/ManitobaExperiencePathway';
import ManitobaEmployerDirectRecruitmentPathway from './components/Immigrate/PNP/Manitoba/Skilled Workers in Manitoba (SWM)/Manitoba Employer Direct Recruitment Pathway/ManitobaEmployerDirectRecruitmentPathway';
import ManitobaSkilledWorkersOverseasStream from './components/Immigrate/PNP/Manitoba/Skilled Workers Overseas (SWO)/Manitoba Skilled Workers Overseas Stream/ManitobaSkilledWorkersOverseasStream';
import ManitobaExpressEntryPathway from './components/Immigrate/PNP/Manitoba/Skilled Workers Overseas (SWO)/Manitoba Express Entry Pathway/ManitobaExpressEntryPathway';
import ManitobaHumanCapitalPathway from './components/Immigrate/PNP/Manitoba/Skilled Workers Overseas (SWO)/Manitoba Human Capital Pathway/ManitobaHumanCapitalPathway';
import ManitobaCareerEmploymentPathway from './components/Immigrate/PNP/Manitoba/Manitoba International Education Stream (IES)/Manitoba Career Employment Pathway/ManitobaCareerEmploymentPathway';
import ManitobaGraduateInternshipPathway from './components/Immigrate/PNP/Manitoba/Manitoba International Education Stream (IES)/Manitoba Graduate Internship Pathway/ManitobaGraduateInternshipPathway';
import ManitobaInternationalStudentEntreprenuerPilot from './components/Immigrate/PNP/Manitoba/Manitoba International Education Stream (IES)/Manitoba International Student Entreprenuer Pilot/ManitobaInternationalStudentEntreprenuerPilot';
import ManitobaEntrepreneurPathway from './components/Immigrate/PNP/Manitoba/Manitoba Business Investor Stream (BIS)/Manitoba Entrepreneur Pathway/ManitobaEntrepreneurPathway';
import ManitobaFarmInvestorPathway from './components/Immigrate/PNP/Manitoba/Manitoba Business Investor Stream (BIS)/Manitoba Farm Investor Pathway/ManitobaFarmInvestorPathway';
import NewBrunswickExpressEntryLabourMarketStream from './components/Immigrate/PNP/New Brunswick/New Brunswick Express Entry Labour Market Stream/NewBrunswickExpressEntryLabourMarketStream';
import NewBrunswickCriticalWorkerPilot from './components/Immigrate/PNP/New Brunswick/New Brunswick Critical Worker Pilot/NewBrunswickCriticalWorkerPilot';
import NewBrunswickSkilledWorkersWithEmployerSupport from './components/Immigrate/PNP/New Brunswick/New Brunswick Skilled Workers with Employer Support/NewBrunswickSkilledWorkersWithEmployerSupport';
import NewBrunswickStrategicInitiative from './components/Immigrate/PNP/New Brunswick/New Brunswick Strategic Initiative/NewBrunswickStrategicInitiative';
import NewBrunswickBusinessImmigrationStream from './components/Immigrate/PNP/New Brunswick/New Brunswick Business Immigration Stream/NewBrunswickBusinessImmigrationStream';
import NewBrunswickAtlanticImmigrationProgram from './components/Immigrate/PNP/New Brunswick/New Brunswick Atlantic Immigration Program/NewBrunswickAtlanticImmigrationProgram';
import NewBrunswickPrivateCareerCollegeGraduatePilotProgram from './components/Immigrate/PNP/New Brunswick/New Brunswick Private Career College Graduate Pilot Program/NewBrunswickPrivateCareerCollegeGraduatePilotProgram';
import NewfoundlandAndLabradorExpressEntrySkilledWorker from './components/Immigrate/PNP/Newfoundland and Labrador/Newfoundland and Labrador Express Entry Skilled Worker/NewfoundlandAndLabradorExpressEntrySkilledWorker';
import NewfoundlandAndLabradorSkilledWorkerCategory from './components/Immigrate/PNP/Newfoundland and Labrador/Newfoundland and Labrador Skilled Worker Category/NewfoundlandAndLabradorSkilledWorkerCategory';
import NewfoundlandAndLabradorInternationalGraduateCategory from './components/Immigrate/PNP/Newfoundland and Labrador/Newfoundland and Labrador International Graduate Category/NewfoundlandAndLabradorInternationalGraduateCategory';
import NewfoundlandAndLabradorInternationalEntrepreneurCategory from './components/Immigrate/PNP/Newfoundland and Labrador/Newfoundland and Labrador International Entrepreneur Category/NewfoundlandAndLabradorInternationalEntrepreneurCategory';
import NewfoundlandAndLabradorInternationalGraduateEntrepreneurCategory from './components/Immigrate/PNP/Newfoundland and Labrador/Newfoundland and Labrador International Graduate Entrepreneur Category/NewfoundlandAndLabradorInternationalGraduateEntrepreneurCategory';
import NorthwestTerritoriesFrenchSpeaking from './components/Immigrate/PNP/Northwest Territories/Northwest Territories French- Speaking/northwest-territories-french-speaking';
import NorthwestTerritoriesBusinessDriven from './components/Immigrate/PNP/Northwest Territories/Northwest Territories Business Driven/NorthwestTerritoriesBusinessDriven';
import NorthwestTerritoriesSkilledWorkers from './components/Immigrate/PNP/Northwest Territories/Northwest Territories Employer Driven/Northwest Territories Skilled Workers/NorthwestTerritoriesSkilledWorkers';
import NorthwestTerritoriesEntryLevel from './components/Immigrate/PNP/Northwest Territories/Northwest Territories Employer Driven/Northwest Territories Entry Level/NorthwestTerritoriesEntryLevel';
import NorthwestTerritoriesExpressEntry from './components/Immigrate/PNP/Northwest Territories/Northwest Territories Express Entry/NorthwestTerritoriesExpressEntry';
import NorthwestTerritoriesEmployerDriven from './components/Immigrate/PNP/Northwest Territories/Northwest Territories Employer Driven/NorthwestTerritoriesEmployerDriven';
import NovaScotiaExperienceExpressEntry from './components/Immigrate/PNP/Nova Scotia/Nova Scotia Experience Express Entry/NovaScotiaExperienceExpressEntry';
import NovaScotiaEntrepreneurCategory from './components/Immigrate/PNP/Nova Scotia/Nova Scotia Entrepreneur Category/NovaScotiaEntrepreneurCategory';
import NovaScotiaInternationalGraduateEntrepreneurCategory from './components/Immigrate/PNP/Nova Scotia/Nova Scotia International Graduate Entrepreneur Category/NovaScotiaInternationalGraduateEntrepreneurCategory';
import NovaScotiaInternationalGraduatesinDemand from './components/Immigrate/PNP/Nova Scotia/Nova Scotia International Graduates in Demand/NovaScotiaInternationalGraduatesinDemand';
import NovaScotiaSkilledWorkerCategory from './components/Immigrate/PNP/Nova Scotia/Nova Scotia Skilled Worker Category/NovaScotiaSkilledWorkerCategory';
import NovaScotiaOccupationsInDemand from './components/Immigrate/PNP/Nova Scotia/Nova Scotia Occupations In Demand/NovaScotiaOccupationsInDemand';
import NovaScotiaLabourMarketPriorities from './components/Immigrate/PNP/Nova Scotia/Nova Scotia Labour Market Priorities/NovaScotiaLabourMarketPriorities';
import NovaScotiaLabourMarketPrioritiesForPhysicians from './components/Immigrate/PNP/Nova Scotia/Nova Scotia Labour Market Priorities for Physicians/NovaScotiaLabourMarketPrioritiesForPhysicians';
import NovaScotiaPhysicianStream from './components/Immigrate/PNP/Nova Scotia/Nova Scotia Physician Stream/NovaScotiaPhysicianStream';
import NovaScotiaCriticalConstructionWorkerPilot from './components/Immigrate/PNP/Nova Scotia/Nova Scotia Critical Construction Worker Pilot/NovaScotiaCriticalConstructionWorkerPilot';
import OntarioEmployerJobOfferStream from './components/Immigrate/PNP/Ontario/Ontario Employer Job Offer Stream/OntarioEmployerJobOfferStream';
import OntarioPostGraduateStream from './components/Immigrate/PNP/Ontario/Ontario Post Graduate Stream/OntarioPostGraduateStream';
import OntarioExpressEntry from './components/Immigrate/PNP/Ontario/Ontario Express Entry/OntarioExpressEntry';
import OntarioForeignWorker from './components/Immigrate/PNP/Ontario/Ontario Employer Job Offer Stream/Ontario Foreign Worker/OntarioForeignWorker';
import OntarioInDemandStream from './components/Immigrate/PNP/Ontario/Ontario Employer Job Offer Stream/Ontario In-Demand Stream/OntarioInDemandStream';
import OntarioInternationalStudent from './components/Immigrate/PNP/Ontario/Ontario Employer Job Offer Stream/Ontario International Student/OntarioInternationalStudent';
import OntarioMasterGraduateStream from './components/Immigrate/PNP/Ontario/Ontario Post Graduate Stream/Ontario Masters Graduate Stream/OntarioMastersGraduateStream';
import OntarioPhdGraduateStream from './components/Immigrate/PNP/Ontario/Ontario Post Graduate Stream/Ontario PhD Graduate Stream/OntarioPhDGraduateStream';
import OntarioHumanCapitalPriorityStream from './components/Immigrate/PNP/Ontario/Ontario Express Entry/Ontario Human Capital Priority Stream/OntarioHumanCapitalPriorityStream';
import OntarioFrenchSpeakingSkilledWorkersStream from './components/Immigrate/PNP/Ontario/Ontario Express Entry/Ontario French-speaking Skilled Workers Stream/OntarioFrench-speakingSkilledWorkersStream';
import PEIExpressEntry from './components/Immigrate/PNP/Prince Edward Island/PEI Express Entry/PEIExpressEntry';
import PEILaborImpact from './components/Immigrate/PNP/Prince Edward Island/PEI Labor Impact/PEILaborImpact';
import PEIBusinessImpact from './components/Immigrate/PNP/Prince Edward Island/PEI Business Impact/PEIBusinessImpact';
import PEISkilledWorker from './components/Immigrate/PNP/Prince Edward Island/PEI Labor Impact/PEI Skilled Workers in PEI/PEISkilledWorkersinPEI';
import PEISkilledWorkerOutsideCanada from './components/Immigrate/PNP/Prince Edward Island/PEI Labor Impact/PEI Skilled Workers Outside Canada/PEISkilledWorkersOutsideCanada';
import PEIInternationalGraduate from './components/Immigrate/PNP/Prince Edward Island/PEI Labor Impact/PEI International Graduate/PEIInternationalGraduate';
import PEICriticalWorker from './components/Immigrate/PNP/Prince Edward Island/PEI Labor Impact/PEI Critical Worker/PEICriticalWorker';
import OntarioSkilledTradeStream from './components/Immigrate/PNP/Ontario/Ontario Express Entry/Ontario Skilled Trade Stream/OntarioSkilledTradeStream';
import YukonSkilledWorker from './components/Immigrate/PNP/Yukon/Yukon Skilled Worker/YukonSkilledWorker';
import YukonExpressEntry from './components/Immigrate/PNP/Yukon/Yukon Express Entry/YukonExpressEntry';
import YukonCriticalImpactWorker from './components/Immigrate/PNP/Yukon/Yukon Critical Impact Worker/YukonCriticalImpactWorker';
import YukonBusinessNominee from './components/Immigrate/PNP/Yukon/Yukon Business Nominee/YukonBusinessNominee';
import YukonCommunityPilot from './components/Immigrate/PNP/Yukon/Yukon Community Pilot/YukonCommunityPilot';
import SaskatchewanEntrepreneurAndFarm from './components/Immigrate/PNP/Saskatchewan/Saskatchewan Entrepreneur and Farm/SaskatchewanEntrepreneurAndFarm';
import SaskatchewanExperience from './components/Immigrate/PNP/Saskatchewan/Saskatchewan Experience/SaskatchewanExperience';
import SaskatchewanInternationalSkilledWorkerTechTalentPathway from './components/Immigrate/PNP/Saskatchewan/Saskatchewan International Skilled Worker/Saskatchewan International Skilled Worker Tech Talent Pathway/SaskatchewanInternationalSkilledWorkerTechTalentPathway';
import SaskatchewanInternationalSkilledWorker from './components/Immigrate/PNP/Saskatchewan/Saskatchewan International Skilled Worker/SaskatchewanInternationalSkilledWorker';
import SaskatchewanExpressEntry from './components/Immigrate/PNP/Saskatchewan/Saskatchewan International Skilled Worker/Saskatchewan Express Entry/SaskatchewanExpressEntry';
import SaskatchewanEmploymentOffer from './components/Immigrate/PNP/Saskatchewan/Saskatchewan International Skilled Worker/Saskatchewan Employment Offer/SaskatchewanEmploymentOffer';
import SaskatchewanInDemandOccupation from './components/Immigrate/PNP/Saskatchewan/Saskatchewan International Skilled Worker/Saskatchewan In-Demand Occupation/SaskatchewanInDemandOccupation';
import SaskatchewanHardToFillSkillsPilot from './components/Immigrate/PNP/Saskatchewan/Saskatchewan International Skilled Worker/Saskatchewan Hard-to-fill Skills Pilot/SaskatchewanHardToFillSkillsPilot';
import SaskatchewanExistingWorkPermit from './components/Immigrate/PNP/Saskatchewan/Saskatchewan Experience/Saskatchewan Existing Work Permit/SaskatchewanExistingWorkPermit';
import SaskatchewanHealthProfessionals from './components/Immigrate/PNP/Saskatchewan/Saskatchewan Experience/Saskatchewan Health Professionals/SaskatchewanHealthProfessionals';
import SaskatchewanHospitalitySectorProject from './components/Immigrate/PNP/Saskatchewan/Saskatchewan Experience/Saskatchewan Hospitality Sector Project/SaskatchewanHospitalitySectorProject';
import SaskatchewanLongHaulTruckDriverProject from './components/Immigrate/PNP/Saskatchewan/Saskatchewan Experience/Saskatchewan Long-Haul Truck Driver Project/SaskatchewanLong-HaulTruckDriverProject';
import SaskatchewanStudents from './components/Immigrate/PNP/Saskatchewan/Saskatchewan Experience/Saskatchewan Students/SaskatchewanStudents';
import SaskatchewanEntrepreneur from './components/Immigrate/PNP/Saskatchewan/Saskatchewan Entrepreneur and Farm/Saskatchewan Entrepreneur/SaskatchewanEntrepreneur';
import SaskatchewanInternationalGraduateEntrepreneurCategory from './components/Immigrate/PNP/Saskatchewan/Saskatchewan Entrepreneur and Farm/Saskatchewan International Graduate Entrepreneur category/SaskatchewanInternationalGraduateEntrepreneurCategory';
import SaskatchewanFarmOwnersAndOperators from './components/Immigrate/PNP/Saskatchewan/Saskatchewan Entrepreneur and Farm/Saskatchewan Farm Owners and Operators/SaskatchewanFarmOwnersAndOperators';
import WorkInCanada from './components/Work/Work In Canada/WorkInCanada';
import WorkWithoutAPermit from './components/Work/Work Without a Permit/WorkWithoutAPermit';
import BusinessVisas from './components/Work/Work Without a Permit/Business Visas/BusinessVisas';
import TemporaryForeignWorkerProgram from './components/Work/Temporary Foreign Worker Program/TemporaryForeignWorkerProgram';
import LabourMaketImpactAssessment from './components/Work/Temporary Foreign Worker Program/Labour Market Impact Assesment/LabourMarketImpactAssesment';
import CanadaGlobalTalentStream from './components/Work/Temporary Foreign Worker Program/Canada Global Talent Stream/CanadaGlobalTalentStream';
import InternationalMobilityProgram from './components/Work/International Mobility Program (IMP)/InternationalMobilityProgram';
import CETAWorkPermits from './components/Work/International Mobility Program (IMP)/CETA Work Permits/CETAWorkPermits';
import CUSMA from './components/Work/International Mobility Program (IMP)/CUSMA/CUSMA';
import IntraCompanyTransfer from './components/Work/International Mobility Program (IMP)/Intra Company Transfer/IntraCompanyTransfer';
import OpenWorkPermits from './components/Work/Open Work Permits/OpenWorkPermits';
import PGWP from './components/Work/Open Work Permits/Post Graduate Work Permit (PGWP)/PostGraduateWorkPermit';
import IEC from './components/Work/Open Work Permits/International Experience Class (IEC)/InternationalExperienceClass';
import SOWP from './components/Work/Open Work Permits/Spousal Open Work Permit (SOWP)/SpousalOpenWorkPermit';
import BOWP from './components/Work/Open Work Permits/Bridging Open Work Permit (BOWP)/BridgingOpenWorkPermit';
import StudyPathwaysToPermanentResidence from './components/Study/Study Pathways to Permanent Residence/StudyPathwaysToPermanentResidence';
import LevelsOfStudy from './components/Study/Levels of Study/LevelsOfStudy';
import StudyPermitInCanada from './components/Study/Study Permit In Canada/StudyPermitInCanada';
import StudentDirectStream from './components/Study/Study Permit In Canada/Student Direct Stream (SDS)/StudentDirectStream';
import CertificatDacceptationDuQuebec from './components/Study/Study Permit In Canada/Certificat dacceptation du Québec (CAQ)/CertificatdacceptationDuQuebec';
import RefusalsAndAppealsOfStudyPermit from './components/Study/Refusals and Appeals of Study Permits/RefusalsAndAppealsOfStudyPermits';
import ExtendAStudyPermit from './components/Study/Extend a Study Permit/ExtendAStudyPermit';
import PostGraduateWorkPermit from './components/Study/Post Graduate Work Permit/PostGraduateWorkPermit';
import DesignatedLearningInstitution from './components/Study/Designated Learning Institution/DesignatedLearningInstitution';
import StudyInCanada from './components/Study/Study in Canada/StudyInCanada';
import TRVVisitorVisa from './components/Visit/TRV-Visitor Visa/TRV-VisitorVisa';
import VisaExtension from './components/Visit/Visa Extension/VisaExtension';
import SuperVisa from './components/Visit/Super visa/SuperVisa';
import EmployersOutsideCanada from './components/Employers/Employers Outside Canada/EmployersOutsideCanada';
import CanadianEmployers from './components/Employers/Canadian Employers/CanadianEmployers';
import HiringForeignWorkers from './components/Employers/Canadian Employers/Hiring Foreign Workers/HiringForeignWorkers';
import IntraCompanyTransferOfEmployees from './components/Employers/Employers Outside Canada/Intra Company Transfer of Employees/IntraCompanyTransferOfEmployees';
import BusinessVisitVisa from './components/Employers/Employers Outside Canada/Business Visit visa (LMIA Exempt)/BusinessVisitVisa';
import ExpandBusinessToCanada from './components/Employers/Employers Outside Canada/Expand Business to Canada/ExpandBusinessToCanada';
import Sponsorship from './components/Sponsorship/Sponsorship/Sponsorship';
import CanadianSpousalSponsorship from './components/Sponsorship/Canadian spousal sponsorship/CanadianSpousalSponsorship';
import ChildOrOtherDependantSponsorship from './components/Sponsorship/Child or Other Dependant Sponsorship/ChildOrOtherDependantSponsorship';
import ParentsAndGrandparentsProgram from './components/Sponsorship/Parents and Grandparents Program (PGP)/ParentsAndGrandparentsProgram';
import SuperVisaSponsorship from './components/Sponsorship/Super Visa/SuperVisa';
import MinimumNecessaryIncome from './components/Sponsorship/Minimum Necessary Income (MNI)/MinimumNecessaryIncome';
import Invest from './components/Business/Invest/Invest';
import StartUp from './components/Business/Invest/Start-up/Start-up';
import EntrepreneurSelfEmployed from './components/Business/Invest/Entrepreneur – self employed/entrepreneur-self-employed';
import StartABusinessInCanada from './components/Business/Invest/Start a business in Canada/start-a-business-in-canada';
import BuyAnExistingBusinessInCanada from './components/Business/Invest/Buy an existing Business in Canada/buy-an-existing-business-in-canada';
import ExpandYourBusinessToCanada from './components/Business/Invest/Expand Your Business to Canada/expand-your-business-to-canada';
import PNPEntrepreneurStreams from './components/Business/PNP Entrepreneur Streams/PNPEntrepreneurStreams';
import AlbertaBusiness from './components/Business/PNP Entrepreneur Streams/Alberta/Alberta';
import BritishColumbiaBusiness from './components/Business/PNP Entrepreneur Streams/British Columbia/BritishColumbia';
import ManitobaBusiness from './components/Business/PNP Entrepreneur Streams/Manitoba/Manitoba';
import NewBrunswickBusiness from './components/Business/PNP Entrepreneur Streams/New Brunswick/NewBrunswick';
import NewfoundlandAndLabradorBusiness from './components/Business/PNP Entrepreneur Streams/Newfoundland and Labrador/NewfoundlandAndLabrador';
import NorthwestTerritoriesBusiness from './components/Business/PNP Entrepreneur Streams/Northwest Territories/NorthwestTerritories';
import NovaScotiaBusiness from './components/Business/PNP Entrepreneur Streams/Nova Scotia/NovaScotia';
import OntarioBusiness from './components/Business/PNP Entrepreneur Streams/Ontario/Ontario';
import PrinceEdwardIslandBusiness from './components/Business/PNP Entrepreneur Streams/Prince Edward Island/PrinceEdwardIsland';
import SaskatchewanBusiness from './components/Business/PNP Entrepreneur Streams/Saskatchewan/Saskatchewan';
import YukonBusiness from './components/Business/PNP Entrepreneur Streams/Yukon/Yukon';
import WorkPermitToPRPathways from './components/Business/Work Permit to PR Pathways/WorkPermittoPRPathways';
import C11WorkVisa from './components/Business/Work Permit to PR Pathways/C11 work visa/C11WorkVisa';
import C10WorkVisa from './components/Business/Work Permit to PR Pathways/C10 work visa/C10WorkVisa';
import EntrepreneurLMIAOwnerOperated from './components/Business/Work Permit to PR Pathways/Entrepreneur LMIA-Owner Operated/EntrepreneurLMIA-OwnerOperated';
import IntraCompanyTransferBusiness from './components/Business/Work Permit to PR Pathways/Intra-Company Transfer (ICT)/IntraCompanyTransfer';
import Top10UniversitiesInCanada from './components/BlogsComponent/Top10UniversitiesInCanada';
import TipsAndTricks from './components/BlogsComponent/tips-and-tricks';
import TopInDemandJobs from './components/BlogsComponent/top-in-demand-jobs';
import EverythingYouNeed from './components/BlogsComponent/everything-you-need';
import WhatIsCategory from './components/BlogsComponent/what-is-category-based-selection';
import FrenchProficiency from './components/News/FrenchProficiencyLeadsCategory-BasedSelections.js';
import ChangesInFederal from './components/News/Changes in Federal Business Programs to tackle Backlog issue.js';
import AverageLanguageScores from './components/News/Averaged Language Scores now Accepted under Express Entry for Disabled Candidates.js';
import RightOfPermanent from './components/News/Right of Permanent Resident fee increased.js';
import WorkingHoursIncreased from './components/News/Working hours Increased for Students in Canada.js';
import AquarianServices from './components/Pages/AquarianServices/AquarianServices.js';
import PageNotFound from './components/Pages/Error/Error.jsx';
import MajorProvinces from './components/News/Major-provinces-issue-PNP-invitations.js';
import ResourcesAndTools from './components/ResourcesAndTools/ResourcesAndTools.jsx';
import VisitorVisaForTourism from './components/Visit/TRV-Visitor Visa/Visitor Visa for Tourism or to meet your relatives/Visitor-Visa-for-Tourism-or-to-meet-your-relatives.js';
import VisitorVisaForWorkersAndStudents from './components/Visit/TRV-Visitor Visa/Visitor Visas for Workers and Students/visitor-visas-for-workers-and-students.js';
import VisitCanadaOnBusiness from './components/Visit/TRV-Visitor Visa/visit-canada-on-business/visit-canada-on-business.js';
import TransitThroughCanada from './components/Visit/TRV-Visitor Visa/Transit through Canada/transit-through-canada.js';
import ElectronicTravelAuthorization from './components/Visit/TRV-Visitor Visa/Electronic Travel Authorization/electronic-travel-authorization.js';
import SubmitPopUp from './components/AssessmentForm/Ui/SubmitPopUp';
function ConditionalSitemapImmigrate() {
  const { isMobile } = useMobile();
  const location = useLocation();

  // List of routes where you want to show the sitemap Immigrate
  const routesWithSitemapImmigrate = [
    '/immigrate/permanent-residency',
    '/immigrate/express-entry',
    '/immigrate/express-entry/federal-skilled-worker-class',
    '/immigrate/express-entry/federal-skilled-trades-class',
    '/immigrate/express-entry/canadian-experience-class',
    '/immigrate/provincial-nominee-program',
    '/immigrate/provincial-nominee-program/alberta-immigrant-nominee-program',
    '/immigrate/provincial-nominee-program/alberta-immigrant-nominee-program/alberta-opportunity-stream',
    '/immigrate/provincial-nominee-program/alberta-immigrant-nominee-program/alberta-express-entry',
    '/immigrate/provincial-nominee-program/alberta-immigrant-nominee-program/alberta-accelerated-tech-pathway',
    '/immigrate/provincial-nominee-program/alberta-immigrant-nominee-program/alberta-farm-stream',
    '/immigrate/provincial-nominee-program/alberta-immigrant-nominee-program/alberta-graduate-entrepreneur-stream',
    '/immigrate/provincial-nominee-program/alberta-immigrant-nominee-program/alberta-foreign-graduate-entrepreneur-stream',
    '/immigrate/provincial-nominee-program/alberta-immigrant-nominee-program/alberta-tourism-and-hospitatlity-stream',
    '/immigrate/provincial-nominee-program/alberta-immigrant-nominee-program/alberta-rural-renewal-stream',
    '/immigrate/provincial-nominee-program/alberta-immigrant-nominee-program/alberta-rural-entrepreneur',
    '/immigrate/provincial-nominee-program/british-columbia',
    '/immigrate/provincial-nominee-program/british-columbia/british-columbia-skilled-worker',
    '/immigrate/provincial-nominee-program/british-columbia/british-columbia-skilled-worker/british-columbia-healthcare-professional',
    '/immigrate/provincial-nominee-program/british-columbia/british-columbia-skilled-worker/british-columbia-international-graduate',
    '/immigrate/provincial-nominee-program/british-columbia/british-columbia-skilled-worker/british-columbia-international-post-graduate',
    '/immigrate/provincial-nominee-program/british-columbia/british-columbia-skilled-worker/british-columbia-entry-level-and-semi-skilled-worker',
    '/immigrate/provincial-nominee-program/british-columbia/british-columbia-entrepreneur-immigration',
    '/immigrate/provincial-nominee-program/british-columbia/british-columbia-entrepreneur-immigration/british-columbia-entrepreneur-stream',
    '/immigrate/provincial-nominee-program/british-columbia/british-columbia-entrepreneur-immigration/british-columbia-entrepreneur-regional-pilot',
    '/immigrate/provincial-nominee-program/british-columbia/british-columbia-entrepreneur-immigration/british-columbia-strategic-projects',
    '/immigrate/provincial-nominee-program/british-columbia/british-columbia-pilot-program',
    '/immigrate/provincial-nominee-program/british-columbia/british-columbia-pilot-program/british-columbia-pnp-tech-pilot',
    '/immigrate/provincial-nominee-program/manitoba',
    '/immigrate/provincial-nominee-program/manitoba/skilled-workers-in-manitoba',
    '/immigrate/provincial-nominee-program/manitoba/skilled-workers-in-manitoba/skilled-workers-in-manitoba-stream',
    '/immigrate/provincial-nominee-program/manitoba/skilled-workers-in-manitoba/manitoba-experience-pathway',
    '/immigrate/provincial-nominee-program/manitoba/skilled-workers-in-manitoba/manitoba-employer-direct-recruitment-pathway',
    '/immigrate/provincial-nominee-program/manitoba/skilled-workers-overseas',
    '/immigrate/provincial-nominee-program/manitoba/skilled-workers-overseas/manitoba-skilled-workers-overseas-stream',
    '/immigrate/provincial-nominee-program/manitoba/skilled-workers-overseas/manitoba-express-entry-pathway',
    '/immigrate/provincial-nominee-program/manitoba/skilled-workers-overseas/manitoba-human-capital-pathway',
    '/immigrate/provincial-nominee-program/manitoba/manitoba-international-education-stream',
    '/immigrate/provincial-nominee-program/manitoba/manitoba-international-education-stream/manitoba-career-employment-pathway',
    '/immigrate/provincial-nominee-program/manitoba/manitoba-international-education-stream/manitoba-graduate-internship-pathway',
    '/immigrate/provincial-nominee-program/manitoba/manitoba-international-education-stream/manitoba-international-student-entreprenuer-pilot',
    '/immigrate/provincial-nominee-program/manitoba/manitoba-business-investor-stream',
    '/immigrate/provincial-nominee-program/manitoba/manitoba-business-investor-stream/manitoba-entrepreneur-pathway',
    '/immigrate/provincial-nominee-program/manitoba/manitoba-business-investor-stream/manitoba-farm-investor-pathway',
    '/immigrate/provincial-nominee-program/new-brunswick',
    '/immigrate/provincial-nominee-program/new-brunswick/new-brunswick-express-entry-labour-market-stream',
    '/immigrate/provincial-nominee-program/new-brunswick/new-brunswick-skilled-workers-with-employer-support',
    '/immigrate/provincial-nominee-program/new-brunswick/new-brunswick-strategic-initiative',
    '/immigrate/provincial-nominee-program/new-brunswick/new-brunswick-business-immigration-stream',
    '/immigrate/provincial-nominee-program/new-brunswick/new-brunswick-atlantic-immigration-program',
    '/immigrate/provincial-nominee-program/new-brunswick/new-brunswick-private-career-college-graduate-pilot-program',
    '/immigrate/provincial-nominee-program/new-brunswick/new-brunswick-critical-worker-pilot',
    '/immigrate/provincial-nominee-program/newfoundland-and-labrador',
    '/immigrate/provincial-nominee-program/newfoundland-and-labrador/newfoundland-and-labrador-express-entry-skilled-worker',
    '/immigrate/provincial-nominee-program/newfoundland-and-labrador/newfoundland-and-labrador-skilled-worker-category',
    '/immigrate/provincial-nominee-program/newfoundland-and-labrador/newfoundland-and-labrador-international-graduate-category',
    '/immigrate/provincial-nominee-program/newfoundland-and-labrador/newfoundland-and-labrador-international-entrepreneur-category',
    '/immigrate/provincial-nominee-program/newfoundland-and-labrador/newfoundland-and-labrador-international-graduate-entrepreneur-category',
    '/immigrate/provincial-nominee-program/northwest-territories',
    '/immigrate/provincial-nominee-program/northwest-territories/northwest-territories-express-entry',
    '/immigrate/provincial-nominee-program/northwest-territories/northwest-territories-employer-driven',
    '/immigrate/provincial-nominee-program/northwest-territories/northwest-territories-employer-driven/northwest-territories-entry-level/semi-skilled-occupation',
    '/immigrate/provincial-nominee-program/northwest-territories/northwest-territories-employer-driven/northwest-territories-skilled-workers',
    '/immigrate/provincial-nominee-program/northwest-territories/northwest-territories-business-driven',
    '/immigrate/provincial-nominee-program/northwest-territories/northwest-territories-french-speaking',
    '/immigrate/provincial-nominee-program/nova-scotia',
    '/immigrate/provincial-nominee-program/nova-scotia/nova-scotia-experience-express-entry',
    '/immigrate/provincial-nominee-program/nova-scotia/nova-scotia-entrepreneur-category',
    '/immigrate/provincial-nominee-program/nova-scotia/nova-scotia-international-graduate-entrepreneur-category',
    '/immigrate/provincial-nominee-program/nova-scotia/nova-scotia-international-graduates-in-demand',
    '/immigrate/provincial-nominee-program/nova-scotia/nova-scotia-skilled-worker-category',
    '/immigrate/provincial-nominee-program/nova-scotia/nova-scotia-occupations-in-demand',
    '/immigrate/provincial-nominee-program/nova-scotia/nova-scotia-labour-market-priorities',
    '/immigrate/provincial-nominee-program/nova-scotia/nova-scotia-labour-market-priorities-for-physicians',
    '/immigrate/provincial-nominee-program/nova-scotia/nova-scotia-physician-stream',
    '/immigrate/provincial-nominee-program/nova-scotia/nova-scotia-critical-construction-worker-pilot',
    '/immigrate/provincial-nominee-program/ontario',
    '/immigrate/provincial-nominee-program/ontario/ontario-employer-job-offer-stream',
    '/immigrate/provincial-nominee-program/ontario/ontario-employer-job-offer-stream/ontario-foreign-worker',
    '/immigrate/provincial-nominee-program/ontario/ontario-employer-job-offer-stream/ontario-international-student',
    '/immigrate/provincial-nominee-program/ontario/ontario-employer-job-offer-stream/ontario-in-demand-stream',
    '/immigrate/provincial-nominee-program/ontario/ontario-post-graduate-stream',
    '/immigrate/provincial-nominee-program/ontario/ontario-post-graduate-stream/ontario-master-graduate-stream',
    '/immigrate/provincial-nominee-program/ontario/ontario-post-graduate-stream/ontario-phd-graduate-stream',
    '/immigrate/provincial-nominee-program/ontario/ontario-express-entry',
    '/immigrate/provincial-nominee-program/ontario/ontario-express-entry/ontario-human-capital-priority-stream',
    '/immigrate/provincial-nominee-program/ontario/ontario-express-entry/ontario-skilled-trade-stream',
    '/immigrate/provincial-nominee-program/ontario/ontario-express-entry/ontario-french-speaking-skilled-workers-stream',
    '/immigrate/provincial-nominee-program/prince-edward-island',
    '/immigrate/provincial-nominee-program/prince-edward-island/pei-express-entry',
    '/immigrate/provincial-nominee-program/prince-edward-island/pei-labor-impact',
    '/immigrate/provincial-nominee-program/prince-edward-island/pei-labor-impact/pei-skilled-workers-in-pei',
    '/immigrate/provincial-nominee-program/prince-edward-island/pei-labor-impact/pei-skilled-worker-outside-canada',
    '/immigrate/provincial-nominee-program/prince-edward-island/pei-labor-impact/pei-international-graduate',
    '/immigrate/provincial-nominee-program/prince-edward-island/pei-labor-impact/pei-critical-worker',
    '/immigrate/provincial-nominee-program/prince-edward-island/pei-business-impact',
    '/immigrate/provincial-nominee-program/saskatchewan',
    '/immigrate/provincial-nominee-program/saskatchewan/saskatchewan-international-skilled-worker',
    '/immigrate/provincial-nominee-program/saskatchewan/saskatchewan-international-skilled-worker/saskatchewan-express-entry',
    '/immigrate/provincial-nominee-program/saskatchewan/saskatchewan-international-skilled-worker/saskatchewan-employment-offer',
    '/immigrate/provincial-nominee-program/saskatchewan/saskatchewan-international-skilled-worker/saskatchewan-in-demand-occupation',
    '/immigrate/provincial-nominee-program/saskatchewan/saskatchewan-international-skilled-worker/saskatchewan-international-skilled-worker-tech-talent-pathway',
    '/immigrate/provincial-nominee-program/saskatchewan/saskatchewan-international-skilled-worker/saskatchewan-hard-to-fill-skills-pilot',
    '/immigrate/provincial-nominee-program/saskatchewan/saskatchewan-experience',
    '/immigrate/provincial-nominee-program/saskatchewan/saskatchewan-experience/saskatchewan-existing-work-permit',
    '/immigrate/provincial-nominee-program/saskatchewan/saskatchewan-experience/saskatchewan-health-professionals',
    '/immigrate/provincial-nominee-program/saskatchewan/saskatchewan-experience/saskatchewan-hospitality-sector-project',
    '/immigrate/provincial-nominee-program/saskatchewan/saskatchewan-experience/saskatchewan-long-haul-truck-driver-project',
    '/immigrate/provincial-nominee-program/saskatchewan/saskatchewan-experience/saskatchewan-students',
    '/immigrate/provincial-nominee-program/saskatchewan/saskatchewan-entrepreneur-and-farm',
    '/immigrate/provincial-nominee-program/saskatchewan/saskatchewan-entrepreneur-and-farm/saskatchewan-entrepreneur',
    '/immigrate/provincial-nominee-program/saskatchewan/saskatchewan-entrepreneur-and-farm/saskatchewan-farm-owners-and-operators',
    '/immigrate/provincial-nominee-program/saskatchewan/saskatchewan-entrepreneur-and-farm/saskatchewan-international-graduate-entrepreneur-category',
    '/immigrate/provincial-nominee-program/yukon',
    '/immigrate/provincial-nominee-program/yukon/yukon-skilled-worker',
    '/immigrate/provincial-nominee-program/yukon/yukon-express-entry',
    '/immigrate/provincial-nominee-program/yukon/yukon-critical-impact-worker',
    '/immigrate/provincial-nominee-program/yukon/yukon-business-nominee',
    '/immigrate/provincial-nominee-program/yukon/yukon-community-pilot',
    '/immigrate/after-permanent-residency',
    '/immigrate/after-permanent-residency/permanent-resident-cards',
    '/immigrate/after-permanent-residency/permanent-resident-card-renewal',
    '/immigrate/after-permanent-residency/permanent-resident-travel-document',
    '/immigrate/after-permanent-residency/residency-obligation',
    '/immigrate/after-permanent-residency/canadian-citizenship',
    '/immigrate/pr-faqs',
    '/immigrate/rural-and-northern-immigration-pilot',
    '/immigrate/caregiver-programs',
    '/immigrate/caregiver-programs/home-child-care-provider-pilot',
    '/immigrate/caregiver-programs/home-support-worker-pilot',
    '/immigrate/aip-atlantic-immigration-program',
    '/immigrate/agri-food-pilot',
  ];

  // Check if the current route is in the list of routes with sitemap Immigrate
  const isSitemapImmigrate = routesWithSitemapImmigrate.includes(
    location.pathname
  );

  return isSitemapImmigrate && !isMobile && <SitemapImmigrateDesktop />;
}
function ConditionalSitemapWork() {
  const { isMobile } = useMobile();
  const location = useLocation();

  // List of routes where you want to show the sitemap Work
  const routesWithSitemapWork = [
    '/work/work-in-canada',
    '/work/work-without-a-permit',
    '/work/work-without-a-permit/business-visas',
    '/work/temporary-foreign-worker-program',
    '/work/temporary-foreign-worker-program/labour-maket-impact-assessment',
    '/work/temporary-foreign-worker-program/canada-global-talent-stream',
    '/work/international-mobility-program',
    '/work/international-mobility-program/intra-company-transfer',
    '/work/international-mobility-program/cusma',
    '/work/international-mobility-program/ceta-work-permits',
    '/work/open-work-permits',
    '/work/open-work-permits/post-graduate-work-permit',
    '/work/open-work-permits/international-experience-class',
    '/work/open-work-permits/spousal-open-work-permit',
    '/work/open-work-permits/bridging-open-work-permit',
  ];
  // Check if the current route is in the list of routes with sitemap Work
  const isSitemapWork = routesWithSitemapWork.includes(location.pathname);

  return isSitemapWork && !isMobile && <SitemapWorkDesktop />;
}
function ConditionalSitemapStudy() {
  const { isMobile } = useMobile();
  const location = useLocation();

  // List of routes where you want to show the sitemap Study
  const routesWithSitemapStudy = [
    '/study/study-in-canada',
    '/study/study-pathways-to-permanent-residence',
    '/study/levels-of-study',
    '/study/study-permit-in-canada',
    '/study/study-permit-in-canada/student-direct-stream',
    '/study/study-permit-in-canada/certificat-d-acceptation-du-quebec',
    '/study/refusals-and-appeals-of-study-permits',
    '/study/extend-a-study-permit',
    '/study/post-graduate-work-permit',
    '/study/designated-learning-institution',
  ];
  // Check if the current route is in the list of routes with sitemap Study
  const isSitemapStudy = routesWithSitemapStudy.includes(location.pathname);

  return isSitemapStudy && !isMobile && <SitemapStudyDesktop />;
}
function ConditionalSitemapVisit() {
  const { isMobile } = useMobile();
  const location = useLocation();

  // List of routes where you want to show the sitemap Visit
  const routesWithSitemapVisit = [
    '/visit/visitor-visa-trv',
    '/visit/visitor-visa-trv/visitor-visa-for-tourism-or-to-meet-your-relatives-or-friends',
    '/visit/visitor-visa-trv/visitor-visas-for-workers-and-students',
    '/visit/visitor-visa-trv/visit-canada-on-business',
    '/visit/visitor-visa-trv/transit-through-canada',
    '/visit/visitor-visa-trv/electronic-travel-authorization',
    '/visit/visa-extension-and-extension',
    '/visit/super-visa',
  ];
  // Check if the current route is in the list of routes with sitemap Visit
  const isSitemapVisit = routesWithSitemapVisit.includes(location.pathname);

  return isSitemapVisit && !isMobile && <SitemapVisitDesktop />;
}

function ConditionalSitemapEmployers() {
  const { isMobile } = useMobile();
  const location = useLocation();

  // List of routes where you want to show the sitemap Employers
  const routesWithSitemapEmployers = [
    '/employers/employers-outside-canada',
    '/employers/employers-outside-canada/intra-company-transfer-of-employers',
    '/employers/employers-outside-canada/business-visit-visa',
    '/employers/employers-outside-canada/expand-business-to-canada',
    '/employers/canadian-employers',
    '/employers/canadian-employers/hiring-foreign-workers',
  ];
  // Check if the current route is in the list of routes with sitemap Employers
  const isSitemapEmployers = routesWithSitemapEmployers.includes(
    location.pathname
  );

  return isSitemapEmployers && !isMobile && <SitemapEmployersDesktop />;
}

function ConditionalSitemapSponsorship() {
  const { isMobile } = useMobile();
  const location = useLocation();

  // List of routes where you want to show the sitemap Sponsorship
  const routesWithSitemapSponsorship = [
    '/sponsorship/sponsorship',
    '/sponsorship/canadian-spousal-sponsorship',
    '/sponsorship/child-or-other-dependant-sponsorship',
    '/sponsorship/parents-and-grandparents-program',
    '/sponsorship/super-visa',
    '/sponsorship/minimum-necessary-income',
  ];
  // Check if the current route is in the list of routes with sitemap Sponsorship
  const isSitemapSponsorship = routesWithSitemapSponsorship.includes(
    location.pathname
  );

  return isSitemapSponsorship && !isMobile && <SitemapSponsorshipDesktop />;
}
function ConditionalSitemapBusiness() {
  const { isMobile } = useMobile();
  const location = useLocation();

  // List of routes where you want to show the sitemap Business
  const routesWithSitemapBusiness = [
    '/business/invest',
    '/business/invest/start-up',
    '/business/invest/entrepreneur-self-employed',
    '/business/invest/start-a-business-in-canada',
    '/business/invest/buy-an-existing-business-in-canada',
    '/business/invest/expand-your-business-to-canada',
    '/business/pnp-entrepreneur-streams',
    '/business/pnp-entrepreneur-streams/alberta',
    '/business/pnp-entrepreneur-streams/british-columbia',
    '/business/pnp-entrepreneur-streams/manitoba',
    '/business/pnp-entrepreneur-streams/new-brunswick',
    '/business/pnp-entrepreneur-streams/newfoundland-and-labrador',
    '/business/pnp-entrepreneur-streams/northwest-territories',
    '/business/pnp-entrepreneur-streams/nova-scotia',
    '/business/pnp-entrepreneur-streams/ontario',
    '/business/pnp-entrepreneur-streams/prince-edward-island',
    '/business/pnp-entrepreneur-streams/saskatchewan',
    '/business/pnp-entrepreneur-streams/yukon',
    '/business/work-permit-to-pr-pathways',
    '/business/work-permit-to-pr-pathways/intra-company-transfer',
    '/business/work-permit-to-pr-pathways/c11-work-visa',
    '/business/work-permit-to-pr-pathways/c10-work-visa',
    '/business/work-permit-to-pr-pathways/entrepreneur-lmia-owner-operated',
  ];
  // Check if the current route is in the list of routes with sitemap Business
  const isSitemapBusiness = routesWithSitemapBusiness.includes(
    location.pathname
  );

  return isSitemapBusiness && !isMobile && <SitemapBusinessDesktop />;
}

const App = () => {
  const { isMobile } = useMobile();
  const [showQuickLinks, setShowQuickLinks] = useState(false);
  const [showPopUp, setShowPopUp ] = useState(false)

  useEffect(() => {
    if(showPopUp) {
      setTimeout(() => {
        setShowPopUp(false)
      }, 10000)
    }
  }, [showPopUp])

  const toggleQuickLinks = () => {
    setShowQuickLinks((prev) => !prev);
  };
  const handleNavigation = (url) => {
    window.location.href = url;
  };

  return (
    <div className='max-w-[140rem] mx-auto'>
      <BrowserRouter>
        <MobileProvider>
          <Sidebar />
          <Header setShowPopUp={setShowPopUp} />
          {showPopUp && <SubmitPopUp setShowPopUp={setShowPopUp} />}
          {isMobile && (
            <div>
              {!showQuickLinks && (
                <div
                  onClick={toggleQuickLinks}
                  className='md:hidden fixed z-10 right-0 bg-black cursor-pointer '
                >
                  <img src={img4} alt={'logo'} className='w-10 p-1' />
                </div>
              )}
              {showQuickLinks && (
                <div className='md:hidden fixed bottom-0 w-full flex items-center z-40'>
                  <div className='bg-[#282928] h-[50vh] w-full flex flex-col items-center rounded-t-[30px] pl-8 py-4'>
                    <div class='w-full flex items-center justify-between'>
                      <span className='text-[14px] text-gray-400'>
                        Quick links
                      </span>
                      <div
                        onClick={toggleQuickLinks}
                        className='relative left-0'
                      >
                        <button
                          id='toggleOpen'
                          className=' rounded-full px-3 py-1 text-gray-400'
                        >
                          <IoMdClose size={27} />
                        </button>
                      </div>
                    </div>
                    <div
                      onClick={() => handleNavigation('/assessment')}
                      className='w-full h-[25%]  text-white text-left flex  items-center justify-start gap-8 h cursor-pointer transition ease-in delay-100 duration-300'
                    >
                      <img
                        src={clip2}
                        alt='logo'
                        className='w-8 h-8 sidebar-img'
                      />
                      <div className='flex flex-col'>
                        {' '}
                        <span className='text-sm'>Free Assessment</span>
                        <span className='text-[12px] text-gray-400'>
                          Expert evaluation and personalized guidance.
                        </span>
                      </div>
                    </div>
                    <div
                      onClick={() => handleNavigation('/resources')}
                      className='w-full h-[25%]  text-white text-left flex  items-center justify-start gap-8  cursor-pointer transition ease-in delay-100 duration-300'
                    >
                      <img
                        src={clip3}
                        alt='logo'
                        className='w-8 h-8 sidebar-img'
                      />
                      <div className='flex flex-col'>
                        {' '}
                        <span className='text-sm'>Resources & Tools</span>
                        <span className='text-[12px] text-gray-400'>
                          Essential guides and innovative aids/tools.
                        </span>
                      </div>
                    </div>

                    <div
                      onClick={() => handleNavigation('/aquarian-services')}
                      className=' w-full h-[25%]  text-white text-left flex  items-center justify-start gap-8  cursor-pointer transition ease-in delay-100 duration-300'
                    >
                      <img
                        src={clip4}
                        alt='logo'
                        className='w-8 h-8 sidebar-img'
                      />
                      <div className='flex flex-col'>
                        {' '}
                        <span className='text-sm'>Aquarian Services</span>
                        <span className='text-[12px] text-gray-400'>
                          Complete support for your immigration.
                        </span>
                      </div>
                    </div>
                    <div
                      onClick={() => handleNavigation('/blogs')}
                      className=' w-full h-[25%]  text-white text-left flex  items-center justify-start gap-8  cursor-pointer transition ease-in delay-100 duration-300'
                    >
                      <img
                        src={clip5}
                        alt='logo'
                        className='w-8 h-8 sidebar-img'
                      />{' '}
                      <div className='flex flex-col'>
                        {' '}
                        <span className='text-sm'>Blog</span>
                        <span className='text-[12px] text-gray-400'>
                          Insights and tips for your immigration journey.
                        </span>
                      </div>
                    </div>
                    <div
                      onClick={() => handleNavigation('/latest-news')}
                      className='w-full h-[25%] text-white text-left flex  items-center justify-start gap-8  cursor-pointer transition ease-in delay-100 duration-300'
                    >
                      <img
                        src={clip1}
                        alt='logo'
                        className='w-8 h-8 sidebar-img'
                      />
                      <div className='flex flex-col'>
                        {' '}
                        <span className='text-sm'>Newsroom</span>
                        <span className='text-[12px] text-gray-400'>
                          Latest updates on immigration news.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
          <ConditionalSitemapImmigrate />
          <ConditionalSitemapWork />
          <ConditionalSitemapStudy />
          <ConditionalSitemapVisit />
          <ConditionalSitemapEmployers />
          <ConditionalSitemapSponsorship />
          <ConditionalSitemapBusiness />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/contact-us' element={<ContactUsPage />} />
            <Route path='/clb-calculator' element={<ClbCalculator />} />
            <Route path='/crs-calculator' element={<CrsCalculator />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/*' element={<PageNotFound />} />
            <Route
              path='/blogs/top-10-universities-in-canada'
              element={<Top10UniversitiesInCanada />}
            />
            <Route
              path='/blogs/tips-and-tricks-on-preparing-for-ielts'
              element={<TipsAndTricks />}
            />
            <Route
              path='/blogs/top-in-demand-jobs-in-canada-as-of-2024'
              element={<TopInDemandJobs />}
            />
            <Route
              path='/blogs/everything-you-need-to-know-about-sponsoring-your-spouse-and-partner-or-child'
              element={<EverythingYouNeed />}
            />
            <Route
              path='/blogs/what-is-category-based-selection-everything-you-need-to-know'
              element={<WhatIsCategory />}
            />
            <Route path='/assessment' element={<FreeAssessment />} />
            <Route path='/resources' element={<ResourcesAndTools />} />
            <Route path='/latest-news' element={<LatestNews />} />
            <Route
              path='/latest-news/french-proficiency-leads-category-based-selection'
              element={<FrenchProficiency />}
            />
            <Route
              path='/latest-news/changes-in-federal-business-programs-to-tackle-backlog-issue'
              element={<ChangesInFederal />}
            />
            <Route
              path='/latest-news/averaged-language-scores-now-accepted-under-express-entry-for-disabled-candidates'
              element={<AverageLanguageScores />}
            />
            <Route
              path='/latest-news/right-of-permanent-resident-fee-increased'
              element={<RightOfPermanent />}
            />
            <Route
              path='/latest-news/working-hours-increased-for-students-in-canada'
              element={<WorkingHoursIncreased />}
            />
            <Route path='/aquarian-services' element={<AquarianServices />} />
            <Route
              path='/latest-news/major-provinces-issue-pnp-invitations'
              element={<MajorProvinces />}
            />
            <Route path='/aquarian-services' element={<AquarianServices />} />
            {/*Routes for Inner Pages */}
            {/*Routes for Immigrate */}
            {/*Routes for Permanent Residency */}
            <Route path='/immigrate/permanent-residency' element={<PR />} />
            {/*Routes for Express Entry*/}
            <Route path='/immigrate/express-entry' element={<ExpressEntry />} />
            <Route
              path='/immigrate/express-entry/federal-skilled-worker-class'
              element={<FederalSkilledWorkerClass />}
            />
            <Route
              path='/immigrate/express-entry/federal-skilled-trades-class'
              element={<FederalSkilledTradesClass />}
            />
            <Route
              path='/immigrate/express-entry/canadian-experience-class'
              element={<CanadianExperienceClass />}
            />
            {/*Routes for Provincial Nominee Program*/}
            <Route
              path='/immigrate/provincial-nominee-program'
              element={<PNP />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/alberta-immigrant-nominee-program'
              element={<AlbertaImmigrantNomineeProgram />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/alberta-immigrant-nominee-program/alberta-opportunity-stream'
              element={<AlbertaOpportunityStream />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/alberta-immigrant-nominee-program/alberta-express-entry'
              element={<AlbertaExpressEntry />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/alberta-immigrant-nominee-program/alberta-accelerated-tech-pathway'
              element={<AlbertaAcceleratedTechPathway />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/alberta-immigrant-nominee-program/alberta-farm-stream'
              element={<AlbertaFarmStream />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/alberta-immigrant-nominee-program/alberta-graduate-entrepreneur-stream'
              element={<AlbertaGraduateEntrepreneurStream />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/alberta-immigrant-nominee-program/alberta-foreign-graduate-entrepreneur-stream'
              element={<AlbertaForeignGraduateEntrepreneurStream />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/alberta-immigrant-nominee-program/alberta-tourism-and-hospitatlity-stream'
              element={<AlbertaTourismAndHospitatlityStream />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/alberta-immigrant-nominee-program/alberta-rural-renewal-stream'
              element={<AlbertaRuralRenewalStream />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/alberta-immigrant-nominee-program/alberta-rural-entrepreneur'
              element={<AlbertaRuralEntrepreneur />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/british-columbia'
              element={<BritishColumbia />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/british-columbia/british-columbia-skilled-worker'
              element={<BritishColumbiaSkilledWorker />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/british-columbia/british-columbia-skilled-worker/british-columbia-healthcare-professional'
              element={<BritishColumbiaHealthcareProfessional />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/british-columbia/british-columbia-skilled-worker/british-columbia-international-graduate'
              element={<BritishColumbiaInternationalGraduate />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/british-columbia/british-columbia-skilled-worker/british-columbia-international-post-graduate'
              element={<BritishColumbiaInternationalPostGraduate />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/british-columbia/british-columbia-skilled-worker/british-columbia-entry-level-and-semi-skilled-worker'
              element={<EntryLevelAndSemiSkilledWorker />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/british-columbia/british-columbia-entrepreneur-immigration'
              element={<BritishColumbiaEntrepreneurImmigration />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/british-columbia/british-columbia-entrepreneur-immigration/british-columbia-entrepreneur-stream'
              element={<BritishColumbiaEntrepreneurStream />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/british-columbia/british-columbia-entrepreneur-immigration/british-columbia-entrepreneur-regional-pilot'
              element={<BritishColumbiaEntrepreneurRegionalPilot />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/british-columbia/british-columbia-entrepreneur-immigration/british-columbia-strategic-projects'
              element={<BritishColumbiaStrategicProjects />}
            />

            <Route
              path='/immigrate/provincial-nominee-program/british-columbia/british-columbia-pilot-program'
              element={<BritishColumbiaPilotProgram />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/british-columbia/british-columbia-pilot-program/british-columbia-pnp-tech-pilot'
              element={<BritishColumbiaPNPTechPilot />}
            />

            <Route
              path='/immigrate/provincial-nominee-program/manitoba'
              element={<Manitoba />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/manitoba/skilled-workers-in-manitoba'
              element={<SkilledWorkersInManitoba />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/manitoba/skilled-workers-in-manitoba/skilled-workers-in-manitoba-stream'
              element={<SkilledWorkersInManitobaStream />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/manitoba/skilled-workers-in-manitoba/manitoba-experience-pathway'
              element={<ManitobaExperiencePathway />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/manitoba/skilled-workers-in-manitoba/manitoba-employer-direct-recruitment-pathway'
              element={<ManitobaEmployerDirectRecruitmentPathway />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/manitoba/skilled-workers-overseas'
              element={<SkilledWorkersOverseas />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/manitoba/skilled-workers-overseas/manitoba-skilled-workers-overseas-stream'
              element={<ManitobaSkilledWorkersOverseasStream />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/manitoba/skilled-workers-overseas/manitoba-express-entry-pathway'
              element={<ManitobaExpressEntryPathway />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/manitoba/skilled-workers-overseas/manitoba-human-capital-pathway'
              element={<ManitobaHumanCapitalPathway />}
            />

            <Route
              path='/immigrate/provincial-nominee-program/manitoba/manitoba-international-education-stream'
              element={<ManitobaInternationalEducationStream />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/manitoba/manitoba-international-education-stream/manitoba-career-employment-pathway'
              element={<ManitobaCareerEmploymentPathway />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/manitoba/manitoba-international-education-stream/manitoba-graduate-internship-pathway'
              element={<ManitobaGraduateInternshipPathway />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/manitoba/manitoba-international-education-stream/manitoba-international-student-entreprenuer-pilot'
              element={<ManitobaInternationalStudentEntreprenuerPilot />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/manitoba/manitoba-business-investor-stream'
              element={<ManitobaBusinessInvestorStream />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/manitoba/manitoba-business-investor-stream/manitoba-entrepreneur-pathway'
              element={<ManitobaEntrepreneurPathway />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/manitoba/manitoba-business-investor-stream/manitoba-farm-investor-pathway'
              element={<ManitobaFarmInvestorPathway />}
            />

            <Route
              path='/immigrate/provincial-nominee-program/new-brunswick'
              element={<NewBrunswick />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/new-brunswick/new-brunswick-express-entry-labour-market-stream'
              element={<NewBrunswickExpressEntryLabourMarketStream />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/new-brunswick/new-brunswick-skilled-workers-with-employer-support'
              element={<NewBrunswickSkilledWorkersWithEmployerSupport />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/new-brunswick/new-brunswick-strategic-initiative'
              element={<NewBrunswickStrategicInitiative />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/new-brunswick/new-brunswick-business-immigration-stream'
              element={<NewBrunswickBusinessImmigrationStream />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/new-brunswick/new-brunswick-atlantic-immigration-program'
              element={<NewBrunswickAtlanticImmigrationProgram />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/new-brunswick/new-brunswick-private-career-college-graduate-pilot-program'
              element={<NewBrunswickPrivateCareerCollegeGraduatePilotProgram />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/new-brunswick/new-brunswick-critical-worker-pilot'
              element={<NewBrunswickCriticalWorkerPilot />}
            />

            <Route
              path='/immigrate/provincial-nominee-program/newfoundland-and-labrador'
              element={<NewFoundlandAndLabrador />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/newfoundland-and-labrador/newfoundland-and-labrador-express-entry-skilled-worker'
              element={<NewfoundlandAndLabradorExpressEntrySkilledWorker />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/newfoundland-and-labrador/newfoundland-and-labrador-skilled-worker-category'
              element={<NewfoundlandAndLabradorSkilledWorkerCategory />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/newfoundland-and-labrador/newfoundland-and-labrador-international-graduate-category'
              element={<NewfoundlandAndLabradorInternationalGraduateCategory />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/newfoundland-and-labrador/newfoundland-and-labrador-international-entrepreneur-category'
              element={
                <NewfoundlandAndLabradorInternationalEntrepreneurCategory />
              }
            />
            <Route
              path='/immigrate/provincial-nominee-program/newfoundland-and-labrador/newfoundland-and-labrador-international-graduate-entrepreneur-category'
              element={
                <NewfoundlandAndLabradorInternationalGraduateEntrepreneurCategory />
              }
            />

            <Route
              path='/immigrate/provincial-nominee-program/northwest-territories'
              element={<NorthwestTerritories />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/northwest-territories/northwest-territories-express-entry'
              element={<NorthwestTerritoriesExpressEntry />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/northwest-territories/northwest-territories-employer-driven'
              element={<NorthwestTerritoriesEmployerDriven />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/northwest-territories/northwest-territories-employer-driven/northwest-territories-entry-level/semi-skilled-occupation'
              element={<NorthwestTerritoriesEntryLevel />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/northwest-territories/northwest-territories-employer-driven/northwest-territories-skilled-workers'
              element={<NorthwestTerritoriesSkilledWorkers />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/northwest-territories/northwest-territories-business-driven'
              element={<NorthwestTerritoriesBusinessDriven />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/northwest-territories/northwest-territories-french-speaking'
              element={<NorthwestTerritoriesFrenchSpeaking />}
            />

            <Route
              path='/immigrate/provincial-nominee-program/nova-scotia'
              element={<NovaScotia />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/nova-scotia/nova-scotia-experience-express-entry'
              element={<NovaScotiaExperienceExpressEntry />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/nova-scotia/nova-scotia-entrepreneur-category'
              element={<NovaScotiaEntrepreneurCategory />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/nova-scotia/nova-scotia-international-graduate-entrepreneur-category'
              element={<NovaScotiaInternationalGraduateEntrepreneurCategory />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/nova-scotia/nova-scotia-international-graduates-in-demand'
              element={<NovaScotiaInternationalGraduatesinDemand />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/nova-scotia/nova-scotia-skilled-worker-category'
              element={<NovaScotiaSkilledWorkerCategory />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/nova-scotia/nova-scotia-occupations-in-demand'
              element={<NovaScotiaOccupationsInDemand />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/nova-scotia/nova-scotia-labour-market-priorities'
              element={<NovaScotiaLabourMarketPriorities />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/nova-scotia/nova-scotia-labour-market-priorities-for-physicians'
              element={<NovaScotiaLabourMarketPrioritiesForPhysicians />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/nova-scotia/nova-scotia-physician-stream'
              element={<NovaScotiaPhysicianStream />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/nova-scotia/nova-scotia-critical-construction-worker-pilot'
              element={<NovaScotiaCriticalConstructionWorkerPilot />}
            />

            <Route
              path='/immigrate/provincial-nominee-program/ontario'
              element={<Ontario />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/ontario/ontario-employer-job-offer-stream'
              element={<OntarioEmployerJobOfferStream />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/ontario/ontario-employer-job-offer-stream/ontario-foreign-worker'
              element={<OntarioForeignWorker />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/ontario/ontario-employer-job-offer-stream/ontario-international-student'
              element={<OntarioInternationalStudent />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/ontario/ontario-employer-job-offer-stream/ontario-in-demand-stream'
              element={<OntarioInDemandStream />}
            />

            <Route
              path='/immigrate/provincial-nominee-program/ontario/ontario-post-graduate-stream'
              element={<OntarioPostGraduateStream />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/ontario/ontario-post-graduate-stream/ontario-master-graduate-stream'
              element={<OntarioMasterGraduateStream />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/ontario/ontario-post-graduate-stream/ontario-phd-graduate-stream'
              element={<OntarioPhdGraduateStream />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/ontario/ontario-express-entry'
              element={<OntarioExpressEntry />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/ontario/ontario-express-entry/ontario-human-capital-priority-stream'
              element={<OntarioHumanCapitalPriorityStream />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/ontario/ontario-express-entry/ontario-skilled-trade-stream'
              element={<OntarioSkilledTradeStream />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/ontario/ontario-express-entry/ontario-french-speaking-skilled-workers-stream'
              element={<OntarioFrenchSpeakingSkilledWorkersStream />}
            />

            <Route
              path='/immigrate/provincial-nominee-program/prince-edward-island'
              element={<PrinceEdwardIsland />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/prince-edward-island/pei-express-entry'
              element={<PEIExpressEntry />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/prince-edward-island/pei-labor-impact'
              element={<PEILaborImpact />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/prince-edward-island/pei-labor-impact/pei-skilled-workers-in-pei'
              element={<PEISkilledWorker />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/prince-edward-island/pei-labor-impact/pei-skilled-worker-outside-canada'
              element={<PEISkilledWorkerOutsideCanada />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/prince-edward-island/pei-labor-impact/pei-international-graduate'
              element={<PEIInternationalGraduate />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/prince-edward-island/pei-labor-impact/pei-critical-worker'
              element={<PEICriticalWorker />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/prince-edward-island/pei-business-impact'
              element={<PEIBusinessImpact />}
            />

            <Route
              path='/immigrate/provincial-nominee-program/saskatchewan'
              element={<Saskatchewan />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/saskatchewan/saskatchewan-international-skilled-worker'
              element={<SaskatchewanInternationalSkilledWorker />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/saskatchewan/saskatchewan-international-skilled-worker/saskatchewan-express-entry'
              element={<SaskatchewanExpressEntry />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/saskatchewan/saskatchewan-international-skilled-worker/saskatchewan-employment-offer'
              element={<SaskatchewanEmploymentOffer />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/saskatchewan/saskatchewan-international-skilled-worker/saskatchewan-in-demand-occupation'
              element={<SaskatchewanInDemandOccupation />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/saskatchewan/saskatchewan-international-skilled-worker/saskatchewan-international-skilled-worker-tech-talent-pathway'
              element={
                <SaskatchewanInternationalSkilledWorkerTechTalentPathway />
              }
            />
            <Route
              path='/immigrate/provincial-nominee-program/saskatchewan/saskatchewan-international-skilled-worker/saskatchewan-hard-to-fill-skills-pilot'
              element={<SaskatchewanHardToFillSkillsPilot />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/saskatchewan/saskatchewan-experience'
              element={<SaskatchewanExperience />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/saskatchewan/saskatchewan-experience/saskatchewan-existing-work-permit'
              element={<SaskatchewanExistingWorkPermit />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/saskatchewan/saskatchewan-experience/saskatchewan-health-professionals'
              element={<SaskatchewanHealthProfessionals />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/saskatchewan/saskatchewan-experience/saskatchewan-hospitality-sector-project'
              element={<SaskatchewanHospitalitySectorProject />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/saskatchewan/saskatchewan-experience/saskatchewan-long-haul-truck-driver-project'
              element={<SaskatchewanLongHaulTruckDriverProject />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/saskatchewan/saskatchewan-experience/saskatchewan-students'
              element={<SaskatchewanStudents />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/saskatchewan/saskatchewan-entrepreneur-and-farm'
              element={<SaskatchewanEntrepreneurAndFarm />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/saskatchewan/saskatchewan-entrepreneur-and-farm/saskatchewan-entrepreneur'
              element={<SaskatchewanEntrepreneur />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/saskatchewan/saskatchewan-entrepreneur-and-farm/saskatchewan-farm-owners-and-operators'
              element={<SaskatchewanFarmOwnersAndOperators />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/saskatchewan/saskatchewan-entrepreneur-and-farm/saskatchewan-international-graduate-entrepreneur-category'
              element={
                <SaskatchewanInternationalGraduateEntrepreneurCategory />
              }
            />

            <Route
              path='/immigrate/provincial-nominee-program/yukon'
              element={<Yukon />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/yukon/yukon-skilled-worker'
              element={<YukonSkilledWorker />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/yukon/yukon-express-entry'
              element={<YukonExpressEntry />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/yukon/yukon-critical-impact-worker'
              element={<YukonCriticalImpactWorker />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/yukon/yukon-business-nominee'
              element={<YukonBusinessNominee />}
            />
            <Route
              path='/immigrate/provincial-nominee-program/yukon/yukon-community-pilot'
              element={<YukonCommunityPilot />}
            />

            {/*Routes for After Permanent Residency*/}
            <Route
              path='/immigrate/after-permanent-residency'
              element={<AfterPR />}
            />
            <Route
              path='/immigrate/after-permanent-residency/permanent-resident-cards'
              element={<PRCards />}
            />
            <Route
              path='/immigrate/after-permanent-residency/permanent-resident-card-renewal'
              element={<PRCardRenewal />}
            />
            <Route
              path='/immigrate/after-permanent-residency/permanent-resident-travel-document'
              element={<PRTravel />}
            />
            <Route
              path='/immigrate/after-permanent-residency/residency-obligation'
              element={<ResidencyObligation />}
            />
            <Route
              path='/immigrate/after-permanent-residency/canadian-citizenship'
              element={<CanadianCitizenship />}
            />
            {/*Routes for PR FAQs*/}
            <Route path='/immigrate/pr-faqs' element={<PRFAQs />} />
            {/*Routes for Rural and Northern Immigration Pilot*/}
            <Route
              path='/immigrate/rural-and-northern-immigration-pilot'
              element={<RuralAndNorthern />}
            />
            {/*Routes for Caregiver Programs*/}
            <Route
              path='/immigrate/caregiver-programs'
              element={<CaregiverPrograms />}
            />
            <Route
              path='/immigrate/caregiver-programs/home-child-care-provider-pilot'
              element={<HomeChild />}
            />
            <Route
              path='/immigrate/caregiver-programs/home-support-worker-pilot'
              element={<HomeSupport />}
            />
            {/*Routes for AIP Atlantic Immigration Program*/}
            <Route
              path='/immigrate/aip-atlantic-immigration-program'
              element={<AIP />}
            />
            {/*Routes for Agri-Food Pilot*/}
            <Route
              path='/immigrate/agri-food-pilot'
              element={<AgriFoodPilot />}
            />
            {/*Routes for Work*/}
            {/*Routes for Work in Canada*/}
            <Route path='/work/work-in-canada' element={<WorkInCanada />} />
            {/*Routes for Work Without a permit*/}
            <Route
              path='/work/work-without-a-permit'
              element={<WorkWithoutAPermit />}
            />
            <Route
              path='/work/work-without-a-permit/business-visas'
              element={<BusinessVisas />}
            />
            {/*Routes for Temporary Foreign Worker Program*/}
            <Route
              path='/work/temporary-foreign-worker-program'
              element={<TemporaryForeignWorkerProgram />}
            />
            <Route
              path='/work/temporary-foreign-worker-program/labour-maket-impact-assessment'
              element={<LabourMaketImpactAssessment />}
            />
            <Route
              path='/work/temporary-foreign-worker-program/canada-global-talent-stream'
              element={<CanadaGlobalTalentStream />}
            />
            {/*Routes for International Mobility Program (IMP)*/}
            <Route
              path='/work/international-mobility-program'
              element={<InternationalMobilityProgram />}
            />
            <Route
              path='/work/international-mobility-program/intra-company-transfer'
              element={<IntraCompanyTransfer />}
            />
            <Route
              path='/work/international-mobility-program/cusma'
              element={<CUSMA />}
            />
            <Route
              path='/work/international-mobility-program/ceta-work-permits'
              element={<CETAWorkPermits />}
            />
            {/*Routes for Open Work Permits*/}
            <Route
              path='/work/open-work-permits'
              element={<OpenWorkPermits />}
            />
            <Route
              path='/work/open-work-permits/post-graduate-work-permit'
              element={<PGWP />}
            />
            <Route
              path='/work/open-work-permits/international-experience-class'
              element={<IEC />}
            />
            <Route
              path='/work/open-work-permits/spousal-open-work-permit'
              element={<SOWP />}
            />
            <Route
              path='/work/open-work-permits/bridging-open-work-permit'
              element={<BOWP />}
            />
            {/*Routes for Study*/}
            {/*Routes for Study in Canada*/}
            <Route path='/study/study-in-canada' element={<StudyInCanada />} />
            {/*Routes for Study Pathways to Permanent Residence*/}
            <Route
              path='/study/study-pathways-to-permanent-residence'
              element={<StudyPathwaysToPermanentResidence />}
            />
            {/*Routes for Levels of Study*/}
            <Route path='/study/levels-of-study' element={<LevelsOfStudy />} />
            {/*Routes for Study Permit In Canada*/}
            <Route
              path='/study/study-permit-in-canada'
              element={<StudyPermitInCanada />}
            />
            <Route
              path='/study/study-permit-in-canada/student-direct-stream'
              element={<StudentDirectStream />}
            />
            <Route
              path='/study/study-permit-in-canada/certificat-d-acceptation-du-quebec'
              element={<CertificatDacceptationDuQuebec />}
            />
            {/*Routes for Refusals and Appeals of Study Permits*/}
            <Route
              path='/study/refusals-and-appeals-of-study-permits'
              element={<RefusalsAndAppealsOfStudyPermit />}
            />
            {/*Routes for Extend a Study Permit*/}
            <Route
              path='/study/extend-a-study-permit'
              element={<ExtendAStudyPermit />}
            />
            {/*Routes for Post Graduate Work Permit (PGWP)*/}
            <Route
              path='/study/post-graduate-work-permit'
              element={<PostGraduateWorkPermit />}
            />
            {/*Routes for Designated Learning Institution (DLI)*/}
            <Route
              path='/study/designated-learning-institution'
              element={<DesignatedLearningInstitution />}
            />
            {/*Routes for Visit*/}
            {/*Routes for Visitor Visa- TRV*/}
            <Route
              path='/visit/visitor-visa-trv'
              element={<TRVVisitorVisa />}
            />
            <Route
              path='/visit/visitor-visa-trv/visitor-visa-for-tourism-or-to-meet-your-relatives-or-friends'
              element={<VisitorVisaForTourism />}
            />
            <Route
              path='/visit/visitor-visa-trv/visitor-visas-for-workers-and-students'
              element={<VisitorVisaForWorkersAndStudents />}
            />
            <Route
              path='/visit/visitor-visa-trv/visit-canada-on-business'
              element={<VisitCanadaOnBusiness />}
            />
            <Route
              path='/visit/visitor-visa-trv/transit-through-canada'
              element={<TransitThroughCanada />}
            />
            <Route
              path='/visit/visitor-visa-trv/electronic-travel-authorization'
              element={<ElectronicTravelAuthorization />}
            />
            {/*Routes for Visa Extension and Refusal*/}
            <Route
              path='/visit/visa-extension-and-extension'
              element={<VisaExtension />}
            />
            {/*Routes for Super Visa*/}
            <Route path='/visit/super-visa' element={<SuperVisa />} />
            {/*Routes for Employers*/}
            {/*Routes for Employers Outside Canada*/}
            <Route
              path='/employers/employers-outside-canada'
              element={<EmployersOutsideCanada />}
            />
            <Route
              path='/employers/employers-outside-canada/intra-company-transfer-of-employers'
              element={<IntraCompanyTransferOfEmployees />}
            />
            <Route
              path='/employers/employers-outside-canada/business-visit-visa'
              element={<BusinessVisitVisa />}
            />
            <Route
              path='/employers/employers-outside-canada/expand-business-to-canada'
              element={<ExpandBusinessToCanada />}
            />
            {/*Routes for Canadian Employers*/}
            <Route
              path='/employers/canadian-employers'
              element={<CanadianEmployers />}
            />
            <Route
              path='/employers/canadian-employers/hiring-foreign-workers'
              element={<HiringForeignWorkers />}
            />
            {/*Routes for Sponsorship*/}
            {/*Routes for Sponsorship*/}
            <Route path='/sponsorship/sponsorship' element={<Sponsorship />} />
            {/*Routes for Canadian spousal sponsorship*/}
            <Route
              path='/sponsorship/canadian-spousal-sponsorship'
              element={<CanadianSpousalSponsorship />}
            />
            {/*Routes for Child or Other Dependant Sponsorship*/}
            <Route
              path='/sponsorship/child-or-other-dependant-sponsorship'
              element={<ChildOrOtherDependantSponsorship />}
            />
            {/*Routes for Parents and Grandparents Program (PGP)*/}
            <Route
              path='/sponsorship/parents-and-grandparents-program'
              element={<ParentsAndGrandparentsProgram />}
            />
            {/*Routes for Super Visa*/}
            <Route
              path='/sponsorship/super-visa'
              element={<SuperVisaSponsorship />}
            />
            {/*Routes for Minimum Necessary Income (MNI)*/}
            <Route
              path='/sponsorship/minimum-necessary-income'
              element={<MinimumNecessaryIncome />}
            />
            {/*Routes for Business*/}
            {/*Routes for Business/Invest*/}
            <Route path='/business/invest' element={<Invest />} />
            <Route path='/business/invest/start-up' element={<StartUp />} />
            <Route
              path='/business/invest/entrepreneur-self-employed'
              element={<EntrepreneurSelfEmployed />}
            />
            <Route
              path='/business/invest/start-a-business-in-canada'
              element={<StartABusinessInCanada />}
            />
            <Route
              path='/business/invest/buy-an-existing-business-in-canada'
              element={<BuyAnExistingBusinessInCanada />}
            />
            <Route
              path='/business/invest/expand-your-business-to-canada'
              element={<ExpandYourBusinessToCanada />}
            />
            {/*Routes for PNP Entrepreneur Streams*/}
            <Route
              path='/business/pnp-entrepreneur-streams'
              element={<PNPEntrepreneurStreams />}
            />
            <Route
              path='/business/pnp-entrepreneur-streams/alberta'
              element={<AlbertaBusiness />}
            />
            <Route
              path='/business/pnp-entrepreneur-streams/british-columbia'
              element={<BritishColumbiaBusiness />}
            />
            <Route
              path='/business/pnp-entrepreneur-streams/manitoba'
              element={<ManitobaBusiness />}
            />
            <Route
              path='/business/pnp-entrepreneur-streams/new-brunswick'
              element={<NewBrunswickBusiness />}
            />
            <Route
              path='/business/pnp-entrepreneur-streams/newfoundland-and-labrador'
              element={<NewfoundlandAndLabradorBusiness />}
            />
            <Route
              path='/business/pnp-entrepreneur-streams/northwest-territories'
              element={<NorthwestTerritoriesBusiness />}
            />
            <Route
              path='/business/pnp-entrepreneur-streams/nova-scotia'
              element={<NovaScotiaBusiness />}
            />
            <Route
              path='/business/pnp-entrepreneur-streams/ontario'
              element={<OntarioBusiness />}
            />
            <Route
              path='/business/pnp-entrepreneur-streams/prince-edward-island'
              element={<PrinceEdwardIslandBusiness />}
            />
            <Route
              path='/business/pnp-entrepreneur-streams/saskatchewan'
              element={<SaskatchewanBusiness />}
            />
            <Route
              path='/business/pnp-entrepreneur-streams/yukon'
              element={<YukonBusiness />}
            />
            {/*Routes for Work Permit to PR Pathways*/}
            <Route
              path='/business/work-permit-to-pr-pathways'
              element={<WorkPermitToPRPathways />}
            />
            <Route
              path='/business/work-permit-to-pr-pathways/intra-company-transfer'
              element={<IntraCompanyTransferBusiness />}
            />
            <Route
              path='/business/work-permit-to-pr-pathways/c11-work-visa'
              element={<C11WorkVisa />}
            />
            <Route
              path='/business/work-permit-to-pr-pathways/c10-work-visa'
              element={<C10WorkVisa />}
            />
            <Route
              path='/business/work-permit-to-pr-pathways/entrepreneur-lmia-owner-operated'
              element={<EntrepreneurLMIAOwnerOperated />}
            />
          </Routes>
          <Footer />
        </MobileProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
