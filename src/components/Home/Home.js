import React from 'react'
import HireBtn from '../Main-Section/HireBtn'
function Home() {
  return (
    <div>
    <section className="home section">
    <div className="container">
        <div className="row">
            <div className="home-info padd-15">
                <h3 className="hello">
                    Hello, my name is <span className="name">Job Sidney</span>
                </h3>
                <h3 className="my-profession"> i' m a <span className="typing">Software Engineer</span></h3>
                <p>I'm a full stack software developer with extensive experience for over 2 years in: website design, software development and more..</p>
                {<HireBtn words='Hire Me'/>}
                
            </div>
            <div className="home-img">
                <img src={"https://images.pexels.com/photos/1405963/pexels-photo-1405963.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} />
            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default Home