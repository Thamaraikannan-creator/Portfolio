import React from 'react'
import '../styles/Navbar.css'
import Name from './Name'


function Navbar() {
    return (
        <div className='Navbar'>
       <Name/>
            <div className="anchor">
                <nav>
                    <a href="#about">About</a>

                    <a href="#Skill">Skills</a>

                    <a href="#pro">Project</a>
        

                    <a href="#Footer">Contact</a>
                </nav>
            </div>
            
        </div>
    )

}

export default Navbar