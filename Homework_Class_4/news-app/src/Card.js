import React from "react";
import CardBody from "./CardBody";

const Card = (props) => {
  const { items } = props;

  return (
    <>
      {items.map((item) => {
        <div className="card col-4" key={item.source.id}>
          <CardBody item={item} />;
        </div>;
      })}
    </>
  );
};

export default Card;
