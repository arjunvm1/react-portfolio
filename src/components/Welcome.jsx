import React from "react";
import "./Welcome.css";

function Welcome() {
  return (
    <>
      <div className="main" id="home">
        <div
          className="container d-flex  justify-content-center  "
          style={{ color: "white", backgroundColor: "black" }}
        >
          <div className="row">
            <div className="col-md-12">
              <h1>Hello There!</h1>
              <h2>
                I'm <strong>Arjun</strong>, a passionate <br />
                <span>MEARN STACK DEVELOPER</span>
              </h2>
            </div>

            <div className="btns ">
              <a href="#works">
                <button className="btn btn-secondary">View Work</button>
              </a>
              <a href="https://www.linkedin.com/in/arjun-v-m-39111a28b/">
                <button className="btn btn-danger m-3 ">Hire Me</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
