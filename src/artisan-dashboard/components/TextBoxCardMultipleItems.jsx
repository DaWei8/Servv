/* eslint-disable react/prop-types */

import "./components.scss"



const TextBoxCardMultipleItems = (props) => {
  return (
    <div className="text-box-card-multiple">
      <h3 className="text-box-card-multiple-heading">{props.title}</h3>
      <div className="text-box-card-multiple-content">
        {props.content.map((content, index) => (
          <div className="text-box-card-multiple" key={index}>
            <p>{content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextBoxCardMultipleItems;
