import React, { useState, useEffect } from "react";
import sitemapVisit from "../../../sitemapVisit";
import "../../../styles/SitemapDesktop.css";
import { FiMinus, FiPlus } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
function SitemapVisitDesktop() {
  const location = useLocation();
  const [expanded, setExpanded] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState([]);
  const [expand, setExpand] = useState([]);

  useEffect(() => {
    const findActivePath = (sitemap, parentIndex = "") => {
      for (let i = 0; i < sitemap.length; i++) {
        const link = sitemap[i];
        const currentIndex = parentIndex ? `${parentIndex}-${i}` : `${i}`;

        if (location.pathname === link.linkTo) {
          return [currentIndex];
        }

        if (link.nestedLinks) {
          const nestedPath = findActivePath(link.nestedLinks, currentIndex);
          if (nestedPath) {
            return [currentIndex, ...nestedPath];
          }
        }

        if (link.nested) {
          const nestedPath = findActivePath(link.nested, currentIndex);
          if (nestedPath) {
            return [currentIndex, ...nestedPath];
          }
        }

        if (link.nestLink) {
          const nestedPath = findActivePath(link.nestLink, currentIndex);
          if (nestedPath) {
            return [currentIndex, ...nestedPath];
          }
        }
      }
      return null;
    };

    const activePath = findActivePath(sitemapVisit);
    if (activePath) {
      const expandedPaths = activePath.slice(0, -1);
      setExpanded(expandedPaths[0]);
      setExpandedIndex(expandedPaths[1]);
    }
  }, [location.pathname]);

  const toggleExpand = (index) => {
    if (expanded === index) {
      setExpand(null);
      setExpanded(null);
      setExpandedIndex(null);
    } else {
      setExpanded(index);
      setExpand(null);
      setExpandedIndex(null);
    }
  };

  const toggleExpandIndex = (index) => {
    if (expandedIndex === index) {
      setExpand(null);
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
      setExpand(null);
    }
  };

  const ExpandIndex = (index) => {
    if (expand === index) {
      setExpand(null);
    } else {
      setExpand(index);
    }
  };

  const renderNestedLinks = (links, parentIndex) => {
    return links.map((link, index) => {
      const currentIndex = `${parentIndex}-${index}`;
      const isExpanded = expanded === currentIndex;
      const isExpandedIndex = expandedIndex === currentIndex;
      const isExpand = expand === currentIndex;
      const isActive = location.pathname === link.linkTo;

      return (
        <li key={index}>
          <div className="flex-div">
            <Link to={link.linkTo}>
              <span className={`title ${isActive ? "extended-title" : ""}`}>
                {link.title}
              </span>
            </Link>
            {link.nestedLinks && (
              <button onClick={() => toggleExpand(currentIndex)}>
                {isExpanded ? (
                  <FiMinus className="text-lg text-[#01997E] hover:scale-115 hover:text-[#01997E]" />
                ) : (
                  <FiPlus className="text-lg hover:scale-115 hover:text-[#01997E]" />
                )}
              </button>
            )}
            {link.nested && (
              <button onClick={() => toggleExpandIndex(currentIndex)}>
                {isExpandedIndex ? (
                  <FiMinus className="text-lg text-[#01997E] hover:scale-115 hover:text-[#01997E]" />
                ) : (
                  <FiPlus className="text-lg hover:scale-115 hover:text-[#01997E]" />
                )}
              </button>
            )}
            {link.nestLink && (
              <button onClick={() => ExpandIndex(currentIndex)}>
                {isExpand ? (
                  <FiMinus className="text-lg text-[#01997E] hover:scale-115 hover:text-[#01997E]" />
                ) : (
                  <FiPlus className="text-lg hover:scale-115 hover:text-[#01997E]" />
                )}
              </button>
            )}
          </div>

          {link.nestedLinks && isExpanded && (
            <ul>{renderNestedLinks(link.nestedLinks, currentIndex)}</ul>
          )}
          {link.nested && isExpandedIndex && (
            <ul>{renderNestedLinks(link.nested, currentIndex)}</ul>
          )}
          {link.nestLink && isExpand && (
            <ul>{renderNestedLinks(link.nestLink, currentIndex)}</ul>
          )}
        </li>
      );
    });
  };

  return (
    <div className="sidebar-main-div-global">
      <vl>
        {sitemapVisit.map((section, index) => {
          const currentIndex = `${index}`;
          const isExpanded = expanded === currentIndex;
          const isExpandedIndex = expandedIndex === currentIndex;
          const isExpand = expand === currentIndex;
          const isActive = location.pathname === section.linkTo;

          return (
            <li key={index}>
              <div className="flex-div">
                <Link to={section.linkTo}>
                  <span className={`title ${isActive ? "extended-title" : ""}`}>
                    <div className="side"></div>

                    {section.title}
                  </span>
                </Link>

                {section.nestedLinks && (
                  <button onClick={() => toggleExpand(currentIndex)}>
                    {isExpanded ? (
                      <FiMinus className="text-lg text-[#01997E] hover:scale-115 hover:text-[#01997E]" />
                    ) : (
                      <FiPlus className="text-lg hover:scale-115 hover:text-[#01997E]" />
                    )}
                  </button>
                )}
                {section.nested && (
                  <button onClick={() => toggleExpandIndex(currentIndex)}>
                    {isExpandedIndex ? (
                      <FiMinus className="text-lg text-[#01997E] hover:scale-115 hover:text-[#01997E]" />
                    ) : (
                      <FiPlus className="text-lg hover:scale-115 hover:text-[#01997E]" />
                    )}
                  </button>
                )}
                {section.nestLink && (
                  <button onClick={() => ExpandIndex(currentIndex)}>
                    {isExpand ? (
                      <FiMinus className="text-lg text-[#01997E] hover:scale-115 hover:text-[#01997E]" />
                    ) : (
                      <FiPlus className="text-lg hover:scale-115 hover:text-[#01997E]" />
                    )}
                  </button>
                )}
              </div>
              {section.nestedLinks && isExpanded && (
                <ul>{renderNestedLinks(section.nestedLinks, currentIndex)}</ul>
              )}
              {section.nested && isExpandedIndex && (
                <ul>{renderNestedLinks(section.nested, currentIndex)}</ul>
              )}
              {section.nestLink && isExpand && (
                <ul>{renderNestedLinks(section.nestLink, currentIndex)}</ul>
              )}
              <div className="line">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="214"
                  height="2"
                  viewBox="0 0 214 2"
                  fill="none"
                >
                  <path d="M0 1H213.5" stroke="#009889" stroke-width="0.6" />
                </svg>
              </div>
            </li>
          );
        })}
      </vl>
    </div>
  );
}

export default SitemapVisitDesktop;
