import React from 'react';

function TopBanner(props: any) {
  return (
    <>
      <div className="row">
        <div className="col-2">
          <img src="./JoelHiltonHeadshot.jpg" alt="Headshot" />
        </div>
        <div className="col align-self-center text-start">
          <h1>{props.saying}</h1>
        </div>
      </div>
    </>
  );
}

export default TopBanner;
