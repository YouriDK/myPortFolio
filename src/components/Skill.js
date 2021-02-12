import React, { useState, useEffect } from "react";
import SanityClient from "../client.js";

export default function Skill() {
  const [skillData, setSkillData] = useState(null);

  useEffect(() => {
    SanityClient.fetch(
      `*[_type == "skills"]{
        title, 
        skilltype, 
        type, 
        level,
      }`
    )
      .then((data) => setSkillData(data))
      .catch(console.error);
  }, []);

  return (
    <main className="main home">
      {console.log(skillData)}
      <section className="section">
        <div className="block-skills">
          <div>
            <h2 className="white">Hard Skills</h2>
            <span id="decal" className="white">
              {"Notions > Bases > Intermédiaires > Avancés > Expert"}
            </span>
            <div className="size-skills">
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
            <h2 className="white">Soft Skills</h2>
            <div className="size-skills soft">
              <ul class="check-list">
                {skillData &&
                  skillData.map((skill, index) => {
                    if (skill.skilltype === "soft" && skill.type != "software")
                      return (
                        <li className="white" key={index}>
                          {skill.title}
                        </li>
                      );
                  })}
              </ul>
            </div>
          </div>
        </div>
        <div className="block-skills">
          <div>
            <h2 className="white">Langages</h2>
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
            <h2 className="white">Acquis</h2>
            <div className="size-skills soft">
              <ul class="check-list">
                {skillData &&
                  skillData.map((skill, index) => {
                    if (skill.skilltype === "soft" && skill.type === "software")
                      return (
                        <li className="white" key={index}>
                          {skill.title}
                        </li>
                      );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
