import React, { Component } from "react";

const Title = (props) => {
  const { title } = props;
  return (
    <div>
      <h6 className="card-title">{title}</h6>
    </div>
  );
};

export default Title;
