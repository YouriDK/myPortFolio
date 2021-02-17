import React, { useState, useEffect } from "react";
import SanityClient from "../client.js";

export default function Skill(props) {
  const [skillData, setSkillData] = useState(null);

  useEffect(() => {
    SanityClient.fetch(
      `*[_type == "skills"]{
        title, 
        skilltype, 
        type,
        equi, 
        level,
      }`
    )
      .then((data) => setSkillData(data))
      .catch(console.error);
  }, []);

  return (
    <main className="main home">
      <section className="section">
        <div className="container block-skills ">
          <div className="hard-skills">
            <h2 className="white centrer decalage font-title ">Hard Skills</h2>

            <div className="size-skills space">
              <div
                className={"bar " + "expert"}
                data-skill={
                  "Notions > Bases > Intermédiaires > Avancées > Expert"
                }
              ></div>
              {skillData &&
                skillData.map((skill, index) => {
                  if (skill.skilltype === "hard")
                    return (
                      <div
                        className={"bar " + skill.level}
                        data-skill={skill.title}
                        key={index}
                      ></div>
                    );
                })}
            </div>
          </div>

          <div>
            <h2 className="centrer decalage white hard-skills font-title ">
              Soft Skills
            </h2>

            <div className="size-skills soft">
              <ul className="check-list">
                {skillData &&
                  (props.value === "FR"
                    ? skillData.map((skill, index) => {
                        if (
                          skill.skilltype === "soft" &&
                          skill.type != "software"
                        )
                          return (
                            <li className="white font-normal" key={index}>
                              {skill.title}
                            </li>
                          );
                      })
                    : skillData.map((skill, index) => {
                        if (
                          skill.skilltype === "soft" &&
                          skill.type != "software"
                        )
                          return (
                            <li className="white font-normal" key={index}>
                              {skill.equi}
                            </li>
                          );
                      }))}
              </ul>
            </div>
          </div>
        </div>
        <div className="container block-skills space">
          <div className="hard-skills">
            <h2 className="centrer decalage white font-title ">Langages</h2>

            <div className="size-skills">
              {skillData &&
                skillData.map((skill, index) => {
                  if (skill.skilltype === "others")
                    return (
                      <div
                        className={"bar " + skill.level}
                        data-skill={skill.title}
                        key={index}
                      ></div>
                    );
                })}
            </div>
          </div>
          <div>
            <h2 className="centrer decalage white hard-skills font-title ">
              Méthode de travail
            </h2>

            <div className="size-skills soft">
              <ul className="check-list">
                {skillData &&
                  (props.value === "FR"
                    ? skillData.map((skill, index) => {
                        if (
                          skill.skilltype === "soft" &&
                          skill.type === "software"
                        )
                          return (
                            <li className="white font-normal" key={index}>
                              {skill.title}
                            </li>
                          );
                      })
                    : skillData.map((skill, index) => {
                        if (
                          skill.skilltype === "soft" &&
                          skill.type === "software"
                        )
                          return (
                            <li className="white font-normal" key={index}>
                              {skill.equi}
                            </li>
                          );
                      }))}
              </ul>
            </div>
          </div>
        </div>{" "}
        <br />
        <br />
      </section>
    </main>
  );
}
