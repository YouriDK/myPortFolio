import React, { useState, useEffect } from "react";
import SanityClient from "../client.js";
import * as fun from "../Tools/Function";

import Card from "../Tools/Card";
import { propTypes } from "@sanity/block-content-to-react";

export default function Professionnal(props) {
  const [proData, setproData] = useState(null);

  useEffect(() => {
    SanityClient.fetch(
      `*[_type == "experience"]{
          title,
          from,
          to,
          entreprise,
          sujet,
          job,
          subject,
          task,
          taches }`
    )
      .then((data) => setproData(data))
      .catch(console.error);
  }, [props.value]);

  return (
    <main className="main home">
      <section className="section">
        <div>
          <section>
            <div className=" container-card">
              {proData &&
                proData
                  .sort((a, b) =>
                    a.index > b.index ? -1 : 1
                  ) /* Pour ordonner */
                  .map((pro, index) => (
                    <Card
                      Parcours={pro}
                      index={index}
                      key={index}
                      lang={props.value}
                    />
                  ))}
            </div>
          </section>
        </div>
      </section>{" "}
    </main>
  );
}
