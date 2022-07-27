import React from 'react'

function Skills() {
    function SkillsAnimation({skill,rate}){
        return (
            <div className="skill-item padd-15">
                <h5>{skill}</h5>
                <div className="progress">
                    <div className="progress-in" style={{width: rate+'%'}}></div>
                        <div className="skill-percent">{rate+'%'}</div>
                </div>
            </div>
        )
    }

    const skillsData=[
        {language:'HTML & CSS',rate: 90},
        {language:'REACT',rate: 86},
        {language:'RUBBY',rate: 85},
        {language:'JAVASCRIPT',rate: 90},
        {language:'GOLANG',rate: 89},
        {language:'NODE JS',rate: 90},
        {language:'FLUTTER',rate: 78}
]
  return (
    <div className="skills padd-15">
        <div className="row">
            {skillsData.map(item=>
                <SkillsAnimation skill={item.language} rate={item.rate}/>
                )}
        </div>
    </div>
  )
}

export default Skills