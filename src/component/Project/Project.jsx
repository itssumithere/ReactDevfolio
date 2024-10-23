import React from 'react'
import Pcard from './Pcard'
import './Project.css'

function Project() {
  return (
    <>
      <div id='pbox1'>
        <div id='skilltitle' className='text-center text-white text-7xl'>
          PROJECT
        </div>
        <div className="skill flex gap-8 px-16 py-4 flex-wrap">
          <Pcard
            title="Text Editor WebApp"
            des="it is webapp can be used to edit the text.its a webapp for Text editing built using React, Express , CSS,JavaScript, html."
            img=""
            url= "https://github.com/itssumithere/FIRST-REACT-APP-FOR-WORDCOUNT"
          />
          <Pcard
            title="Restaurant Menu website"
            des="its a website consist of Frontend for Menu of food of a restaurant.its responsive and attractive. build using HTML5 , CSS3 , BOOTSTRAP, JAVASCRIPT"
            img="https://www.shutterstock.com/image-photo/artificial-intelligence-ai-research-technology-2495742229"
          />
          <Pcard
            title="School Websites"
            des="it is a website which contains multiple page and information about a school.
            Build using HTML , CSS , BOOTSTRAP"
            img="https://www.shutterstock.com/image-photo/web-development-code-programming-on-2495742229"
          />
          <Pcard
            title="Portfolio"
            des="it is website contains all information about me and some mini game
            and app develop by me. its a profile website for me built using HTML, CSS , JAVASCRIPT"
            img="https://www.shutterstock.com/image-photo/cybersecurity-concept-security-code-2495742229"
          />
          <Pcard
            title="Coffee House"
            des="high attractive website for coffee cafe . build using HTML , CSS , BOOTSTRAP"
            img="https://www.shutterstock.com/image-photo/cybersecurity-concept-security-code-2495742229"
          />
        </div>
      </div>
    </>
  )
}

export default Project
