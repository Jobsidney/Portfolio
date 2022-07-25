import React from 'react'

function MainSection() {
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
                <a href="#contact" className="btn hire-me">Hire Me</a>
            </div>
            <div className="home-img">
                {/* <img src="https://static.toiimg.com/photo/83890825/83890825.jpg?v=3" alt="A photo of me"> */}
            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default MainSection