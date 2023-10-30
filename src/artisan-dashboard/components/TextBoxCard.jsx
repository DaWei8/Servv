/* eslint-disable react/prop-types */
import "./components.scss"


const TextBoxCard = (props) => {
  return (
    <div className="text-box-card">
      <h3 className="text-box-card-heading">{props.title}</h3>
      <p className="text-box-card-content">{props.content}</p>
    </div>
  );
};

export default TextBoxCard;
