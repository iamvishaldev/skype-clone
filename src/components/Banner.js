import React from "react";

const Banner = () => {
  return (
    <div className="container mt-5">
      <div class="jumbotron" style={{ borderRadius: "1px 15px 15px 15px" }}>
        <div className="row">
          <div className="col-md-6 ">
            <h1 style={{ marginBottom: 25 }}>
              <b>Meet Now on Skype</b>
            </h1>
            <p>
              Create video calls with friends and family with one click!
              <br /> No sign ups. No downloads required.
            </p>
            <h5
              style={{
                color: "blue",
              }}
            >
              <i class="far fa-play"></i>
              <b>PLAY VIDEO</b>
            </h5>
            <button
              className="btn btn-primary"
              style={{
                padding: 17,
                borderRadius: 50,
                marginTop: 30,
              }}
            >
              <b> Create a free video call</b>
            </button>
            <p
              style={{
                textDecoration: "underline",
                color: "blue",
                marginTop: 10,
              }}
            >
              or Download Skype
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="https://secure.skypeassets.com/content/dam/scom/home-new/33grid-holiday-edition.png"
              alt="banner"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
