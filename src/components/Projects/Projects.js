import "./Projects.css";
import wtwrPage from "../../images/wtwrPage.jpg";
import jsPage from "../../images/jobSeekerPage.jpg";

const Projects = () => {
    return (
      <div className="projects__body">
        <img className="projects__wtwr-image" src={wtwrPage}>
  
        </img>
        <p className="projects__wtwr-about">
        I made use of React, and Node.js to build the front-end so that the user can add clothing items to the app to be selected depending on the day and the weather.
And benefited from MongoDB, JavaScript, and Express to build the back-end and API.
  </p>
<img className="projects__jsPage-image" src={jsPage}>

</img>
  <p className="projects__jsPage-about">
  I made use of React, and Node.js to build the front-end for users to be able to find jobs populated by the Muse API.
 And employed React Context API for dependency injection.
  </p>
      </div>
    );
  };
  
  export default Projects;