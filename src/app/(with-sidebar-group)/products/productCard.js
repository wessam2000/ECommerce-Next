"use client";
import Image from "next/image";
import React from "react";
import { Card } from "react-bootstrap";

const PostCard = ({name, image, description, price}) => {
  return (
    <div className="col-md-4 mb-4" style={{ position: "relative" }} >
      <Card style={{ height: "570px" }}  >
      <Image src={image} width={300} height={300} alt={name} />
        <Card.Body style={{ height: "300px" }}>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>price: $ {price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PostCard;
