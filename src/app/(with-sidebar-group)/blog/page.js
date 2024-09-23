import React from "react";
// import styles from "./";
import PostCard from "@/components/PostCard";
import { Row } from "react-bootstrap";
const Blog = async () => {
  //   const [posts, setPosts] = useState([]);
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //       const data = await res.json();
  //       setPosts(data);
  //     };
  //     fetchData();
  //   }, []);
  let posts;
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    posts = await res.json();
    
  } catch (error) {
    throw new Error('Error fetching posts');
  }
  // if (!posts) return <div>Loading...</div>;
  return (
    <Row>
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </Row>
  );
};

export default Blog;
