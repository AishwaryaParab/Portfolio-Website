import React, { useState } from "react";
import "./Projects.css";
import { projects } from "../Data/projects";
import Project from "./Project";

const Projects = ({projectSection}) => {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div ref={projectSection} className="projects">
      <h3>Projects</h3>
      <p className="project-para">Build, Create & Inspire</p>

      <div className="categories">
        <p
          className={
            activeCategory === "all"
              ? "categories-p active-categories"
              : "categories-p"
          }
          onClick={() => setActiveCategory("all")}
        >
          All
        </p>
        <p
          className={
            activeCategory === "frontend"
              ? "categories-p active-categories"
              : "categories-p"
          }
          onClick={() => setActiveCategory("frontend")}
        >
          Frontend
        </p>
        <p
          className={
            activeCategory === "backend"
              ? "categories-p active-categories"
              : "categories-p"
          }
          onClick={() => setActiveCategory("backend")}
        >
          Backend
        </p>
        <p
          className={
            activeCategory === "fullstack"
              ? "categories-p active-categories"
              : "categories-p"
          }
          onClick={() => setActiveCategory("fullstack")}
        >
          Full Stack
        </p>
      </div>

      <div className="projects-section">
        {activeCategory === "all"
          ? projects.map((item) => {
              return (
                <Project
                  key={item.id}
                  link={item.link}
                  img={item.img}
                  name={item.name}
                />
              );
            })
          : projects.map((item) => {
              if (item.category === activeCategory) {
                return (
                  <Project
                    key={item.id}
                    link={item.link}
                    img={item.img}
                    name={item.name}
                  />
                );
              }
            })}
      </div>
    </div>
  );
};

export default Projects;
