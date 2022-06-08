import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import Card from "../components/Card";

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
                <input type="text" placeholder='Select team' className='textinput' />
                <i><IoIosArrowDown /></i>
            </div>
        </div>
        <div className="cards">

        <Card image="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" name="XYZ" lastupdate="04/08/22" lesson="1" minute="13" department="Marketting"/>
        <Card image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" name="Sales vs Marketing" lastupdate="4/08/22" lesson="3" minute="25" department="sales and marketing"/>
        <Card image="https://media.istockphoto.com/photos/delivery-van-delivers-in-a-city-picture-id1297658517?b=1&k=20&m=1297658517&s=170667a&w=0&h=V2lRXjntY0rL0JDz3gDzun5P1VLQ4Gp-ouAlsEperZg=" name="How to unclog a Sink" lastupdate="4/08/22" lesson="6" minute="15" department="Sales"/>
        <Card image="https://media.istockphoto.com/photos/website-traffic-analytics-data-on-laptop-computer-picture-id1384447555?b=1&k=20&m=1384447555&s=170667a&w=0&h=xwBkqnslrxGavUgq44A9Q0SgLax-N-mQYil5HahwOA8=" name="How Google Analytics Ruined Marketing" lastupdate="4/08/22" lesson="3" minute="25" department="Sales"/>
        <Card image="https://media.istockphoto.com/photos/render-of-social-media-business-concept-picture-id1346575545?b=1&k=20&m=1346575545&s=170667a&w=0&h=7EE22iVng0zYpz9ddyJNQF1deERp9TVdrRkHO57NWuA=" name="Social Media Marketing 101" lastupdate="4/08/22" lesson="3" minute="58" department="Sales"/>
        <Card image="https://media.istockphoto.com/photos/compass-with-training-word-on-chalkboard-3d-rendering-picture-id1221182527?b=1&k=20&m=1221182527&s=170667a&w=0&h=kod70qAMVwgwUbFDXFUPuoriIF3BRTn9XCczGD9ODiQ=" name="Compliance Training" lastupdate="" lesson="" minute="" department=""/>
        <Card image="https://media.istockphoto.com/photos/design-team-discussing-plans-together-picture-id1350041645?b=1&k=20&m=1350041645&s=170667a&w=0&h=LvhLjsyW0DxJmBvUXDHPNfofF3VPlhLn25Dq8zYwIu0=" name="Top tricks to Bargaining" lastupdate="" lesson="" minute="" department=""/>

        </div>

    </div>
  )
}

export default Contentsnavbartwo