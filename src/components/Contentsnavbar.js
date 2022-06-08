import React from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi'

function Contentsnavbar() {
  return (
    <div className='contentsnavbr'>
        <h1>KNOWLEDGE</h1>
        <div className="profiledetails">
            <button>CREATE COURSE</button>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU" alt="" className='imgclass'/>
            <span className='dotmenu'><BiDotsVerticalRounded /></span>
        </div>
    </div>
  )
}

export default Contentsnavbar