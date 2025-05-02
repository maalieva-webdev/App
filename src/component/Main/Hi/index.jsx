import React from "react";
import user from "./img/Ellipse 1.png";

function index() {
  return (
    <div>
      <div className="hi">
        <div className="hiText">
          <h1>
            Hi, I am John,
            <br /> Creative <br />
            Tehnologist
          </h1>
          <p>
            Amet minim mollit non deserunt ullamco est <br /> sit aliqua dolor
            do amet sint. Velit officia <br /> consequat duis enim velit mollit.
            Exercitation <br /> veniam consequat sunt nostrud amet.
          </p>
          <button>Download Resume</button>
        </div>
        <img src={user} alt="" />
      </div>
    </div>
  );
}

export default index;
