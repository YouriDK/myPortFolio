import React, { FC, useEffect, useState } from 'react';
import data from '../data.json';
import SanityClient from '../sanity-client/client';

interface FormationProps {
  value: string;
}
const Formation: FC<FormationProps> = (props: any): JSX.Element => {
  const [formationData, setFormation] = useState<any>({});
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

  return <>{console.log(formationData)}</>;
};

export default Formation;
