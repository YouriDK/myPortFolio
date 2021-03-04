import React, { useState, useEffect } from "react";
import SanityClient from "../client.js";
import Project from "../Tools/Project";

export default function Realisation(props) {
  const [proData, setproData] = useState(null);

  useEffect(() => {
    SanityClient.fetch(
      `*[_type == "project"]{
          title,
          "image":image.asset-> url,
          description,
          descriptionEN,
          link,
          tags,
        }`
    )
      .then((data) => setproData(data))
      .catch(console.error);
  }, [props.value]);

  return (
    <main>
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
      <section>
        <div className="container-card">
          {proData &&
            proData.map((pro, index) => (
              <Project key={index} proj={pro} lang={props.value} />
            ))}
        </div>
      </section>
    </main>
  );
}
