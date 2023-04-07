import React from 'react';
//Home page
function TopBanner(props: { saying: string }) {
  return (
    <div className="row align-items-center bg-light p-4">
      <div className="col-2">
        <img
          src="./JoelHiltonHeadshot.jpg"
          alt="Headshot"
          className="img-fluid rounded-circle"
        />
      </div>
      <div className="col text-start">
        <h1 className="text-primary">{props.saying}</h1>
        <p>
          Greetings! My name is Joel Hilton. I made this website to keep track
          of a whole bunch of movies that I enjoy. I even have a podcast where I
          talk about all things movies. Interact with the navigation bar to see
          my movie collection and my podcast!
        </p>
      </div>
    </div>
  );
}

export default TopBanner;
