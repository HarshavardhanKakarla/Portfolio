import React from 'react'
import { Bio } from '../../data/constants';

const About = () => {
  return (
    <div>
      <p>Hello, I am <br /> {Bio.name}</p>
    </div>
  )
}

export default About;

