import { PROJECTS } from "../constants";
import { motion } from "framer-motion"; // Import motion

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => {
          return (
            <motion.div
              key={index}
              className="mb-8 flex flex-wrap lg:justify-center"
              initial={{ opacity: 0, y: 50 }} // Initial state (invisible and below)
              whileInView={{ opacity: 1, y: 0 }} // Animation on entering the view
              transition={{ duration: 1 }} // Transition duration
            >
              <div className="w-full lg:w-1/4">
                <motion.img
                  src={project.image}
                  width={150}
                  height={150}
                  alt={project.title}
                  className="object-cover mb-6 rounded" // Ensures image is properly resized
                  initial={{ opacity: 0 }} // Initially invisible
                  whileInView={{ opacity: 1 }} // Fade in when in view
                  transition={{ duration: 1 }} // Duration of fade-in effect
                />
              </div>

              <div className="w-full max-w-xl lg:w-3/4">
                <motion.h6
                  className="mb-2 font-semibold"
                  initial={{ opacity: 0, x: -50 }} // Start position (left)
                  whileInView={{ opacity: 1, x: 0 }} // Slide in from left to center
                  transition={{ duration: 1 }}
                >
                  {project.title}
                </motion.h6>

                <motion.p
                  className="mb-4 text-neutral-400"
                  initial={{ opacity: 0 }} // Initially invisible
                  whileInView={{ opacity: 1 }} // Fade in when in view
                  transition={{ duration: 1.2 }} // Fade-in transition duration
                >
                  {project.description}
                </motion.p>

                <div>
                  {project.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                      initial={{ opacity: 0 }} // Initially invisible
                      whileInView={{ opacity: 1 }} // Fade in each technology
                      transition={{
                        duration: 1.5,
                        delay: index * 0.2, // Delay each technology by a bit for a staggered effect
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
