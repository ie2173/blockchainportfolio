import react, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";
import { IProject } from "../type";
import { MdClose } from "react-icons/md";

const ProjectCard: React.FC<{ project: IProject }> = ({
  project: {
    name,
    category,
    description,
    githubUrl,
    imagePath,
    lang,
    deployedUrl,
  },
}) => {
  const [openModal, setOpenModal] = useState(false);

  const modalToggle = () => {
    setOpenModal(!openModal);
  };

  return (
    <div>
      <img
        src={imagePath}
        alt={name}
        className="cursor-pointer"
        onClick={() => setOpenModal(true)}
      />
      <p className="my-2 text-center">{name}</p>
      {openModal && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
          <div>
            <img src={imagePath} alt={name} />
            <div className="flex justify-center my-4 space-x-3">
              <a
                href={githubUrl}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <FaGithub />
                <span>Github</span>
              </a>{" "}
              {deployedUrl ?? (
                <a
                  href={deployedUrl}
                  className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
                >
                  <AiFillProject />
                  <span>Project</span>
                </a>
              )}
            </div>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-medium md:text-2xl ">{name}</h2>
            <h3 className="mb-3 font-medium">{description}</h3>
            <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
              {lang.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 my-1 bg-gray-200 rounded-full dark:bg-dark-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <button
            onClick={modalToggle}
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
