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
      {info &&
        (props.lang === "FR" ? (
          <div>
            <div className="container deck">
              <div id={props.index} className="card ">
                <div className="front face soft responsive-card">
                  <h2 className="font-title">{info.title}</h2>
                  <ul>
                    <li>Entreprise : {info.entreprise}</li>
                    <li>
                      {fun.Month(new Date(info.from).getMonth())}{" "}
                      {new Date(info.from).getFullYear()}
                      {"/"}
                      {fun.Month(new Date(info.to).getMonth())}{" "}
                      {new Date(info.to).getFullYear()}
                    </li>
                  </ul>
                  <div className="subject font-subtitle">{info.sujet}</div>
                  <div className="centrer space">
                    {" "}
                    <button
                      onClick={() => {
                        flipAdd(props.index);
                      }}
                      className="button pulse flip rad-button responsive-button-card "
                    >
                      Cliquer ici pour plus dinformations
                    </button>
                  </div>
                </div>
                <div className="back face soft responsive-card">
                  <ul>
                    {info.taches.map((tache) => (
                      <li key={tache} className="font-subtitle">
                        {tache}
                      </li>
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
        ) : (
          <div>
            <div className="container deck">
              <div id={props.index} className="card ">
                <div className="front face soft responsive-card">
                  <h2>{info.job}</h2>
                  <ul>
                    <li> Company : {info.entreprise}</li>
                    <li>
                      {fun.Month(new Date(info.from).getMonth())}{" "}
                      {new Date(info.from).getFullYear()}
                      {"/"}
                      {fun.Month(new Date(info.to).getMonth("us"))}{" "}
                      {new Date(info.to).getFullYear()}
                    </li>
                  </ul>
                  <div className="subject">{info.subject}</div>
                  <div className="centrer space">
                    {" "}
                    <button
                      onClick={() => {
                        flipAdd(props.index);
                      }}
                      className="button pulse flip rad-button responsive-button-card "
                    >
                      Click here for more info !
                    </button>
                  </div>
                </div>
                <div className="back face soft responsive-card">
                  <ul>
                    {info.task.map((tache) => (
                      <li key={tache} className="font-subtitle">
                        {tache}
                      </li>
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
        ))}
    </div>
  );
}
