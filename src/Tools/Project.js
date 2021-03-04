import React, { useState, useEffect } from "react";
import imageUrlBuilder from "@sanity/image-url";
import SanityClient from "../client.js";

const builder = imageUrlBuilder(SanityClient);

function urlFor(source) {
  return builder.image(source);
}

function openUrl(url) {
  var win = window.open(url, "_blank");
  win.focus();
}

export default function Projet(props) {
  const [info, setInfo] = useState("");
  useEffect(() => {
    if (props.proj !== undefined && props.proj !== null) {
      setInfo(props.proj);
    }
    console.log(props.proj);
  }, [props.proj, props.lang]);

  return (
    <div className="card-project">
      <img className="card__img" src={info.image} alt="E-Shop" />
      <div className="card__content">
        <h1 className="card__header ">{info.title}</h1>
        <p className="card__text font-subtitle">
          {props.lang === "FR" ? info.description : info.descriptionEN}
        </p>
      </div>
      <button
        onClick={() => {
          openUrl(info.link);
        }}
        className="card__btn raise font-title"
      >
        {props.lang === "FR" ? "Cliquer pour visiter" : "Click to visit"}
      </button>
    </div>
  );
}
