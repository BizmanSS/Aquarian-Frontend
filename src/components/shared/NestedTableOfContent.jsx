import React from "react";
import "./TableOfContent.css";

const TableOfContents = ({ data }) => {
    
  const scrollToContent = (ref) => {

    if (ref.current) {
      
        const offsetPosition = ref.current.offsetTop - 40; // Adjusting for 20px above
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
  };

  const renderItems = (items, isTopLevel = false) => {
    return (
      <div className="table-of-content">
         {isTopLevel && <div className="toc-heading">Table of Contents</div>}
         <ul
  style={{
    listStylePosition: "inside",
    width: "100%",
    margin:'auto'
  }}
>
  {items.map((item, index) => (
    <li key={index} onClick={() => scrollToContent(item.scrollTo)}>
      {item.title}
      {item.subItems && (
        <ul style={{ 
          listStylePosition: "inside",
          listStyleType: "circle",
          }}>
          {item.subItems.map((subItem, subIndex) => (
            <li key={subIndex} onClick={() => scrollToContent(subItem.scrollTo)}>
              {subItem.title}
            </li>
          ))}
        </ul>
      )}
    </li>
  ))}
</ul>

      </div>
    );
  };

  return <nav>{renderItems(data , true)}</nav>;
};

export default TableOfContents;
