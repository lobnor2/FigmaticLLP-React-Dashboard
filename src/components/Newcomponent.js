import React from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";

function Newcomponent() {
  return (
    <>
      <div className="profiledetails">
        <button>CREATE COURSE</button>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
          alt=""
          className="imgclass"
        />
        <span className="dotmenu">
          <BiDotsVerticalRounded />
        </span>
      </div>
    </>
  );
}

export default Newcomponent;
