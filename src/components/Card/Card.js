import React from 'react'

function Card({link,key,linkName,title,description,icon,False,img}) {
  return (
    <div className="service-item padd-15">
        <div className="service-item-inner" key={key}>
            {False?
            <div className="icon">
              <i className={`fa fa-${icon}`}></i>
            </div>:
            <div className="gitImg">
             <img src={img} alt="" />
            </div>}
            <h4>{title}</h4>
            <p>{description}</p>
            <a href={link}>{linkName}</a>
        </div>
    </div>
  )
}

export default Card