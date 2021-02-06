import React, { useState, useEffect } from "react";
import SanityClient from "../client.js";

export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    SanityClient.fetch(
      `*[_type == "project"]{
        title, 
        date, 
        place, 
        description, 
        projectType, 
        link, 
        tags
      }`
    )
      .then((data) => setProjectData(data))
      .catch(console.error);

    console.log("DATA2 - ", projectData);
  }, []);

  return (
    <main className="bg-green-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive"> My projects</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          {" "}
          Welcome to my projects page
        </h2>
        <section className="grid grid-cols-2 gap-8">
          {projectData &&
            projectData.map((project, index) => (
              <article
                key={project.title}
                className="relative rounded-lg shadow-xl bg-white p-16"
              >
                <h3 className="text-gray-800 text-3xl font-bold hover:text-red-700">
                  <a
                    href={project.link}
                    alt={project.title}
                    tager="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="text-gray-500 text-xs space-x-4">
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
                    className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl"
                    href={project.link}
                    alt={project.title}
                    tager="_blank"
                    rel="noopener noreferrer"
                  >
                    <span role="img" aria-label="right pointer">
                      View this project 👉
                    </span>
                  </a>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}
