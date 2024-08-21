import React, { useEffect, useState } from "react";
import logo from "../../../Assets/Logo-02.svg";
import './Footer.css'
import qLinksBoxArrow from '../../../Assets/clipart/arrow_links.svg'
import qLinksBoxArrow2 from '../../../Assets/clipart/arrow_links_2.svg'
import phoneCallGif from '../../../Assets/clipart/phone_ringing.gif'

// import logo2 from '../../../Assets/image 43.png';
// import logo4 from '../../../Assets/logo12.png';
import {
  FaInstagram,
  FaFacebook,
  // FaXTwitter,
  FaYoutube,
  FaLinkedin,
  FaThreads,
} from "react-icons/fa6";
import logo3 from "../../../Assets/AQUARIAN.png";
import "../../../styles/AboutUs.css";
import logoccic from "../../../Assets/image52.png";
import { useMobile } from "../MobileContext/IsMobileContext";

const Footer = ({ bottomComponentRef }) => {
  // const { isMobile } = useMobile();
  const handleNavigation = (url) => {
    window.location.href = url;
  };

  // const [vh, setVh] = useState(window.innerHeight);

  // const handleResize = () => {
  //   setVh(window.innerHeight);
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <div ref={bottomComponentRef} className="footer pt-10">
      <div className="footer-col-container">
        <div className="footer-col-1">
          <img
            className="footer-logo-1"
            src={logo}
            alt="logo"
          ></img>
          <div className="footer-outer-quick-links-container">
            <div className="footer-quick-links-header"> <span className="footer-quick-links-header-main">Canadian </span> <span className="footer-quick-links-header-secondary">Immigration Options</span></div>

            <div class="footer-inner-links-containter" >

              <div class="footer-qlinks-box-link"
                onClick={() => handleNavigation("/immigrate/permanent-residency")}>
                <div class="footer-qlinks-box-text">
                  I want to Immigrate
                </div>
                <div class="footer-qlinks-box-arrow">
                  <img src={qLinksBoxArrow} alt="" />
                </div>
              </div>

              <div class="footer-qlinks-box-link"
                onClick={() => handleNavigation("/work/work-in-canada")}
              >
                <div class="footer-qlinks-box-text">
                  I want to Work
                </div>
                <div class="footer-qlinks-box-arrow">
                  <img src={qLinksBoxArrow} alt="" />
                </div>
              </div>

              <div class="footer-qlinks-box-link"
                onClick={() => handleNavigation("/study/study-in-canada")}
              >
                <div class="footer-qlinks-box-text">
                  I want to Study
                </div>
                <div class="footer-qlinks-box-arrow">
                  <img src={qLinksBoxArrow} alt="" />
                </div>
              </div>

              <div class="footer-qlinks-box-link"
                onClick={() => handleNavigation("/sponsorship/sponsorship")}
              >
                <div class="footer-qlinks-box-text">
                  I want to Sponsor
                </div>
                <div class="footer-qlinks-box-arrow">
                  <img src={qLinksBoxArrow} alt="" />
                </div>
              </div>

              <div class="footer-qlinks-box-link"
                onClick={() => handleNavigation("/business/invest")}
              >
                <div class="footer-qlinks-box-text">
                  I want to Invest
                </div>
                <div class="footer-qlinks-box-arrow">
                  <img src={qLinksBoxArrow} alt="" />
                </div>
              </div>

              <div class="footer-qlinks-box-link"
                onClick={() => handleNavigation("/employers/employers-outside-canada")}              >
                <div class="footer-qlinks-box-text">
                  I am an Employer
                </div>
                <div class="footer-qlinks-box-arrow">
                  <img src={qLinksBoxArrow} alt="" />
                </div>
              </div>

            </div>

          </div>

          <div className="footer-contact-us-pc">
            <div className="footer-contact-us-pc-header">Contact Us</div>
            <div className="footer-contact-us-pc-text-box">
              <div className="footer-contact-us-pc-text-1">
                <div className="font-bold">Aquarian Immigration Services Inc</div>
                <span className="font-bold">India office</span>: 122A, Suncity Success Tower, Sector 65, Gurugram, Haryana 122011
              </div>
              <div className="footer-contact-us-pc-text-2">
                <span className="font-bold">Call us:</span> +91- 9810892192
                <div>+91- 9810890517</div>
                <div>+91- 1244671300</div>
                <span className="font-bold">Email:</span> info@iaquarian.com
              </div>
            </div>
          </div>

        </div>
        <div className="footer-col-2">
          <div className="footer-about-us">
            <div className="footer-about-us-header">About Aquarian Immigration</div>
            <div className="footer-about-us-text">
              With an absolute commitment to efficiency and transparency,
              Aquarian Immigration offers an all encompassing and evolutionary
              immigration service through our certified team of industry
              experts, while forging  lifelong relationships with our clients.
            </div>
            <div className="footer-about-us-text-2">
              I want to know more about Aquarian Immigration Services.
              <span className="footer-about-us-text-2-pc">
                &nbsp;Sign up to our Newsletter to keep you up-to-date
                on the newest programs & development in the Canadian
                Immigration world.
              </span>
            </div>
            <div class='footer-email-field'>
              <input type="text"
                placeholder="Enter your Email id"
              />
              <button><img src={qLinksBoxArrow2} alt="" /></button>
            </div>
          </div>

          <div className="footer-contact-us">
            <div className="footer-about-us-header">Conctact Us</div>
            <div className="footer-contact-us-sub-header">Aquarian Immigration Services Inc</div>
            <div className="footer-contact-us-text mt-1">
              India office: 122A, Suncity Success Tower, Sector 65, Gurugram, Haryana 122011
            </div>
            <div className="footer-contact-us-text mt-4">
              +91- 9810892192 <br />
              +91- 9810890517 <br />
              +91- 1244671300
            </div>
            <div className="footer-contact-us-text mt-4">
              info@aquarian.com
            </div>

          </div>

          <div className="footer-connect">
            <div className="footer-about-us-header">Connect with Us</div>
            <div className="footer-connect-inner-container">
              <a
                href="https://www.linkedin.com/company/aquarian-immigration-services/"
                className=""
              >
                <FaLinkedin size={25} className="bg-transparent" />
              </a>
              <a
                href="https://www.facebook.com/people/Aquarian-Immigration/61558242973262/"
                className=""
              >
                <FaFacebook size={25} className="bg-transparent" />
              </a>
              <a
                href="https://www.threads.net/@aquarian_immigration"
                className=""
              >
                <FaThreads size={25} className="bg-transparent" />
              </a>
              <a
                href="https://www.instagram.com/aquarian_immigration/"
                className=""
              >
                <FaInstagram size={25} className="bg-transparent" />
              </a>
              <a href="/" className="">
                <FaYoutube size={25} className="bg-transparent" />
              </a>
            </div>
          </div>

          <div class='footer-call-number'>
            <div className="footer-call-number-gif"><img src={phoneCallGif} alt="" /></div>
            <div className="footer-call-number-text">Free Phone Consultation <div>+91 12446 71300</div></div>

          </div>
        </div>
        <div className="footer-toe-text">
          <div>Legal</div>
          <div className="ml-3">Jobs</div>
          <div className="footer-copyright-text-pc ml-3" >Copyright © 2021 Bookmate. All rights reserved.</div>
        </div>
        <div className="footer-copyright-text"> Copyright © 2021 Bookmate. All rights reserved.</div>

        <div className="footer-logo-2">
          <img
            src={logo3}
            alt="logo3"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
