import React from "react";

function experience(){
    return(
        <section>
          <h1 className="copyright">Experience</h1>
        <div className="container">
          <div className="row">
          <div className="col-lg-6">
               <h4 className="workpoints">Client :- Shree Shyam Impex</h4>
               <ul>
                 <li className="workpoints">Constructed an e-commerce website for Shree Shyam Impex that supply and manufacture the goods and services.</li>
                 <li className="workpoints">Designed and developed using HTML, CSS, jquery and JavaScript.</li>
                 <li className="workpoints">For hosting service used AWS and learnt about S3 and Route53 service of AWS.</li>
               </ul>
            </div>
            <div className="col-lg-6">
              <a className="text-decoration-none" href="http://www.shreeshyamimpex.co.in/">
                <img className="projectimage" src="doc/ssi.png" alt=""/>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
}

export default experience;