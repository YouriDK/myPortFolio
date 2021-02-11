import React from "react";

function flipAdd(params) {
  var element = document.getElementById(params);
  element.classList.add("flipped");

  element.classList.remove();
}

function flipRemove(params) {
  var element = document.getElementById(params);
  element.classList.remove("flipped");
}

export default function Card(props) {
  return (
    <div className="container-card">
      <div className="deck">
        <div id="try" className="card ">
          <div className="front face">
            <h2>Button</h2>
            <button
              onClick={() => {
                flipAdd("try");
              }}
              className="flip rad-button"
            >
              Flip me
            </button>
            <div className="bottext">
              <h3>6000kr</h3>
            </div>
          </div>
          <div className="back face">
            <h2>Basic</h2>
            <ul>
              <li>6 Sider</li>
              <li>Kontaktside</li>
              <li>SEO optimeret</li>
              <li>Mobilvenlig</li>
            </ul>
            <div className="botprice">
              <h3>6000kr</h3>
            </div>
            <button
              className="return flip"
              onClick={() => {
                flipRemove("try");
              }}
            >
              <i className="fa fa-undo"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/*  
! Autre Code utilisable par la suite
! Un où on clique n'importe et un avec hover

   <div className="deck">
        <div className="card clickcard">
          <div className="front face">
            <h2>Click</h2>
            <h3>(Anywhere on the card)</h3>
            <div className="bottext">
              <h3>6000kr</h3>
            </div>
          </div>
          <div className="back face">
            <h2>Basic</h2>
            <ul>
              <li>6 Sider</li>
              <li>Kontaktside</li>
              <li>SEO optimeret</li>
              <li>Mobilvenlig</li>
            </ul>
            <div className="botprice">
              <h3>6000kr</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="deck">
        <div className="card hovercard">
          <div className="front face">
            <h2>Hover</h2>
            <div className="bottext">
              <h3>6000kr</h3>
            </div>
          </div>
          <div className="back face">
            <h2>Basic</h2>
            <ul>
              <li>6 Sider</li>
              <li>Kontaktside</li>
              <li>SEO optimeret</li>
              <li>Mobilvenlig</li>
            </ul>
            <div className="botprice">
              <h3>6000kr</h3>
            </div>
          </div>
        </div>
      </div>
   


*/
