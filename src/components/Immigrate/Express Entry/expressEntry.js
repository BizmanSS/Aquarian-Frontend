import React from "react";
const Table = () => {
  const data = [
    { name: "Application Processing Fees for Canada PR", amount: "$850" },
    { name: "Include Spouse or Partner", amount: "$850" },
    { name: "Include a dependant child", amount: "$230 per child" },
    { name: "Right of Permanent Residence Fee per adult", amount: "$515" },
    { name: "Right of Permanent Residence Fee per child", amount: "Nil" },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>FEES</th>
          <th>CAD</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
const TableStudent = () => {
  const data = [
    { name: "1", amount: "$13,757" },
    { name: "2", amount: "$17,127" },
    { name: "3", amount: "$21,055" },
    { name: "4", amount: "$25,564" },
    { name: "5", amount: "$28,994" },
    { name: "6", amount: "$32,700" },
    { name: "7", amount: "$36,407" },
    { name: "For each additional family member", amount: "$3,706" },
    {
      name: (
        <p style={{ fontStyle: "italic" }}>Required amount as of May, 2023</p>
      ),
    },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Number of Family Members</th>
          <th>Funds Required</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default function ExpressEntry() {
  return (
    <>
      <div
        style={{
          background: "#E0E0E0",
        }}
      >
        <div className="AboutUsHeader">
          <p className="link">
            <a href="/">Home</a>
            {" > "}Immigrate
            {" > "}Express Entry
          </p>
          <div className="header-content">
            <h1 className="heading-about">Express Entry</h1>
          </div>
        </div>
        <h2 className="pages-content-div">
          The Canada Express Entry Program is an online Canada immigration
          system launched in January 2015 by the Government of Canada to
          organise and process applications for skilled workers who wish to
          immigrate to Canada and acquire Canadian permanent residence status.
          <br />
          <br />
          The system manages three main federal economic programs:
          <br />
          <br />
          <ul>
            <li>Federal Skilled Worker (FSW)</li>

            <li>Federal Skilled Trades (FST)</li>

            <li>Canadian Experience Class (CEC)</li>
          </ul>
          <br />
          (The Express Entry Program of Canada is a unique and fast-track
          immigration program based on points that facilitates the skilled
          workers to obtain Permanent Residency in Canada. The Government of
          Canada has adopted a progressive and unique approach for selecting
          skilled professionals and offering them entry to the nation as
          Permanent Residents. The system processes the applications of
          qualified immigrant applicants to migrate to Canada based on their
          Express Entry Points allocated for diverse factors such as experience,
          language proficiency, skills, and others.)
          <br />
          <br />
          <bold>Who is eligible to apply under Express Entry?</bold>
          <br />
          <br />
          Individuals with university or college degrees, skilled work
          experience and moderate proficiency in English and/or French are ideal
          Express Entry candidates.
          <br />
          <br />
          In order to submit a profile through the Express Entry system,
          candidates must also meet the eligibility requirements for one of the
          three federal programs:
          <br />
          <br />
          <ul>
            <li>Federal Skilled Worker (FSW)</li>

            <li>Federal Skilled Trades (FST)</li>

            <li>Canadian Experience Class (CEC)</li>
          </ul>{" "}
          <br />
          <bold>How to check your eligibility for Canada Express Entry? </bold>
          <br />
          <br />
          You are required to answer several questions for assessing your
          eligibility through Express Entry to work in Canada as a skilled
          worker and settle permanently. There are 3 programs under this system
          as already stated and every program has distinct qualification
          requirements to be fulfilled. You will be asked queries based on the
          following:
          <br /> <br />
          <ul>
            <li>
              <bold>Age</bold>
            </li>

            <li>
              <bold>Work Experience</bold>
            </li>

            <li>
              <bold>Education or Skills level </bold>
            </li>

            <li>
              <bold>Language capability </bold>
            </li>

            <li>
              <bold>Approved job offer</bold>
            </li>
          </ul>{" "}
          <br />
          <bold>How does EE work?</bold>
          <br />
          <br />
          <bold>Applying to Express Entry is a two-step process. </bold>
          <br />
          <br />
          Step 1: Create Your Profile
          <br />
          <br />
          The first step is to submit your complete profile which requires the
          following documents:
          <br /> <br />
          <ul>
            1. Language test results
            <br />
            2. Educational credential assessment report
            <br />
            3. A passport or travel document
          </ul>{" "}
          <br />
          A score under the CRS-Comprehensive Ranking System is given based on
          various factors.
          <br />
          <br />
          After the application is accepted into the pool, the candidate is
          provided a Job Seeker Validation Code and Express Entry Profile Number
          through which they can develop their resume in the Canada Job Bank.
          <br />
          <br />
          Step 2: Invitation to Apply
          <br />
          <br />
          After you submit your profile and you receive an invitation to apply
          for Canadian permanent if your CRS score makes the cut off of the
          latest draw.
          <br />
          <br />
          <bold>
            Permanent Residency Application -How to apply for Canada PR Visa
            online?
          </bold>
          <br />
          <br />
          Once you receive an ITA through Express Entry Canada, you will have 60
          days to apply to Immigration, Refugees, and Citizenship Canada (IRCC)
          for Canada PR. At this stage, you will be required to submit all the
          documents mentioned in the documentation checklist. At this point you
          will need to provide a more substantial application that includes
          reference letters, additional identity documents, police clearance
          certificates, and results of a medical examination.
          <br />
          <br />
          <bold>How Does Express Entry Choose People for PR?</bold>
          <br />
          <br />
          Once your profile has entered the pool of Express Entry Canada, you
          will be awarded points under the Comprehensive Ranking System (CRS)
          based on the information provided to the profile. The CRS is a
          points-based system that we use to assess and score your profile and
          rank it in the Express Entry pool. This system scores you on age,
          language proficiency, education, work experience and other
          adaptability factors on a total of 1200 points. Getting nominated by a
          Canadian province gets you an additional 600 points, almost
          guaranteeing your ITA.
          <br />
          <br />
          You will then be ranked against other people in the pool. Your ranking
          is based on the number of points you have. If your score is above the
          cut-off score in the latest draw, your profile will be selected
          (drawn) from the list of applications. You will then get an Invitation
          to Apply (ITA) for permanent residence as a skilled immigrant.
          <br />
          <br />
          <bold>How much does Express Entry cost?</bold>
          <br />
          <br />
          <Table /> <br />
          Additional costs include- Language tests, Educational Credential
          Assessment (ECA), Biometrics, Medical examination, Police clearance
          certificates, provincial immigration fees if you apply through a PNP.
          <br />
          <br />
          Sufficient Proof of Funds
          <br />
          <br />
          unless you are applying under the Canadian Experience Class program or
          have a valid arranged employment offer, you will need to demonstrate
          you have sufficient funds to support your resettlement in Canada.
          These settlement funds are not fees paid to the government but you
          must have access to them to be approved for a permanent residence
          visa. The amounts per family size are mentioned in the table below:
          <br />
          <br />
          <TableStudent /> <br />
          <bold>How long does Express Entry take?</bold>
          <br />
          <br />
          <bold>
            Express Entry can take as little as six months to process,{" "}
          </bold>
          from submission of the Express Entry profile to the issuance of a
          permanent resident visa. However, not all cases will proceed this
          quickly. Your Express Entry profile will remain active in the pool of
          candidates for 12 months if you do not receive an invitation to apply.
          If after 12 months you have not received an invitation, you are
          welcome to resubmit your profile and remain in the pool. To break it
          down further:
          <br />
          <br />
          <ul>
            <li>
              Your profile will remain valid for 12 months in the Express Entry
              pool.{" "}
            </li>

            <li>
              Upon issuance of the ITA, you will have 60 days to provide the
              requested full application of documents.
            </li>

            <li>
              Once the immigration authorities receive your complete
              application, your permanent resident visa, IRCC may process your
              application in about six months.
            </li>
          </ul>
          <br />
          <bold>How are Express Entry points calculated?</bold>
          <br />
          <br />
          When people refer to Canada’s “Express Entry points”, they are usually
          referring to the Comprehensive Ranking System (CRS) score. Canada uses
          the CRS score to rank candidates in the Express Entry pool using a
          series of factors, including:
          <br /> <br />
          <ul>
            <li>Age;</li>

            <li>Level of education;</li>

            <li>Proficiency in French or English;</li>

            <li>Foreign and Canadian work experience;</li>

            <li>Spouse factors; and</li>

            <li>Connections to Canada</li>
          </ul>
          <br />
          For an estimate of your CRS score, use our CRS calculator tool.
          <br />
          <br />
          <bold>How Can I Increase my CRS Score?</bold>
          <br />
          <br />
          <ul>
            1. <bold>RETAKE THE IELTS</bold>
            <br />
            <br />
            Improving your IELTS score is the number one way to increase your
            points. On their own, good IELTS results can get you up to 160
            points.
            <br />
            <br />
            But if you have good IELTS and post-secondary education can get you
            an additional 50 points. Good IELTS and at least three years of work
            experience can get you another 50 points.
            <br />
            <br />
            You need to score at least Canadian Language Benchmark (CLB) 7 to be
            eligible for Express Entry under the Federal Skilled Worker program,
            which is at least 6.0 on each language ability on the IELTS. But if
            you can score CLB 9 in all language abilities, you could be looking
            at up to 260 Express Entry points for just your language ability.
            <br />
            <br />
            You can also take the IELTS as many times as you want to. You can
            even update your Express Entry profile with new IELTS test results
            after you submit your profile to the pool.
            <br />
            <br />
            2. <bold>WORK EXPERIENCE</bold>
            <br />
            <br />
            Since Express Entry manages applications to economic immigration
            streams, your work experience is a big part of calculating your
            Express Entry points. That said, it’s not very easy to accumulate
            more years of work experience just to improve your Express Entry
            points.
            <br />
            <br />
            A lot of candidates don’t leverage the work experience that they do
            have as much as possible, though. Express Entry uses the National
            Occupational Classification (NOC) matrix to assign points to all
            occupations. Choosing the right NOC code is one of the simplest ways
            to increase your score.
            <br />
            <br />
            That said, it’s worth it to spend some time finding exactly which
            NOC codes accurately reflect your career history while getting you
            as many Express Entry points as possible. The NOC matrix can be
            confusing to sort through, so consulting an expert to figure out
            which NOC codes you can claim can be very helpful.
            <br />
            <br />
            3. <bold>SPOUSAL POINTS</bold>
            <br />
            <br />
            It may not apply to some candidates, but if you have a spouse or
            common-law partner, you may be missing out on some points you can
            claim.
            <br />
            <br />
            There are three possibilities here, and it’s worth looking into them
            all.
            <br />
            <br />
            First, your spouse or partner may get you more points. By retaking a
            language test, or getting an educational credential assessment (ECA)
            for any post-secondary education they have, your spouse or partner
            could increase your Express Entry points.
            <br />
            <br />
            Second, you may actually have a higher score as a single applicant.
            Since your score changes depending on whether you have an
            accompanying spouse or partner, you could increase your score by
            listing them as non-accompanying. If you receive permanent
            residence, you can still sponsor them to join you in Canada, but it
            does mean a period of separation.
            <br />
            <br />
            Third, your spouse may actually be a stronger applicant. You should
            definitely run through the exercise of trying to calculate how many
            points your spouse would get if they were the principal applicant,
            with or without you accompanying them.
            <br />
            <br />
            4. <bold>JOB OFFER</bold>
            <br />
            <br />
            An eligible job offer from a Canadian employer can get you between
            50 to 200 additional points. Spend time on the Canada Job Bank, as
            well as private job boards and social networking sites to try to
            connect with Canadian employers in your field.
            <br />
            <br />
            5. <bold>PROVINCIAL NOMINATION</bold> <br />
            <br />
            If you receive a nomination from a province, you get 600 additional
            points. Many provinces operate a nomination program aligned with
            Express Entry, but it’s usually up to the candidate to figure out
            which programs they might be eligible for and how to apply. Keep in
            mind that applying for a provincial nomination is usually a
            completely separate application process.
            <br />
            <br />
            6. <bold>Education</bold>
            <br />
            <br />
            Going back to school is a pretty big investment to increase your
            score, but it can also have a big impact. A short program like a
            one-year post-secondary certificate could get you a lot of points.
            If you already have one post-secondary degree of three years or
            more, worth 120 points, and take a second one-year program, you can
            claim an additional 8 points for just education. If you already had
            CLB 9, and two years of Canadian work experience, you can claim an
            additional 50 points for skills transferability. That’s 58 total
            additional Express Entry points.
            <br />
            <br />
            Canadian educational credentials are highly valued in Express Entry,
            and being an international student can open a lot of other doors to
            staying in Canada permanently that you might not otherwise be
            eligible for.
            <br />
            <br />
          </ul>
          <bold>
            What is the difference between Express Entry eligibility points and
            CRS score?
          </bold>
          <br />
          <br />
          To apply under the Federal Skilled Worker Program (FSWP), candidates
          must first score at least 67 on the FSW eligibility points grid. Once
          an FSW candidate, or any other Express Entry candidate, enters the
          Express Entry pool, they will receive a CRS score. Canada uses the CRS
          score rank all candidates against each other in the Express Entry
          pool. Approximately every two weeks, the Government of Canada holds an
          Express Entry draw, setting a minimum CRS score cut-off. Those in the
          pool with a CRS score above the cut-off will receive an Invitation to
          Apply for Canadian permanent residence.
          <br />
          <br />
          <bold>Is there a minimum score for Express Entry?</bold>
          <br />
          <br />
          The minimum CRS score required to receive an Invitation to Apply (ITA)
          for Canadian permanent residence changes from draw to draw. For this
          reason, it is important to take steps to improve your ranking in the
          pool of candidates to increase your chances of receiving an
          invitation.
          <br />
          <br />
          <bold>Express Entry Draws</bold>
          <br />
          <br />
          What is an Express Entry draw?
          <br />
          <br />
          Approximately every two weeks, Canada issues a round of invitations to
          candidates with a profile in the Express Entry pool that meet a
          specified CRS cut-off. Candidates that receive an invitation in an
          Express Entry draw may apply for Canadian permanent residence status.
          <br />
          <br />
          When are Express Entry draws?
          <br />
          <br />
          While there is no set schedule for Express Entry draws, they are
          typically held every two weeks, usually on a Wednesday.
          <br />
          <br />
          What is the Express Entry tie-breaking rule?
          <br />
          <br />
          The tie-breaking rule is a date used by IRCC to determine which
          candidates with the same CRS score receive an ITA. IRCC uses the
          tie-breaking rule if there are multiple profiles with the same score
          as the CRS cut-off. This helps to control the number of ITAs issued in
          each draw. If a candidate’s score is the same as the CRS cut-off, they
          will only receive an ITA if they submitted a profile before the
          tie-breaking rule.
          <br />
          <br />
          <bold>What are the features of the Express Entry Program? </bold>
          <br />
          <br />
          The Express Entry Program of Canada is a unique and fast-track
          immigration program based on points that facilitates the skilled
          workers to obtain Permanent Residency in Canada. The Government of
          Canada has adopted a progressive and unique approach for selecting
          skilled professionals and offering them entry to the nation as
          Permanent Residents. The system processes the applications of
          qualified immigrant applicants to migrate to Canada based on their
          Express Entry Points allocated for diverse factors such as experience,
          language proficiency, skills, and others.
          <br />
          <br />
          Your chances of receiving the <bold>
            ITA - Invitation to Apply{" "}
          </bold>{" "}
          for Canada PR Visa increases as you score higher points. Normally, PR
          Visa applications through this program are processed within or less
          than 6 to 12 months.
          <br />
          <br />
          <bold>The key features of the program are: </bold>
          <br />
          <br />
          <ul>
            <li>
              It is an online program that is open all around the year with no
              cap on applicants.{" "}
            </li>

            <li>
              This program is applicable only for
              <bold> Canadian Experience Class, </bold>Federal Skilled Trades,
              and Federal Skilled Worker Programs.{" "}
            </li>
            <li>
              {" "}
              You are required to submit an EOI - Expression of Interest and
              furnish an application through any category of job specified in 0,
              A, and B Skill Levels.{" "}
            </li>

            <li>
              The evaluation of your profile will be based on your points score
              after which you will be admitted to the applicant pool.
            </li>

            <li>
              Employers and Provinces in Canada will access this pool and
              identify talents meeting their requirements.{" "}
            </li>

            <li>
              The candidates in the pool with the highest points are offered an
              ITA for PR Visa.{" "}
            </li>

            <li>
              The number of ITAs offered is determined by the Yearly Immigration
              Level.
            </li>
          </ul>
        </h2>
      </div>
    </>
  );
}
