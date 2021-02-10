import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import SanityClient from "../client.js";

export default function Formation() {
  const [formationData, setFormation] = useState(null);

  useEffect(() => {
    SanityClient.fetch(
      `*[_type == "formation"]{
            title,
            year,
            school,
            place,
            options,
            notions }`
    )
      .then((data) => setFormation(data))
      .catch(console.error);
    console.log("FORMATION -", formationData);
  }, []);

  return (
    <main>
      <section>
        <h1 className="page-title fontPicked">Formation</h1>
        <h2 className="page-subtitle fontPicked">Mon parcours scolaire</h2>

        <div>
          {formationData &&
            formationData.map((formation, index) => {
              <article className="relative rounded-lg shadow-xl bg-white p-16">
                <div className="text-gray-500 text-xs space-x-4">
                  {console.log(formation.title)}
                  {formation.title}
                </div>
                ;
              </article>;
            })}
        </div>
      </section>
    </main>
  );
}
