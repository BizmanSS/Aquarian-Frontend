import React, { useRef } from "react";

import "../../../styles/pages.css";
import TableOfContent from "../../shared/TableOfContent.jsx";

import ReadyToStartCard from "../../shared/ReadyToStart.jsx";

import SiteMapMenu from "../../globalComponents/Sidebar/SiteMapMenu.jsx";

export default function AgriFoodPilot() {
  const StartingRef = useRef(null);
  const BuyingRef = useRef(null);
  const ExpandingRef = useRef(null);

  const tableContentData = [
    {
      id: 1,
      content: "Starting a Business in Canada",
      scrollTo: StartingRef,
    },
    {
      id: 2,
      content: "Buying a Business in Canada",
      scrollTo: BuyingRef,
    },
    {
      id: 3,
      content: "Expanding Your Business in Canada",
      scrollTo: ExpandingRef,
    },
  ];

  return (
    <div
      style={{
        background: "#EEE",
      }}
    >
      <div className="pages-content-wrapper">
        {/* <SiteMapMenu type="I" h1="Permanent Residency"></SiteMapMenu> */}
        <SiteMapMenu type="I" h1="Agri-Food Pilot"></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Business
              {" > "}Business in Canada
            </div>
            <div class="pages-header">Business in Canada</div>

            <div class="pages-paragraph space-fix intro-size-fix">
              Canada has become a prime destination for international
              entrepreneurs, with over 10,000 new businesses being created
              annually. According to the Government of Canada, nearly 25% of all
              small businesses in the country are owned by immigrants. This
              growing trend is fueled by Canada’s stable economy, progressive
              immigration policies, and access to a diverse talent pool. At
              Aquarian Immigration Services, we understand that while the
              opportunities are immense, navigating Canada’s business landscape
              can be tough, especially when you are unfamiliar with the local
              regulatory and immigration environment.
              <div className="my-2">
                Whether you are looking to start a business, buy an established
                business, or expand your operations into the Canadian market,
                we’ve compiled a detailed guide to help you succeed.
              </div>
            </div>

            <div className="table-of-content-container">
              <TableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={StartingRef}>
              Starting a Business in Canada
            </div>
            <div className="pages-paragraph">
              Starting a business in Canada is a promising venture — Canada’s
              start-up ecosystem has seen substantial growth, particularly in
              sectors such as technology, clean energy, and healthcare. In fact,
              Canada was ranked 2nd globally in the Global Entrepreneurship
              Index 2023 due to its support for innovation, ease of doing
              business, and a strong digital infrastructure. However, to
              establish a successful business, there are critical steps to
              follow that ensure long-term sustainability and legal compliance.
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginTop: "30px",
                  marginBottom: "30px",
                }}
              >
                Steps to Start a Business in Canada
              </div>
              <div className="ml-3">
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginTop: "30px",
                    marginBottom: "20px",
                  }}
                >
                  Develop a Business Idea and Research the Market
                </div>
                Canada is known for its thriving sectors like tech,
                sustainability, and health, but understanding which industry
                aligns with your skills and market demand is key. In 2024,
                Canada’s technology sector has grown by over 6.8%, with
                investment reaching high in start-up funding. Similarly, the
                government’s commitment to green tech has led to increased
                funding and incentives for sustainability-focused ventures.
                <div className="my-2">
                  We assist entrepreneurs in evaluating market potential and
                  positioning their business ideas based on Canadian consumer
                  behavior, provincial demand, and the local regulatory
                  environment.
                </div>
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginTop: "30px",
                    marginBottom: "20px",
                  }}
                >
                  Create a Business Plan with Canadian Compliance
                </div>
                Crafting a detailed business plan is not only necessary for
                attracting investors but also critical to navigating immigration
                requirements. For instance, Canada’s Start-Up Visa Program,
                designed specifically for immigrant entrepreneurs, requires a
                solid business plan that meets Canadian standards and aligns
                with the criteria for permanent residency. We guide you in
                creating a robust business plan that is aligned with Canadian
                business regulations and immigration policies, ensuring your
                plan strengthens your application for immigration programs such
                as the Start-Up Visa.
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginTop: "30px",
                    marginBottom: "20px",
                  }}
                >
                  Seek Investors or Funding
                </div>
                Canada’s access to capital is diverse, with programs like
                Canadian Small Business Financing Program (CSBFP) offering loans
                up to CAD 1 million for equipment or real estate.
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginTop: "30px",
                    marginBottom: "20px",
                  }}
                >
                  Register and Incorporate Your Business
                </div>
                In Canada, the process of registering a business depends on the
                type of business structure you choose—sole proprietorship,
                partnership, or corporation. Each structure comes with its own
                legal and tax implications. For example, a corporation is the
                most common structure for businesses looking to scale and bring
                in investors.
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginTop: "30px",
                    marginBottom: "20px",
                  }}
                >
                  Obtain Permits and Licenses
                </div>
                Depending on your business type and location, you’ll need
                various permits, such as a business license, GST/HST
                registration, or specific industry permits. The Government of
                Canada lists over 200 different permits and licenses based on
                sector.
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginTop: "30px",
                    marginBottom: "20px",
                  }}
                >
                  Open a Business Bank Account
                </div>
                To separate your business finances from personal finances, you
                will need a Canadian business bank account. This is essential
                for handling payroll, taxes, and operating costs efficiently.
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginTop: "30px",
                    marginBottom: "20px",
                  }}
                >
                  Launch and Scale Your Business
                </div>
                Once everything is set up, it’s time to launch your business.
                Canada’s digital adoption rates are high, with 85% of Canadians
                actively using online services. This presents significant
                opportunities for businesses that leverage e-commerce and
                digital marketing.
              </div>
              <div className="my-5">
                Continuous performance analysis is key to long-term success.
                Regularly evaluating your revenue, customer base, and market
                trends will allow you to pivot as needed. We offer strategic
                consultation services to help you assess your growth, optimize
                operations, and expand your business in alignment with Canadian
                immigration policies.
              </div>
            </div>

            <div class="pages-header-2" ref={BuyingRef}>
              Buying a Business in Canada
            </div>

            <div className="pages-paragraph">
              Canada’s stable economy makes it an attractive market for business
              acquisitions. Canada experienced an increase in mergers and
              acquisitions activity, with a significant portion of these
              transactions involving immigrant buyers. Whether you’re looking to
              acquire a small business or a more established enterprise, the
              process involves several important considerations.
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginTop: "30px",
                  marginBottom: "30px",
                }}
              >
                Steps to Buy a Business in Canada
              </div>
              <div className="ml-3">
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginTop: "30px",
                    marginBottom: "20px",
                  }}
                >
                  Determine Your Budget and Financial Viability
                </div>
                The cost of buying a business in Canada can range from CAD 50,000 to over CAD 10 million, depending on the industry and the size of the company. As per data, small businesses in sectors like retail or services typically sell for between CAD 100,000 and CAD 500,000.
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginTop: "30px",
                    marginBottom: "20px",
                  }}
                >
                  Choose the Type of Purchase
                </div>
                When purchasing a business, you must decide between a share purchase or asset purchase. A share purchase means acquiring the entire entity, while an asset purchase means acquiring only specific assets of the business.
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginTop: "30px",
                    marginBottom: "20px",
                  }}
                >
                  Conduct Due Diligence
                </div>
                Due diligence is crucial. You'll need to investigate the business’s financial health, legal standing, and liabilities. According to CBRE Canada, 60% of business transactions in Canada fail due to insufficient due diligence.
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginTop: "30px",
                    marginBottom: "20px",
                  }}
                >
                  Regulatory Approvals and Work Permits
                </div>
                If you're an immigrant investor, you’ll likely need to apply for specific work permits or an investor visa. Canada’s Investment Canada Act regulates business investments over CAD 5 million, which requires government approval.


              </div>

              <div className='my-5'>Our expertise in immigration services ensures that your application for work permits or investor visas is seamless and that you meet all the regulatory requirements to operate your business legally in Canada.</div>
            </div>

            <div class="pages-header-2" ref={ExpandingRef}>
              Expanding Your Business in Canada
            </div>
            <div class="pages-paragraph">
              Expanding your business into the Canadian market is a strategic decision that opens doors to new opportunities. With a population of around 38 million people and access to international trade agreements like USMCA, Canada offers unmatched access to North American markets.

            </div>

            <div
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginTop: "30px",
                marginBottom: "30px",
              }}
            >
              Strategies for Expansion
            </div>

            <div className="ml-3 my-3">
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginTop: "30px",
                  marginBottom: "20px",
                }}
              >
                Assess Financial Capacity and Growth Potential
              </div>
              While no minimum investment is required to expand in Canada, you’ll need to demonstrate financial viability. Businesses must prove their ability to support operations, local jobs, and ongoing growth.
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginTop: "30px",
                  marginBottom: "20px",
                }}
              >
              Establish a Local Presence 
              </div>
              Expanding to Canada may involve setting up a subsidiary or branch office. Each province offers unique business incentives, especially in technology and green industries.
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginTop: "30px",
                  marginBottom: "20px",
                }}
              >
              Use Government Support and Incentives 
              </div>
              The Canadian government offers various programs such as the Canadian Digital Adoption Program and Innovation, Science and Economic Development Canada (ISED) initiatives, which provide funding and support to expanding businesses.
         

            </div>

            <div>We help you identify and apply for government incentives that support business growth and expansion, ensuring that your business benefits from available resources.</div>

            <div className='my-2'>Starting, buying, or expanding a business in Canada presents opportunities for immigrant entrepreneurs. However, understanding the regulatory, financial, and immigration landscape is key to making informed decisions and achieving success. At Aquarian Immigration Services, we provide expert guidance every step of the way, from market research and business registration to securing the right immigration pathways. With over 30 years of combined experience, we are dedicated to helping you turn your entrepreneurial dreams into a reality in Canada.</div>

          </div>
          <div>
            {/* <FaqBox faqItems={faqItems} /> */}
            <ReadyToStartCard />
          </div>
        </div>
      </div>
    </div>
  );
}
