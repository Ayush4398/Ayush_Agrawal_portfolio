import React from "react";

function contact(){
    return(
    <section>
    <form action="https://formspree.io/f/mzbyavpw" method="post">
      <h2 className="copyright">Any Suggestion</h2><br/>
      <textarea name="suggestion" rows="8" cols="50"></textarea><br/>
      <button className="btn btn-danger" type="submit" name="">Send</button>
    </form>

    <a href="mailto: agarwalayush1998@gmail.com"><img class="contacticon" src="doc/gmail.jpg" alt=""/></a>
    <a href="https://www.linkedin.com/in/ayush-agrawal-56b48b216/"><img class="contacticon" src="doc/linkedin.png" alt=""/></a>
    <a href="https://https://github.com/Ayush4398"><img class="contacticon" src="doc/github.png" alt=""/></a>
    <a href="https://www.snapchat.com/add/agarwalayush04"><img class="contacticon" src="doc/snap.jpg" alt=""/></a>
    <a href="https://www.instagram.com/ayush43998/"><img class="contacticon" src="doc/insta.jpg" alt=""/></a>
    
  </section>
    );
}

export default contact;
