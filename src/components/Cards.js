import React from "react";
import "./Cards.css";
import Card from "./Card";

const Cards = (props) => {
  return (
    <div className="container ">
      <h1>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            padding: 20,
          }}
        >
          Discover more features
        </p>
      </h1>

      <div className="row">
        <div className="col-sm-12">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12 col-lg-3">
                      <Card
                        images="https://secure.skypeassets.com/content/dam/scom/home-new/features-cards/home-page-meet-now-integration-tab.jpg"
                        title="Meet Now, Right Now"
                        description="Meet Now is now available in Windows 10 taskbar so you can meet with a simple click."
                        names="Learn more "
                      />
                    </div>
                    <div className="col-sm-12 col-lg-3">
                      <Card
                        images="https://secure.skypeassets.com/content/dam/scom/home/features/hdcall.jpg"
                        title="Video calling for 100 people"
                        description="Experience HD one to one or group video calling—now with call reactions."
                        names="Explore video calls  "
                      />
                    </div>
                    <div className="col-sm-12 col-lg-3">
                      <Card
                        images="https://secure.skypeassets.com/content/dam/scom/home/features/features-skype-rates.jpg"
                        title="Use Skype to call phones"
                        description="Call landlines and mobiles from anywhere in the world at great low rates using Skype."
                        names="See our rates"
                      />
                    </div>
                    <div className="col-sm-12 col-lg-3">
                      <Card
                        images="https://secure.skypeassets.com/content/dam/scom/home/features/livesubtitles.jpg"
                        title="Live subtitles"
                        description="Read the words that are spoken during an audio or video call."
                        names="How to set subtitles  "
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12 col-lg-3">
                      <Card
                        images="https://secure.skypeassets.com/content/dam/scom/home/features/features-skype-number.jpg"
                        title="Skype Number"
                        description="Get a local phone number in another country or region and answer calls on Skype."
                        names="Get Your Number "
                      />
                    </div>
                    <div className="col-sm-12 col-lg-3">
                      <Card
                        images="https://www.onmsft.com/wp-content/uploads/2020/07/skype-grid-view.jpg"
                        title="Mobile screen sharing"
                        description="Share anything from presentations to holiday photos during a call."
                        names="Discover screen sharing "
                      />
                    </div>
                    <div className="col-sm-12 col-lg-3">
                      <Card
                        images="https://secure.skypeassets.com/content/dam/scom/home/features/features-call-recording.jpg"
                        title="Skype call recording​"
                        description="Capture those special moments in a Skype call with your loved ones or record important meeting with colleagues.​"
                        names="How to record call "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
