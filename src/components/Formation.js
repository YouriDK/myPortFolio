import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import SanityClient from "../client.js";

export default function Formation() {
  const [formationData, setFormation] = useState(null);
  const options = { year: "numeric" };

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
  }, []);

  return (
    <main className="main home">
      <section className="section">
        <div className="centrer">
          <section className="container-formation">
            {formationData &&
              formationData.map((formation, index) => (
                <article
                  className="soft block-formation area"
                  key={formation.title}
                >
                  <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                  <span className="fontPicked font-medium white">
                    {" "}
                    {formation.title}
                  </span>
                  <br />
                  <br />
                  <span className="space font-normal white">
                    {" "}
                    {formation.options}
                  </span>
                  <br />
                  <div className="space">
                    <span className="space font-normal white">
                      {formation.school}
                    </span>{" "}
                    <br />
                    <span className="space font-normal white">
                      {formation.place}
                    </span>
                    <br />
                    <span className="space font-normal white">
                      {new Date(formation.year).getFullYear()}
                    </span>
                  </div>
                  <br />
                  <button className="raise absolute">
                    {" "}
                    Plus d'information ici !
                  </button>
                  {console.log(formation.title)}
                </article>
              ))}
          </section>
        </div>
      </section>
    </main>
  );
}
