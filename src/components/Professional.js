import React, { useState, useEffect } from "react";
import SanityClient from "../client.js";
import * as fun from "../Tools/Function";

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

  return (
    <main className="main">
      <section className="section">
        <div className="titles">
          <span className="title fontPicked">Parcours professionnel</span>
        </div>

        <div>
          <section>
            <div className="container-card">
              {proData &&
                proData.map((pro, index) => (
                  <Card Parcours={pro} index={index} />
                ))}
            </div>
          </section>
        </div>
      </section>{" "}
    </main>
  );
}
