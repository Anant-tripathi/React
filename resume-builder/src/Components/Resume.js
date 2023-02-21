import "./Resume.css";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Extracurriculars from "./Extracurriculars";
import Interests from "./Interests";

function Resume({
    name,
    education: { tenth, twelth, graduation },
    interests: { int1, int2, int3 },
    skills: { skill1, skill2, skill3 },
    experience: { first, second, third },
}) {

    console.log("edu", { graduation })
    return (
        <>
            <div className="container">
                <h1>Resume</h1>
                <h2>{name}</h2>
                <hr />

                <Education {...{ tenth, twelth, graduation }} />
                <Experience {...{ first, second, third }} />
                <Skills {...{ skill1, skill2, skill3 }} />
                <Interests {...{ int1, int2, int3 }} />
                <Extracurriculars />
            </div>
        </>
    )
}

export default Resume;
// let user = {
//     name: "Emily",
//     education: {
//       tenth: 10,
//       twelth: 12,
//       graduation: "BCA"
//     },
//     interests: {
//       int1: "Drawing",
//       int2: "Photography",
//       int3: "Dancing"
//     },
//     skills: {
//       skill1: "HTML",
//       skill2: "CSS",
//       skill3: "JS",
//     },
//     experience: {
//       first: "Amity",
//       second: "Certybox",
//       third: "Arpan"
//     }
//   }