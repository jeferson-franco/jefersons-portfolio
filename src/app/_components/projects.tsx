import React from "react";
import { getAllProjects } from "@/lib/api";

export default function Projects() {
  const projects = getAllProjects();

  return (
    <section>
      <h2 className="text-4xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.slug} className="border p-6 rounded-lg">
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <p className="mt-2">{project.excerpt}</p>
            <div className="flex gap-2 mt-4">
              {project.tech.map((tech) => (
                <span key={tech} className="bg-gray-200 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
