import React from 'react'
import './TableOfContent.css'

const TableOfContent = ({data}) => {

  const scrollToContent=(ref)=>{
    console.log(ref);

    
      if (ref.current) {
        const offsetPosition = ref.current.offsetTop - 20; // Adjusting for 20px above
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
  }

  return (
    <div className="table-of-content">
        <div className="toc-heading">
            Table of Contents
        </div>
        <div className="toc-body">
            <ul style={{ 
              listStylePosition: 'inside',
              width:'100%'
            }}>
           {
            data && data.map((item)=>(
                <li key={item.id} onClick={()=> scrollToContent(item.scrollTo)}>{item.content}</li>
            ))
           }
           </ul>
        </div>
    </div>
  )
}

export default TableOfContent