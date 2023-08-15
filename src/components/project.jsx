import React from "react";

function project(){
    return(
        <section>
        <div className="container">
          <div className="row">
            
            <div className="col-lg-4">
              <a className="text-decoration-none" href="https://ayush4398.github.io/Music-piano/">
                <img className="projectimage" src="doc/bored.png" alt=""/>
                <h4 className="">Bored? play this!</h4>
              </a>
            </div>
            <div className="col-lg-4">
              <a className="text-decoration-none" href="https://ayush4398.github.io/library/">
                <img className="projectimage" src="doc/mpl.png" alt=""/>
                <h4 className="">My Library</h4>
              </a>
            </div>
            <div className="col-lg-4">
              <a className="text-decoration-none" href="https://ayush4398.github.io/Simon-game/">
                <img className="projectimage" src="doc/simon.png" alt=""/>
                <h4 className="">Simon Game</h4>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
}

export default project;