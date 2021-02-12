import React, { useState, useEffect } from "react";
import * as fun from "../Tools/Function";

function flipAdd(params) {
  var element = document.getElementById(params);
  element.classList.add("flipped");
}

function flipRemove(params) {
  var element = document.getElementById(params);
  element.classList.remove("flipped");
}

export default function Card(props) {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    if (props.Parcours !== undefined) {
      setInfo(props.Parcours);
    }
  }, []);

  return (
    <div>
      {info && (
        <div>
          <div className="deck">
            <div id={props.index} className="card ">
              <div className="front face soft">
                <h2>{info.title}</h2>
                <ul>
                  <li>Chez {info.entreprise}</li>
                  <li>
                    De {fun.Month(new Date(info.from).getMonth())}{" "}
                    {new Date(info.from).getFullYear()} à{" "}
                    {fun.Month(new Date(info.to).getMonth())}{" "}
                    {new Date(info.to).getFullYear()}
                  </li>
                </ul>
                <h3>{info.sujet}</h3>
                <button
                  onClick={() => {
                    flipAdd(props.index);
                  }}
                  className="button pulse flip rad-button "
                >
                  Cliquer ici pour plus dinformations
                </button>
                <div className="bottext">
                  <h3>France</h3>
                </div>
              </div>
              <div className="back face soft">
                <h2>Responsabilités</h2>
                <ul>
                  {info.taches.map((tache) => (
                    <li key={tache}>{tache}</li>
                  ))}
                </ul>
                <div className="botprice"></div>
                <button
                  className="button pulse return flip"
                  onClick={() => {
                    flipRemove(props.index);
                  }}
                >
                  <i className="fa fa-undo"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
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
