
import { Link } from "react-router-dom";


function Header() {
    return (
     <header>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark margin">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand margin copyright" href="/">Ayush Agrawal</a>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className=" navbar-nav ms-auto margin">
            <li className="nav-item margin "><Link className="nav-link active " aria-current="page" to="/">Home</Link></li>
            <li className="nav-item margin"><Link className="nav-link active " aria-current="page" to="/project">Project</Link></li>
            <li className="nav-item margin"><Link className="nav-link active " aria-current="page" to="/exp">Experience</Link></li>
            <li className="nav-item margin"><Link className="nav-link active " aria-current="page" to="/contact">Contact</Link></li>
            {/* <li className="nav-item margin"><a className="nav-link active " aria-current="page" href="#a">Tools</a></li> */}
            <li>
            </li>
          </ul>
        </div>
      </nav>
     </header>
     
    );
  }
  
  export default Header;