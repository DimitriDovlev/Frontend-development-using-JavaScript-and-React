import React from "react";
import Title from "./Title";

const CardBody = (props) => {
  const { urlToImage, title, description, publishedAt } = props;

  return (
    <>
      <div className="card col-4">
        <div className="" style={{ width: "15rem" }}>
          <img
            className="card-img-top"
            src={urlToImage}
            width={150}
            height={150}
            alt="article_image"
          />
          <div className="card-body">
            <Title title={title} />
            <p className="card-text">{description}</p>
            <p className="card-text">Published at: {publishedAt}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardBody;
