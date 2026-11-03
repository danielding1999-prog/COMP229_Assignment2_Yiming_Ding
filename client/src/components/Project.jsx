import gradeCalculator from '../assets/Grades Calculator.JPG';
import landingPage from '../assets/Landing Page.JPG';
import dotTrack from '../assets/Capture.JPG';

function Project(){
    return (
        <div>
            <h1>My Project</h1>
            <p>This is a description of my project.</p>
            <h2>Project 1: Grade Calculator</h2>
            <img src={gradeCalculator} style = {{ height: '200px', width: 'auto' }} alt="Grade Calculator" />
            <p>This is a grade calculator project that I developed. This is my first project using python and used a lot of inheritance</p>
            <h2>Project 2: Landing Page</h2>
            <img src={landingPage} style = {{ height: '300px', width: 'auto' }} alt="Landing Page" />
            <p>This is a landing page project that I developed. I only used HTML and CSS.</p>
            <h2>Project 3: Dot Track</h2>
            <img src={dotTrack} style = {{ height: '300px', width: 'auto' }} alt="Dot Track" />
            <p>This is a dot track project that I developed. I only used JavaScript and implemented wall collision detection.</p>
        </div>
    );
}

export default Project;