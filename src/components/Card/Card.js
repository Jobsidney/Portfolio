import React from 'react'

function Card({link,linkName,title,description,icon}) {
  return (
    <div className="service-item padd-15">
        <div className="service-item-inner">
            <div className="icon">
              <i className={`fa fa-${icon}`}></i>
            </div>
            <h4>{title}</h4>
            <p>{description}</p>
            <a href="">{linkName}</a>
        </div>
    </div>
  )
}

export default Card