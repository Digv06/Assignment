import React, { useState } from "react";

const Liners = () => {
  const [liners, setLiners] = useState([
    {
      title: "IB studio trainees",
      link: "https://www.slack.studio trainees.com",
      iconUrl: "https://www.slack.iB studio trainees.com",
      tagName: "User",
      category: "slack",
      description: "This chaneel is for iß studio trainees team",
    },
  ]);

  const renderLiners = () => {
    return liners.map((liner) => (
      <div key={liner.title}>
        <h3>{liner.title}</h3>
        <a href={liner.link}>www.slack.studio trainees.com</a>
        <img src={liner.iconUrl} alt={liner.title} />
        <p>{liner.description}</p>
      </div>
    ));
  };

  return <div>{renderLiners()}</div>;
};

export default Liners;
