import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
 var resume=(
   <div>
     <h1 className='h1'>Create Resume</h1>
        <header className='header'>
            <h2>Hasti sachapara</h2>
            <p>Email: sachhasti@gmail.com | Phone No: 7990145684</p>
            <p>Location: Bhavnager, Gujarat, India</p>
        </header>

        <section className='section'>
            <h2>Career Objective</h2>
            <p>To obtain a position as a web developer where I can use my skills in
          HTML, CSS, JavaScript,<br/> and React to build clean and user-friendly
          web applications.</p>
        </section>

        <section className='section'>
            <h2>Education</h2>
            <ul>
                <li>
            <strong>Bachelor of Computer Applications (BCA)</strong> -
            Nandkuvarba Mahila College, Bhavnager  University
            <br />
            2022 - 2025
          </li>
           <li>
            <strong>HSC (12th Commerce)</strong> - B.N.Virani School, Bhavnager
            <br />
            2020 - 2022
          </li>
            </ul>
        </section>

        <section className='section'>
            <h2>Technical Skills</h2>

            <ul>
                <li>HTML5, CSS</li>
                <li>JavaScript</li>
                <li>Nodejs</li>
                <li>Git & Github basics</li>
            </ul>
        </section>

        <section className='section'>
            <h2>Projects</h2>

            <h4 className='h4'>Diyan Enterprises</h4>
            <ul>
                <li>Static website using HTML, CSS, Bootstrap and basic JavaScript</li>
                <li>Pages: Home, About us, Contact us, Latest Projects, Products, Services</li>
                 <li>Improved layout and content for better user experience.</li>
            </ul>

        </section>
         <section className='section'>
        <h2>Personal Details</h2>
        <ul>
          <li>Date of Birth: 31 dec 2004 (example)</li>
          <li>Languages: Gujarati</li>
          <li>Hobbies: Coding, cooking, Music, Learning new tech</li>
        </ul>
      </section>
   </div>
 )
root.render(resume);



