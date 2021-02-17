import React, { useEffect, useState } from "react";
import SanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import { Tooltip } from "reactstrap";

const builder = imageUrlBuilder(SanityClient);

function urlFor(source) {
  return builder.image(source);
}

export default function Home(props) {
  const [author, setAuthor] = useState(null);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [text, setText] = useState(
    props.value === "FR"
      ? "Cliquer pour sauvegarder dans le presse-papiers"
      : "Click to save in the clipboard"
  );

  const toggle = () => {
    setTooltipOpen(!tooltipOpen);
  };

  function copyToClipboard(e) {
    try {
      var textArea = document.createElement("textarea");
      textArea.value = e;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      props.value === "FR"
        ? setText("Sauvegardé dans le presse-papiers !")
        : setText("Saved in the clipboard !");
    } catch {
      console.error();
    }

    return;
  }

  useEffect(() => {
    console.log("Boom", props.value);
    SanityClient.fetch(
      `*[_type == "author"]{
      name,bio,
      "authorImage":image.asset-> url
    }`
    )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, [props.value]);
  if (!author) return <div> Loading ....</div>;

  return (
    <main className="main">
      <section className="section ">
        <div className="container-about">
          <img
            src={urlFor(author.authorImage).url()}
            alt="Person"
            className="card__image"
          />

          <div className="text-bio">
            {props.value === "FR" ? (
              <div className="font-normal">
                Je suis Youri, Développeur Web en constante évolution.
                Javascript/React sont mes points de départ mais je suis prêt à
                sortir de ma zone de confort et aller à la decouverte de
                nouvelles technologies.
              </div>
            ) : (
              <div className="font-normal">
                Hi ! I'm Youri, Web developper constantly evolving, how it's
                going ? Javascript/React are my starting points but I am always
                ready to get out of my confort zone to discover new technologies
                and bring new ideas.
              </div>
            )}
          </div>

          <button
            id="clipboard"
            onClick={() => copyToClipboard("youri.choucoutou@gmail.com")}
            className="btn-about draw-border"
          >
            youri.choucoutou@gmail.com
          </button>
          <Tooltip
            placement="bottom"
            isOpen={tooltipOpen}
            target="clipboard"
            delay={1000}
            toggle={toggle}
            trigger="click hover"
          >
            {text}
          </Tooltip>
        </div>
      </section>
    </main>
  );
}
