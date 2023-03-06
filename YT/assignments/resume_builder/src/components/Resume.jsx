import { useState } from "react";
import Sections from "./sub-components/Sections";

function Resume() {
  //const [experience, setExperience] = useState([]);
  //const [education, setEducation] = useState([]);
  //const [skills, setSkills] = useState([]);
  //--TODO: change the program to use states instead of an array

  resume={
    experience: [{year: 2012, company: 'xyz', role: 'something'}],
    education: [],
    skills: []
  }


  return (
    <>
      <h1>Resume</h1>
      <Sections el="hi" />
    </>
  );
}
export default Resume;
