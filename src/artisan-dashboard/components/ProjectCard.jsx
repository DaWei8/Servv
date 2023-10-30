/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import RightArrow from "../../assets/icons/arrow-right-alt-rounded.svg";
import StarIcon from "../../assets/icons/star.svg";
import "./components.scss"



const ProjectCard = (props) => (
  <div className="project-card">
    <div className="project-card-container">
      <div className="project-image-and-rating">
        <div className="project-card-rating">
          <img src={StarIcon} alt="" className="project-star" />
          <p className="rating">
            <span>{props.rating}</span>/5.0
          </p>
        </div>
        <img
          src={props.image}
          alt="project card image"
          className="project-card-image"
        />
      </div>
      <h2 className="project-title">{props.title}</h2>
      <p className="project-description">{props.description}</p>
      <div className="project-date-and-button">
        <p className="project-date">{props.date}</p>
        <button>
          <Link to="" style={{ color: "#0080ff" }}>
            View <img src={RightArrow} alt="right arrow" />
          </Link>
        </button>
      </div>
    </div>
  </div>
);


export default ProjectCard;