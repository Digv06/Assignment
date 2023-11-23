import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ListItem.css";

const ListItem = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://media-content.ccbp.in/website/react-assignment/resources.json"
      )
      .then((response) => {
        setData(response.data);
      });
  }, []);

  const renderResources = () => {
    return data.map((item) => (
      <div className="resource" key={item.title}>
        <h2>{item.title}</h2>
        <a href={item.link}>{item.link}</a>
        <p>{item.description}</p>
      </div>
    ));
  };

  return (
    <div className="container">
      <div className="resources">{renderResources()}</div>
    </div>
  );
};

export default ListItem;
