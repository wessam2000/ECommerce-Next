import PostCard from "@/components/PostCard";
import React from "react";
import { notFound } from "next/navigation";

//for Incremental Static Regeneration(ISR)
// export const revalidate = 3;

//for Dynamic Static Regeneration(DSR) 
// export const dynamic = "force-dynamic";

//for Dynamic Static Regeneration(DSR)in development
// export const fetchCache = "force-no-store";
export const generateStaticParams = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`).then(
    (res) => res.json()
  );
  //[{id:"1"},{id:"2"}]
  return res.map((post) => ({ id: String(post.id) }));
};

export async function generateMetadata({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  ).then((res) => res.json());

  return {
    title: res.title,
    description: res.body,
  };
}
const Post = async ({ params }) => {
  const { id } = params;
  let post = {};
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    post = await res.json();
  } catch (error) {
    notFound();
  }
 
  return (
    <div>
      <PostCard post={post} />
    </div>
  );
};

export default Post;
