import sitemapImmigrate from "../../../sitemapImmigrate";
import sitemapBusiness from "../../../sitemapBusiness";
import sitemapEmployers from "../../../sitemapEmployers";
import sitemapSponsorship from "../../../sitemapSponsorship";
import sitemapStudy from "../../../sitemapStudy";
import sitemapVisit from "../../../sitemapVisit";
import sitemapWork from "../../../sitemapWork";

import banner from '../../../Assets/menus/siteMapBanner.jpeg';
import './SiteMapMenu.css';
import { useState, useEffect, useRef } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import {
    FaInstagram,
    FaFacebook,
    FaYoutube,
    FaLinkedin,
    FaThreads,
} from "react-icons/fa6";

function SiteMapMenu(props) {
    const [siteMap, setSiteMap] = useState(sitemapImmigrate);
    const [showSubHeaders, setShowSubHeaders] = useState(props.h1);
    const [showSubSubHeaders, setShowSubSubHeaders] = useState(props.h2);
    const [showSubSubSubHeaders, setShowSubSubSubHeaders] = useState(props.h3);

    // Ref for the current page (whether it's h1, h2, or h3)
    const currentPageRef = useRef(null);
    const menuRef = useRef(null);

    useEffect(() => {
        // Assign the correct sitemap based on the type
        switch (props.type) {
            case 'B':
                setSiteMap(sitemapBusiness);
                break;
            case 'E':
                setSiteMap(sitemapEmployers);
                break;
            case 'S':
                setSiteMap(sitemapSponsorship);
                break;
            case 'ST':
                setSiteMap(sitemapStudy);
                break;
            case 'V':
                setSiteMap(sitemapVisit);
                break;
            case 'W':
                setSiteMap(sitemapWork);
                break;
            default:
                break;
        }
    }, [props.type]);

   useEffect(() => {
        if (currentPageRef.current && menuRef.current) {
            const elementTopPosition = currentPageRef.current.offsetTop;
            const containerHeight = menuRef.current.clientHeight;
            const elementHeight = currentPageRef.current.clientHeight;

            const scrollPosition = elementTopPosition - (containerHeight / 2) + (elementHeight / 2);

            menuRef.current.scrollTo({
                top: scrollPosition,
                behavior: 'smooth',
            });
        }
    }, []);

    return (
        <div className="site-map-menu">
            <div className="site-map-wrapper scrollbar-hide" ref={menuRef}>
                <img src={banner} alt="" className="site-map-banner" />
                <div className="site-map-tree">
                    {siteMap.map((item, index) => (
                        <>
                            <div className="site-map-header" key={index}>
                                <a
                                    ref={props.h1 === item.title ? currentPageRef : null}  // Attach ref to the current h1 title
                                    className={`site-map-link ${!props.h2 && props.h1 === item.title ? 'site-map-current-page' : ''}`}
                                    href={item.linkTo}
                                >
                                    {item.title}
                                </a>
                                {item.nestedLinks && (
                                    <button
                                        className={`${showSubHeaders === item.title ? 'site-map-header-minus' : 'site-map-header-plus'}`}
                                        onClick={() => setShowSubHeaders(showSubHeaders === item.title ? null : item.title)}
                                    >
                                        <div className="relative w-full h-full flex items-center justify-center">
                                            <FiPlus
                                                className={`transition-all duration-500 ease-in-out text-lg text-white absolute ${showSubHeaders === item.title ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`}
                                            />
                                            <FiMinus
                                                className={`transition-all duration-500 ease-in-out text-lg text-white absolute ${showSubHeaders === item.title ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`}
                                            />
                                        </div>
                                    </button>
                                )}
                            </div>
                            <div className={`site-map-sub-header-wrapper ${showSubHeaders === item.title ? "site-map-sub-header-wrapper-show" : ''}`}>
                                <div className="site-map-sub-header-inner-wrapper">
                                    {item.nestedLinks?.map((subItem) => (
                                        <>
                                            <div className="site-map-sub-header">
                                                <a
                                                    ref={props.h2 === subItem.title ? currentPageRef : null}  // Attach ref to the current h2 title
                                                    className={`site-map-sub-link ${!props.h3 && props.h2 === subItem.title ? 'site-map-current-page' : ''}`}
                                                    href={subItem.linkTo}
                                                >
                                                    {subItem.title}
                                                </a>

                                                {subItem.nested && (
                                                    <button
                                                        className={`${showSubSubHeaders === subItem.title ? 'site-map-sub-header-minus' : 'site-map-sub-header-plus'}`}
                                                        onClick={() => setShowSubSubHeaders(showSubSubHeaders === subItem.title ? null : subItem.title)}
                                                    >
                                                        <div className="relative w-full h-full flex items-center justify-center">
                                                            <FiPlus
                                                                className={`transition-all duration-500 ease-in-out text-lg text-white absolute ${showSubSubHeaders === subItem.title ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`}
                                                            />
                                                            <FiMinus
                                                                className={`transition-all duration-500 ease-in-out text-lg text-white absolute ${showSubSubHeaders === subItem.title ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`}
                                                            />
                                                        </div>
                                                    </button>
                                                )}
                                            </div>

                                            <div className={`site-map-sub-header-wrapper ${showSubSubHeaders === subItem.title ? "site-map-sub-header-wrapper-show" : ''}`}>
                                                <div className="site-map-sub-header-inner-wrapper">
                                                    {subItem.nested?.map((subsubItem) => (
                                                        <>
                                                            <div className="site-map-ss-header">
                                                                <a
                                                                    ref={!props.h4 && props.h3 === subsubItem.title ? currentPageRef : null}  // Attach ref to the current h3 title
                                                                    className={`site-map-ss-link ${!props.h4 && props.h3 === subsubItem.title ? 'site-map-current-page' : ''}`}
                                                                    href={subsubItem.linkTo}
                                                                >
                                                                    {subsubItem.title}
                                                                </a>

                                                                {subsubItem.nestLink && (
                                                                    <button
                                                                        className={`${showSubSubSubHeaders === subsubItem.title ? 'site-map-ss-header-minus' : 'site-map-ss-header-plus'}`}
                                                                        onClick={() => setShowSubSubSubHeaders(showSubSubSubHeaders === subsubItem.title ? null : subsubItem.title)}
                                                                    >
                                                                        <div className="relative w-full h-full flex items-center justify-center">
                                                                            <FiPlus
                                                                                className={`transition-all duration-500 ease-in-out text-lg text-white absolute ${showSubSubSubHeaders === subsubItem.title ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`}
                                                                            />
                                                                            <FiMinus
                                                                                className={`transition-all duration-500 ease-in-out text-lg text-white absolute ${showSubSubSubHeaders === subsubItem.title ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`}
                                                                            />
                                                                        </div>
                                                                    </button>
                                                                )}
                                                            </div>

                                                            <div className={`site-map-sub-header-wrapper ${showSubSubSubHeaders === subsubItem.title ? "site-map-sub-header-wrapper-show" : ''}`}>
                                                                <div className="site-map-sub-header-inner-wrapper">
                                                                    {subsubItem.nestLink?.map((subsubsubItem) => (
                                                                        <a
                                                                            ref={props.h4 === subsubsubItem.title ? currentPageRef : null}
                                                                            className= {`site-map-sss-link  ${props.h4 === subsubsubItem.title ? 'site-map-current-page' : ''}  `}
                                                                            href={subsubsubItem.linkTo}>
                                                                            {subsubsubItem.title}
                                                                        </a>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </>
                                                    ))}
                                                </div >
                                            </div>
                                        </>
                                    ))}
                                </div >
                            </div>
                        </>
                    ))}
                </div >

                <div className="site-map-connect-icons">
                    <a href="https://www.linkedin.com/company/aquarian-immigration-services/" className="">
                        <FaLinkedin size={25} className="bg-transparent" />
                    </a>
                    <a href="https://www.facebook.com/people/Aquarian-Immigration/61558242973262/" className="">
                        <FaFacebook size={25} className="bg-transparent" />
                    </a>
                    <a href="https://www.threads.net/@aquarian_immigration" className="">
                        <FaThreads size={25} className="bg-transparent" />
                    </a>
                    <a href="https://www.instagram.com/aquarian_immigration/" className="">
                        <FaInstagram size={25} className="bg-transparent" />
                    </a>
                    <a href="/" className="">
                        <FaYoutube size={25} className="bg-transparent" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SiteMapMenu;
