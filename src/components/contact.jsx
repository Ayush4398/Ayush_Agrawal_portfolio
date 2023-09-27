

function contact(){
    return(
    <>
    <form action="https://formspree.io/f/mzbyavpw" method="post">
      <h1>Any Suggestion...?</h1><br/>
      <div>
      <textarea name="suggestion" className="form-control" id="exampleFormControlTextarea1" rows="12"></textarea>
      </div>
      <br/><br/>
      <button className="btn btn-primary" type="submit" name="">Share</button>
    </form>
    <br/>
    <div>
    <a href="mailto: agarwalayush1998@gmail.com"><img className="contacticon" src="doc/gmail.jpg" alt=""/></a>
    <a href="https://www.linkedin.com/in/ayush-agrawal-56b48b216/"><img className="contacticon" src="doc/linkedin.png" alt=""/></a>
    <a href="https://https://github.com/Ayush4398"><img className="contacticon" src="doc/github.png" alt=""/></a>
    <a href="https://www.snapchat.com/add/agarwalayush04"><img className="contacticon" src="doc/snap.jpg" alt=""/></a>
    </div>
  </>
    );
}

export default contact;
