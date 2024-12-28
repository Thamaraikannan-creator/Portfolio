import React from 'react'
import '../styles/Skill.css'

function Skill() {
  return (
    <div className='skill'>
      <section id='Skill' className='head'>
        <h2>Skills</h2>
        
        <div className="image">
          <div className="skill-item" >
            <img src="https://img.icons8.com/?size=80&id=YWDsCjL0c2qv&format=png" alt="HTML" />
            <h3>HTML</h3>
          </div>
          <div className="skill-item">
            <img src="https://img.icons8.com/?size=48&id=7gdY5qNXaKC0&format=png" alt="CSS" />
            <h3>CSS</h3>
          </div>
          <div className="skill-item">
            <img src="https://img.icons8.com/?size=48&id=PXTY4q2Sq2lG&format=png" alt="javascript" />
            <h3>Javascript</h3>
          </div>

          <div className="skill-item">
            <img src="https://img.icons8.com/?size=80&id=asWSSTBrDlTW&format=png" alt="Reactjs" />
            <h3>Reactjs</h3>
          </div>
          <div className="skill-item">
            <img src="https://img.icons8.com/?size=80&id=hGdCwhSHUe6L&format=png" alt="Python" />
            <h3>Python</h3>
          </div>
          <div className="skill-item">
            <img src="https://img.icons8.com/?size=48&id=qV-JzWYl9dzP&format=png" alt="JavaScript" />
            <h3>Django</h3>
          </div>
          <div className="skill-item">
            <img src="https://img.icons8.com/?size=64&id=DRcT2zIar7Wj&format=png" alt="Python" />
            <h3>SQL</h3>
          </div>
          <div className="skill-item">
            <img src="https://cdn.intuji.com/2023/10/MySQL.png" alt="Mysql" />
            <h3>MySQL</h3>
          </div>
        </div>

      </section>

    </div>



  )
}

export default Skill