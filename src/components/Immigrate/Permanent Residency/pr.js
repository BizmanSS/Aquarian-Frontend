import React from "react";
const Table = () => {
  const data = [
    {
      name: "French-speaking workers in Canada: health care",
      ic: "Unlimited",
      as: "271 (Last updated: 2022-02-15)",
    },
    {
      name: "French-speaking workers in Canada: essential, non-health care",
      ic: "Unlimited",
      as: "2,054 (Last updated: 2022-02-15)",
    },
    {
      name: "French-speaking recent international graduates from a Canadian institution",
      ic: "Unlimited",
      as: "4,697 (Last updated: 2022-02-15)",
    },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Stream name</th>
          <th>Intake cap</th>
          <th>Applications submitted</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.ic}</td>
            <td>{item.as}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
const TableGeneral = () => {
  const data = [
    {
      name: "Workers in Canada: health care",
      ic: "20000",
      as: "7,155 (Last updated: 2022-02-15)",
    },
    {
      name: "Workers in Canada: essential, non-health care",
      ic: "30000",
      as: "Maximum reached",
    },
    {
      name: "Recent international graduates from a Canadian institution",
      ic: "40000",
      as: "Maximum reached",
    },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Stream name</th>
          <th>Intake cap</th>
          <th>Applications submitted</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.ic}</td>
            <td>{item.as}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default function PR() {
  return (
    <div
      style={{
        background: "#E0E0E0",
      }}
    >
      <div className="AboutUsHeader">
        <p className="link">
          <a href="/">Home</a>
          {" > "}Immigrate
          {" > "}Permanent Residency
        </p>
        <div className="header-content">
          <h1 className="heading-about">Permanent Residency</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        On April 14, 2021, Immigration Minister Marco Mendicino announced
        Immigration, Refugees and Citizenship Canada’s intention to create
        several new immigration pathways for permanent residence for essential
        workers and international graduates who are currently in Canada working.
        <br />
        <br />
        The program was closed in November of 2021 after receiving over 80,000
        applications. The IRCC has announced plans to create a new similar
        program by the end of 2022.
        <br />
        <br />
        <ul>
          <li>
            What are the available pathways for permanent residency under the TR
            to PR immigration programs?
          </li>
          <li>
            Who qualifies under the TR to PR immigration program targeting
            International Students?
          </li>
          <li>
            Who qualifies under the TR to PR immigration program targeting
            essential occupations
          </li>
          <li>
            What occupations in the TR to PR immigration program qualify as an
            Essential Worker?
          </li>
          <li>
            What occupations in the TR to PR immigration program qualify as a
            Health-Care Worker?
          </li>
          <li>How do I apply to one of the TR to PR immigration programs?</li>
          <li>
            What documents do I need to apply for the new permanent resident
            immigration programs?
          </li>
          <li>
            Do I have to demonstrate settlement funds when I apply under one of
            the TR to PR immigration programs?
          </li>
          <li>How much does the TR to PR immigration programs cost?</li>
          <li>
            Is a job offer required to apply for the TR to PR immigration
            programs?
          </li>
          <li>
            How long will it take to process applications made under the TR to
            PR immigration programs?
          </li>
          <li>
            Can applicants’ spouse and dependent children also be included in an
            application for permanent residence under the TR to PR immigration
            programs?
          </li>
          <li>
            Is there a limit to how many applications will be processed under
            the TR to PR immigration programs?
          </li>
          <li>
            Once the intake cap is reached on the TR to PR immigration programs,
            will they re-open?
          </li>
          <li>
            If an applicant currently lives and works in Quebec, can they apply
            to one of the TR to PR immigration programs if eligible?
          </li>
          <li>
            Once permanent residence status is granted under one of the TR to PR
            immigration programs, can the applicant live anywhere in Canada?
          </li>
          <li>
            If I have applied under a TR to PR immigration program, can I apply
            for an Open Work Permit?
          </li>
        </ul>
        <br />
        CONTACT US NOW FOR A FREE CONSULTATION TO DISCUSS YOUR PR OPTIONS
        <br />
        <br />
        The TR to PR immigration pathways were introduced via special public
        policies and aim to grant permanent status to temporary workers and
        international graduates who are in Canada and who possess the
        sought-after skills and experience needed to accelerate Canada’s
        economic recovery following the COVID 19 pandemic.
        <br />
        <br />
        Within these announcements, Immigration, Refugees, and Citizenship
        Canada published 4 special public policies, introducing these new
        pathways to Canadian permanent residence. These are:
        <br />
        <br />
        <ul>
          <li>International Graduates in Canada</li>
          <li>French-speaking International Graduates in Canada</li>
          <li>
            Foreign nationals in Canada with recent Canadian work experience in
            essential occupations
          </li>
          <li>
            French-speaking foreign nationals in Canada with Canadian work
            experience in essential occupations
          </li>
        </ul>
        <br />
        Who qualifies under the TR to PR immigration program targeting
        International Students?
        <br />
        <br />
        To qualify under the new immigration programs targeting international
        students, applicants must demonstrate that they have the following:
        <br />
        <br />
        <ul>
          1. Graduated from a program of study from a Designated Learning
          Institution in Canada after January 2017 that was at least 8 months in
          duration,
          <br />
          <br />
          2. Obtained one of the following credentials from the Designated
          Learning Institution:
          <br />
          <br />
          <ul>
            <li>a degree (Associate, Bachelor’s, Master’s, or Doctorate);</li>
            <li>
              a degree, diploma, certificate, or attestation issued on
              completion of a program of any duration leading to an occupation
              in a skilled trade; or
            </li>
            <li>
              one or more diploma/certificate/attestation where the following
              conditions are met:
            </li>
            <br />
            <ul>
              <li>
                For diplomas/certificates/attestations, each program of study
                must be at least 8 months in duration and the combined length of
                the credential(s) must be equivalent to a two-year credential
                (at least 16 months in duration).
              </li>
              <li>
                For the DVS and AVS, each program of study must be at least 900
                hours in duration and the combined program of study must be at
                least 1,800 hours in duration.
              </li>
              <br />
              <ul>
                <li>
                  When combining one AVS with one DVS, the length of the AVS may
                  be less than 900 hours if the combined length is at least
                  1,800 hours.
                </li>
              </ul>
            </ul>
          </ul>
          <br />
          3. Held a valid study permit throughout their education in Canada;
          <br />
          <br />
          4. Be currently employed in Canada with a valid work authorization to
          work
          <br />
          <br />
          5. Have attained a level of proficiency of at least CLB level 5 in
          English or French in the last 2 years if applying under the foreign
          national’s program and at least CLB level 5 in French if applying
          under the French-speaking program;
          <br />
          <br />
          6. Reside in Canada with valid temporary resident status (or be
          eligible to restore their status) and be physically present in Canada
          at the time the application for permanent residence is received and
          when the application is approved;
          <br />
          <br />
          7. Intend to reside in a province or territory other than Quebec.
        </ul>
        <br />
        In addition to the above criteria, all applicants (and dependent family
        members) must pass medical and criminal background checks and must not
        be inadmissible to Canada.
        <br />
        <br />
        Who qualifies under the TR to PR immigration program targeting essential
        occupations?
        <br />
        <br />
        To qualify under the new immigration programs targeting essential
        occupations, applicants must demonstrate that they have the following:
        <br />
        <br />
        <ul>
          1. At least one year of full-time or full-time equivalent work
          experience in an eligible essential worker or health- care worker
          within the last 3 years immediately prior to the submission of the
          application. The one year of work experience must be obtained in one
          or more of the eligible occupations as follows:
          <br />
          <br />
          <ul>
            <li>
              Health-Care Workers: the one year of work experience must have
              been acquired in one or more occupations listed below.
            </li>
            <li>
              Essential Worker: the one year of work experience must have been
              acquired in one or more occupations listed below, or in a
              combination of occupations classified as Health-Care Workers or
              Essential Worker.
            </li>
          </ul>
          <br />
          2. Are currently employed in Canada in any occupation at the time that
          the application for permanent residence is received;
          <br />
          <br />
          3. Meet the definition of a worker and held valid work authorization
          for the period of qualifying Canadian work experience;
          <br />
          <br />
          4. Have attained a level of proficiency of at least CLB level 4 in
          English or French in the last 2 years if applying under the foreign
          national’s program and at least CLB level 4 in French if applying
          under the French-speaking program;
          <br />
          <br />
          5. Reside in Canada with valid temporary resident status (or be
          eligible to restore their status) and be physically present in Canada
          at the time the application for permanent residence is received and
          when the application is approved;
          <br />
          <br />
          6. Intend to reside in a province or territory other than Quebec.
        </ul>
        <br />
        In addition to the above criteria, all applicants (and dependent family
        members) must pass medical and criminal background checks and must not
        be inadmissible to Canada.
        <br />
        <br />
        What occupations in the TR to PR immigration program qualify as an
        Essential Worker?
        <br />
        <br />
        To qualify under one of the public policies targeting Essential Workers,
        applicants must have at least 1 year of Canadian work experience in the
        last 3 years in one of the targeted occupations. Immigration, Refugees
        and Citizenship Canada have identified around 100 occupations that are
        considered essential. A full list of these occupations can be found
        here.
        <br />
        <br />
        What occupations in the TR to PR immigration program qualify as a
        Health-Care Worker?
        <br />
        <br />
        To qualify under one of the public policies targeting Health-Care
        Workers, applicants must have at least 1 year of Canadian work
        experience in the last 3 years in one of the following occupations:
        <br />
        <br />
        <ul>
          3011 Nursing co-ordinators and supervisors
          <br />
          3012 Registered nurses and registered psychiatric nurses
          <br />
          3111 Specialist physicians
          <br />
          3112 General practitioners and family physicians
          <br />
          3113 Dentists
          <br />
          3121 Optometrists
          <br />
          3122 Chiropractors
          <br />
          3124 Allied primary health practitioners
          <br />
          3125 Other professional occupations in health diagnosing and treating
          <br />
          3131 Pharmacists
          <br />
          3132 Dietitians and nutritionists
          <br />
          3141 Audiologists and speech-language pathologists
          <br />
          3142 Physiotherapists
          <br />
          3143 Occupational therapists
          <br />
          3144 Other professional occupations in therapy and assessment
          <br />
          3211 Medical laboratory technologists
          <br />
          3212 Medical laboratory technicians and pathologists’ assistants
          <br />
          3214 Respiratory therapists, clinical perfusionists and
          cardiopulmonary technologists
          <br />
          3215 Medical radiation technologists
          <br />
          3216 Medical sonographers
          <br />
          3217 Cardiology technologists and electrophysiological diagnostic
          technologists, n.e.c.
          <br />
          3219 Other medical technologists and technicians (except dental
          health)
          <br />
          3221 Denturists
          <br />
          3222 Dental hygienists and dental therapists
          <br />
          3223 Dental technologists, technicians and laboratory assistants
          <br />
          3231 Opticians
          <br />
          3232 Practitioners of natural healing
          <br />
          3233 Licensed practical nurses
          <br />
          3234 Paramedical occupations
          <br />
          3236 Massage therapists
          <br />
          3237 Other technical occupations in therapy and assessment
          <br />
          3411 Dental assistants
          <br />
          3413 Nurse aides, orderlies and patient service associates
          <br />
          3414 Other assisting occupations in support of health services
          <br />
          4151 Psychologists
          <br />
          4152 Social workers
          <br />
          4153 Family, marriage and other related counsellors
          <br />
          4165 Health policy researchers, consultants and program officers
          <br />
          4212 Social and community service workers
          <br />
          4412 Home support workers, housekeepers and related occupations
        </ul>
        <br />
        How do I apply to one of the TR to PR immigration programs?
        <br />
        <br />
        All applications must be submitted electronically with reference to the
        appropriate public policy the applicant qualifies under. IRCC released a
        new application portal specifically designed to process applications
        submitted under one of the TR to PR immigration programs.
        <br />
        <br />
        What documents do I need to apply for the new permanent resident
        immigration programs?
        <br />
        <br />
        Immigration, Refugees, and Citizenship Canada are yet to issue a
        documents checklist outlining all the required documentation, but
        applicants can expect to submit the following documents as part of their
        application:
        <br />
        <br />
        <ul>
          <li>Completed application forms;</li>
          <li>Civil status documents;</li>
          <li>
            Copy of education credential and transcripts of Canadian education
            (if applicable);
          </li>
          <li>Proof of language proficiency;</li>
          <li>Work reference letters from Canadian employer;</li>
          <li>Passport copy;</li>
          <li>Copies of all Canadian immigration permits;</li>
          <li>Police clearances;</li>
          <li>Medical examination results;</li>
          <li>Digital photo.</li>
        </ul>
        <br />
        All supporting documentation requested to assess whether a foreign
        national meets the conditions of the public policies must be included at
        the time of application.
        <br />
        <br />
        Do I have to demonstrate settlement funds when I apply under one of the
        TR to PR immigration programs?
        <br />
        <br />
        Unlike other immigration programs to Canada, the applicant is not
        required to demonstrate settlement funds when applying under one of
        these new immigration programs.
        <br />
        <br />
        How much does the TR to PR immigration programs cost?
        <br />
        <br />
        Applicants will need to pay a total processing fee of $1050CAD when they
        submit their application under one of these permanent residency
        programs.
        <br />
        <br />
        If an accompanying spouse or common-law partner is also included in the
        application, the applicant will also need to pay the processing fee for
        an accompanying spouse and dependent children.
        <br />
        <br />
        Is a job offer required to apply for the TR to PR immigration programs?
        <br />
        <br />
        Applicants do not need a job offer from a Canadian company to apply
        under one of these new programs. Eligibility under these programs
        focuses on the applicant’s previous education or work experience in
        Canada, not future employment offers.
        <br />
        <br />
        The public policies targeting Essential and Health-Care Workers require
        the applicant to have at least one year of Canadian work experience in
        the last 3 years.
        <br />
        <br />
        The public policies targeting International Graduates require the
        applicant to be currently working in Canada. Under these policies, there
        are no requirements on the type of Canadian work experience.
        <br />
        <br />
        How long will it take to process applications made under the TR to PR
        immigration programs?
        <br />
        <br />
        The public policies give no indication as to how long Immigration,
        Refugees, and Citizenship Canada will take to process these
        applications; however these programs are referred to as ‘accelerated’
        pathways to Canadian immigration. The objective behind these public
        policies is to allow foreign nationals and International Graduates the
        ability to become permanent residents of Canada to contribute to the
        country's economic recovery. IRCC has however committed to processing
        40,000 applications received under the TR to PR immigration programs in
        2021, with the remaining being processed in 2022.
        <br />
        <br />
        Can applicants' spouse and dependent children also be included in an
        application for permanent residence under the TR to PR immigration
        programs?
        <br />
        <br />
        Under all 4 public policies, eligible spouses or common-law partners, as
        well as dependent children, can be included in an application for
        permanent residence as accompanying dependents. This means that they
        will also be granted permanent residency status under these new
        programs.
        <br />
        <br />
        Is there a limit to how many applications will be processed under the TR
        to PR immigration programs?
        <br />
        <br />
        The special public policies for Essential Workers and International
        Graduates both have a limit on the number of applications that will be
        accepted per stream. These limits are:
        <br />
        <br />
        <ul>
          <li>40,000 applications from International Students;</li>
          <li>30,000 applications from Essential Workers;</li>
          <li>20,000 applications from Health- Care Worker.</li>
        </ul>
        <br />
        The intake cap for the International Students reached its 40,000 intake
        on May 7th, 2021 and the intake cap for Essential Workers was reached on
        July 16th, 2021.
        <br />
        <br />
        No intake limit has been set for the special public policies available
        for French-speaking Essential Workers and International Graduates. This
        means that Immigration, Refugees, and Citizenship Canada (IRCC) will
        process all eligible applications submitted under these 2 public
        policies so long as the application is submitted prior to November 5th,
        2021.
        <br />
        <br />
        <sp>French-speaking streams</sp>
        <br />
        <br />
        <Table />
        <br />
        <sp>General streams</sp>
        <br />
        <br />
        <TableGeneral />
        <br />
        Once the intake cap is reached on the TR to PR immigration programs,
        will they re-open?
        <br />
        <br />
        The public policy introducing these TR to PR immigration programs was
        only valid until the 5th of November 2021.
        <br />
        <br />
        IRCC accepted a total of 84,177 applications under the TR to PR pathway
        in 2021. The Canadian government recently released the updated
        immigration levels plan, which dedicated 72,000 permanent residence
        admissions to the TR to PR program over the next two years. It is
        unclear whether these admissions will be entirely from applications
        submitted last year, or if IRCC will reopen the program.
        <br />
        <br />
        If an applicant currently lives and works in Quebec, can they apply to
        one of the TR to PR immigration programs if eligible?
        <br />
        <br />
        Anyone who satisfies the program criteria may apply under these new
        immigration programs. This includes residents of Quebec. If the
        applicant is residing in Quebec at the time of the application, as part
        of the application process, they should demonstrate their intent to
        reside outside of Quebec.
        <br />
        <br />
        Once permanent residence status is granted under one of the TR to PR
        immigration programs, can the applicant live anywhere in Canada?
        <br />
        <br />
        All 4 of these immigration programs are aimed at immigrants who wish to
        settle in Canada but not in the province of Quebec.
        <br />
        <br />
        If I have applied under a TR to PR immigration program, can I apply for
        an Open Work Permit?
        <br />
        <br />
        Starting the 26th July 2021, applicants who have submitted an
        application under one of the TR to PR immigration programs are eligible
        to apply for a TR to PR open work permit.
        <br />
        <br />
        To apply for the TR to PR Open Work Permit, applicants must
        <br />
        <br />
        <ul>
          1. Have applied to one of the TR to PR immigration programs
          <br />
          2. Have valid work authorization in Canada
          <br />
          3. Hold a work permit that is set to expire within four months
          <br />
          4. Be currently residing in Canada
          <br />
          5. Hold temporary resident status, maintained status, or are eligible
          to restore their status
          <br />
          6. Continue to meet the language requirements for the TR to PR pathway
          stream applied under.
        </ul>
        <br />
        If approved, the TR to PR Open Work Permit will be issued until December
        31, 2022.
        <br />
        <br />
        How long will the TR to PR immigration programs be available?
        <br />
        <br />
        All 4 special public policies governing the TR to PR Immigration
        programs will come into effect May 6, 2021, and will close on November
        5, 2021, or once the intake cap of the applicable stream has been
        reached, whichever occurs first. Any application submitted after
        November 5, 2021, will not be processed.
        <br />
        <br />
        <bold>
          <italic>
            If you’re interested in beginning your Canadian immigration journey
            through one of the TR to PR immigration programs, contact us today
            to register for a free consultation!
          </italic>
        </bold>
        <br />
        <br />
        FIND OUT IF YOU QUALIFY FOR THE TR TO PR IMMIGRATION PROGRAMS.
        <br />
        <br />
      </h2>
    </div>
  );
}
