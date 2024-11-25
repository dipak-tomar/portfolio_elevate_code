import { FaCode, FaDatabase, FaPencilRuler } from 'react-icons/fa'; // Import icons from react-icons
import Marquee from '../Portfolio/Marquee';

const About = () => {
  return (
    <section
      id="about"
      className="bg-black text-white py-28 px-10 md:px-20 lg:px-40 relative"
    >
      {/* Background Accent */}
      <div className="absolute inset-0 -z-10 opacity-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      {/* Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        {/* Left Side: Introduction */}
        <div className="space-y-12">
          <h2 className="text-7xl font-extrabold">About Me</h2>
          <p className="text-2xl text-gray-300 leading-relaxed">
            I am an enthusiastic <span className="text-white font-bold">Full-Stack Web Developer</span> 
            passionate about learning and teaching. I have mentored <span className="text-white font-bold">4+ students</span> 
            aspiring to become web developers and am always eager to contribute to a <span className="text-white font-bold">dynamic team</span>. 
            My goal is to create efficient and user-friendly applications that solve real-world problems.
          </p>
          <p className="text-2xl text-gray-300 leading-relaxed">
            Beyond coding, I enjoy exploring new technologies, experimenting with design, and mentoring aspiring developers. I believe in continuous learning and collaboration as the foundation for professional growth.
          </p>
        </div>

        {/* Right Side: Skills Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
          {/* Frontend */}
          <div className="text-center">
            <div className="flex items-center justify-center bg-blue-500 rounded-full w-28 h-28 mx-auto">
              <FaCode className="text-white text-6xl" />
            </div>
            <h3 className="text-3xl font-extrabold mt-8">Frontend</h3>
            <p className="text-gray-300 text-xl mt-6 leading-relaxed">
              Expertise in React, Redux, SCSS, and building user-friendly, responsive web interfaces.
            </p>
          </div>

          {/* Backend */}
          <div className="text-center">
            <div className="flex items-center justify-center bg-green-500 rounded-full w-28 h-28 mx-auto">
              <FaDatabase className="text-white text-6xl" />
            </div>
            <h3 className="text-3xl font-extrabold mt-8">Backend</h3>
            <p className="text-gray-300 text-xl mt-6 leading-relaxed">
              Skilled in Node.js, Ruby on Rails, MySQL, and creating scalable APIs.
            </p>
          </div>

          {/* Design */}
          <div className="text-center">
            <div className="flex items-center justify-center bg-purple-500 rounded-full w-28 h-28 mx-auto">
              <FaPencilRuler className="text-white text-6xl" />
            </div>
            <h3 className="text-3xl font-extrabold mt-8">Design</h3>
            <p className="text-gray-300 text-xl mt-6 leading-relaxed">
              Proficient in Figma, Blender, and crafting stunning visual designs and 3D models.
            </p>
          </div>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="mt-24">
        <Marquee />
      </div>
    </section>
  );
};

export default About;
