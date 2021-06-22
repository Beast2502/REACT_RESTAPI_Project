import React, { Component } from 'react';
import img from '../picture/pic.jpg';
import '../css/Resume.css'

class Resume extends Component {
    render() {
        return (
            <div className="root">
                <h1><center>Resume</center></h1>
                <div className="display">
                    <div className="img" ><img src={img} height="200px" width="200px" /></div>

                    <div className="blocking">
                        <div className="heading">Personal Details</div>
                        <div className="content content1">Name Mehul Saxena</div>
                        <div >Career Objective</div>
                        <div className="content">To work in an environment that challenges me to improve and constantly<br />thrive for perfection in all the tasks allotted to me</div>
                        <div className="content content1">Contact Number : 7380526501</div>
                        <div className="content content1">Email: mehulsaxena45@gmail.com</div>
                    </div>
                    <div className="blocking">
                        <div className="heading">Personal Projects</div>
                        <div className="content">github profile :https://github.com/Beast2502</div>
                    </div>
                </div>
                <div className="display">
                    <div className="blocking">
                        <div className="heading">Education</div>
                        <div className="content content1">High School</div>
                        <div className="content">Maharana Pratap Education Centre</div>
                        <div className="content">CGPA: 9.2</div>
                        <div className="content content1">Intermediate</div>
                        <div className="content">Maharana Pratap Education Centre</div>
                        <div className="content">Percentage: 73.2</div>
                        <div className="content content1">Graduation</div>
                        <div className="content">Pranveer Singh Institute Of Technology</div>
                        <div className="content">Computer Science and Engineering</div>
                        <div className="content">Percentage: 64.2%</div>

                    </div>



                    <div className="blocking">
                        <div className="heading">Work Experience (Sept, 20-Present)</div>
                        <ol className="content">
                            <li>Working as Business Analyst in Electrovese Solutions Pvt ltd.</li>
                            <li>Skilled on analysing each and every component of the e-commerce website.</li>
                            <li>Capturing client requirement and converting them into wireframes and providing them solutions to enhance their website. </li>
                            <li>Project Coordinator for the ecommerce projects Gubbworld, zee lab pharmacy and petalawish (working).</li>
                            <li>Project Coordinator for the project Nosho , a restaurant table reservation and waiting list module app .<br />
                                Completed the whole journey from wire framing , test cases , flow doc etc .</li>
                        </ol>
                    </div>

                    <div className="blocking">
                        <div className="heading" >Part Time  -Full Stack MERN DEVELOPER at Applehant  (Feb,21-present)</div>
                        <ol className="content">
                            <li>Creating Frontend and Backend in major for them.</li>
                            <li>Working on the project called Clubly having the integration of news portal and talent hunt .</li>
                        </ol>

                    </div>


                </div>
            </div>

        );
    }
}

export default Resume;