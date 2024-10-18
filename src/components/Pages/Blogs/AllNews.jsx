import React, { useState } from "react";
import "./AllNews.css"; // Make sure to create this CSS file for styles
import Canada_A from "../../../Assets/Can_news_b.jpg";
import Canada_B from "../../../Assets/Can_news_c.jpg";
import Canada_C from "../../../Assets/Can_news_d.jpg";
import Canada_D from "../../../Assets/Can_news_e.jpg";
import Canada_E from "../../../Assets/Can_news_f.jpg";
import Canada_F from "../../../Assets/Can_news_g.jpg";
import Canada_G from "../../../Assets/Can_news_h.jpg";
import Canada_H from "../../../Assets/Can_news_i.jpg";
import Canada_I from "../../../Assets/Can_news_j.jpg";
import Canada_J from "../../../Assets/Can_news_k.jpg";
import Canada_K from "../../../Assets/Can_news_l.jpg";
import Canada_L from "../../../Assets/Can_news_m.jpg";
import Canada_M from "../../../Assets/Can_news_n.jpg";
import Canada_N from "../../../Assets/can_news-o.jpg";
import Canada_O from "../../../Assets/can-news-p.jpg";

import { useNavigate } from "react-router-dom";

export default function AllNews() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNewsIndex, setSelectedNewsIndex] = useState(null);
  const newsPerPage = 6;

  const newsArticles = [
    { 
      id: 1, 
      date: "Sunday , 7 June 2024", 
      title: "IRCC reducing Spousal Open Work Permits by more than 100,000 over the next three years", 
      imgSrc: Canada_A, 
      description: "In a significant policy shift, the IRCC has announced plans to reduce the issuance of Spousal Open Work Permits by over 100,000 in the coming three years. This decision is poised to impact many families who rely on these permits for their reunification in Canada. The change aims to prioritize skilled immigration but raises concerns among those affected by the reduction. This article delves into the implications of this decision, potential alternatives for those seeking to reunite with their spouses, and the broader context of immigration policy changes in Canada.",
      button: "Express Entry",
      button2: "Immigration",
      heading_first: "1. Impact on Families",
      para_first: "The reduction of Spousal Open Work Permits is likely to cause significant emotional and financial strain on families. Many couples who depend on these permits for work authorization while living in Canada face uncertainty. This decision may lead to prolonged separations, which can have adverse effects on mental health and family dynamics. The emotional toll of such changes cannot be understated, especially for those who have built their lives around the availability of these permits. The challenges of maintaining relationships across borders can lead to stress, anxiety, and feelings of isolation for those separated from their partners.",
  
      heading_second: "2. Alternative Pathways for Reunification",
      para_second: "As the issuance of Spousal Open Work Permits declines, couples may need to explore alternative immigration pathways. Options such as family sponsorship, Express Entry, or provincial nominee programs can offer routes to reunification, albeit with varying levels of complexity and requirements. It is crucial for affected individuals to seek advice from immigration consultants or legal experts to navigate these alternatives effectively. Understanding the specific eligibility criteria and documentation required for each pathway can make a significant difference in successfully reuniting with a spouse, ensuring that families are not left in limbo for extended periods.",
  
      heading_third: "3. Broader Immigration Policy Context",
      para_third: "This policy shift is part of a larger trend in Canadian immigration, where the government aims to attract skilled workers to address labor shortages in critical sectors. While prioritizing skilled immigrants may benefit the economy, it raises questions about the balance between skilled immigration and family reunification. Understanding the broader implications of these changes is essential for prospective immigrants. It is important to analyze how this shift affects Canada’s reputation as a welcoming nation for families and how it aligns with the country's commitment to diversity and inclusion in its immigration policies.",
  
      heading_fourth: "4. Community Response and Advocacy",
      para_fourth: "Community organizations and advocacy groups are raising their voices against the reduction in Spousal Open Work Permits. They argue that family reunification is a fundamental right and that policies should reflect the importance of maintaining family ties. Grassroots movements are mobilizing to lobby for more inclusive immigration policies that consider the unique challenges faced by families, ensuring their voices are heard in the ongoing discussions surrounding immigration reform. By bringing awareness to the emotional and social impacts of these policy changes, advocates aim to influence lawmakers and promote a more compassionate approach to immigration.",
  },
  
  { 
      id: 2, 
      date: "8 June, 2024", 
      title: "Canada launches pilot project to streamline review process for rejected study permits", 
      imgSrc: Canada_O, 
      description: "Recognizing the challenges faced by international students, Canada has launched a pilot project aimed at streamlining the review process for study permit applications that have been previously rejected. This initiative is designed to alleviate the frustrations of prospective students who find the application process daunting. The article explores how the pilot project will work, the criteria for eligibility, and the expected outcomes for students hoping to study in Canada.",
      button: "Express Entry",
      button2: "Immigration",
      heading_first: "1. Overview of the Pilot Project",
      para_first: "The newly launched pilot project by the Canadian government aims to provide a more efficient and accessible review process for study permit applications that were previously denied. With many international students expressing frustration over the lengthy and often confusing appeals process, this initiative seeks to streamline the steps involved in reapplying. It includes clear guidelines for applicants and aims to reduce wait times, making the pathway to studying in Canada smoother. By offering a transparent approach, the government hopes to encourage more international students to consider Canada as their preferred destination for higher education.",
  
      heading_second: "2. Eligibility Criteria",
      para_second: "To participate in the pilot project, applicants must meet specific eligibility criteria designed to ensure that the initiative targets the right candidates. This section details the requirements, including the need to have previously applied for a study permit and received a rejection. Understanding these criteria is essential for prospective students, as it allows them to assess their eligibility before initiating the reapplication process. Additionally, the article discusses the importance of presenting strong documentation and how applicants can enhance their chances of approval by addressing the reasons for their initial rejection in a comprehensive manner.",
  
      heading_third: "3. Expected Outcomes for Students",
      para_third: "The expected outcomes of this pilot project include not only faster processing times but also improved overall satisfaction among international students. By reducing the complexity of the reapplication process, the government aims to increase the number of successful study permit approvals. This section discusses the potential long-term impacts on the Canadian education system, including attracting a more diverse student body and enhancing Canada's reputation as a welcoming and supportive environment for international learners. It also touches on the implications for the job market, as increased educational opportunities can lead to a more skilled workforce.",
  
      heading_fourth: "4. Community and Institutional Support",
      para_fourth: "As this pilot project unfolds, the support from educational institutions and community organizations will play a crucial role in its success. Universities and colleges are encouraged to actively promote this initiative to prospective students, providing them with the necessary information and resources to navigate the application process. Additionally, community organizations that support international students can offer guidance and assistance in preparing applications. This collaborative effort is essential in ensuring that students are well-informed and adequately prepared, ultimately leading to a higher success rate in obtaining study permits through the streamlined process.",
  },

  { 
      id: 3, 
      date: "9 June, 2024", 
      title: "Alberta launches new Expression of Interest system for AAIP Worker Streams", 
      imgSrc: Canada_C, 
      description: "Alberta has unveiled a new Expression of Interest (EOI) system as part of its Alberta Advantage Immigration Program (AAIP) targeting skilled workers. This new system aims to attract more talent to the province and streamline the application process for those looking to immigrate. The article provides insights into how the EOI system functions, its benefits for applicants, and how it fits into Alberta's overall immigration strategy.", 
      button: "Express Entry",
      button2: "Immigration",
      heading_first: "1. Overview of the EOI System",
      para_first: "The Expression of Interest (EOI) system represents a significant advancement in Alberta's approach to attracting skilled workers. By allowing candidates to submit their profiles for consideration, the system aims to identify and prioritize individuals whose skills and qualifications align with the province's labor market needs. This proactive approach helps Alberta address workforce shortages while simultaneously providing skilled immigrants with a clearer pathway to permanent residency. The article outlines how the EOI system works, including the registration process and the factors that influence an applicant's ranking in the selection pool, ensuring that potential immigrants are well-informed about the process.",
  
      heading_second: "2. Benefits for Skilled Workers",
      para_second: "The introduction of the EOI system brings numerous benefits for skilled workers seeking to immigrate to Alberta. By streamlining the application process, the system reduces waiting times and enhances the overall efficiency of immigration pathways. Applicants will have the opportunity to be matched with job openings in the province, increasing their chances of securing employment before even arriving in Canada. Furthermore, the EOI system fosters a competitive environment that encourages candidates to enhance their skills and qualifications to improve their chances of selection. This section elaborates on how skilled workers can leverage the EOI system to their advantage.",
  
      heading_third: "3. Integration into Alberta's Immigration Strategy",
      para_third: "The EOI system is not an isolated initiative but is integrated into Alberta's broader immigration strategy, which aims to foster economic growth and community development. By aligning immigration policies with the province's labor market needs, Alberta seeks to create a sustainable workforce that supports local industries. This section discusses how the EOI system complements other immigration programs within the Alberta Advantage Immigration Program (AAIP) and how it reflects the government's commitment to maintaining a dynamic and diverse population. Understanding this context is essential for applicants who wish to grasp the significance of their immigration choices.",
  
      heading_fourth: "4. Future Outlook for Immigrants",
      para_fourth: "As Alberta continues to refine and implement its EOI system, the future outlook for skilled immigrants appears promising. The government's focus on attracting talent is indicative of its recognition of the crucial role immigrants play in driving economic progress. This section explores potential future developments in Alberta's immigration policies and the ongoing efforts to improve the integration of newcomers into the community. By staying informed about these changes, prospective immigrants can better prepare themselves for the opportunities that lie ahead, ensuring a successful transition to life in Alberta.",
  },

  { 
      id: 4, 
      date: "10 June, 2024", 
      title: "How many ITAs has Canada issued through Express Entry this year vs. last year?", 
      imgSrc: Canada_D, 
      description: "As Canada continues to evolve its immigration policies, understanding the trends in the number of Invitations to Apply (ITAs) issued through the Express Entry system is crucial. This article compares the current year's statistics with those from the previous year, highlighting changes in eligibility criteria, applicant pools, and the impact of these trends on potential immigrants. It aims to provide a comprehensive overview for those considering applying through Express Entry.", 
      button: "Express Entry",
      button2: "Immigration",
      heading_first: "1. Overview of ITA Trends",
      para_first: "Understanding the trends in Invitations to Apply (ITAs) issued through the Express Entry system is vital for prospective immigrants looking to navigate Canada's immigration landscape. This section provides a detailed comparison of the current year's statistics against those from the previous year, showcasing any fluctuations in the number of ITAs granted. Such data reveals not only the government's shifting priorities but also the competitive nature of the applicant pool. By analyzing these trends, candidates can better strategize their applications, ensuring they align with the evolving requirements of the Express Entry system.",
  
      heading_second: "2. Changes in Eligibility Criteria",
      para_second: "The changes in eligibility criteria for Express Entry have significant implications for applicants. As the Canadian government adapts its immigration policies to respond to labor market needs, these criteria may evolve, affecting who qualifies for ITAs. This section explores the adjustments made in the past year, including alterations to points awarded for language proficiency, work experience, and educational qualifications. By staying informed about these criteria, potential applicants can make necessary adjustments to their profiles, enhancing their chances of receiving an invitation to apply for permanent residency in Canada.",
  
      heading_third: "3. Insights into Applicant Pools",
      para_third: "Examining the applicant pools from the current year versus the previous year offers valuable insights into the demographics and qualifications of individuals seeking to immigrate to Canada. This analysis includes trends regarding the countries of origin, professional backgrounds, and skill sets of applicants. Understanding these dynamics can help candidates assess their own profiles in relation to the competition, allowing them to highlight their unique strengths. Additionally, this section discusses the importance of networking and personal branding in standing out within the applicant pool, ultimately leading to a successful immigration process.",
  
      heading_fourth: "4. Implications for Future Applicants",
      para_fourth: "The trends and changes observed in ITA issuance carry significant implications for future applicants to Canada’s Express Entry system. This section offers practical advice on how candidates can adapt to these changes to enhance their chances of success. By understanding the shifting landscape, applicants can identify skills and qualifications that are increasingly in demand, allowing them to focus their efforts on relevant areas for improvement. Additionally, this article emphasizes the importance of staying updated on immigration policies and participating in professional development opportunities to ensure readiness for any upcoming changes in the Express Entry framework.",
  },

  { 
      id: 5, 
      date: "11 June, 2024", 
      title: "Helpful advice for newcomers landing in Canada: A post-arrival checklist for newcomers to Canada", 
      imgSrc: Canada_E, 
      description: "For newcomers to Canada, the transition can be overwhelming. This article offers a detailed post-arrival checklist that covers essential tasks to help ease the transition. From setting up a bank account to understanding healthcare options and local customs, this guide provides newcomers with actionable steps to ensure a smooth start in their new home. Personal anecdotes and tips from experienced immigrants enrich the content.", 
      button: "Express Entry",
      button2: "Immigration",
      heading_first: "1. Setting Up Essential Services",
      para_first: "Upon arrival in Canada, one of the first tasks newcomers should undertake is setting up essential services. This includes opening a bank account, which is crucial for managing finances and receiving payments. Newcomers should also look into obtaining a local phone number and internet service, which are vital for communication and staying connected with family and friends. Additionally, understanding how to access utilities such as electricity and water is important. This section provides practical advice on choosing the right service providers, considering factors like cost and reliability, to ensure that newcomers can settle into their new environment without undue stress.",
  
      heading_second: "2. Navigating Healthcare Options",
      para_second: "Understanding the healthcare system in Canada is essential for newcomers, as accessing medical services can differ from their home countries. This section outlines the importance of obtaining health insurance, especially during the waiting period for provincial health coverage. It also highlights the need to familiarize oneself with local healthcare providers, including family doctors and specialists. Newcomers are encouraged to register for the provincial health insurance plan as soon as they are eligible. Additionally, this guide provides tips on how to navigate the healthcare system effectively, including understanding how to book appointments and what to expect during medical visits.",
  
      heading_third: "3. Cultural Integration and Community Involvement",
      para_third: "Integrating into Canadian culture is a vital aspect of the newcomer experience. This section discusses the importance of engaging with local communities and exploring cultural activities to foster a sense of belonging. Newcomers are encouraged to participate in community events, volunteer opportunities, and cultural festivals, which can provide valuable networking opportunities and help them make connections. Additionally, this guide offers resources for finding local cultural organizations and groups that celebrate diversity. By actively participating in their communities, newcomers can gain a better understanding of Canadian customs while contributing positively to their new environment.",
  
      heading_fourth: "4. Tips for Employment Success",
      para_fourth: "Finding employment in Canada can be a challenging process for newcomers, but having a clear strategy can significantly enhance their chances of success. This section provides practical tips for job searching, including how to tailor resumes and cover letters to Canadian standards. Newcomers are encouraged to utilize networking opportunities, both online and in-person, to connect with potential employers and mentors. This guide also emphasizes the importance of understanding the local job market and industry trends. Additionally, newcomers are advised to consider furthering their education or obtaining certifications that align with Canadian requirements, making them more competitive in the job market.",
  },
  { 
    id: 6, 
    date: "12 June, 2024", 
    title: "Understanding the Canadian Tax System: A Guide for Newcomers", 
    imgSrc: Canada_F, 
    description: "Navigating the Canadian tax system can be daunting for newcomers. This article provides a comprehensive guide to understanding income tax in Canada, including filing requirements, important deadlines, and available deductions. Newcomers will learn how to effectively manage their finances while ensuring compliance with Canadian tax laws.", 
    button: "Express Entry",
    button2: "Immigration",
    heading_first: "1. Overview of the Canadian Tax System",
    para_first: "The Canadian tax system is structured to ensure that everyone contributes fairly to the country's infrastructure and services. For newcomers, understanding the basics is essential, as Canada operates on a progressive tax system, meaning that the more you earn, the higher your tax rate. This section outlines the key components of the tax system, including federal and provincial taxes, and how these impact your overall financial planning. It also touches on the importance of understanding your residency status for tax purposes, as it determines your tax obligations. By grasping these fundamentals, newcomers can prepare themselves to navigate their financial responsibilities effectively.",

    heading_second: "2. Filing Your Income Tax Return",
    para_second: "Filing an income tax return is a crucial responsibility for all residents of Canada, including newcomers. This section breaks down the process of filing your tax return, from gathering necessary documentation to choosing the right forms. Newcomers will find step-by-step guidance on how to complete their returns, including information on common deductions and credits that can reduce taxable income. Additionally, the article emphasizes the importance of meeting filing deadlines to avoid penalties and interest charges. By understanding the filing process, newcomers can ensure they fulfill their tax obligations while maximizing potential refunds.",

    heading_third: "3. Understanding Deductions and Credits",
    para_third: "Canada offers various deductions and tax credits that can significantly affect the amount of tax owed. This section provides an overview of the most common deductions available to newcomers, including those related to employment expenses, moving costs, and childcare. Newcomers are encouraged to keep meticulous records of their expenses to take full advantage of these deductions. The article also explains how tax credits can reduce the total amount of tax payable and highlights the importance of familiarizing oneself with both federal and provincial credits. Understanding these options empowers newcomers to make informed financial decisions and optimize their tax situation.",

    heading_fourth: "4. Resources for Financial Literacy",
    para_fourth: "Financial literacy is essential for newcomers as they navigate their new lives in Canada. This section discusses available resources for improving financial knowledge, including workshops, online courses, and community programs that focus on budgeting, saving, and investing. Many organizations offer free or low-cost financial advice tailored to newcomers, helping them understand how to manage their money effectively. By taking advantage of these resources, newcomers can build a solid foundation for their financial future in Canada, ensuring they are well-equipped to handle their finances responsibly while contributing to the economy.",
},

{ 
    id: 7, 
    date: "13 June, 2024", 
    title: "Exploring Canadian Cuisine: A Journey Through Diverse Flavors", 
    imgSrc: Canada_G, 
    description: "Canadian cuisine reflects the country's rich cultural tapestry and regional diversity. This article takes readers on a culinary journey, exploring popular dishes from various provinces and territories. It highlights the influence of Indigenous, French, and British cuisines and offers insights into must-try dishes for newcomers and visitors alike.", 
    button: "Express Entry",
    button2: "Immigration",
    heading_first: "1. The Influence of Indigenous Cuisine",
    para_first: "Indigenous cuisine forms the foundation of Canada’s culinary landscape, showcasing ingredients native to the land. This section delves into traditional Indigenous foods such as wild game, fish, berries, and foraged plants. Many contemporary chefs are incorporating these ingredients into modern dishes, celebrating the rich heritage of Indigenous culinary practices. Newcomers are encouraged to explore local Indigenous restaurants and food festivals that highlight these unique flavors. Understanding the significance of Indigenous cuisine not only enriches one’s culinary experience but also fosters appreciation for the diverse cultural heritage that shapes Canada's identity.",

    heading_second: "2. Regional Delicacies Across Canada",
    para_second: "Canada is a vast country with a diverse array of regional cuisines, each reflecting local ingredients and cultural influences. This section explores famous dishes from various provinces, such as poutine from Quebec, butter tarts from Ontario, and Nanaimo bars from British Columbia. By highlighting the uniqueness of each region’s offerings, newcomers can embark on a culinary adventure across the country. The article also encourages readers to visit local markets and festivals to sample these delicacies firsthand, providing an opportunity to connect with local culture while enjoying delicious food. Each region's cuisine tells a story of its history and people, enriching the newcomer experience.",

    heading_third: "3. The Role of Multiculturalism in Canadian Cuisine",
    para_third: "Canada’s multicultural landscape has significantly influenced its culinary scene, leading to the fusion of flavors and the emergence of diverse dining options. This section examines how immigrant communities have contributed to the richness of Canadian cuisine, introducing dishes from their homelands. From Asian dim sum to Middle Eastern falafel, newcomers will discover a plethora of international flavors available in Canadian cities. The article highlights popular multicultural restaurants and food markets where newcomers can indulge in global culinary delights. By exploring these diverse offerings, newcomers can find comfort in familiar flavors while also embracing the excitement of trying something new.",

    heading_fourth: "4. Cooking at Home: Canadian Recipes for Newcomers",
    para_fourth: "Cooking at home is an excellent way for newcomers to connect with Canadian culture while enjoying the comforts of home. This section provides a selection of simple, traditional Canadian recipes that newcomers can try, including pea soup, tourtière, and maple syrup desserts. Each recipe comes with tips for sourcing ingredients, as well as variations to suit different tastes and dietary needs. Cooking together with family or friends can also foster a sense of community and belonging. By preparing these dishes, newcomers can not only enjoy delicious meals but also create lasting memories that celebrate their new home in Canada.",
},

{ 
    id: 8, 
    date: "14 June, 2024", 
    title: "Navigating Public Transportation in Major Canadian Cities", 
    imgSrc: Canada_H, 
    description: "Public transportation is an essential aspect of life in many Canadian cities. This article provides newcomers with practical advice on navigating the public transit systems in major urban centers like Toronto, Vancouver, and Montreal. It covers ticketing options, routes, and tips for efficient travel.", 
    button: "Express Entry",
    button2: "Immigration",
    heading_first: "1. Overview of Public Transportation Systems",
    para_first: "Understanding the public transportation systems in major Canadian cities is crucial for newcomers who wish to explore their surroundings without relying solely on personal vehicles. This section provides an overview of the various public transit options available, including buses, subways, trams, and ferries. Each city has its own unique system, with varying levels of coverage and frequency. By familiarizing themselves with these options, newcomers can find efficient ways to navigate their new environment while saving money. The article also discusses the importance of understanding schedules, routes, and connections to maximize the effectiveness of public transportation.",

    heading_second: "2. Ticketing Options and Payment Methods",
    para_second: "Navigating public transportation also involves understanding the ticketing options available in different cities. This section details the various methods for purchasing tickets, including single-ride fares, day passes, and monthly subscriptions. Newcomers will learn about different payment methods, such as contactless cards, mobile apps, and cash. Understanding the benefits of each option can help newcomers choose the most cost-effective way to travel. The article emphasizes the importance of familiarizing oneself with the specific transit authority's payment system to avoid confusion or unexpected fees during travel, ensuring a smoother commuting experience.",

    heading_third: "3. Tips for Efficient Travel",
    para_third: "This section provides practical tips for newcomers to make their public transportation experience more efficient and enjoyable. Suggestions include planning trips in advance, using transit apps to check real-time schedules, and avoiding peak hours for a more comfortable journey. Newcomers are also encouraged to familiarize themselves with key transit hubs and landmarks, which can serve as helpful reference points while navigating the system. Additionally, the article discusses safety tips, such as staying aware of surroundings and securing personal belongings. By following these recommendations, newcomers can travel confidently and comfortably in their new cities.",

    heading_fourth: "4. Exploring Local Attractions via Public Transit",
    para_fourth: "Using public transportation opens up a world of exploration for newcomers looking to discover local attractions and hidden gems in their new cities. This section highlights popular destinations accessible via public transit, such as parks, museums, cultural centers, and shopping districts. It encourages newcomers to take advantage of transit services for outings, weekend getaways, or cultural experiences. The article also suggests various public transit day trips, allowing newcomers to immerse themselves in the local culture and lifestyle. By utilizing public transportation, newcomers can connect with their communities while enjoying the beauty and diversity of Canada.",
},

{ 
    id: 9, 
    date: "15 June, 2024", 
    title: "Starting a Business in Canada: A Comprehensive Guide for Newcomers", 
    imgSrc: Canada_I, 
    description: "For many newcomers, starting a business in Canada is an exciting opportunity. This article outlines the key steps involved in launching a business, from market research to understanding regulatory requirements. It also highlights resources available for aspiring entrepreneurs.", 
    button: "Express Entry",
    button2: "Immigration",
    heading_first: "1. Researching the Canadian Market",
    para_first: "Before starting a business in Canada, conducting thorough market research is essential for understanding the competitive landscape. This section outlines the importance of identifying target markets, analyzing consumer behavior, and recognizing industry trends. Newcomers are encouraged to utilize resources such as government reports, trade publications, and local business organizations to gather relevant information. By understanding the market dynamics, newcomers can refine their business ideas and create strategies that align with consumer needs. This proactive approach will lay the groundwork for a successful launch and ongoing growth in their new entrepreneurial venture.",

    heading_second: "2. Understanding Regulatory Requirements",
    para_second: "Navigating the regulatory environment is a critical step in establishing a business in Canada. This section discusses the various legal requirements that newcomers must comply with, including business registration, permits, and licensing. Newcomers will learn about the differences between operating as a sole proprietor versus incorporating a business. It also highlights the importance of understanding taxation obligations and compliance with local regulations. By gaining a clear understanding of these requirements, newcomers can avoid potential legal pitfalls and ensure that their business operates within the law, setting a strong foundation for future success.",

    heading_third: "3. Accessing Funding and Support",
    para_third: "Securing funding is often one of the biggest challenges for new entrepreneurs. This section explores various funding options available to newcomers, including government grants, loans, and venture capital. It highlights programs specifically designed to support immigrant entrepreneurs and offers guidance on how to apply for financial assistance. Additionally, newcomers are encouraged to seek mentorship and networking opportunities through local business associations and immigrant support organizations. By leveraging these resources, newcomers can enhance their chances of obtaining the necessary funding while building a support network that can help them navigate the complexities of starting a business.",

    heading_fourth: "4. Building a Business Plan",
    para_fourth: "A solid business plan is essential for any successful venture, serving as a roadmap for the business's future. This section outlines the key components of a comprehensive business plan, including an executive summary, market analysis, marketing strategies, and financial projections. Newcomers will learn how to effectively articulate their business vision and goals, helping them secure funding and attract potential partners. The article also emphasizes the importance of regularly revisiting and updating the business plan to reflect changing market conditions and growth opportunities. By developing a robust business plan, newcomers can set themselves up for long-term success in the Canadian business landscape.",
},

{ 
    id: 10, 
    date: "16 June, 2024", 
    title: "Coping with Culture Shock: A Newcomer's Guide to Adapting", 
    imgSrc: Canada_J, 
    description: "Culture shock is a common experience for newcomers adjusting to life in Canada. This article offers practical strategies for coping with culture shock and embracing the challenges of adaptation. It emphasizes the importance of community support and personal well-being.", 
    button: "Express Entry",
    button2: "Immigration",
    heading_first: "1. Recognizing the Signs of Culture Shock",
    para_first: "Culture shock can manifest in various ways, making it essential for newcomers to recognize its signs early on. This section discusses common symptoms, such as feelings of confusion, frustration, and homesickness. Understanding that these emotions are a normal part of the adaptation process can help newcomers approach their experience with compassion. The article encourages readers to reflect on their feelings and identify specific triggers, as self-awareness is crucial for managing culture shock effectively. By recognizing these signs, newcomers can take proactive steps to cope with their emotions, allowing them to navigate their new environment more comfortably.",

    heading_second: "2. Strategies for Adapting to a New Culture",
    para_second: "Adapting to a new culture requires a blend of openness and practical strategies. This section offers actionable tips for newcomers to help ease their transition, such as learning about Canadian customs, engaging in local community activities, and forming connections with fellow immigrants. Exploring cultural events and festivals can also provide valuable opportunities to immerse oneself in Canadian culture. Additionally, newcomers are encouraged to practice patience with themselves as they navigate their new surroundings. By embracing these strategies, newcomers can foster a sense of belonging while enriching their understanding of their new home.",

    heading_third: "3. The Role of Community Support",
    para_third: "Community support plays a vital role in helping newcomers cope with culture shock. This section highlights the importance of building a social network through local community centers, support groups, and online forums. Engaging with other newcomers who share similar experiences can provide reassurance and camaraderie during challenging times. Additionally, the article emphasizes the significance of seeking professional support when needed, such as counseling or mental health services. By utilizing available community resources, newcomers can cultivate a sense of connection and support, making the adaptation process feel less isolating.",

    heading_fourth: "4. Prioritizing Personal Well-Being",
    para_fourth: "Prioritizing personal well-being is essential for newcomers as they navigate the complexities of adjusting to a new culture. This section offers strategies for maintaining mental and emotional health, including practicing mindfulness, staying physically active, and establishing a daily routine. Newcomers are encouraged to engage in hobbies and activities that bring joy, as these can serve as healthy outlets for stress relief. The article also discusses the importance of seeking balance between embracing new experiences and honoring one's cultural background. By focusing on well-being, newcomers can cultivate resilience and adapt more successfully to their new life in Canada.",
},

{ 
    id: 11, 
    date: "17 June, 2024", 
    title: "Finding Housing in Canada: A Practical Guide for Newcomers", 
    imgSrc: Canada_K, 
    description: "Finding suitable housing is one of the first challenges newcomers face in Canada. This article offers practical advice on navigating the housing market, including tips for renting, purchasing, and understanding tenancy laws. It provides resources for finding affordable housing options.", 
    button: "Express Entry",
    button2: "Immigration",
    heading_first: "1. Understanding the Housing Market",
    para_first: "Navigating the housing market in Canada can be overwhelming for newcomers, especially in urban centers where demand often exceeds supply. This section provides an overview of the current housing market trends, including average rental prices, property values, and key factors influencing these trends. Newcomers are encouraged to conduct thorough research on different neighborhoods, considering factors such as proximity to work, schools, and amenities. The article also discusses seasonal fluctuations in the housing market, emphasizing the importance of timing when searching for suitable housing. By understanding these dynamics, newcomers can make informed decisions about where to live.",

    heading_second: "2. Renting vs. Buying: Pros and Cons",
    para_second: "Deciding whether to rent or buy a home is a significant choice for newcomers. This section outlines the pros and cons of both options, helping newcomers weigh their priorities and financial situations. Renting offers flexibility and lower upfront costs, making it an attractive option for those still settling into their new lives. On the other hand, purchasing a home can be a long-term investment that provides stability and equity. The article encourages newcomers to consider their lifestyle preferences, budget, and future plans when making this decision. By evaluating these factors, newcomers can determine the best housing solution for their circumstances.",

    heading_third: "3. Navigating Rental Agreements and Tenancy Laws",
    para_third: "Understanding rental agreements and tenancy laws is crucial for newcomers to ensure their rights are protected. This section explains the key components of a rental agreement, including lease terms, security deposits, and maintenance responsibilities. Newcomers will learn about their rights as tenants, such as the right to a safe living environment and protections against eviction. The article also highlights the importance of documenting any communication with landlords and keeping records of rental payments. By being informed about tenancy laws, newcomers can navigate their rental experiences with confidence, reducing the likelihood of disputes or misunderstandings.",

    heading_fourth: "4. Resources for Finding Housing",
    para_fourth: "Finding affordable housing is often a top priority for newcomers, and various resources are available to assist in this process. This section highlights websites, community organizations, and local services that can help newcomers locate suitable housing options. It emphasizes the importance of networking within communities to discover rental opportunities that may not be publicly listed. Additionally, the article provides tips on how to prepare for viewings and the application process, including what documents to have ready. By utilizing these resources, newcomers can streamline their housing search, making the transition to their new home more manageable.",
},

{ 
    id: 12, 
    date: "18 June, 2024", 
    title: "Embracing Canadian Sports: A Guide for Newcomers", 
    imgSrc: Canada_L, 
    description: "Sports play a significant role in Canadian culture. This article introduces newcomers to popular sports in Canada, from hockey to lacrosse, and highlights opportunities to participate as players or fans. It discusses the importance of community involvement and personal wellness through sports.", 
    button: "Express Entry",
    button2: "Immigration",
    heading_first: "1. The Significance of Sports in Canadian Culture",
    para_first: "Sports are deeply embedded in Canadian culture, serving as a source of national pride and community engagement. This section explores the historical significance of various sports, including hockey, lacrosse, and Canadian football, highlighting their role in shaping Canadian identity. Newcomers will learn about major sporting events, such as the Stanley Cup playoffs and the Grey Cup, which draw large crowds and foster a sense of community. Understanding the cultural importance of sports can help newcomers feel more connected to their new home and provide opportunities for social interaction. By embracing Canadian sports, newcomers can participate in a cherished aspect of the nation's culture.",

    heading_second: "2. Popular Sports and Activities",
    para_second: "Canada is known for a diverse array of sports and recreational activities that cater to various interests and skill levels. This section provides an overview of popular sports such as hockey, basketball, soccer, and baseball, along with seasonal activities like skiing, snowboarding, and hiking. Newcomers will discover local leagues and clubs that welcome participants of all abilities, offering opportunities to engage in sports while meeting new people. The article emphasizes the benefits of physical activity for overall health and well-being, encouraging newcomers to find a sport or activity that resonates with their interests and fosters a sense of belonging.",

    heading_third: "3. Community Involvement Through Sports",
    para_third: "Engaging in sports is not only a means of physical activity but also an avenue for building connections within the community. This section highlights various community sports programs and organizations that support newcomers, offering opportunities to participate in local leagues, tournaments, and events. By joining community teams or volunteering, newcomers can form friendships and establish a sense of belonging in their new environment. The article encourages newcomers to explore their local options, as many organizations actively promote inclusivity and welcome newcomers into their programs. This sense of community involvement enriches the newcomer experience and fosters lasting relationships.",

    heading_fourth: "4. Attending Sporting Events as a Fan",
    para_fourth: "Attending live sporting events is a popular pastime in Canada, providing an exciting way for newcomers to experience the local culture. This section discusses how to get involved as a spectator, from purchasing tickets to joining fan clubs. Newcomers are encouraged to attend games and events not only to cheer for their local teams but also to immerse themselves in the vibrant atmosphere surrounding sports in Canada. The article highlights the importance of understanding fan traditions and etiquette, which can enhance the overall experience. By participating in these events, newcomers can enjoy the thrill of sports while forging connections with fellow fans and the broader community.",
},

{ 
    id: 13, 
    date: "19 June, 2024", 
    title: "Exploring Canadian Arts and Culture: A Guide for Newcomers", 
    imgSrc: Canada_M, 
    description: "Canada boasts a rich tapestry of arts and culture. This article invites newcomers to explore the diverse artistic expressions found across the country, from visual arts to music and theater. It highlights cultural institutions and festivals that celebrate Canadian creativity.", 
    button: "Express Entry",
    button2: "Immigration",
    heading_first: "1. The Diversity of Canadian Arts",
    para_first: "The arts scene in Canada is incredibly diverse, reflecting the multicultural fabric of the nation. This section explores various artistic expressions, including visual arts, music, dance, and theater, highlighting notable Canadian artists and their contributions. Newcomers will learn about the influence of Indigenous art forms and how contemporary artists are shaping the cultural landscape. The article encourages newcomers to explore local galleries, performances, and exhibitions that showcase this vibrant artistic diversity. By engaging with the arts, newcomers can gain a deeper understanding of Canada's culture and find inspiration in the creativity that surrounds them.",

    heading_second: "2. Celebrating Cultural Festivals",
    para_second: "Cultural festivals are a vital part of Canadian life, celebrating the rich traditions and heritage of various communities. This section highlights significant festivals across the country, such as Caribana in Toronto, the Calgary Stampede, and the Quebec Winter Carnival. Newcomers are encouraged to participate in these events, as they offer unique opportunities to experience local culture, food, and entertainment. The article emphasizes the importance of community involvement during these celebrations, providing newcomers with a chance to connect with others and learn about the history and significance of the festivals. Engaging in these festivities can foster a sense of belonging and appreciation for Canada's cultural diversity.",

    heading_third: "3. Engaging with Local Arts Communities",
    para_third: "Connecting with local arts communities is an enriching experience for newcomers seeking to immerse themselves in Canadian culture. This section outlines various avenues for engagement, including community arts organizations, workshops, and classes. Newcomers can explore opportunities to participate in arts-based activities, such as painting, music, dance, or theater. The article highlights the benefits of joining local arts groups, which often foster inclusivity and collaboration. By engaging with fellow artists and enthusiasts, newcomers can develop their creative skills while building meaningful relationships. This sense of community within the arts can provide newcomers with a supportive network as they navigate their new environment.",

    heading_fourth: "4. Discovering Canadian Literature and Film",
    para_fourth: "Canada's literary and film landscape is rich with diverse voices that reflect the experiences of its people. This section introduces newcomers to notable Canadian authors, filmmakers, and their works, encouraging exploration of Canadian literature and cinema. From classic novels to contemporary films, newcomers can gain insights into the Canadian experience through storytelling. The article suggests visiting local libraries, bookstores, and film festivals to discover Canadian literature and cinema. Engaging with these art forms allows newcomers to connect with the cultural narratives that shape Canadian society while fostering an appreciation for the art of storytelling.",
},

{ 
    id: 14, 
    date: "20 June, 2024", 
    title: "Understanding Healthcare in Canada: A Guide for Newcomers", 
    imgSrc: Canada_N, 
    description: "Canada's healthcare system is renowned for its accessibility. This article provides newcomers with a comprehensive overview of how the healthcare system operates, including how to register for health insurance, access medical services, and understand patient rights.", 
    button: "Express Entry",
    button2: "Immigration",
    heading_first: "1. Overview of the Canadian Healthcare System",
    para_first: "Canada's healthcare system, known for its universal coverage, ensures that all residents have access to necessary medical services. This section explains the principles behind the system, including the roles of federal and provincial governments in providing healthcare. Newcomers will learn how the system is funded, the difference between public and private healthcare services, and what to expect when accessing care. Understanding these fundamentals is crucial for newcomers as they navigate their health and wellness in Canada. The article emphasizes the importance of familiarizing oneself with the specific health services available in their province or territory to maximize their healthcare experience.",

    heading_second: "2. Registering for Health Insurance",
    para_second: "To access healthcare services, newcomers must register for health insurance in their respective provinces or territories. This section outlines the registration process, including required documentation and timelines for coverage. Newcomers will learn about the importance of obtaining a health card and how it enables them to access medical services without incurring out-of-pocket costs. The article also discusses temporary health coverage options for newcomers who may experience waiting periods before their provincial insurance kicks in. By understanding the registration process, newcomers can ensure they receive timely medical care and avoid unexpected healthcare expenses.",

    heading_third: "3. Accessing Medical Services",
    para_third: "Once registered for health insurance, newcomers can access a range of medical services, from routine check-ups to specialized care. This section explains how to navigate the healthcare system, including finding a family doctor, booking appointments, and understanding emergency services. Newcomers will also learn about different healthcare providers, such as nurse practitioners and specialists, and how to seek referrals when needed. The article emphasizes the importance of being proactive about one’s health and encourages newcomers to prioritize regular health check-ups. By understanding how to access medical services, newcomers can take charge of their health and well-being in Canada.",

    heading_fourth: "4. Understanding Patient Rights and Responsibilities",
    para_fourth: "As patients in the Canadian healthcare system, newcomers have specific rights and responsibilities that ensure fair and respectful treatment. This section outlines key patient rights, such as the right to informed consent, privacy, and access to medical records. Newcomers will also learn about their responsibilities, including attending scheduled appointments and providing accurate health information. The article emphasizes the importance of advocating for oneself within the healthcare system, encouraging newcomers to voice concerns or ask questions about their care. By understanding their rights and responsibilities, newcomers can navigate the healthcare system confidently and ensure they receive appropriate care.",
},

{ 
    id: 15, 
    date: "21 June, 2024", 
    title: "Building a Career in Canada: A Newcomer's Roadmap", 
    imgSrc: Canada_O, 
    description: "Building a career in Canada involves understanding the job market, networking, and skill development. This article provides newcomers with a roadmap for successfully integrating into the Canadian workforce, including tips for job searching and adapting resumes.", 
    button: "Express Entry",
    button2: "Immigration",
    heading_first: "1. Understanding the Canadian Job Market",
    para_first: "Understanding the dynamics of the Canadian job market is essential for newcomers seeking employment opportunities. This section delves into key aspects of the job market, including sectors with high demand for workers, regional job trends, and the skills employers are seeking. Newcomers are encouraged to research labor market information, which can provide insights into job prospects and potential career paths. Additionally, the article discusses the importance of adapting one’s skills to meet the demands of the Canadian workforce. By gaining a clear understanding of the job market, newcomers can position themselves strategically as they embark on their job search in Canada.",

    heading_second: "2. Networking: Building Professional Connections",
    para_second: "Networking is a crucial component of finding job opportunities in Canada, as many positions are filled through personal connections. This section offers strategies for effective networking, including joining professional associations, attending industry events, and utilizing online platforms like LinkedIn. Newcomers will learn about the significance of building relationships within their field and how to leverage these connections for job leads and mentorship. The article also emphasizes the importance of maintaining a professional online presence to enhance visibility to potential employers. By actively networking, newcomers can expand their opportunities and navigate the job market more effectively.",

    heading_third: "3. Adapting Your Resume and Job Applications",
    para_third: "A well-crafted resume and job application are essential for making a positive impression on Canadian employers. This section discusses the key elements of an effective resume, including format, content, and the importance of tailoring applications to specific job postings. Newcomers will learn about the differences in resume styles and job application processes in Canada compared to their home countries. The article also provides tips on highlighting transferable skills and relevant experiences. By adapting their resumes and applications to the Canadian context, newcomers can increase their chances of landing interviews and job offers.",

    heading_fourth: "4. Enhancing Skills and Qualifications",
    para_fourth: "Continual skill development is vital for newcomers aiming to advance their careers in Canada. This section highlights various options for enhancing skills, such as online courses, workshops, and certification programs. Newcomers will discover local resources, including community colleges and training organizations, that offer programs tailored to their needs. The article encourages newcomers to seek opportunities for professional development and to remain adaptable in the face of changing job market demands. By investing in their skills and qualifications, newcomers can improve their employability and contribute effectively to the Canadian workforce.",
},
];

  

  const filteredNewsData = newsArticles.filter(news =>
    news.date.toLowerCase().includes(searchQuery.toLowerCase()) ||
    news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    news.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = filteredNewsData.slice(indexOfFirstNews, indexOfLastNews);
  const totalPages = Math.ceil(filteredNewsData.length / newsPerPage);
  const navigate = useNavigate();

  const handleReadMore = (index) => {
    setSelectedNewsIndex(index);
  };

  const handleBackToNews = () => {
    setSelectedNewsIndex(null);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to the first page when searching
  };

  const truncateDescription = (description) => {
    const words = description.split(" ");
    return words.length > 25 ? words.slice(0, 25).join(" ") + "..." : description;
  };

  return (
    <div className="all-news-container">
      <div className='AllNews-navigators'>
        <li className='AllNews-navitems'>Home</li>
        <li className='AllNews-navitems'>&gt;</li>
        <li className='AllNews-navitems' onClick={() => navigate('/news')}>News</li>
      </div>

     

      {selectedNewsIndex !== null ? (
        <div className="newsDetailContainer">
                    <h3 className="newsTitleDetail">{filteredNewsData[selectedNewsIndex].title}</h3>

          <p className="newsDate">{filteredNewsData[selectedNewsIndex].date}</p>
         

          <img src={filteredNewsData[selectedNewsIndex].imgSrc} alt={filteredNewsData[selectedNewsIndex].title} />
         <div className="AllNews_BTN_BOX"> <p className="AllNews_BTN">{filteredNewsData[selectedNewsIndex].button} </p>
         <p className="AllNews_BTN">{filteredNewsData[selectedNewsIndex].button2} </p></div>

          <p className="newsContentDetail">{filteredNewsData[selectedNewsIndex].description}</p>
          <p className="DESC_HEADINGS">{filteredNewsData[selectedNewsIndex].heading_first}</p>
          <p className="Desc_Para">{filteredNewsData[selectedNewsIndex].para_first}</p>
          <p className="DESC_HEADINGS">{filteredNewsData[selectedNewsIndex].heading_second}</p>
          <p className="Desc_Para">{filteredNewsData[selectedNewsIndex].para_second}</p>
          <p className="DESC_HEADINGS">{filteredNewsData[selectedNewsIndex].heading_third}</p>
          <p className="Desc_Para">{filteredNewsData[selectedNewsIndex].para_third}</p>
          <p className="DESC_HEADINGS">{filteredNewsData[selectedNewsIndex].heading_fourth}</p>
          <p className="Desc_Para">{filteredNewsData[selectedNewsIndex].para_fourth}</p>
          <button className="backToNewsButton" onClick={handleBackToNews}>Back to News</button>
        </div>
      ) : (
        <>
        <div className="Aquarian_News_heading">
          Aquarian News
        </div>
          <div className='news-search-area-section'>
            <input 
              type='text' 
              placeholder='Search by date or content...' 
              value={searchQuery} 
              onChange={handleSearchChange}
            />
          </div>


          <div className="AllNews-all-news-section">
            <h2 className="Allnews-heading">All News Articles</h2>
            <div className="AllNews-news-grid">
              {currentNews.map((news, index) => (
                <div className="AllNews-news-card" key={news.id} onClick={() => handleReadMore(index)}>
                  <img src={news.imgSrc} alt={news.title} className="AllNews-news-card-image" />
                  <div className="AllNews-news-card-content">
                    <p className="AllNews-news-date">{news.date}</p>
                    <h1 className="AllNews_news-Heading">{news.title}</h1>

                    <p className="AllNews-news-description">{truncateDescription(news.description)}</p>
                    {/* <p className="AllNews-read-more" >Read More</p> */}
                  <div className="AllNews_BTN_BOX"> <p className="AllNews_BTN_CARDS">{news.button}</p>                    <p className="AllNews_BTN_CARDS">{news.button2}</p></div> 

                  </div>
                </div>
              ))}
            </div>
          </div>

          {selectedNewsIndex === null && (
            <div className="AllNews-pagination-section">
              <button
                className="AllNews-pagination-button-prev"
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                &lt; Previous
              </button>
              <div className="AllNews-pagination-numbers">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                  <button
                    key={pageNumber}
                    className={`pagination-number ${currentPage === pageNumber ? 'active' : ''}`}
                    onClick={() => setCurrentPage(pageNumber)}
                  >
                    {pageNumber}
                  </button>
                ))}
              </div>
              <button
                className="AllNews-pagination-button-next"
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next &gt;
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}