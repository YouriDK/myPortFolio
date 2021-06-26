import React, { FC, useEffect, useState } from 'react';
import data from '../data.json';
import SanityClient from '../sanity-client/client';
import imageUrlBuilder from '@sanity/image-url';
//import { Tooltip } from "reactstrap";
interface Author {
  name?: string;
  bio?: [string];
  authorImage: string;
}

const builder = imageUrlBuilder(SanityClient);

function urlFor(source: string): any {
  console.log(source);
  return builder.image(source);
}

interface HomeProps {
  props?: any;
  value: string;
}

const Home: FC<HomeProps> = (
  props: any,
  { value: string }: HomeProps
): JSX.Element => {
  const [author, setAuthor] = useState<any>({});
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [text, setText] = useState(
    props.value === 'FR'
      ? 'Cliquer pour sauvegarder dans le presse-papiers'
      : 'Click to save in the clipboard'
  );

  const toggle = () => {
    setTooltipOpen(!tooltipOpen);
  };

  function copyToClipboard(e: any): void {
    try {
      var textArea = document.createElement('textarea');
      textArea.value = e;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      props.value === 'FR'
        ? setText('Sauvegardé dans le presse-papiers !')
        : setText('Saved in the clipboard !');
    } catch {
      console.error();
    }
  }
  useEffect(() => {
    SanityClient.fetch(
      `*[_type == "author"]{
      name,bio,
      "authorImage":image.asset-> url
    }`
    )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, [props.value]);

  return (
    <div>
      <div>
        {author && (
          <img
            src={urlFor(author.authorImage).url()}
            alt='Person'
            className='card__image'
          />
        )}
        <div>{props.value === 'FR' ? data.intro.FR : data.intro.EN}</div>
        <button
          id='clipboard'
          onClick={() => copyToClipboard('youri.choucoutou@gmail.com')}
          className='btn-about draw-border'
        >
          {data.mail}
        </button>
        {/* <Tooltip
          placement="bottom"
          isOpen={tooltipOpen}
          target="clipboard"
          delay={1000}
          toggle={toggle}
          trigger="click hover"
        >
          {text}
        </Tooltip> */}
      </div>
    </div>
  );
};

export default Home;
