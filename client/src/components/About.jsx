import mugshot from '../assets/Mug_Shot.jpg';
import myResume from '../assets/Yiming Ding Resume Co-op Developer.pdf';
const skills = ["CSS", "HTML", "JavaScript"];

function About(){
    return(
        <div>
            <h1>About Me</h1>
            <img src={mugshot} style={{ height: "280px", width: "200px" }} alt="Daniel Ding" />
            <p>My name is Daniel Ding.</p>
            <p>I am a second year student in Centennial College have just completed my first year of study.</p>
            <h2>My Skills</h2>
            <ul>
                {skills.map((skill, i) => (<li key = {i}>{skill}</li>))}
            </ul>
            <p>Link to my resume:</p>
            <a href={myResume} target="_blank" rel="noopener noreferrer">
                My Resume
            </a>
        </div>

    )
}
export default About;

