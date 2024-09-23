"use client";
import React, { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import PostCard from "@/components/PostCard";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

// Post Component
const Post = ({ params }) => {
  const { id } = params;
  const router = useRouter(); // Use useRouter hook for navigation

  const [post, setPost] = useState(null);
  const [nextPostId, setNextPostId] = useState(null);
  const [prevPostId, setPrevPostId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Fetch the post and related next/previous posts
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch current post
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const postData = await res.json();
        if (!postData.id) {
          router.push(`/not-found?id=${id}`);
        }

        // Fetch all posts to determine next/previous posts
        const allPostsRes = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const allPosts = await allPostsRes.json();

        // Find current post index
        const currentIndex = allPosts.findIndex((p) => p.id === parseInt(id));
        const nextId = allPosts[currentIndex + 1]?.id;
        const prevId = allPosts[currentIndex - 1]?.id;

        // Update state with post data and next/previous post IDs
        setPost(postData);
        setNextPostId(nextId);
        setPrevPostId(prevId);
        setError(false);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]); // Re-run when the post ID changes

  // Handle post not found or loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !post) {
    notFound();
  }

  return (
    <div>
      {/* Display the post */}
      <PostCard post={post} />

      {/* Previous and Next buttons */}
      <div style={{ marginTop: "20px" }}>
        {prevPostId && (
          <button className="btn btn-primary" onClick={() => router.push(`/postDetailsRoute/${prevPostId}`)}>
            <FontAwesomeIcon icon={faArrowLeft} /> Previous
          </button>
        )}
        {nextPostId && (
          <button
            className="btn btn-primary"
            onClick={() => router.push(`/postDetailsRoute/${nextPostId}`)}
            style={{ marginLeft: "10px" }}
          >
            Next <FontAwesomeIcon icon={faArrowRight} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Post;
