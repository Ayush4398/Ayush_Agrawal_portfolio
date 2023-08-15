import React from "react";
const year = new Date().getFullYear();

function footer(){
   return(
      <footer>
    <a className="text-decoration-none" href="./">
    <p className="copyright">@ Ayush Agrawal {year} </p>
    </a>


        
      </footer>
   );
}
export default footer;