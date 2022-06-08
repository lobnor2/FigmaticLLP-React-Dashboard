import React from 'react';
import './Contents.css';
import Contentsnavbar from "./components/Contentsnavbar";
import Contentsnavbartwo from "./components/Contentsnavbartwo";

function Contents() {
  return (
    <div className='contents'>
        <Contentsnavbar />
        <Contentsnavbartwo />

    </div>
  )
}

export default Contents