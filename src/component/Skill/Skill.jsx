import React from 'react'
import './Skill.css'
import Card from './Card'
import './Card.css'

function Skill() {
    return (
        <>
            <div id='sbox1'>
                <div id='skilltitle' className='text-center text-white text-7xl'>
                    SKILLS
                </div>
                <div className="skill flex gap-24 px-16 py-4 flex-wrap " >
                    <Card title='HTML' pno='5'  />
                    <Card title='CSS3' pno='5'  />
                    <Card title='JAVASCRIPT' pno='5'  />
                    <Card title='REACT.JS' pno='5'  />
                    <Card title='EXPRESS' pno='5'  />
                    <Card title='NODE.JS' pno='5'  />
                    <Card title='MONGODB' pno='5'  />
                    <Card title='CORE JAVA' pno='5'  />
                    <Card title='GITHUB' pno='5'  />
                    <Card title='SQL' pno='5'  />
                </div>
            </div>
        </>
    )
}

export default Skill
