import React, { useState, useEffect } from "react";
import SanityClient from "../client.js";

import Card from "../Tools/Card";

export default function Professionnal() {
  const [proData, setproData] = useState(null);

  useEffect(() => {
    SanityClient.fetch(
      `*[_type == "experience"]{
          title,
          from,
          to,
          entreprise,
          sujet,
          taches }`
    )
      .then((data) => setproData(data))
      .catch(console.error);
  }, []);

  function Month(num) {
    switch (num) {
      case 1:
        return "Janvier";
      case 2:
        return "Février";
      case 3:
        return "Mars";
      case 4:
        return "Avril";
      case 5:
        return "Mai";
      case 6:
        return "Juin";
      case 7:
        return "Juillet";
      case 8:
        return "Aout";
      case 9:
        return "Septembre";
      case 10:
        return "Octobre";
      case 11:
        return "Novembre";
      case 12:
        return "Décembre";

      default:
        return num;
    }
  }
  return (
    <main className="main">
      <section className="section">
        <div className="titles">
          <span className="title fontPicked">Parcours professionnel</span>
        </div>
        <Card />
        <div>
          <section>
            {proData &&
              proData.map((pro, index) => (
                <article key={index} className="post-xp">
                  <span> {pro.title}</span>
                  <br />
                  <div>
                    De
                    <span>
                      {" "}
                      {Month(new Date(pro.from).getMonth())}{" "}
                      {new Date(pro.from).getFullYear()}
                    </span>
                    {"  "}à
                    <span>
                      {" "}
                      {Month(new Date(pro.to).getMonth())}{" "}
                      {new Date(pro.to).getFullYear()}
                    </span>{" "}
                  </div>
                  chez
                  <span> {pro.entreprise}</span>
                  <br />
                  <span> {pro.sujet}</span>
                  <br />
                  <span>
                    {pro.taches.map((taches) => (
                      <ul>
                        <li>{taches}</li>
                      </ul>
                    ))}
                  </span>
                </article>
              ))}
          </section>
        </div>
      </section>{" "}
    </main>
  );
}
