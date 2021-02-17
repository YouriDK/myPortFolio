import React, { useState, useEffect } from "react";
import SanityClient from "../client.js";
export default function Formation(props) {
  const [formationData, setFormation] = useState(null);
  useEffect(() => {
    SanityClient.fetch(
      `*[_type == "formation"]{
            title,
            year,
            school,
            place,
            options,
            spe,
            equi,
            uni,
            index,
            notions }`
    )
      .then((data) => setFormation(data))
      .catch(console.error);
  }, []);

  return (
    <main className="main home">
      <ul className="circles">
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
      <section className="section">
        <div className="centrer">
          <section className=" container-formation">
            {formationData &&
              (props.value === "FR"
                ? formationData
                    .sort((a, b) =>
                      a.index > b.index ? -1 : 1
                    ) /* Pour ordonner */
                    .map((formation, index) => (
                      <article
                        className="soft block-formation fix-width"
                        key={formation.index}
                        id={formation.index}
                      >
                        <span className="font-title font-medium white">
                          {" "}
                          {formation.title} ( {formation.equi} )
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
                        <button hidden={true} className="button raise absolute">
                          {" "}
                          Plus d'information ici !
                        </button>
                      </article>
                    ))
                : formationData
                    .sort((a, b) =>
                      a.index > b.index ? -1 : 1
                    ) /* Pour ordonner */
                    .map((formation, index) => (
                      <article
                        className="soft block-formation fix-width"
                        key={formation.index}
                      >
                        <span className="font-title  white">
                          {" "}
                          {formation.equi}
                        </span>
                        <br />
                        <br />
                        <span className="space font-subtitle white">
                          {" "}
                          {formation.spe}
                        </span>
                        <br />
                        <div className="space">
                          <span className="space font-normal white">
                            {formation.uni}
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
                        <button hidden={true} className="button raise absolute">
                          {" "}
                          Plus d'information ici !
                        </button>
                      </article>
                    )))}
          </section>
        </div>
      </section>
    </main>
  );
}
