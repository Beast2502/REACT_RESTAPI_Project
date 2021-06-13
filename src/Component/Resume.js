import React, { Component } from 'react';
import img from '../picture/pic.jpg';
import '../css/Resume.css'

class Resume extends Component {
    render() {
        return (
            <div>
                <h1>Resume</h1>
                <img src={img} height="200px" width="200px"></img>
                <div>Name Mehul Saxena</div>
                <div>Career Objective</div>
                <div>To work in an environment that challenges me to improve and constantly<br/>thrive for perfection in all the tasks allotted to me</div>
                <div>Contact Number : 7380526501</div>
                <div>Email: mehulsaxena45@gmail.com</div>
                <div>Education</div>
                <div>High School</div>
                <div>Maharana Pratap Education Centre CGPA: 9.2</div>
                <div>Intermediate</div>
                <div>Maharana Pratap Education Centre Percentage: 73.2</div>
                <div>Graduation</div>
                <div>Pranveer Singh Institute Of Technology</div>
                <div>Computer Science and Engineering  Percentage: 64.2%</div>
                <div>Work Experience (Sept, 20-Present)</div>
                <ul>
                    <li>Working as Business Analyst in Electrovese Solutions Pvt ltd.</li>
                    <li>Project Coordinator for the project (Gubb World).</li>
                    <li>Also worked as a QA tester for different modules.</li>
                </ul>
            </div>
        );
    }
}

export default Resume;