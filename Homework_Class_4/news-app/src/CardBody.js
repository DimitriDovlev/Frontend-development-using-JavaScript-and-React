import React from "react";
import Title from "./Title";

const CardBody = (props) => {
  const { item } = props;
  return (
    <>
      <div className="" style={{ width: "15rem" }}>
        <img
          className="card-img-top"
          src={item.urlToImage}
          width={150}
          height={150}
          alt="article_image"
        />
        <div className="card-body">
          <Title title={item.title} />
          <p className="card-text">{item.description}</p>
          <p className="card-text">Published at: {item.publishedAt}</p>
        </div>
      </div>
    </>
  );
};

export default CardBody;
