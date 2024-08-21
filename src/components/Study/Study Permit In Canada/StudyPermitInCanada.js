import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
export default function StudyPermitInCanada() {
  const [expanded, setExpanded] = useState({});
  const questions = [
    "What is a designated learning institution?",
    "For how long is a study permit valid?",
    "Can I work in Canada while I'm studying? ",
    "Can I switch institutions or programs on my study permit?",
    "Can my family come with me?",
    "Can I go to my home country during holidays?",
    "How can I stay in Canada after I finish my studies?",
  ];
  const answers = [
    "A DLI (Designated Learning Institution) is an educational institution which has received approval from the Canadian government to admit foreign nationals into their programs of study. All primary and secondary schools in Canada are DLIs and can admit students from foreign countries. However, not all post-secondary educational institutions are DLIs, so you must consult the Canadian government’s list of DLIs prior to applying.",
    "A study permit will be valid for the length of the program of study at the time of application. If the program changes, or the student changes programs to one with a longer duration, the student must apply for an extension of the study permit. When a student completes their studies, the study permit will stop being valid 90 days later, regardless of the date indicated on the permit. Before the study permit expires, the foreign national must exit Canada or apply to extend their stay in Canada. Many students choose to apply for a Post-Graduate Work Permit, if approved, this permit authorises recent graduates to stay in Canada and work.",
    "You are allowed to work if you hold a study permit and are not required to apply for a work permit separately. In order to find part time work, you must also ensure that you have a valid Social Insurance Number (SIN). However, once you stop attending the full-time course or the study permit expires, your right to work also stops.",
    <>
      Students are not required to apply for a new study permit if they change
      their field of study or switch educational institutions within Canada as
      long as their study permit does not specify this information. If the study
      permit specifies the institution or field of study then this information
      must be updated on the permit before the student can join a new course or
      school.
      <br />
      <br />
      If a student changes their level of education, for example moving from
      primary school to high school, or from high school to university, then
      this would require modification of the study permit.
      <br />
      <br />
      If you have applied to an institution in the province of Quebec, you must
      first verify that the level of study of the new program you wish to pursue
      matches the one authorised in your CAQ. If it does not, you will need to
      apply for a new CAQ.
    </>,
    <>
      A full-time student with a valid study permit can be accompanied by
      his/her spouse and children to Canada. The spouse is allowed to study or
      work if he/she obtains a study permit or spousal open work permit. While
      accompanying minor children do not require a study permit to attend
      pre-school, primary school, or secondary school, any children attending a
      post-secondary educational institution must apply for a study permit.
      <br />
      <br />
      When a visa officer assesses a study permit application, they will
      consider whether or not the applicant demonstrates they intend to leave
      Canada when their permit expires. If the officer is not satisfied that
      this requirement is met, they will refuse the study permit. Sometimes,
      applying with a person’s spouse and children, may suggest to the officer
      that the applicant intends to move permanently to Canada and therefore
      does not intend to leave Canada when the permit expires.
    </>,
    "Absolutely! The permit holder must show a valid passport, a valid study permit, and a travel document authorising re-entry to Canada (either a travel visa or an eTA depending on the country of citizenship). If any of these requirements are not met, permission to re-enter may be refused.",
    <>
      Most foreign graduates (international students) from any of Canada’s
      Designated Learning Institutions are eligible to apply for an open work
      permit under the Post-Graduate Work Permit program. However, not every
      program offered by DLIs makes graduates eligible to apply for a
      Post-Graduate Work Permit. Be sure to check whether the program you’re
      studying will make you eligible. As a foreign national gains Canadian work
      experience, it will increase their eligibility to obtain Canadian
      permanent residency through the Express Entry – Canadian Experience Class
      program.
      <br />
      <br />
      Any students graduating from one level of education may apply for a
      program and a study permit for another level of education. For example, a
      high school student applying to university.
      <br />
      <br />
      Depending on a person’s credentials, they may have the option of applying
      directly for permanent residence through the Express Entry – Federal
      Skilled Worker program, Provincial Nomination Programs, or another valid
      immigration program.
    </>,
  ];
  const toggleExpand = (index) => {
    setExpanded((prevExpanded) => {
      const newExpanded = {};
      for (const key in prevExpanded) {
        newExpanded[key] = false;
      }
      newExpanded[index] = !prevExpanded[index];
      return newExpanded;
    });
  };

  return (
    <div
      style={{
        background: "#E0E0E0",
      }}
    >
      <div className="AboutUsHeader">
        <p className="link">
          <a href="/">Home</a>
          {" > "}Study
          {" > "}Study Permit in Canada
        </p>
        <div className="header-content">
          <h1 className="heading-about">Study Permit in Canada</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        Canada is a top destination for international students from all over the
        world. If you are interested in studying in Canada, you will first need
        to obtain a Canadian study permit.
        <br />
        <br />
        Follow our step-by-step instructions to get your Canadian study permit
        today!
        <br />
        <br />
        <ul>
          <li>Apply for a Study Permit</li>
          <li>Study Permit Requirements</li>
          <li>Application Process</li>
          <li>Study Permit Exemptions</li>
        </ul>
        <br />
        FIND OUT WHETHER YOU QUALIFY FOR A STUDY PERMIT IN CANADA
        <br />
        <br />
        <sp>Apply for a Study Permit</sp>
        <br />
        <br />
        The study permit grants legal authorization for a person to study at a
        Designated Learning Institution (DLI) in Canada. When applying for a
        study permit, a foreign national should be aware that there are
        eligibility requirements which must be met when submitting the study
        permit application. As well, there are certain conditions which must be
        met throughout the student’s time in Canada.
        <br />
        <br />
        There are many steps involved with applying for a study permit and the
        processing times vary greatly from country to country, so it is best to
        plan ahead to ensure your permit will be processed before your study
        period begins. The majority of Canadian post-secondary educational
        programs commence study in September, January, or May, though a number
        of programs do offer intakes outside of those dates.
        <br />
        <br />
        Since foreign nationals cannot apply for a study permit without an
        acceptance letter, they should check the start date and application
        process for their schools and programs of interest far in advance to
        ensure they have sufficient time to obtain the acceptance letter and
        complete the study permit application.
        <br />
        <br />
        <sp>Did you know?</sp>
        <br />
        <br />
        Canadian schools often impose different application deadlines for
        international students than for students applying from inside of Canada.
        Make sure you’re aware of the proper deadline for your program!
        <br />
        <br />
        <sp>Study Permit Requirements</sp>
        <br />
        <br />
        There are two sets of requirements you must consider when applying for a
        Canadian study permit: eligibility requirements, and requirements while
        studying in Canada.
        <br />
        <br />
        <sp>Eligibility Requirements</sp>
        <br />
        <br />
        You must meet these criteria in order to be eligible to apply for a
        study permit:
        <br />
        <br />
        <ul>
          <li>
            <bold>Travel Document: </bold>
            <br />
            Have a valid passport (or other lawful travel document)
          </li>
          <br />
          <li>
            <bold>Acceptance Letter: </bold>
            <br />
            You must have an acceptance letter from a Designated Learning
            Institution (DLI) in order to apply for a Canadian study permit.
          </li>
          <br />
          <li>
            <bold>Proof of Financial Support:</bold>
            <br />
            Demonstrate sufficient funds to meet the following requirements:
            <ul>
              <li>
                Pay the student fees for your first year of study as outlined by
                the DLI.
              </li>
              <li>
                Meet all expenses for the first year of stay in Canada for the
                student and accompanying family member(s) in Canada.
              </li>
              <li>
                Afford transportation for the student and accompanying family
                member(s) from Canada to their home country.
              </li>
              <li>
                Funds should be demonstrated in liquid form, in the account
                under the name of the principal applicant, spousal applicant, a
                family relative, or a close friend.
              </li>
            </ul>
          </li>
          <br />
          <li>
            <bold>Medical Exam:</bold>
            <br />
            In most cases, after a visa officer receives an application for a
            study permit they will request that the student and accompanying
            family member(s) complete a medical exam.
          </li>
          <br />
          <li>
            <bold>Criminal Record: </bold>
            <br />
            In some cases, after a visa officer receives an application for a
            study permit they will request police clearance certificates to
            ensure a person is not a risk to Canadian security.
          </li>
          <br />
          <li>
            <bold>Other Supporting Documentation:</bold> <br />
            Extensive supporting documentation must be submitted with all study
            permit applications. This documentation varies from country to
            country. In order to determine the documents required for a specific
            location, you can consult the Immigration, Refugees and Citizenship
            Canada (IRCC) website, or you can contact our firm and one of our
            Educational Counsellors will contact you with assistance.
          </li>
        </ul>
        <br />
        When you apply for your permit, the visa officer will confirm to ensure
        you meet the requirements. If the visa officer is not satisfied, they
        will refuse your application.
        <br />
        <br />
        <sp>Requirements while studying in Canada</sp>
        <br />
        <br />
        If your study permit is approved and you enter Canada as an
        international student, you must meet the requirements below in order to
        maintain the validity of your study permit. While studying in Canada
        under a study permit, a foreign national must:
        <br />
        <br />
        <ul>
          <li>always be enrolled at a Designated Learning Institution (DLI)</li>
          <li>make progress towards completing their program</li>
          <li>respect any conditions listed on their study permit</li>
          <li>stop studying if they no longer meet the requirements and</li>
          <li>leave Canada when their permit expires</li>
        </ul>
        <br />
        <sp>Application Process</sp>
        <br />
        <br />
        There are four stages to obtaining a Canadian study permit:
        <br />
        <br />
        <ul>
          <bold>1. Check your eligibility </bold>Ensure you meet the eligibility
          requirements for a Canadian study permit. You require an acceptance
          letter from a DLI, proof of financial support, as well as a range of
          documents which vary depending on your country of citizenship and
          residence.
          <br />
          <br />
          <bold>2. Prepare your application</bold> If you meet all eligibility
          requirements then you can prepare your study permit application.
          Ensure that you have gathered all documents required for your country.
          Immigration officers reserve the right to refuse study permits if they
          feel an applicant has not met all requirements, so it is valuable to
          have a qualified immigration representative review your application
          prior to submission.
          <br />
          <br />
          <bold>3. Submit your study permit application </bold>You have two
          options when submitting your application:
          <bold> Submit an electronic application: </bold>Create an account on
          the Immigration, Refugees and Citizenship Canada (IRCC) website and
          you can submit an application electronically using scanned or
          electronic copies of documents.
          <bold> Submit a paper-based application: </bold>Compile your
          application in hard copy and mail it to the Visa Application Centre
          (VAC) assigned to your country.
          <br />
          <br />
          <bold>4. If your study permit is approved, come to Canada!</bold>
          Please note that you do not receive your Canadian study permit until
          you arrive at a Canadian Port of Entry (POE). If your permit is
          approved, the Canadian government will issue you a Port of Entry
          Introduction Letter. You must keep this letter and show it to the
          immigration official when you arrive in Canada in order to obtain your
          study permit.
        </ul>
        <br />
        Please note that<bold> your study permit is not a visa. </bold>This
        means that, depending on your country of citizenship, you may need a
        travel visa in order to come to the POE in Canada.
        <br />
        <br />
        <ul>
          <li>
            <bold>Visa Exempt Countries: </bold>These countries do not require a
            visa to enter Canada. You can come directly to the Port of Entry to
            obtain your study permit. Please note that you may still require an
            electronic Travel Authorization (eTA) to travel to Canada.
          </li>
          <br />
          <li>
            <bold>Non-Visa Exempt Countries: </bold>These countries require a
            visa to enter Canada. When your study permit application is
            approved, the visa officer should mail you a travel visa authorising
            you to travel to Canada.
          </li>
        </ul>
        <br />
        *If you are already in Canada legally, you may apply from within the
        country. If your study permit is approved it will be mailed to you.
        <br />
        <br />
        <sp>Did you know?</sp>
        <br />
        <br />
        The document allowing international students to study in Canada is
        called a study permit rather than a study visa. The term ‘visa’ refers
        to a document which allows you to enter Canada, while a ‘permit’ allows
        you to participate in certain activities while residing in Canada, like
        working or studying!
        <br />
        <br />
        <sp>Study Permit Exemptions</sp>
        <br />
        <br />
        Not all foreign nationals require a permit in order to study in Canada.
        The following are the most common exemptions from the study permit
        requirement:
        <br />
        <br />
        <sp>Short-Term Studies</sp>
        <br />
        <br />
        A foreign national does not require a study permit if they are
        completing a program of study which has a duration of six months or
        less. If the foreign national takes longer than six months to complete
        such a program, they must secure a study permit before the initial six
        months has passed.
        <br />
        <br />
        <sp>Minor children in Canada</sp>
        <br />
        <br />
        Minor children, those under the age of 18 or 19 (the age for minor
        children varies by province), do not need a study permit to attend
        kindergarten, pre-school, primary or secondary school if they meet one
        of the following conditions:
        <br />
        <br />
        <ul>
          <li>They (or their parents) are refugees or refugee claimants</li>
          <li>
            They are in Canada accompanying a parent who is authorised to work
            or study
          </li>
        </ul>
        <br />
        <sp>Members of foreign armed forces</sp>
        <br />
        <br />
        A member of a foreign armed force who is in Canada on active duty does
        not require a permit to study. However, their family members may require
        study permits. If you are unsure whether or not you require a study
        permit for Canada, please complete our free student assessment and one
        of our Educational Counsellors will contact you to discuss your options.
        <br />
        <br />
        <sp>Studying in Quebec</sp>
        <br />
        <br />
        Quebec is autonomous in its immigration processes and policies, so the
        application process to study at an educational institution in Quebec
        differs somewhat from the processes in other provinces. International
        students interested in pursuing an educational program in the province
        of Quebec must first obtain a Certificat d’acceptation du Quebec (CAQ)
        before applying for a study permit.
        <br />
        <br />
        <sp>Study Permit FAQ </sp>
        {questions.map((item, index) => (
          <React.Fragment key={index}>
            <div
              style={{
                backgroundColor: "#DDD",
                marginTop: "2rem",
                padding: "10px",
                display: "flex",
                justifyContent: "space-between",
              }}
              onClick={() => toggleExpand(index)}
            >
              <sp style={{ alignItems: "flex-start" }}>{item}</sp>
              <div
                style={{
                  alignItems: "flex-end",
                  paddingRight: "10px",
                  alignSelf: "center",
                }}
              >
                {expanded[index] ? <FiMinus /> : <FiPlus />}
              </div>
            </div>

            {expanded[index] && (
              <div
                style={{
                  padding: "10px",
                  background: "#eee",
                  width: "100%",
                }}
              >
                {/* Content when the box is expanded */}
                <p>{answers[index]}</p>
              </div>
            )}
          </React.Fragment>
        ))}
        <br />
        <sp>How We Can Help</sp>
        <br />
        <br />
        Pursuing studies as an international student in Canada can be confusing
        and stressful. There are many schools and programs to choose and study
        permit applications are regularly refused for not meeting government
        requirements. Thankfully, the Aquarian Immigration Team is here to help
        you keep it simple. Our International Student Program pairs potential
        students with one of our expert Educational Counsellors to provide
        guidance from start to finish.
        <br />
        <br />
        We will help you with finding a program of study which suits your needs,
        obtaining a letter of acceptance, and preparing and submitting your
        study permit application! To get started, simply complete our free
        student assessment and one of our Educational Counsellors will contact
        you to discuss your immigration options!
      </h2>
    </div>
  );
}
