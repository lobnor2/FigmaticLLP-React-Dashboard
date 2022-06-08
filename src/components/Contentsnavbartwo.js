import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

function Contentsnavbartwo() {
  return (
    <div className='contentsnavbartwo'>
        <div className="menu">
            <div className="navmenu">
                <p className='active'>ALL</p>
                <p>LIVE</p>
                <p>DRAFT</p>
                <p>ARCHIVED</p>

            </div>
            <div className="selectmenu">
                <input type="text" placeholder='Select team' className='textinput'/><IoIosArrowDown />
            </div>
        </div>


    </div>
  )
}

export default Contentsnavbartwo