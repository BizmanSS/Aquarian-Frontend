const sitemapImmigrate = [
  { title: 'Permanent Residency', linkTo: '/immigrate/permanent-residency' },
  {
    title: 'Express Entry',
    linkTo: '/immigrate/express-entry',
    nestedLinks: [
      {
        title: 'Federal Skilled Worker Class',
        linkTo: '/immigrate/express-entry/federal-skilled-worker-class',
      },
      {
        title: 'Federal Skilled Trades Class',
        linkTo: '/immigrate/express-entry/federal-skilled-trades-class',
      },
      {
        title: 'Canadian Experience Class',
        linkTo: '/immigrate/express-entry/canadian-experience-class',
      },
      {
        title: 'Comprehensive Ranking System (CRS)',
        linkTo: '/crs-calculator',
      },
    ],
  },
  {
    title: 'Provincial Nominee Program',
    linkTo: '/immigrate/provincial-nominee-program',
    nestedLinks: [
      {
        title: 'Alberta Immigrant Nominee Program',
        linkTo:
          '/immigrate/provincial-nominee-program/alberta-immigrant-nominee-program',
        nested: [
          {
            title: 'Alberta Opportunity Stream',
            linkTo:
              '/immigrate/provincial-nominee-program/alberta-immigrant-nominee-program/alberta-opportunity-stream',
          },
          {
            title: 'Alberta Express Entry',
            linkTo:
              '/immigrate/provincial-nominee-program/alberta-immigrant-nominee-program/alberta-express-entry',
          },
          {
            title: 'Alberta Accelerated Tech Pathway',
            linkTo:
              '/immigrate/provincial-nominee-program/alberta-immigrant-nominee-program/alberta-accelerated-tech-pathway',
          },
          {
            title: 'Alberta Farm Stream',
            linkTo:
              '/immigrate/provincial-nominee-program/alberta-immigrant-nominee-program/alberta-farm-stream',
          },
          {
            title: 'Alberta Graduate Entrepreneur Stream',
            linkTo:
              '/immigrate/provincial-nominee-program/alberta-immigrant-nominee-program/alberta-graduate-entrepreneur-stream',
          },
          {
            title: 'Alberta Foreign Graduate Entrepreneur Stream',
            linkTo:
              '/immigrate/provincial-nominee-program/alberta-immigrant-nominee-program/alberta-foreign-graduate-entrepreneur-stream',
          },
          {
            title: 'Alberta Tourism and Hospitatlity Stream',
            linkTo:
              '/immigrate/provincial-nominee-program/alberta-immigrant-nominee-program/alberta-tourism-and-hospitatlity-stream',
          },
          {
            title: 'Alberta Rural Renewal Stream',
            linkTo:
              '/immigrate/provincial-nominee-program/alberta-immigrant-nominee-program/alberta-rural-renewal-stream',
          },
          {
            title: 'Alberta Rural Entrepreneur',
            linkTo:
              '/immigrate/provincial-nominee-program/alberta-immigrant-nominee-program/alberta-rural-entrepreneur',
          },
        ],
      },
      {
        title: 'British Columbia',
        linkTo: '/immigrate/provincial-nominee-program/british-columbia',
        nested: [
          {
            title: 'British Columbia Skilled Worker',
            linkTo:
              '/immigrate/provincial-nominee-program/british-columbia/british-columbia-skilled-worker',
            nestLink: [
              {
                title: 'British Columbia Healthcare Professional',
                linkTo:
                  'immigrate/provincial-nominee-program/british-columbia/british-columbia-skilled-worker/british-columbia-healthcare-professional',
              },
              {
                title: 'British Columbia International Graduate',
                linkTo:
                  '/immigrate/provincial-nominee-program/british-columbia/british-columbia-skilled-worker/british-columbia-international-graduate',
              },
              {
                title: 'British Columbia International Post-Graduate',
                linkTo:
                  '/immigrate/provincial-nominee-program/british-columbia/british-columbia-skilled-worker/british-columbia-international-post-graduate',
              },
              {
                title:
                  'British Columbia Entry Level and Semi-Skilled Worker (ELSS)',
                linkTo:
                  '/immigrate/provincial-nominee-program/british-columbia/british-columbia-skilled-worker/british-columbia-entry-level-and-semi-skilled-worker',
              },
            ],
          },
          {
            title: 'British Columbia Entrepreneur Immigration',
            linkTo:
              '/immigrate/provincial-nominee-program/british-columbia/british-columbia-entrepreneur-immigration',
            nestLink: [
              {
                title: 'British Columbia Entrepreneur Stream',
                linkTo:
                  '/immigrate/provincial-nominee-program/british-columbia/british-columbia-entrepreneur-immigration/british-columbia-entrepreneur-stream',
              },
              {
                title: 'British Columbia Entrepreneur Regional Pilot',
                linkTo:
                  '/immigrate/provincial-nominee-program/british-columbia/british-columbia-entrepreneur-immigration/british-columbia-entrepreneur-regional-pilot',
              },
              {
                title: 'British Columbia Strategic Projects',
                linkTo:
                  '/immigrate/provincial-nominee-program/british-columbia/british-columbia-entrepreneur-immigration/british-columbia-strategic-projects',
              },
            ],
          },
          {
            title: 'British Columbia Pilot Program',
            linkTo:
              '/immigrate/provincial-nominee-program/british-columbia/british-columbia-pilot-program',
            nestLink: [
              {
                title: 'British Columbia PNP Tech Pilot',
                linkTo:
                  '/immigrate/provincial-nominee-program/british-columbia/british-columbia-pilot-program/british-columbia-pnp-tech-pilot',
              },
            ],
          },
        ],
      },
      {
        title: 'Manitoba',
        linkTo: '/immigrate/provincial-nominee-program/manitoba',
        nested: [
          {
            title: 'Skilled Workers in Manitoba (SWM)',
            linkTo:
              '/immigrate/provincial-nominee-program/manitoba/skilled-workers-in-manitoba',
            nestLink: [
              {
                title: 'Skilled Workers in Manitoba Stream',
                linkTo:
                  '/immigrate/provincial-nominee-program/manitoba/skilled-workers-in-manitoba/skilled-workers-in-manitoba-stream',
              },
              {
                title: 'Manitoba Experience Pathway',
                linkTo:
                  '/immigrate/provincial-nominee-program/manitoba/skilled-workers-in-manitoba/manitoba-experience-pathway',
              },
              {
                title: 'Manitoba Employer Direct Recruitment Pathway',
                linkTo:
                  '/immigrate/provincial-nominee-program/manitoba/skilled-workers-in-manitoba/manitoba-employer-direct-recruitment-pathway',
              },
            ],
          },
          {
            title: 'Skilled Workers Overseas (SWO)',
            linkTo:
              '/immigrate/provincial-nominee-program/manitoba/skilled-workers-overseas',
            nestLink: [
              {
                title: 'Manitoba Skilled Workers Overseas Stream',
                linkTo:
                  '/immigrate/provincial-nominee-program/manitoba/skilled-workers-overseas/manitoba-skilled-workers-overseas-stream',
              },
              {
                title: 'Manitoba Express Entry Pathway',
                linkTo:
                  '/immigrate/provincial-nominee-program/manitoba/skilled-workers-overseas/manitoba-express-entry-pathway',
              },
              {
                title: 'Manitoba Human Capital Pathway',
                linkTo:
                  '/immigrate/provincial-nominee-program/manitoba/skilled-workers-overseas/manitoba-human-capital-pathway',
              },
            ],
          },
          {
            title: 'Manitoba International Education Stream (IES)',
            linkTo:
              '/immigrate/provincial-nominee-program/manitoba/manitoba-international-education-stream',
            nestLink: [
              {
                title: 'Manitoba Career Employment Pathway',
                linkTo:
                  '/immigrate/provincial-nominee-program/manitoba/manitoba-international-education-stream/manitoba-career-employment-pathway',
              },
              {
                title: 'Manitoba Graduate Internship Pathway',
                linkTo:
                  '/immigrate/provincial-nominee-program/manitoba/manitoba-international-education-stream/manitoba-graduate-internship-pathway',
              },
              {
                title: 'Manitoba International Student Entreprenuer Pilot',
                linkTo:
                  '/immigrate/provincial-nominee-program/manitoba/manitoba-international-education-stream/manitoba-international-student-entreprenuer-pilot',
              },
            ],
          },
          {
            title: 'Manitoba Business Investor Stream (BIS)',
            linkTo:
              '/immigrate/provincial-nominee-program/manitoba/manitoba-business-investor-stream',
            nestLink: [
              {
                title: 'Manitoba Entrepreneur Pathway',
                linkTo:
                  '/immigrate/provincial-nominee-program/manitoba/manitoba-business-investor-stream/manitoba-entrepreneur-pathway',
              },
              {
                title: 'Manitoba Farm Investor Pathway',
                linkTo:
                  '/immigrate/provincial-nominee-program/manitoba/manitoba-business-investor-stream/manitoba-farm-investor-pathway',
              },
            ],
          },
        ],
      },
      {
        title: 'New Brunswick',
        linkTo: '/immigrate/provincial-nominee-program/new-brunswick',
        nested: [
          {
            title: 'New Brunswick Express Entry Labour Market Stream',
            linkTo:
              '/immigrate/provincial-nominee-program/new-brunswick/new-brunswick-express-entry-labour-market-stream',
          },
          {
            title: 'New Brunswick Skilled Workers with Employer Support',
            linkTo:
              '/immigrate/provincial-nominee-program/new-brunswick/new-brunswick-skilled-workers-with-employer-support',
          },
          {
            title: 'New Brunswick Strategic Initiative',
            linkTo:
              '/immigrate/provincial-nominee-program/new-brunswick/new-brunswick-strategic-initiative',
          },
          {
            title: 'New Brunswick Business Immigration Stream',
            linkTo:
              '/immigrate/provincial-nominee-program/new-brunswick/new-brunswick-business-immigration-stream',
          },
          {
            title: 'New Brunswick Atlantic Immigration  Program',
            linkTo:
              '/immigrate/provincial-nominee-program/new-brunswick/new-brunswick-atlantic-immigration-program',
          },
          {
            title:
              'New Brunswick Private Career College Graduate Pilot Program ',
            linkTo:
              '/immigrate/provincial-nominee-program/new-brunswick/new-brunswick-private-career-college-graduate-pilot-program',
          },
          {
            title: 'New Brunswick Critical Worker Pilot',
            linkTo:
              '/immigrate/provincial-nominee-program/new-brunswick/new-brunswick-critical-worker-pilot',
          },
        ],
      },
      {
        title: 'Newfoundland and Labrador',
        linkTo:
          '/immigrate/provincial-nominee-program/newfoundland-and-labrador',
        nested: [
          {
            title: 'Newfoundland and Labrador Express Entry Skilled Worker',
            linkTo:
              '/immigrate/provincial-nominee-program/newfoundland-and-labrador/newfoundland-and-labrador-express-entry-skilled-worker',
          },
          {
            title: 'Newfoundland and Labrador Skilled Worker Category',
            linkTo:
              '/immigrate/provincial-nominee-program/newfoundland-and-labrador/newfoundland-and-labrador-skilled-worker-category',
          },
          {
            title: 'Newfoundland and Labrador International Graduate Category',
            linkTo:
              '/immigrate/provincial-nominee-program/newfoundland-and-labrador/newfoundland-and-labrador-international-graduate-category',
          },
          {
            title:
              'Newfoundland and Labrador International Entrepreneur Category',
            linkTo:
              '/immigrate/provincial-nominee-program/newfoundland-and-labrador/newfoundland-and-labrador-international-entrepreneur-category',
          },
          {
            title:
              'Newfoundland and Labrador International Graduate Entrepreneur Category',
            linkTo:
              '/immigrate/provincial-nominee-program/newfoundland-and-labrador/newfoundland-and-labrador-international-graduate-entrepreneur-category',
          },
        ],
      },
      {
        title: 'Northwest Territories',
        linkTo: '/immigrate/provincial-nominee-program/northwest-territories',
        nested: [
          {
            title: 'Northwest Territories Express Entry',
            linkTo:
              '/immigrate/provincial-nominee-program/northwest-territories/northwest-territories-express-entry',
          },
          {
            title: 'Northwest Territories Employer Driven',
            linkTo:
              '/immigrate/provincial-nominee-program/northwest-territories/northwest-territories-employer-driven',
            nestLink: [
              {
                title:
                  'Northwest Territories Entry Level/ Semi-Skilled Occupation',
                linkTo:
                  '/immigrate/provincial-nominee-program/northwest-territories/northwest-territories-employer-driven/northwest-territories-entry-level/semi-skilled-occupation',
              },
              {
                title: 'Northwest Territories Skilled Workers',
                linkTo:
                  '/immigrate/provincial-nominee-program/northwest-territories/northwest-territories-employer-driven/northwest-territories-skilled-workers',
              },
            ],
          },
          {
            title: 'Northwest Territories Business Driven',
            linkTo:
              '/immigrate/provincial-nominee-program/northwest-territories/northwest-territories-business-driven',
          },
          {
            title: 'Northwest Territories French- Speaking',
            linkTo:
              '/immigrate/provincial-nominee-program/northwest-territories/northwest-territories-french-speaking',
          },
        ],
      },
      {
        title: 'Nova Scotia',
        linkTo: '/immigrate/provincial-nominee-program/nova-scotia',
        nested: [
          {
            title: 'Nova Scotia Experience: Express Entry',
            linkTo:
              '/immigrate/provincial-nominee-program/nova-scotia/nova-scotia-experience-express-entry',
          },
          {
            title: 'Nova Scotia Entrepreneur Category',
            linkTo:
              '/immigrate/provincial-nominee-program/nova-scotia/nova-scotia-entrepreneur-category',
          },
          {
            title: 'Nova Scotia International Graduate Entrepreneur Category',
            linkTo:
              '/immigrate/provincial-nominee-program/nova-scotia/nova-scotia-international-graduate-entrepreneur-category',
          },
          {
            title: 'Nova Scotia International Graduates in Demand',
            linkTo:
              '/immigrate/provincial-nominee-program/nova-scotia/nova-scotia-international-graduates-in-demand',
          },
          {
            title: 'Nova Scotia Skilled Worker Category',
            linkTo:
              '/immigrate/provincial-nominee-program/nova-scotia/nova-scotia-skilled-worker-category',
          },
          {
            title: 'Nova Scotia Occupations In Demand',
            linkTo:
              '/immigrate/provincial-nominee-program/nova-scotia/nova-scotia-occupations-in-demand',
          },
          {
            title: 'Nova Scotia Labour Market Priorities',
            linkTo:
              '/immigrate/provincial-nominee-program/nova-scotia/nova-scotia-labour-market-priorities',
          },
          {
            title: 'Nova Scotia Labour Market Priorities for Physicians',
            linkTo:
              '/immigrate/provincial-nominee-program/nova-scotia/nova-scotia-labour-market-priorities-for-physicians',
          },
          {
            title: 'Nova Scotia Physician Stream',
            linkTo:
              '/immigrate/provincial-nominee-program/nova-scotia/nova-scotia-physician-stream',
          },
          {
            title: 'Nova Scotia Critical Construction Worker Pilot',
            linkTo:
              '/immigrate/provincial-nominee-program/nova-scotia/nova-scotia-critical-construction-worker-pilot',
          },
        ],
      },
      {
        title: 'Ontario',
        linkTo: '/immigrate/provincial-nominee-program/ontario',
        nested: [
          {
            title: 'Ontario Employer Job Offer Stream',
            linkTo:
              '/immigrate/provincial-nominee-program/ontario/ontario-employer-job-offer-stream',
            nestLink: [
              {
                title: 'Ontario Foreign Worker',
                linkTo:
                  '/immigrate/provincial-nominee-program/ontario/ontario-employer-job-offer-stream/ontario-foreign-worker',
              },
              {
                title: 'Ontario International Student',
                linkTo:
                  '/immigrate/provincial-nominee-program/ontario/ontario-employer-job-offer-stream/ontario-international-student',
              },
              {
                title: 'Ontario In-Demand Stream',
                linkTo:
                  '/immigrate/provincial-nominee-program/ontario/ontario-employer-job-offer-stream/ontario-in-demand-stream',
              },
            ],
          },
          {
            title: 'Ontario Post Graduate Stream',
            linkTo:
              '/immigrate/provincial-nominee-program/ontario/ontario-post-graduate-stream',
            nestLink: [
              {
                title: "Ontario Master's Graduate Stream",
                linkTo:
                  '/immigrate/provincial-nominee-program/ontario/ontario-post-graduate-stream/ontario-master-graduate-stream',
              },
              {
                title: 'Ontario PhD Graduate Stream',
                linkTo:
                  '/immigrate/provincial-nominee-program/ontario/ontario-post-graduate-stream/ontario-phd-graduate-stream',
              },
            ],
          },
          {
            title: 'Ontario Express Entry',
            linkTo:
              '/immigrate/provincial-nominee-program/ontario/ontario-express-entry',
            nestLink: [
              {
                title: 'Ontario Human Capital Priority Stream',
                linkTo:
                  '/immigrate/provincial-nominee-program/ontario/ontario-express-entry/ontario-human-capital-priority-stream',
              },
              {
                title: 'Ontario Skilled Trade Stream',
                linkTo:
                  '/immigrate/provincial-nominee-program/ontario/ontario-express-entry/ontario-skilled-trade-stream',
              },
              {
                title: 'Ontario French-speaking Skilled Workers Stream',
                linkTo:
                  '/immigrate/provincial-nominee-program/ontario/ontario-express-entry/ontario-french-speaking-skilled-workers-stream',
              },
            ],
          },
        ],
      },
      {
        title: 'Prince Edward Island',
        linkTo: '/immigrate/provincial-nominee-program/prince-edward-island',
        nested: [
          {
            title: 'PEI Express Entry',
            linkTo:
              '/immigrate/provincial-nominee-program/prince-edward-island/pei-express-entry',
          },
          {
            title: 'PEI Labor Impact',
            linkTo:
              '/immigrate/provincial-nominee-program/prince-edward-island/pei-labor-impact',
            nestLink: [
              {
                title: 'PEI Skilled Workers in PEI',
                linkTo:
                  '/immigrate/provincial-nominee-program/prince-edward-island/pei-labor-impact/pei-skilled-workers-in-pei',
              },
              {
                title: 'PEI Skilled Workers Outside Canada',
                linkTo:
                  '/immigrate/provincial-nominee-program/prince-edward-island/pei-labor-impact/pei-skilled-worker-outside-canada',
              },
              {
                title: 'PEI International Graduate',
                linkTo:
                  '/immigrate/provincial-nominee-program/prince-edward-island/pei-labor-impact/pei-international-graduate',
              },
              {
                title: 'PEI Critical Worker',
                linkTo:
                  '/immigrate/provincial-nominee-program/prince-edward-island/pei-labor-impact/pei-critical-worker',
              },
            ],
          },
          {
            title: 'PEI Business Impact',
            linkTo:
              '/immigrate/provincial-nominee-program/prince-edward-island/pei-business-impact',
          },
        ],
      },
      {
        title: 'Saskatchewan',
        linkTo: '/immigrate/provincial-nominee-program/saskatchewan',
        nested: [
          {
            title: 'Saskatchewan International Skilled Worker',
            linkTo:
              '/immigrate/provincial-nominee-program/saskatchewan/saskatchewan-international-skilled-worker',
            nestLink: [
              {
                title: 'Saskatchewan Express Entry',
                linkTo:
                  '/immigrate/provincial-nominee-program/saskatchewan/saskatchewan-international-skilled-worker/saskatchewan-express-entry',
              },
              {
                title: 'Saskatchewan Employment Offer',
                linkTo:
                  '/immigrate/provincial-nominee-program/saskatchewan/saskatchewan-international-skilled-worker/saskatchewan-employment-offer',
              },
              {
                title: 'Saskatchewan In-Demand Occupation',
                linkTo:
                  '/immigrate/provincial-nominee-program/saskatchewan/saskatchewan-international-skilled-worker/saskatchewan-in-demand-occupation',
              },
              {
                title:
                  'Saskatchewan International Skilled Worker Tech Talent Pathway',
                linkTo:
                  '/immigrate/provincial-nominee-program/saskatchewan/saskatchewan-international-skilled-worker/saskatchewan-international-skilled-worker-tech-talent-pathway',
              },
              {
                title: 'Saskatchewan Hard-to-fill Skills Pilot',
                linkTo:
                  '/immigrate/provincial-nominee-program/saskatchewan/saskatchewan-international-skilled-worker/saskatchewan-hard-to-fill-skills-pilot',
              },
            ],
          },
          {
            title: 'Saskatchewan Experience',
            linkTo:
              '/immigrate/provincial-nominee-program/saskatchewan/saskatchewan-experience',
            nestLink: [
              {
                title: 'Saskatchewan Existing Work Permit',
                linkTo:
                  '/immigrate/provincial-nominee-program/saskatchewan/saskatchewan-experience/saskatchewan-existing-work-permit',
              },
              {
                title: 'Saskatchewan Health Professionals',
                linkTo:
                  '/immigrate/provincial-nominee-program/saskatchewan/saskatchewan-experience/saskatchewan-health-professionals',
              },
              {
                title: 'Saskatchewan Hospitality Sector Project',
                linkTo:
                  '/immigrate/provincial-nominee-program/saskatchewan/saskatchewan-experience/saskatchewan-hospitality-sector-project',
              },
              {
                title: 'Saskatchewan Long-Haul Truck Driver Project',
                linkTo:
                  '/immigrate/provincial-nominee-program/saskatchewan/saskatchewan-experience/saskatchewan-long-haul-truck-driver-project',
              },
              {
                title: 'Saskatchewan Students',
                linkTo:
                  '/immigrate/provincial-nominee-program/saskatchewan/saskatchewan-experience/saskatchewan-students',
              },
            ],
          },
          {
            title: 'Saskatchewan Entrepreneur and Farm',
            linkTo:
              '/immigrate/provincial-nominee-program/saskatchewan/saskatchewan-entrepreneur-and-farm',
            nestLink: [
              {
                title: 'Saskatchewan Entrepreneur',
                linkTo:
                  '/immigrate/provincial-nominee-program/saskatchewan/saskatchewan-entrepreneur-and-farm/saskatchewan-entrepreneur',
              },
              {
                title: 'Saskatchewan Farm Owners and Operators',
                linkTo:
                  '/immigrate/provincial-nominee-program/saskatchewan/saskatchewan-entrepreneur-and-farm/saskatchewan-farm-owners-and-operators',
              },
              {
                title:
                  ' Saskatchewan International Graduate Entrepreneur category',
                linkTo:
                  '/immigrate/provincial-nominee-program/saskatchewan/saskatchewan-entrepreneur-and-farm/saskatchewan-international-graduate-entrepreneur-category',
              },
            ],
          },
        ],
      },
      {
        title: 'Yukon',
        linkTo: '/immigrate/provincial-nominee-program/yukon',
        nested: [
          {
            title: 'Yukon Skilled Worker',
            linkTo:
              '/immigrate/provincial-nominee-program/yukon/yukon-skilled-worker',
          },
          {
            title: 'Yukon Express Entry',
            linkTo:
              '/immigrate/provincial-nominee-program/yukon/yukon-express-entry',
          },
          {
            title: 'Yukon Critical Impact Worker',
            linkTo:
              '/immigrate/provincial-nominee-program/yukon/yukon-critical-impact-worker',
          },
          {
            title: 'Yukon Business Nominee',
            linkTo:
              '/immigrate/provincial-nominee-program/yukon/yukon-business-nominee',
          },
          {
            title: 'Yukon Community Pilot',
            linkTo:
              '/immigrate/provincial-nominee-program/yukon/yukon-community-pilot',
          },
        ],
      },
    ],
  },

  {
    title: 'Rural and Northern Immigration Pilot',
    linkTo: '/immigrate/rural-and-northern-immigration-pilot',
  },
  {
    title: 'Caregiver Programs',
    linkTo: '/immigrate/caregiver-programs',
    nestedLinks: [
      {
        title: 'Home Child Care Provider Pilot',
        linkTo: '/immigrate/caregiver-programs/home-child-care-provider-pilot',
      },
      {
        title: 'Home Support Worker Pilot',
        linkTo: '/immigrate/caregiver-programs/home-support-worker-pilot',
      },
    ],
  },
  {
    title: 'AIP Atlantic Immigration Program',
    linkTo: '/immigrate/aip-atlantic-immigration-program',
  },
  { title: 'Agri-Food Pilot', linkTo: '/immigrate/agri-food-pilot' },
  {
    title: 'After Permanent Residency',
    linkTo: '/immigrate/after-permanent-residency',
    nestedLinks: [
      {
        title: 'Permanent Resident Cards',
        linkTo: '/immigrate/after-permanent-residency/permanent-resident-cards',
      },
      {
        title: 'Permanent Resident Card Renewal',
        linkTo:
          '/immigrate/after-permanent-residency/permanent-resident-card-renewal',
      },
      {
        title: 'Permanent Resident Travel Document',
        linkTo:
          '/immigrate/after-permanent-residency/permanent-resident-travel-document',
      },
      {
        title: 'Residency Obligation',
        linkTo: '/immigrate/after-permanent-residency/residency-obligation',
      },
      {
        title: 'Canadian Citizenship',
        linkTo: '/immigrate/after-permanent-residency/canadian-citizenship',
      },
    ],
  },
  { title: 'PR FAQs', linkTo: '/immigrate/pr-faqs' },
];

export default sitemapImmigrate;
