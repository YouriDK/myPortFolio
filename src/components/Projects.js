import React, { useState, useEffect } from "react";
//import project from "../../portfoliostudio/schemas/project";
import SanityClient from "../client.js";

export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    SanityClient.fetch(
      `*[_type == "project]{
      title, date, place, description, project , link , tags
    }`
    )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-green-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive"> My projects</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          {" "}
          Welcome to my projects page
        </h2>
        <section>
          {projectData &&
            projectData.map((project, index) => {
              <article key={project.title}>
                <h3 classname="text-gray-800 text-3xl fontèbold hover:text-red-700">
                  <a
                    href={Project.link}
                    alt={project.title}
                    tager="_blank"
                    rel="noonpener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="text-gray-500 text-xs sapce-x-4">
                  <span>
                    <strong className="font-bold"> Finished On </strong>
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  <span>
                    <strong className="font-bold"> Company</strong>:{" "}
                    {project.place}
                  </span>
                  <span>
                    <strong classname="font-bold">
                      {project.projectType}{" "}
                    </strong>
                  </span>
                  <p className="my-6 text-lg text-gray-700 leading-relaxed">
                    {project.description}
                  </p>

                  <a
                    className="text-red-500 font-bold hover:underline hover:text-red-400 "
                    href={Project.link}
                    alt={project.title}
                    tager="_blank"
                    rel="noonpener noreferrer"
                  >
                    <span role="img" aria-label="right pointer">
                      👉
                    </span>
                  </a>
                </div>
              </article>;
            })}
        </section>
      </section>
    </main>
  );
}
