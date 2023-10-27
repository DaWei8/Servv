/* eslint-disable react/prop-types */
import "./ArtisanSupport.scss";
import { useState } from "react";
import { liveChatOptions } from "../../data/Datasets";

const ArtisanSupport = () => {
  return (
    <div className="artisan-support">
      <div className="artisan-support-container">
        <h1 className="artisam-support-heading">Live Chat & Support</h1>
        <div className="artisan-support-content">
          <StartLiveChat />
        </div>
      </div>
    </div>
  );
};

export default ArtisanSupport;

const StartLiveChat = () => {
  return (
    <div className="start-live-chat">
      <div className="start-live-chat-container">
        <h3 className="heading">Select specific option</h3>
        <div className="start-live-chat-content">
          <form action="submit" method="post">
            {liveChatOptions.map((content, index) => (
              <TextBoxCardSelection
                key={index}
                title={content.title}
                content={content.description}
              />
            ))}
            <button>Start Live Chat</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const TextBoxCardSelection = (props) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelection = (selection) => {
    setSelectedOption(selection);
  };
  return (
    <div className="text-box-card-selection">
      <div className="text-box-card-content">
        <h3 className="text-box-card-multiple-heading">{props.title}</h3>
        <p>{props.content}</p>
      </div>
      <input
        type="radio"
        name={props.title}
        value={props.content}
        checked={selectedOption === props.title}
        onChange={() => handleSelection(props.title)}
      />
    </div>
  );
};
