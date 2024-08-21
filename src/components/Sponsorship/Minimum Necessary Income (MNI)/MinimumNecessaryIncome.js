import React from "react";
const Table = () => {
  const data = [
    { size: "2 persons", mn20: "$32,270", mn19: "$41,007", mn18: "$40,379" },
    { size: "3 persons", mn20: "$39,672", mn19: "$50,414", mn18: "$49,641" },
    { size: "4 persons", mn20: "$48,167", mn19: "$61,209", mn18: "$60,271" },
    { size: "5 persons", mn20: "$54,630", mn19: "$69,423", mn18: "$68,358" },
    { size: "6 persons", mn20: "$61,613", mn19: "$78,296", mn18: "$77,095" },
    { size: "7 persons", mn20: "$68,598", mn19: "$87,172", mn18: "$85,835" },
    {
      size: "If more than 7 persons, for each additional person, add",
      mn20: "$6,985",
      mn19: "$8,876",
      mn18: "$8,740",
    },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Size of Family Unit</th>
          <th>Minimum Income 2020</th>
          <th>Minimum Income 2019</th>
          <th>Minimum Income 2018</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.size}</td>
            <td>{item.mn20}</td>
            <td>{item.mn19}</td>
            <td>{item.mn18}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default function MinimumNecessaryIncome() {
  return (
    <div
      style={{
        background: "#E0E0E0",
      }}
    >
      <div className="AboutUsHeader">
        <p className="link">
          <a href="/">Home</a>
          {" > "}Sponsorship
          {" > "}Minimum Necessary Income (MNI)
        </p>
        <div className="header-content">
          <h1 className="heading-about">Minimum Necessary Income (MNI)</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        Some family sponsorship programs require that the sponsor meet a minimum
        income level to support themselves and their family members, including
        the family members they are applying to sponsor. To assess their ability
        to financially support their family members, IRCC uses the Minimum
        Necessary Income (MNI).
        <br />
        <br />
        Depending on the program under which they are applying, and where they
        live in Canada, a citizen or permanent resident can only be deemed
        eligible to sponsor one or more family members to Canada if they meet
        the Minimum Necessary Income (MNI) for their family unit size. The
        family unit size includes those they currently support in Canada as well
        as those they intend to sponsor. If applying to the parent and
        grandparent sponsorship program, the sponsor must prove that they have
        exceeded the low income cut-off for three consecutive years and sign an
        undertaking that promises to repay any and all social assistance
        received by their family members.
        <br />
        <br />
        <sp>Federal Minimum Necessary Income for Sponsorship</sp>
        <br />
        <br />
        Sponsors living anywhere in Canada except the province of Quebec must
        meet or exceed the minimum income requirements depending on the size of
        their family.
        <br />
        <br />
        <sp>Minimum Necessary Income (MNI)</sp>
        <br />
        <br />
        The MNI is updated annually and applies to all relevant sponsorship
        programs for sponsors living in Canada but outside of the province of
        Quebec. Sponsors must provide their Notice of Assessment from the Canada
        Revenue Agency to prove they meet the minimum income for the following
        years:
        <br />
        <br />
        <Table />
        <br />
        <sp>How to Calculate Family Unit Size</sp>
        <br />
        <br />
        The low income cut-off will be determined by the size of both your
        family unit in Canada and that of the individuals you wish to sponsor to
        Canada. To calculate the size of your family unit, you must count:
        <br />
        <br />
        <ul>
          <li>Yourself</li>
          <li>Your spouse or common-law partner</li>
          <li>Your dependent children, if any</li>
        </ul>
        <br />
        and
        <br />
        <br />
        <ul>
          <li>The number of persons you are applying to sponsor</li>
          <li>
            The number of dependent family members of that person, whether or
            not they are accompanying them.
          </li>
          <li>
            The number of persons currently covered by valid undertakings that
            you have signed or co-signed in the past
          </li>
          <li>
            The number of persons currently covered by valid undertakings that
            your co-signed has signed or co-signed in the past
          </li>
        </ul>
        <br />
        <br />
      </h2>
    </div>
  );
}
