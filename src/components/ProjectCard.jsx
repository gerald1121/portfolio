import PropTypes from "prop-types";

const ProjectCard = ({ project, handleModalInfo }) => {
  return (
    <div className="shadow-md shadow-gray-600 rounded-lg max-w-md mx-auto">
      <img
        onClick={() => handleModalInfo(project)}
        src={project.image}
        alt="project card"
        className="rounded-md duration-200 hover:scale-105 cursor-pointer object-cover w-full h-48"
      />
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  handleModalInfo: PropTypes.func.isRequired,
};

export default ProjectCard;
