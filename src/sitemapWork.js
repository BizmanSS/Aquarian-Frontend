const sitemapWork = [
  { title: "Work In Canada", linkTo: "/work/work-in-canada" },
  {
    title: "Work Without a Permit",
    linkTo: "/work/work-without-a-permit",
    nestedLinks: [
      {
        title: "Business Visas",
        linkTo: "/work/work-without-a-permit/business-visas",
      },
    ],
  },
  {
    title: "Temporary Foreign Worker Program",
    linkTo: "/work/temporary-foreign-worker-program",
    nestedLinks: [
      {
        title: "Labour Market Impact Assesment",
        linkTo:
          "/work/temporary-foreign-worker-program/labour-maket-impact-assessment",
      },
      {
        title: "Canada Global Talent Stream",
        linkTo:
          "/work/temporary-foreign-worker-program/canada-global-talent-stream",
      },
    ],
  },
  {
    title: "International Mobility Program (IMP)",
    linkTo: "/work/international-mobility-program",
    nestedLinks: [
      {
        title: "Intra Company Transfer",
        linkTo: "/work/international-mobility-program/intra-company-transfer",
      },
      { title: "CUSMA", linkTo: "/work/international-mobility-program/cusma" },
      {
        title: "CETA Work Permits",
        linkTo: "/work/international-mobility-program/ceta-work-permits",
      },
    ],
  },
  {
    title: "Open Work Permits",
    linkTo: "/work/open-work-permits",
    nestedLinks: [
      {
        title: "Post Graduate Work Permit (PGWP)",
        linkTo: "/work/open-work-permits/post-graduate-work-permit",
      },
      {
        title: "International Experience Class (IEC)",
        linkTo: "/work/open-work-permits/international-experience-class",
      },
      {
        title: "Spousal Open Work Permit (SOWP)",
        linkTo: "/work/open-work-permits/spousal-open-work-permit",
      },
      {
        title: "Bridging Open Work Permit (BOWP)",
        linkTo: "/work/open-work-permits/bridging-open-work-permit",
      },
    ],
  },
];

export default sitemapWork;
