import React from 'react';
import './Card.css';
import { BiTimeFive } from 'react-icons/bi';
import { MdOutlinePlayLesson } from 'react-icons/md';

function Card({image, name,lastupdate, lesson, minute, department}) {
  return (
    <div className='card'>
        <img src = {image} alt="" />

        <div className="details">

        <p>{name}</p>
        <p>Last updated: {lastupdate}</p>
        <div className="lessonminute">
        <MdOutlinePlayLesson /><span className='lesson'>Lessons: {lesson}</span>
        <BiTimeFive /><span>Minute: {minute}</span>
        </div>
            
        <button>{department}</button>
        </div>
    </div>
  )
}

export default Card