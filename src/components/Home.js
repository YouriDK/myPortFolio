import React from "react";
import image from "../proc.jpg";

export default function Home() {
  return (
    <main>
      <img src={image} alt="Binary" className="backgroundImage" />
      <section className="sectionHome">
        <h1 className="fontPicked">
          {" "}
          Bonjour & Bienvenue <br />
        </h1>
        <h4 className="fontPicked">
          Je suis Youri, Développeur Web en constante évolution !
        </h4>
      </section>
    </main>
  );
}
