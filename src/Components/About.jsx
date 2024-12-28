import React from 'react'
import kanna from '../thamarai.jpg'
import '../styles/About.css'

function About() {
    return (
        <div id='about' className='thamarai'>
            <img src={kanna} alt="" />
            <div className="desc">
                <h1><span> I'm Thamaraikannan</span><br /></h1>
                <p>As a B.Sc Computer Science student at MGR Arts and Science College.I have developed a strong foundation  in both front-end and back-end technologies,expanding my expertise.
                    My journey includes a comprehensive understanding of HTML,CSS,Javascript,and modern framework  as Reactjs.I have successfully completed projects such as Instagram clone and variety of web design mini-projects.I am also pursuing
                    an intensive full-stack development course Q&J Spider,which is is further enriching my knowledge of both client-side and server-server development.
                </p>

            </div>
        </div>

    )
}

export default About