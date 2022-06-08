import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { FiBook } from "react-icons/fi";
import { BiGroup } from "react-icons/bi";
import { CgController } from "react-icons/cg";
import { BsFolder2 } from "react-icons/bs";
import { BsChatSquareText } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { BiBuildingHouse } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

function Navsidebar() {
  return (
    <div className="navbar">
      <h3>Remote SalesFuel</h3>
      <ul className="ulnavbar">
        <li>
          <span className="dashboard">
            <BiHomeAlt />
          </span>
          DASHBOARD
        </li>
        <li>
          <span className="knowledge">
            <FiBook />
          </span>
          KNOWLEDGE
        </li>
        <li>
          <span className="members">
            <BiGroup />
          </span>
          MEMBERS
        </li>
        <li>
          <span className="teams">
            <CgController />
          </span>
          TEAMS
        </li>
        <li>
          <span className="vault">
            <BsFolder2 />
          </span>
          VAULT
        </li>
        <li>
          <span className="chat">
            <BsChatSquareText />
          </span>
          CHAT
        </li>

        <li>
          <span className="settings">
            <FiSettings />
          </span>
          SETTINGS
        </li>
        <li>
          <span className="company">
            <BiBuildingHouse />
          </span>
          COMPANY
        </li>
        <li>
          <span className="myprofile">
            <CgProfile />
          </span>
          MY PROFILE
        </li>
      </ul>
      <p>Powered By TeamJeenyus</p>
    </div>
  );
}

export default Navsidebar;
