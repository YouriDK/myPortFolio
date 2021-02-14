import React, { useEffect, useState } from "react";
import SanityClient from "../client.js";
import pic from "../paysage.jpg";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(SanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    SanityClient.fetch(
      `*[_type == "author"]{
      name,bio,
      "authorImage":image.asset-> url
    }`
    )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);
  console.log("AUTHOR", author);
  if (!author) return <div> Loading ....</div>;

  return (
    <main>
      <section>
        <div className="container-about">
          <div className="card-about">
            <img
              src={urlFor(author.authorImage).url()}
              alt="Person"
              className="card__image"
            />
            <p className="card__name">{author.name}</p>
            <div className="grid-container-about">
              <div className="grid-child-posts">Developpeur</div>

              <div className="grid-child-followers">Web</div>
            </div>
            <ul className="social-icons">
              <li>
                <a href="https://linkedin.com/in/youri-choucoutou-690522142">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
            <button className="btn-about draw-border">Thank you</button>
          </div>
        </div>
      </section>
    </main>
  );
}
