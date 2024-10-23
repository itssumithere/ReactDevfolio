import React from 'react'
import './Home.css'

function Home() {
  return (
    <>
        <div id='box1'>
        <div id='box2'>
            <span id='text1'><span id='textred'>I</span><sup>,</sup>m Sumit</span>
            <br />
            <span id='text2'>Web Developer</span>
            <br />
            <div id='text3'  className='text-pretty bold border-t-4 border-b-4 border-gray-950'>As a passionate and motivated full stack developer, I bring expertise in HTML, CSS, and JavaScript, with a strong focus on modern web development frameworks like React. My backend skills are powered by Node.js, Express, and MongoDB, allowing me to build robust and scalable applications. I am eager to contribute and grow in a dynamic environment, leveraging my skills to deliver high-quality solutions.</div>
            <div id='myimg' className=''></div>
        </div><div id='box3'>
            <div id='box4' >
                <h3 className=' text-white text-3xl font-semibold'>About Me</h3>Recent graduate with a degree in [Master of Computer applications] and hands-on experience in building full-stack web applications. Proficient in HTML, CSS, JavaScript, React, Node.js, and MongoDB.</div>
            <div id='box5'><h3 className='text-white text-3xl font-semibold'>My Work</h3>I've successfully completed multiple small projects, including a dynamic school website, a real-time currency converter, and a responsive restaurant website.  </div>
        </div>
        </div> 
    </>
  )
}

export default Home
