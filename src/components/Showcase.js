import React from "react";
import "../components/Showcase.css";
import nocall from "../images/no-calls.png";

const Showcase = () => {
  return (
    <div class="jumbotron">
      <div class="container showcase">
        <h1 class="display-4">
          <b>Try Skype in your browser</b>
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center ",
        }}
      >
        <p>No installations needed.</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center ",
        }}
      >
        <img
          src="https://secure.skypeassets.com/content/dam/scom/home-new/microsoft-edge-logo-hjsadsd.svg"
          alt=""
          style={{ width: 50 }}
        />
        <img
          src="https://secure.skypeassets.com/content/dam/scom/home-new/google_chrome_icon_(september_2014).svg"
          alt=""
          style={{ width: 50 }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center ",
          marginTop: 30,
        }}
      >
        <h5
          style={{
            backgroundColor: "#0078CA",
            width: "10%",
            padding: 15,
            borderRadius: 30,
            textAlign: "center",
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          chat now
        </h5>
      </div>

      <div>
        <ul className="skypeSocialMedia">
          <li className="mr-3">Facebook</li>
          <li className="mr-3">Twitter</li>
          <li className="mr-3">Youtube</li>
          <li>Blogs</li>
        </ul>
      </div>
      <div className="skypeSocialMediaRight">
        <img src={nocall} style={{ width: 25, height: 25 }} />
        <p style={{ fontWeight: "bold", color: "black" }}>
          No emergency calls with Skype
        </p>
        <h6>
          Skype is not a replacement for your telephone and can't be used for
          emergency calling
        </h6>
      </div>
    </div>
  );
};

export default Showcase;
