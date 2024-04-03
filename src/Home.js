import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const sequence = [
    ' a Developer',   // Types 'One'
    4000,    // Waits 1s
    ' a Creator',   // Deletes 'One' and types 'Two'
    4000,    // Waits 2s
    ' a Thinker',  // Types 'Three' without deleting 'Two',
  ]



const Home = () => (
    <div className='content'>
      <div className='default'>
        <img className='profilePic' src="/profilepic.jpeg" />

        <div className='text'>Hey I'm Aman! Im&nbsp;  <TypeAnimation sequence={sequence} cursor={true} repeat={Infinity} style={{ display: 'flex' }}  /> </div>
        
      </div>
    </div>
);

export default Home;
