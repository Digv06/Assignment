import React, { useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const [data, setData] = useState([
    {
      title: "Dropbox, Inc.",
      link: "https://www.dropbox.com",
      category: "Cloud Services",
      description: "Dropbox is a file hosting service",
    },
    {
      title: "Slack",
      link: "https://www.slack.com",
      category: "Cloud Services",
      description: "Slack brings the team together, wherever you are",
    },
  ]);

  const renderResources = () => {
    return data.map((item) => (
      <div className="resource" key={item.title}>
        <h2>{item.title}</h2>
        <a href={item.link}>{item.link}</a>
        <p>{item.description}</p>
      </div>
    ));
  };

  const handleAddItem = () => {
    const newItem = {
      title: "New Item",
      link: "https://www.example.com",
      category: "Cloud Services",
      description: "This is a new item.",
    };

    setData([...data, newItem]);
  };

  return (
    <div>
      <h1>NXT</h1>
      <button onClick={handleAddItem}>ADD ITEM</button>
      <div className="resources">
        <h3>Resources</h3>
        {data.map((item) => (
          <div className="resource" key={item.title}>
            <h2>{item.title}</h2>
            <a href={item.link}>{item.link}</a>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
