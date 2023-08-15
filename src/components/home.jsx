import React from "react";

function home(){
    return(
        <div className="">
            <div className="row" >
                <div className="col-lg-6">
                 <img className="gifsize" src="doc/handwave.gif" alt=""/>
                 <h1>Hello!</h1>
                </div>
                <div className="col-lg-6">
                <a className="text-decoration-none copyright" href="https://drive.google.com/file/d/15Ipk3uf0TXXnDU5fXqGMX8S8c2gEaTxm/view?usp=sharing"><h1>Resume Link</h1></a>
                <h3 className="introline">I'm a web designer and developer who can make a website for you as per your needs, whatever the layout you want, whatever the way you want.</h3>
                </div>
            </div>
        </div>
    );
}
export default home;
