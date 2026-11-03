import DB from '../assets/ER_Diagram_DB4Hotel.png';
import python from '../assets/python.png';
import landingPage from '../assets/Landing Page.JPG';

function Service(){
    return (
        <div>
            <h1>My Services</h1>
            <p>This is a description of my services.</p>
            <h2>Service 1: Web Development</h2>
            <img src={landingPage} style = {{ height: '200px', width: 'auto' }} alt="Landing Page" />
            <h2>Service 2: General Programming</h2>
            <img src={python} style = {{ height: '200px', width: 'auto' }} alt="Python" />
            <h2>Service 3: Database Management</h2>
            <img src={DB} style = {{ height: '200px', width: 'auto' }} alt="Database Diagram" />
        </div>
    );
}

export default Service;