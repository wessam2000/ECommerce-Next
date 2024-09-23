"use client";
import { faHeart, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { Button, Card } from "react-bootstrap";

const PostCard = ({ post }) => {
  const [likes, setLikes] = React.useState(0);
  const handleLike = () => {
    setLikes(likes + 1);
  };
  return (
    <div className="col-md-4 mb-4">
      <Card className="h-100">
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
          <Link href={`/postDetailsRoute/${post.id}`}>
            <Button variant="secondary" className="ml-2">
              View Post <FontAwesomeIcon icon={faEye} />
            </Button>
          </Link>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary" onClick={handleLike}>
            Like <FontAwesomeIcon icon={faHeart} /> {likes}
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default PostCard;
