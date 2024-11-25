import React, { useState } from 'react';
import project1Image from '../../assets/project1.jpg';
import project2Image from '../../assets/project2.jpg';
import project3Image from '../../assets/project3.jpg';

const categories = [
  'All',
  'WordPress Custom Theme Development',
  'Website Design',
  'Web Development',
  'ThreeJS',
  'SEO Services',
  'Search Engine Marketing',
  'Logo Design',
  'Graphics Design',
  'Ecommerce Website',
];

const staticProjects = [
  {
    id: 1,
    thumb: { url: project1Image },
    title: 'Payroo Mobile App',
    category: 'Web Development',
    link: 'https://project1.com',
    techs: ['ThreeJS', 'React', 'Node.js'],
    github: 'https://github.com/project1',
    live: 'https://live.project1.com',
    paragraphs: [{ content: 'A tool to customize 3D products in real-time.' }],
  },
  {
    id: 2,
    thumb: { url: project2Image },
    title: 'FastCad Coding',
    category: 'Website Design',
    link: 'https://project2.com',
    techs: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/project2',
    live: 'https://live.project2.com',
    paragraphs: [{ content: 'A platform for learning online courses.' }],
  },
  {
    id: 3,
    thumb: { url: project3Image },
    title: 'SKC Fabric Export',
    category: 'Ecommerce Website',
    link: 'https://project3.com',
    techs: ['React', 'TailwindCSS'],
    github: 'https://github.com/project3',
    live: 'https://live.project3.com',
    paragraphs: [{ content: 'A website for a fabric export company.' }],
  },

  {
    id: 4,
    thumb: { url: project3Image },
    title: 'SKC Fabric Export',
    category: 'Ecommerce Website',
    link: 'https://project3.com',
    techs: ['React', 'TailwindCSS'],
    github: 'https://github.com/project3',
    live: 'https://live.project3.com',
    paragraphs: [{ content: 'A website for a fabric export company.' }],
  },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? staticProjects
      : staticProjects.filter(
          (project) => project.category === selectedCategory
        );

  return (
    <section
      id="projects"
      className="bg-black text-white py-16 px-6 md:px-12 lg:px-24"
    >
      {/* Section Heading */}
      <h2 className="text-5xl font-bold text-center mb-12 text-white">
        Projects
      </h2>

      {/* Categories Section */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-8 py-4 rounded-full text-base font-semibold transition-all ${
              selectedCategory === category
                ? 'bg-blue-600 text-white shadow-xl'
                : 'bg-gray-800 text-gray-300 hover:bg-blue-500 hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="relative h-56">
              <img
                src={project.thumb.url}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-blue-500">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.paragraphs[0].content}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techs.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-800 text-sm text-gray-300 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
